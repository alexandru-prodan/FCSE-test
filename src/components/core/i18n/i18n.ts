import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";

import de from "../../../locales/de.ts";
import fr from "../../../locales/fr.ts";
import en from "../../../locales/en.ts";

i18n
  .use(languageDetector) // Uses the browser's language detection
  .use(initReactI18next)
  .init({
    resources: {
      en: en,
      de: de,
      fr: fr,
    },
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
