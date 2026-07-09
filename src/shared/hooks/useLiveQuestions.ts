import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../infrastructure/db/database";
import type { Question } from "../../core/entities/Question";

/** Reactive so a future background bank update is reflected immediately, with no manual refetch. */
export function useLiveQuestions(): Question[] {
  const questions = useLiveQuery(() => db.questions.toArray(), [], []);
  return questions ?? [];
}
