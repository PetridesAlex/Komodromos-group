/**
 * Wedding Sky package tiers — single source for homepage categories + detail pages.
 * Prices are placeholders until confirmed.
 */

import type { LocalizedText } from '../lib/weddingLocale'

export type WeddingPackageCategoryId = 'wedding' | 'christian' | 'photography' | 'decor'

export type WeddingPackageTier = {
  id: string
  name: LocalizedText
  tagline: LocalizedText
  /** Display e.g. "from €8,500" or "Quoted on request" */
  priceDisplay: LocalizedText
  /** Detail page hero backdrop; omit to use `image`, set `null` for gradient-only hero */
  detailHeroImage?: string | null
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

const COMPLETE_IMG = '/images/services/wedding-highlights/completed-wedding-packages'
const PHOTOWAY_IMG =
  '/images/services/wedding-highlights/completed-wedding-packages/photoway-wedding-packages'
const DECOWAY_IMG =
  '/images/services/wedding-highlights/completed-wedding-packages/decoway-wedding-packages'
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
      en: 'Eight Wedding Sky Experience programmes — from Prestige to Royal, plus a fully Customised path.',
      el: 'Οκτώ προγράμματα Wedding Sky Experience — από Prestige έως Royal, μαζί με μία πλήρως προσαρμοσμένη επιλογή.',
      ru: 'Восемь программ Wedding Sky Experience — от Prestige до Royal, плюс полностью Customised путь.',
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
      el: 'Εκλεπτυσμένα προγράμματα για βάπτιση — από αναβαθμισμένο στολισμό έως πλήρως προσαρμοσμένα προγράμματα.',
      ru: 'Изысканные программы для крещения — от утончённого стиля до полностью индивидуальной концепции.',
    },
    image: `${CATEGORY_IMG}/christening-packages.webp`,
  },
  {
    id: 'photography',
    name: {
      en: 'Photography packages',
      el: 'Πακέτα φωτογράφισης',
      ru: 'Пакеты фотографии',
    },
    tagline: {
      en: 'PhotoWay cinematic programmes — albums, film, drone, and same-day edits.',
      el: 'Κινηματογραφικά προγράμματα PhotoWay — άλμπουμ, βίντεο, drone και μοντάζ την ίδια ημέρα.',
      ru: 'Cinematic-программы PhotoWay — альбомы, film, дрон и same-day edits.',
    },
    image: '/images/services/wedding-highlights/wedding-services/wedding-photo-video.webp',
  },
  {
    id: 'decor',
    name: {
      en: 'Décor packages',
      el: 'Πακέτα διακόσμησης',
      ru: 'Пакеты декора',
    },
    tagline: {
      en: 'DecoWay floral programmes — church, cars, reception, and atmospheric styling.',
      el: 'Προγράμματα ανθοστολισμού DecoWay — εκκλησία, αυτοκίνητα, δεξίωση και ατμοσφαιρικό στολισμό.',
      ru: 'Программы флористики DecoWay — храм, авто, зал и атмосферный styling.',
    },
    image: '/images/services/wedding-highlights/wedding-services/wedding-decor-cover-hero.webp',
  },
]

