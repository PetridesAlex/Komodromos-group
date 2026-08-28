/**
 * Wedding Sky complete christening packages — from atelier flyers.
 */

import type { LocalizedText } from '../lib/weddingLocale'

const IMG =
  '/images/services/wedding-highlights/wedding-christening-packages'

export type ChristeningPackageSection = {
  title: LocalizedText
  items: LocalizedText[]
}

export type ChristeningPackage = {
  id: string
  sortOrder: number
  name: LocalizedText
  tagline: LocalizedText
  priceDisplay: LocalizedText
  priceNote?: LocalizedText
  image: string
  highlight: LocalizedText
  sections: ChristeningPackageSection[]
  /** Elevated card treatment in the pricing grid */
  featured?: boolean
}

export const christeningPackagesPageCopy = {
  eyebrow: {
    en: 'Baptism celebrations',
    el: 'Γιορτές βάπτισης',
    ru: 'Крестины',
  } satisfies LocalizedText,
  title: {
    en: 'Christening packages',
    el: 'Πακέτα Βάπτισης',
    ru: 'Пакеты для крещения',
  } satisfies LocalizedText,
  heroTitleLine1: {
    en: 'Christening',
    el: 'Πακέτα',
    ru: 'Пакеты',
  } satisfies LocalizedText,
  heroTitleLine2: {
    en: 'Packages',
    el: 'Βάπτισης',
    ru: 'крещения',
  } satisfies LocalizedText,
  lead: {
    en: 'Complete programmes for church and reception — composed with the same care as a Wedding Sky celebration, from sacred styling to the final farewell.',
    el: 'Ολοκληρωμένα προγράμματα για εκκλησία και δεξίωση — με την ίδια φροντίδα μιας γιορτής Wedding Sky, από τον ιερό στολισμό έως τον αποχαιρετισμό.',
    ru: 'Полные программы для храма и приёма — с той же заботой Wedding Sky: от оформления таинства до последнего прощания.',
  } satisfies LocalizedText,
  backLabel: {
    en: 'Back to Wedding Sky',
    el: 'Επιστροφή στη Wedding Sky',
    ru: 'Назад к Wedding Sky',
  } satisfies LocalizedText,
  enquire: {
    en: 'Enquire about this package',
    el: 'Ενδιαφέρομαι για το πακέτο',
    ru: 'Узнать о пакете',
  } satisfies LocalizedText,
  enquireShort: {
    en: 'Enquire now',
    el: 'Εκδήλωση ενδιαφέροντος',
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
    el: 'Υπογραφή επιλογή',
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
    en: 'Choose your celebration tier',
    el: 'Επιλέξτε το επίπεδο της γιορτής σας',
    ru: 'Выберите уровень торжества',
  } satisfies LocalizedText,
  catalogueEyebrow: {
    en: 'The christening edit',
    el: 'Η σειρά βάπτισης',
    ru: 'Коллекция крещения',
  } satisfies LocalizedText,
  catalogueLead: {
    en: 'Four composed programmes — from essential styling to signature hospitality.',
    el: 'Τέσσερα ολοκληρωμένα προγράμματα — από βασικό στολισμό έως υπογραφή φιλοξενίας.',
    ru: 'Четыре программы — от базового декора до фирменного гостеприимства.',
  } satisfies LocalizedText,
} as const

const L = (en: string, el: string, ru: string): LocalizedText => ({ en, el, ru })

