import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./en.json";
import ruTranslation from "./ru.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: ruTranslation },
    ru: { translation: enTranslation },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
