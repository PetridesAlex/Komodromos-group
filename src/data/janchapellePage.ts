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
}

/** Featured lookbook — interactive gown cards. */
export const JANCHAPELLE_FEATURED: readonly JanchapelleDressCard[] = [
  {
    id: 'aurelia',
    name: 'Aurelia',
    house: 'Maison Édition',
    image: `${PACKAGES}/tier-premium.webp`,
    alt: 'Aurelia — structured ivory gown with soft train',
  },
  {
    id: 'solenne',
    name: 'Solenne',
    house: 'Atelier Moderne',
    image: `${HIGHLIGHTS}/bridal.webp`,
    alt: 'Solenne — modern column silhouette in silk mikado',
  },
  {
    id: 'vivienne',
    name: 'Vivienne',
    house: 'Maison Édition',
    image: `${PACKAGES}/tier-classic-plus.webp`,
    alt: 'Vivienne — romantic lace bodice with fluid skirt',
  },
  {
    id: 'celeste',
    name: 'Céleste',
    house: 'Gold Atelier',
    image: `${PACKAGES}/tier-classic.webp`,
    alt: 'Céleste — off-shoulder couture with crystal detail',
  },
  {
    id: 'isabeau',
    name: 'Isabeau',
    house: 'Atelier Moderne',
    image: `${PACKAGES}/tier-basic-plus.webp`,
    alt: 'Isabeau — ethereal tulle layers for evening light',
  },
  {
    id: 'marlowe',
    name: 'Marlowe',
    house: 'Haute Couture',
    image: `${PACKAGES}/tier-customised.webp`,
    alt: 'Marlowe — architectural draping in liquid satin',
  },
] as const

export type JanchapelleHouse = {
  id: string
  name: string
  lead: string
  cta: string
  image: string
  alt: string
}

export const JANCHAPELLE_HOUSES: readonly JanchapelleHouse[] = [
  {
    id: 'maison-edition',
    name: 'Maison Édition',
    lead:
      'Aristocratic, feminine gowns with refined embroidery and couture finishing — for brides who want presence without excess.',
    cta: 'View the collection',
    image: `${COVER}/wedding-sky.webp`,
    alt: 'Maison Édition bridal collection mood',
  },
  {
    id: 'atelier-moderne',
    name: 'Atelier Moderne',
    lead:
      'Handmade silhouettes for contemporary brides — clean lines, considered fabric, and individuality in every seam.',
    cta: 'View the collection',
    image: `${HIGHLIGHTS}/stories.webp`,
    alt: 'Atelier Moderne bridal collection mood',
  },
] as const

export const JANCHAPELLE_DONT_MISS: readonly JanchapelleDressCard[] = [
  {
    id: 'noemie',
    name: 'Noémie',
    house: 'Maison Édition',
    image: `${PACKAGES}/tier-basic.webp`,
    alt: 'Noémie — soft A-line with delicate lace overlays',
  },
  {
    id: 'elowen',
    name: 'Elowen',
    house: 'Atelier Moderne',
    image: `${HIGHLIGHTS}/consultation.webp`,
    alt: 'Elowen — minimalist sheath with sculpted neckline',
  },
  {
    id: 'seraphine',
    name: 'Seraphine',
    house: 'Gold Atelier',
    image: `${HIGHLIGHTS}/packages.webp`,
    alt: 'Seraphine — princess volume in layered tulle',
  },
  {
    id: 'amara',
    name: 'Amara',
    house: 'Ivory Collection',
    image: `${HIGHLIGHTS}/planning.webp`,
    alt: 'Amara — romantic sweetheart with pearl accents',
  },
  {
    id: 'lucienne',
    name: 'Lucienne',
    house: 'Haute Couture',
    image: `${HIGHLIGHTS}/production.webp`,
    alt: 'Lucienne — dramatic train and couture beadwork',
  },
] as const

export const JANCHAPELLE_MID_CTA = {
  title: 'Ready to find your gown?',
  lead:
    'From first sketch to final fitting, Janchapelle guides you with atelier discipline — fabrics, silhouette, and finishing chosen for how they read in motion.',
  cta: 'Book a private fitting',
  image: `${COVER}/Bridal.webp`,
} as const

export const JANCHAPELLE_ASSIST = [
  {
    id: 'help',
    title: 'Need guidance?',
    lead: 'Speak with our bridal consultants about silhouettes, timelines, and care for heirloom pieces.',
    cta: 'Book an appointment',
    image: `${HIGHLIGHTS}/guests.webp`,
    alt: 'Bridal consultation at Janchapelle',
  },
  {
    id: 'atelier',
    title: 'The atelier',
    lead: 'Visit for a private appointment — quiet fittings, honest counsel, and space to decide without hurry.',
    cta: 'Request a visit',
    image: `${HIGHLIGHTS}/destinations.webp`,
    alt: 'Janchapelle atelier visit',
  },
] as const

export const JANCHAPELLE_TIERS = [
  {
    id: 'edit',
    index: 'I',
    name: 'Atelier Edit',
    blurb: 'Essential silhouettes with refined fabric — a polished start to your bridal wardrobe.',
  },
  {
    id: 'ivory',
    index: 'II',
    name: 'Ivory Collection',
    blurb: 'Signature gowns with elevated detailing for classic and contemporary ceremonies.',
  },
  {
    id: 'gold',
    index: 'III',
    name: 'Gold Atelier',
    blurb: 'Statement pieces with couture accents — embroidery, crystal, and considered volume.',
  },
  {
    id: 'couture',
    index: 'IV',
    name: 'Haute Couture',
    blurb: 'Fully bespoke creation: muslins, fittings, and finishing made exclusively for you.',
    featured: true,
  },
] as const

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
