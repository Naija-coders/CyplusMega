import i18n from "i18next"
import { InitOptions } from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import { en, tr } from "./locales"

const options: InitOptions = {
  interpolation: {
    escapeValue: false,
    formatSeparator: ","
  },

  debug: true,
  
  load: "currentOnly",
  resources: {
    tr: tr,
    en: en
  },

  fallbackLng: "tr",

  ns: ["translations"],

  defaultNS: "translations",
  keySeparator: false,
  whitelist: ["en", "tr"],

  react: {
    wait: false,
    bindI18n: "languageChanged loaded",
    // bindStore: "added removed",
    nsMode: "default",
    useSuspense: true
  }
}

i18n.use(LanguageDetector).init(options)
// i18n.init(options)

export default i18n
