/** Public asset root for Astreal project photography */
export const ASTREAL_ASSETS = '/images/services/Astreal-Developers'

export const astrealBrandLogo =
  '/images/services/companie-services-cover/cards-logos-services/astreal-developers.png'

/** Full-bleed hero — wide architectural shot (slider-style focal image) */
export const astrealHeroImage = `${ASTREAL_ASSETS}/astron-nova-project/astron-nova-project-6.webp`

/** All photography for ASTRON Villas (Kiti) — folder `astron-project` */
const astronGalleryImages = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
  (n) => `${ASTREAL_ASSETS}/astron-project/astron-project-${n}.webp`,
)

/** ASTRON NOVA — numbered assets present on disk */
const astronNovaNums = [
  1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 22, 23, 24,
]
const astronNovaGalleryImages = astronNovaNums.map(
  (n) => `${ASTREAL_ASSETS}/astron-nova-project/astron-nova-project-${n}.webp`,
)

/** Island Studios — mixed filename casing as committed under `public` */
const islandStudiosGalleryImages = [
  `${ASTREAL_ASSETS}/island-studios/Island-studios-1.webp`,
  `${ASTREAL_ASSETS}/island-studios/Island-studios-2.webp`,
  `${ASTREAL_ASSETS}/island-studios/Island-studios-3.webp`,
  `${ASTREAL_ASSETS}/island-studios/Island-studios-4.webp`,
  `${ASTREAL_ASSETS}/island-studios/island-studios-6.webp`,
  `${ASTREAL_ASSETS}/island-studios/island-studios-7.webp`,
  `${ASTREAL_ASSETS}/island-studios/island-studios-8.webp`,
  `${ASTREAL_ASSETS}/island-studios/island-studios-9.webp`,
  `${ASTREAL_ASSETS}/island-studios/island-studios-10.webp`,
  `${ASTREAL_ASSETS}/island-studios/island-studios-11.webp`,
  `${ASTREAL_ASSETS}/island-studios/island-studios-12.webp`,
  `${ASTREAL_ASSETS}/island-studios/island-studios-13.webp`,
  `${ASTREAL_ASSETS}/island-studios/island-studios-15.webp`,
  `${ASTREAL_ASSETS}/island-studios/island-studios-17.webp`,
  `${ASTREAL_ASSETS}/island-studios/island-studios-18.webp`,
]

/** Venus — folder `Venus-project` */
const venusProjectGalleryImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
  (n) => `${ASTREAL_ASSETS}/Venus-project/venus-project-${n}.webp`,
)

export type AstrealProject = {
  id: string
  title: string
  subtitle: string
  description: string
  imageSrc: string
  imageAlt: string
  meta: string[]
  gallery: string[]
  detailParagraphs: string[]
  highlights: string[]
  /** Optional full-bleed image for `/services/astreal/projects/:id` hero (defaults to first gallery shot). */
  detailHeroSrc?: string
}

