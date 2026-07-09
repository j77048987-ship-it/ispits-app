import { jsPDF } from "jspdf";
import type { SimulationScoreReport } from "../../core/services/SimulationService";

/**
 * Client-side only — jsPDF renders the PDF entirely in the browser/WebView, so this works
 * offline exactly like the rest of the app. Kept deliberately plain (no external fonts/images)
 * so it renders identically on every platform Capacitor targets.
 */
export function exportSimulationReportToPDF(report: SimulationScoreReport, studentName = ""): void {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const marginX = 20;
  let y = 25;

  doc.setFontSize(18);
  doc.text("ISPITS Prep — Rapport de simulation", marginX, y);
  y += 10;

  doc.setFontSize(11);
  doc.text(`Date : ${new Date().toLocaleDateString("fr-FR")}`, marginX, y);
  y += 7;
  if (studentName) {
    doc.text(`Candidat(e) : ${studentName}`, marginX, y);
    y += 7;
  }
  y += 5;

  doc.setFontSize(13);
  doc.text("Résultats par matière", marginX, y);
  y += 8;

  doc.setFontSize(11);
  for (const section of report.sections) {
    doc.text(`${section.subject.toUpperCase()} : ${section.correct}/${section.total} — ${section.scoreOutOf20}/20`, marginX, y);
    if (section.eliminatory) {
      doc.setTextColor(200, 40, 40);
      doc.text("  (score éliminatoire, < 5/20)", marginX + 85, y);
      doc.setTextColor(0, 0, 0);
    }
    y += 7;
  }

  y += 5;
  doc.setFontSize(14);
  doc.text(`Moyenne pondérée : ${report.weightedAverage}/20`, marginX, y);

  y += 15;
  doc.setFontSize(9);
  doc.setTextColor(120, 120, 120);
  doc.text(
    "Document généré localement par ISPITS Prep à titre d'entraînement. Ne constitue pas un document officiel.",
    marginX,
    y,
    { maxWidth: 170 }
  );

  doc.save(`ispits-prep-simulation-${Date.now()}.pdf`);
}
