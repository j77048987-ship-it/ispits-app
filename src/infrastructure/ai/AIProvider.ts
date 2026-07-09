import type { Question } from "../../core/entities/Question";
import type { SupportedLanguage } from "../../core/entities/Settings";

export interface ExplainRequest {
  question: Question;
  selectedOptionId: string | null;
  language: SupportedLanguage;
}

export interface GenerateQuestionRequest {
  subject: string;
  unit: string;
  difficulty: Question["difficulty"];
  /** Existing questions to avoid duplicating, per the anti-duplication requirement. */
  avoidTexts: string[];
}

/**
 * Strategy pattern: every concrete provider (local fallback, OpenAI, Claude, Gemini, ...)
 * implements this same shape, so the rest of the app never branches on "which provider".
 * Adding DeepSeek/Grok/Mistral/Ollama later is a new file that implements this interface plus
 * one line in `registry.ts` — see docs/ARCHITECTURE.md#ai-layer.
 */
export interface AIProvider {
  readonly id: string;
  readonly displayName: string;
  /** Local provider is always available; remote providers require a configured API key. */
  isAvailable(): Promise<boolean>;
  explain(request: ExplainRequest): Promise<string>;
  generateQuestion?(request: GenerateQuestionRequest): Promise<Question>;
}
