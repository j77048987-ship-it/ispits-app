import type { AIProvider, ExplainRequest } from "../AIProvider";

/**
 * The offline fallback. This is what makes the "no error ever shown to the user, keep working
 * fully offline" requirement true: whatever else fails, this provider always returns something
 * useful immediately, using only data already on the device.
 */
export class LocalProvider implements AIProvider {
  readonly id = "local";
  readonly displayName = "Local question bank";

  async isAvailable(): Promise<boolean> {
    return true;
  }

  async explain({ question, selectedOptionId }: ExplainRequest): Promise<string> {
    if (selectedOptionId && selectedOptionId !== question.correctOptionId) {
      const wrong = question.wrongExplanations[selectedOptionId];
      if (wrong) return `${question.correctExplanation}\n\n${wrong}`;
    }
    return question.correctExplanation;
  }
}
