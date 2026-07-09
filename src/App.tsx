import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { seedQuestionBankIfNeeded } from "./infrastructure/seed";
import { container } from "./infrastructure/container";
import { useSettings } from "./shared/hooks/useSettings";
import { useLiveAttempts } from "./shared/hooks/useLiveAttempts";
import { useLiveQuestions } from "./shared/hooks/useLiveQuestions";
import { useOnlineStatus } from "./shared/hooks/useOnlineStatus";
import { isRTL as computeIsRTL } from "./infrastructure/i18n";
import { SimulationService, type SimulationPlan, type SimulationScoreReport } from "./core/services/SimulationService";
import type { Question } from "./core/entities/Question";
import type { Attempt } from "./core/entities/Attempt";

import { TopBar } from "./shared/components/TopBar";
import { BottomNav, type NavKey } from "./shared/components/BottomNav";
import { QuestionSessionRunner } from "./shared/components/QuestionSessionRunner";
import { DashboardPage } from "./features/dashboard/DashboardPage";
import { PracticeSetupPage } from "./features/practice/PracticeSetupPage";
import { SessionSummaryPage } from "./features/practice/SessionSummaryPage";
import { SimulationIntroPage } from "./features/simulation/SimulationIntroPage";
import { SimulationInstructionsPage } from "./features/simulation/SimulationInstructionsPage";
import { SimulationTransitionPage } from "./features/simulation/SimulationTransitionPage";
import { SimulationResultsPage } from "./features/simulation/SimulationResultsPage";
import { ReviewPage } from "./features/review/ReviewPage";
import { SettingsPage } from "./features/settings/SettingsPage";

type View =
  | { name: "dashboard" }
  | { name: "practice-setup" }
  | { name: "practice-session"; pool: Question[]; sessionId: string }
  | { name: "review-session"; pool: Question[]; sessionId: string }
  | { name: "session-summary"; attempts: Attempt[] }
  | { name: "simulation-intro" }
  | { name: "simulation-instructions" }
  | { name: "simulation-section"; sectionIndex: 0 | 1 }
  | { name: "simulation-transition" }
  | { name: "simulation-results"; report: SimulationScoreReport }
  | { name: "review" }
  | { name: "settings" };

const simulationService = new SimulationService();

function groupBySubject(questions: Question[]): Record<string, Question[]> {
  return questions.reduce<Record<string, Question[]>>((acc, q) => {
    (acc[q.subject] ??= []).push(q);
    return acc;
  }, {});
}

