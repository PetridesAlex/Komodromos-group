/** Highlight grid for Wedding Sky — full services catalogue. */

import type { LocalizedText } from '../lib/weddingLocale'

export type WeddingHighlightTile = {
  id: string
  /** Optional short label above the service title. */
  kicker?: LocalizedText
  title: LocalizedText
  image: string
  hashHref?: string
  contact?: boolean
}

const TILE_IMG = '/images/services/wedding-highlights'

const TILE_IMAGES = [
  `${TILE_IMG}/destinations.webp`,
  `${TILE_IMG}/planning.webp`,
  `${TILE_IMG}/bridal.webp`,
  `${TILE_IMG}/production.webp`,
  `${TILE_IMG}/guests.webp`,
  `${TILE_IMG}/stories.webp`,
  `${TILE_IMG}/packages.webp`,
  `${TILE_IMG}/consultation.webp`,
] as const

type TileSeed = Omit<WeddingHighlightTile, 'image'>

/** Full Wedding Sky services — EN / EL from catalogue; RU aligned. Imagery cycles. */
const TILE_SEEDS: TileSeed[] = [
  {
    id: 'luxury-bridal-gowns',
    title: {
      en: 'Couture Bridal Gowns',
      el: 'Πολυτελή Νυφικά',
      ru: 'Роскошные свадебные платья',
    },
  },
  {
    id: 'bridal-makeup',
    title: {
      en: 'Couture Bridal Make-up',
      el: 'Νυφικό Μακιγιάζ',
      ru: 'Свадебный макияж',
    },
  },
  {
    id: 'bridal-hairstyling',
    title: {
      en: 'Atelier Bridal Hairstyling',
      el: 'Νυφικό Χτένισμα',
      ru: 'Свадебная причёска',
    },
  },
  {
    id: 'luxury-dance-floor',
    title: {
      en: 'Bespoke Luxury Dance Floor',
      el: 'Πολυτελής Πίστα Χορού',
      ru: 'Роскошный танцпол',
    },
  },
  {
    id: 'vintage-wedding-car',
    title: {
      en: 'Vintage Bridal Car',
      el: 'Αυτοκίνητο Αντίκα',
      ru: 'Винтажный свадебный автомобиль',
    },
  },
  {
    id: 'wedding-content-creator',
    title: {
      en: 'Wedding Content Studio',
      el: 'Δημιουργός Γαμήλιου Περιεχομένου',
      ru: 'Создание свадебного контента',
    },
  },
  {
    id: 'live-loukoumades',
    title: {
      en: 'Live Loukoumades Experience',
      el: 'Ζωντανός Σταθμός Λουκουμάδων',
      ru: 'Живая станция лукумадес',
    },
  },
  {
    id: 'venue-selection',
    title: {
      en: 'Venue Selection',
      el: 'Επιλογή Χώρου',
      ru: 'Подбор площадки',
    },
  },
  {
    id: 'electric-violin',
    title: {
      en: 'Electric Violin Performance',
      el: 'Ηλεκτρικό Βιολί',
      ru: 'Электроскрипка',
    },
  },
  {
    id: 'personalized-wedding-website',
    title: {
      en: 'Bespoke Wedding Website',
      el: 'Προσωποποιημένη Ιστοσελίδα Γάμου',
      ru: 'Персональный свадебный сайт',
    },
  },
  {
    id: 'luxury-supercars',
    title: {
      en: 'Luxury & Supercar Fleet',
      el: 'Πολυτελή & Σπορ Αυτοκίνητα',
      ru: 'Люксовые и суперкары',
    },
  },
  {
    id: 'wedding-invitations',
    title: {
      en: 'Fine Wedding Stationery',
      el: 'Προσκλητήρια Γάμου',
      ru: 'Свадебные приглашения',
    },
  },
  {
    id: '360-video-booth',
    title: {
      en: '360° Cinematic Booth',
      el: 'Περιστρεφόμενος Βίντεο 360°',
      ru: 'Видеобудка 360°',
    },
  },
  {
    id: 'wedding-orchestra',
    title: {
      en: 'Live Wedding Orchestra',
      el: 'Γαμήλια Ορχήστρα',
      ru: 'Свадебный оркестр',
    },
  },
  {
    id: 'honeymoon-planning',
    title: {
      en: 'Bespoke Honeymoon Planning',
      el: 'Οργάνωση Ταξιδιού του Μέλιτος',
      ru: 'Организация медового месяца',
    },
  },
  {
    id: 'wedding-christening-favours',
    title: {
      en: 'Artisan Wedding & Christening Favours',
      el: 'Μπομπονιέρες Γάμου & Βάπτισης',
      ru: 'Бонбоньерки для свадьбы и крестин',
    },
  },
  {
    id: 'mobile-cocktail-bar',
    title: {
      en: 'Signature Cocktail Bar',
      el: 'Κινητό Μπαρ Κοκτέιλ',
      ru: 'Мобильный коктейль-бар',
    },
  },
  {
    id: 'drone-videography',
    title: {
      en: 'Aerial Drone Cinema',
      el: 'Εναέρια Βιντεοσκόπηση με Drone',
      ru: 'Аэросъёмка дроном',
    },
  },
  {
    id: 'daouli-toumperleki',
    title: {
      en: 'Traditional Percussion Spectacle',
      el: 'Νταούλι & Τουμπερλέκι',
      ru: 'Шоу с даули и тумберлеки',
    },
  },
  {
    id: 'party-platters',
    title: {
      en: 'Gourmet Party Platters',
      el: 'Πιατέλες για Πάρτι',
      ru: 'Праздничные плато',
    },
  },
  {
    id: 'luxury-limousine',
    title: {
      en: 'Private Luxury Limousine',
      el: 'Πολυτελής Λιμουζίνα',
      ru: 'Роскошный лимузин',
    },
  },
  {
    id: 'church-choir',
    title: {
      en: 'Sacred Church Choir',
      el: 'Εκκλησιαστική Χορωδία',
      ru: 'Церковный хор',
    },
  },
  {
    id: 'wedding-treats-cake',
    title: {
      en: 'Couture Wedding Cake & Treats',
      el: 'Γαμήλια Κεράσματα & Τούρτα',
      ru: 'Свадебные угощения и торт',
    },
  },
  {
    id: 'photo-booth',
    title: {
      en: 'Luxury Photo Booth',
      el: 'Photo Booth',
      ru: 'Фотобудка',
    },
  },
  {
    id: 'cold-spark-fireworks',
    title: {
      en: 'Cold Spark Spectacle',
      el: 'Πυροτεχνήματα εδάφους',
      ru: 'Холодные искры',
    },
  },
  {
    id: 'mobile-platter-bar',
    title: {
      en: 'Gourmet Platter Bar',
      el: 'Κινητό Μπαρ με Πιατέλες',
      ru: 'Мобильный бар с плато',
    },
  },
  {
    id: 'groom-suits',
    title: {
      en: 'Tailored Groom Suits',
      el: 'Κοστούμια Γαμπρού',
      ru: 'Костюмы для жениха',
    },
  },
  {
    id: 'private-jet-honeymoon',
    title: {
      en: 'Private Jet Honeymoon Escape',
      el: 'Ταξίδι του Μέλιτος με Ιδιωτικό Αεροσκάφος',
      ru: 'Медовый месяц на частном самолёте',
    },
  },
  {
    id: 'luxury-shisha-lounge',
    title: {
      en: 'Private Shisha Lounge',
      el: 'Ναργιλές',
      ru: 'Лаунж с кальяном',
    },
  },
  {
    id: 'live-saxophone',
    title: {
      en: 'Live Saxophone Performance',
      el: 'Ζωντανό Σαξόφωνο',
      ru: 'Живой саксофон',
    },
  },
  {
    id: 'wedding-planning-coordination',
    title: {
      en: 'Full Wedding Planning & Coordination',
      el: 'Οργάνωση & Συντονισμός Γάμου',
      ru: 'Организация и координация свадьбы',
    },
  },
  {
    id: 'vintage-wedding-bus',
    title: {
      en: 'Vintage Bridal Bus',
      el: 'Λεωφορειάκι Αντίκα',
      ru: 'Винтажный свадебный автобус',
    },
  },
  {
    id: 'ring-for-a-drink',
    title: {
      en: 'Ring-for-a-Drink Moment',
      el: 'Κουδούνι για Ποτό',
      ru: 'Колокольчик для напитка',
    },
  },
  {
    id: 'wedding-photo-video',
    title: {
      en: 'Fine Art Wedding Film & Photography',
      el: 'Φωτογράφιση & Βιντεοσκόπηση Γάμου',
      ru: 'Свадебная фото- и видеосъёмка',
    },
  },
  {
    id: 'confetti-machine',
    title: {
      en: 'Confetti Celebration Machine',
      el: 'Μηχανή Κομφετί',
      ru: 'Машина конфетти',
    },
  },
  {
    id: '3d-couple-figurines',
    title: {
      en: 'Bespoke 3D Couple Figurines',
      el: 'Τρισδιάστατες Φιγούρες Ζευγαριού',
      ru: '3D-фигурки пары',
    },
  },
  {
    id: 'professional-wedding-dj',
    title: {
      en: 'Resident Wedding DJ',
      el: 'Επαγγελματίας DJ',
      ru: 'Профессиональный свадебный DJ',
    },
  },
  {
    id: 'live-setup-cake-100cm',
    title: {
      en: 'Monumental Live-Setup Cake',
      el: 'Τούρτα 100 εκ. με Ζωντανό Στήσιμο',
      ru: 'Торт 100 см с живой сборкой',
    },
  },
  {
    id: 'home-security',
    title: {
      en: 'Private Home Security',
      el: 'Φρουρός Ασφάλειας Κατοικίας',
      ru: 'Охрана дома',
    },
  },
  {
    id: 'yacht-bachelor-hen',
    title: {
      en: 'Yacht Bachelor & Hen Celebration',
      el: 'Yacht Bachelor & Hen Party',
      ru: 'Мальчишник и девичник на яхте',
    },
  },
  {
    id: 'florals-decoration',
    title: {
      en: 'Couture Florals & Decoration',
      el: 'Ανθοστολισμός & Διακόσμηση',
      ru: 'Цветы и декор',
    },
  },
  {
    id: 'audio-guest-book',
    title: {
      en: 'Audio & Video Guest Book',
      el: 'Ηχητικό & βίντεο Βιβλίο Ευχών',
      ru: 'Аудиокнига пожеланий гостей',
    },
  },
  {
    id: 'draft-beer-station',
    title: {
      en: 'Craft Draft Beer Station',
      el: 'Βαρελίσια Μπύρα',
      ru: 'Станция разливного пива',
    },
  },
  {
    id: 'first-dance-choreography',
    title: {
      en: 'First Dance Choreography Studio',
      el: 'Χορογραφία Πρώτου Χορού',
      ru: 'Хореография первого танца',
    },
  },
  {
    id: 'dancing-on-the-clouds',
    title: {
      en: 'Dancing on the Clouds Experience',
      el: 'Χορός στα Σύννεφα',
      ru: 'Танец на облаках',
    },
  },
  {
    id: 'traditional-wedding-preparations',
    title: {
      en: 'Traditional Bridal Preparations',
      el: 'Παραδοσιακά Αλλάματα με Βιολάρηδες',
      ru: 'Традиционные свадебные приготовления',
    },
  },
  {
    id: 'co2-led-guns',
    title: {
      en: 'CO₂ LED Celebration Guns',
      el: 'Φωτιζόμενα Πιστόλια CO₂',
      ru: 'Светодиодные пистолеты CO₂',
    },
  },
  {
    id: 'proposal-in-the-air',
    title: {
      en: 'Aerial Proposal Experience',
      el: 'Πρόταση Γάμου στον Αέρα',
      ru: 'Предложение руки в воздухе',
    },
  },
  {
    id: 'wedding-equipment',
    title: {
      en: 'Premium Wedding Equipment',
      el: 'Γαμήλιος Εξοπλισμός',
      ru: 'Свадебное оборудование',
    },
  },
  {
    id: 'luxury-yacht-wedding',
    title: {
      en: 'Luxury Yacht Wedding Escape',
      el: 'Γάμος σε Πολυτελές Σκάφος',
      ru: 'Свадьба на роскошной яхте',
    },
  },
  {
    id: 'greek-island-weddings',
    title: {
      en: 'Greek Island Destination Weddings',
      el: 'Γάμοι στα Ελληνικά Νησιά',
      ru: 'Свадьбы на греческих островах',
    },
  },
]

export const weddingHighlightTiles: WeddingHighlightTile[] = TILE_SEEDS.map((seed, index) => ({
  ...seed,
  image: TILE_IMAGES[index % TILE_IMAGES.length],
}))
