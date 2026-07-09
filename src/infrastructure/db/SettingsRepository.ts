import { db } from "./database";
import { DEFAULT_SETTINGS, type AppSettings } from "../../core/entities/Settings";
import type { ISettingsRepository } from "../../core/repositories/ISettingsRepository";

const KEY = "app-settings" as const;

export class SettingsRepository implements ISettingsRepository {
  async get(): Promise<AppSettings> {
    const row = await db.settings.get(KEY);
    return row ? { ...DEFAULT_SETTINGS, ...row.value } : DEFAULT_SETTINGS;
  }

  async update(patch: Partial<AppSettings>): Promise<AppSettings> {
    const current = await this.get();
    const next = { ...current, ...patch };
    await db.settings.put({ key: KEY, value: next });
    return next;
  }

  async reset(): Promise<AppSettings> {
    await db.settings.put({ key: KEY, value: DEFAULT_SETTINGS });
    return DEFAULT_SETTINGS;
  }
}
