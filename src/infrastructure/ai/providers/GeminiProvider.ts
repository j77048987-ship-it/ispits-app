import type { AIProvider, ExplainRequest } from "../AIProvider";
import { buildExplainPrompt } from "../promptBuilder";

/** NOTE: verify endpoint/model name against https://ai.google.dev/gemini-api/docs before shipping. */
export class GeminiProvider implements AIProvider {
  readonly id = "gemini";
  readonly displayName = "Gemini";

  constructor(private apiKey: string, private model: string = "gemini-2.0-flash") {}

  async isAvailable(): Promise<boolean> {
    return Boolean(this.apiKey);
  }

  async explain(request: ExplainRequest): Promise<string> {
    const prompt = buildExplainPrompt(request);
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent?key=${this.apiKey}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });
    if (!res.ok) throw new Error(`Gemini request failed: ${res.status}`);
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error("Gemini returned an empty response");
    return text.trim();
  }
}
