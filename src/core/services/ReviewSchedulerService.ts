import type { Attempt } from "../entities/Attempt";
import type { Question } from "../entities/Question";

export interface ReviewEntry {
  question: Question;
  /** How many times in a row the most recent attempts on this question were wrong. */
  missStreak: number;
  lastAttemptAt: string;
}

/**
 * Implements the "smart review" requirement: resurface questions the user has gotten wrong more
 * than once, stop resurfacing them once they're answered correctly. This is a small Leitner-box
 * (2 boxes: "needs review" / "mastered") rather than a full SM-2 spaced-repetition algorithm —
 * intentionally simple (KISS) since the source requirement is "show what's still being missed",
 * not a full spaced-repetition product. Swapping in SM-2 later only means editing this file.
 */
export class ReviewSchedulerService {
  buildQueue(questions: Question[], attempts: Attempt[]): ReviewEntry[] {
    const byQuestion = new Map<string, Attempt[]>();
    for (const a of attempts) {
      byQuestion.set(a.questionId, [...(byQuestion.get(a.questionId) ?? []), a]);
    }

    const entries: ReviewEntry[] = [];
    for (const question of questions) {
      const history = (byQuestion.get(question.id) ?? []).sort((a, b) =>
        a.timestamp.localeCompare(b.timestamp)
      );
      if (!history.length) continue;

      const last = history[history.length - 1]!;
      if (last.isCorrect) continue; // mastered for now — drop out of the review queue

      let missStreak = 0;
      for (let i = history.length - 1; i >= 0; i--) {
        if (history[i]!.isCorrect) break;
        missStreak += 1;
      }

      entries.push({ question, missStreak, lastAttemptAt: last.timestamp });
    }

    // Worst-missed and longest-untouched first, so the queue is actually ordered by urgency.
    return entries.sort((a, b) => b.missStreak - a.missStreak || a.lastAttemptAt.localeCompare(b.lastAttemptAt));
  }
}
