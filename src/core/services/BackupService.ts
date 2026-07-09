import type { IAttemptRepository } from "../repositories/IAttemptRepository";
import type { ISettingsRepository } from "../repositories/ISettingsRepository";
import type { Attempt, SessionRecord } from "../entities/Attempt";
import type { AppSettings } from "../entities/Settings";

export interface BackupPayload {
  formatVersion: 1;
  exportedAt: string;
  attempts: Attempt[];
  sessions: SessionRecord[];
  settings: AppSettings;
}

/**
 * Backs up everything *except* the question bank itself (the bank ships with the app / updates
 * separately, per the requirement that bank updates must not disturb user data). Restoring is
 * additive for attempts (bulk add, duplicates by id are simply skipped by Dexie's put semantics
 * upstream) so importing an old backup can never silently erase newer local progress.
 */
export class BackupService {
  constructor(
    private attemptRepository: IAttemptRepository,
    private settingsRepository: ISettingsRepository
  ) {}

  async exportAll(): Promise<BackupPayload> {
    const [attempts, sessions, settings] = await Promise.all([
      this.attemptRepository.getAll(),
      this.attemptRepository.getAllSessions(),
      this.settingsRepository.get()
    ]);
    return { formatVersion: 1, exportedAt: new Date().toISOString(), attempts, sessions, settings };
  }

  async exportAsJSONString(): Promise<string> {
    return JSON.stringify(await this.exportAll(), null, 2);
  }

  async importFromJSONString(json: string): Promise<void> {
    const payload = JSON.parse(json) as BackupPayload;
    if (payload.formatVersion !== 1) {
      throw new Error(`Unsupported backup format version: ${String(payload.formatVersion)}`);
    }
    if (payload.attempts.length) await this.attemptRepository.addMany(payload.attempts);
    for (const session of payload.sessions) await this.attemptRepository.saveSession(session);
    if (payload.settings) await this.settingsRepository.update(payload.settings);
  }
}
