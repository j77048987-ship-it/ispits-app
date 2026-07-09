import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { CheckCircle2, XCircle, ChevronRight, ChevronLeft, Sparkles, Clock, Circle } from "lucide-react";
import type { Question } from "../../core/entities/Question";
import type { Attempt, SessionMode } from "../../core/entities/Attempt";
import { AIExplanationService } from "../../core/services/AIExplanationService";
import type { AppSettings } from "../../core/entities/Settings";
import { Card } from "./Card";

const aiService = new AIExplanationService();

interface QuestionSessionRunnerProps {
  questions: Question[];
  mode: SessionMode;
  sessionId: string;
  timeLimitSeconds?: number | null;
  settings: AppSettings;
  isRTL: boolean;
  onFinish: (attempts: Attempt[]) => void;
  /**
   * Practice/Review: answer, see right/wrong + explanation immediately, then move on -- the
   * pedagogically useful behavior, and explicitly NOT meant to mimic exam conditions (the
   * original spec draws this exact distinction between the two modes).
   *
   * Official Simulation: false. No color-coding, no explanation, no AI button, and the answer
   * can be changed before moving to the next question -- because a real candidate never learns
   * whether an answer was right until results are published, and can reconsider before turning
   * the page. Defaults to true so existing practice/review call sites don't need to change.
   */
  revealFeedback?: boolean;
  /** For continuous numbering across a multi-section exam ("Question 21 of 40" for section 2). */
  questionNumberOffset?: number;
  totalQuestionCountOverride?: number;
}

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const s = Math.floor(totalSeconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export function QuestionSessionRunner({
  questions,
  mode,
  sessionId,
  timeLimitSeconds,
  settings,
  isRTL,
  onFinish,
  revealFeedback = true,
  questionNumberOffset = 0,
  totalQuestionCountOverride
}: QuestionSessionRunnerProps) {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false); // practice/review only: locks the answer in to reveal feedback
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [remaining, setRemaining] = useState(timeLimitSeconds ?? 0);
  const [aiText, setAiText] = useState<Record<string, string>>({});
  const [aiLoading, setAiLoading] = useState(false);
  const questionStartRef = useRef(Date.now());
  const attemptsRef = useRef<Attempt[]>([]);
  const finishedRef = useRef(false);

  const current = questions[index];
  const totalCount = totalQuestionCountOverride ?? questions.length;

  const finish = useCallback(
    (finalAttempts: Attempt[]) => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      onFinish(finalAttempts);
    },
    [onFinish]
  );

  // Intentionally only depends on timeLimitSeconds -- see docs/ARCHITECTURE.md#validation-performed
  // for why this needs attemptsRef rather than closing over `attempts` directly (stale-closure fix).
  useEffect(() => {
    if (!timeLimitSeconds) return;
    const iv = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(iv);
          finish(attemptsRef.current);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(iv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLimitSeconds]);

  useEffect(() => {
    questionStartRef.current = Date.now();
  }, [index]);

  if (!current) return null;

  const recordAndAdvance = (finalSelection: string | null) => {
    const record: Attempt = {
      id: `${sessionId}-${current.id}`,
      questionId: current.id,
      subject: current.subject,
      sessionId,
      mode,
      selectedOptionId: finalSelection,
      isCorrect: finalSelection === current.correctOptionId,
      timeSpentSeconds: Math.round((Date.now() - questionStartRef.current) / 1000),
      timestamp: new Date().toISOString()
    };
    const next = [...attempts, record];
    attemptsRef.current = next;
    setAttempts(next);
    setSelected(null);
    setConfirmed(false);
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      finish(next);
    }
  };

  const selectOption = (optionId: string) => {
    if (revealFeedback) {
      // Practice/review: picking an option locks it in immediately and reveals feedback below.
      if (confirmed) return;
      setSelected(optionId);
      setConfirmed(true);
    } else {
      // Official simulation: free to change the mark until "next" is pressed, like a real
      // answer sheet -- nothing is recorded yet.
      setSelected(optionId);
    }
  };

  const handleAIExplain = async () => {
    if (aiText[current.id] || aiLoading) return;
    setAiLoading(true);
    try {
      const result = await aiService.explain(current, selected, settings.language, settings.aiProvider);
      if (result.fromRemote) {
        setAiText((prev) => ({ ...prev, [current.id]: result.text }));
      }
    } finally {
      setAiLoading(false);
    }
  };

  const isCorrect = selected === current.correctOptionId;
  const questionNumber = questionNumberOffset + index + 1;
  const canAdvance = revealFeedback ? confirmed : true; // official mode: "next" is always available, even unanswered (skip)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {t("practice.questionOf", { current: questionNumber, total: totalCount })}
        </span>
        {!!timeLimitSeconds && (
          <span className="flex items-center gap-1 text-xs font-semibold text-amber-500">
            <Clock size={13} /> {formatTime(remaining)}
          </span>
        )}
      </div>

      <div className="h-1.5 rounded-full overflow-hidden bg-stone-100 dark:bg-slate-900/60">
        <div className="h-full bg-teal-500 transition-all" style={{ width: `${(index / questions.length) * 100}%` }} />
      </div>

      <Card>
        <div className="text-[11px] font-medium mb-2 text-slate-500 dark:text-slate-400">
          {t(`subject.${current.subject}`, current.subject)} · {current.unit}
        </div>
        <div className="text-[15px] leading-relaxed font-medium">{current.text}</div>
      </Card>

      <div className="space-y-2">
        {current.options.map((opt) => {
          let stateClass = "bg-white dark:bg-slate-900 border-stone-200 dark:border-slate-800";
          if (revealFeedback && confirmed) {
            if (opt.id === current.correctOptionId) stateClass = "bg-emerald-500/15 border-emerald-500";
            else if (opt.id === selected) stateClass = "bg-rose-500/15 border-rose-500";
          } else if (opt.id === selected) {
            // Official mode (or not-yet-confirmed practice): neutral "marked" state, no right/wrong signal.
            stateClass = "bg-teal-500/10 border-teal-500";
          }
          return (
            <button
              key={opt.id}
              onClick={() => selectOption(opt.id)}
              disabled={revealFeedback && confirmed}
              className={`w-full text-start rounded-xl border p-3 flex items-center justify-between gap-2 transition ${stateClass}`}
            >
              <span className="text-sm">{opt.text}</span>
              {revealFeedback && confirmed && opt.id === current.correctOptionId && (
                <CheckCircle2 size={17} className="text-emerald-500 shrink-0" />
              )}
              {revealFeedback && confirmed && opt.id === selected && opt.id !== current.correctOptionId && (
                <XCircle size={17} className="text-rose-500 shrink-0" />
              )}
              {!revealFeedback && opt.id === selected && <Circle size={15} className="text-teal-500 shrink-0 fill-current" />}
            </button>
          );
        })}
      </div>

      {revealFeedback && confirmed && (
        <Card className="space-y-2">
          <div className={`flex items-center gap-1.5 text-sm font-semibold ${isCorrect ? "text-emerald-500" : "text-rose-500"}`}>
            {isCorrect ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
            {isCorrect ? t("practice.correctFeedback") : t("practice.incorrectFeedback")}
          </div>
          <div className="text-sm leading-relaxed">
            <span className="font-semibold">{t("practice.explanationTitle")}: </span>
            {current.correctExplanation}
            {!isCorrect && selected && current.wrongExplanations[selected] && (
              <span className="block mt-1 text-rose-400/90">{current.wrongExplanations[selected]}</span>
            )}
          </div>

          {aiText[current.id] ? (
            <div className="rounded-xl p-3 text-sm leading-relaxed flex gap-2 bg-stone-100 dark:bg-slate-900/60">
              <Sparkles size={15} className="text-teal-500 shrink-0 mt-0.5" />
              <span>{aiText[current.id]}</span>
            </div>
          ) : (
            <button onClick={handleAIExplain} disabled={aiLoading} className="flex items-center gap-1.5 text-xs font-semibold text-teal-500">
              <Sparkles size={13} />
              {aiLoading ? t("practice.aiLoading") : t("practice.aiExplainCta")}
            </button>
          )}
        </Card>
      )}

      {canAdvance && (
        <button
          onClick={() => recordAndAdvance(selected)}
          className="w-full rounded-xl bg-teal-600 text-white font-semibold py-3 flex items-center justify-center gap-1.5"
        >
          {index + 1 < questions.length ? t("common.next") : t("common.finish")}
          {isRTL ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>
      )}
    </div>
  );
}
