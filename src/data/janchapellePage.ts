/** Janchapelle bridal boutique landing — lookbook copy & imagery. */

const COVER = '/images/services/companie-services-cover'
const JANCHAPELLE = '/images/services/janchapelle'

export const JANCHAPELLE_CONTACT_STATE = {
  serviceInterest: 'Janchapelle — All About Weddings',
} as const

export const JANCHAPELLE_HERO = {
  brand: 'Janchapelle',
  brandLine: 'Bridal Atelier',
  title: 'For the bride-to-be?',
  lead:
    'At Janchapelle we curate couture wedding gowns and atelier fittings for every bride — silhouette, fabric, and finish chosen to move beautifully in light.',
  primaryCta: 'Book an appointment',
  secondaryCta: 'Explore the atelier',
  image: `${COVER}/Bridal.webp`,
  video: `${JANCHAPELLE}/5898262_Person_Human_1280x720.mp4`,
  imageAlt: 'Bridal couture atmosphere at Janchapelle',
} as const

export const JANCHAPELLE_EVENTS = {
  eyebrow: 'Atelier moments',
  title: 'Private fittings & trunk shows',
  lead:
    'Seasonal presentations, designer previews, and quiet appointment evenings — reserved for brides who prefer time, space, and undivided attention.',
  cta: 'View upcoming dates',
  image: `${COVER}/Bridal.webp`,
  imageAlt: 'Bridal couture atmosphere at Janchapelle',
} as const

export type JanchapelleDressCard = {
  id: string
  name: string
  house: string
  image: string
  alt: string
  /** Split as “Wedding” + remainder for premium wordmark labels. */
  categoryWordmark?: boolean
}

export type JanchapelleCollectionGalleryImage = {
  src: string
  alt: string
}

export type JanchapelleCollection = {
  id: string
  name: string
  image: string
  alt: string
  tagline: string
  paragraphs: readonly string[]
  galleryEyebrow?: string
  galleryTitle?: string
  galleryLead?: string
  gallery?: readonly JanchapelleCollectionGalleryImage[]
}

const MINI_DRESS_GALLERY: readonly JanchapelleCollectionGalleryImage[] = Array.from(
  { length: 37 },
  (_, index) => {
    const number = String(index + 1).padStart(2, '0')
    return {
      src: `${JANCHAPELLE}/mini-dress/mini-dress-${number}.webp`,
      alt: `Mini party dress look ${index + 1} — Janchapelle Bridal Atelier`,
    }
  },
)

export const JANCHAPELLE_COLLECTIONS_EYEBROW = 'Discover our collections'

