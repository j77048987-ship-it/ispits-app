import type { AIProvider, ExplainRequest } from "../AIProvider";
import { buildExplainPrompt } from "../promptBuilder";

/**
 * NOTE: endpoint/model names for third-party providers change over time. Verify against
 * https://platform.openai.com/docs before shipping — this targets the Chat Completions API,
 * which is stable and simple, but a newer/cheaper model name may exist by the time you read this.
 */
export class OpenAIProvider implements AIProvider {
  readonly id = "openai";
  readonly displayName = "OpenAI";

  constructor(private apiKey: string, private model: string = "gpt-4o-mini") {}

  async isAvailable(): Promise<boolean> {
    return Boolean(this.apiKey);
  }

  async explain(request: ExplainRequest): Promise<string> {
    const prompt = buildExplainPrompt(request);
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        model: this.model,
        messages: [{ role: "user", content: prompt }],
        max_tokens: 400
      })
    });
    if (!res.ok) throw new Error(`OpenAI request failed: ${res.status}`);
    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content;
    if (!text) throw new Error("OpenAI returned an empty response");
    return text.trim();
  }
}
