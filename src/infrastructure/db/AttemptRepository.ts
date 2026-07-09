import { db } from "./database";
import type { Attempt, SessionRecord } from "../../core/entities/Attempt";
import type { IAttemptRepository } from "../../core/repositories/IAttemptRepository";

export class AttemptRepository implements IAttemptRepository {
  async addMany(attempts: Attempt[]): Promise<void> {
    await db.attempts.bulkAdd(attempts);
  }

  async getAll(): Promise<Attempt[]> {
    return db.attempts.orderBy("timestamp").toArray();
  }

  async getBySubject(subject: string): Promise<Attempt[]> {
    return db.attempts.where("subject").equals(subject).toArray();
  }

  async getLatestByQuestion(questionId: string): Promise<Attempt | undefined> {
    const rows = await db.attempts.where("questionId").equals(questionId).toArray();
    if (!rows.length) return undefined;
    return rows.reduce((latest, row) => (row.timestamp > latest.timestamp ? row : latest));
  }

  async clearAll(): Promise<void> {
    await db.attempts.clear();
    await db.sessions.clear();
  }

  async saveSession(session: SessionRecord): Promise<void> {
    await db.sessions.put(session);
  }

  async getAllSessions(): Promise<SessionRecord[]> {
    return db.sessions.orderBy("startedAt").toArray();
  }
}
