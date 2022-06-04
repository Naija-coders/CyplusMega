import i18n from "i18next"
import { InitOptions } from "i18next"
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from "i18next-browser-languagedetector"

import { en, tr } from "./locales"
let userfallback: any;
if (typeof window !== "undefined") {
  userfallback = localStorage.getItem("i18nextLng");
}
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

  fallbackLng: userfallback,

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

i18n.use(Backend).use(initReactI18next).use(LanguageDetector).init({  interpolation: {
  escapeValue: false,
  formatSeparator: ","
},

debug: true,

load: "currentOnly",
resources: {
  tr: tr,
  en: en
},

fallbackLng: "en",

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

})
// i18n.init(options)

export default i18n