export const JANCHAPELLE_COLLECTIONS: readonly JanchapelleCollection[] = [
  {
    id: 'premium-collection',
    name: 'Premium Collection',
    image: `${JANCHAPELLE}/premium-collection.webp`,
    alt: 'Premium Collection — couture bridal gowns with refined finishing',
    tagline:
      'Exceptional bridal creations for brides who appreciate modern luxury, sophisticated design and extraordinary craftsmanship.',
    paragraphs: [
      'A collection where beautiful silhouettes, exquisite fabrics and couture detailing come together to create unforgettable bridal looks.',
    ],
  },
  {
    id: 'elegant-collection',
    name: 'Elegant Collection',
    image: `${JANCHAPELLE}/elegant-collection.webp`,
    alt: 'Elegant Collection — timeless silhouettes with elevated detail',
    tagline: 'Timeless Beauty. Effortless Sophistication.',
    paragraphs: [
      'True elegance never needs to be excessive.',
      'Our Elegant Collection celebrates refined silhouettes, delicate details and timeless femininity, creating bridal looks that feel effortlessly luxurious.',
      'Sophisticated, graceful and beautifully balanced, each gown is designed for the bride who believes that the most powerful statement can sometimes be the simplest one.',
      'Because elegance is timeless.',
    ],
  },
  {
    id: 'mini-party-dress',
    name: 'Mini Party Dress Collection',
    image: `${JANCHAPELLE}/party-dress.webp`,
    alt: 'Mini Party Dress Collection — shorter bridal styles for celebrations',
    tagline: 'One Bride. Two Unforgettable Looks.',
    paragraphs: [
      'When the ceremony ends, the celebration begins.',
      'Our Mini Party Dress Collection is created for brides ready to transform their look and enjoy every moment of the night in style.',
      'Playful silhouettes, couture detailing, sparkling finishes and irresistible bridal glamour come together in statement mini dresses designed for dancing, celebrating and turning heads until the very last champagne toast.',
      'Your wedding dress creates the entrance. Your party dress owns the night.',
    ],
    galleryEyebrow: 'The collection',
    galleryTitle: 'Mini party dress looks',
    galleryLead:
      'Explore the full range of mini party dresses — each look designed for celebration, movement, and unforgettable bridal glamour.',
    gallery: MINI_DRESS_GALLERY,
  },
  {
    id: 'cocktail-dress',
    name: 'Cocktail Dress Collection',
    image: `${JANCHAPELLE}/cocktail-dress.webp`,
    alt: 'Cocktail Dress Collection — polished evening looks for bridal events',
    tagline: 'Couture Beyond the Wedding Day',
    paragraphs: [
      'Every extraordinary celebration deserves an extraordinary look.',
      'Our Cocktail Dress Collection brings together sophisticated silhouettes, luxurious fabrics and contemporary glamour for engagement parties, bridal celebrations, receptions and life\'s most elegant occasions.',
      'From understated sophistication to unforgettable statement pieces, discover creations designed to make every appearance feel exceptional.',
      'Because some moments deserve more than simply dressing up.',
    ],
  },
] as const

export function getJanchapelleCollectionById(id: string | undefined) {
  return JANCHAPELLE_COLLECTIONS.find((collection) => collection.id === id)
}

/** Featured lookbook — collection cards. */
export const JANCHAPELLE_FEATURED: readonly JanchapelleDressCard[] = JANCHAPELLE_COLLECTIONS.map(
  (collection) => ({
    id: collection.id,
    name: collection.name,
    house: '',
    image: collection.image,
    alt: collection.alt,
  }),
)

const LUXURY_SHOES_GALLERY: readonly JanchapelleCollectionGalleryImage[] = Array.from(
  { length: 40 },
  (_, index) => {
    const number = String(index).padStart(2, '0')
    return {
      src: `${JANCHAPELLE}/bride-luxury-shoes/luxury-shoes-${number}.webp`,
      alt: `Bride luxury shoe look ${index + 1} — Janchapelle Bridal Atelier`,
    }
  },
)

export type JanchapelleHouse = {
  id: string
  index: string
  eyebrow: string
  name: string
  tagline: string
  lead: string
  features: readonly string[]
  cta: string
  image: string
  alt: string
  paragraphs: readonly string[]
  galleryEyebrow?: string
  galleryTitle?: string
  galleryLead?: string
  galleryVariant?: 'default' | 'product'
  gallery?: readonly JanchapelleCollectionGalleryImage[]
}

export const JANCHAPELLE_HOUSES_EYEBROW = 'Signature collections'

