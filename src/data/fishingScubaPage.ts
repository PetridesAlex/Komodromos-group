/** Fishing & Scuba Diving — VIP water experiences hub */
const BASE = '/images/services/vip-service'
const WATER = `${BASE}/water-activities`
const FISHING = `${WATER}/fishing`
const SCUBA = `${WATER}/scuba-diving`

export const FISHING_SCUBA_HERO = `${BASE}/fishing-scuba-diving.webp`

export type FishingScubaCategoryCard = {
  id: string
  kicker: string
  title: string
  blurb: string
  image: string
  imageAlt: string
  /** Detail route — set when a dedicated category page exists */
  to?: string
}

export type WaterExperienceBlock = {
  title: string
  paragraphs: readonly string[]
  image: string
  imageAlt: string
  imageSide?: 'left' | 'right'
}

export type WaterExperienceDetail = {
  slug: string
  eyebrow: string
  title: string
  tagline: string
  heroImage: string
  experiences: readonly WaterExperienceBlock[]
  gallery: readonly string[]
  panelEyebrow: string
  panelTitle: string
  panelLead: string
  ctaLabel: string
  vipSubService: string
  backLabel: string
}

/**
 * Category cards on `/services/fishing-scuba-diving`.
 */
export const fishingScubaCategoryCards: FishingScubaCategoryCard[] = [
  {
    id: 'fishing',
    kicker: 'Category 01',
    title: 'Fishing',
    blurb: 'Private deep-sea and coastal fishing experiences — curated for discerning guests.',
    image: `${FISHING}/fishing-24.webp`,
    imageAlt: 'Premium fishing experience with Komodromos VIP Services',
    to: '/services/fishing-scuba-diving/fishing',
  },
  {
    id: 'scuba-diving',
    kicker: 'Category 02',
    title: 'Scuba Diving',
    blurb: 'Guided diving in crystal waters — refined underwater discovery for private clients.',
    image: `${SCUBA}/scuba-diving-9.png`,
    imageAlt: 'Premium scuba diving experience with Komodromos VIP Services',
    to: '/services/fishing-scuba-diving/scuba-diving',
  },
]

export const fishingDetail: WaterExperienceDetail = {
  slug: 'fishing',
  eyebrow: 'Fishing & Scuba Diving',
  title: 'Fishing',
  tagline: 'Authentic Cypriot fishing on the Mediterranean.',
  heroImage: `${FISHING}/fishing-24.webp`,
  experiences: [
    {
      title: 'Traditional Fishing Experience',
      paragraphs: [
        'Experience the authentic fishing traditions of Cyprus aboard one of our traditional or power boats, accompanied by experienced local fishermen. Travel into the beautiful Mediterranean waters and discover time-honoured fishing techniques passed down through generations.',
        'Depending on the season and sea conditions, you may fish for tuna and other local species while learning directly from fishermen who know these waters intimately. More than a fishing trip, this is an authentic cultural experience filled with local knowledge, beautiful coastal scenery and genuine Cypriot hospitality.',
      ],
      image: `${FISHING}/fishing-cover.png`,
      imageAlt: 'Traditional fishing experience on the Mediterranean in Cyprus',
      imageSide: 'left',
    },
  ],
  gallery: [
    `${FISHING}/fishing-2.png`,
    `${FISHING}/fishing-3.png`,
    `${FISHING}/fishing-4.png`,
    `${FISHING}/fishing-5.png`,
    `${FISHING}/fishing-6.png`,
    `${FISHING}/fishing-7.png`,
    `${FISHING}/fishing-8.png`,
    `${FISHING}/fishing-9.png`,
    `${FISHING}/fishing-10.png`,
    `${FISHING}/fishing-11.png`,
    `${FISHING}/fishing-12.png`,
    `${FISHING}/fishing-1.png`,
    `${FISHING}/fishing-14.png`,
    `${FISHING}/fishing-15.webp`,
    `${FISHING}/fishing-16.jpg`,
    `${FISHING}/fishing-17.jpg`,
    `${FISHING}/fishing-18.jpg`,
    `${FISHING}/fishing-19.webp`,
    `${FISHING}/fishing-20.jpg`,
    `${FISHING}/fishing-21.jpg`,
    `${FISHING}/fishing-22.jpg`,
    `${FISHING}/fishing-23.jpg`,
    `${FISHING}/fishing-24.webp`,
    `${FISHING}/fishing-25.jpg`,
    `${FISHING}/fishing-26.jpeg`,
    `${FISHING}/fishing-27.jpg`,
    `${FISHING}/fishing-28.jpg`,
  ],
  panelEyebrow: 'Private fishing experiences',
  panelTitle: 'Fish with Komodromos VIP',
  panelLead:
    'Join experienced local fishermen for a genuine Cypriot sea experience — tradition, hospitality, and the open Mediterranean.',
  ctaLabel: 'Request this experience',
  vipSubService: 'Fishing',
  backLabel: 'Back to Fishing & Scuba Diving',
}

