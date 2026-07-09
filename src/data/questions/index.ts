import { SVT_QUESTIONS } from "./svt";
import { FRANCAIS_QUESTIONS } from "./francais";
import type { Question } from "../../core/entities/Question";

/**
 * v1 seed bank: 32 original questions (16 SVT + 16 Français). This is intentionally a *seed*,
 * not the 500+500 target from the spec — see docs/ROADMAP.md for why generating hundreds more
 * unreviewed questions in one pass would trade quality for quantity, and for the recommended
 * path to scale this responsibly (batches of AI-drafted + human-reviewed questions, ideally
 * cross-checked against real past exams by a subject-matter teacher).
 *
 * Adding more is purely additive: push more `Question` objects into a subject file (or a new
 * one) and call `seedQuestionBank()` again — `upsertMany` is keyed by `id`, so it never
 * duplicates existing rows or touches user progress.
 */
export const ALL_SEED_QUESTIONS: Question[] = [...SVT_QUESTIONS, ...FRANCAIS_QUESTIONS];

export { SVT_QUESTIONS, FRANCAIS_QUESTIONS };
