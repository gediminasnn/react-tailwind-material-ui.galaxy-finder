
import * as i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import enTranslation from './locales/en/translation.json'
import ltTranslation from './locales/lt/translation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      lt: { translation: ltTranslation },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  })

export default i18n
