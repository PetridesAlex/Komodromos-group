import type { LocalizedText } from '../lib/weddingLocale'
import type { WeddingFeaturePageContent } from './weddingFeaturePage'

const IMG = '/images/services/wedding-highlights/shisha-card'

export const weddingShishaLoungeCopy = {
  key: 'shisha',
  hero: {
    src: `${IMG}/wedding-party-smoke.webp`,
    width: 1536,
    height: 1024,
    position: '50% 30%',
  },
  story: {
    image: { src: `${IMG}/garden-lounge-evening.webp`, width: 1291, height: 1218 },
    imageAlt: {
      en: 'Elegant shisha lounge set among illuminated garden trees at night',
      el: 'Κομψός χώρος ναργιλέ ανάμεσα σε φωτισμένα δέντρα κήπου τη νύχτα',
      ru: 'Элегантная кальянная зона среди освещённых деревьев сада ночью',
    } satisfies LocalizedText,
  },

  eyebrow: {
    en: 'After-dark hospitality',
    el: 'Φιλοξενία μετά τη δύση',
    ru: 'Вечерний hospitality',
  } satisfies LocalizedText,
  pageTitle: {
    en: 'Luxury Shisha Lounge',
    el: 'Luxury Shisha Lounge',
    ru: 'Luxury Shisha Lounge',
  } satisfies LocalizedText,
  lead: {
    en: 'A different side of the wedding evening.',
    el: 'Μια διαφορετική πλευρά της γαμήλιας βραδιάς.',
    ru: 'Другая сторона свадебного вечера.',
  } satisfies LocalizedText,
  intro: [
    {
      en: 'As the evening unfolds, create a space where your guests can relax, converse, and enjoy a different side of the wedding experience.',
      el: 'Καθώς η βραδιά εξελίσσεται, δημιουργήστε έναν χώρο όπου οι καλεσμένοι σας μπορούν να χαλαρώσουν, να συζητήσουν και να απολαύσουν μια διαφορετική πλευρά της γαμήλιας εμπειρίας.',
      ru: 'По мере развития вечера создайте пространство, где гости могут расслабиться, пообщаться и насладиться другой стороной свадебного опыта.',
    },
  ],

  storyEyebrow: {
    en: 'The experience',
    el: 'Η εμπειρία',
    ru: 'Впечатление',
  } satisfies LocalizedText,
  storyTitle: {
    en: 'An elegant meeting point, away from the dance floor',
    el: 'Ένα κομψό σημείο συνάντησης, μακριά από την πίστα',
    ru: 'Элегантное место встречи вдали от танцпола',
  } satisfies LocalizedText,
  storyParagraphs: [
    {
      en: 'The Luxury Shisha Lounge adds a sophisticated lounge atmosphere to your reception — an elegant meeting point away from the rhythm of the dance floor. A distinctive setting where relaxation, company, and night-time ambience combine into a unique hospitality experience.',
      el: 'Το Luxury Shisha Lounge προσθέτει στη δεξίωσή σας μια sophisticated lounge ατμόσφαιρα, δημιουργώντας ένα elegant σημείο συνάντησης μακριά από τον ρυθμό της πίστας. Ένα ιδιαίτερο setting όπου η χαλάρωση, η παρέα και η νυχτερινή ατμόσφαιρα συνδυάζονται σε μια ξεχωριστή εμπειρία φιλοξενίας.',
      ru: 'Luxury Shisha Lounge добавляет sophisticated lounge атмосферу на банкет — elegant meeting point вдали от ритма танцпола. И distinctive setting, где расслабление, компания и ночная атмосфера сливаются в unique hospitality experience.',
    },
    {
      en: 'More than an extra amenity, it becomes an exclusive after-dark experience that adds character and an unexpected luxury touch to the evening.',
      el: 'Περισσότερο από μία επιπλέον παροχή, γίνεται ένα exclusive after-dark experience που προσθέτει χαρακτήρα και μια απρόσμενη luxury πινελιά στη βραδιά.',
      ru: 'Больше, чем дополнительная услуга — это exclusive after-dark experience, добавляющий характер и неожиданный luxury штрих вечеру.',
    },
  ],

  pillarsEyebrow: {
    en: 'Signature details',
    el: 'Χαρακτηριστικές λεπτομέρειες',
    ru: 'Фирменные детали',
  } satisfies LocalizedText,
  pillarsTitle: {
    en: 'Crafted for the details guests remember',
    el: 'Σχεδιασμένο για τις λεπτομέρειες που θυμούνται οι καλεσμένοι',
    ru: 'Создано для деталей, которые запоминаются гостям',
  } satisfies LocalizedText,
  pillars: [
    {
      id: 'atmosphere',
      title: { en: 'Lounge Atmosphere', el: 'Lounge Ατμόσφαιρα', ru: 'Атмосфера лаунжа' },
      body: {
        en: 'Warm lighting, refined seating and an intimate mood that gives guests a calm, stylish retreat within your celebration.',
        el: 'Ζεστός φωτισμός, προσεγμένα καθίσματα και μια οικεία διάθεση που προσφέρει στους καλεσμένους ένα ήρεμο, κομψό καταφύγιο μέσα στη γιορτή σας.',
        ru: 'Тёплый свет, продуманная мебель и камерное настроение — спокойный, стильный уголок внутри вашего праздника.',
      },
    },
    {
      id: 'collection',
      title: { en: 'Curated Collection', el: 'Επιλεγμένη Συλλογή', ru: 'Тщательно подобранная коллекция' },
      body: {
        en: 'Premium shisha pieces in glass, brass and gold finishes, presented as part of the décor rather than an afterthought.',
        el: 'Premium ναργιλέδες σε γυαλί, ορείχαλκο και χρυσές επιφάνειες, που παρουσιάζονται ως μέρος του décor και όχι ως επιπλέον λεπτομέρεια.',
        ru: 'Premium кальяны из стекла, латуни и золотых акцентов — часть декора, а не дополнение.',
      },
    },
    {
      id: 'craft',
      title: { en: 'Expert Preparation', el: 'Εξειδικευμένη Προετοιμασία', ru: 'Мастерская подготовка' },
      body: {
        en: 'Every bowl is prepared with care and attention, from the glowing coals to the final draw, for a smooth and consistent experience.',
        el: 'Κάθε μπολ ετοιμάζεται με φροντίδα και προσοχή, από τα αναμμένα κάρβουνα μέχρι την τελική εμπειρία, για μια απαλή και σταθερή απόλαυση.',
        ru: 'Каждая чаша готовится с заботой — от тлеющих углей до последней затяжки, для мягкого и стабильного вкуса.',
      },
    },
    {
      id: 'presentation',
      title: { en: 'Signature Presentation', el: 'Signature Παρουσίαση', ru: 'Фирменная подача' },
      body: {
        en: 'Fresh fruit-head serves, an illuminated mobile bar and theatrical clouds of smoke create striking moments for guests and photographs alike.',
        el: 'Φρέσκα fruit-head σερβιρίσματα, φωτισμένο κινητό μπαρ και θεαματικά σύννεφα καπνού δημιουργούν εντυπωσιακές στιγμές για καλεσμένους και φωτογραφίες.',
        ru: 'Подача в свежих фруктах, подсвеченный мобильный бар и театральные облака дыма создают эффектные моменты для гостей и фотографий.',
      },
    },
  ],

  galleryEyebrow: {
    en: 'Gallery',
    el: 'Γκαλερί',
    ru: 'Галерея',
  } satisfies LocalizedText,
  galleryTitle: {
    en: 'The lounge, in moments',
    el: 'Το lounge, σε στιγμές',
    ru: 'Лаунж в деталях',
  } satisfies LocalizedText,
  galleryIntro: {
    en: 'From the first spark of the coals to laughter among friends under the stars.',
    el: 'Από την πρώτη σπίθα των κάρβουνων μέχρι τα γέλια των φίλων κάτω από τα αστέρια.',
    ru: 'От первой искры углей до смеха друзей под звёздами.',
  } satisfies LocalizedText,
  gallery: [
    {
      id: 'wedding-party-smoke',
      src: `${IMG}/wedding-party-smoke.webp`,
      width: 1536,
      height: 1024,
      caption: {
        en: 'The bridal party shares a celebratory moment',
        el: 'Το bridal party μοιράζεται μια γιορτινή στιγμή',
        ru: 'Свадебная компания делит праздничный момент',
      },
    },
    {
      id: 'couple-first-draw',
      src: `${IMG}/couple-first-draw.webp`,
      width: 1214,
      height: 1295,
      caption: {
        en: 'The couple, beneath the evening lights',
        el: 'Το ζευγάρι κάτω από τα φώτα της βραδιάς',
        ru: 'Пара под огнями вечера',
      },
    },
    {
      id: 'shisha-collection',
      src: `${IMG}/shisha-collection.webp`,
      width: 1525,
      height: 1031,
      caption: {
        en: 'A curated collection in glass and gold',
        el: 'Επιλεγμένη συλλογή σε γυαλί και χρυσό',
        ru: 'Коллекция из стекла и золота',
      },
    },
    {
      id: 'shisha-pipes-detail',
      src: `${IMG}/shisha-pipes-detail.webp`,
      width: 1023,
      height: 1537,
      caption: {
        en: 'Refined craftsmanship in every detail',
        el: 'Εκλεπτυσμένη τεχνογνωσία σε κάθε λεπτομέρεια',
        ru: 'Утончённое мастерство в каждой детали',
      },
    },
    {
      id: 'guests-lounge',
      src: `${IMG}/guests-lounge.webp`,
      width: 1532,
      height: 1027,
      caption: {
        en: 'Conversation and laughter after dark',
        el: 'Συζήτηση και γέλιο μετά τη δύση',
        ru: 'Разговоры и смех после заката',
      },
    },
    {
      id: 'evening-gentleman',
      src: `${IMG}/evening-gentleman.webp`,
      width: 1023,
      height: 1537,
      caption: {
        en: 'A quiet moment of indulgence',
        el: 'Μια ήρεμη στιγμή απόλαυσης',
        ru: 'Тихий момент наслаждения',
      },
    },
    {
      id: 'glowing-coals',
      src: `${IMG}/glowing-coals.webp`,
      width: 1254,
      height: 1254,
      caption: {
        en: 'Premium coals, glowing and ready',
        el: 'Premium κάρβουνα, αναμμένα και έτοιμα',
        ru: 'Premium угли — раскалённые и готовые',
      },
    },
    {
      id: 'garden-lounge-evening',
      src: `${IMG}/garden-lounge-evening.webp`,
      width: 1291,
      height: 1218,
      caption: {
        en: 'A garden lounge set under the trees',
        el: 'Ένα garden lounge κάτω από τα δέντρα',
        ru: 'Садовый лаунж под деревьями',
      },
    },
    {
      id: 'mobile-shisha-bar',
      src: `${IMG}/mobile-shisha-bar.webp`,
      width: 1277,
      height: 1232,
      caption: {
        en: 'The illuminated mobile shisha bar',
        el: 'Το φωτισμένο κινητό shisha bar',
        ru: 'Подсвеченный мобильный кальянный бар',
      },
    },
    {
      id: 'bowl-preparation',
      src: `${IMG}/bowl-preparation.webp`,
      width: 941,
      height: 1672,
      caption: {
        en: 'Each bowl prepared by hand',
        el: 'Κάθε μπολ ετοιμάζεται με το χέρι',
        ru: 'Каждая чаша готовится вручную',
      },
    },
    {
      id: 'fruit-head-presentation',
      src: `${IMG}/fruit-head-presentation.webp`,
      width: 917,
      height: 1716,
      caption: {
        en: 'Signature fruit-head presentation',
        el: 'Signature παρουσίαση σε φρούτο',
        ru: 'Фирменная подача во фрукте',
      },
    },
  ],

  quote: {
    en: 'Because an unforgettable wedding is not only made of moments that impress. It also has moments you simply want to last a little longer.',
    el: 'Γιατί ένας αξέχαστος γάμος δεν έχει μόνο στιγμές που εντυπωσιάζουν. Έχει και στιγμές που θέλεις απλώς να κρατήσουν λίγο περισσότερο.',
    ru: 'Потому что незабываемая свадьба — это не только моменты, которые впечатляют. Это и моменты, которые хочется просто продлить.',
  } satisfies LocalizedText,

  closingEyebrow: {
    en: 'Add the lounge to your evening',
    el: 'Προσθέστε το lounge στη βραδιά σας',
    ru: 'Добавьте лаунж в ваш вечер',
  } satisfies LocalizedText,
  closingLead: {
    en: 'Let your guests linger a little longer.',
    el: 'Αφήστε τους καλεσμένους σας να μείνουν λίγο περισσότερο.',
    ru: 'Позвольте гостям задержаться чуть дольше.',
  } satisfies LocalizedText,
  closingBody: {
    en: 'Speak with our team to include the Luxury Shisha Lounge in your wedding and tailor it to your venue, guest count and style.',
    el: 'Μιλήστε με την ομάδα μας για να συμπεριλάβετε το Luxury Shisha Lounge στον γάμο σας και να το προσαρμόσετε στον χώρο, τον αριθμό καλεσμένων και το στυλ σας.',
    ru: 'Свяжитесь с нашей командой, чтобы включить Luxury Shisha Lounge в вашу свадьбу и подобрать формат под площадку, количество гостей и стиль.',
  } satisfies LocalizedText,
  brandTagline: {
    en: 'Every detail, beautifully considered.',
    el: 'Κάθε λεπτομέρεια, προσεκτικά σχεδιασμένη.',
    ru: 'Каждая деталь продумана.',
  } satisfies LocalizedText,
} satisfies WeddingFeaturePageContent
