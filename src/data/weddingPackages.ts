/**
 * Wedding Sky package tiers — single source for homepage categories + detail pages.
 * Prices are placeholders until confirmed.
 */

import type { LocalizedText } from '../lib/weddingLocale'

export type WeddingPackageCategoryId = 'wedding' | 'christian'

export type WeddingPackageTier = {
  id: string
  name: LocalizedText
  tagline: LocalizedText
  /** Display e.g. "from €8,500" or "Quoted on request" */
  priceDisplay: LocalizedText
  /** Sort / value order within its category (1 = entry) */
  sortOrder: number
  image: string
  category: WeddingPackageCategoryId
}

export type WeddingPackageCategory = {
  id: WeddingPackageCategoryId
  name: LocalizedText
  tagline: LocalizedText
  image: string
}

const PKG_IMG = '/images/services/wedding-packages'
const CATEGORY_IMG = '/images/services/wedding-highlights/wedding-christening-packages'

/** Top-level package families shown on the Wedding Sky homepage. */
export const weddingPackageCategories: WeddingPackageCategory[] = [
  {
    id: 'wedding',
    name: {
      en: 'Wedding packages',
      el: 'Πακέτα γάμου',
      ru: 'Свадебные пакеты',
    },
    tagline: {
      en: 'Three celebration tiers — from essential coordination to signature white-glove production.',
      el: 'Τρία επίπεδα γιορτής — από τον βασικό συντονισμό έως την κορυφαία παραγωγή white-glove.',
      ru: 'Три уровня организации торжества — от базовой координации до фирменного сервиса высочайшего класса.',
    },
    image: `${CATEGORY_IMG}/wedding-packages.webp`,
  },
  {
    id: 'christian',
    name: {
      en: 'Christening packages',
      el: 'Πακέτα Βάπτισης',
      ru: 'Пакеты для крещения',
    },
    tagline: {
      en: 'Refined programmes for christening celebrations — from elevated styling to fully bespoke celebration briefs.',
      el: 'Εκλεπτυσμένα προγράμματα για βάπτιση — από αναβαθμισμένο styling έως πλήρως προσαρμοσμένα briefs.',
      ru: 'Изысканные программы для крещения — от утончённого стиля до полностью индивидуальной концепции.',
    },
    image: `${CATEGORY_IMG}/christening-packages.webp`,
  },
]

/** Package card / detail hero imagery (distinct cover per tier). */
export const weddingPackages: WeddingPackageTier[] = [
  {
    id: 'basic',
    name: { en: 'Basic', el: 'Basic', ru: 'Basic' },
    tagline: {
      en: 'Essential planning and coordination for an elegant Cyprus celebration.',
      el: 'Βασικός σχεδιασμός και συντονισμός για μια κομψή τελετή στην Κύπρο.',
      ru: 'Основное планирование и координация элегантного торжества на Кипре.',
    },
    priceDisplay: { en: 'from €8,500', el: 'από €8,500', ru: 'от €8 500' },
    sortOrder: 1,
    image: `${PKG_IMG}/tier-basic.webp`,
    category: 'wedding',
  },
  {
    id: 'classic',
    name: { en: 'Classic', el: 'Classic', ru: 'Classic' },
    tagline: {
      en: 'Full creative direction with refined production and guest care.',
      el: 'Πλήρης δημιουργική κατεύθυνση με παραγωγή και φροντίδα καλεσμένων.',
      ru: 'Полное творческое руководство, безупречная организация и забота о гостях.',
    },
    priceDisplay: { en: 'from €17,500', el: 'από €17,500', ru: 'от €17 500' },
    sortOrder: 2,
    image: `${PKG_IMG}/tier-classic.webp`,
    category: 'wedding',
  },
  {
    id: 'premium',
    name: { en: 'Premium', el: 'Premium', ru: 'Premium' },
    tagline: {
      en: 'Our signature tier — maximum craft, discretion, and white-glove execution.',
      el: 'Η κορυφαία επιλογή — μέγιστη τέχνη, διακριτικότητα και υποστήριξη VIP.',
      ru: 'Наш фирменный уровень — высочайшее мастерство, деликатность и безупречный персональный сервис.',
    },
    priceDisplay: { en: 'from €35,000', el: 'από €35,000', ru: 'от €35 000' },
    sortOrder: 3,
    image: `${PKG_IMG}/tier-premium.webp`,
    category: 'wedding',
  },
  {
    id: 'basic-plus',
    name: { en: 'Basic Plus', el: 'Basic Plus', ru: 'Basic Plus' },
    tagline: {
      en: 'Expanded vendor access and styling support beyond the essentials.',
      el: 'Εκτεταμένη υποστήριξη styling και συνεργατών πέρα από τα βασικά.',
      ru: 'Расширенный выбор подрядчиков и дополнительное стилистическое сопровождение.',
    },
    priceDisplay: { en: 'from €12,000', el: 'από €12,000', ru: 'от €12 000' },
    sortOrder: 1,
    image: `${PKG_IMG}/tier-basic-plus.webp`,
    category: 'christian',
  },
  {
    id: 'classic-plus',
    name: { en: 'Classic Plus', el: 'Classic Plus', ru: 'Classic Plus' },
    tagline: {
      en: 'Premium staging, extended hours, and bespoke detail programming.',
      el: 'Υψηλό staging, εκτεταμένο ωράριο και λεπτομερή προγράμματα.',
      ru: 'Премиальная постановка, расширенное сопровождение и индивидуальная проработка деталей.',
    },
    priceDisplay: { en: 'from €24,000', el: 'από €24,000', ru: 'от €24 000' },
    sortOrder: 2,
    image: `${PKG_IMG}/tier-classic-plus.webp`,
    category: 'christian',
  },
  {
    id: 'customised',
    name: { en: 'Customised', el: 'Customised', ru: 'Customised' },
    tagline: {
      en: 'A fully tailored programme built around your vision and investment level.',
      el: 'Πλήρως προσαρμοσμένο πρόγραμμα σύμφωνα με το όραμά σας.',
      ru: 'Полностью индивидуальная программа, созданная с учётом вашего видения и бюджета.',
    },
    priceDisplay: {
      en: 'Quoted on request',
      el: 'Τιμή κατόπιν συνεννόησης',
      ru: 'Цена по запросу',
    },
    sortOrder: 3,
    image: `${PKG_IMG}/tier-customised.webp`,
    category: 'christian',
  },
]

export function getWeddingPackageCategory(
  categoryId: string | undefined,
): WeddingPackageCategory | undefined {
  return weddingPackageCategories.find((category) => category.id === categoryId)
}

export function getPackagesForCategory(
  categoryId: WeddingPackageCategoryId,
): WeddingPackageTier[] {
  return weddingPackages
    .filter((pkg) => pkg.category === categoryId)
    .sort((a, b) => a.sortOrder - b.sortOrder)
}
