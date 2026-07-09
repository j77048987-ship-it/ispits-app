import { describe, it, expect } from "vitest";
import { AnalyticsService } from "../../src/core/services/AnalyticsService";
import type { Attempt } from "../../src/core/entities/Attempt";

const analytics = new AnalyticsService();

function attempt(overrides: Partial<Attempt>): Attempt {
  return {
    id: "a1",
    questionId: "q1",
    subject: "svt",
    sessionId: "s1",
    mode: "practice",
    selectedOptionId: "a",
    isCorrect: true,
    timeSpentSeconds: 10,
    timestamp: new Date().toISOString(),
    ...overrides
  };
}

describe("AnalyticsService.overallAccuracy", () => {
  it("returns 0 for no attempts", () => {
    expect(analytics.overallAccuracy([])).toBe(0);
  });

  it("computes the percentage of correct attempts", () => {
    const attempts = [attempt({ isCorrect: true }), attempt({ isCorrect: true }), attempt({ isCorrect: true }), attempt({ isCorrect: false })];
    expect(analytics.overallAccuracy(attempts)).toBe(75);
  });
});

describe("AnalyticsService.bySubject", () => {
  it("splits attempts per subject and computes accuracy/average time independently", () => {
    const attempts = [
      attempt({ subject: "svt", isCorrect: true, timeSpentSeconds: 10 }),
      attempt({ subject: "svt", isCorrect: false, timeSpentSeconds: 20 }),
      attempt({ subject: "fr", isCorrect: true, timeSpentSeconds: 30 })
    ];
    const stats = analytics.bySubject(attempts);
    const svt = stats.find((s) => s.subject === "svt")!;
    const fr = stats.find((s) => s.subject === "fr")!;

    expect(svt.attempted).toBe(2);
    expect(svt.accuracyPercent).toBe(50);
    expect(svt.averageTimeSeconds).toBe(15);
    expect(fr.accuracyPercent).toBe(100);
  });
});

describe("AnalyticsService.currentStreak", () => {
  it("counts consecutive days ending today", () => {
    const today = new Date().toISOString();
    const yesterday = new Date(Date.now() - 86_400_000).toISOString();
    const threeDaysAgo = new Date(Date.now() - 3 * 86_400_000).toISOString();
    const attempts = [attempt({ timestamp: today }), attempt({ timestamp: yesterday }), attempt({ timestamp: threeDaysAgo })];
    // the gap two days ago breaks the streak before it reaches the three-day-old attempt
    expect(analytics.currentStreak(attempts)).toBe(2);
  });

  it("returns 0 when there is no attempt today", () => {
    const twoDaysAgo = new Date(Date.now() - 2 * 86_400_000).toISOString();
    expect(analytics.currentStreak([attempt({ timestamp: twoDaysAgo })])).toBe(0);
  });
});

describe("AnalyticsService.dailyProgress", () => {
  it("groups attempts by calendar day and computes per-day accuracy", () => {
    const attempts = [
      attempt({ timestamp: "2026-01-01T10:00:00.000Z", isCorrect: true }),
      attempt({ timestamp: "2026-01-01T11:00:00.000Z", isCorrect: false }),
      attempt({ timestamp: "2026-01-02T10:00:00.000Z", isCorrect: true })
    ];
    const points = analytics.dailyProgress(attempts);
    expect(points).toHaveLength(2);
    expect(points[0]).toMatchObject({ date: "2026-01-01", attempted: 2, accuracyPercent: 50 });
    expect(points[1]).toMatchObject({ date: "2026-01-02", attempted: 1, accuracyPercent: 100 });
  });
});
