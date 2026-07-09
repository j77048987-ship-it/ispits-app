import { useTranslation } from "react-i18next";
import { AlertTriangle, FileDown } from "lucide-react";
import type { SimulationScoreReport } from "../../core/services/SimulationService";
import { Card } from "../../shared/components/Card";
import { Button } from "../../shared/components/Button";
import { exportSimulationReportToPDF } from "../../shared/utils/pdfExport";

interface SimulationResultsPageProps {
  report: SimulationScoreReport;
  onBackToDashboard: () => void;
}

export function SimulationResultsPage({ report, onBackToDashboard }: SimulationResultsPageProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <Card className="space-y-3">
        {report.sections.map((section, i) => (
          <div key={section.subject} className="flex items-center justify-between">
            <span className="text-sm font-medium">
              {t(`subject.${section.subject}`, section.subject)}{" "}
              <span className="text-slate-500 dark:text-slate-400">(× {i === 0 ? 2 : 1})</span>
            </span>
            <span className="font-display font-bold">{section.scoreOutOf20}/20</span>
          </div>
        ))}
        <div className="h-px bg-stone-200 dark:bg-slate-800" />
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">{t("simulation.combinedScore")}</span>
          <span className="font-display text-xl font-bold text-teal-500">{report.weightedAverage}/20</span>
        </div>
      </Card>

      {report.eliminated && (
        <div className="rounded-xl p-3 bg-rose-500/10 border border-rose-500/40 flex gap-2 text-xs text-rose-500">
          <AlertTriangle size={15} className="shrink-0" />
          {t("simulation.eliminatory")}
        </div>
      )}

      <Button variant="outline" onClick={() => exportSimulationReportToPDF(report)}>
        <FileDown size={16} />
        PDF
      </Button>
      <Button onClick={onBackToDashboard}>{t("nav.dashboard")}</Button>
    </div>
  );
}
