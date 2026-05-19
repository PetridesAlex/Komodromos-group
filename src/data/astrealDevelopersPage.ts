/** Public asset root for Astreal project photography */
export const ASTREAL_ASSETS = '/images/services/Astreal-Developers'

export const astrealBrandLogo =
  '/images/services/companie-services-cover/cards-logos-services/astreal-developers.png'

/** Full-bleed hero — brand cover photography */
export const astrealHeroImage = `${ASTREAL_ASSETS}/all-photos/astreal-developers-cover.webp`

/** About us page — editorial photography */
export const astrealAboutImage = `${ASTREAL_ASSETS}/all-photos/astreal-developers-about-us.webp`

/** ASTRON NOVA project detail — hero cover */
export const astronNovaDetailHeroImage = `${ASTREAL_ASSETS}/all-photos/astron-propoerty-cover.webp`

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

/** CORAL (formerly Island Studios assets) — mixed filename casing under `public` */
const coralGalleryImages = [
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

export type AstrealDetailCopyImageBreak = {
  /** Insert a photo grid immediately before this section-label paragraph. */
  beforeLabel: string
  count?: number
}

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
  /** Pull gallery shots into the property narrative before matching section labels. */
  detailCopyImageBreaks?: AstrealDetailCopyImageBreak[]
}

