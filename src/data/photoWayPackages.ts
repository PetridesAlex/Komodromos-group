/**
 * Wedding Sky PhotoWay photography & film packages — from atelier flyers.
 */

import type { LocalizedText } from '../lib/weddingLocale'

const IMG =
  '/images/services/wedding-highlights/completed-wedding-packages/photoway-wedding-packages'

export type PhotoWayPackageSection = {
  title: LocalizedText
  items: LocalizedText[]
}

export type PhotoWayPackage = {
  id: string
  sortOrder: number
  name: LocalizedText
  tagline: LocalizedText
  priceDisplay: LocalizedText
  priceNote?: LocalizedText
  image: string
  highlight: LocalizedText
  sections: PhotoWayPackageSection[]
  featured?: boolean
}

export const photoWayPackagesPageCopy = {
  eyebrow: {
    en: 'Photography & film',
    el: 'Φωτογραφία και βίντεο',
    ru: 'Фото и film',
  } satisfies LocalizedText,
  title: {
    en: 'Wedding Photography Packages',
    el: 'Πακέτα φωτογράφισης γάμου',
    ru: 'Пакеты свадебной фотографии',
  } satisfies LocalizedText,
  heroTitleLine1: {
    en: 'PhotoWay',
    el: 'PhotoWay',
    ru: 'PhotoWay',
  } satisfies LocalizedText,
  heroTitleLine2: {
    en: 'Packages',
    el: 'Πακέτα',
    ru: 'пакеты',
  } satisfies LocalizedText,
  lead: {
    en: 'Four cinematic photography & film programmes — albums, trailers, drone, and same-day edits — composed to hold every glance and detail.',
    el: 'Τέσσερα κινηματογραφικά προγράμματα φωτογραφίας και βίντεο — με άλμπουμ, τρέιλερ, drone και μοντάζ την ίδια ημέρα — ώστε να μείνει κάθε βλέμμα και κάθε λεπτομέρεια.',
    ru: 'Четыре cinematic-программы фото и film — альбомы, трейлеры, дрон и same-day edits — чтобы сохранить каждый взгляд и деталь.',
  } satisfies LocalizedText,
  backLabel: {
    en: 'All wedding packages',
    el: 'Όλα τα πακέτα γάμου',
    ru: 'Все свадебные пакеты',
  } satisfies LocalizedText,
  enquire: {
    en: 'Enquire about this package',
    el: 'Ενδιαφέρομαι για το πακέτο',
    ru: 'Узнать о пакете',
  } satisfies LocalizedText,
  enquireShort: {
    en: 'Enquire now',
    el: 'Επικοινωνήστε τώρα',
    ru: 'Оставить заявку',
  } satisfies LocalizedText,
  viewDetails: {
    en: 'View details',
    el: 'Δείτε λεπτομέρειες',
    ru: 'Подробнее',
  } satisfies LocalizedText,
  includes: {
    en: 'What is included',
    el: 'Τι περιλαμβάνεται',
    ru: 'Что входит',
  } satisfies LocalizedText,
  note: {
    en: 'Services can be added or removed to suit your celebration.',
    el: 'Οι υπηρεσίες μπορούν να προστεθούν ή να αφαιρεθούν ανάλογα με τη γιορτή σας.',
    ru: 'Услуги можно добавить или исключить под ваше торжество.',
  } satisfies LocalizedText,
  featuredBadge: {
    en: 'Signature choice',
    el: 'Προτεινόμενη επιλογή',
    ru: 'Фирменный выбор',
  } satisfies LocalizedText,
  previewFlyer: {
    en: 'View package flyer',
    el: 'Προβολή φυλλαδίου πακέτου',
    ru: 'Открыть флаер пакета',
  } satisfies LocalizedText,
  previewHint: {
    en: 'Tap to preview',
    el: 'Πατήστε για προβολή',
    ru: 'Нажмите для просмотра',
  } satisfies LocalizedText,
  catalogueHeading: {
    en: 'Choose your PhotoWay tier',
    el: 'Επιλέξτε το επίπεδο PhotoWay',
    ru: 'Выберите уровень PhotoWay',
  } satisfies LocalizedText,
  catalogueHeadingLine1: {
    en: 'Choose your',
    el: 'Επιλέξτε το',
    ru: 'Выберите',
  } satisfies LocalizedText,
  catalogueHeadingLine2: {
    en: 'PhotoWay tier',
    el: 'Επίπεδο PhotoWay',
    ru: 'уровень PhotoWay',
  } satisfies LocalizedText,
  catalogueEyebrow: {
    en: 'The photography edit',
    el: 'Η σειρά φωτογραφίας',
    ru: 'Коллекция фотографии',
  } satisfies LocalizedText,
  catalogueLead: {
    en: 'Four composed programmes — from essential cinematic coverage to the fullest PhotoWay production.',
    el: 'Τέσσερα ολοκληρωμένα προγράμματα — από την απαραίτητη κινηματογραφική κάλυψη μέχρι την πληρέστερη παραγωγή PhotoWay.',
    ru: 'Четыре программы — от essential cinematic-съёмки до самой полной постановки PhotoWay.',
  } satisfies LocalizedText,
} as const

