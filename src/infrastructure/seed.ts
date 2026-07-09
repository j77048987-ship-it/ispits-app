import { container } from "./container";
import { ALL_SEED_QUESTIONS } from "../data/questions";

/**
 * Runs once on app start. Cheap no-op on every run after the first: `upsertMany` is a bulkPut
 * keyed by question id, so re-seeding after a question-bank update just adds/updates rows
 * without touching `attempts`/`sessions`/`settings` — required so bank updates never lose user
 * progress (see the source spec's "update sans perdre les données utilisateur" requirement).
 */
export async function seedQuestionBankIfNeeded(): Promise<void> {
  const existing = await container.questionRepository.count();
  if (existing >= ALL_SEED_QUESTIONS.length) return;
  await container.questionRepository.upsertMany(ALL_SEED_QUESTIONS);
}
