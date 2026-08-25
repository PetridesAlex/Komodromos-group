/** Highlight grid for Wedding Sky — full services catalogue. */

import type { LocalizedText } from '../lib/weddingLocale'

export type WeddingHighlightTile = {
  id: string
  /** Optional short label above the service title. */
  kicker?: LocalizedText
  title: LocalizedText
  image: string
  /** Prefer contain for product mockups so the full subject stays visible. */
  imageFit?: 'cover' | 'contain'
  hashHref?: string
  contact?: boolean
}

const TILE_IMG = '/images/services/wedding-highlights'
const SERVICE_IMG = `${TILE_IMG}/wedding-services`

/** Dedicated covers from wedding-services/ — keyed by tile id. */
const TILE_COVERS: Partial<
  Record<string, { src: string; fit?: 'cover' | 'contain' }>
> = {
  'luxury-bridal-gowns': { src: `${SERVICE_IMG}/luxury-bridal-gowns.webp` },
  'bridal-makeup': { src: `${SERVICE_IMG}/bridal-makeup.webp` },
  'bridal-hairstyling': { src: `${SERVICE_IMG}/bridal-hairstyling.webp` },
  'luxury-dance-floor': { src: `${SERVICE_IMG}/luxury-dance-floor.webp` },
  'vintage-wedding-car': { src: `${SERVICE_IMG}/vintage-wedding-car.webp` },
  'wedding-content-creator': { src: `${SERVICE_IMG}/wedding-content-creator.webp` },
  'live-loukoumades': { src: `${SERVICE_IMG}/live-loukoumades.webp` },
  'electric-violin': { src: `${SERVICE_IMG}/electric-violin.webp` },
  'personalized-wedding-website': {
    src: `${SERVICE_IMG}/personalized-wedding-website.webp`,
    fit: 'contain',
  },
  'luxury-supercars': { src: `${SERVICE_IMG}/luxury-supercars.webp` },
  'wedding-invitations': { src: `${SERVICE_IMG}/wedding-invitations.webp` },
  '360-video-booth': { src: `${SERVICE_IMG}/360-video-booth.webp` },
  'wedding-orchestra': { src: `${SERVICE_IMG}/wedding-orchestra.webp` },
  'honeymoon-planning': { src: `${SERVICE_IMG}/honeymoon-planning.webp` },
  'wedding-christening-favours': {
    src: `${SERVICE_IMG}/wedding-christening-favours.webp`,
  },
  'mobile-cocktail-bar': { src: `${SERVICE_IMG}/mobile-cocktail-bar.webp` },
  'daouli-toumperleki': { src: `${SERVICE_IMG}/daouli-toumperleki.webp` },
  'party-platters': { src: `${SERVICE_IMG}/party-platters.webp` },
  'luxury-limousine': { src: `${SERVICE_IMG}/luxury-limousine.webp` },
  'church-choir': { src: `${SERVICE_IMG}/church-choir.webp` },
  'wedding-treats-cake': { src: `${SERVICE_IMG}/wedding-treats-cake.webp` },
  'photo-booth': { src: `${SERVICE_IMG}/photo-booth.webp` },
  'cold-spark-fireworks': { src: `${SERVICE_IMG}/cold-spark-fireworks.webp` },
  'groom-suits': { src: `${SERVICE_IMG}/groom-suits.webp` },
  'private-jet-honeymoon': { src: `${SERVICE_IMG}/private-jet-honeymoon.webp` },
  'luxury-shisha-lounge': { src: `${SERVICE_IMG}/luxury-shisha-lounge.webp` },
  'live-saxophone': { src: `${SERVICE_IMG}/live-saxophone.webp` },
  'wedding-planning-coordination': {
    src: `${SERVICE_IMG}/wedding-planning-coordination.webp`,
  },
  'vintage-wedding-bus': { src: `${SERVICE_IMG}/vintage-wedding-bus.webp` },
  'ring-for-a-drink': { src: `${SERVICE_IMG}/ring-for-a-drink.webp` },
  'wedding-photo-video': { src: `${SERVICE_IMG}/wedding-photo-video.webp` },
  'confetti-machine': { src: `${SERVICE_IMG}/confetti-machine.webp` },
  '3d-couple-figurines': { src: `${SERVICE_IMG}/3d-couple-figurines.webp` },
  'professional-wedding-dj': {
    src: `${SERVICE_IMG}/professional-wedding-dj.webp`,
  },
  'florals-decoration': { src: `${SERVICE_IMG}/florals-decoration.webp` },
  'first-dance-choreography': {
    src: `${SERVICE_IMG}/first-dance-choreography.webp`,
  },
}