/** Latest developments — imagery aligned to folders under Astreal-Developers */
export const astrealProjectCards: AstrealProject[] = [
  {
    id: 'astron',
    title: 'ASTRON Villas',
    subtitle: 'Kiti Village',
    description:
      'Situated in the privileged area of Kiti, ASTRON Villas is a beacon of luxury and convenience — three-bedroom villas with private swimming pools, close to Larnaca International Airport, beaches, dining, and essential amenities.',
    imageSrc: `${ASTREAL_ASSETS}/astron-project/astron-project-1.webp`,
    imageAlt: 'ASTRON Villas residential architecture',
    meta: ['Villas', 'Private pool', 'Kiti'],
    detailHeroSrc: `${ASTREAL_ASSETS}/astron-project/astron-project-2.webp`,
    gallery: astronGalleryImages,
    highlights: [
      'Kiti Village — elevated coastal convenience',
      'Three-bedroom villas · private pools',
      'Minutes from Larnaca International Airport',
      'Near beaches, dining, schools & daily amenities',
    ],
    detailParagraphs: [
      'ASTRON Villas frames Mediterranean living as a daily ritual: generous proportions, crisp architectural lines, and outdoor spaces designed around privacy and pool-side entertaining in Kiti Village.',
      'Each residence is conceived as a quiet retreat — natural light across living zones, refined material palettes, and landscaping that keeps the villa grounded in its setting while preserving discretion from neighbouring plots.',
      'The location balances rarity with practicality: proximity to Larnaca International Airport for international patrons, fast access to coastal routes, and everyday essentials — markets, cafés, schools — within an easy radius.',
      'Whether you are securing a primary coastal home or a high-calibre rental proposition, ASTRON Villas is positioned as a disciplined architectural response to luxury housing demand in one of Larnaca’s most sought-after corridors.',
    ],
  },
  {
    id: 'astron-nova',
    title: 'ASTRON NOVA',
    subtitle: 'Contemporary living',
    description:
      'A refined residential expression with strong architectural presence — generous glazing, precise lines, and outdoor spaces designed for Mediterranean living and long-term value.',
    imageSrc: `${ASTREAL_ASSETS}/astron-nova-project/astron-nova-project-1.webp`,
    imageAlt: 'ASTRON NOVA contemporary development',
    meta: ['New build', 'Premium specification'],
    detailHeroSrc: `${ASTREAL_ASSETS}/astron-nova-project/astron-nova-project-6.webp`,
    gallery: astronNovaGalleryImages,
    highlights: [
      'Contemporary façade language · precision glazing',
      'Outdoor rooms tuned for Mediterranean climate',
      'Premium specification & disciplined detailing',
      'Portfolio-grade architectural consistency',
    ],
    detailParagraphs: [
      'Full property narrative and specifications for ASTRON NOVA will be published here shortly.',
      'Until then, explore the complete photography set below — every image is sourced from the astron-nova-project portfolio.',
    ],
  },
  {
    id: 'island-studios',
    title: 'Island Studios',
    subtitle: 'Flexible residences',
    description:
      'Studio-oriented residences crafted for modern rhythms — compact luxury with intelligent layouts, natural light, and finishes chosen for comfort and durability.',
    imageSrc: `${ASTREAL_ASSETS}/island-studios/Island-studios-1.webp`,
    imageAlt: 'Island Studios interior and architecture',
    meta: ['Studios', 'Island living'],
    gallery: islandStudiosGalleryImages,
    highlights: [
      'Intelligent compact layouts · maximum usable space',
      'Natural light & tactile finishes throughout',
      'Suited to contemporary rental & lifestyle demand',
      'Island context · refined architectural envelope',
    ],
    detailParagraphs: [
      'Island Studios distils luxury into a refined footprint — intelligent planning that prioritises usable volume, storage discipline, and daylight across compact primary spaces.',
      'Material choices favour warmth and durability: surfaces that age gracefully, hardware specified for daily rhythm, and kitchens and bathrooms composed like boutique hospitality suites.',
      'The proposition resonates with patrons seeking flexibility — pied-à-terre ownership, elevated rental yield, or a lock-and-leave base minutes from island experiences.',
      'Astreal’s oversight ensures each studio reads as part of a cohesive architectural identity rather than a generic rental stack — discretion, detail, and delivery aligned.',
    ],
  },
  {
    id: 'venus',
    title: 'VENUS',
    subtitle: 'Signature development',
    description:
      'A distinguished residential statement — refined envelopes, generous terraces, and interiors composed for clarity, comfort, and enduring Mediterranean appeal.',
    imageSrc: `${ASTREAL_ASSETS}/Venus-project/venus-project-6.webp`,
    imageAlt: 'VENUS residential architecture and interiors',
    meta: ['Residences', 'Premium build'],
    detailHeroSrc: `${ASTREAL_ASSETS}/Venus-project/venus-project-6.webp`,
    gallery: venusProjectGalleryImages,
    highlights: [
      'Contemporary residential composition',
      'Terraces & outdoor connection',
      'Material-forward interiors',
      'Astreal delivery discipline',
    ],
    detailParagraphs: [
      'Full property narrative and specifications for VENUS will be published here shortly.',
      'Browse the complete Venus-project photography set below — façade, interior, and amenity moments from this development.',
    ],
  },
]

export function getAstrealProjectById(id: string): AstrealProject | undefined {
  return astrealProjectCards.find((p) => p.id === id)
}