const L = (en: string, el: string, ru: string): LocalizedText => ({ en, el, ru })

export const photoWayPackages: readonly PhotoWayPackage[] = [
  {
    id: 'photoway-1',
    sortOrder: 1,
    name: L('PhotoWay 1', 'PhotoWay 1', 'PhotoWay 1'),
    tagline: L(
      'Essential cinematic coverage — albums, reception film, and a Hollywood trailer.',
      'Βασική κινηματογραφική κάλυψη — άλμπουμ, φιλμ δεξίωσης και τρέιλερ Hollywood.',
      'Essential cinematic-съёмка — альбомы, фильм приёма и Hollywood trailer.',
    ),
    priceDisplay: L('€2,300', '€2.300', '€2 300'),
    image: `${IMG}/photoway-1.webp`,
    highlight: L(
      'A refined photography foundation with personal album design and 4-day delivery.',
      'Εκλεπτυσμένη βάση φωτογραφίας με προσωπικό σχεδιασμό άλμπουμ και παράδοση σε 4 ημέρες.',
      'Изысканная основа фотографии с персональным дизайном альбома и сдачей за 4 дня.',
    ),
    sections: [
      {
        title: L(
          'Photoshoots & albums',
          'Φωτογραφήσεις και άλμπουμ',
          'Съёмки и альбомы',
        ),
        items: [
          L(
            'Digital album with 200 photos, 30×80cm — leather interior from 150 options',
            'Ψηφιακό άλμπουμ με 200 φωτογραφίες, 30×80εκ. — δερμάτινο εσωτερικό από 150 επιλογές',
            'Цифровой альбом на 200 фото, 30×80 см — кожаный интерьер из 150 вариантов',
          ),
          L(
            'Personal designer for photo processing and album layout',
            'Προσωπικός σχεδιαστής για επεξεργασία φωτογραφιών και layout άλμπουμ',
            'Персональный дизайнер для обработки фото и вёрстки альбома',
          ),
          L(
            '2 matching mini digital albums, 20×40cm',
            '2 ίδια μικρά ψηφιακά άλμπουμ, 20×40εκ.',
            '2 одинаковых mini digital-альбома, 20×40 см',
          ),
          L(
            'USB HD video of the wedding reception',
            'USB HD βιντεοσκόπηση της δεξίωσης',
            'USB HD-видео свадебного приёма',
          ),
          L(
            'Interviews with friends and relatives',
            'Συνεντεύξεις από φίλους και συγγενείς',
            'Интервью с друзьями и родственниками',
          ),
          L(
            'Multi-camera combination with professional editing',
            'Συνδυασμός καμερών με επαγγελματικό μοντάζ',
            'Мультикамерный монтаж с профессиональной обработкой',
          ),
          L('Dedicated Instagram video', 'Αφιερωμένο Instagram video', 'Отдельное Instagram-видео'),
        ],
      },
      {
        title: L('Film, prints & extras', 'Film, εκτυπώσεις & extras', 'Film, отпечатки и extras'),
        items: [
          L(
            'Hollywood-style cinematic trailer',
            'Hollywood-style cinematic trailer',
            'Cinematic trailer в стиле Hollywood',
          ),
          L(
            'Unlimited HD photos on USB',
            'Απεριόριστες φωτογραφίες HD σε USB',
            'Безлимитные HD-фото на USB',
          ),
          L(
            'Prints: 2× 40×60, 10× 15×20, and 1 canvas 40×60',
            'Εκτυπώσεις: 2× 40×60, 10× 15×20 και 1 καμβάς 40×60',
            'Отпечатки: 2× 40×60, 10× 15×20 и 1 холст 40×60',
          ),
          L(
            'External professional photoshoot on a different day — luxury yacht, car, or other locations',
            'Εξωτερική επαγγελματική φωτογράφιση άλλη ημέρα — luxury yacht, αυτοκίνητο ή άλλες τοποθεσίες',
            'Внешняя профессиональная съёмка в другой день — яхта, авто или другие локации',
          ),
          L(
            'Commemorative crystal USB · delivery in 4 days',
            'Αναμνηστικό κρυστάλλινο USB · παράδοση σε 4 ημέρες',
            'Памятный crystal USB · сдача за 4 дня',
          ),
        ],
      },
    ],
  },
  {
    id: 'photoway-2',
    sortOrder: 2,
    name: L('PhotoWay 2', 'PhotoWay 2', 'PhotoWay 2'),
    tagline: L(
      'Elevated coverage with drone panoramas, GoPro, and a fuller print suite.',
      'Αναβαθμισμένη κάλυψη με πανοραμικά πλάνα drone, GoPro και πληρέστερη σειρά εκτυπώσεων.',
      'Расширенная съёмка с drone panoramas, GoPro и fuller набором отпечатков.',
    ),
    priceDisplay: L('€2,600', '€2.600', '€2 600'),
    image: `${IMG}/photoway-2.webp`,
    highlight: L(
      'Everything that shapes a richer story — aerial film, action cameras, and a dedicated photo–video crew.',
      'Ό,τι χτίζει richer ιστορία — aerial film, action cameras και αφοσιωμένο πλήρωμα φωτο–video.',
      'Всё для richer-истории — aerial film, action cameras и выделенная фото–видео команда.',
    ),
    sections: [
      {
        title: L(
          'Photoshoots & albums',
          'Φωτογραφήσεις και άλμπουμ',
          'Съёмки и альбомы',
        ),
        items: [
          L(
            'Digital album with 200 photos, 30×80cm — 150 cover options in leather, wood, glass, or aluminium',
            'Ψηφιακό άλμπουμ με 200 φωτογραφίες, 30×80εκ. — 150 επιλογές εξωφύλλου σε δέρμα, ξύλο, γυαλί ή αλουμίνιο',
            'Цифровой альбом на 200 фото, 30×80 см — 150 вариантов обложки: кожа, дерево, стекло или алюминий',
          ),
          L(
            'Personal designer for editing and album layout',
            'Προσωπικός σχεδιαστής για επεξεργασία και layout άλμπουμ',
            'Персональный дизайнер для обработки и вёрстки альбома',
          ),
          L(
            '2 matching mini digital albums, 20×40cm',
            '2 ίδια μικρά ψηφιακά άλμπουμ, 20×40εκ.',
            '2 одинаковых mini digital-альбома, 20×40 см',
          ),
          L(
            'USB HD reception video · friend & family interviews · multi-camera professional edit',
            'USB HD βίντεο δεξίωσης · συνεντεύξεις φίλων & οικογένειας · multi-camera επαγγελματικό μοντάζ',
            'USB HD-видео приёма · интервью друзей и семьи · профессиональный multi-camera монтаж',
          ),
          L(
            'Hollywood cinematic trailer',
            'Hollywood cinematic trailer',
            'Hollywood cinematic trailer',
          ),
        ],
      },
      {
        title: L('Film, crew & prints', 'Film, πλήρωμα & εκτυπώσεις', 'Film, команда и отпечатки'),
        items: [
          L('Instagram video', 'Instagram video', 'Instagram-видео'),
          L(
            'Panoramic drone videography',
            'Πανοραμική βιντεοσκόπηση με drone',
            'Панорамная видеосъёмка с дрона',
          ),
          L(
            'Unlimited HD photos on USB · 1 GoPro camera',
            'Απεριόριστες φωτογραφίες HD σε USB · 1 κάμερα GoPro',
            'Безлимитные HD-фото на USB · 1 камера GoPro',
          ),
          L(
            '1 photographer and 2 videographers',
            '1 φωτογράφος και 2 βιντεογράφοι',
            '1 фотограф и 2 видеографа',
          ),
          L(
            'Prints: 3× 40×60, 50× 15×20, and 1 canvas 40×60',
            'Εκτυπώσεις: 3× 40×60, 50× 15×20 και 1 καμβάς 40×60',
            'Отпечатки: 3× 40×60, 50× 15×20 и 1 холст 40×60',
          ),
          L(
            'External professional photoshoot on a different day — yacht, luxury car, or other locations',
            'Εξωτερική επαγγελματική φωτογράφιση άλλη ημέρα — yacht, luxury αυτοκίνητο ή άλλες τοποθεσίες',
            'Внешняя профессиональная съёмка в другой день — яхта, люксовое авто или другие локации',
          ),
          L(
            'Commemorative crystal USB · delivery in 4 days',
            'Αναμνηστικό κρυστάλλινο USB · παράδοση σε 4 ημέρες',
            'Памятный crystal USB · сдача за 4 дня',
          ),
        ],
      },
    ],
  },
  {
    id: 'photoway-3',
    sortOrder: 3,
    name: L('PhotoWay 3', 'PhotoWay 3', 'PhotoWay 3'),
    tagline: L(
      'Signature cinematic depth — larger albums, same-day video, dual GoPros, and richer prints.',
      'Υπογραφή με κινηματογραφικό βάθος — μεγαλύτερα άλμπουμ, βίντεο την ίδια ημέρα, δύο GoPro και πλουσιότερες εκτυπώσεις.',
      'Фирменная cinematic-глубина — большие альбомы, same-day video, два GoPro и richer-отпечатки.',
    ),
    priceDisplay: L('€2,900', '€2.900', '€2 900'),
    image: `${IMG}/photoway-3.webp`,
    featured: true,
    highlight: L(
      'The balanced PhotoWay signature — same-day film energy with expanded albums and canvases.',
      'Η ισορροπημένη υπογραφή PhotoWay — same-day film energy με εμπλουτισμένα άλμπουμ και καμβάδες.',
      'Сбалансированная подпись PhotoWay — энергия same-day film с расширенными альбомами и холстами.',
    ),
    sections: [
      {
        title: L(
          'Photoshoots & albums',
          'Φωτογραφήσεις και άλμπουμ',
          'Съёмки и альбомы',
        ),
        items: [
          L(
            'Digital album with 250 photos, 30×80cm — 150+ cover choices in leather, wood, glass, or aluminium',
            'Ψηφιακό άλμπουμ με 250 φωτογραφίες, 30×80εκ. — 150+ επιλογές εξωφύλλου σε δέρμα, ξύλο, γυαλί ή αλουμίνιο',
            'Цифровой альбом на 250 фото, 30×80 см — 150+ обложек: кожа, дерево, стекло или алюминий',
          ),
          L(
            'Personal designer for photo editing and album layout',
            'Προσωπικός σχεδιαστής για επεξεργασία φωτογραφιών και layout άλμπουμ',
            'Персональный дизайнер для обработки фото и вёрстки альбома',
          ),
          L(
            '2 matching mini digital albums, 25×40cm',
            '2 ίδια μικρά ψηφιακά άλμπουμ, 25×40εκ.',
            '2 одинаковых mini digital-альбома, 25×40 см',
          ),
          L(
            'USB HD reception video · interviews · multi-camera professional montage',
            'USB HD βίντεο δεξίωσης · συνεντεύξεις · multi-camera επαγγελματικό μοντάζ',
            'USB HD-видео приёма · интервью · профессиональный multi-camera монтаж',
          ),
          L(
            'Hollywood cinematic trailer · dedicated Instagram video',
            'Hollywood cinematic trailer · αφιερωμένο Instagram video',
            'Hollywood cinematic trailer · отдельное Instagram-видео',
          ),
        ],
      },
      {
        title: L('Same-day film, crew & prints', 'Same-day film, πλήρωμα & εκτυπώσεις', 'Same-day film, команда и отпечатки'),
        items: [
          L(
            'Same-day event video',
            'Same-day video της εκδήλωσης',
            'Same-day видео события',
          ),
          L(
            'Panoramic drone videography',
            'Πανοραμική βιντεοσκόπηση με drone',
            'Панорамная видеосъёмка с дрона',
          ),
          L(
            'Unlimited HD photos on USB · 2 GoPro cameras',
            'Απεριόριστες φωτογραφίες HD σε USB · 2 κάμερες GoPro',
            'Безлимитные HD-фото на USB · 2 камеры GoPro',
          ),
          L(
            '1 professional photographer and 2 professional videographers',
            '1 επαγγελματίας φωτογράφος και 2 επαγγελματίες βιντεογράφοι',
            '1 профессиональный фотограф и 2 профессиональных видеографа',
          ),
          L(
            'Prints: 6× 40×60, 100× 15×20, and 2 canvases 40×60',
            'Εκτυπώσεις: 6× 40×60, 100× 15×20 και 2 καμβάδες 40×60',
            'Отпечатки: 6× 40×60, 100× 15×20 и 2 холста 40×60',
          ),
          L(
            'External professional photoshoot on a different day — yacht, luxury car, or other locations',
            'Εξωτερική επαγγελματική φωτογράφιση άλλη ημέρα — yacht, luxury αυτοκίνητο ή άλλες τοποθεσίες',
            'Внешняя профессиональная съёмка в другой день — яхта, люксовое авто или другие локации',
          ),
          L(
            'Commemorative crystal USB · delivery in 4 days',
            'Αναμνηστικό κρυστάλλινο USB · παράδοση σε 4 ημέρες',
            'Памятный crystal USB · сдача за 4 дня',
          ),
        ],
      },
    ],
  },
  {
    id: 'photoway-4',
    sortOrder: 4,
    name: L('PhotoWay 4', 'PhotoWay 4', 'PhotoWay 4'),
    tagline: L(
      'The fullest PhotoWay production — larger albums, dual photographers, and an expanded cinematic crew.',
      'Η πληρέστερη παραγωγή PhotoWay — μεγαλύτερα άλμπουμ, δύο φωτογράφοι και ενισχυμένο κινηματογραφικό συνεργείο.',
      'Самая полная постановка PhotoWay — большие альбомы, два фотографа и расширенная cinematic-команда.',
    ),
    priceDisplay: L('€3,600', '€3.600', '€3 600'),
    image: `${IMG}/photoway-4.webp`,
    highlight: L(
      'Maximum storytelling scale — 300-photo album, cinematography, drone, and a five-person media team.',
      'Μέγιστη κλίμακα storytelling — άλμπουμ 300 φωτογραφιών, cinematography, drone και πενταμελής ομάδα media.',
      'Максимальный масштаб storytelling — альбом на 300 фото, cinematography, дрон и команда media из пяти человек.',
    ),
    sections: [
      {
        title: L(
          'Photoshoots & albums',
          'Φωτογραφήσεις και άλμπουμ',
          'Съёмки и альбомы',
        ),
        items: [
          L(
            'Digital album with 300 photos, 30×80cm — leather (150 options), wood, glass, or aluminium cover',
            'Ψηφιακό άλμπουμ με 300 φωτογραφίες, 30×80εκ. — εξώφυλλο δέρμα (150 επιλογές), ξύλο, γυαλί ή αλουμίνιο',
            'Цифровой альбом на 300 фото, 30×80 см — обложка кожа (150 вариантов), дерево, стекло или алюминий',
          ),
          L(
            'Personal designer for photo editing and album layout',
            'Προσωπικός σχεδιαστής για επεξεργασία φωτογραφιών και layout άλμπουμ',
            'Персональный дизайнер для обработки фото и вёрстки альбома',
          ),
          L(
            '2 matching mini digital albums, 40×60cm',
            '2 ίδια μικρά ψηφιακά άλμπουμ, 40×60εκ.',
            '2 одинаковых mini digital-альбома, 40×60 см',
          ),
          L(
            'USB HD reception video · interviews · multi-camera professional edit',
            'USB HD βίντεο δεξίωσης · συνεντεύξεις · multi-camera επαγγελματικό μοντάζ',
            'USB HD-видео приёма · интервью · профессиональный multi-camera монтаж',
          ),
          L(
            'Hollywood cinematic trailer · same-day video',
            'Hollywood cinematic trailer · same-day video',
            'Hollywood cinematic trailer · same-day video',
          ),
        ],
      },
      {
        title: L('Cinematography, crew & prints', 'Cinematography, πλήρωμα & εκτυπώσεις', 'Cinematography, команда и отпечатки'),
        items: [
          L('Instagram video · cinematography coverage', 'Instagram video · κάλυψη cinematography', 'Instagram-видео · cinematography-съёмка'),
          L(
            'Panoramic drone videography',
            'Πανοραμική βιντεοσκόπηση με drone',
            'Панорамная видеосъёмка с дрона',
          ),
          L(
            'Unlimited HD photos on USB · 2 GoPro cameras',
            'Απεριόριστες φωτογραφίες HD σε USB · 2 κάμερες GoPro',
            'Безлимитные HD-фото на USB · 2 камеры GoPro',
          ),
          L(
            '2 photographers and 3 videographers',
            '2 φωτογράφοι και 3 βιντεογράφοι',
            '2 фотографа и 3 видеографа',
          ),
          L(
            'Prints: 10× 40×60, 130× 15×20, and 3 canvases 40×60',
            'Εκτυπώσεις: 10× 40×60, 130× 15×20 και 3 καμβάδες 40×60',
            'Отпечатки: 10× 40×60, 130× 15×20 и 3 холста 40×60',
          ),
          L(
            'External professional photoshoot on a different day — yacht, luxury car, or other locations',
            'Εξωτερική επαγγελματική φωτογράφιση άλλη ημέρα — yacht, luxury αυτοκίνητο ή άλλες τοποθεσίες',
            'Внешняя профессиональная съёмка в другой день — яхта, люксовое авто или другие локации',
          ),
          L(
            'Commemorative crystal USB · delivery in 4 days',
            'Αναμνηστικό κρυστάλλινο USB · παράδοση σε 4 ημέρες',
            'Памятный crystal USB · сдача за 4 дня',
          ),
        ],
      },
    ],
  },
]

export function getPhotoWayPackage(id: string | undefined) {
  return photoWayPackages.find((pkg) => pkg.id === id)
}

export function getPhotoWayPackageExpandedSections(id: string | undefined) {
  const pkg = getPhotoWayPackage(id)
  return pkg?.sections
}
