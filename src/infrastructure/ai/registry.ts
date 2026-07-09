import type { AIProvider } from "./AIProvider";
import type { AIProviderConfig } from "../../core/entities/Settings";
import { LocalProvider } from "./providers/LocalProvider";
import { OpenAIProvider } from "./providers/OpenAIProvider";
import { ClaudeProvider } from "./providers/ClaudeProvider";
import { GeminiProvider } from "./providers/GeminiProvider";

const localProvider = new LocalProvider();

/**
 * Factory: turns the user's saved settings into a live provider instance. To add DeepSeek,
 * Grok, Mistral, Ollama, etc. later: write a class implementing `AIProvider` under
 * `./providers/`, then add one case here.
 */
export function resolveProvider(config: AIProviderConfig): AIProvider {
  switch (config.provider) {
    case "openai":
      return config.apiKey ? new OpenAIProvider(config.apiKey, config.model) : localProvider;
    case "claude":
      return config.apiKey ? new ClaudeProvider(config.apiKey, config.model) : localProvider;
    case "gemini":
      return config.apiKey ? new GeminiProvider(config.apiKey, config.model) : localProvider;
    case "local":
    default:
      return localProvider;
  }
}

export { localProvider };
