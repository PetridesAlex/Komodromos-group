import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/translation.json'
import el from './locales/el/translation.json'

const STORAGE_KEY = 'komodromos-language'
const FALLBACK_LANGUAGE = 'el'
const SUPPORTED_LANGUAGES = new Set(['en', 'el'])

function getInitialLanguage() {
  if (typeof window === 'undefined') return FALLBACK_LANGUAGE
  const fromStorage = window.localStorage.getItem(STORAGE_KEY)
  if (fromStorage && SUPPORTED_LANGUAGES.has(fromStorage)) return fromStorage
  return FALLBACK_LANGUAGE
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    el: { translation: el },
  },
  lng: getInitialLanguage(),
  fallbackLng: FALLBACK_LANGUAGE,
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, lng)
})

export default i18n
