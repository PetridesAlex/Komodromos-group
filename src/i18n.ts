import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/translation.json'
import el from './locales/el/translation.json'
import ru from './locales/ru/translation.json'

const STORAGE_KEY = 'komodromos-language'
const FALLBACK_LANGUAGE = 'en'
const SUPPORTED_LANGUAGES = new Set(['en', 'el', 'ru'])

function getInitialLanguage() {
  if (typeof window === 'undefined') return FALLBACK_LANGUAGE
  const fromStorage = window.localStorage.getItem(STORAGE_KEY)
  if (fromStorage && SUPPORTED_LANGUAGES.has(fromStorage)) return fromStorage
  return FALLBACK_LANGUAGE
}

function syncDocumentLanguage(lng: string) {
  if (typeof document === 'undefined') return
  const base = lng.toLowerCase().split('-')[0]
  document.documentElement.lang = SUPPORTED_LANGUAGES.has(base) ? base : FALLBACK_LANGUAGE
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    el: { translation: el },
    ru: { translation: ru },
  },
  lng: getInitialLanguage(),
  fallbackLng: ['en', 'el'],
  interpolation: { escapeValue: false },
})

syncDocumentLanguage(i18n.language)

i18n.on('languageChanged', (lng) => {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, lng)
  syncDocumentLanguage(lng)
})

export default i18n