/** Latest developments — imagery aligned to folders under Astreal-Developers */
export const astrealProjectCards: AstrealProject[] = [
  {
    id: 'astron',
    title: 'ASTRON Villas',
    subtitle: 'Kiti Village',
    description:
      'ASTRON 1 — two detached 3-bedroom villas in Kiti, Larnaca: 150 sqm internal, 351 sqm plots, private pools, south-facing design, minutes from the airport and beaches. From €369,000 + VAT.',
    imageSrc: `${ASTREAL_ASSETS}/astron-project/astron-project-1.webp`,
    imageAlt: 'ASTRON Villas residential architecture',
    meta: ['Villas', 'Private pool', 'Kiti'],
    detailHeroSrc: `${ASTREAL_ASSETS}/astron-project/astron-project-2.webp`,
    detailCopyImageBreaks: [
      { beforeLabel: 'Each home includes:', count: 4 },
      { beforeLabel: 'Price per residence', count: 4 },
    ],
    gallery: astronGalleryImages,
    highlights: [
      'ASTRON 1 · Kiti Village — Komodromos Group of Companies',
      'Two detached 3-bedroom villas · private pools · south-facing',
      '150 sqm internal · 351 sqm plots · open-plan living',
      '1 min Angeloktisti · 7 min airport · 10 min Larnaca centre',
      '€369,000 + VAT per residence',
    ],
    detailParagraphs: [
      'By ASTREAL Developers — operated by Komodromos Group of Companies. Introducing ASTRON 1, an exclusive new residential development in the beautiful village of Kiti, Larnaca — where contemporary architecture meets Mediterranean luxury living.',
      'This boutique project consists of two ultra-luxurious detached 3-bedroom residences, carefully designed to combine elegance, comfort, functionality, and natural harmony with sunlight, air, and open living spaces.',
      'Each residence offers:',
      '150 sqm covered internal area.',
      '351 sqm total plot area.',
      'Private swimming pool for endless summer enjoyment.',
      'Modern open-plan architectural design.',
      'South-facing orientation for maximum natural light and ventilation throughout the day.',
      'The ground floor has been thoughtfully designed to create a seamless connection between indoor and outdoor living, offering a lifestyle experience filled with light, openness, and relaxation.',
      'Each home includes:',
      'Spacious living and dining area.',
      'Contemporary kitchen.',
      '3 bedrooms.',
      '3 showers.',
      '3 toilets.',
      'Laundry room.',
      'Large verandas and private garden areas ideal for family moments and entertaining guests.',
      'Prime location',
      'Located in a peaceful and rapidly developing luxury residential area, ASTRON 1 offers privacy while remaining perfectly connected to key destinations.',
      '1 minute from Angeloktisti Church.',
      '7 minutes from Larnaca International Airport.',
      '10 minutes from organized beaches and Larnaca city centre.',
      'Less than 5 minutes from the Larnaca–Limassol highway.',
      'Additional advantages:',
      'Quiet cul-de-sac location.',
      'Large front parking area accommodating up to 6 vehicles.',
      'Adjacent pedestrian pathway.',
      'Next to green areas and park spaces.',
      'Price per residence',
      '€369,000 + VAT.',
    ],
  },
  {
    id: 'astron-nova',
    title: 'ASTRON NOVA',
    subtitle: 'Contemporary living',
    description:
      'Three ultra-luxurious contemporary residences in Kiti, Larnaca — 143 m² internal, 200 m² plots, south-facing design, optional pool & pergola. From €360,000 + VAT.',
    imageSrc: `${ASTREAL_ASSETS}/astron-nova-project/astron-nova-project-1.webp`,
    imageAlt: 'ASTRON NOVA contemporary development',
    meta: ['New build', 'Premium specification'],
    detailHeroSrc: astronNovaDetailHeroImage,
    detailCopyImageBreaks: [
      { beforeLabel: 'Designed around light, air & harmony', count: 4 },
      { beforeLabel: 'Prices starting from €360,000 + VAT', count: 4 },
    ],
    gallery: astronNovaGalleryImages,
    highlights: [
      'ASTRON NOVA · Kiti — Komodromos Group of Companies',
      '3 residences · 143 m² internal · 200 m² plots · south-facing',
      '120 m from central Kiti road · 5 min airport · optional pool',
      'Park-adjacent · luxury neighbourhood · highway access',
      'From €360,000 + VAT — pool & pergola optional',
    ],
    detailParagraphs: [
      '✨ ASTRON NOVA PROJECT ✨ By ASTREAL Developers — operated by Komodromos Group of Companies. A new benchmark of modern luxury living arrives in the heart of Kiti.',
      '🏡 3 ultra-luxurious contemporary residences — designed for those who seek elegance, comfort, privacy and refined architecture in one of the most privileged locations of the area.',
      'Each residence offers:',
      '▪️ 143 m² internal covered areas.',
      '▪️ 200 m² total plot area.',
      '▪️ 3 spacious bedrooms.',
      '▪️ Open-plan luxury living spaces.',
      '▪️ Premium architectural design.',
      '▪️ Private yard & optional swimming pool area for endless summer moments.',
      'Designed around light, air & harmony',
      '☀️ All areas of the residences are south-facing, allowing natural sunlight to embrace every corner of the home throughout the day.',
      'The unique open-through architectural concept creates a seamless connection between indoor and outdoor living, offering an atmosphere of freedom, warmth and Mediterranean elegance.',
      'Luxury living experience includes:',
      '▪️ Elegant living & dining area.',
      '▪️ Contemporary kitchen design.',
      '▪️ 2 luxurious showers.',
      '▪️ 3 WC areas.',
      '▪️ Dedicated laundry room.',
      '▪️ Spacious verandas & landscaped outdoor areas.',
      '▪️ Functional luxury designed for family moments and unforgettable gatherings.',
      'Location — Kiti, Larnaca',
      'Perfectly positioned in one of the most desirable and rapidly developing residential areas of Larnaca.',
      '✔️ Only 120 m from the central Kiti road (behind Zorbas Bakery).',
      '✔️ Walking distance to cafés, restaurants, shops & all amenities.',
      '✔️ Adjacent to a beautiful green park with a children’s play area.',
      '✔️ Next to two public parking areas.',
      '✔️ Surrounded by newly built luxury residences.',
      '✔️ 2 minutes from Angeloktisti Church.',
      '✔️ 5 minutes from Larnaca International Airport.',
      '✔️ 10 minutes from Mackenzie & Pervolia beaches.',
      '✔️ 15 minutes from Larnaca city centre.',
      '✔️ Less than 5 minutes to the highway connecting Larnaca, Nicosia & Limassol.',
      '💎 A lifestyle designed around comfort, prestige and timeless architectural elegance.',
      'Prices starting from €360,000 + VAT',
      'Note: swimming pool and pergola are optional and not included in the price.',
    ],
  },
  {
    id: 'coral',
    title: 'CORAL',
    subtitle: 'Kiti, Larnaca',
    description:
      'Luxury residential development in Kiti — 300 sqm covered, 530 sqm land, private pool, jacuzzi, sauna, and south-facing architecture. By ASTREAL Developers, operated by Komodromos Group of Companies.',
    imageSrc: `${ASTREAL_ASSETS}/island-studios/Island-studios-1.webp`,
    imageAlt: 'CORAL luxury residential architecture in Kiti, Larnaca',
    meta: ['Residences', 'Kiti', 'Private pool'],
    detailHeroSrc: `${ASTREAL_ASSETS}/island-studios/island-studios-6.webp`,
    detailCopyImageBreaks: [
      { beforeLabel: 'Designed with exceptional lifestyle amenities including:', count: 4 },
      { beforeLabel: 'Prime location', count: 4 },
    ],
    gallery: coralGalleryImages,
    highlights: [
      'CORAL · Kiti, Larnaca — Komodromos Group of Companies',
      '300 sqm covered · 530 sqm land · private pool, jacuzzi & sauna',
      'South-facing luxury · contemporary architecture · indoor–outdoor living',
      '2 min Angeloktisti · 7 min airport · 10 min beaches & Larnaca centre',
    ],
    detailParagraphs: [
      'By ASTREAL Developers — operated by Komodromos Group of Companies. Introducing CORAL, a distinctive luxury residential development located in the beautiful village of Kiti, Larnaca — designed to redefine modern Mediterranean living through elegance, comfort, and contemporary architectural excellence.',
      'CORAL has been carefully created for those seeking a sophisticated lifestyle experience where privacy, natural light, wellness, and luxury coexist in perfect harmony.',
      'The project features luxury residences offering:',
      '300 sqm of covered areas.',
      '530 sqm total land area.',
      'Designed with exceptional lifestyle amenities including:',
      'Private swimming pool.',
      'Jacuzzi.',
      'Sauna.',
      'Contemporary functional architecture.',
      'Spacious open-plan living areas.',
      'Seamless indoor-outdoor living experience.',
      '☀️ All spaces are south-facing, welcoming abundant natural sunlight, fresh air, and a warm atmosphere throughout the entire day.',
      'Prime location',
      'Located in one of the most peaceful and developing residential areas of Kiti, CORAL offers excellent accessibility while maintaining privacy and tranquility.',
      '2 minutes from Angeloktisti Church.',
      '7 minutes from Larnaca International Airport.',
      '10 minutes from organized beaches and Larnaca city center.',
      'Less than 7 minutes from the Larnaca–Limassol highway.',
      'CORAL is more than a residential project — it is a lifestyle destination designed to offer refined luxury, serenity, and timeless architectural beauty.',
    ],
  },
  {
    id: 'venus',
    title: 'VENUS',
    subtitle: 'Signature development',
    description:
      'A distinguished private residence in Larnaca — refined European-inspired architecture, resort-style indoor and outdoor pools, generous ensuite bedrooms, and Mediterranean indoor–outdoor living.',
    imageSrc: `${ASTREAL_ASSETS}/Venus-project/venus-project-6.webp`,
    imageAlt: 'VENUS residential architecture and interiors',
    meta: ['Residences', 'Premium build'],
    detailHeroSrc: `${ASTREAL_ASSETS}/Venus-project/venus-project-6.webp`,
    detailCopyImageBreaks: [
      { beforeLabel: 'Signature features', count: 4 },
      { beforeLabel: 'Location — 📍 Larnaca, Cyprus.', count: 4 },
    ],
    gallery: venusProjectGalleryImages,
    highlights: [
      'VENUS RESIDENCE — Komodromos Group of Companies',
      '5 ensuite bedrooms · 2 saloons · indoor & outdoor pools',
      'Private sunken lounge · jacuzzi · wellness-inspired spaces',
      'Double-height glass façades · Mediterranean landscaping',
      'Premium private parking · Larnaca, Cyprus',
    ],
    detailParagraphs: [
      'VENUS RESIDENCE — operated by Komodromos Group of Companies. In the heart of Larnaca, where contemporary architecture meets timeless luxury, rises VENUS RESIDENCE: an exceptional private residence for those who seek elegance, exclusivity, and an elevated lifestyle experience.',
      'An architectural masterpiece inspired by refined European design, featuring grand proportions, floor-to-ceiling glass, natural stone textures, and a seamless harmony between indoor and outdoor living.',
      'VENUS RESIDENCE has been thoughtfully created to deliver a true resort-style living experience, where every detail reflects sophistication, tranquility, and contemporary luxury.',
      'Signature features',
      'Five luxurious ensuite bedrooms.',
      'Two elegant high-end saloons.',
      'Six toilets and six showers.',
      'Private indoor swimming pool.',
      'Spectacular outdoor swimming pool with architectural water features.',
      'Private sunken lounge surrounded by water with integrated fireplace.',
      'Jacuzzi and wellness-inspired relaxation areas.',
      'Spacious terraces and outdoor lounge spaces.',
      'Double-height glass façades filled with natural sunlight.',
      'Resort-inspired landscaping with palm trees, olive trees, and Mediterranean gardens.',
      'Premium private parking area.',
      'A perfect balance between luxury, comfort, and functionality.',
      '☀️ Every space has been designed to embrace the Mediterranean sunlight, fresh air, and natural openness throughout the entire residence.',
      'The result is not simply a home — but a complete lifestyle destination.',
      'Location — 📍 Larnaca, Cyprus.',
      'Ideally positioned in a prestigious area of Larnaca, the residence offers privacy, serenity, and convenient access to the city centre, beaches, and all essential amenities. Browse the complete Venus-project photography set below: façade, interior, and amenity moments.',
    ],
  },
]

export function getAstrealProjectById(id: string): AstrealProject | undefined {
  return astrealProjectCards.find((p) => p.id === id)
}