export const scubaDivingDetail: WaterExperienceDetail = {
  slug: 'scuba-diving',
  eyebrow: 'Fishing & Scuba Diving',
  title: 'Scuba Diving',
  tagline: 'Discover the Mediterranean beneath the surface.',
  heroImage: `${SCUBA}/scuba-diving-9.png`,
  experiences: [
    {
      title: 'Scuba Diving in Ayia Napa',
      paragraphs: [
        'Discover the spectacular underwater world of Ayia Napa, renowned for its crystal-clear waters, fascinating marine life and impressive natural formations. Accompanied by experienced diving professionals, you will explore beautiful dive sites carefully selected according to your experience level.',
        'Whether you are trying scuba diving for the first time or are already a certified diver, this experience offers an unforgettable opportunity to discover the hidden beauty beneath the Mediterranean Sea.',
      ],
      image: `${SCUBA}/scuba-diving-1.png`,
      imageAlt: 'Scuba diving experience in Ayia Napa crystal-clear waters',
      imageSide: 'left',
    },
    {
      title: 'Zenobia Shipwreck Diving Experience',
      paragraphs: [
        'Explore the legendary Zenobia shipwreck, one of the Mediterranean’s most famous and impressive diving destinations. Resting beneath the waters off the coast of Larnaca, this remarkable wreck attracts divers from around the world.',
        'Discover the enormous vessel, its submerged trucks and its extraordinary marine ecosystem during a professionally organised diving experience. Designed for qualified divers, the Zenobia adventure combines history, mystery and exceptional underwater scenery for a truly unforgettable dive.',
      ],
      image: `${SCUBA}/scuba-diving-10.png`,
      imageAlt: 'Zenobia shipwreck diving experience off the coast of Larnaca',
      imageSide: 'right',
    },
  ],
  gallery: [
    `${SCUBA}/scuba-diving-one.webp`,
    `${SCUBA}/scuba-diving-two.webp`,
    `${SCUBA}/scuba-diving-three.webp`,
    `${SCUBA}/scuba-diving-forth.webp`,
    `${SCUBA}/scuba-diving-fitfth.webp`,
    `${SCUBA}/scuba-diving-six.webp`,
    `${SCUBA}/scuba-diving-seven.webp`,
    `${SCUBA}/scuba-diving-eight.webp`,
    `${SCUBA}/scuba-diving-2.png`,
    `${SCUBA}/scuba-diving-3.png`,
    `${SCUBA}/scuba-diving-4.png`,
    `${SCUBA}/scuba-diving-5.png`,
    `${SCUBA}/scuba-diving-6.png`,
    `${SCUBA}/scuba-diving-7.png`,
    `${SCUBA}/scuba-diving-8.png`,
    `${SCUBA}/scuba-diving-9.png`,
  ],
  panelEyebrow: 'Private diving experiences',
  panelTitle: 'Dive with Komodromos VIP',
  panelLead:
    'From first dives in Ayia Napa to the legendary Zenobia wreck — every experience is professionally organised for safety, comfort, and unforgettable underwater discovery.',
  ctaLabel: 'Request this experience',
  vipSubService: 'Scuba Diving',
  backLabel: 'Back to Fishing & Scuba Diving',
}
