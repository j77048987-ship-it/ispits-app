export type SessionMode = "practice" | "simulation" | "review";

/**
 * One answered question. UserProgress/analytics are always *derived* from a list of Attempts
 * rather than stored as separate mutable counters, so there is a single source of truth and no
 * risk of stats drifting out of sync with the underlying history.
 */
export interface Attempt {
  id: string;
  questionId: string;
  subject: string;
  sessionId: string;
  mode: SessionMode;
  selectedOptionId: string | null;
  isCorrect: boolean;
  timeSpentSeconds: number;
  timestamp: string; // ISO-8601
}

export interface SessionRecord {
  id: string;
  mode: SessionMode;
  subject: string | "mixed";
  startedAt: string;
  finishedAt: string | null;
  /** Only set for simulation sessions, mirroring the real exam's 0-20 scale per subject. */
  scoreOutOf20?: Record<string, number>;
}