/** Package card / detail hero imagery (distinct cover per tier). */
export const weddingPackages: WeddingPackageTier[] = [
  {
    id: 'prestige',
    name: {
      en: 'Prestige Wedding Experience',
      el: 'Prestige Wedding Experience',
      ru: 'Prestige Wedding Experience',
    },
    tagline: {
      en: 'Where beautiful beginnings become unforgettable memories.',
      el: 'Εκεί όπου τα όμορφα ξεκινήματα μετατρέπονται σε αξέχαστες αναμνήσεις.',
      ru: 'Там, где прекрасные начинания становятся незабываемыми воспоминаниями.',
    },
    priceDisplay: { en: '€5,700', el: '€5.700', ru: '€5 700' },
    sortOrder: 1,
    image: `${COMPLETE_IMG}/prestige-wedding-experience.webp`,
    detailHeroImage: null,
    category: 'wedding',
  },
  {
    id: 'grand',
    name: {
      en: 'Grand Wedding Experience',
      el: 'Grand Wedding Experience',
      ru: 'Grand Wedding Experience',
    },
    tagline: {
      en: 'An upgraded wedding experience designed with elegance and style.',
      el: 'Μια αναβαθμισμένη εμπειρία γάμου σχεδιασμένη με κομψότητα και στυλ.',
      ru: 'Обновлённый свадебный опыт, созданный с элегантностью и стилем.',
    },
    priceDisplay: { en: '€8,500', el: '€8.500', ru: '€8 500' },
    sortOrder: 2,
    image: `${COMPLETE_IMG}/grand-wedding-experience.webp`,
    detailHeroImage: null,
    category: 'wedding',
  },
  {
    id: 'elite',
    name: {
      en: 'Elite Wedding Experience',
      el: 'Elite Wedding Experience',
      ru: 'Elite Wedding Experience',
    },
    tagline: {
      en: 'Refined luxury for couples seeking something truly special.',
      el: 'Εκλεπτυσμένη πολυτέλεια για ζευγάρια που αναζητούν κάτι πραγματικά ξεχωριστό.',
      ru: 'Изысканная роскошь для пар, ищущих нечто по-настоящему особое.',
    },
    priceDisplay: { en: '€9,900', el: '€9.900', ru: '€9 900' },
    sortOrder: 3,
    image: `${COMPLETE_IMG}/elite-wedding-experience.webp`,
    detailHeroImage: null,
    category: 'wedding',
  },
  {
    id: 'exclusive',
    name: {
      en: 'Exclusive Wedding Experience',
      el: 'Exclusive Wedding Experience',
      ru: 'Exclusive Wedding Experience',
    },
    tagline: {
      en: 'Designed with unique care for a truly distinctive wedding day.',
      el: 'Σχεδιασμένο με μοναδική φροντίδα για μια πραγματικά ξεχωριστή ημέρα γάμου.',
      ru: 'Создано с особой заботой для по-настоящему особенного свадебного дня.',
    },
    priceDisplay: { en: '€11,300', el: '€11.300', ru: '€11 300' },
    sortOrder: 4,
    image: `${COMPLETE_IMG}/exclusive-wedding-experience.webp`,
    detailHeroImage: null,
    category: 'wedding',
  },
  {
    id: 'imperial',
    name: {
      en: 'Imperial Wedding Experience',
      el: 'Imperial Wedding Experience',
      ru: 'Imperial Wedding Experience',
    },
    tagline: {
      en: 'Aristocratic elegance inspired by timeless grandeur.',
      el: 'Αριστοκρατική κομψότητα εμπνευσμένη από διαχρονικό μεγαλείο.',
      ru: 'Аристократическая элегантность, вдохновлённая вневременным величием.',
    },
    priceDisplay: { en: '€12,000', el: '€12.000', ru: '€12 000' },
    sortOrder: 5,
    image: `${COMPLETE_IMG}/imperial-wedding-experience.webp`,
    detailHeroImage: null,
    category: 'wedding',
  },
  {
    id: 'crown',
    name: {
      en: 'Crown Wedding Experience',
      el: 'Crown Wedding Experience',
      ru: 'Crown Wedding Experience',
    },
    tagline: {
      en: 'The ultimate expression of exclusivity, prestige, and timeless elegance.',
      el: 'Η απόλυτη έκφραση αποκλειστικότητας, κύρους και διαχρονικής κομψότητας.',
      ru: 'Абсолютное выражение эксклюзивности, престижа и вневременной элегантности.',
    },
    priceDisplay: { en: '€14,000', el: '€14.000', ru: '€14 000' },
    sortOrder: 6,
    image: `${COMPLETE_IMG}/crown-wedding-experience.webp`,
    detailHeroImage: null,
    category: 'wedding',
  },
  {
    id: 'royal',
    name: {
      en: 'Royal Wedding Experience',
      el: 'Royal Wedding Experience',
      ru: 'Royal Wedding Experience',
    },
    tagline: {
      en: 'The ultimate expression of luxury, elegance, and unforgettable magnificence.',
      el: 'Η απόλυτη έκφραση πολυτέλειας, κομψότητας και αξέχαστης μεγαλοπρέπειας.',
      ru: 'Абсолютное выражение роскоши, элегантности и незабываемого великолепия.',
    },
    priceDisplay: { en: '€18,400', el: '€18.400', ru: '€18 400' },
    sortOrder: 7,
    image: `${COMPLETE_IMG}/royal-wedding-experience.webp`,
    detailHeroImage: null,
    category: 'wedding',
  },
  {
    id: 'customised',
    name: {
      en: 'Customised Wedding Package',
      el: 'Εξατομικευμένο Πακέτο Γάμου',
      ru: 'Индивидуальный свадебный пакет',
    },
    tagline: {
      en: 'Create your own wedding package — shaped entirely around your needs and wishes.',
      el: 'Φτιάξτε το δικό σας πακέτο γάμου, ανάλογα με τις ανάγκες και τα θέλω σας.',
      ru: 'Создайте свой свадебный пакет — полностью под ваши нужды и желания.',
    },
    priceDisplay: {
      en: 'Quoted on request',
      el: 'Κατόπιν προσφοράς',
      ru: 'По запросу',
    },
    sortOrder: 8,
    image: `${COMPLETE_IMG}/customised-wedding-experience.webp`,
    detailHeroImage: null,
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
    detailHeroImage: null,
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
    detailHeroImage: null,
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
    detailHeroImage: null,
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
    detailHeroImage: null,
    category: 'christian',
  },
  {
    id: 'christening-oceanic',
    name: {
      en: 'Complete Oceanic Christening Package',
      el: 'Ολοκληρωμένο Πακέτο Βάπτισης Oceanic',
      ru: 'Полный пакет крещения Oceanic',
    },
    tagline: {
      en: 'Enjoy the endless blue — a luxury yacht celebration for up to 150 guests.',
      el: 'Απολαύστε το απέραντο γαλάζιο — πολυτελής γιορτή σε γιοτ για έως 150 καλεσμένους.',
      ru: 'Насладитесь бескрайней синевой — роскошное торжество на яхте до 150 гостей.',
    },
    priceDisplay: { en: '€3,200', el: '€3.200', ru: '€3 200' },
    sortOrder: 5,
    image: `${CATEGORY_IMG}/christening-package-oceanic.webp`,
    detailHeroImage: null,
    category: 'christian',
  },

  {
    id: 'photoway-1',
    name: { en: 'PhotoWay 1', el: 'PhotoWay 1', ru: 'PhotoWay 1' },
    tagline: {
      en: 'Essential cinematic coverage — albums, reception film, and a Hollywood trailer.',
      el: 'Essential cinematic κάλυψη — άλμπουμ, φιλμ δεξίωσης και Hollywood trailer.',
      ru: 'Essential cinematic-съёмка — альбомы, фильм приёма и Hollywood trailer.',
    },
    priceDisplay: { en: '€2,300', el: '€2.300', ru: '€2 300' },
    sortOrder: 1,
    image: `${PHOTOWAY_IMG}/photoway-1.webp`,
    detailHeroImage: null,
    category: 'photography',
  },
  {
    id: 'photoway-2',
    name: { en: 'PhotoWay 2', el: 'PhotoWay 2', ru: 'PhotoWay 2' },
    tagline: {
      en: 'Elevated coverage with drone panoramas, GoPro, and a fuller print suite.',
      el: 'Αναβαθμισμένη κάλυψη με drone panoramas, GoPro και fuller σειρά εκτυπώσεων.',
      ru: 'Расширенная съёмка с drone panoramas, GoPro и fuller набором отпечатков.',
    },
    priceDisplay: { en: '€2,600', el: '€2.600', ru: '€2 600' },
    sortOrder: 2,
    image: `${PHOTOWAY_IMG}/photoway-2.webp`,
    detailHeroImage: null,
    category: 'photography',
  },
  {
    id: 'photoway-3',
    name: { en: 'PhotoWay 3', el: 'PhotoWay 3', ru: 'PhotoWay 3' },
    tagline: {
      en: 'Signature cinematic depth — larger albums, same-day video, dual GoPros, and richer prints.',
      el: 'Υπογραφή cinematic βάθους — μεγαλύτερα άλμπουμ, same-day video, δύο GoPro και richer εκτυπώσεις.',
      ru: 'Фирменная cinematic-глубина — большие альбомы, same-day video, два GoPro и richer-отпечатки.',
    },
    priceDisplay: { en: '€2,900', el: '€2.900', ru: '€2 900' },
    sortOrder: 3,
    image: `${PHOTOWAY_IMG}/photoway-3.webp`,
    detailHeroImage: null,
    category: 'photography',
  },
  {
    id: 'photoway-4',
    name: { en: 'PhotoWay 4', el: 'PhotoWay 4', ru: 'PhotoWay 4' },
    tagline: {
      en: 'The fullest PhotoWay production — larger albums, dual photographers, and an expanded cinematic crew.',
      el: 'Η πληρέστερη παραγωγή PhotoWay — μεγαλύτερα άλμπουμ, δύο φωτογράφοι και εμπλουτισμένο cinematic πλήρωμα.',
      ru: 'Самая полная постановка PhotoWay — большие альбомы, два фотографа и расширенная cinematic-команда.',
    },
    priceDisplay: { en: '€3,600', el: '€3.600', ru: '€3 600' },
    sortOrder: 4,
    image: `${PHOTOWAY_IMG}/photoway-4.webp`,
    detailHeroImage: null,
    category: 'photography',
  },

  {
    id: 'decoway-1',
    name: { en: 'DecoWay 1', el: 'DecoWay 1', ru: 'DecoWay 1' },
    tagline: {
      en: 'Polished church, cars, and reception florals with illuminated LOVE letters.',
      el: 'Κομψός στολισμός εκκλησίας, αυτοκινήτων και δεξίωσης με φωτιζόμενα LOVE.',
      ru: 'Отточенный декор храма, авто и зала со светящимися LOVE.',
    },
    priceDisplay: { en: '€1,900', el: '€1.900', ru: '€1 900' },
    sortOrder: 1,
    image: `${DECOWAY_IMG}/decoway-1.webp`,
    detailHeroImage: null,
    category: 'decor',
  },
  {
    id: 'decoway-exclusive',
    name: { en: 'Deco Exclusive Package', el: 'Deco Exclusive Package', ru: 'Deco Exclusive Package' },
    tagline: {
      en: 'Signature décor with personal wedding planner — flower wall, fairy lights, and curated hospitality tables.',
      el: 'Υπογραφή διακόσμησης με προσωπικό wedding planner — flower wall, fairy lights και curated τραπέζια φιλοξενίας.',
      ru: 'Фирменный декор с персональным wedding planner — flower wall, fairy lights и curated-столы гостеприимства.',
    },
    priceDisplay: { en: '€2,200', el: '€2.200', ru: '€2 200' },
    sortOrder: 2,
    image: `${DECOWAY_IMG}/decoway-exclusive.webp`,
    detailHeroImage: null,
    category: 'decor',
  },
  {
    id: 'decoway-2',
    name: { en: 'DecoWay 2', el: 'DecoWay 2', ru: 'DecoWay 2' },
    tagline: {
      en: 'Elevated florals with house styling, flower wall, and wedding planner included.',
      el: 'Αναβαθμισμένος ανθοστολισμός με στολισμό σπιτιών, flower wall και wedding planner.',
      ru: 'Расширенная флористика с декором домов, flower wall и wedding planner.',
    },
    priceDisplay: { en: '€2,500', el: '€2.500', ru: '€2 500' },
    sortOrder: 3,
    image: `${DECOWAY_IMG}/decoway-2.webp`,
    detailHeroImage: null,
    category: 'decor',
  },
  {
    id: 'decoway-3',
    name: { en: 'DecoWay 3', el: 'DecoWay 3', ru: 'DecoWay 3' },
    tagline: {
      en: 'Statement florals — 3.4m flower wall, multi-car styling, and décor for up to 35 tables.',
      el: 'Statement ανθοστολισμός — flower wall 3.4μ, στόλισμα πολλών αυτοκινήτων και διακόσμηση έως 35 τραπεζιών.',
      ru: 'Statement-флористика — flower wall 3,4 м, декор многих авто и оформление до 35 столов.',
    },
    priceDisplay: { en: '€3,000', el: '€3.000', ru: '€3 000' },
    sortOrder: 4,
    image: `${DECOWAY_IMG}/decoway-3.webp`,
    detailHeroImage: null,
    category: 'decor',
  },
  {
    id: 'decoway-4',
    name: { en: 'DecoWay 4', el: 'DecoWay 4', ru: 'DecoWay 4' },
    tagline: {
      en: 'Crystal hospitality — floor chandeliers, guest-list mirror, cake styling, and décor for 40 tables.',
      el: 'Κρυστάλλινη φιλοξενία — πολυέλεοι εδάφους, καθρέφτης λίστας καλεσμένων, στολισμό τούρτας και διακόσμηση 40 τραπεζιών.',
      ru: 'Кристальное гостеприимство — напольные люстры, зеркало списка гостей, styling торта и декор 40 столов.',
    },
    priceDisplay: { en: '€3,500', el: '€3.500', ru: '€3 500' },
    sortOrder: 5,
    image: `${DECOWAY_IMG}/decoway-4.webp`,
    detailHeroImage: null,
    category: 'decor',
  },
  {
    id: 'decoway-5',
    name: { en: 'DecoWay 5', el: 'DecoWay 5', ru: 'DecoWay 5' },
    tagline: {
      en: 'Grand atmospheric scale — flower ceiling, champagne reveal, and crystal chandelier moments.',
      el: 'Μεγάλη ατμοσφαιρική κλίμακα — οροφή λουλουδιών, champagne reveal και στιγμές κρυστάλλινων πολυελαίων.',
      ru: 'Большой атмосферный масштаб — цветочный потолок, champagne reveal и моменты кристальных люстр.',
    },
    priceDisplay: { en: '€4,100', el: '€4.100', ru: '€4 100' },
    sortOrder: 6,
    image: `${DECOWAY_IMG}/decoway-5.webp`,
    detailHeroImage: null,
    category: 'decor',
  },
  {
    id: 'decoway-6',
    name: { en: 'DecoWay 6', el: 'DecoWay 6', ru: 'DecoWay 6' },
    tagline: {
      en: 'The fullest DecoWay production — ceiling chandeliers, fireworks, fairy-light tunnels, and décor for 45 tables.',
      el: 'Η πληρέστερη παραγωγή DecoWay — πολυέλεοι οροφής, πυροτεχνήματα, τούνελ fairy lights και διακόσμηση 45 τραπεζιών.',
      ru: 'Самая полная постановка DecoWay — потолочные люстры, пиротехника, тоннели fairy lights и декор 45 столов.',
    },
    priceDisplay: { en: '€7,600', el: '€7.600', ru: '€7 600' },
    sortOrder: 7,
    image: `${DECOWAY_IMG}/decoway-6.webp`,
    detailHeroImage: null,
    category: 'decor',
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
