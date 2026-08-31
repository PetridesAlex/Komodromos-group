/** Janchapelle bridal boutique landing — lookbook copy & imagery. */

const COVER = '/images/services/companie-services-cover'
const JANCHAPELLE = '/images/services/janchapelle'

export const JANCHAPELLE_CONTACT_STATE = {
  serviceInterest: 'Janchapelle — All About Weddings',
} as const

/** Bridal atelier chat — WhatsApp & Viber */
const JANCHAPELLE_CHAT_PHONE = '35799062236'
const JANCHAPELLE_CHAT_MESSAGE =
  'Hello Janchapelle, I would like to enquire about a bridal appointment.'

export const JANCHAPELLE_CHAT = {
  phoneDisplay: '+357 99 062 236',
  phoneE164: `+${JANCHAPELLE_CHAT_PHONE}`,
  whatsappHref: `https://wa.me/${JANCHAPELLE_CHAT_PHONE}?text=${encodeURIComponent(JANCHAPELLE_CHAT_MESSAGE)}`,
  viberHref: `viber://chat?number=%2B${JANCHAPELLE_CHAT_PHONE}&draft=${encodeURIComponent(JANCHAPELLE_CHAT_MESSAGE)}`,
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
  /** Optional destination (Wedding Sky deep links for Don’t Miss cards). */
  href?: string
}

export type JanchapelleCollectionGalleryImage = {
  src: string
  alt: string
}

export type JanchapelleCollection = {
  id: string
  name: string
  /** Card / listing cover (featured grid). */
  image: string
  /** Full-bleed collection hero; falls back to `image` when omitted. */
  heroImage?: string
  alt: string
  tagline: string
  paragraphs: readonly string[]
  galleryEyebrow?: string
  galleryTitle?: string
  galleryLead?: string
  gallery?: readonly JanchapelleCollectionGalleryImage[]
}

const MINI_DRESS_FEATURED: readonly JanchapelleCollectionGalleryImage[] = [
  {
    src: `${JANCHAPELLE}/mini-dress/mini-party-dress-01.webp`,
    alt: 'Mini party dress with beaded V-neck and flared skirt — Janchapelle Bridal Atelier',
  },
  {
    src: `${JANCHAPELLE}/mini-dress/mini-party-dress-02.webp`,
    alt: 'Mini party dress with floral lace and sequin overlay — Janchapelle Bridal Atelier',
  },
]

const MINI_DRESS_GALLERY: readonly JanchapelleCollectionGalleryImage[] = [
  ...MINI_DRESS_FEATURED,
  ...Array.from({ length: 37 }, (_, index) => {
    const number = String(index + 1).padStart(2, '0')
    return {
      src: `${JANCHAPELLE}/mini-dress/mini-dress-${number}.webp`,
      alt: `Mini party dress look ${index + 1} — Janchapelle Bridal Atelier`,
    }
  }),
]

const ELEGANT_COLLECTION_GALLERY: readonly JanchapelleCollectionGalleryImage[] = Array.from(
  { length: 87 },
  (_, index) => {
    const number = String(index).padStart(2, '0')
    return {
      src: `${JANCHAPELLE}/elegant-collection/elegant-${number}.webp`,
      alt: `Elegant Collection bridal look ${index + 1} — Janchapelle Bridal Atelier`,
    }
  },
)

const PREMIUM_COLLECTION_FEATURED: readonly JanchapelleCollectionGalleryImage[] = [
  {
    src: `${JANCHAPELLE}/premium-collection/premium-collection-01.webp`,
    alt: 'Premium Collection lace bridal gown with hooded veil — Janchapelle Bridal Atelier',
  },
  {
    src: `${JANCHAPELLE}/premium-collection/premium-collection-02.webp`,
    alt: 'Premium Collection lace bodice and veil detail — Janchapelle Bridal Atelier',
  },
  {
    src: `${JANCHAPELLE}/premium-collection/premium-collection-03.webp`,
    alt: 'Premium Collection lace gown back with button detail — Janchapelle Bridal Atelier',
  },
  {
    src: `${JANCHAPELLE}/premium-collection/premium-collection-04.webp`,
    alt: 'Premium Collection lace gown and veil in profile — Janchapelle Bridal Atelier',
  },
]

const PREMIUM_COLLECTION_GALLERY: readonly JanchapelleCollectionGalleryImage[] = [
  ...PREMIUM_COLLECTION_FEATURED,
  ...Array.from({ length: 152 }, (_, index) => {
    const number = String(index).padStart(2, '0')
    return {
      src: `${JANCHAPELLE}/premium-collection/premium-${number}.webp`,
      alt: `Premium Collection bridal look ${index + 1} — Janchapelle Bridal Atelier`,
    }
  }),
]

