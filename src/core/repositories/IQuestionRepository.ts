import type { Question, Difficulty } from "../entities/Question";

export interface QuestionFilter {
  subject?: string;
  difficulty?: Difficulty;
  unit?: string;
  excludeIds?: string[];
  limit?: number;
}

/**
 * Repository pattern: every feature depends on this interface, never on Dexie directly. That
 * makes it possible to swap the storage engine (e.g. for a native SQLite plugin on Android)
 * without touching a single UI component. See docs/ARCHITECTURE.md.
 */
export interface IQuestionRepository {
  getAll(): Promise<Question[]>;
  getById(id: string): Promise<Question | undefined>;
  find(filter: QuestionFilter): Promise<Question[]>;
  count(subject?: string): Promise<number>;
  /** Upserts questions (by id) — used both for seeding on first run and for future bank updates. */
  upsertMany(questions: Question[]): Promise<void>;
}
