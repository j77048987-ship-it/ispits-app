import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./locales/ar.json";
import fr from "./locales/fr.json";
import en from "./locales/en.json";
import type { SupportedLanguage } from "../../core/entities/Settings";

export const RTL_LANGUAGES: SupportedLanguage[] = ["ar"];

export function isRTL(language: SupportedLanguage): boolean {
  return RTL_LANGUAGES.includes(language);
}

void i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: ar },
    fr: { translation: fr },
    en: { translation: en }
  },
  lng: "ar",
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
  returnNull: false
});

/** Keeps <html lang/dir> correct for accessibility and CSS logical properties. */
export function applyDocumentDirection(language: SupportedLanguage): void {
  document.documentElement.lang = language;
  document.documentElement.dir = isRTL(language) ? "rtl" : "ltr";
}

export default i18n;