const COCKTAIL_DRESS_FEATURED: readonly JanchapelleCollectionGalleryImage[] = [
  {
    src: `${JANCHAPELLE}/cocktail-dress/cocktail-dress-01.webp`,
    alt: 'Champagne strapless cocktail dress with pleated skirt — Janchapelle Bridal Atelier',
  },
  {
    src: `${JANCHAPELLE}/cocktail-dress/cocktail-dress-02.webp`,
    alt: 'Ruby red strapless satin cocktail dress — Janchapelle Bridal Atelier',
  },
]

const COCKTAIL_DRESS_GALLERY: readonly JanchapelleCollectionGalleryImage[] = [
  ...COCKTAIL_DRESS_FEATURED,
  ...Array.from({ length: 79 }, (_, index) => {
    const number = String(index).padStart(2, '0')
    return {
      src: `${JANCHAPELLE}/cocktail-dress/cocktail-${number}.webp`,
      alt: `Cocktail dress look ${index + 1} — Janchapelle Bridal Atelier`,
    }
  }),
]

export const JANCHAPELLE_COLLECTIONS_EYEBROW = 'Discover our collections'

export const JANCHAPELLE_COLLECTIONS: readonly JanchapelleCollection[] = [
  {
    id: 'premium-collection',
    name: 'Premium Collection',
    image: `${JANCHAPELLE}/premium-collection.webp`,
    heroImage: `${JANCHAPELLE}/premium-collection/premium-98.webp`,
    alt: 'Premium Collection — couture bridal gowns with refined finishing',
    tagline:
      'Exceptional bridal creations for brides who appreciate modern luxury, sophisticated design and extraordinary craftsmanship.',
    paragraphs: [
      'A collection where beautiful silhouettes, exquisite fabrics and couture detailing come together to create unforgettable bridal looks.',
    ],
    galleryEyebrow: 'The collection',
    galleryTitle: 'Premium Collection gallery',
    galleryLead:
      'Explore the full Premium Collection — couture silhouettes, exquisite fabrics, and refined bridal craftsmanship.',
    gallery: PREMIUM_COLLECTION_GALLERY,
  },
  {
    id: 'elegant-collection',
    name: 'Elegant Collection',
    image: `${JANCHAPELLE}/elegant-collection.webp`,
    heroImage: `${JANCHAPELLE}/elegant-collection/elegant-82.webp`,
    alt: 'Elegant Collection — timeless silhouettes with elevated detail',
    tagline: 'Timeless Beauty. Effortless Sophistication.',
    paragraphs: [
      'True elegance never needs to be excessive.',
      'Our Elegant Collection celebrates refined silhouettes, delicate details and timeless femininity, creating bridal looks that feel effortlessly luxurious.',
      'Sophisticated, graceful and beautifully balanced, each gown is designed for the bride who believes that the most powerful statement can sometimes be the simplest one.',
      'Because elegance is timeless.',
    ],
    galleryEyebrow: 'The collection',
    galleryTitle: 'Elegant Collection gallery',
    galleryLead:
      'Explore the full Elegant Collection — refined silhouettes and timeless bridal looks, curated for effortless sophistication.',
    gallery: ELEGANT_COLLECTION_GALLERY,
  },
  {
    id: 'mini-party-dress',
    name: 'Mini Party Dress Collection',
    image: `${JANCHAPELLE}/party-dress.webp`,
    heroImage: `${JANCHAPELLE}/mini-dress/mini-dress-07.webp`,
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
    heroImage: `${JANCHAPELLE}/cocktail-dress/cocktail-40.webp`,
    alt: 'Cocktail Dress Collection — polished evening looks for bridal events',
    tagline: 'Couture Beyond the Wedding Day',
    paragraphs: [
      'Every extraordinary celebration deserves an extraordinary look.',
      'Our Cocktail Dress Collection brings together sophisticated silhouettes, luxurious fabrics and contemporary glamour for engagement parties, bridal celebrations, receptions and life\'s most elegant occasions.',
      'From understated sophistication to unforgettable statement pieces, discover creations designed to make every appearance feel exceptional.',
      'Because some moments deserve more than simply dressing up.',
    ],
    galleryEyebrow: 'The collection',
    galleryTitle: 'Cocktail Dress Collection gallery',
    galleryLead:
      'Explore sophisticated cocktail looks for engagement parties, bridal celebrations, receptions, and life\'s most elegant occasions.',
    gallery: COCKTAIL_DRESS_GALLERY,
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

const LUXURY_SHOES_FEATURED: readonly JanchapelleCollectionGalleryImage[] = [
  {
    src: `${JANCHAPELLE}/bride-luxury-shoes/luxury-shoes-featured-01.webp`,
    alt: 'Pearl bridal sandal with tulle bow in a church aisle — Janchapelle Bridal Atelier',
  },
  {
    src: `${JANCHAPELLE}/bride-luxury-shoes/luxury-shoes-featured-02.webp`,
    alt: 'Lace floral bridal stilettos with wrap ankle ties — Janchapelle Bridal Atelier',
  },
]

const LUXURY_SHOES_GALLERY: readonly JanchapelleCollectionGalleryImage[] = [
  ...LUXURY_SHOES_FEATURED,
  ...Array.from({ length: 40 }, (_, index) => {
    const number = String(index).padStart(2, '0')
    return {
      src: `${JANCHAPELLE}/bride-luxury-shoes/luxury-shoes-${number}.webp`,
      alt: `Bride luxury shoe look ${index + 1} — Janchapelle Bridal Atelier`,
    }
  }),
]

const SPARKLING_ACCESSORIES_FEATURED: readonly JanchapelleCollectionGalleryImage[] = [
  {
    src: `${JANCHAPELLE}/sparkling-accesories-collection/sparkling-featured-01.webp`,
    alt: 'Silver pearl and crystal floral bridal hair comb — Janchapelle Bridal Atelier',
  },
  {
    src: `${JANCHAPELLE}/sparkling-accesories-collection/sparkling-featured-02.webp`,
    alt: 'Crystal and pearl bridal hair vine in a soft low bun — Janchapelle Bridal Atelier',
  },
]

const SPARKLING_ACCESSORIES_GALLERY: readonly JanchapelleCollectionGalleryImage[] = [
  ...SPARKLING_ACCESSORIES_FEATURED,
  ...Array.from({ length: 28 }, (_, index) => {
    const number = String(index).padStart(2, '0')
    return {
      src: `${JANCHAPELLE}/sparkling-accesories-collection/sparkling-${number}.webp`,
      alt: `Sparkling accessories look ${index + 1} — Janchapelle Bridal Atelier`,
    }
  }),
]

export type JanchapelleHouse = {
  id: string
  index: string
  eyebrow: string
  name: string
  tagline: string
  lead: string
  features: readonly string[]
  cta: string
  /** Card / listing cover on the bridal landing page. */
  image: string
  /** Full-bleed house hero; falls back to `image` when omitted. */
  heroImage?: string
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
    heroImage: `${JANCHAPELLE}/bride-luxury-shoes/luxury-shoes-06.webp`,
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
    heroImage: `${JANCHAPELLE}/sparkling-accesories-collection/sparkling-27.webp`,
    alt: 'Sparkling Accessories Collection at Janchapelle',
    paragraphs: [
      'Sometimes, the smallest detail creates the greatest impression.',
      'Our Sparkling Accessories Collection adds the perfect finishing touch to your bridal look with carefully selected pieces designed to illuminate, enhance and complete your style.',
      'From delicate sparkle to captivating statement details, every accessory is chosen to complement your gown without taking away from the woman wearing it.',
      "Because your bridal look isn't complete until every detail feels extraordinary.",
    ],
    galleryEyebrow: 'The collection',
    galleryTitle: 'Sparkling accessories looks',
    galleryLead:
      'Explore veils, tiaras, belts, and finishing pieces with refined sparkle — each selected to complete your bridal look.',
    galleryVariant: 'product',
    gallery: SPARKLING_ACCESSORIES_GALLERY,
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
    href: '/services/wedding/wedding-packages',
  },
  {
    id: 'wedding-photographer',
    name: 'Wedding Photographer',
    house: '',
    categoryWordmark: true,
    image: `${JANCHAPELLE}/wedding-photographer.webp`,
    alt: 'Wedding Photographer — editorial coverage and portraits',
    href: '/services/wedding/wedding-packages/photography',
  },
  {
    id: 'wedding-decorations',
    name: 'Wedding Decorations',
    house: '',
    categoryWordmark: true,
    image: `${JANCHAPELLE}/wedding-decorations.webp`,
    alt: 'Wedding Decorations — florals, styling, and venue design',
    href: '/services/wedding/wedding-packages/decor',
  },
  {
    id: 'wedding-cakes-treats',
    name: 'Wedding Cakes & Treats',
    house: '',
    categoryWordmark: true,
    image: `${JANCHAPELLE}/wedding-cakes-treats.webp`,
    alt: 'Wedding Cakes & Treats — patisserie and dessert styling',
    href: '/services/wedding#wedding-treats-cake',
  },
  {
    id: 'wedding-invitations',
    name: 'Wedding Invitations',
    house: '',
    categoryWordmark: true,
    image: `${JANCHAPELLE}/wedding-invitations.webp`,
    alt: 'Wedding Invitations — stationery and calligraphy',
    href: '/services/wedding#wedding-invitations',
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
  title: 'Words from the dressing room',
  ratingsLead: 'Rated 5/5 by brides on Google & Facebook',
  ratings: [
    {
      platform: 'google' as const,
      score: '5.0',
      label: '5/5 on Google',
    },
    {
      platform: 'facebook' as const,
      score: '5.0',
      label: '5/5 on Facebook',
    },
  ],
  featured: {
    quote:
      'Exceptional service!!! She fully understood what I wanted from the first time!!! She was very helpful with her advice throughout my journey. She was always there for me and always wanted to help me out.',
    name: 'Iwanna',
    role: 'Google review · 5 stars',
    initials: 'IW',
  },
  wordmarksLabel: 'Houses we dress',
  wordmarks: ['Maison Édition', 'Atelier Moderne', 'Gold Atelier', 'Haute Couture'],
  posts: [
    {
      name: 'Valentina Fotiou',
      handle: '@Google · Valentina',
      date: 'Google review',
      text: 'I had a wonderful experience at Jan Chapelle! The lady who served me was extremely kind, professional and very helpful throughout the entire process. She made me feel comfortable from the very beginning and guided me to find the perfect wedding dress much easier than I expected. I really appreciated her attention to detail and interest in understanding exactly what I wanted. I 100% recommend her to any bride-to-be!',
      replies: '12',
      reposts: '34',
      likes: '186',
      initials: 'VF',
    },
    {
      name: 'Sofia Lamari',
      handle: '@Google · Sofia',
      date: 'Google review',
      text: 'Thank you to Jan Chapelle for the wonderful service and for making my dream come true. I found the wedding dress I had always dreamed of. They have beautiful wedding dresses for every taste! Thank you so, so much!',
      replies: '8',
      reposts: '21',
      likes: '142',
      initials: 'SL',
    },
    {
      name: 'Elena Theodorou',
      handle: '@Google · Elena',
      date: 'Google review',
      text: 'Excellent service and beautiful wedding dresses.',
      replies: '5',
      reposts: '14',
      likes: '97',
      initials: 'ET',
    },
    {
      name: 'Ioanna Hadjimarkou',
      handle: '@Google · Ioanna',
      date: 'Google review',
      text: 'Thank you so much for the impeccable service and the wonderful wedding dress ❤️❤️❤️❤️🥰🥰🥰 100%',
      replies: '7',
      reposts: '16',
      likes: '128',
      initials: 'IH',
    },
    {
      name: 'George Eglezos',
      handle: '@Google · George',
      date: 'Google review',
      text: 'Thank you very much to Jan Chapelle Bridal for the excellent work on my fairytale wedding dress.',
      replies: '6',
      reposts: '18',
      likes: '113',
      initials: 'GE',
    },
    {
      name: 'Dafni Galatsanou',
      handle: '@Google · Dafni',
      date: '5★ rating',
      initials: 'DG',
    },
    {
      name: 'Andrea Georgiadi',
      handle: '@Google · Andrea',
      date: '5★ rating',
      initials: 'AG',
    },
    {
      name: 'Kyriakos Michael',
      handle: '@Google · Kyriakos',
      date: '5★ rating',
      initials: 'KM',
    },
    {
      name: 'Andreas Komodromos',
      handle: '@Google · Andreas',
      date: '5★ rating',
      initials: 'AK',
    },
    {
      name: 'Zacharias Christofidis',
      handle: '@Google · Zacharias',
      date: '5★ rating',
      initials: 'ZC',
    },
    {
      name: 'Ourania Antoniou',
      handle: '@Google · Ourania',
      date: '5★ rating',
      initials: 'OA',
    },
    {
      name: 'Evdokia Louka',
      handle: '@Google · Evdokia',
      date: '5★ rating',
      initials: 'EL',
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
