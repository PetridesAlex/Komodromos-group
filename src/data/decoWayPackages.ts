/**
 * Wedding Sky DecoWay décor packages — from atelier flyers.
 */

import type { LocalizedText } from '../lib/weddingLocale'

const IMG =
  '/images/services/wedding-highlights/completed-wedding-packages/decoway-wedding-packages'

export type DecoWayPackageSection = {
  title: LocalizedText
  items: LocalizedText[]
}

export type DecoWayPackage = {
  id: string
  sortOrder: number
  name: LocalizedText
  tagline: LocalizedText
  priceDisplay: LocalizedText
  priceNote?: LocalizedText
  image: string
  highlight: LocalizedText
  sections: DecoWayPackageSection[]
  featured?: boolean
}

export const decoWayPackagesPageCopy = {
  eyebrow: {
    en: 'Décor & florals',
    el: 'Διακόσμηση & ανθοστολισμός',
    ru: 'Декор и флористика',
  } satisfies LocalizedText,
  title: {
    en: 'Wedding Décor Packages',
    el: 'Πακέτα Διακόσμησης Γάμου',
    ru: 'Пакеты свадебного декора',
  } satisfies LocalizedText,
  heroTitleLine1: {
    en: 'DecoWay',
    el: 'DecoWay',
    ru: 'DecoWay',
  } satisfies LocalizedText,
  heroTitleLine2: {
    en: 'Packages',
    el: 'Πακέτα',
    ru: 'пакеты',
  } satisfies LocalizedText,
  lead: {
    en: 'Seven floral architecture programmes — from DecoWay 1 to DecoWay 6, plus Exclusive — for church, cars, reception, and atmosphere.',
    el: 'Επτά προγράμματα ανθοστολισμού — από DecoWay 1 έως DecoWay 6, μαζί με το Exclusive — για εκκλησία, αυτοκίνητα, δεξίωση και ατμόσφαιρα.',
    ru: 'Семь программ флористики — от DecoWay 1 до DecoWay 6, плюс Exclusive — для храма, авто, зала и атмосферы.',
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
    en: 'Only real flowers are used unless you request paper flowers. Services can be added or removed to suit your celebration.',
    el: 'Χρησιμοποιούμε ΜΟΝΟ αληθινά λουλούδια, εκτός αν ζητήσετε χάρτινα. Οι υπηρεσίες μπορούν να προστεθούν ή να αφαιρεθούν ανάλογα με τη γιορτή σας.',
    ru: 'Используем ТОЛЬКО живые цветы, если вы не запросите бумажные. Услуги можно добавить или исключить под ваше торжество.',
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
    en: 'Choose your DecoWay tier',
    el: 'Επιλέξτε το επίπεδο DecoWay',
    ru: 'Выберите уровень DecoWay',
  } satisfies LocalizedText,
  catalogueHeadingLine1: {
    en: 'Choose your',
    el: 'Επιλέξτε το',
    ru: 'Выберите',
  } satisfies LocalizedText,
  catalogueHeadingLine2: {
    en: 'DecoWay tier',
    el: 'Επίπεδο DecoWay',
    ru: 'уровень DecoWay',
  } satisfies LocalizedText,
  catalogueEyebrow: {
    en: 'The décor edit',
    el: 'Η σειρά διακόσμησης',
    ru: 'Коллекция декора',
  } satisfies LocalizedText,
  catalogueLead: {
    en: 'Seven composed floral programmes — from polished church & reception foundations to the fullest DecoWay production.',
    el: 'Επτά ολοκληρωμένα προγράμματα ανθοστολισμού — από έναν κομψό στολισμό εκκλησίας και δεξίωσης μέχρι την πληρέστερη παραγωγή DecoWay.',
    ru: 'Семь программ флористики — от отточенной основы храма и зала до самой полной постановки DecoWay.',
  } satisfies LocalizedText,
} as const

const L = (en: string, el: string, ru: string): LocalizedText => ({ en, el, ru })

const FLOWERS_NOTE = L(
  'Only real flowers in every DecoWay package unless you request paper flowers',
  'ΜΟΝΟ αληθινά λουλούδια σε κάθε πακέτο DecoWay, εκτός αν ζητήσετε χάρτινα',
  'ТОЛЬКО живые цветы в каждом пакете DecoWay, если вы не запросите бумажные',
)

