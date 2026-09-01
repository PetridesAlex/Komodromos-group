import type { LocalizedText } from '../lib/weddingLocale'

export type WeddingPackagesHubCardId = 'complete' | 'photography' | 'decor'

export type WeddingPackagesHubCard = {
  id: WeddingPackagesHubCardId
  title: LocalizedText
  tagline: LocalizedText
  image: string
  /** Internal group path; remapped by weddingBrandHref */
  href: string
  tone: 'gold' | 'azure' | 'champagne'
}

const SERVICE_IMG = '/images/services/wedding-highlights/wedding-services'
const CATEGORY_IMG = '/images/services/wedding-highlights/wedding-christening-packages'

export const weddingPackagesHubCopy = {
  eyebrow: {
    en: 'Private collections',
    el: 'Ιδιωτικές συλλογές',
    ru: 'Частные коллекции',
  } satisfies LocalizedText,
  title: {
    en: 'Wedding Packages',
    el: 'Πακέτα Γάμου',
    ru: 'Свадебные пакеты',
  } satisfies LocalizedText,
  heroTitleLine1: {
    en: 'Wedding Sky',
    el: 'Wedding Sky',
    ru: 'Wedding Sky',
  } satisfies LocalizedText,
  heroTitleLine2: {
    en: 'Packages',
    el: 'Πακέτα',
    ru: 'Пакеты',
  } satisfies LocalizedText,
  lead: {
    en: 'Three composed collections — complete programmes, photography, and décor — crafted with clarity, restraint, and signature Wedding Sky stewardship.',
    el: 'Τρεις συντεθειμένες συλλογές — ολοκληρωμένα προγράμματα, φωτογραφία και διακόσμηση — με σαφήνεια, μέτρο και την υπογραφή επιμέλειας της Wedding Sky.',
    ru: 'Три собранные коллекции — полные программы, фотография и декор — с ясностью, сдержанностью и фирменным сопровождением Wedding Sky.',
  } satisfies LocalizedText,
  backToAtelier: {
    en: 'Back to Wedding Sky',
    el: 'Πίσω στη Wedding Sky',
    ru: 'Назад к Wedding Sky',
  } satisfies LocalizedText,
  openCardAria: {
    en: 'Open {{title}}',
    el: 'Άνοιγμα: {{title}}',
    ru: 'Открыть: {{title}}',
  } satisfies LocalizedText,
  cards: [
    {
      id: 'complete',
      title: {
        en: 'Integrated Wedding Packages',
        el: 'Ενιαία Πακέτα Γάμου',
        ru: 'Интегрированные свадебные пакеты',
      },
      tagline: {
        en: 'Full Wedding Sky programmes — coordination, styling, and signature inclusions in one investment.',
        el: 'Ολοκληρωμένα προγράμματα Wedding Sky — συντονισμός, styling και signature παροχές σε μία επένδυση.',
        ru: 'Полные программы Wedding Sky — координация, стиль и signature inclusions в одной инвестиции.',
      },
      image: `${CATEGORY_IMG}/wedding-packages.webp`,
      href: '/services/wedding/wedding-packages/complete',
      tone: 'gold',
    },
    {
      id: 'photography',
      title: {
        en: 'Wedding Photography Packages',
        el: 'Πακέτα Φωτογράφισης Γάμου',
        ru: 'Пакеты свадебной фотографии',
      },
      tagline: {
        en: 'Cinematic photography & film programmes designed to capture every glance, detail, and emotion.',
        el: 'Κινηματογραφικά προγράμματα φωτογραφίας & film σχεδιασμένα να αποτυπώσουν κάθε βλέμμα, λεπτομέρεια και συναίσθημα.',
        ru: 'Кинематографические программы фото и film, созданные сохранить каждый взгляд, деталь и эмоцию.',
      },
      image: `${SERVICE_IMG}/wedding-photo-video.webp`,
      href: '/services/wedding/wedding-packages/photography',
      tone: 'azure',
    },
    {
      id: 'decor',
      title: {
        en: 'Wedding Décor Packages',
        el: 'Πακέτα Διακόσμησης Γάμου',
        ru: 'Пакеты свадебного декора',
      },
      tagline: {
        en: 'Florals, tablescapes, and atmospheric décor compositions for ceremony and reception.',
        el: 'Ανθοστολισμός, tablescapes και ατμοσφαιρικές συνθέσεις διακόσμησης για τελετή και δεξίωση.',
        ru: 'Флористика, tablescapes и атмосферные композиции декора для церемонии и банкета.',
      },
      image: `${SERVICE_IMG}/wedding-decor-cover-hero.webp`,
      href: '/services/wedding/wedding-packages/decor',
      tone: 'champagne',
    },
  ] as const satisfies ReadonlyArray<WeddingPackagesHubCard>,
}

