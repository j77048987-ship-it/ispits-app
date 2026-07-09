import { db } from "./database";
import type { Question } from "../../core/entities/Question";
import type { IQuestionRepository, QuestionFilter } from "../../core/repositories/IQuestionRepository";

export class QuestionRepository implements IQuestionRepository {
  async getAll(): Promise<Question[]> {
    return db.questions.toArray();
  }

  async getById(id: string): Promise<Question | undefined> {
    return db.questions.get(id);
  }

  async find(filter: QuestionFilter): Promise<Question[]> {
    let collection = filter.subject
      ? db.questions.where("subject").equals(filter.subject)
      : db.questions.toCollection();

    let results = await collection.toArray();

    if (filter.difficulty) {
      results = results.filter((q) => q.difficulty === filter.difficulty);
    }
    if (filter.unit) {
      results = results.filter((q) => q.unit === filter.unit);
    }
    if (filter.excludeIds?.length) {
      const exclude = new Set(filter.excludeIds);
      results = results.filter((q) => !exclude.has(q.id));
    }
    if (filter.limit) {
      results = results.slice(0, filter.limit);
    }
    return results;
  }

  async count(subject?: string): Promise<number> {
    if (subject) return db.questions.where("subject").equals(subject).count();
    return db.questions.count();
  }

  async upsertMany(questions: Question[]): Promise<void> {
    // bulkPut upserts by primary key, so re-running the seed (e.g. after a question-bank update)
    // never duplicates rows and never touches the separate `attempts` table, per the requirement
    // that the bank must be updatable without losing user progress/statistics.
    await db.questions.bulkPut(questions);
  }
}