export const decoWayPackages: readonly DecoWayPackage[] = [
  {
    id: 'decoway-1',
    sortOrder: 1,
    name: L('DecoWay 1', 'DecoWay 1', 'DecoWay 1'),
    tagline: L(
      'Polished church, cars, and reception florals with illuminated LOVE letters.',
      'Κομψός στολισμός εκκλησίας, αυτοκινήτων και δεξίωσης με φωτιζόμενα LOVE.',
      'Отточенный декор храма, авто и зала со светящимися LOVE.',
    ),
    priceDisplay: L('€1,900', '€1.900', '€1 900'),
    image: `${IMG}/decoway-1.webp`,
    highlight: L(
      'A complete DecoWay foundation — arches, aisle styling, candy table, and up to 15 guest tables.',
      'Ολοκληρωμένη βάση DecoWay — αψίδες, διάδρομος, candy table και έως 15 τραπέζια καλεσμένων.',
      'Полная основа DecoWay — арки, проход, candy table и до 15 гостевых столов.',
    ),
    sections: [
      {
        title: L('Ceremony & cars', 'Τελετή & αυτοκίνητα', 'Церемония и авто'),
        items: [
          L('Car decoration', 'Στόλισμα αυτοκινήτων', 'Декор автомобилей'),
          L('Church decoration — interior & exterior', 'Διακόσμηση εκκλησίας — εσωτερικά & εξωτερικά', 'Декор храма — внутри и снаружи'),
          L('2 glass cylinders with refreshing drinks of your choice', '2 γυάλινοι κύλινδροι με δροσερά ποτά της αρεσκείας σας', '2 стеклянных цилиндра с прохладительными напитками на выбор'),
          L('Flower arch · 2 impressive greenery/fabric arches', 'Αψίδα λουλουδιών · 2 εντυπωσιακές αψίδες πρασίνου/υφασμάτων', 'Цветочная арка · 2 выразительные арки зелени/тканей'),
          L('6 decorative columns · 2 tall amphorae · church aisle décor', '6 διακοσμητικά κολωνάκια · 2 ψηλοί αμφορείς · στόλισμα διαδρόμου εκκλησίας', '6 декоративных колонн · 2 высокие амфоры · декор прохода храма'),
          L('4 flower stands · 2 large lambades · 2 bridal bouquets · petals', '4 ανθοστήλες · 2 μεγάλες λαμπάδες · 2 νυφικές ανθοδέσμες · πέταλα', '4 цветочные стойки · 2 большие лампады · 2 букета невесты · лепестки'),
        ],
      },
      {
        title: L('Reception atmosphere', 'Ατμόσφαιρα δεξίωσης', 'Атмосфера приёма'),
        items: [
          L('Reception entrance & greeting aisle décor with luxury stands, candlesticks, cylinders, fabrics & lanterns', 'Διακόσμηση εισόδου & διαδρόμου χαιρετισμού με luxury βάσεις, κηροπήγια, κυλίνδρους, υφάσματα & φανάρια', 'Декор входа и прохода приветствия с luxury-стойками, подсвечниками, цилиндрами, тканями и фонарями'),
          L('Illuminated LOVE flower letters 110×70cm · 8 large gold crystal candlesticks', 'Φωτιζόμενα LOVE 110×70εκ. · 8 μεγάλα χρυσά κρυστάλλινα κηροπήγια', 'Светящиеся LOVE 110×70 см · 8 крупных золотых кристальных подсвечников'),
          L('Pool décor · royal fairy lights · candy table with 6 glass sweet cylinders', 'Διακόσμηση πισίνας · royal fairy lights · candy table με 6 γυάλινους κυλίνδρους γλυκών', 'Декор бассейна · royal fairy lights · candy table с 6 стеклянными цилиндрами сладостей'),
          L('Newlywed table with florals · wish table · décor for up to 15 tables', 'Τραπέζι νεονύμφων με άνθη · τραπέζι ευχών · διακόσμηση έως 15 τραπεζιών', 'Стол молодожёнов с цветами · стол пожеланий · декор до 15 столов'),
          L('10 rice & petal baskets · unlimited rice & petal cones · envelope box', '10 καλαθάκια ρυζιού & ροδοπετάλων · απεριόριστα χωνάκια · κουτί φακέλων', '10 корзинок риса и лепестков · безлимитные конусы · коробка для конвертов'),
          FLOWERS_NOTE,
        ],
      },
    ],
  },
  {
    id: 'decoway-exclusive',
    sortOrder: 2,
    name: L('Deco Exclusive Package', 'Deco Exclusive Package', 'Deco Exclusive Package'),
    tagline: L(
      'Signature décor with personal wedding planner — flower wall, fairy lights, and curated hospitality tables.',
      'Υπογραφή διακόσμησης με προσωπικό wedding planner — flower wall, fairy lights και curated τραπέζια φιλοξενίας.',
      'Фирменный декор с персональным wedding planner — flower wall, fairy lights и curated-столы гостеприимства.',
    ),
    priceDisplay: L('€2,200', '€2.200', '€2 200'),
    image: `${IMG}/decoway-exclusive.webp`,
    highlight: L(
      'A distinctive DecoWay path with house styling, dual flower arches, and day coordination included.',
      'Ξεχωριστή διαδρομή DecoWay με στολισμό σπιτιών, δύο ανθοστολισμένες αψίδες και συντονισμό ημέρας.',
      'Особый путь DecoWay с декором домов, двумя цветочными арками и координацией дня.',
    ),
    sections: [
      {
        title: L('Ceremony & arrival', 'Τελετή & άφιξη', 'Церемония и прибытие'),
        items: [
          L('Decoration of 2 houses', 'Διακόσμηση 2 σπιτιών', 'Декор 2 домов'),
          L('Church interior & exterior décor · pillars with arrangements at the church entrance', 'Διακόσμηση εκκλησίας εσωτερικά & εξωτερικά · κολώνες με arrangements στην υποδοχή', 'Декор храма внутри и снаружи · колонны с arrangements на входе'),
          L('Decoration for two wedding cars', 'Στόλισμα δύο γαμήλιων αυτοκινήτων', 'Декор двух свадебных авто'),
          L('4 flower stands with crystals (2 large, 2 small) · 2 tall amphorae', '4 ανθοστήλες με κρύσταλλα (2 μεγάλες, 2 μικρές) · 2 ψηλοί αμφορείς', '4 цветочные стойки с кристаллами (2 большие, 2 малые) · 2 высокие амфоры'),
          L('Guest refreshments table with 3 glass drink cylinders · rice & petal baskets and cones', 'Τραπέζι κερασμάτων με 3 γυάλινους κυλίνδρους ποτών · καλάθια & χωνάκια ρυζιού και ροδοπετάλων', 'Стол угощений с 3 стеклянными цилиндрами напитков · корзины и конусы риса и лепестков'),
          L('Special couple welcome at the church · aisle runner/petals', 'Ειδική υποδοχή ζευγαριού στην εκκλησία · διάδρομος/πέταλα', 'Особый приём пары у храма · дорожка/лепестки'),
        ],
      },
      {
        title: L('Reception & planning', 'Δεξίωση & οργάνωση', 'Приём и планирование'),
        items: [
          L('Reception entrance décor (custom concept) · 2 impressive flower arches', 'Διακόσμηση εισόδου δεξίωσης (custom concept) · 2 εντυπωσιακές ανθοστολισμένες αψίδες', 'Декор входа зала (custom concept) · 2 выразительные цветочные арки'),
          L('Handmade flower wall with professional/hidden lighting · royal fairy lights', 'Χειροποίητος τοίχος λουλουδιών με professional/κρυφό φωτισμό · royal fairy lights', 'Handmade flower wall с профессиональным/скрытым светом · royal fairy lights'),
          L('Greeting aisle with custom concept · newlywed table florals', 'Διάδρομος χαιρετισμού με custom concept · ανθοστολισμός τραπεζιού νεονύμφων', 'Проход приветствия с custom concept · флористика стола молодожёнов'),
          L('Candy table with 6 sweet cylinders & chocolate fountain · pool décor · wish table', 'Candy table με 6 κυλίνδρους γλυκών & συντριβάνι σοκολάτας · πισίνα · τραπέζι ευχών', 'Candy table с 6 цилиндрами сладостей и шоколадным фонтаном · бассейн · стол пожеланий'),
          L('Décor for up to 18 guest tables · 2 crystal lambades · 2 bridal bouquets · envelope box', 'Διακόσμηση έως 18 τραπεζιών · 2 κρυστάλλινες λαμπάδες · 2 νυφικές ανθοδέσμες · κουτί φακέλων', 'Декор до 18 столов · 2 кристальные лампады · 2 букета · коробка для конвертов'),
          L('Personal wedding planner — organisation & day coordination', 'Προσωπικός wedding planner — οργάνωση & συντονισμός ημέρας', 'Персональный wedding planner — организация и координация дня'),
          FLOWERS_NOTE,
        ],
      },
    ],
  },
  {
    id: 'decoway-2',
    sortOrder: 3,
    name: L('DecoWay 2', 'DecoWay 2', 'DecoWay 2'),
    tagline: L(
      'Elevated florals with house styling, flower wall, and wedding planner included.',
      'Αναβαθμισμένος ανθοστολισμός με στολισμό σπιτιών, flower wall και wedding planner.',
      'Расширенная флористика с декором домов, flower wall и wedding planner.',
    ),
    priceDisplay: L('€2,500', '€2.500', '€2 500'),
    image: `${IMG}/decoway-2.webp`,
    highlight: L(
      'Richer ceremony architecture — three grand arches, bridal flower wall, and décor for up to 26 tables.',
      'Richer αρχιτεκτονική τελετής — τρεις μεγάλες αψίδες, bridal flower wall και διακόσμηση έως 26 τραπεζιών.',
      'Richer архитектура церемонии — три крупные арки, bridal flower wall и декор до 26 столов.',
    ),
    sections: [
      {
        title: L('Homes, church & cars', 'Σπίτια, εκκλησία & αυτοκίνητα', 'Дома, храм и авто'),
        items: [
          L('Decoration of 2 houses with flowers and decorative materials', 'Διακόσμηση 2 σπιτιών με άνθη και διακοσμητικά υλικά', 'Декор 2 домов цветами и декоративными материалами'),
          L('Church interior & exterior · flower arches · glass refreshment cylinders', 'Εκκλησία εσωτερικά & εξωτερικά · ανθοστολισμένες αψίδες · γυάλινοι κύλινδροι κερασμάτων', 'Храм внутри и снаружи · цветочные арки · стеклянные цилиндры угощений'),
          L('Church pews · 6 reception columns with florals · 2 tall amphorae', 'Καθίσματα εκκλησίας · 6 κολώνες δεξίωσης με άνθη · 2 ψηλοί αμφορείς', 'Скамейки храма · 6 колонн зала с цветами · 2 высокие амфоры'),
          L('4 crystal flower stands (2 large, 2 small) · 2 crystal lambades · 2 bridal bouquets · petals', '4 κρυστάλλινες ανθοστήλες (2 μεγάλες, 2 μικρές) · 2 κρυστάλλινες λαμπάδες · 2 νυφικές ανθοδέσμες · πέταλα', '4 кристальные стойки (2 большие, 2 малые) · 2 кристальные лампады · 2 букета · лепестки'),
          L('Decoration for two cars', 'Στόλισμα δύο αυτοκινήτων', 'Декор двух автомобилей'),
        ],
      },
      {
        title: L('Reception & planning', 'Δεξίωση & οργάνωση', 'Приём и планирование'),
        items: [
          L('Reception entrance décor · 3 impressive grand arches · bridal-area flower wall', 'Διακόσμηση εισόδου δεξίωσης · 3 εντυπωσιακές μεγάλες αψίδες · flower wall χώρου νύφης', 'Декор входа зала · 3 выразительные крупные арки · flower wall зоны невесты'),
          L('Illuminated LOVE letters 110×70cm · aisle décor with candlesticks, cylinders, fabrics & lanterns', 'Φωτιζόμενα LOVE 110×70εκ. · διάδρομος με κηροπήγια, κυλίνδρους, υφάσματα & φανάρια', 'Светящиеся LOVE 110×70 см · проход с подсвечниками, цилиндрами, тканями и фонарями'),
          L('Royal fairy lights · candy table with 10 cylinders & chocolate fountain · pool décor', 'Royal fairy lights · candy table με 10 κυλίνδρους & συντριβάνι σοκολάτας · πισίνα', 'Royal fairy lights · candy table с 10 цилиндрами и шоколадным фонтаном · бассейн'),
          L('Newlywed table florals · wish table · décor for up to 26 tables', 'Τραπέζι νεονύμφων · τραπέζι ευχών · διακόσμηση έως 26 τραπεζιών', 'Стол молодожёнов · стол пожеланий · декор до 26 столов'),
          L('10 flower-girl rice & petal baskets · envelope box · wedding planner included', '10 καλαθάκια ρυζιού & ροδοπετάλων · κουτί φακέλων · περιλαμβάνεται wedding planner', '10 корзинок для подружек · коробка для конвертов · wedding planner включён'),
          FLOWERS_NOTE,
        ],
      },
    ],
  },
  {
    id: 'decoway-3',
    sortOrder: 4,
    name: L('DecoWay 3', 'DecoWay 3', 'DecoWay 3'),
    tagline: L(
      'Statement florals — 3.4m flower wall, multi-car styling, and décor for up to 35 tables.',
      'Statement ανθοστολισμός — flower wall 3.4μ, στόλισμα πολλών αυτοκινήτων και διακόσμηση έως 35 τραπεζιών.',
      'Statement-флористика — flower wall 3,4 м, декор многих авто и оформление до 35 столов.',
    ),
    priceDisplay: L('€3,000', '€3.000', '€3 000'),
    image: `${IMG}/decoway-3.webp`,
    featured: true,
    highlight: L(
      'The balanced DecoWay signature — large flower wall, dual chocolate fountains, and full planner coordination.',
      'Η ισορροπημένη υπογραφή DecoWay — μεγάλος flower wall, δύο συντριβάνια σοκολάτας και πλήρης συντονισμός planner.',
      'Сбалансированная подпись DecoWay — крупный flower wall, два шоколадных фонтана и полная координация planner.',
    ),
    sections: [
      {
        title: L('Homes, church & fleet', 'Σπίτια, εκκλησία & στόλος', 'Дома, храм и автопарк'),
        items: [
          L('Decoration of 2 homes · church interior & exterior', 'Διακόσμηση 2 σπιτιών · εκκλησία εσωτερικά & εξωτερικά', 'Декор 2 домов · храм внутри и снаружи'),
          L('Flower arches · 8 church columns · 6 flower stands (4 large, 2 small) · 2 bridal bouquets', 'Ανθοστολισμένες αψίδες · 8 κολώνες εκκλησίας · 6 ανθοστήλες (4 μεγάλες, 2 μικρές) · 2 νυφικές ανθοδέσμες', 'Цветочные арки · 8 колонн храма · 6 стоек (4 большие, 2 малые) · 2 букета'),
          L('Car décor for groom, bride, and 10 guest cars', 'Στόλισμα αυτοκινήτων γαμπρού, νύφης και 10 καλεσμένων', 'Декор авто жениха, невесты и 10 гостевых машин'),
        ],
      },
      {
        title: L('Reception spectacle', 'Θέαμα δεξίωσης', 'Спектакль приёма'),
        items: [
          L('Flower wall 3.40×2.30m · illuminated LOVE letters 110×70cm', 'Flower wall 3.40×2.30μ · φωτιζόμενα LOVE 110×70εκ.', 'Flower wall 3,40×2,30 м · светящиеся LOVE 110×70 см'),
          L('Candy table with 14 cylinders & 2 chocolate fountains · pool décor · royal fairy lights', 'Candy table με 14 κυλίνδρους & 2 συντριβάνια σοκολάτας · πισίνα · royal fairy lights', 'Candy table с 14 цилиндрами и 2 шоколадными фонтанами · бассейн · royal fairy lights'),
          L('Newlywed table with crystals & pearls · décor for up to 35 tables', 'Τραπέζι νεονύμφων με κρύσταλλα & μαργαριτάρια · διακόσμηση έως 35 τραπεζιών', 'Стол молодожёнов с кристаллами и жемчугом · декор до 35 столов'),
          L('Entrance corridor with lanterns, fabrics, and gold/silver/crystal candlesticks', 'Διάδρομος εισόδου με φανάρια, υφάσματα και χρυσά/ασημένια/κρυστάλλινα κηροπήγια', 'Входной коридор с фонарями, тканями и золотыми/серебряными/кристальными подсвечниками'),
          L('Wedding planner & coordinator included', 'Περιλαμβάνεται wedding planner & coordinator', 'Включены wedding planner и coordinator'),
          FLOWERS_NOTE,
        ],
      },
    ],
  },
  {
    id: 'decoway-4',
    sortOrder: 5,
    name: L('DecoWay 4', 'DecoWay 4', 'DecoWay 4'),
    tagline: L(
      'Crystal hospitality — floor chandeliers, guest-list mirror, cake styling, and décor for 40 tables.',
      'Κρυστάλλινη φιλοξενία — πολυέλεοι εδάφους, καθρέφτης λίστας καλεσμένων, στολισμό τούρτας και διακόσμηση 40 τραπεζιών.',
      'Кристальное гостеприимство — напольные люстры, зеркало списка гостей, styling торта и декор 40 столов.',
    ),
    priceDisplay: L('€3,500', '€3.500', '€3 500'),
    image: `${IMG}/decoway-4.webp`,
    highlight: L(
      'Richer ceremony scale with carpet, candle cylinders, crystal arrangements, and planner coordination.',
      'Richer κλίμακα τελετής με χαλί, κυλίνδρους κεριών, κρυστάλλινα arrangements και συντονισμό planner.',
      'Richer масштаб церемонии с ковром, цилиндрами со свечами, кристальными arrangements и координацией planner.',
    ),
    sections: [
      {
        title: L('Ceremony architecture', 'Αρχιτεκτονική τελετής', 'Архитектура церемонии'),
        items: [
          L('Decoration of 2 houses · church interior & exterior · flower arch', 'Διακόσμηση 2 σπιτιών · εκκλησία εσωτερικά & εξωτερικά · αψίδα λουλουδιών', 'Декор 2 домов · храм внутри и снаружи · цветочная арка'),
          L('4 impressive greenery & fabric arches · 4 refreshment cylinders · 8 crystal entrance columns', '4 εντυπωσιακές αψίδες πρασίνου & υφασμάτων · 4 κύλινδροι κερασμάτων · 8 κρυστάλλινες κολώνες εισόδου', '4 выразительные арки зелени и тканей · 4 цилиндра угощений · 8 кристальных входных колонн'),
          L('Red or white carpet · church stools · 50 candle cylinders · 6 large crystal arrangements', 'Κόκκινο ή άσπρο χαλί · σκαμνιά εκκλησίας · 50 κύλινδροι κεριών · 6 μεγάλα κρυστάλλινα arrangements', 'Красный или белый ковёр · скамейки · 50 цилиндров со свечами · 6 крупных кристальных arrangements'),
          L('6 flower stands · 2 lambades with stands · 2 bridal bouquets · petals · décor for 12 cars', '6 ανθοστήλες · 2 λαμπάδες με βάσεις · 2 νυφικές ανθοδέσμες · πέταλα · στόλισμα 12 αυτοκινήτων', '6 стоек · 2 лампады · 2 букета · лепестки · декор 12 авто'),
        ],
      },
      {
        title: L('Reception luxury', 'Πολυτέλεια δεξίωσης', 'Роскошь приёма'),
        items: [
          L('Reception entrance luxury arrangements · greeting aisle with flower wall 3.40×2.30m & hidden lighting', 'Είσοδος δεξίωσης με luxury arrangements · διάδρομος χαιρετισμού με flower wall 3.40×2.30μ & κρυφό φωτισμό', 'Вход зала с luxury arrangements · проход приветствия с flower wall 3,40×2,30 м и скрытым светом'),
          L('Royal fairy lights · bridal flower wall · illuminated LOVE letters', 'Royal fairy lights · flower wall νύφης · φωτιζόμενα LOVE', 'Royal fairy lights · flower wall невесты · светящиеся LOVE'),
          L('Candy table with 14 cylinders & 2 chocolate fountains · 2 crystal floor chandeliers at newlywed table', 'Candy table με 14 κυλίνδρους & 2 συντριβάνια σοκολάτας · 2 κρυστάλλινοι πολυέλεοι εδάφους στο τραπέζι νεονύμφων', 'Candy table с 14 цилиндрами и 2 шоколадными фонтанами · 2 напольные кристальные люстры у стола молодожёнов'),
          L('Décor for 40 tables · 20 table mirrors · 14 flower-girl baskets · envelope box', 'Διακόσμηση 40 τραπεζιών · 20 επιτραπέζιοι καθρέφτες · 14 καλαθάκια παρανυφάκιων · κουτί φακέλων', 'Декор 40 столов · 20 настольных зеркал · 14 корзинок для подружек · коробка для конвертов'),
          L('Luxury cake base with flowers · 5-tier wedding cake · crystal guest-list mirror 2.00×1.20m', 'Πολυτελής βάση τούρτας με άνθη · τούρτα 5 επιπέδων · κρυστάλλινος καθρέφτης λίστας καλεσμένων 2.00×1.20μ', 'Люксовая база торта с цветами · 5-ярусный торт · кристальное зеркало списка гостей 2,00×1,20 м'),
          L('Wedding planner & day coordinator included', 'Περιλαμβάνεται wedding planner & συντονιστής ημέρας', 'Включены wedding planner и координатор дня'),
          FLOWERS_NOTE,
        ],
      },
    ],
  },
  {
    id: 'decoway-5',
    sortOrder: 6,
    name: L('DecoWay 5', 'DecoWay 5', 'DecoWay 5'),
    tagline: L(
      'Grand atmospheric scale — flower ceiling, champagne reveal, and crystal chandelier moments.',
      'Μεγάλη ατμοσφαιρική κλίμακα — οροφή λουλουδιών, champagne reveal και στιγμές κρυστάλλινων πολυελαίων.',
      'Большой атмосферный масштаб — цветочный потолок, champagne reveal и моменты кристальных люстр.',
    ),
    priceDisplay: L('€4,100', '€4.100', '€4 100'),
    image: `${IMG}/decoway-5.webp`,
    highlight: L(
      'Immersive DecoWay production with outdoor aisle creation, five grand arches, and full planning.',
      'Immersive παραγωγή DecoWay με δημιουργία εξωτερικού διαδρόμου, πέντε μεγάλες αψίδες και πλήρη οργάνωση.',
      'Immersive постановка DecoWay с созданием внешнего прохода, пятью крупными арками и полным планированием.',
    ),
    sections: [
      {
        title: L('Ceremony immersion', 'Εμβύθιση τελετής', 'Погружение церемонии'),
        items: [
          L('Decoration of 2 houses · church interior & exterior with outdoor aisle creation', 'Διακόσμηση 2 σπιτιών · εκκλησία εσωτερικά & εξωτερικά με δημιουργία εξωτερικού διαδρόμου', 'Декор 2 домов · храм внутри и снаружи с созданием внешнего прохода'),
          L('Flower arch · 4 greenery & fabric arches · 4 refreshment cylinders · 10 crystal bollards', 'Αψίδα λουλουδιών · 4 αψίδες πρασίνου & υφασμάτων · 4 κύλινδροι κερασμάτων · 10 κρυστάλλινα bollards', 'Цветочная арка · 4 арки зелени и тканей · 4 цилиндра угощений · 10 кристальных bollards'),
          L('100 candle & petal cylinders · 6 large crystal/gold arrangements · 6 flower stands', '100 κύλινδροι κεριών & ροδοπετάλων · 6 μεγάλα κρυστάλλινα/χρυσά arrangements · 6 ανθοστήλες', '100 цилиндров со свечами и лепестками · 6 крупных кристальных/золотых arrangements · 6 стоек'),
          L('Flower ceiling 4×4m (paper flowers with crystals) · crystal floor chandeliers · carpet · champagne opening outside church', 'Οροφή λουλουδιών 4×4μ (paper flowers με κρύσταλλα) · κρυστάλλινοι πολυέλεοι εδάφους · χαλί · άνοιγμα σαμπάνιας έξω από την εκκλησία', 'Цветочный потолок 4×4 м (paper flowers с кристаллами) · напольные кристальные люстры · ковёр · открытие шампанского у храма'),
          L('Car décor for groom, bride, and 10 guest cars · 2 bridal bouquets · petals', 'Στόλισμα αυτοκινήτων γαμπρού, νύφης και 10 καλεσμένων · 2 νυφικές ανθοδέσμες · πέταλα', 'Декор авто жениха, невесты и 10 гостевых · 2 букета · лепестки'),
        ],
      },
      {
        title: L('Reception grandeur', 'Μεγαλοπρέπεια δεξίωσης', 'Великолепие приёма'),
        items: [
          L('5 impressive grand arches · greeting aisle with flower wall 3.40×2.30m & hidden lighting', '5 εντυπωσιακές μεγάλες αψίδες · διάδρομος χαιρετισμού με flower wall 3.40×2.30μ & κρυφό φωτισμό', '5 выразительных крупных арок · проход приветствия с flower wall 3,40×2,30 м и скрытым светом'),
          L('Royal fairy lights · bridal flower wall · illuminated LOVE letters · pool décor', 'Royal fairy lights · flower wall νύφης · φωτιζόμενα LOVE · πισίνα', 'Royal fairy lights · flower wall невесты · светящиеся LOVE · бассейн'),
          L('Candy table with 14 cylinders & chocolate fountain · newlywed table crystals · décor for 40 tables · 30 table mirrors', 'Candy table με 14 κυλίνδρους & συντριβάνι σοκολάτας · κρύσταλλα νεονύμφων · διακόσμηση 40 τραπεζιών · 30 επιτραπέζιοι καθρέφτες', 'Candy table с 14 цилиндрами и шоколадным фонтаном · кристаллы молодожёнов · декор 40 столов · 30 настольных зеркал'),
          L('14 flower-girl baskets · envelope box · luxury cake stand · 5-tier cake · crystal guest-list mirror', '14 καλαθάκια παρανυφάκιων · κουτί φακέλων · πολυτελής βάση τούρτας · τούρτα 5 επιπέδων · κρυστάλλινος καθρέφτης λίστας', '14 корзинок для подружек · коробка для конвертов · люксовая база торта · 5-ярусный торт · кристальное зеркало списка'),
          L('Wedding planner & coordinator included', 'Περιλαμβάνεται wedding planner & coordinator', 'Включены wedding planner и coordinator'),
          FLOWERS_NOTE,
        ],
      },
    ],
  },
  {
    id: 'decoway-6',
    sortOrder: 7,
    name: L('DecoWay 6', 'DecoWay 6', 'DecoWay 6'),
    tagline: L(
      'The fullest DecoWay production — ceiling chandeliers, fireworks, fairy-light tunnels, and décor for 45 tables.',
      'Η πληρέστερη παραγωγή DecoWay — πολυέλεοι οροφής, πυροτεχνήματα, τούνελ fairy lights και διακόσμηση 45 τραπεζιών.',
      'Самая полная постановка DecoWay — потолочные люстры, пиротехника, тоннели fairy lights и декор 45 столов.',
    ),
    priceDisplay: L('€7,600', '€7.600', '€7 600'),
    image: `${IMG}/decoway-6.webp`,
    highlight: L(
      'Maximum atmospheric scale — popcorn hospitality, Just Married fleet styling, and fully orchestrated planning.',
      'Μέγιστη ατμοσφαιρική κλίμακα — φιλοξενία popcorn, στόλισμα στόλου Just Married και πλήρως ενορχηστρωμένη οργάνωση.',
      'Максимальный атмосферный масштаб — popcorn-гостеприимство, стилизация флота Just Married и полностью оркестрованное планирование.',
    ),
    sections: [
      {
        title: L('Ceremony & spectacle', 'Τελετή & θέαμα', 'Церемония и спектакль'),
        items: [
          L('Decoration of 2 houses · church interior & exterior with outdoor aisle', 'Διακόσμηση 2 σπιτιών · εκκλησία εσωτερικά & εξωτερικά με εξωτερικό διάδρομο', 'Декор 2 домов · храм внутри и снаружи с внешним проходом'),
          L('Flower arch · 4 greenery & fabric arches · 4 refreshment cylinders · 12 crystal entrance pillars · 4 tall amphorae', 'Αψίδα λουλουδιών · 4 αψίδες πρασίνου & υφασμάτων · 4 κύλινδροι κερασμάτων · 12 κρυστάλλινες κολώνες · 4 ψηλοί αμφορείς', 'Цветочная арка · 4 арки зелени и тканей · 4 цилиндра угощений · 12 кристальных колонн · 4 высокие амфоры'),
          L('150 candle & petal cylinders · 6 large crystal/gold arrangements · flower & crystal ceiling 4×4m', '150 κύλινδροι κεριών & ροδοπετάλων · 6 μεγάλα κρυστάλλινα/χρυσά arrangements · οροφή λουλουδιών & κρυστάλλων 4×4μ', '150 цилиндров со свечами и лепестками · 6 крупных arrangements · потолок из цветов и кристаллов 4×4 м'),
          L('Luxury crystal ceiling chandeliers · ceiling fairy lights · 6 indoor/outdoor ground fireworks', 'Πολυτελείς κρυστάλλινοι πολυέλεοι οροφής · fairy lights οροφής · 6 πυροτεχνήματα εδάφους εσωτερικού/εξωτερικού', 'Роскошные потолочные кристальные люстры · потолочные fairy lights · 6 наземных фейерверков indoor/outdoor'),
          L('Car décor for groom, bride & 10 guest cars · Just Married signs · carpet · champagne opening', 'Στόλισμα αυτοκινήτων γαμπρού, νύφης & 10 καλεσμένων · πινακίδες Just Married · χαλί · άνοιγμα σαμπάνιας', 'Декор авто жениха, невесты и 10 гостевых · таблички Just Married · ковёр · открытие шампанского'),
        ],
      },
      {
        title: L('Reception & orchestration', 'Δεξίωση & ενορχήστρωση', 'Приём и оркестровка'),
        items: [
          L('5 grand arches · greeting aisle with flower wall & hidden lighting · bridal flower wall · illuminated LOVE', '5 μεγάλες αψίδες · διάδρομος χαιρετισμού με flower wall & κρυφό φωτισμό · flower wall νύφης · φωτιζόμενα LOVE', '5 крупных арок · проход приветствия с flower wall и скрытым светом · flower wall невесты · светящиеся LOVE'),
          L('Pool décor · candy table with 14 cylinders & 2 chocolate fountains · popcorn machine', 'Πισίνα · candy table με 14 κυλίνδρους & 2 συντριβάνια σοκολάτας · μηχανή popcorn', 'Бассейн · candy table с 14 цилиндрами и 2 шоколадными фонтанами · аппарат popcorn'),
          L('Newlywed table florals with crystals & pearls · 3 crystal floor chandeliers · décor for 45 tables · 40 table mirrors', 'Τραπέζι νεονύμφων με κρύσταλλα & μαργαριτάρια · 3 κρυστάλλινοι πολυέλεοι εδάφους · διακόσμηση 45 τραπεζιών · 40 επιτραπέζιοι καθρέφτες', 'Стол молодожёнов с кристаллами и жемчугом · 3 напольные кристальные люстры · декор 45 столов · 40 настольных зеркал'),
          L('14 flower-girl baskets · envelope box · luxury crystal cake base · 6-tier wedding cake · crystal guest-list mirror', '14 καλαθάκια παρανυφάκιων · κουτί φακέλων · πολυτελής κρυστάλλινη βάση τούρτας · τούρτα 6 επιπέδων · κρυστάλλινος καθρέφτης λίστας', '14 корзинок для подружек · коробка для конвертов · люксовая кристальная база торта · 6-ярусный торт · кристальное зеркало списка'),
          L('2 fairy-light & chandelier tunnels · wedding planner & day coordinator', '2 τούνελ fairy lights & πολυελαίων · wedding planner & συντονιστής ημέρας', '2 тоннеля fairy lights и люстр · wedding planner и координатор дня'),
          FLOWERS_NOTE,
        ],
      },
    ],
  },
]

export function getDecoWayPackage(id: string | undefined) {
  return decoWayPackages.find((pkg) => pkg.id === id)
}

export function getDecoWayPackageExpandedSections(id: string | undefined) {
  const pkg = getDecoWayPackage(id)
  return pkg?.sections
}
