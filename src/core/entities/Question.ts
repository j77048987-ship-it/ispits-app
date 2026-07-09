/**
 * Core domain types for the question bank.
 *
 * Design notes:
 * - `subject` is a plain string (not a fixed union) on purpose: the spec requires adding new
 *   subjects later (e.g. Physique-Chimie) without touching the schema or the database layer.
 *   `KNOWN_SUBJECTS` below is only used for UI ordering/labels, not for validation.
 * - `sourceType` and `estimatedFrequency` exist so the app is honest about provenance: nothing
 *   in the seed data is a verified real past-exam question, so we never claim it is. See
 *   docs/DATA_MODEL.md for the full rationale.
 */

export type Difficulty = "easy" | "medium" | "hard";

export type QuestionType = "qcm" | "true_false" | "short_answer";

/**
 * Where a question record actually came from. This is surfaced in the UI/exports so nothing is
 * ever misrepresented as a verified past exam question when it isn't.
 * - "original": written from scratch based on the official curriculum, not copied from any exam.
 * - "past-exam-inspired": mimics the style/topic of a real past exam without reproducing it.
 * - "verified-past-exam": an authenticated past exam question, entered with its real source
 *   (e.g. transcribed by a teacher who reviewed the original). None of the v1 seed data uses
 *   this value — see docs/ROADMAP.md for how to responsibly add real past exams later.
 */
export type SourceType = "original" | "past-exam-inspired" | "verified-past-exam";

export type FrequencyEstimate = "unknown" | "estimate-low" | "estimate-medium" | "estimate-high";

export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  subject: string;
  unit: string;
  lesson: string;
  type: QuestionType;
  difficulty: Difficulty;
  text: string;
  options: QuestionOption[];
  correctOptionId: string;
  /** Why the correct option is correct. */
  correctExplanation: string;
  /** Why each *other* option is wrong, keyed by option id. Required for every non-correct option. */
  wrongExplanations: Record<string, string>;
  keywords: string[];
  suggestedTimeSeconds: number;
  estimatedFrequency: FrequencyEstimate;
  /** Human-readable notes on where this question's content is grounded (curriculum, topic list, etc). */
  references: string[];
  /** Year a *real* exam used this question/topic, only ever set for verified-past-exam records. */
  verifiedYear?: number;
  sourceType: SourceType;
}

export const KNOWN_SUBJECTS: { id: string; labelKey: string }[] = [
  { id: "svt", labelKey: "subject.svt" },
  { id: "fr", labelKey: "subject.fr" }
];

export function isAnswerCorrect(question: Question, optionId: string | null): boolean {
  return optionId !== null && optionId === question.correctOptionId;
}
