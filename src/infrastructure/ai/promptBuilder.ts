import type { ExplainRequest } from "./AIProvider";

const LANGUAGE_NAMES: Record<ExplainRequest["language"], string> = {
  ar: "Arabic",
  fr: "French",
  en: "English"
};

/** One shared prompt template so every provider is asked the same thing the same way (DRY). */
export function buildExplainPrompt({ question, selectedOptionId, language }: ExplainRequest): string {
  const chosen = question.options.find((o) => o.id === selectedOptionId)?.text ?? "no answer";
  return [
    "You are a patient tutor helping a Moroccan student preparing for the ISPITS nursing/health-institute entrance exam.",
    `Subject: ${question.subject}. Unit: ${question.unit}.`,
    `Question: "${question.text}"`,
    `Options: ${question.options.map((o) => `${o.id}) ${o.text}`).join(" | ")}`,
    `Correct answer id: ${question.correctOptionId}. Student picked: "${chosen}".`,
    `Respond in ${LANGUAGE_NAMES[language]}, under 100 words: give a slightly deeper, encouraging`,
    "explanation of the correct answer, and if the student's pick was wrong, name the likely",
    "misconception. Do not just restate the options."
  ].join(" ");
}
