import type { AIProvider, ExplainRequest } from "../AIProvider";
import { buildExplainPrompt } from "../promptBuilder";

/**
 * NOTE: verify the current model name against https://docs.claude.com before shipping. Calling
 * api.anthropic.com directly from a shipped mobile/PWA client also means the user's API key
 * lives in the request from their own device — that's expected for a bring-your-own-key design,
 * but make sure the key is only ever read from local settings and never logged or transmitted
 * anywhere else (see SettingsRepository).
 */
export class ClaudeProvider implements AIProvider {
  readonly id = "claude";
  readonly displayName = "Claude";

  constructor(private apiKey: string, private model: string = "claude-sonnet-4-6") {}

  async isAvailable(): Promise<boolean> {
    return Boolean(this.apiKey);
  }

  async explain(request: ExplainRequest): Promise<string> {
    const prompt = buildExplainPrompt(request);
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true"
      },
      body: JSON.stringify({
        model: this.model,
        max_tokens: 400,
        messages: [{ role: "user", content: prompt }]
      })
    });
    if (!res.ok) throw new Error(`Claude request failed: ${res.status}`);
    const data = await res.json();
    const text = (data?.content ?? [])
      .filter((block: { type: string }) => block.type === "text")
      .map((block: { text: string }) => block.text)
      .join("\n")
      .trim();
    if (!text) throw new Error("Claude returned an empty response");
    return text;
  }
}
