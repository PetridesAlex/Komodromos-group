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
    id: 'christening-1',
    name: {
      en: 'Complete Christening Package 1',
      el: 'Ολοκληρωμένο Πακέτο Βάπτισης 1',
      ru: 'Полный пакет крещения 1',
    },
    tagline: {
      en: 'Church and reception styling with refined decorative details.',
      el: 'Στολισμός εκκλησίας και δεξίωσης με εκλεπτυσμένες λεπτομέρειες.',
      ru: 'Оформление храма и приёма с изысканными деталями.',
    },
    priceDisplay: { en: '€850', el: '€850', ru: '€850' },
    sortOrder: 1,
    image: `${CATEGORY_IMG}/christening-package-1.webp`,
    category: 'christian',
  },
  {
    id: 'christening-2',
    name: {
      en: 'Complete Christening Package 2',
      el: 'Ολοκληρωμένο Πακέτο Βάπτισης 2',
      ru: 'Полный пакет крещения 2',
    },
    tagline: {
      en: 'Elevated décor with floral arches, columns, and guest-list styling.',
      el: 'Αναβαθμισμένος στολισμός με ανθοστολισμένες αψίδες, κολώνες και λίστα καλεσμένων.',
      ru: 'Расширенный декор с цветочными арками, колоннами и оформлением списка гостей.',
    },
    priceDisplay: { en: '€1,100', el: '€1.100', ru: '€1 100' },
    sortOrder: 2,
    image: `${CATEGORY_IMG}/christening-package-2.webp`,
    category: 'christian',
  },
  {
    id: 'christening-3',
    name: {
      en: 'Complete Christening Package 3',
      el: 'Ολοκληρωμένο Πακέτο Βάπτισης 3',
      ru: 'Полный пакет крещения 3',
    },
    tagline: {
      en: 'Full celebration — décor, photography, treats, candy bar, invitations, and day coordination.',
      el: 'Πλήρης γιορτή — διακόσμηση, φωτογραφία, κεράσματα, candy bar, προσκλήσεις και συντονισμός.',
      ru: 'Полное торжество — декор, фото, угощения, candy bar, приглашения и координация дня.',
    },
    priceDisplay: { en: '€1,900', el: '€1.900', ru: '€1 900' },
    sortOrder: 3,
    image: `${CATEGORY_IMG}/christening-package-3.webp`,
    category: 'christian',
  },
  {
    id: 'christening-4',
    name: {
      en: 'Complete Christening Package 4',
      el: 'Ολοκληρωμένο Πακέτο Βάπτισης 4',
      ru: 'Полный пакет крещения 4',
    },
    tagline: {
      en: 'Signature hospitality — expanded treats, 100 invitations, and live entertainment.',
      el: 'Υπογραφή φιλοξενίας — περισσότερα κεράσματα, 100 προσκλήσεις και ζωντανή ψυχαγωγία.',
      ru: 'Фирменное гостеприимство — больше угощений, 100 приглашений и живые развлечения.',
    },
    priceDisplay: { en: '€2,300', el: '€2.300', ru: '€2 300' },
    sortOrder: 4,
    image: `${CATEGORY_IMG}/christening-package-4.webp`,
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