export const JANCHAPELLE_HOUSES: readonly JanchapelleHouse[] = [
  {
    id: 'luxury-shoes',
    index: '01',
    eyebrow: 'Footwear',
    name: 'Bride Luxury Shoes Collection',
    tagline: 'Every Step Deserves Luxury',
    lead:
      'Hand-finished bridal shoes in silk, satin, and crystal — designed for ceremony, reception, and every step in between.',
    features: ['Heels & flats', 'Custom sizing', 'Comfort-first fit'],
    cta: 'View the collection',
    image: `${JANCHAPELLE}/bridal-wedding-shoes.webp`,
    alt: 'Bride Luxury Shoes Collection at Janchapelle',
    paragraphs: [
      'The perfect bridal look continues all the way to your shoes.',
      'Our Bride Luxury Shoes Collection has been selected to complement the elegance and individuality of your wedding gown, combining sophisticated design, beautiful detailing and bridal glamour.',
      'From timeless elegance to sparkling statement designs, discover the finishing touch created to accompany you through one of the most unforgettable walks of your life.',
      'Walk towards forever in exceptional style.',
    ],
    galleryEyebrow: 'The collection',
    galleryTitle: 'Bride luxury shoe looks',
    galleryLead:
      'Discover hand-finished bridal shoes in silk, satin, and crystal — each pair selected to complement your gown and complete your walk down the aisle.',
    galleryVariant: 'product',
    gallery: LUXURY_SHOES_GALLERY,
  },
  {
    id: 'sparkling-accessories',
    index: '02',
    eyebrow: 'Accessories',
    name: 'Sparkling Accessories Collection',
    tagline: 'The Final Touch of Bridal Magic',
    lead:
      'Veils, tiaras, belts, and finishing pieces with refined sparkle — curated to complete your look without overpowering it.',
    features: ['Crystal & pearl detail', 'Veils & headpieces', 'Matching sets'],
    cta: 'View the collection',
    image: `${JANCHAPELLE}/sparkling-accessories-collection.webp`,
    alt: 'Sparkling Accessories Collection at Janchapelle',
    paragraphs: [
      'Sometimes, the smallest detail creates the greatest impression.',
      'Our Sparkling Accessories Collection adds the perfect finishing touch to your bridal look with carefully selected pieces designed to illuminate, enhance and complete your style.',
      'From delicate sparkle to captivating statement details, every accessory is chosen to complement your gown without taking away from the woman wearing it.',
      "Because your bridal look isn't complete until every detail feels extraordinary.",
    ],
  },
] as const

export function getJanchapelleHouseById(id: string | undefined) {
  return JANCHAPELLE_HOUSES.find((house) => house.id === id)
}

export const JANCHAPELLE_DONT_MISS: readonly JanchapelleDressCard[] = [
  {
    id: 'wedding-packages',
    name: 'Wedding Packages',
    house: '',
    categoryWordmark: true,
    image: `${JANCHAPELLE}/wedding-packages.webp`,
    alt: 'Wedding Packages — curated celebration tiers',
  },
  {
    id: 'wedding-photographer',
    name: 'Wedding Photographer',
    house: '',
    categoryWordmark: true,
    image: `${JANCHAPELLE}/wedding-photographer.webp`,
    alt: 'Wedding Photographer — editorial coverage and portraits',
  },
  {
    id: 'wedding-decorations',
    name: 'Wedding Decorations',
    house: '',
    categoryWordmark: true,
    image: `${JANCHAPELLE}/wedding-decorations.webp`,
    alt: 'Wedding Decorations — florals, styling, and venue design',
  },
  {
    id: 'wedding-cakes-treats',
    name: 'Wedding Cakes & Treats',
    house: '',
    categoryWordmark: true,
    image: `${JANCHAPELLE}/wedding-cakes-treats.webp`,
    alt: 'Wedding Cakes & Treats — patisserie and dessert styling',
  },
  {
    id: 'wedding-invitations',
    name: 'Wedding Invitations',
    house: '',
    categoryWordmark: true,
    image: `${JANCHAPELLE}/wedding-invitations.webp`,
    alt: 'Wedding Invitations — stationery and calligraphy',
  },
] as const

export const JANCHAPELLE_MID_CTA = {
  title: 'Ready to find your gown?',
  lead:
    'From first sketch to final fitting, Janchapelle guides you with atelier discipline — fabrics, silhouette, and finishing chosen for how they read in motion.',
  cta: 'Book a private fitting',
  image: `${COVER}/Bridal.webp`,
  imageAlt: 'Bridal couture atmosphere at Janchapelle',
} as const

export const JANCHAPELLE_PHILOSOPHY = {
  eyebrow: 'Our philosophy',
  titlePrimary: '1,400+ Creations.',
  titleAccent: 'And still, yours can be completely different.',
  lead: 'This is what defines our philosophy.',
  limitations: [
    'You are not limited to what you see.',
    'You are not limited to one collection.',
    'You are not limited to one silhouette.',
    'You are not limited to one combination.',
    'And you are certainly not limited to a wedding dress that already exists.',
  ],
  actions: [
    'You can change it.',
    'You can combine it.',
    'You can transform it.',
    'Or you can create it entirely from zero.',
  ],
  closing:
    'Because the most extraordinary wedding dress may be the one that has never been created before.',
} as const

