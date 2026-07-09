import type { AIProviderConfig } from "../entities/Settings";
import type { Question } from "../entities/Question";
import { resolveProvider, localProvider } from "../../infrastructure/ai/registry";

export interface ExplanationResult {
  text: string;
  /** True when the configured remote provider actually answered; false whenever we fell back
   *  to the local bank (offline, no key, timeout, provider error — any reason at all). */
  fromRemote: boolean;
}

/**
 * This is the one rule the whole AI layer exists to satisfy: whatever goes wrong with a remote
 * provider (offline, invalid key, rate limit, timeout, provider outage...), the user must never
 * see an error and the app must never stop working. Every failure path below resolves to the
 * always-available local explanation instead of throwing.
 */
export class AIExplanationService {
  async explain(
    question: Question,
    selectedOptionId: string | null,
    language: "ar" | "fr" | "en",
    providerConfig: AIProviderConfig
  ): Promise<ExplanationResult> {
    const provider = resolveProvider(providerConfig);

    if (provider.id === "local") {
      const text = await localProvider.explain({ question, selectedOptionId, language });
      return { text, fromRemote: false };
    }

    try {
      const available = await withTimeout(provider.isAvailable(), 2000);
      if (!available) throw new Error("provider unavailable");

      const text = await withTimeout(provider.explain({ question, selectedOptionId, language }), 12000);
      return { text, fromRemote: true };
    } catch {
      // Silent, total fallback — no error surfaces to the UI layer at all.
      const text = await localProvider.explain({ question, selectedOptionId, language });
      return { text, fromRemote: false };
    }
  }
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error("timeout")), ms))
  ]);
}
