import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export const WEDDING_LOCALES = ['en', 'el', 'ru'] as const
export type WeddingLocale = (typeof WEDDING_LOCALES)[number]

export type LocalizedText = Record<WeddingLocale, string>

export function isWeddingLocale(value: string | undefined): value is WeddingLocale {
  return value === 'en' || value === 'el' || value === 'ru'
}

export function resolveWeddingLocale(language: string | undefined): WeddingLocale {
  if (!language) return 'en'
  const base = language.toLowerCase().split('-')[0]
  return isWeddingLocale(base) ? base : 'en'
}

export function pickLocalized(
  locale: WeddingLocale,
  text: LocalizedText | undefined,
  fallback = '',
): string {
  if (!text) return fallback
  return text[locale] || text.en || fallback
}

/** Hook for Wedding Sky pages — returns a stable locale + picker. */
export function useWeddingLocale() {
  const { i18n } = useTranslation()
  const locale = resolveWeddingLocale(i18n.resolvedLanguage ?? i18n.language)

  return useMemo(
    () => ({
      locale,
      t: (text: LocalizedText) => pickLocalized(locale, text),
      htmlLang: locale === 'el' ? 'el' : locale === 'ru' ? 'ru' : 'en',
    }),
    [locale],
  )
}
