import type { Attempt } from "../entities/Attempt";

export interface SubjectStats {
  subject: string;
  attempted: number;
  correct: number;
  accuracyPercent: number;
  averageTimeSeconds: number;
}

export interface WeaknessEntry {
  subject: string;
  unit: string;
  accuracyPercent: number;
  attempted: number;
}

export interface DailyPoint {
  date: string; // YYYY-MM-DD
  attempted: number;
  accuracyPercent: number;
}

/**
 * Deliberately stateless and pure: every method takes the attempt history in and returns a
 * computed value, so there is exactly one source of truth (the `attempts` table) and dashboard
 * numbers can never drift out of sync with it. Cheap enough to recompute on every render for
 * realistic data volumes (thousands of attempts); memoize at the call site if that ever changes.
 */
export class AnalyticsService {
  overallAccuracy(attempts: Attempt[]): number {
    if (!attempts.length) return 0;
    return round1((attempts.filter((a) => a.isCorrect).length / attempts.length) * 100);
  }

  bySubject(attempts: Attempt[]): SubjectStats[] {
    const subjects = [...new Set(attempts.map((a) => a.subject))];
    return subjects.map((subject) => {
      const list = attempts.filter((a) => a.subject === subject);
      const correct = list.filter((a) => a.isCorrect).length;
      return {
        subject,
        attempted: list.length,
        correct,
        accuracyPercent: list.length ? round1((correct / list.length) * 100) : 0,
        averageTimeSeconds: list.length
          ? round1(list.reduce((sum, a) => sum + a.timeSpentSeconds, 0) / list.length)
          : 0
      };
    });
  }

  /** Units with the lowest accuracy, meant to drive "focus on this next" suggestions. */
  weakestUnits(
    attempts: Attempt[],
    unitBySubjectAndQuestion: Map<string, string>,
    minAttempts = 2
  ): WeaknessEntry[] {
    const key = (subject: string, unit: string) => `${subject}::${unit}`;
    const buckets = new Map<string, { subject: string; unit: string; correct: number; total: number }>();

    for (const a of attempts) {
      const unit = unitBySubjectAndQuestion.get(a.questionId);
      if (!unit) continue;
      const k = key(a.subject, unit);
      const bucket = buckets.get(k) ?? { subject: a.subject, unit, correct: 0, total: 0 };
      bucket.total += 1;
      if (a.isCorrect) bucket.correct += 1;
      buckets.set(k, bucket);
    }

    return [...buckets.values()]
      .filter((b) => b.total >= minAttempts)
      .map((b) => ({
        subject: b.subject,
        unit: b.unit,
        accuracyPercent: round1((b.correct / b.total) * 100),
        attempted: b.total
      }))
      .sort((a, b) => a.accuracyPercent - b.accuracyPercent);
  }

  /** Current day streak: consecutive days up to and including today with at least one attempt. */
  currentStreak(attempts: Attempt[]): number {
    if (!attempts.length) return 0;
    const days = new Set(attempts.map((a) => a.timestamp.slice(0, 10)));
    let count = 0;
    const cursor = new Date();
    // 400-day hard cap avoids any chance of an infinite loop on malformed data.
    for (let i = 0; i < 400; i++) {
      const key = cursor.toISOString().slice(0, 10);
      if (!days.has(key)) break;
      count += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
    return count;
  }

  dailyProgress(attempts: Attempt[], lastNDays = 30): DailyPoint[] {
    const byDay = new Map<string, Attempt[]>();
    for (const a of attempts) {
      const day = a.timestamp.slice(0, 10);
      byDay.set(day, [...(byDay.get(day) ?? []), a]);
    }
    const days = [...byDay.keys()].sort().slice(-lastNDays);
    return days.map((date) => {
      const list = byDay.get(date)!;
      const correct = list.filter((a) => a.isCorrect).length;
      return { date, attempted: list.length, accuracyPercent: round1((correct / list.length) * 100) };
    });
  }
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}