export default function App() {
  const { t } = useTranslation();
  const { settings, loaded: settingsLoaded, update: updateSettings } = useSettings();
  const attempts = useLiveAttempts();
  const allQuestions = useLiveQuestions();
  const isOnline = useOnlineStatus();

  const [seeded, setSeeded] = useState(false);
  const [view, setView] = useState<View>({ name: "dashboard" });
  const [simPlan, setSimPlan] = useState<SimulationPlan | null>(null);
  const [simAttempts, setSimAttempts] = useState<Attempt[]>([]);

  useEffect(() => {
    seedQuestionBankIfNeeded().then(() => setSeeded(true));
  }, []);

  const isRTL = computeIsRTL(settings.language);
  const ready = settingsLoaded && seeded;

  const navKey: NavKey = useMemo(() => {
    switch (view.name) {
      case "practice-setup":
      case "practice-session":
        return "practice";
      case "simulation-intro":
      case "simulation-instructions":
      case "simulation-section":
      case "simulation-transition":
      case "simulation-results":
        return "simulation";
      case "review":
      case "review-session":
        return "review";
      case "settings":
        return "settings";
      default:
        return "dashboard";
    }
  }, [view.name]);

  const showBottomNav = !["practice-session", "review-session", "simulation-section"].includes(view.name);

  const handleNavigate = (key: NavKey) => {
    if (key === "dashboard") setView({ name: "dashboard" });
    else if (key === "practice") setView({ name: "practice-setup" });
    else if (key === "simulation") {
      // Always start from a clean slate: without this, re-entering the tab after a finished
      // simulation would leave `simPlan` set, and the intro screen (gated on simPlan === null)
      // would never render.
      setSimPlan(null);
      setSimAttempts([]);
      setView({ name: "simulation-intro" });
    } else if (key === "review") setView({ name: "review" });
    else if (key === "settings") setView({ name: "settings" });
  };

  const persistAndSummarize = async (finished: Attempt[]) => {
    await container.attemptRepository.addMany(finished);
    setView({ name: "session-summary", attempts: finished });
  };

  const startSimulation = () => {
    const plan = simulationService.buildPlan("svt", groupBySubject(allQuestions));
    setSimPlan(plan);
    setSimAttempts([]);
    setView({ name: "simulation-section", sectionIndex: 0 });
  };

  const finishSimulationSection = async (sectionIndex: 0 | 1, finished: Attempt[]) => {
    const combined = [...simAttempts, ...finished];
    setSimAttempts(combined);
    await container.attemptRepository.addMany(finished);

    if (sectionIndex === 0 && simPlan && simPlan.sections.length > 1) {
      setView({ name: "simulation-transition" });
    } else if (simPlan) {
      const report = simulationService.score(simPlan, combined);
      await container.attemptRepository.saveSession({
        id: `sim-${Date.now()}`,
        mode: "simulation",
        subject: "mixed",
        startedAt: new Date().toISOString(),
        finishedAt: new Date().toISOString(),
        scoreOutOf20: Object.fromEntries(report.sections.map((s) => [s.subject, s.scoreOutOf20]))
      });
      setView({ name: "simulation-results", report });
    }
  };

  const resetAllData = async () => {
    // eslint-disable-next-line no-alert -- simple, dependency-free confirm is appropriate for a
    // single destructive local action; see docs/ARCHITECTURE.md for why no modal library is used.
    if (!window.confirm(t("settings.resetConfirm"))) return;
    await container.attemptRepository.clearAll();
    await container.settingsRepository.reset();
    setView({ name: "dashboard" });
  };

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <span className="text-sm opacity-60">{t("common.loading")}</span>
      </div>
    );
  }

  const totalSimQuestions = simPlan ? simPlan.sections.reduce((s, sec) => s + sec.questions.length, 0) : 0;

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className={settings.theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <div className="max-w-md mx-auto min-h-screen flex flex-col">
          <TopBar
            theme={settings.theme === "system" ? "dark" : settings.theme}
            onToggleTheme={() => updateSettings({ theme: settings.theme === "dark" ? "light" : "dark" })}
            isOnline={isOnline}
          />

          <main className={`flex-1 px-4 py-4 ${showBottomNav ? "pb-24" : "pb-6"}`}>
            {view.name === "dashboard" && (
              <DashboardPage attempts={attempts} onStartPractice={() => setView({ name: "practice-setup" })} />
            )}

            {view.name === "practice-setup" && (
              <PracticeSetupPage
                allQuestions={allQuestions}
                onStart={(pool) => setView({ name: "practice-session", pool, sessionId: `practice-${Date.now()}` })}
              />
            )}

            {view.name === "practice-session" && (
              <QuestionSessionRunner
                questions={view.pool}
                mode="practice"
                sessionId={view.sessionId}
                settings={settings}
                isRTL={isRTL}
                onFinish={persistAndSummarize}
              />
            )}

            {view.name === "review-session" && (
              <QuestionSessionRunner
                questions={view.pool}
                mode="review"
                sessionId={view.sessionId}
                settings={settings}
                isRTL={isRTL}
                onFinish={persistAndSummarize}
              />
            )}

            {view.name === "session-summary" && (
              <SessionSummaryPage
                attempts={view.attempts}
                onRetry={() => setView({ name: "practice-setup" })}
                onBackToDashboard={() => setView({ name: "dashboard" })}
              />
            )}

            {view.name === "simulation-intro" && (
              <SimulationIntroPage
                plan={simulationService.buildPlan("svt", groupBySubject(allQuestions))}
                onStart={() => setView({ name: "simulation-instructions" })}
              />
            )}

            {view.name === "simulation-instructions" && (
              <SimulationInstructionsPage onConfirm={startSimulation} />
            )}

            {view.name === "simulation-section" && simPlan && (
              <QuestionSessionRunner
                key={view.sectionIndex}
                questions={simPlan.sections[view.sectionIndex]?.questions ?? []}
                mode="simulation"
                sessionId={`sim-${Date.now()}-${view.sectionIndex}`}
                timeLimitSeconds={simPlan.sections[view.sectionIndex]?.timeLimitSeconds}
                settings={settings}
                isRTL={isRTL}
                revealFeedback={false}
                questionNumberOffset={view.sectionIndex === 1 ? (simPlan.sections[0]?.questions.length ?? 0) : 0}
                totalQuestionCountOverride={totalSimQuestions}
                onFinish={(finished) => finishSimulationSection(view.sectionIndex, finished)}
              />
            )}

            {view.name === "simulation-transition" && simPlan && (
              <SimulationTransitionPage
                isRTL={isRTL}
                finishedSubjectLabel={t(`subject.${simPlan.sections[0]?.subject}`, simPlan.sections[0]?.subject ?? "")}
                nextSubjectLabel={t(`subject.${simPlan.sections[1]?.subject}`, simPlan.sections[1]?.subject ?? "")}
                nextTimeLimitSeconds={simPlan.sections[1]?.timeLimitSeconds ?? 0}
                onContinue={() => setView({ name: "simulation-section", sectionIndex: 1 })}
              />
            )}

            {view.name === "simulation-results" && (
              <SimulationResultsPage
                report={view.report}
                onBackToDashboard={() => {
                  setSimPlan(null);
                  setView({ name: "dashboard" });
                }}
              />
            )}

            {view.name === "review" && (
              <ReviewPage
                allQuestions={allQuestions}
                attempts={attempts}
                onStart={(pool) => setView({ name: "review-session", pool, sessionId: `review-${Date.now()}` })}
              />
            )}

            {view.name === "settings" && (
              <SettingsPage settings={settings} onUpdate={updateSettings} onResetAllData={resetAllData} />
            )}
          </main>

          {showBottomNav && <BottomNav active={navKey} onNavigate={handleNavigate} isRTL={isRTL} />}
        </div>
      </div>
    </div>
  );
}
