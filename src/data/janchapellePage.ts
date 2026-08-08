/** Janchapelle bridal boutique landing — lookbook copy & imagery. */

const COVER = '/images/services/companie-services-cover'
const HIGHLIGHTS = '/images/services/wedding-highlights'
const PACKAGES = '/images/services/wedding-packages'

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
  imageAlt: 'Bridal couture atmosphere at Janchapelle',
} as const

export const JANCHAPELLE_EVENTS = {
  eyebrow: 'Atelier moments',
  title: 'Private fittings & trunk shows',
  lead:
    'Seasonal presentations, designer previews, and quiet appointment evenings — reserved for brides who prefer time, space, and undivided attention.',
  cta: 'View upcoming dates',
  image: `${COVER}/Jan-chapelle%20.webp`,
  imageAlt: 'Janchapelle bridal atelier presentation',
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

/** Featured lookbook — collection cards. */
export const JANCHAPELLE_FEATURED: readonly JanchapelleDressCard[] = [
  {
    id: 'premium-collection',
    name: 'Premium Collection',
    house: '',
    image: `${PACKAGES}/tier-premium.webp`,
    alt: 'Premium Collection — couture bridal gowns with refined finishing',
  },
  {
    id: 'elegant-collection',
    name: 'Elegant Collection',
    house: '',
    image: `${PACKAGES}/tier-classic-plus.webp`,
    alt: 'Elegant Collection — timeless silhouettes with elevated detail',
  },
  {
    id: 'mini-party-dress',
    name: 'Mini party dress',
    house: '',
    image: `${HIGHLIGHTS}/bridal.webp`,
    alt: 'Mini party dress — shorter bridal styles for celebrations',
  },
  {
    id: 'cocktail-dress',
    name: 'Cocktail Dress',
    house: '',
    image: `${PACKAGES}/tier-classic.webp`,
    alt: 'Cocktail Dress — polished evening looks for bridal events',
  },
] as const

export type JanchapelleHouse = {
  id: string
  index: string
  eyebrow: string
  name: string
  lead: string
  features: readonly string[]
  cta: string
  image: string
  alt: string
}

export const JANCHAPELLE_HOUSES: readonly JanchapelleHouse[] = [
  {
    id: 'luxury-shoes',
    index: '01',
    eyebrow: 'Footwear',
    name: 'Bride Luxury Shoes Collection',
    lead:
      'Hand-finished bridal shoes in silk, satin, and crystal — designed for ceremony, reception, and every step in between.',
    features: ['Heels & flats', 'Custom sizing', 'Comfort-first fit'],
    cta: 'View the collection',
    image: `${COVER}/wedding-sky.webp`,
    alt: 'Bride Luxury Shoes Collection at Janchapelle',
  },
  {
    id: 'sparkling-accessories',
    index: '02',
    eyebrow: 'Accessories',
    name: 'Sparkling Accessories Collection',
    lead:
      'Veils, tiaras, belts, and finishing pieces with refined sparkle — curated to complete your look without overpowering it.',
    features: ['Crystal & pearl detail', 'Veils & headpieces', 'Matching sets'],
    cta: 'View the collection',
    image: `${HIGHLIGHTS}/stories.webp`,
    alt: 'Sparkling Accessories Collection at Janchapelle',
  },
] as const

export const JANCHAPELLE_DONT_MISS: readonly JanchapelleDressCard[] = [
  {
    id: 'wedding-packages',
    name: 'Wedding Packages',
    house: '',
    categoryWordmark: true,
    image: `${HIGHLIGHTS}/packages.webp`,
    alt: 'Wedding Packages — curated celebration tiers',
  },
  {
    id: 'wedding-photographer',
    name: 'Wedding Photographer',
    house: '',
    categoryWordmark: true,
    image: `${HIGHLIGHTS}/stories.webp`,
    alt: 'Wedding Photographer — editorial coverage and portraits',
  },
  {
    id: 'wedding-decorations',
    name: 'Wedding Decorations',
    house: '',
    categoryWordmark: true,
    image: `${HIGHLIGHTS}/production.webp`,
    alt: 'Wedding Decorations — florals, styling, and venue design',
  },
  {
    id: 'wedding-cakes-treats',
    name: 'Wedding Cakes & Treats',
    house: '',
    categoryWordmark: true,
    image: `${HIGHLIGHTS}/guests.webp`,
    alt: 'Wedding Cakes & Treats — patisserie and dessert styling',
  },
  {
    id: 'wedding-invitations',
    name: 'Wedding Invitations',
    house: '',
    categoryWordmark: true,
    image: `${HIGHLIGHTS}/planning.webp`,
    alt: 'Wedding Invitations — stationery and calligraphy',
  },
] as const

export const JANCHAPELLE_MID_CTA = {
  title: 'Ready to find your gown?',
  lead:
    'From first sketch to final fitting, Janchapelle guides you with atelier discipline — fabrics, silhouette, and finishing chosen for how they read in motion.',
  cta: 'Book a private fitting',
  image: `${COVER}/Bridal.webp`,
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
