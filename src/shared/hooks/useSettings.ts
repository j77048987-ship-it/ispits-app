import { useCallback, useEffect, useState } from "react";
import { container } from "../../infrastructure/container";
import { DEFAULT_SETTINGS, type AppSettings } from "../../core/entities/Settings";
import i18n, { applyDocumentDirection } from "../../infrastructure/i18n";

export function useSettings() {
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    container.settingsRepository.get().then((loadedSettings) => {
      if (cancelled) return;
      setSettings(loadedSettings);
      applyDocumentDirection(loadedSettings.language);
      void i18n.changeLanguage(loadedSettings.language);
      setLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const update = useCallback(async (patch: Partial<AppSettings>) => {
    const next = await container.settingsRepository.update(patch);
    setSettings(next);
    if (patch.language) {
      applyDocumentDirection(next.language);
      void i18n.changeLanguage(next.language);
    }
    return next;
  }, []);

  return { settings, loaded, update };
}
