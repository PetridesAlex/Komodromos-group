import {
  pickLocalized,
  type LocalizedText,
  type WeddingLocale,
} from '../../lib/weddingLocale'

export type WeddingPackageLongContentSource = {
  title: string
  subtitle: string
  priceDisplay: string
  includes: string[]
  aboutTitle: string
  aboutCopy: string
  sections: Array<{
    title: string
    intro?: string
    items?: string[]
    groups?: Array<{
      title: string
      items: string[]
    }>
  }>
  importantNote: string
}

export type WeddingPackageLongContent = {
  title: LocalizedText
  subtitle: LocalizedText
  priceDisplay: LocalizedText
  includes: LocalizedText[]
  aboutTitle: LocalizedText
  aboutCopy: LocalizedText
  sections: Array<{
    title: LocalizedText
    intro?: LocalizedText
    items?: LocalizedText[]
    groups?: Array<{
      title: LocalizedText
      items: LocalizedText[]
    }>
  }>
  importantNote: LocalizedText
}

export type ResolvedWeddingPackageLongContent = {
  title: string
  subtitle: string
  priceDisplay: string
  includes: string[]
  aboutTitle: string
  aboutCopy: string
  sections: Array<{
    title: string
    intro?: string
    items?: string[]
    groups?: Array<{
      title: string
      items: string[]
    }>
  }>
  importantNote: string
}

export type WeddingPackageLongTranslations = {
  el: Record<string, string>
  ru: Record<string, string>
}

export function localizeWeddingPackageLongContent(
  source: WeddingPackageLongContentSource,
  translations: WeddingPackageLongTranslations,
): WeddingPackageLongContent {
  const text = (en: string): LocalizedText => {
    const el = translations.el[en]
    const ru = translations.ru[en]

    if (!el || !ru) {
      throw new Error(`Missing wedding package translation: ${en}`)
    }

    return { en, el, ru }
  }

  return {
    title: text(source.title),
    subtitle: text(source.subtitle),
    priceDisplay: text(source.priceDisplay),
    includes: source.includes.map(text),
    aboutTitle: text(source.aboutTitle),
    aboutCopy: text(source.aboutCopy),
    sections: source.sections.map((section) => ({
      title: text(section.title),
      ...(section.intro ? { intro: text(section.intro) } : {}),
      ...(section.items ? { items: section.items.map(text) } : {}),
      ...(section.groups
        ? {
            groups: section.groups.map((group) => ({
              title: text(group.title),
              items: group.items.map(text),
            })),
          }
        : {}),
    })),
    importantNote: text(source.importantNote),
  }
}

export function resolveWeddingPackageLongContent(
  content: WeddingPackageLongContent,
  locale: WeddingLocale,
): ResolvedWeddingPackageLongContent {
  return {
    title: pickLocalized(locale, content.title),
    subtitle: pickLocalized(locale, content.subtitle),
    priceDisplay: pickLocalized(locale, content.priceDisplay),
    includes: content.includes.map((item) => pickLocalized(locale, item)),
    aboutTitle: pickLocalized(locale, content.aboutTitle),
    aboutCopy: pickLocalized(locale, content.aboutCopy),
    sections: content.sections.map((section) => ({
      title: pickLocalized(locale, section.title),
      ...(section.intro
        ? { intro: pickLocalized(locale, section.intro) }
        : {}),
      ...(section.items
        ? { items: section.items.map((item) => pickLocalized(locale, item)) }
        : {}),
      ...(section.groups
        ? {
            groups: section.groups.map((group) => ({
              title: pickLocalized(locale, group.title),
              items: group.items.map((item) => pickLocalized(locale, item)),
            })),
          }
        : {}),
    })),
    importantNote: pickLocalized(locale, content.importantNote),
  }
}
