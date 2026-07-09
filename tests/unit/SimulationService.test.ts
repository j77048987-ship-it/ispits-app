import { describe, it, expect } from "vitest";
import { SimulationService, EXAM_RULES } from "../../src/core/services/SimulationService";
import type { Question } from "../../src/core/entities/Question";
import type { Attempt } from "../../src/core/entities/Attempt";

const sim = new SimulationService();

function stubQuestion(id: string, subject: string, suggestedTimeSeconds: number): Question {
  return {
    id,
    subject,
    unit: "Test",
    lesson: "Test",
    type: "qcm",
    difficulty: "medium",
    text: id,
    options: [{ id: "a", text: "A" }, { id: "b", text: "B" }],
    correctOptionId: "a",
    correctExplanation: "x",
    wrongExplanations: { b: "x" },
    keywords: [],
    suggestedTimeSeconds,
    estimatedFrequency: "unknown",
    references: [],
    sourceType: "original"
  };
}

function stubAttempt(questionId: string, subject: string, isCorrect: boolean): Attempt {
  return {
    id: `${questionId}-attempt`,
    questionId,
    subject,
    sessionId: "sim-1",
    mode: "simulation",
    selectedOptionId: isCorrect ? "a" : "b",
    isCorrect,
    timeSpentSeconds: 30,
    timestamp: new Date().toISOString()
  };
}

describe("SimulationService.buildPlan", () => {
  it("times each section by summing its questions' suggestedTimeSeconds", () => {
    const bySubject = {
      svt: [stubQuestion("s1", "svt", 50), stubQuestion("s2", "svt", 70)],
      fr: [stubQuestion("f1", "fr", 60)]
    };
    const plan = sim.buildPlan("svt", bySubject);
    expect(plan.sections[0]!.timeLimitSeconds).toBe(120);
    expect(plan.sections[1]!.timeLimitSeconds).toBe(60);
    expect(plan.totalTimeSeconds).toBe(180);
  });
});

describe("SimulationService.score", () => {
  it("matches the real exam's grading rules (coefficients 2:1, out of 20, 5/20 eliminatory)", () => {
    expect(EXAM_RULES.primarySubjectCoefficient).toBe(2);
    expect(EXAM_RULES.frenchCoefficient).toBe(1);
    expect(EXAM_RULES.maxScore).toBe(20);
    expect(EXAM_RULES.eliminatoryThreshold).toBe(5);
  });

  it("gives a perfect weighted average for a perfect run, and marks it not eliminated", () => {
    const bySubject = { svt: [stubQuestion("s1", "svt", 10), stubQuestion("s2", "svt", 10)], fr: [stubQuestion("f1", "fr", 10)] };
    const plan = sim.buildPlan("svt", bySubject);
    const attempts = [stubAttempt("s1", "svt", true), stubAttempt("s2", "svt", true), stubAttempt("f1", "fr", true)];
    const report = sim.score(plan, attempts);
    expect(report.weightedAverage).toBe(20);
    expect(report.eliminated).toBe(false);
  });

  it("applies the 2:1 weighting and flags eliminatory scores below 5/20", () => {
    const bySubject = { svt: [stubQuestion("s1", "svt", 10), stubQuestion("s2", "svt", 10)], fr: [stubQuestion("f1", "fr", 10)] };
    const plan = sim.buildPlan("svt", bySubject);
    // SVT: 1/2 correct -> 10/20. Français: 0/1 correct -> 0/20 (below the 5/20 threshold).
    const attempts = [stubAttempt("s1", "svt", true), stubAttempt("s2", "svt", false), stubAttempt("f1", "fr", false)];
    const report = sim.score(plan, attempts);
    expect(report.sections[0]).toMatchObject({ scoreOutOf20: 10, eliminatory: false });
    expect(report.sections[1]).toMatchObject({ scoreOutOf20: 0, eliminatory: true });
    // (10 * 2 + 0 * 1) / 3 = 6.7
    expect(report.weightedAverage).toBe(6.7);
    expect(report.eliminated).toBe(true);
  });
});