/** Fallback imagery for tiles that do not yet have a dedicated cover. */
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

type TileSeed = Omit<WeddingHighlightTile, 'image' | 'imageFit'>

/** Full Wedding Sky services — EN / EL from catalogue; RU aligned. */
const TILE_SEEDS: TileSeed[] = [
  {
    id: 'luxury-bridal-gowns',
    title: {
      en: 'Luxury Bridal Gowns',
      el: 'Πολυτελή Νυφικά',
      ru: 'Роскошные свадебные платья',
    },
  },
  {
    id: 'bridal-makeup',
    title: {
      en: 'Bridal Make-up',
      el: 'Νυφικό Μακιγιάζ',
      ru: 'Свадебный макияж',
    },
  },
  {
    id: 'bridal-hairstyling',
    title: {
      en: 'Bridal Hairstyling',
      el: 'Νυφικό Χτένισμα',
      ru: 'Свадебная причёска',
    },
  },
  {
    id: 'luxury-dance-floor',
    title: {
      en: 'Luxury Dance Floor',
      el: 'Πολυτελής Πίστα Χορού',
      ru: 'Роскошный танцпол',
    },
  },
  {
    id: 'vintage-wedding-car',
    title: {
      en: 'Vintage Wedding Car',
      el: 'Αυτοκίνητο Αντίκα',
      ru: 'Винтажный свадебный автомобиль',
    },
  },
  {
    id: 'wedding-content-creator',
    title: {
      en: 'Wedding Content Creator',
      el: 'Δημιουργός Γαμήλιου Περιεχομένου',
      ru: 'Создание свадебного контента',
    },
  },
  {
    id: 'live-loukoumades',
    title: {
      en: 'Live Loukoumades Station',
      el: 'Ζωντανός Σταθμός Λουκουμάδων',
      ru: 'Живая станция лукумадес',
    },
  },
  {
    id: 'electric-violin',
    title: {
      en: 'Electric Violin',
      el: 'Ηλεκτρικό Βιολί',
      ru: 'Электроскрипка',
    },
  },
  {
    id: 'personalized-wedding-website',
    title: {
      en: 'Personalized Wedding Website',
      el: 'Προσωποποιημένη Ιστοσελίδα Γάμου',
      ru: 'Персональный свадебный сайт',
    },
  },
  {
    id: 'luxury-supercars',
    title: {
      en: 'Luxury & Supercars',
      el: 'Πολυτελή & Σπορ Αυτοκίνητα',
      ru: 'Люксовые и суперкары',
    },
  },
  {
    id: 'wedding-invitations',
    title: {
      en: 'Wedding Invitations',
      el: 'Προσκλητήρια Γάμου',
      ru: 'Свадебные приглашения',
    },
  },
  {
    id: '360-video-booth',
    title: {
      en: '360° Video Booth',
      el: 'Περιστρεφόμενος Βίντεο 360°',
      ru: 'Видеобудка 360°',
    },
  },
  {
    id: 'wedding-orchestra',
    title: {
      en: 'Wedding Orchestra',
      el: 'Γαμήλια Ορχήστρα',
      ru: 'Свадебный оркестр',
    },
  },
  {
    id: 'honeymoon-planning',
    title: {
      en: 'Honeymoon Planning',
      el: 'Οργάνωση Ταξιδιού του Μέλιτος',
      ru: 'Организация медового месяца',
    },
  },
  {
    id: 'wedding-christening-favours',
    title: {
      en: 'Wedding & Christening Favours',
      el: 'Μπομπονιέρες Γάμου & Βάπτισης',
      ru: 'Бонбоньерки для свадьбы и крестин',
    },
  },
  {
    id: 'mobile-cocktail-bar',
    title: {
      en: 'Mobile Cocktail Bar',
      el: 'Κινητό Μπαρ Κοκτέιλ',
      ru: 'Мобильный коктейль-бар',
    },
  },
  {
    id: 'drone-videography',
    title: {
      en: 'Drone Videography',
      el: 'Εναέρια Βιντεοσκόπηση με Drone',
      ru: 'Аэросъёмка дроном',
    },
  },
  {
    id: 'daouli-toumperleki',
    title: {
      en: 'Daouli & Toumperleki Show',
      el: 'Νταούλι & Τουμπερλέκι',
      ru: 'Шоу с даули и тумберлеки',
    },
  },
  {
    id: 'party-platters',
    title: {
      en: 'Party Platters',
      el: 'Πιατέλες για Πάρτι',
      ru: 'Праздничные плато',
    },
  },
  {
    id: 'luxury-limousine',
    title: {
      en: 'Luxury Limousine',
      el: 'Πολυτελής Λιμουζίνα',
      ru: 'Роскошный лимузин',
    },
  },
  {
    id: 'church-choir',
    title: {
      en: 'Church Choir',
      el: 'Εκκλησιαστική Χορωδία',
      ru: 'Церковный хор',
    },
  },
  {
    id: 'wedding-treats-cake',
    title: {
      en: 'Wedding Treats & Cake',
      el: 'Γαμήλια Κεράσματα & Τούρτα',
      ru: 'Свадебные угощения и торт',
    },
  },
  {
    id: 'photo-booth',
    title: {
      en: 'Photo Booth',
      el: 'Photo Booth',
      ru: 'Фотобудка',
    },
  },
  {
    id: 'cold-spark-fireworks',
    title: {
      en: 'Cold Spark Fireworks',
      el: 'Πυροτεχνήματα εδάφους',
      ru: 'Холодные искры',
    },
  },
  {
    id: 'mobile-platter-bar',
    title: {
      en: 'Mobile Platter Bar',
      el: 'Κινητό Μπαρ με Πιατέλες',
      ru: 'Мобильный бар с плато',
    },
  },
  {
    id: 'groom-suits',
    title: {
      en: 'Groom Suits',
      el: 'Κοστούμια Γαμπρού',
      ru: 'Костюмы для жениха',
    },
  },
  {
    id: 'private-jet-honeymoon',
    title: {
      en: 'Private Jet Honeymoon',
      el: 'Ταξίδι του Μέλιτος με Ιδιωτικό Αεροσκάφος',
      ru: 'Медовый месяц на частном самолёте',
    },
  },
  {
    id: 'luxury-shisha-lounge',
    title: {
      en: 'Luxury Shisha Lounge',
      el: 'Ναργιλές',
      ru: 'Лаунж с кальяном',
    },
  },
  {
    id: 'live-saxophone',
    title: {
      en: 'Live Saxophone',
      el: 'Ζωντανό Σαξόφωνο',
      ru: 'Живой саксофон',
    },
  },
  {
    id: 'wedding-planning-coordination',
    title: {
      en: 'Wedding Planning & Coordination',
      el: 'Οργάνωση & Συντονισμός Γάμου',
      ru: 'Организация и координация свадьбы',
    },
  },
  {
    id: 'vintage-wedding-bus',
    title: {
      en: 'Vintage Wedding Bus',
      el: 'Λεωφορειάκι Αντίκα',
      ru: 'Винтажный свадебный автобус',
    },
  },
  {
    id: 'ring-for-a-drink',
    title: {
      en: 'Ring for a Drink',
      el: 'Κουδούνι για Ποτό',
      ru: 'Колокольчик для напитка',
    },
  },
  {
    id: 'wedding-photo-video',
    title: {
      en: 'Wedding Photography & Videography',
      el: 'Φωτογράφιση & Βιντεοσκόπηση Γάμου',
      ru: 'Свадебная фото- и видеосъёмка',
    },
  },
  {
    id: 'confetti-machine',
    title: {
      en: 'Confetti Machine',
      el: 'Μηχανή Κομφετί',
      ru: 'Машина конфетти',
    },
  },
  {
    id: '3d-couple-figurines',
    title: {
      en: '3D Couple Figurines',
      el: 'Τρισδιάστατες Φιγούρες Ζευγαριού',
      ru: '3D-фигурки пары',
    },
  },
  {
    id: 'professional-wedding-dj',
    title: {
      en: 'Professional Wedding DJ',
      el: 'Επαγγελματίας DJ',
      ru: 'Профессиональный свадебный DJ',
    },
  },
  {
    id: 'live-setup-cake-100cm',
    title: {
      en: '100 cm Live-Setup Cake',
      el: 'Τούρτα 100 εκ. με Ζωντανό Στήσιμο',
      ru: 'Торт 100 см с живой сборкой',
    },
  },
  {
    id: 'home-security',
    title: {
      en: 'Home Security',
      el: 'Φρουρός Ασφάλειας Κατοικίας',
      ru: 'Охрана дома',
    },
  },
  {
    id: 'yacht-bachelor-hen',
    title: {
      en: 'Yacht Bachelor & Hen Party',
      el: 'Yacht Bachelor & Hen Party',
      ru: 'Мальчишник и девичник на яхте',
    },
  },
  {
    id: 'florals-decoration',
    title: {
      en: 'Florals & Decoration',
      el: 'Ανθοστολισμός & Διακόσμηση',
      ru: 'Цветы и декор',
    },
  },
  {
    id: 'audio-guest-book',
    title: {
      en: 'Audio Guest Book',
      el: 'Ηχητικό & βίντεο Βιβλίο Ευχών',
      ru: 'Аудиокнига пожеланий гостей',
    },
  },
  {
    id: 'draft-beer-station',
    title: {
      en: 'Draft Beer Station',
      el: 'Βαρελίσια Μπύρα',
      ru: 'Станция разливного пива',
    },
  },
  {
    id: 'first-dance-choreography',
    title: {
      en: 'First Dance Choreography',
      el: 'Χορογραφία Πρώτου Χορού',
      ru: 'Хореография первого танца',
    },
  },
  {
    id: 'dancing-on-the-clouds',
    title: {
      en: 'Dancing on the Clouds',
      el: 'Χορός στα Σύννεφα',
      ru: 'Танец на облаках',
    },
  },
  {
    id: 'traditional-wedding-preparations',
    title: {
      en: 'Traditional Wedding Preparations',
      el: 'Παραδοσιακά Αλλάματα με Βιολάρηδες',
      ru: 'Традиционные свадебные приготовления',
    },
  },
  {
    id: 'co2-led-guns',
    title: {
      en: 'CO₂ LED Guns',
      el: 'Φωτιζόμενα Πιστόλια CO₂',
      ru: 'Светодиодные пистолеты CO₂',
    },
  },
  {
    id: 'proposal-in-the-air',
    title: {
      en: 'Proposal in the Air',
      el: 'Πρόταση Γάμου στον Αέρα',
      ru: 'Предложение руки в воздухе',
    },
  },
  {
    id: 'wedding-equipment',
    title: {
      en: 'Wedding Equipment',
      el: 'Γαμήλιος Εξοπλισμός',
      ru: 'Свадебное оборудование',
    },
  },
  {
    id: 'luxury-yacht-wedding',
    title: {
      en: 'Luxury Yacht Wedding',
      el: 'Γάμος σε Πολυτελές Σκάφος',
      ru: 'Свадьба на роскошной яхте',
    },
  },
  {
    id: 'greek-island-weddings',
    title: {
      en: 'Greek Island Weddings',
      el: 'Γάμοι στα Ελληνικά Νησιά',
      ru: 'Свадьбы на греческих островах',
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
]

export const weddingHighlightTiles: WeddingHighlightTile[] = TILE_SEEDS.map(
  (seed, index) => {
    const cover = TILE_COVERS[seed.id]
    return {
      ...seed,
      image: cover?.src ?? TILE_IMAGES[index % TILE_IMAGES.length],
      imageFit: cover?.fit,
    }
  },
)
