import type { Attempt, SessionRecord } from "../entities/Attempt";

export interface IAttemptRepository {
  addMany(attempts: Attempt[]): Promise<void>;
  getAll(): Promise<Attempt[]>;
  getBySubject(subject: string): Promise<Attempt[]>;
  getLatestByQuestion(questionId: string): Promise<Attempt | undefined>;
  clearAll(): Promise<void>;

  saveSession(session: SessionRecord): Promise<void>;
  getAllSessions(): Promise<SessionRecord[]>;
}
