import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Moon, Sun, Download, Upload, RefreshCw } from "lucide-react";
import type { AppSettings, AIProviderId, SupportedLanguage } from "../../core/entities/Settings";
import { Card } from "../../shared/components/Card";
import { Button } from "../../shared/components/Button";
import { BackupService } from "../../core/services/BackupService";
import { container } from "../../infrastructure/container";

const backupService = new BackupService(container.attemptRepository, container.settingsRepository);
const LANGUAGES: SupportedLanguage[] = ["ar", "fr", "en"];
const AI_PROVIDERS: AIProviderId[] = ["local", "openai", "claude", "gemini"];

interface SettingsPageProps {
  settings: AppSettings;
  onUpdate: (patch: Partial<AppSettings>) => void;
  onResetAllData: () => void;
}

export function SettingsPage({ settings, onUpdate, onResetAllData }: SettingsPageProps) {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importMessage, setImportMessage] = useState<string | null>(null);

  const handleExport = async () => {
    const json = await backupService.exportAsJSONString();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ispits-prep-backup-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = async (file: File) => {
    try {
      const text = await file.text();
      await backupService.importFromJSONString(text);
      setImportMessage("ok");
    } catch {
      setImportMessage("error");
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <div className="text-sm font-semibold mb-2">{t("settings.language")}</div>
        <div className="flex gap-2">
          {LANGUAGES.map((lang) => (
            <button
              key={lang}
              onClick={() => onUpdate({ language: lang })}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold ${
                settings.language === lang ? "bg-teal-600 text-white" : "bg-stone-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="text-sm font-semibold mb-2">{t("settings.theme")}</div>
        <div className="flex gap-2">
          <button
            onClick={() => onUpdate({ theme: "dark" })}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5 ${
              settings.theme === "dark" ? "bg-teal-600 text-white" : "bg-stone-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            }`}
          >
            <Moon size={14} /> {t("settings.dark")}
          </button>
          <button
            onClick={() => onUpdate({ theme: "light" })}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5 ${
              settings.theme === "light" ? "bg-teal-600 text-white" : "bg-stone-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            }`}
          >
            <Sun size={14} /> {t("settings.light")}
          </button>
        </div>
      </div>

      <div>
        <div className="text-sm font-semibold mb-2">{t("settings.aiProvider")}</div>
        <div className="grid grid-cols-2 gap-2 mb-2">
          {AI_PROVIDERS.map((p) => (
            <button
              key={p}
              onClick={() => onUpdate({ aiProvider: { ...settings.aiProvider, provider: p } })}
              className={`py-2.5 rounded-xl text-sm font-semibold capitalize ${
                settings.aiProvider.provider === p ? "bg-teal-600 text-white" : "bg-stone-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        {settings.aiProvider.provider !== "local" && (
          <>
            <input
              type="password"
              placeholder={t("settings.apiKey")}
              defaultValue={settings.aiProvider.apiKey ?? ""}
              onBlur={(e) => onUpdate({ aiProvider: { ...settings.aiProvider, apiKey: e.target.value } })}
              className="w-full rounded-xl border border-stone-300 dark:border-slate-700 bg-transparent px-3 py-2.5 text-sm"
            />
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5">{t("settings.apiKeyHelp")}</p>
          </>
        )}
      </div>

      <Card className="space-y-3">
        <Button variant="outline" onClick={handleExport}>
          <Download size={15} /> {t("settings.backupExport")}
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept="application/json"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && handleImportFile(e.target.files[0])}
        />
        <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
          <Upload size={15} /> {t("settings.backupImport")}
        </Button>
        {importMessage === "ok" && <p className="text-xs text-emerald-500 text-center">✓</p>}
        {importMessage === "error" && <p className="text-xs text-rose-500 text-center">✕</p>}
      </Card>

      <Button variant="danger" onClick={onResetAllData}>
        <RefreshCw size={14} /> {t("settings.resetData")}
      </Button>
    </div>
  );
}