export const weddingPackageFamilyCopy = {
  photography: {
    eyebrow: {
      en: 'Photography collection',
      el: 'Συλλογή φωτογραφίας',
      ru: 'Коллекция фотографии',
    } satisfies LocalizedText,
    title: {
      en: 'Wedding Photography Packages',
      el: 'Πακέτα Φωτογράφισης Γάμου',
      ru: 'Пакеты свадебной фотографии',
    } satisfies LocalizedText,
    lead: {
      en: 'Tailored photography and videography programmes are composed with you in a private consultation — so every frame matches the tone of your celebration.',
      el: 'Τα εξατομικευμένα προγράμματα φωτογραφίας και βιντεοσκόπησης συντίθενται μαζί σας σε ιδιωτική συνάντηση — ώστε κάθε κάδρο να ταιριάζει στον τόνο της γιορτής σας.',
      ru: 'Индивидуальные программы фото и видео составляются вместе с вами на частной консультации — чтобы каждый кадр соответствовал тону вашего торжества.',
    } satisfies LocalizedText,
    body: [
      {
        en: 'From elegant coverage of preparations and ceremony to cinematic evening film, Wedding Sky photography packages can be shaped around guest count, timeline, and the story you want to keep forever.',
        el: 'Από elegant κάλυψη προετοιμασίας και τελετής έως cinematic evening film, τα πακέτα φωτογραφίας της Wedding Sky διαμορφώνονται γύρω από τον αριθμό καλεσμένων, το χρονοδιάγραμμα και την ιστορία που θέλετε να κρατήσετε για πάντα.',
        ru: 'От elegant съёмки подготовки и церемонии до cinematic evening film — пакеты фотографии Wedding Sky формируются вокруг числа гостей, таймлайна и истории, которую вы хотите сохранить навсегда.',
      },
      {
        en: 'Book a consultation to review portfolios, discuss inclusions, and receive a clear proposal for your photography programme.',
        el: 'Κλείστε ραντεβού για να δείτε portfolios, να συζητήσετε inclusions και να λάβετε ξεκάθαρη πρόταση για το πρόγραμμα φωτογραφίας σας.',
        ru: 'Запишитесь на консультацию, чтобы посмотреть портфолио, обсудить inclusions и получить ясное предложение по вашей фотопрограмме.',
      },
    ] as const satisfies ReadonlyArray<LocalizedText>,
  },
  decor: {
    eyebrow: {
      en: 'Décor collection',
      el: 'Συλλογή διακόσμησης',
      ru: 'Коллекция декора',
    } satisfies LocalizedText,
    title: {
      en: 'Wedding Décor Packages',
      el: 'Πακέτα Διακόσμησης Γάμου',
      ru: 'Пакеты свадебного декора',
    } satisfies LocalizedText,
    lead: {
      en: 'Floral architecture, tablescapes, lighting mood, and ceremony styling — composed as a complete décor language for your wedding.',
      el: 'Ανθοστολισμός, tablescapes, φωτιστική ατμόσφαιρα και styling τελετής — συντεθειμένα ως μία ολοκληρωμένη γλώσσα διακόσμησης για τον γάμο σας.',
      ru: 'Флористика, tablescapes, свет и styling церемонии — как единый язык декора для вашей свадьбы.',
    } satisfies LocalizedText,
    body: [
      {
        en: 'Whether you need a refined church and reception foundation or a fully immersive signature setting, décor packages are designed around your venue, palette, and personality.',
        el: 'Είτε χρειάζεστε refined βάση για εκκλησία και δεξίωση είτε ένα πλήρως immersive signature setting, τα πακέτα διακόσμησης σχεδιάζονται γύρω από τον χώρο, την παλέτα και την προσωπικότητά σας.',
        ru: 'Нужна ли refined база для храма и банкета или immersive signature setting — пакеты декора создаются под площадку, палитру и ваш характер.',
      },
      {
        en: 'Book a consultation to explore samples, discuss scale, and receive a clear décor proposal tailored to your celebration.',
        el: 'Κλείστε ραντεβού για να δείτε δείγματα, να συζητήσετε κλίμακα και να λάβετε ξεκάθαρη πρόταση διακόσμησης προσαρμοσμένη στη γιορτή σας.',
        ru: 'Запишитесь на консультацию, чтобы увидеть образцы, обсудить масштаб и получить ясное предложение по декору под ваше торжество.',
      },
    ] as const satisfies ReadonlyArray<LocalizedText>,
  },
  bookCta: {
    en: 'Book a consultation',
    el: 'Κλείστε ραντεβού',
    ru: 'Записаться на консультацию',
  } satisfies LocalizedText,
  backToHub: {
    en: 'All wedding packages',
    el: 'Όλα τα πακέτα γάμου',
    ru: 'Все свадебные пакеты',
  } satisfies LocalizedText,
  backToAtelier: {
    en: 'Back to Wedding Sky',
    el: 'Πίσω στη Wedding Sky',
    ru: 'Назад к Wedding Sky',
  } satisfies LocalizedText,
}
