import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Target, TrendingUp, Flame, BookOpen } from "lucide-react";
import type { Attempt } from "../../core/entities/Attempt";
import { AnalyticsService } from "../../core/services/AnalyticsService";
import { KNOWN_SUBJECTS } from "../../core/entities/Question";
import { Card } from "../../shared/components/Card";
import { Button } from "../../shared/components/Button";
import { ProgressRing } from "../../shared/components/ProgressRing";

const analytics = new AnalyticsService();
const RING_COLORS = ["text-teal-500", "text-amber-500", "text-sky-500", "text-violet-500"];

interface DashboardPageProps {
  attempts: Attempt[];
  onStartPractice: () => void;
}

export function DashboardPage({ attempts, onStartPractice }: DashboardPageProps) {
  const { t } = useTranslation();

  const overallAccuracy = useMemo(() => analytics.overallAccuracy(attempts), [attempts]);
  const subjectStats = useMemo(() => analytics.bySubject(attempts), [attempts]);
  const streak = useMemo(() => analytics.currentStreak(attempts), [attempts]);
  const daily = useMemo(() => analytics.dailyProgress(attempts), [attempts]);

  const statsBySubjectId = new Map(subjectStats.map((s) => [s.subject, s]));

  return (
    <div className="space-y-4">
      <h1 className="font-display text-xl font-bold">{t("dashboard.welcome")}</h1>

      <div className="grid grid-cols-3 gap-2">
        <Card className="p-3">
          <Target size={16} className="text-teal-500 mb-1" />
          <div className="font-display text-lg font-bold">{attempts.length}</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400">{t("dashboard.totalAnswered")}</div>
        </Card>
        <Card className="p-3">
          <TrendingUp size={16} className="text-emerald-500 mb-1" />
          <div className="font-display text-lg font-bold">{overallAccuracy}%</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400">{t("dashboard.accuracy")}</div>
        </Card>
        <Card className="p-3">
          <Flame size={16} className="text-amber-500 mb-1" />
          <div className="font-display text-lg font-bold">{streak}</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400">{t("dashboard.streak")}</div>
        </Card>
      </div>

      <Card>
        <div className="text-sm font-semibold mb-3">{t("dashboard.mastery")}</div>
        <div className="flex items-center justify-around flex-wrap gap-3">
          {KNOWN_SUBJECTS.map((subject, i) => (
            <div key={subject.id} className="flex flex-col items-center gap-2">
              <ProgressRing
                percent={statsBySubjectId.get(subject.id)?.accuracyPercent ?? 0}
                colorClassName={RING_COLORS[i % RING_COLORS.length]}
              />
              <span className="text-[11px] text-slate-500 dark:text-slate-400">{t(subject.labelKey)}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <div className="text-sm font-semibold mb-2">{t("dashboard.progressChart")}</div>
        {daily.length ? (
          <div style={{ width: "100%", height: 140 }}>
            <ResponsiveContainer>
              <LineChart data={daily}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="date" tick={{ fontSize: 9 }} tickFormatter={(d: string) => d.slice(5)} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} width={28} />
                <Tooltip formatter={(v: number) => [`${v}%`, ""]} contentStyle={{ fontSize: 12, borderRadius: 8 }} />
                <Line type="monotone" dataKey="accuracyPercent" stroke="#0d9488" strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="text-sm text-slate-500 dark:text-slate-400 py-6 text-center">{t("dashboard.noDataYet")}</div>
        )}
      </Card>

      <Button onClick={onStartPractice}>
        <BookOpen size={17} />
        {t("dashboard.startPractice")}
      </Button>
    </div>
  );
}
