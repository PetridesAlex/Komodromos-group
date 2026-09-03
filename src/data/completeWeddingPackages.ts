/**
 * Wedding Sky complete wedding packages — from atelier Experience flyers.
 */

import type { LocalizedText } from '../lib/weddingLocale'

const IMG =
  '/images/services/wedding-highlights/completed-wedding-packages'

export type CompleteWeddingPackageSection = {
  title: LocalizedText
  items: LocalizedText[]
}

export type CompleteWeddingPackage = {
  id: string
  sortOrder: number
  name: LocalizedText
  tagline: LocalizedText
  priceDisplay: LocalizedText
  priceNote?: LocalizedText
  /** Front cover flyer (shown by default). */
  image: string
  /** Optional reverse flyer for 3D flip on the catalogue card. */
  flipImage?: string
  highlight: LocalizedText
  sections: CompleteWeddingPackageSection[]
  /** Elevated card treatment in the pricing grid */
  featured?: boolean
}

export const completeWeddingPackagesPageCopy = {
  eyebrow: {
    en: 'Complete wedding programmes',
    el: 'Ολοκληρωμένα προγράμματα γάμου',
    ru: 'Полные свадебные программы',
  } satisfies LocalizedText,
  title: {
    en: 'Complete Wedding Packages',
    el: 'Ολοκληρωμένα Πακέτα Γάμου',
    ru: 'Полные свадебные пакеты',
  } satisfies LocalizedText,
  heroTitleLine1: {
    en: 'Complete Wedding',
    el: 'Ολοκληρωμένα',
    ru: 'Полные',
  } satisfies LocalizedText,
  heroTitleLine2: {
    en: 'Packages',
    el: 'Πακέτα Γάμου',
    ru: 'свадебные пакеты',
  } satisfies LocalizedText,
  lead: {
    en: 'Eight Wedding Sky Experience programmes — from Prestige to Royal, plus a fully Customised path — composed as one investment with coordination, styling, and signature inclusions.',
    el: 'Οκτώ προγράμματα Wedding Sky Experience — από Prestige έως Royal, μαζί με μία πλήρως προσαρμοσμένη επιλογή — σε ένα ενιαίο πακέτο με συντονισμό, αισθητική και τις χαρακτηριστικές μας παροχές.',
    ru: 'Восемь программ Wedding Sky Experience — от Prestige до Royal, плюс полностью Customised путь — как одна инвестиция с координацией, стилем и signature inclusions.',
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
  flipHint: {
    en: 'Flip',
    el: 'Αναστροφή',
    ru: 'Переворот',
  } satisfies LocalizedText,
  coverSideLabel: {
    en: 'Cover',
    el: 'Εξώφυλλο',
    ru: 'Обложка',
  } satisfies LocalizedText,
  detailsSideLabel: {
    en: 'Full details',
    el: 'Πλήρη στοιχεία',
    ru: 'Полные детали',
  } satisfies LocalizedText,
  catalogueHeading: {
    en: 'Choose your Experience tier',
    el: 'Επιλέξτε το επίπεδό σας',
    ru: 'Выберите уровень Experience',
  } satisfies LocalizedText,
  catalogueHeadingLine1: {
    en: 'Choose your',
    el: 'Επιλέξτε το',
    ru: 'Выберите',
  } satisfies LocalizedText,
  catalogueHeadingLine2: {
    en: 'Experience tier',
    el: 'Επίπεδο πακέτου',
    ru: 'уровень Experience',
  } satisfies LocalizedText,
  catalogueEyebrow: {
    en: 'The complete edit',
    el: 'Η ολοκληρωμένη σειρά',
    ru: 'Полная коллекция',
  } satisfies LocalizedText,
  catalogueLead: {
    en: 'Eight composed programmes — from Prestige foundations to Royal magnificence, or a Customised brief built only for you.',
    el: 'Οκτώ ολοκληρωμένα προγράμματα — από το Prestige μέχρι το Royal, ή ένα προσαρμοσμένο πρόγραμμα φτιαγμένο μόνο για εσάς.',
    ru: 'Восемь программ — от основ Prestige до великолепия Royal или Customised brief только для вас.',
  } satisfies LocalizedText,
} as const

const L = (en: string, el: string, ru: string): LocalizedText => ({ en, el, ru })

export const completeWeddingPackages: readonly CompleteWeddingPackage[] = [

  {
    id: 'prestige',
    sortOrder: 1,
    name: L('Prestige Wedding Experience', 'Prestige Wedding Experience', 'Prestige Wedding Experience'),
    tagline: L('Where beautiful beginnings become unforgettable memories.', 'Εκεί όπου τα όμορφα ξεκινήματα μετατρέπονται σε αξέχαστες αναμνήσεις.', 'Там, где прекрасные начинания становятся незабываемыми воспоминаниями.'),
    priceDisplay: L('€5,700', '€5.700', '€5 700'),
    image: `${IMG}/prestige-wedding-experience.webp`,
    flipImage: `${IMG}/prestige-wedding-experience-back.webp`,
    highlight: L('Photography, décor, entertainment, VIP transfer, and day coordination — composed as one Prestige programme.', 'Φωτογραφία, διακόσμηση, ψυχαγωγία, VIP μεταφορά και συντονισμός ημέρας — σε ένα πρόγραμμα Prestige.', 'Фото, декор, развлечения, VIP-трансфер и координация дня — в одной программе Prestige.'),
    sections: [
      {
        title: L('Artistic photography & cinematography', 'Καλλιτεχνική φωτογραφική & κινηματογραφική αποτύπωση', 'Художественная фото- и киносъёмка'),
        items: [
          L('Luxury digital album 30×80cm with 200 photos — leather, wood, glass or aluminium cover', 'Πολυτελές digital άλμπουμ 30×80εκ. με 200 φωτογραφίες — εξώφυλλο δέρμα, ξύλο, γυαλί ή αλουμίνιο', 'Роскошный digital-альбом 30×80 см на 200 фото — обложка кожа, дерево, стекло или алюминий'),
          L('2 matching mini albums 20×60cm', '2 ίδια mini άλμπουμ 20×60εκ.', '2 одинаковых mini-альбома 20×60 см'),
          L('Prints: 2× 40×60, 30× 15×20, and 1 canvas 40×60', 'Εκτυπώσεις: 2× 40×60, 30× 15×20 και 1 καμβάς 40×60', 'Отпечатки: 2× 40×60, 30× 15×20 и 1 холст 40×60'),
          L('Personal designer for step-by-step album creation', 'Προσωπικός designer για τη δημιουργία του άλμπουμ βήμα-βήμα', 'Персональный дизайнер для пошагового создания альбома'),
          L('External artistic photoshoot — boat or luxury car options', 'Εξωτερική καλλιτεχνική φωτογράφιση — επιλογές σκάφους ή πολυτελούς αυτοκινήτου', 'Внешняя художественная съёмка — варианты с катером или люксовым авто'),
          L('Commemorative USB box · HD reception film · 4K cinematic USB · Hollywood trailer · Instagram-ready film', 'Αναμνηστικό κουτί USB · HD φιλμ δεξίωσης · 4K cinematic USB · Hollywood trailer · Instagram-ready φιλμ', 'Памятная USB-коробка · HD-фильм приёма · 4K cinematic USB · Hollywood trailer · Instagram-ready ролик'),
          L('Friend & family interviews · multi-camera montage incl. GoPro · unlimited JPEGs on USB in 4 days', 'Συνεντεύξεις φίλων & οικογένειας · μοντάζ πολλών καμερών incl. GoPro · απεριόριστα JPEG σε USB σε 4 ημέρες', 'Интервью друзей и семьи · многокамерный монтаж вкл. GoPro · безлимитные JPEG на USB за 4 дня'),
        ],
      },
      {
        title: L('Luxury invitations', 'Σχεδιασμός & επιλογή πολυτελών προσκλητηρίων', 'Роскошные приглашения'),
        items: [
          L('300 invitations · choice of 20 premium cardstocks', '300 προσκλήσεις · επιλογή από 20 premium χαρτιά', '300 приглашений · выбор из 20 премиальных бумаг'),
          L('300+ designs or fully custom design', 'Πάνω από 300 σχέδια ή πλήρως custom design', '300+ дизайнов или полностью индивидуальный дизайн'),
        ],
      },
      {
        title: L('Wedding event design & décor', 'Σχεδιασμός & διακόσμηση γαμήλιας εκδήλωσης', 'Дизайн и декор свадебного события'),
        items: [
          L('Décor for two cars · church interior & exterior · flower arch', 'Διακόσμηση δύο αυτοκινήτων · εκκλησία εσωτερικά & εξωτερικά · ανθοστολισμένη αψίδα', 'Декор двух авто · храм внутри и снаружи · цветочная арка'),
          L('2 glass cylinders with refreshing drinks · 2 greenery/fabric arches · 6 floral pedestals', '2 γυάλινοι κύλινδροι με δροσερά ποτά · 2 αψίδες πρασίνου/υφασμάτων · 6 ανθοστολισμένα βάθρα', '2 стеклянных цилиндра с напитками · 2 арки зелени/тканей · 6 цветочных пьедесталов'),
          L('Candle styling up to 30 cylinders · 2 tall amphoras · aisle & pew décor', 'Candle styling έως 30 κυλίνδρους · 2 ψηλοί amphores · διάδρομος & καθίσματα', 'Стилизация свечей до 30 цилиндров · 2 высокие амфоры · декор прохода и скамей'),
          L('4 central flower stands · 2 large lambades · bridal bouquets & boutonnieres', '4 κεντρικές ανθοστήλες · 2 μεγάλες λαμπάδες · νυφικές ανθοδέσμες & boutonnières', '4 центральные цветочные стойки · 2 большие лампады · букеты и бутоньерки'),
          L('Entrance & reception aisle · illuminated LOVE letters · royal fairy lights · pool décor', 'Είσοδος & διάδρομος δεξίωσης · φωτιζόμενα LOVE · royal fairy lights · διακόσμηση πισίνας', 'Вход и проход зала · светящиеся LOVE · royal fairy lights · декор бассейна'),
          L('Newlywed table with florals, candles & crystals · wish table · up to 10 guest tables', 'Τραπέζι νεονύμφων με άνθη, κεριά & κρύσταλλα · τραπέζι ευχών · έως 10 τραπέζια καλεσμένων', 'Стол молодожёнов с цветами, свечами и кристаллами · стол пожеланий · до 10 гостевых столов'),
          L('Unlimited rice cones & rose petals · card box · fresh flowers throughout (9 varieties)', 'Απεριόριστα κουκουνάρια ρυζιού & ροδοπέταλα · κουτί καρτών · φρέσκα άνθη (9 ποικιλίες)', 'Безлимитные конусы риса и лепестки · коробка для открыток · свежие цветы (9 сортов)'),
        ],
      },
      {
        title: L('Effects, entertainment & VIP', 'Εφέ, ψυχαγωγία & VIP', 'Эффекты, развлечения и VIP'),
        items: [
          L('8 premium confetti effects · floral photo frame · 100 sparkle magic effects', '8 premium confetti effects · ανθοστολισμένη κορνίζα · 100 sparkle magic effects', '8 premium confetti · цветочная рамка · 100 sparkle magic effects'),
          L('Unlimited DJ or live violin/saxophone', 'Απεριόριστη διάρκεια DJ ή live βιολί/σαξόφωνο', 'Безлимитный DJ или live скрипка/саксофон'),
          L('Audio & video guest book — 4 hours, delivered on USB', 'Τηλέφωνο ευχών με ήχο & βίντεο — 4 ώρες, παράδοση σε USB', 'Аудио- и видео-книга пожеланий — 4 часа, на USB'),
          L('VIP newlywed transfer — Mercedes S-Class AMG or Maserati Luxury Package', 'VIP μεταφορά νεονύμφων — Mercedes S-Class AMG ή Maserati Luxury Package', 'VIP-трансфер молодожёнов — Mercedes S-Class AMG или Maserati Luxury Package'),
          L('Private chauffeur, red carpet, champagne, premium water & Just Married signs', 'Ιδιωτικός οδηγός, κόκκινο χαλί, σαμπάνια, premium νερό & πινακίδες Just Married', 'Личный шофёр, красная дорожка, шампанское, премиум-вода и таблички Just Married'),
          L('Personal wedding planner — full day coordination', 'Προσωπικός wedding planner — πλήρης συντονισμός ημέρας', 'Персональный wedding planner — полная координация дня'),
          L('Optional: private powerboat party +€500 · ultra-luxury limousine +€450', 'Προαιρετικά: private powerboat party +€500 · ultra-luxury limousine +€450', 'Опционально: private powerboat party +€500 · ultra-luxury limousine +€450'),
        ],
      },
    ],
  },
  {
    id: 'grand',
    sortOrder: 2,
    name: L('Grand Wedding Experience', 'Grand Wedding Experience', 'Grand Wedding Experience'),
    tagline: L('An upgraded wedding experience designed with elegance and style.', 'Μια αναβαθμισμένη εμπειρία γάμου σχεδιασμένη με κομψότητα και στυλ.', 'Обновлённый свадебный опыт, созданный с элегантностью и стилем.'),
    priceDisplay: L('€8,500', '€8.500', '€8 500'),
    image: `${IMG}/grand-wedding-experience.webp`,
    flipImage: `${IMG}/grand-wedding-experience-back.webp`,
    highlight: L('Haute couture bridal & groom attire, enriched media, treats & cake, and fuller décor architecture.', 'Νυφικό υψηλής ραπτικής & γαμπριάτικο κοστούμι, enriched media, κεράσματα & τούρτα, και fuller διακόσμηση.', 'Haute couture наряды, расширенные media, угощения и торт, более полная архитектура декора.'),
    sections: [
      {
        title: L('Bridal & groom attire', 'Νυφικό & γαμπριάτικο', 'Наряды жениха и невесты'),
        items: [
          L('Haute couture bridal selection with veil, handmade shoes, stefana, guest book, champagne glasses & hair accessories', 'Νυφικό υψηλής ραπτικής με πέπλο, χειροποίητα παπούτσια, στέφανα, βιβλίο ευχών, ποτήρια σαμπάνιας & αξεσουάρ μαλλιών', 'Haute couture платье с вуалью, handmade туфлями, венцами, книгой пожеланий, бокалами и аксессуарами для волос'),
          L('Tailored groom suit with trousers, premium shirt, vest, tie/bow tie & quality belt', 'Εφαρμοστό κοστούμι γαμπρού με παντελόνι, premium πουκάμισο, γιλέκο, γραβάτα/παπιγιόν & ποιοτική ζώνη', 'Сшитый костюм жениха с брюками, premium-рубашкой, жилетом, галстуком/бабочкой и ремнём'),
        ],
      },
      {
        title: L('Photography, film & invitations', 'Φωτογραφία, film & προσκλήσεις', 'Фото, film и приглашения'),
        items: [
          L('Luxury 30×80 album with 200 photos · 2 mini albums · prints & canvas · personal album designer', 'Luxury άλμπουμ 30×80 με 200 φωτογραφίες · 2 mini · εκτυπώσεις & καμβάς · προσωπικός designer', 'Luxury-альбом 30×80 на 200 фото · 2 mini · отпечатки и холст · персональный дизайнер'),
          L('Outdoor shoot with boat/car options · Full HD & 4K cinema · Hollywood trailer · social video', 'Εξωτερική shoot με επιλογές σκάφους/αυτοκινήτου · Full HD & 4K cinema · Hollywood trailer · social video', 'Съёмка на локации с катером/авто · Full HD и 4K cinema · Hollywood trailer · social video'),
          L('Multi-camera incl. GoPro · guest interviews · unlimited JPEGs · 4-day USB delivery', 'Multi-camera incl. GoPro · συνεντεύξεις · απεριόριστα JPEG · παράδοση USB σε 4 ημέρες', 'Мультикамера вкл. GoPro · интервью · безлимитные JPEG · USB за 4 дня'),
          L('200 luxury invitations · 10 premium cardstocks · 300 designs or custom', '200 πολυτελείς προσκλήσεις · 10 premium χαρτιά · 300 σχέδια ή custom', '200 роскошных приглашений · 10 премиальных бумаг · 300 дизайнов или custom'),
        ],
      },
      {
        title: L('Treats, cake & décor', 'Κεράσματα, τούρτα & διακόσμηση', 'Угощения, торт и декор'),
        items: [
          L('400 premium treats · 25 varieties · custom wrapping', '400 premium κεράσματα · 25 ποικιλίες · custom συσκευασία', '400 premium-угощений · 25 видов · custom-упаковка'),
          L('3-tier bespoke cake · 6 flavours · 3D design · luxury cutting set', 'Τούρτα 3 επιπέδων · 6 γεύσεις · 3D design · πολυτελές σετ κοπής', '3-ярусный торт · 6 вкусов · 3D-дизайн · люксовый набор для разрезания'),
          L('Cars, church, floral arches, pillars, amphoras, aisle, LOVE letters, fairy lights, pool & up to 12 tables', 'Αυτοκίνητα, εκκλησία, ανθοστολισμένες αψίδες, κολώνες, amphores, διάδρομος, LOVE, fairy lights, πισίνα & έως 12 τραπέζια', 'Авто, храм, цветочные арки, колонны, амфоры, проход, LOVE, fairy lights, бассейн и до 12 столов'),
          L('Fresh natural flowers — 10 varieties', 'Φρέσκα φυσικά άνθη — 10 ποικιλίες', 'Свежие натуральные цветы — 10 сортов'),
        ],
      },
      {
        title: L('Effects, VIP & planning', 'Εφέ, VIP & οργάνωση', 'Эффекты, VIP и планирование'),
        items: [
          L('6 premium reception effects for church exit & first dance', '6 premium εφέ δεξίωσης για έξοδο εκκλησίας & πρώτο χορό', '6 premium-эффектов для выхода из храма и первого танца'),
          L('Audio & video guest book · VIP Mercedes/Maserati transfer with chauffeur & champagne', 'Τηλέφωνο ευχών · VIP μεταφορά Mercedes/Maserati με οδηγό & σαμπάνια', 'Книга пожеланий · VIP-трансфер Mercedes/Maserati с шофёром и шампанским'),
          L('Personal wedding planner · optional powerboat +€500 or limousine +€450', 'Προσωπικός wedding planner · προαιρετικά powerboat +€500 ή limousine +€450', 'Персональный planner · опционально powerboat +€500 или limousine +€450'),
        ],
      },
    ],
  },
  {
    id: 'elite',
    sortOrder: 3,
    name: L('Elite Wedding Experience', 'Elite Wedding Experience', 'Elite Wedding Experience'),
    tagline: L('Refined luxury for couples seeking something truly special.', 'Εκλεπτυσμένη πολυτέλεια για ζευγάρια που αναζητούν κάτι πραγματικά ξεχωριστό.', 'Изысканная роскошь для пар, ищущих нечто по-настоящему особое.'),
    priceDisplay: L('€9,900', '€9.900', '€9 900'),
    image: `${IMG}/elite-wedding-experience.webp`,
    flipImage: `${IMG}/elite-wedding-experience-back.webp`,
    highlight: L('Curated bridal couture from up to 150 designs, elevated treats & cake, and a seamless one-team Wedding Sky day.', 'Επιλεγμένο νυφικό από έως 150 σχέδια, elevated κεράσματα & τούρτα, και μία απρόσκοπτη ημέρα από μία ομάδα Wedding Sky.', 'Кураторское платье из до 150 дизайнов, elevated угощения и торт, и безупречный день одной команды Wedding Sky.'),
    sections: [
      {
        title: L('Attire & media', 'Εμφάνιση & media', 'Наряды и media'),
        items: [
          L('Bridal haute couture — up to 150 designs or bespoke, with veil, shoes, stefana, guest book, glasses & hair pieces', 'Νυφικό υψηλής ραπτικής — έως 150 σχέδια ή bespoke, με πέπλο, παπούτσια, στέφανα, βιβλίο ευχών, ποτήρια & αξεσουάρ', 'Bridal haute couture — до 150 дизайнов или bespoke, с вуалью, туфлями, венцами, книгой, бокалами и украшениями'),
          L('Tailored groom suit with full accessory set', 'Εφαρμοστό κοστούμι γαμπρού με πλήρες σετ αξεσουάρ', 'Сшитый костюм жениха с полным комплектом аксессуаров'),
          L('Luxury albums, mini albums, canvas, 4K coverage, Hollywood trailer, GoPro & 4-day USB delivery', 'Luxury άλμπουμ, mini, καμβάς, 4K κάλυψη, Hollywood trailer, GoPro & παράδοση USB σε 4 ημέρες', 'Luxury-альбомы, mini, холст, 4K, Hollywood trailer, GoPro и USB за 4 дня'),
          L('250 luxury invitations · 20 premium papers · custom design options', '250 πολυτελείς προσκλήσεις · 20 premium χαρτιά · επιλογές custom design', '250 роскошных приглашений · 20 премиальных бумаг · варианты custom-дизайна'),
        ],
      },
      {
        title: L('Hospitality & décor', 'Φιλοξενία & διακόσμηση', 'Гостеприимство и декор'),
        items: [
          L('500 premium treats · 45 options · 3-tier signature cake with 3D design & luxury cutting set', '500 premium κεράσματα · 45 επιλογές · τούρτα 3 επιπέδων με 3D design & πολυτελές σετ κοπής', '500 premium-угощений · 45 вариантов · 3-ярусный signature-торт с 3D-дизайном и люксовым набором'),
          L('Comprehensive car, church & reception décor with LOVE letters, fairy lights and fresh florals', 'Ολοκληρωμένη διακόσμηση αυτοκινήτου, εκκλησίας & δεξίωσης με LOVE, fairy lights και φρέσκα άνθη', 'Полный декор авто, храма и зала с LOVE, fairy lights и свежей флористикой'),
          L('DJ unlimited or live violin/saxophone programme', 'DJ απεριόριστα ή live πρόγραμμα βιολιού/σαξοφώνου', 'Безлимитный DJ или live скрипка/саксофон'),
        ],
      },
      {
        title: L('Effects, VIP & planning', 'Εφέ, VIP & οργάνωση', 'Эффекты, VIP и планирование'),
        items: [
          L('8 premium confetti effects · floral photo frame', '8 premium confetti effects · ανθοστολισμένη κορνίζα', '8 premium confetti · цветочная рамка'),
          L('Audio & video guest book · VIP Mercedes/Maserati transfer', 'Τηλέφωνο ευχών · VIP μεταφορά Mercedes/Maserati', 'Книга пожеланий · VIP-трансфер Mercedes/Maserati'),
          L('Personal wedding planner · optional pre-wedding powerboat or limousine experiences', 'Προσωπικός wedding planner · προαιρετικές προγαμήλιες εμπειρίες powerboat ή limousine', 'Персональный planner · опциональные pre-wedding powerboat или limousine'),
        ],
      },
    ],
  },
  {
    id: 'exclusive',
    sortOrder: 4,
    name: L('Exclusive Wedding Experience', 'Exclusive Wedding Experience', 'Exclusive Wedding Experience'),
    tagline: L('Designed with unique care for a truly distinctive wedding day.', 'Σχεδιασμένο με μοναδική φροντίδα για μια πραγματικά ξεχωριστή ημέρα γάμου.', 'Создано с особой заботой для по-настоящему особенного свадебного дня.'),
    priceDisplay: L('€11,300', '€11.300', '€11 300'),
    image: `${IMG}/exclusive-wedding-experience.webp`,
    flipImage: `${IMG}/exclusive-wedding-experience-back.webp`,
    highlight: L('Expanded couture wardrobe, jewellery programme, richer décor, and signature hospitality effects.', 'Εμπλουτισμένη γκαρνταρόμπα couture, πρόγραμμα κοσμημάτων, richer διακόσμηση και signature εφέ φιλοξενίας.', 'Расширенный couture-гардероб, ювелирная программа, richer декор и signature-эффекты гостеприимства.'),
    featured: true,
    sections: [
      {
        title: L('Couture & jewellery', 'Couture & κοσμήματα', 'Couture и украшения'),
        items: [
          L('Bridal selection from 1,100 designs or bespoke — veil, accessories, handmade shoes & flower-girl dresses', 'Νυφικό από 1.100 σχέδια ή bespoke — πέπλο, αξεσουάρ, χειροποίητα παπούτσια & φορέματα παρανυφάκιων', 'Платье из 1 100 дизайнов или bespoke — вуаль, аксессуары, handmade туфли и платья для подружек'),
          L('Tailored groom suit with shirt, vest, tie/bow, belt & cufflinks', 'Εφαρμοστό κοστούμι γαμπρού με πουκάμισο, γιλέκο, γραβάτα/παπιγιόν, ζώνη & μανικετόκουμπα', 'Сшитый костюм жениха с рубашкой, жилетом, галстуком/бабочкой, ремнём и запонками'),
          L('Wedding rings from 600 designs · jewellery discounts', 'Βέρες από 600 σχέδια · εκπτώσεις σε κοσμήματα', 'Обручальные кольца из 600 дизайнов · скидки на украшения'),
        ],
      },
      {
        title: L('Media, stationery & hospitality', 'Media, stationery & φιλοξενία', 'Media, канцелярия и гостеприимство'),
        items: [
          L('Artistic albums, unlimited photos, 4K video, drone footage & social trailers', 'Καλλιτεχνικά άλμπουμ, απεριόριστες φωτογραφίες, 4K video, drone & social trailers', 'Художественные альбомы, безлимитные фото, 4K, дрон и social trailers'),
          L('300 invitations · 25 premium papers · custom design', '300 προσκλήσεις · 25 premium χαρτιά · custom design', '300 приглашений · 25 премиальных бумаг · custom-дизайн'),
          L('600 premium treats · 3-tier bespoke cake with custom 3D design', '600 premium κεράσματα · τούρτα 3 επιπέδων με custom 3D design', '600 premium-угощений · 3-ярусный торт с custom 3D-дизайном'),
        ],
      },
      {
        title: L('Décor, entertainment & VIP', 'Διακόσμηση, ψυχαγωγία & VIP', 'Декор, развлечения и VIP'),
        items: [
          L('Full car, church & reception décor including flower LOVE letters and aisle styling', 'Πλήρης διακόσμηση αυτοκινήτου, εκκλησίας & δεξίωσης με LOVE από άνθη και styling διαδρόμου', 'Полный декор авто, храма и зала включая LOVE из цветов и styling прохода'),
          L('Professional DJ · live violin/saxophone options', 'Επαγγελματίας DJ · επιλογές live βιολιού/σαξοφώνου', 'Профессиональный DJ · варианты live скрипки/саксофона'),
          L('Confetti cannons · smoke/fog for first dance · floral photo frame', 'Confetti cannons · smoke/fog για πρώτο χορό · ανθοστολισμένη κορνίζα', 'Confetti cannons · дым/туман для первого танца · цветочная рамка'),
          L('Audio & video guest book · VIP Maserati or Mercedes transfer · personal planner', 'Τηλέφωνο ευχών · VIP Maserati ή Mercedes · προσωπικός planner', 'Книга пожеланий · VIP Maserati или Mercedes · персональный planner'),
        ],
      },
    ],
  },
  {
    id: 'imperial',
    sortOrder: 5,
    name: L('Imperial Wedding Experience', 'Imperial Wedding Experience', 'Imperial Wedding Experience'),
    tagline: L('Aristocratic elegance inspired by timeless grandeur.', 'Αριστοκρατική κομψότητα εμπνευσμένη από διαχρονικό μεγαλείο.', 'Аристократическая элегантность, вдохновлённая вневременным величием.'),
    priceDisplay: L('€12,000', '€12.000', '€12 000'),
    image: `${IMG}/imperial-wedding-experience.webp`,
    flipImage: `${IMG}/imperial-wedding-experience-back.webp`,
    highlight: L('Expanded couture, same-day edit film, drone 4K, pyrotechnics, and richer floral architecture.', 'Εμπλουτισμένο couture, same-day edit film, drone 4K, πυροτεχνήματα και richer ανθοστολισμός.', 'Расширенный couture, same-day edit, дрон 4K, пиротехника и richer цветочная архитектура.'),
    sections: [
      {
        title: L('Attire & cinematic media', 'Εμφάνιση & cinematic media', 'Наряды и cinematic media'),
        items: [
          L('Bridal choice from 1,200+ designs or bespoke · luxury veils · anatomical shoes · up to 8 flower-girl outfits', 'Νυφικό από 1.200+ σχέδια ή bespoke · luxury πέπλα · ανατομικά παπούτσια · έως 8 φορέματα παρανυφάκιων', 'Платье из 1 200+ дизайнов или bespoke · luxury-вуали · анатомические туфли · до 8 нарядов для подружек'),
          L('Tailored groom suit with premium accessories & cufflinks', 'Εφαρμοστό κοστούμι γαμπρού με premium αξεσουάρ & μανικετόκουμπα', 'Сшитый костюм жениха с premium-аксессуарами и запонками'),
          L('Luxury album programme · location shoot · Same Day Edit · Hollywood trailer · drone 4K · 4-day delivery', 'Luxury άλμπουμ · location shoot · Same Day Edit · Hollywood trailer · drone 4K · παράδοση σε 4 ημέρες', 'Luxury-альбомы · съёмка на локации · Same Day Edit · Hollywood trailer · дрон 4K · сдача за 4 дня'),
          L('350 luxury invitations · 370 designs or fully customised', '350 πολυτελείς προσκλήσεις · 370 σχέδια ή πλήρως custom', '350 роскошных приглашений · 370 дизайнов или полностью custom'),
        ],
      },
      {
        title: L('Hospitality & imperial décor', 'Φιλοξενία & imperial διακόσμηση', 'Гостеприимство и imperial-декор'),
        items: [
          L('650 premium treats · 50 types · 3-tier cake with 10 flavours, 3D design & real flowers', '650 premium κεράσματα · 50 είδη · τούρτα 3 επιπέδων με 10 γεύσεις, 3D design & πραγματικά άνθη', '650 premium-угощений · 50 видов · 3-ярусный торт с 10 вкусами, 3D и живыми цветами'),
          L('Two-car décor · church florals, arches, aisle runners, lanterns & candle styling', 'Διακόσμηση δύο αυτοκινήτων · εκκλησία με άνθη, αψίδες, διαδρόμους, φανάρια & κεριά', 'Декор двух авто · храм с цветами, арками, дорожками, фонарями и свечами'),
          L('Reception crystal lighting, LOVE letters, pool styling, fairy lights & elaborate tablescapes', 'Δεξίωση με crystal φωτισμό, LOVE, πισίνα, fairy lights & elaborate tablescapes', 'Зал с crystal-светом, LOVE, бассейном, fairy lights и elaborate tablescapes'),
          L('Fresh flowers from 13 varieties', 'Φρέσκα άνθη από 13 ποικιλίες', 'Свежие цветы из 13 сортов'),
        ],
      },
      {
        title: L('Entertainment, effects & VIP', 'Ψυχαγωγία, εφέ & VIP', 'Развлечения, эффекты и VIP'),
        items: [
          L('DJ or live performance · traditional violin & lute for preparations', 'DJ ή live · παραδοσιακό βιολί & λαούτο για προετοιμασίες', 'DJ или live · традиционные скрипка и лаут для сборов'),
          L('Wedding rings from 630 designs or bespoke 3D creations', 'Βέρες από 630 σχέδια ή bespoke 3D δημιουργίες', 'Кольца из 630 дизайнов или bespoke 3D'),
          L('6 floor-fountain pyrotechnics · 12 premium confetti shots', '6 πυροτεχνήματα floor fountain · 12 premium confetti shots', '6 пиротехнических фонтанов · 12 premium confetti'),
          L('Audio & video guest book · VIP Mercedes/Maserati transfer · full planning & day coordination', 'Τηλέφωνο ευχών · VIP Mercedes/Maserati · πλήρης οργάνωση & συντονισμός', 'Книга пожеланий · VIP Mercedes/Maserati · полное планирование и координация'),
        ],
      },
    ],
  },
  {
    id: 'crown',
    sortOrder: 6,
    name: L('Crown Wedding Experience', 'Crown Wedding Experience', 'Crown Wedding Experience'),
    tagline: L('The ultimate expression of exclusivity, prestige, and timeless elegance.', 'Η απόλυτη έκφραση αποκλειστικότητας, κύρους και διαχρονικής κομψότητας.', 'Абсолютное выражение эксклюзивности, престижа и вневременной элегантности.'),
    priceDisplay: L('€14,000', '€14.000', '€14 000'),
    image: `${IMG}/crown-wedding-experience.webp`,
    flipImage: `${IMG}/crown-wedding-experience-back.webp`,
    highlight: L('Designer couture, 5-tier cake, 3.4m flower wall, fireworks programme, and a luxury hotel or adrenaline experience.', 'Designer couture, τούρτα 5 επιπέδων, flower wall 3.4μ, πρόγραμμα πυροτεχνημάτων και luxury hotel ή adrenaline εμπειρία.', 'Designer couture, 5-ярусный торт, flower wall 3,4 м, фейерверк и luxury hotel или adrenaline-опыт.'),
    sections: [
      {
        title: L('Crown wardrobe & media', 'Crown γκαρνταρόμπα & media', 'Crown-гардероб и media'),
        items: [
          L('Designer bridal gown from 1,300 designs or bespoke · accessories, shoes & veils', 'Designer νυφικό από 1.300 σχέδια ή bespoke · αξεσουάρ, παπούτσια & πέπλα', 'Designer-платье из 1 300 дизайнов или bespoke · аксессуары, туфли и вуали'),
          L('Tailored groom suit with full accessories & shoes', 'Εφαρμοστό κοστούμι γαμπρού με πλήρη αξεσουάρ & παπούτσια', 'Сшитый костюм жениха с полным комплектом аксессуаров и обувью'),
          L('High-end albums · 4K photography · cinematic film · same-day edit · drone · social content', 'High-end άλμπουμ · 4K φωτογραφία · cinematic film · same-day edit · drone · social content', 'High-end альбомы · 4K фото · cinematic film · same-day edit · дрон · social-контент'),
          L('400 premium invitations · 800 luxury treats · 5-tier bespoke cake with custom 3D design', '400 premium προσκλήσεις · 800 luxury κεράσματα · τούρτα 5 επιπέδων με custom 3D design', '400 premium-приглашений · 800 luxury-угощений · 5-ярусный торт с custom 3D'),
        ],
      },
      {
        title: L('Statement décor & entertainment', 'Statement διακόσμηση & ψυχαγωγία', 'Statement-декор и развлечения'),
        items: [
          L('Décor for two preparation houses & two cars · church flower runner & large floral stands', 'Διακόσμηση δύο σπιτιών προετοιμασίας & δύο αυτοκινήτων · flower runner εκκλησίας & μεγάλες ανθοστήλες', 'Декор двух домов сборов и двух авто · flower runner в храме и крупные стойки'),
          L('3.4m flower wall · candle styling · royal fairy lights', 'Flower wall 3.4μ · candle styling · royal fairy lights', 'Flower wall 3,4 м · candle styling · royal fairy lights'),
          L('Professional DJ · live violin/saxophone · fireworks/fountains · smoke & confetti effects', 'Επαγγελματίας DJ · live βιολί/σαξόφωνο · πυροτεχνήματα/συντριβάνια · smoke & confetti', 'Профессиональный DJ · live скрипка/саксофон · фейерверк/фонтаны · smoke и confetti'),
          L('Wedding rings from 650 designs', 'Βέρες από 650 σχέδια', 'Кольца из 650 дизайнов'),
        ],
      },
      {
        title: L('Crown experiences & VIP', 'Crown εμπειρίες & VIP', 'Crown-опыты и VIP'),
        items: [
          L('Choice of 5-star hotel stay with spa OR adrenaline experience — private flight over Cyprus or Lamborghini/Porsche 911 drive', 'Επιλογή 5* ξενοδοχείου με spa Ή adrenaline εμπειρίας — ιδιωτική πτήση πάνω από την Κύπρο ή οδήγηση Lamborghini/Porsche 911', 'На выбор: 5★ отель со spa ИЛИ adrenaline — частный полёт над Кипром или Lamborghini/Porsche 911'),
          L('VIP transfer in Maserati, Mercedes S-Class or 12-person limousine', 'VIP μεταφορά με Maserati, Mercedes S-Class ή λιμουζίνα 12 ατόμων', 'VIP-трансфер на Maserati, Mercedes S-Class или 12-местном лимузине'),
          L('Audio & video guest book · full planning & day coordination · optional pre-wedding upgrades', 'Τηλέφωνο ευχών · πλήρης οργάνωση & συντονισμός · προαιρετικά προγαμήλια upgrades', 'Книга пожеланий · полное планирование и координация · опциональные pre-wedding upgrades'),
        ],
      },
    ],
  },
  {
    id: 'royal',
    sortOrder: 7,
    name: L('Royal Wedding Experience', 'Royal Wedding Experience', 'Royal Wedding Experience'),
    tagline: L('The ultimate expression of luxury, elegance, and unforgettable magnificence.', 'Η απόλυτη έκφραση πολυτέλειας, κομψότητας και αξέχαστης μεγαλοπρέπειας.', 'Абсолютное выражение роскоши, элегантности и незабываемого великолепия.'),
    priceDisplay: L('€18,400', '€18.400', '€18 400'),
    image: `${IMG}/royal-wedding-experience.webp`,
    flipImage: `${IMG}/royal-wedding-experience-back.webp`,
    highlight: L('Imperial-scale décor, yacht or adrenaline hospitality, spa retreat, and a fully orchestrated royal production.', 'Imperial-scale διακόσμηση, φιλοξενία yacht ή adrenaline, spa retreat και πλήρως ενορχηστρωμένη royal παραγωγή.', 'Imperial-масштаб декора, yacht или adrenaline-гостеприимство, spa retreat и полностью оркестрованная royal-постановка.'),
    sections: [
      {
        title: L('Royal fashion & media', 'Royal μόδα & media', 'Royal-мода и media'),
        items: [
          L('Luxury designer bridal collections · veils · handmade guest books · tailored groom suit & premium accessories', 'Luxury designer νυφικά · πέπλα · χειροποίητα βιβλία ευχών · εφαρμοστό κοστούμι γαμπρού & premium αξεσουάρ', 'Luxury designer-платья · вуали · handmade книги · сшитый костюм жениха и premium-аксессуары'),
          L('Digital & companion albums · full 4K video · Same Day Edit · social content · aerial drone footage', 'Digital & companion άλμπουμ · πλήρες 4K video · Same Day Edit · social content · aerial drone', 'Digital и companion-альбомы · полный 4K · Same Day Edit · social · aerial-дрон'),
          L('450 luxury invitations · 900 signature treats · bespoke tiered wedding cake', '450 πολυτελείς προσκλήσεις · 900 signature κεράσματα · bespoke πολυεπίπεδη τούρτα', '450 роскошных приглашений · 900 signature-угощений · bespoke многоярусный торт'),
        ],
      },
      {
        title: L('Imperial décor & grand effects', 'Imperial διακόσμηση & grand εφέ', 'Imperial-декор и grand-эффекты'),
        items: [
          L('Imperial décor for two houses, two cars, church interior & exterior, floral arch & 3.4m flower wall', 'Imperial διακόσμηση δύο σπιτιών, δύο αυτοκινήτων, εκκλησίας, ανθοστολισμένης αψίδας & flower wall 3.4μ', 'Imperial-декор двух домов, двух авто, храма, цветочной арки и flower wall 3,4 м'),
          L('LOVE flower letters · extensive table & pool decoration', 'LOVE από άνθη · εκτενής διακόσμηση τραπεζιών & πισίνας', 'LOVE из цветов · обширный декор столов и бассейна'),
          L('Indoor fountains · 50 aerial fireworks · confetti machines · low-fog dance floor', 'Εσωτερικά συντριβάνια · 50 εναέρια πυροτεχνήματα · confetti machines · low-fog πίστα', 'Внутренние фонтаны · 50 воздушных фейерверков · confetti · low-fog на танцполе'),
        ],
      },
      {
        title: L('Royal experiences & orchestration', 'Royal εμπειρίες & ενορχήστρωση', 'Royal-опыты и оркестровка'),
        items: [
          L('5-star hotel stay · private SPA · choice of 4-hour luxury yacht party for 60 guests OR adrenaline experience', 'Διαμονή 5* · ιδιωτικό SPA · επιλογή 4ωρης luxury yacht party για 60 καλεσμένους Ή adrenaline εμπειρίας', '5★ отель · частный SPA · на выбор 4-часовая luxury yacht party на 60 гостей ИЛИ adrenaline'),
          L('Professional DJ or live performance · professional lighting · traditional musicians for bridal preparation', 'Επαγγελματίας DJ ή live · professional lighting · παραδοσιακοί μουσικοί για προετοιμασία νύφης', 'Профессиональный DJ или live · professional lighting · традиционные музыканты на сборы'),
          L('VIP transfer — Mercedes S-Class AMG, Maserati Ghibli or Chrysler Limousine with red-carpet arrival', 'VIP μεταφορά — Mercedes S-Class AMG, Maserati Ghibli ή Chrysler Limousine με red-carpet άφιξη', 'VIP-трансфер — Mercedes S-Class AMG, Maserati Ghibli или Chrysler Limousine с red-carpet'),
          L('Dedicated wedding planner for full organisation and day coordination', 'Αφοσιωμένος wedding planner για πλήρη οργάνωση και συντονισμό ημέρας', 'Выделенный wedding planner для полной организации и координации дня'),
        ],
      },
    ],
  },
  {
    id: 'customised',
    sortOrder: 8,
    name: L('Customised Wedding Package', 'Πακέτο Γάμου Customised', 'Индивидуальный свадебный пакет'),
    tagline: L('Create your own wedding package — shaped entirely around your needs and wishes.', 'Φτιάξτε το δικό σας πακέτο γάμου, ανάλογα με τις ανάγκες και τα θέλω σας.', 'Создайте свой свадебный пакет — полностью под ваши нужды и желания.'),
    priceDisplay: L('Quoted on request', 'Κατόπιν προσφοράς', 'По запросу'),
    image: `${IMG}/customised-wedding-experience.webp`,
    highlight: L('You dream. We create. — a fully bespoke Wedding Sky programme composed with you.', 'Εσείς ονειρεύεστε. Εμείς δημιουργούμε. — ένα πλήρως bespoke πρόγραμμα Wedding Sky μαζί σας.', 'Вы мечтаете. Мы создаём. — полностью bespoke программа Wedding Sky вместе с вами.'),
    sections: [
      {
        title: L('Build your celebration', 'Φτιάξτε τη γιορτή σας', 'Соберите своё торжество'),
        items: [
          L('Location selection & venue direction', 'Επιλογή τοποθεσίας & καθοδήγηση χώρου', 'Выбор локации и направление по площадке'),
          L('Décor, florals & lighting mood', 'Διακόσμηση, άνθη & φωτιστική ατμόσφαιρα', 'Декор, цветы и световая атмосфера'),
          L('Catering composition & hospitality flow', 'Σύνθεση catering & ροή φιλοξενίας', 'Состав catering и поток гостеприимства'),
          L('Photography & film programme', 'Πρόγραμμα φωτογραφίας & film', 'Программа фото и film'),
          L('Music, entertainment & ceremony styling', 'Μουσική, ψυχαγωγία & styling τελετής', 'Музыка, развлечения и styling церемонии'),
          L('…and everything else your day requires', '…και ό,τι άλλο χρειάζεται η ημέρα σας', '…и всё остальное, что нужно вашему дню'),
        ],
      },
    ],
  },
]

export function getCompleteWeddingPackage(id: string | undefined) {
  return completeWeddingPackages.find((pkg) => pkg.id === id)
}

export function getCompleteWeddingPackageExpandedSections(id: string | undefined) {
  const pkg = getCompleteWeddingPackage(id)
  return pkg?.sections
}