export const christeningPackages: readonly ChristeningPackage[] = [
  {
    id: 'christening-1',
    sortOrder: 1,
    name: L(
      'Complete Christening Package 1',
      'Ολοκληρωμένο Πακέτο Βάπτισης 1',
      'Полный пакет крещения 1',
    ),
    tagline: L(
      'Church and reception styling with refined decorative details.',
      'Στολισμός εκκλησίας και δεξίωσης με εκλεπτυσμένες λεπτομέρειες.',
      'Оформление храма и приёма с изысканными деталями.',
    ),
    priceDisplay: L('€850', '€850', '€850'),
    image: `${IMG}/christening-package-1.webp`,
    highlight: L(
      'Essential décor programme for a beautifully composed baptism day.',
      'Βασικό πρόγραμμα διακόσμησης για μια όμορφα συντεθειμένη ημέρα βάπτισης.',
      'Базовая программа декора для гармоничного дня крещения.',
    ),
    sections: [
      {
        title: L(
          'Church & reception décor',
          'Διακόσμηση εκκλησίας και αίθουσας',
          'Декор храма и зала',
        ),
        items: [
          L(
            'Church decoration (interior & exterior) based on the christening theme',
            'Διακόσμηση εκκλησίας (εσωτερικά και εξωτερικά) με βάση το θέμα της βάπτισης',
            'Оформление храма (внутри и снаружи) по теме крещения',
          ),
          L('Baptismal font decoration', 'Διακόσμηση κολυμβήθρας', 'Оформление купели'),
          L(
            'Reception hall decoration to the christening theme',
            'Διακόσμηση αίθουσας δεξιώσεως με το θέμα της βάπτισης',
            'Оформление зала приёма в теме крещения',
          ),
          L(
            '3D polystyrene constructions based on the theme',
            'Κατασκευές από πολυστερίνη με βάση το θέμα της βάπτισης',
            '3D-конструкции из полистирола по теме',
          ),
          L(
            'Glass cylinders with candles suited to the venue',
            'Γυάλινοι κύλινδροι με κεριά αναλόγως αίθουσας',
            'Стеклянные цилиндры со свечами под площадку',
          ),
          L(
            'Dedicated decorated guest-book area',
            'Ξεχωριστός διακοσμημένος χώρος βιβλίου ευχών',
            'Отдельная оформленная зона книги пожеланий',
          ),
          L('Fabric arch', 'Αψίδα με υφάσματα', 'Арка с тканями'),
          L('Themed christening arch', 'Αψίδα με θέμα βάπτισης', 'Тематическая арка крещения'),
          L('Child photo arch', 'Αψίδα με φωτογραφίες παιδιού', 'Арка с фото ребёнка'),
          L('Candlesticks and lanterns', 'Κηροπήγια και φαναράκια', 'Подсвечники и фонарики'),
          L('Cake stand', 'Βάση τούρτας', 'Подставка для торта'),
          L('Royal fairy lights', 'Royal fairy lights', 'Королевская гирлянда'),
          L(
            'Decorative banner with christening theme (2m × 1m)',
            'Διακοσμητικό μπάνερ με θέμα βάπτισης (2μ × 1μ)',
            'Декоративный баннер с темой крещения (2×1 м)',
          ),
          L(
            'Decorative bases for children’s and family favours',
            'Επιλογή διακοσμητικής βάσης για μπομπονιέρες (παιδικές και οικογένειας)',
            'Декоративные базы для бонбоньерок (детских и семейных)',
          ),
          L(
            '2 glass cylinders with chilled drinks of your choice',
            '2 γυάλινοι κύλινδροι με δροσερά ποτά της αρεσκείας σας',
            '2 стеклянных цилиндра с прохладительными напитками на выбор',
          ),
          L(
            'Welcome reception frame with greeting',
            'Κορνίζα υποδοχής με επιγραφή καλωσορίσματος',
            'Рамка приветствия на входе',
          ),
          L(
            'Food and sweets buffet styling',
            'Στολισμός στο μπουφέ φαγητών και γλυκών',
            'Оформление фуршета с едой и сладостями',
          ),
          L('150 placemats', '150 σουπλάν', '150 плейсматов'),
          L('Decoration of 15 tables', 'Στολισμός 15 τραπεζιών', 'Оформление 15 столов'),
          L(
            'Impressive décor for parents’ and godparents’ table',
            'Εντυπωσιακός στολισμός για τραπέζι γονέων και νονού',
            'Выразительное оформление стола родителей и крёстных',
          ),
          L('Secure envelope box', 'Ασφαλές κουτί φακέλων', 'Безопасный ящик для конвертов'),
          L(
            'Balloons (extra charge)',
            'Μπαλόνια (επιπλέον χρέωση)',
            'Шары (за дополнительную плату)',
          ),
        ],
      },
    ],
  },
  {
    id: 'christening-2',
    sortOrder: 2,
    name: L(
      'Complete Christening Package 2',
      'Ολοκληρωμένο Πακέτο Βάπτισης 2',
      'Полный пакет крещения 2',
    ),
    tagline: L(
      'Elevated décor with floral arches, columns, and guest-list styling.',
      'Αναβαθμισμένος στολισμός με ανθοστολισμένες αψίδες, κολώνες και λίστα καλεσμένων.',
      'Расширенный декор с цветочными арками, колоннами и оформлением списка гостей.',
    ),
    priceDisplay: L('€1,100', '€1.100', '€1 100'),
    image: `${IMG}/christening-package-2.webp`,
    highlight: L(
      'Everything in Package 1, enriched with floral architecture and guest presentation.',
      'Όλα του Πακέτου 1, εμπλουτισμένα με ανθοστολισμό και παρουσίαση καλεσμένων.',
      'Всё из Пакета 1, плюс цветочная архитектура и презентация гостей.',
    ),
    sections: [
      {
        title: L('Includes Package 1 décor', 'Περιλαμβάνει τη διακόσμηση του Πακέτου 1', 'Включает декор Пакета 1'),
        items: [
          L(
            'All Package 1 church, hall, and table décor inclusions',
            'Όλες οι παροχές διακόσμησης εκκλησίας, αίθουσας και τραπεζιών του Πακέτου 1',
            'Все позиции декора храма, зала и столов из Пакета 1',
          ),
          L('Flower arch', 'Αψίδα με λουλούδια', 'Цветочная арка'),
          L(
            'Columns with flower stands',
            'Κολώνες με βάσεις λουλουδιών',
            'Колонны с цветочными подставками',
          ),
          L(
            'Guest list styled to the theme',
            'Λίστα καλεσμένων με βάση το θέμα',
            'Список гостей в теме торжества',
          ),
        ],
      },
    ],
  },
  {
    id: 'christening-3',
    sortOrder: 3,
    name: L(
      'Complete Christening Package 3',
      'Ολοκληρωμένο Πακέτο Βάπτισης 3',
      'Полный пакет крещения 3',
    ),
    tagline: L(
      'Full celebration — décor, photography, treats, candy bar, invitations, and day coordination.',
      'Πλήρης γιορτή — διακόσμηση, φωτογραφία, κεράσματα, candy bar, προσκλήσεις και συντονισμός.',
      'Полное торжество — декор, фото, угощения, candy bar, приглашения и координация дня.',
    ),
    priceDisplay: L('€1,900', '€1.900', '€1 900'),
    image: `${IMG}/christening-package-3.webp`,
    featured: true,
    highlight: L(
      'The complete baptism experience with memory-making and sweet hospitality.',
      'Η ολοκληρωμένη εμπειρία βάπτισης με αναμνήσεις και γλυκιά φιλοξενία.',
      'Полный опыт крещения: воспоминания и сладкое гостеприимство.',
    ),
    sections: [
      {
        title: L('Décor foundation', 'Βάση διακόσμησης', 'Основа декора'),
        items: [
          L(
            'All elevated church & reception décor from Packages 1–2',
            'Όλη η αναβαθμισμένη διακόσμηση εκκλησίας και δεξίωσης των Πακέτων 1–2',
            'Весь расширенный декор храма и приёма из Пакетов 1–2',
          ),
          L('Themed placemats for 100 guests', 'Θεματικά σουπλάν για 100 άτομα', 'Тематические плейсматы на 100 гостей'),
        ],
      },
      {
        title: L('Photography & albums', 'Φωτογραφίες και άλμπουμ', 'Фото и альбомы'),
        items: [
          L(
            'Two leather digital albums (30×60cm & 20×40cm) with 100 photos',
            'Δύο δερμάτινα ψηφιακά άλμπουμ (30×60εκ. & 20×40εκ.) με 100 φωτογραφίες',
            'Два кожаных цифровых альбома (30×60 и 20×40 см) со 100 фото',
          ),
          L(
            'Studio photography and designer album layout',
            'Φωτογράφιση στούντιο και σχεδιασμός άλμπουμ από designer',
            'Студийная съёмка и дизайн альбома',
          ),
          L(
            'Cover options in leather, wood, aluminium, or glass',
            'Επιλογές εξωφύλλου σε δέρμα, ξύλο, αλουμίνιο ή γυαλί',
            'Обложки: кожа, дерево, алюминий или стекло',
          ),
          L(
            'HD video of ceremony and reception on DVD/USB',
            'Βίντεο υψηλής ανάλυσης τελετής και δεξίωσης σε DVD/USB',
            'HD-видео церемонии и приёма на DVD/USB',
          ),
          L('One 50×70cm canvas print', 'Ένας καμβάς 50×70εκ.', 'Один холст 50×70 см'),
          L(
            'Large prints (40×60cm and 15×20cm)',
            'Εκτυπώσεις μεγάλου μεγέθους (40×60εκ. και 15×20εκ.)',
            'Крупные отпечатки (40×60 и 15×20 см)',
          ),
          L(
            '3-minute highlight trailer and unlimited photos on USB',
            'Highlight trailer 3 λεπτών και απεριόριστες φωτογραφίες σε USB',
            '3-минутный highlight и неограниченные фото на USB',
          ),
          L('Delivery within 4 days', 'Παράδοση εντός 4 ημερών', 'Доставка в течение 4 дней'),
        ],
      },
      {
        title: L('Treats & candy bar', 'Κεράσματα και candy bar', 'Угощения и candy bar'),
        items: [
          L(
            '100 treats from 26 options with custom wrapping',
            '100 κεράσματα από 26 επιλογές με εξατομικευμένο περιτύλιγμα',
            '100 угощений из 26 вариантов с индивидуальной упаковкой',
          ),
          L('2-tier themed cake', 'Τούρτα 2 επιπέδων με θέμα', 'Двухъярусный тематический торт'),
          L(
            'Sweets table with 5 glass cylinders',
            'Τραπέζι γλυκών με 5 γυάλινους κυλίνδρους',
            'Стол сладостей с 5 стеклянными цилиндрами',
          ),
          L('Chocolate fountain', 'Σιντριβάνι σοκολάτας', 'Шоколадный фонтан'),
          L('15 cupcakes & 15 cake pops', '15 cupcakes και 15 cake pops', '15 капкейков и 15 кейк-попсов'),
          L(
            'Two drink fountains (lemonade, sour cherry, or rose)',
            'Δύο σιντριβάνια ποτών (λεμονάδα, βύσσινο ή τριαντάφυλλο)',
            'Два фонтана напитков (лимонад, вишня или роза)',
          ),
          L(
            'Popcorn machine (extra charge)',
            'Μηχανή ποπκόρν (επιπλέον χρέωση)',
            'Аппарат попкорна (доп. плата)',
          ),
        ],
      },
      {
        title: L('Invitations & coordination', 'Προσκλήσεις και συντονισμός', 'Приглашения и координация'),
        items: [
          L(
            '60 invitations chosen from 150 designs',
            '60 προσκλήσεις από 150 σχέδια',
            '60 приглашений из 150 дизайнов',
          ),
          L('Guest book', 'Βιβλίο ευχών', 'Книга пожеланий'),
          L(
            'Full day coordination by specialised Wedding Sky staff',
            'Πλήρης συντονισμός της ημέρας από εξειδικευμένο προσωπικό Wedding Sky',
            'Полная координация дня специалистами Wedding Sky',
          ),
        ],
      },
    ],
  },
  {
    id: 'christening-4',
    sortOrder: 4,
    name: L(
      'Complete Christening Package 4',
      'Ολοκληρωμένο Πακέτο Βάπτισης 4',
      'Полный пакет крещения 4',
    ),
    tagline: L(
      'Signature hospitality — expanded treats, 100 invitations, and live entertainment.',
      'Υπογραφή φιλοξενίας — περισσότερα κεράσματα, 100 προσκλήσεις και ζωντανή ψυχαγωγία.',
      'Фирменное гостеприимство — больше угощений, 100 приглашений и живые развлечения.',
    ),
    priceDisplay: L('€2,300', '€2.300', '€2 300'),
    image: `${IMG}/christening-package-4.webp`,
    highlight: L(
      'Package 3 elevated with larger guest hospitality and entertainment choice.',
      'Το Πακέτο 3 αναβαθμισμένο με μεγαλύτερη φιλοξενία και επιλογή ψυχαγωγίας.',
      'Пакет 3 с расширенным гостеприимством и выбором развлечений.',
    ),
    sections: [
      {
        title: L('All of Package 3, plus', 'Όλα του Πακέτου 3, επιπλέον', 'Всё из Пакета 3, плюс'),
        items: [
          L(
            '150 treats from 26 options',
            '150 κεράσματα από 26 επιλογές',
            '150 угощений из 26 вариантов',
          ),
          L(
            'Candy table with chocolate fountain and richer sweet selection',
            'Τραπέζι γλυκών με σιντριβάνι σοκολάτας και πλουσιότερη επιλογή',
            'Стол сладостей с шоколадным фонтаном и расширенным ассортиментом',
          ),
          L(
            '15 cupcakes, 15 cake pops, 15 tarts & 15 cocktails',
            '15 cupcakes, 15 cake pops, 15 τάρτες και 15 cocktails',
            '15 капкейков, 15 кейк-попсов, 15 тарталеток и 15 коктейлей',
          ),
          L(
            '100 invitations from 150 designs',
            '100 προσκλήσεις από 150 σχέδια',
            '100 приглашений из 150 дизайнов',
          ),
          L(
            'Entertainment choice: magician, clown with face painting, or DJ',
            'Επιλογή ψυχαγωγίας: μάγος, κλόουν με face painting ή DJ',
            'Развлечение на выбор: фокусник, клоун с аквагримом или DJ',
          ),
          L(
            'Full professional day coordination',
            'Πλήρης επαγγελματικός συντονισμός της ημέρας',
            'Полная профессиональная координация дня',
          ),
        ],
      },
    ],
  },
]

export function getChristeningPackage(id: string | undefined) {
  return christeningPackages.find((pkg) => pkg.id === id)
}