export type JanchapelleAtelierStat =
  | {
      count: number
      suffix?: string
      label: string
    }
  | {
      label: string
    }

export const JANCHAPELLE_ATELIER_STATS = {
  eyebrow: 'The atelier',
  titlePrimary: 'The Bridal House',
  titleAccent: 'Without Limits',
  items: [
    { count: 1400, suffix: '+', label: 'Luxury Bridal Creations' },
    { count: 200, suffix: '+', label: 'Brides Every Year' },
    { count: 35, suffix: '+', label: 'International Partners' },
    { label: 'Limassol • Athens • Greece • Worldwide' },
    { label: 'Exclusive Parisian Haute Couture' },
    { label: 'Worldwide Orders' },
  ] as const satisfies readonly JanchapelleAtelierStat[],
} as const

export const JANCHAPELLE_NEWSLETTER = {
  eyebrow: 'Stay close to the atelier',
  title: 'Subscribe to our newsletter',
  lead:
    'New arrivals, private fittings, and seasonal lookbook moments — delivered with discretion to your inbox.',
} as const

export const JANCHAPELLE_SOCIAL_PROOF = {
  eyebrow: 'Bride stories',
  featured: {
    quote:
      'The fitting felt unhurried and precise — I left knowing the gown would move with me, not against me.',
    name: 'Elena Constantinou',
    role: 'Bride, Limassol ceremony',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
  wordmarksLabel: 'Houses we dress',
  wordmarks: ['Maison Édition', 'Atelier Moderne', 'Gold Atelier', 'Haute Couture'],
  posts: [
    {
      name: 'Sofia Marchetti',
      handle: '@sofiamarchetti',
      date: 'Mar 3',
      text: 'Quiet rooms, honest advice, and a gown that photographs like silk in candlelight. Exactly what I hoped an atelier would feel like.',
      replies: '48',
      reposts: '212',
      likes: '2.4k',
      avatar:
        'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Amelia Rhodes',
      handle: '@ameliarhodes',
      date: 'Feb 24',
      text: 'I came for one silhouette and left with the one I did not know I needed. The team never rushed the decision.',
      replies: '31',
      reposts: '96',
      likes: '918',
      avatar:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Nour Haddad',
      handle: '@nourhaddad',
      date: 'Feb 18',
      text: 'Clear enough for family, flexible enough for me. That balance is where most bridal shops fail — Janchapelle held it.',
      replies: '57',
      reposts: '144',
      likes: '1.7k',
      avatar:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Chloe Andreas',
      handle: '@chloeandreas',
      date: 'Feb 11',
      text: 'The first bridal appointment my sister and I did not want to rebuild in a Pinterest board afterwards.',
      replies: '19',
      reposts: '63',
      likes: '604',
      avatar:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
    },
  ],
} as const

export const JANCHAPELLE_EXPERIENCE = {
  eyebrow: 'The Janchapelle experience',
  title: 'What awaits in the atelier',
  lead:
    'Every appointment is paced with intention — from first conversation to final stitch — so the gown feels unmistakably yours.',
  items: [
    {
      title: 'Bespoke design',
      description: 'Sketches and muslins that turn personality into form — never a rushed catalogue pick.',
    },
    {
      title: 'Alterations & finishing',
      description: 'Precision work so the gown feels settled on you, not borrowed for a day.',
    },
    {
      title: 'Private appointments',
      description: 'Unhurried sessions with space for honest feedback and calm decisions.',
    },
  ],
  notesEyebrow: 'Atelier assurances',
  notes: [
    'Access to premium textiles and artisan suppliers',
    'Collaboration with stylists and photographers when requested',
    'Care instructions and storage guidance for heirlooms',
  ],
} as const
