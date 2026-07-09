export type SupportedLanguage = "ar" | "fr" | "en";
export type ThemeMode = "dark" | "light" | "system";
export type AIProviderId = "local" | "openai" | "claude" | "gemini";

export interface AIProviderConfig {
  provider: AIProviderId;
  /** Stored only in the local, encrypted-at-rest-by-the-OS IndexedDB store — never sent anywhere
   *  except directly to the chosen provider's own API from the user's device. */
  apiKey?: string;
  model?: string;
}

export interface AppSettings {
  language: SupportedLanguage;
  theme: ThemeMode;
  aiProvider: AIProviderConfig;
  hapticsEnabled: boolean;
  /** Opt-in only: the app works fully offline forever; this just enables background sync of the
   *  question bank (new/updated questions) when a connection is available. See ARCHITECTURE.md. */
  cloudSyncEnabled: boolean;
}

export const DEFAULT_SETTINGS: AppSettings = {
  language: "ar",
  theme: "dark",
  aiProvider: { provider: "local" },
  hapticsEnabled: true,
  cloudSyncEnabled: false
};
