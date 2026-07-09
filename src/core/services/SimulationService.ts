import type { Question } from "../entities/Question";
import type { Attempt } from "../entities/Attempt";

/**
 * Mirrors the real concours structure confirmed from official/ministry-sourced guidance (see
 * docs/DATA_MODEL.md for sources): one scientific subject at coefficient 2, French at
 * coefficient 1, each scored out of 20, with any subject below 5/20 being eliminatory.
 * These numbers are the *real* exam's grading rules — everything else about a given sitting
 * (which questions, how many) is configurable so this scales from a 12-question demo pool to a
 * full bank without code changes.
 */
export const EXAM_RULES = {
  primarySubjectCoefficient: 2,
  frenchCoefficient: 1,
  maxScore: 20,
  eliminatoryThreshold: 5
} as const;

export interface SimulationSection {
  subject: string;
  questions: Question[];
  timeLimitSeconds: number;
}

export interface SimulationPlan {
  sections: SimulationSection[];
  totalTimeSeconds: number;
}

export interface SimulationSectionScore {
  subject: string;
  correct: number;
  total: number;
  scoreOutOf20: number;
  eliminatory: boolean;
}

export interface SimulationScoreReport {
  sections: SimulationSectionScore[];
  weightedAverage: number;
  eliminated: boolean;
}

export class SimulationService {
  /**
   * Builds a two-section plan (primary science subject + French), timing each section by
   * summing the pool's own `suggestedTimeSeconds`, so the clock scales automatically whether
   * the bank has 12 questions (demo) or 1000+ (production).
   */
  buildPlan(primarySubject: string, questionsBySubject: Record<string, Question[]>): SimulationPlan {
    const primary = questionsBySubject[primarySubject] ?? [];
    const french = questionsBySubject["fr"] ?? [];

    const sections: SimulationSection[] = [
      { subject: primarySubject, questions: primary, timeLimitSeconds: sumTime(primary) },
      { subject: "fr", questions: french, timeLimitSeconds: sumTime(french) }
    ];

    return { sections, totalTimeSeconds: sections.reduce((s, sec) => s + sec.timeLimitSeconds, 0) };
  }

  score(plan: SimulationPlan, attempts: Attempt[]): SimulationScoreReport {
    const sections = plan.sections.map((section): SimulationSectionScore => {
      const ids = new Set(section.questions.map((q) => q.id));
      const relevant = attempts.filter((a) => ids.has(a.questionId));
      const correct = relevant.filter((a) => a.isCorrect).length;
      const total = section.questions.length;
      const scoreOutOf20 = total ? round1((correct / total) * EXAM_RULES.maxScore) : 0;
      return {
        subject: section.subject,
        correct,
        total,
        scoreOutOf20,
        eliminatory: scoreOutOf20 < EXAM_RULES.eliminatoryThreshold
      };
    });

    const primary = sections[0];
    const french = sections[1];
    const weightedAverage =
      primary && french
        ? round1(
            (primary.scoreOutOf20 * EXAM_RULES.primarySubjectCoefficient + french.scoreOutOf20 * EXAM_RULES.frenchCoefficient) /
              (EXAM_RULES.primarySubjectCoefficient + EXAM_RULES.frenchCoefficient)
          )
        : 0;

    return {
      sections,
      weightedAverage,
      eliminated: sections.some((s) => s.eliminatory)
    };
  }
}

function sumTime(questions: Question[]): number {
  return questions.reduce((sum, q) => sum + q.suggestedTimeSeconds, 0);
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}
