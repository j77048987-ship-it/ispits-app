import Dexie, { type EntityTable } from "dexie";
import type { Question } from "../../core/entities/Question";
import type { Attempt, SessionRecord } from "../../core/entities/Attempt";
import type { AppSettings } from "../../core/entities/Settings";

interface SettingsRow {
  key: "app-settings";
  value: AppSettings;
}

/**
 * The whole app is offline-first: every read/write goes through IndexedDB via Dexie, which
 * works identically inside a plain browser, an installed PWA, and the Capacitor Android
 * WebView. There is deliberately no network call anywhere in this file — see
 * docs/ARCHITECTURE.md for how an optional cloud-sync layer could hang off `cloudSyncEnabled`
 * later without touching this schema.
 */
export class AppDatabase extends Dexie {
  questions!: EntityTable<Question, "id">;
  attempts!: EntityTable<Attempt, "id">;
  sessions!: EntityTable<SessionRecord, "id">;
  settings!: EntityTable<SettingsRow, "key">;

  constructor() {
    super("ispits_prep_db");

    this.version(1).stores({
      // Compound/multi-entry indexes chosen to match the query patterns actually used by the
      // repositories below (filter by subject+difficulty, look up latest attempt per question).
      questions: "id, subject, unit, difficulty, *keywords",
      attempts: "id, questionId, subject, sessionId, timestamp",
      sessions: "id, mode, startedAt",
      settings: "key"
    });
  }
}

export const db = new AppDatabase();
