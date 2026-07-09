import type { AppSettings } from "../entities/Settings";

export interface ISettingsRepository {
  get(): Promise<AppSettings>;
  update(patch: Partial<AppSettings>): Promise<AppSettings>;
  reset(): Promise<AppSettings>;
}
