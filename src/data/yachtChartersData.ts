/** Yacht charters — dummy fleet & page copy. Swap images under public/ when assets are ready. */
const img = (path: string) => path

export type YachtType = 'Motor Yacht' | 'Sailing Yacht' | 'Catamaran'

export type YachtCharter = {
  id: string
  name: string
  type: YachtType
  location: string
  guests: number
  price4h: string
  price6h: string
  priceFullDay: string
  image: string
  gallery: string[]
  description: string
  included: string[]
  durations: string[]
}

export const YACHT_TYPES: YachtType[] = ['Motor Yacht', 'Sailing Yacht', 'Catamaran']

export const YACHT_LOCATIONS = [
  'Limassol Marina',
  'Larnaca Marina',
  'Ayia Napa',
  'Protaras',
  'Latchi',
  'Paphos Harbour',
] as const

export type YachtLocation = (typeof YACHT_LOCATIONS)[number]

export const yachtChartersHero = {
  title: 'Luxury Yacht Charters in Cyprus',
  subtitle:
    'Private cruises, catamaran experiences, and bespoke sea journeys across Cyprus',
}

export const yachtFleet: YachtCharter[] = [
  {
    id: 'aurora-m',
    name: 'Aurora Prime',
    type: 'Motor Yacht',
    location: 'Limassol Marina',
    guests: 12,
    price4h: '€1,500',
    price6h: '€1,900',
    priceFullDay: '€3,200',
    image: img('/images/services/vip-service/luxury-yacht.webp'),
    gallery: [
      '/images/services/vip-service/luxury-yacht.webp',
      '/images/services/vip-service/vip-tour.webp',
      '/images/services/vip-service/Vip-tour-around-the-Island.webp',
    ],
    description:
      'A premium motor yacht experience designed for private cruises, celebrations, and luxury escapes along the Cypriot coast.',
    included: [
      'Professional captain & crew',
      'Welcome refreshments & ice',
      'Sound system & Bluetooth',
      'Snorkelling equipment',
      'Fuel for standard itinerary',
    ],
    durations: ['4 hours', '6 hours', 'Full day'],
  },
  {
    id: 'med-breeze',
    name: 'Med Breeze',
    type: 'Catamaran',
    location: 'Larnaca Marina',
    guests: 16,
    price4h: '€1,850',
    price6h: '€2,350',
    priceFullDay: '€3,900',
    image: img('/images/services/vip-service/fishing-scuba-diving.webp'),
    gallery: [
      '/images/services/vip-service/fishing-scuba-diving.webp',
      '/images/services/vip-service/luxury-yacht.webp',
      '/images/services/vip-service/Aerophotography.webp',
    ],
    description:
      'Spacious twin-hull stability, expansive decks, and sunset-ready lounging — ideal for groups and family gatherings.',
    included: [
      'Skipper & host',
      'Soft drinks & water',
      'Paddle boards (on request)',
      'Shaded cockpit & sun pads',
      'Safety briefing & life jackets',
    ],
    durations: ['4 hours', '6 hours', 'Full day'],
  },
  {
    id: 'zephyr-s',
    name: 'Zephyr Sails',
    type: 'Sailing Yacht',
    location: 'Ayia Napa',
    guests: 8,
    price4h: '€980',
    price6h: '€1,250',
    priceFullDay: '€2,100',
    image: img('/images/services/vip-service/vip-tour.webp'),
    gallery: [
      '/images/services/vip-service/vip-tour.webp',
      '/images/services/vip-service/Vip-tour-around-the-Island.webp',
      '/images/services/companie-services-cover/luxury-travel.webp',
    ],
    description:
      'Classic sailing romance with modern comfort — harness the breeze and explore hidden coves in quiet elegance.',
    included: [
      'Certified sailing crew',
      'Light snacks',
      'Swim ladder & platform',
      'Wind-dependent routing advisory',
    ],
    durations: ['4 hours', '6 hours', 'Full day'],
  },
  {
    id: 'coral-cat',
    name: 'Coral Line',
    type: 'Catamaran',
    location: 'Protaras',
    guests: 14,
    price4h: '€1,650',
    price6h: '€2,100',
    priceFullDay: '€3,450',
    image: img('/images/services/vip-service/Vip-tour-around-the-Island.webp'),
    gallery: [
      '/images/services/vip-service/Vip-tour-around-the-Island.webp',
      '/images/services/vip-service/luxury-yacht.webp',
      '/images/services/vip-service/vip-tour.webp',
    ],
    description:
      'Coastal hops, blue-lagoon swims, and golden-hour toasts — tailored pacing for your group.',
    included: ['Crew', 'Cooler & ice', 'Floating mats', 'Premium sound'],
    durations: ['4 hours', '6 hours', 'Full day'],
  },
  {
    id: 'latchi-pearl',
    name: 'Latchi Pearl',
    type: 'Motor Yacht',
    location: 'Latchi',
    guests: 10,
    price4h: '€1,350',
    price6h: '€1,750',
    priceFullDay: '€2,950',
    image: img('/images/services/companie-services-cover/luxury-travel.webp'),
    gallery: [
      '/images/services/companie-services-cover/luxury-travel.webp',
      '/images/services/vip-service/Aerophotography.webp',
      '/images/services/vip-service/luxury-yacht.webp',
    ],
    description:
      'Akamas-facing itineraries with dramatic cliffs and turquoise shallows — perfect for discovery days.',
    included: ['Captain', 'Towels', 'Snorkel sets', 'Route planning'],
    durations: ['4 hours', '6 hours', 'Full day'],
  },
  {
    id: 'paphos-velvet',
    name: 'Velvet Horizon',
    type: 'Motor Yacht',
    location: 'Paphos Harbour',
    guests: 9,
    price4h: '€1,280',
    price6h: '€1,620',
    priceFullDay: '€2,750',
    image: img('/images/services/vip-service/Aerophotography.webp'),
    gallery: [
      '/images/services/vip-service/Aerophotography.webp',
      '/images/services/vip-service/luxury-yacht.webp',
      '/images/services/vip-service/vip-tour.webp',
    ],
    description:
      'West-coast sophistication: historic shores, dramatic light, and discreet service from embarkation to return.',
    included: ['Crew', 'Prosecco welcome', 'Climate-controlled saloon', 'Wi‑Fi (coastal)'],
    durations: ['4 hours', '6 hours', 'Full day'],
  },
]

export type CharterHub = {
  title: string
  text: string
  /** Cover image under `public/` */
  image: string
  imageAlt: string
}

export const charteringCyprus = {
  title: 'Chartering a Yacht in Cyprus',
  intro:
    'From world-class marinas to sheltered bays, Cyprus offers one of the Mediterranean’s most rewarding coastlines — best experienced from the water, on your schedule.',
  hubs: [
    {
      title: 'Limassol Marina',
      text: 'A flagship superyacht address with refined dining and provisioning steps from your berth — ideal for corporate hospitality and weekend escapes.',
      image: img('/images/services/maritime-services/yacht-marine-hero.webp'),
      imageAlt: 'Luxury yacht and marina atmosphere at Limassol',
    },
    {
      title: 'Larnaca Marina',
      text: 'Straightforward access and open-sea reach toward the east coast — flexible for longer coastal passages and multi-stop days.',
      image: img('/images/services/vip-service/luxury-yacht.webp'),
      imageAlt: 'Yacht on open water near Larnaca',
    },
    {
      title: 'Ayia Napa & Protaras',
      text: 'Iconic blues, sea caves, and postcard beaches — perfect for swim stops, DJ-led sunsets, and celebration charters.',
      image: img('/images/services/vip-service/Vip-tour-around-the-Island.webp'),
      imageAlt: 'Coastal cruise and turquoise waters of eastern Cyprus',
    },
    {
      title: 'Latchi',
      text: 'Gateway to the Akamas — dramatic cliffs, hidden coves, and some of the island’s clearest water.',
      image: img('/images/services/vip-service/Aerophotography.webp'),
      imageAlt: 'Aerial view of rugged coastline and clear sea',
    },
    {
      title: 'Paphos Harbour',
      text: 'Historic coastline and golden-hour light — tailored for romantic cruises and intimate gatherings.',
      image: img('/images/services/vip-service/vip-tour.webp'),
      imageAlt: 'Sunlit Mediterranean coast near Paphos',
    },
  ] satisfies CharterHub[],
  closing:
    'Explore crystal-clear waters, hidden bays, beaches, and coastal villages. Plan sunset cruises, private events, birthdays, corporate outings, or a quiet escape for two — every itinerary is storyboarded with you.',
}

export const whyChooseUs = {
  title: 'Why Choose Us',
  items: [
    {
      title: 'Curated fleet',
      text: 'Every vessel is vetted for maintenance, crew calibre, and onboard comfort — no surprises at the dock.',
    },
    {
      title: 'One concierge line',
      text: 'Provisioning, timing, transfers, and special requests flow through a single point of contact.',
    },
    {
      title: 'Discretion by default',
      text: 'From principal travel to high-profile celebrations, protocols match the sensitivity of the mission.',
    },
    {
      title: 'Transparent pricing',
      text: 'Clear structure for hours, crew, and inclusions — upgrades and catering quoted upfront.',
    },
  ],
}

export const popularExperiences = {
  title: 'Popular Experiences',
  items: [
    'Sunset champagne cruise',
    'Full-day Akamas & Blue Lagoon',
    'Family catamaran with swim stops',
    'Proposal & anniversary at sea',
    'Corporate team afternoon',
    'Birthday deck party with DJ',
  ],
}

export const privateEvents = {
  title: 'Private Events & Celebrations',
  text: 'Birthdays, proposals, anniversaries, pre-wedding parties, and executive hosting — we coordinate timing, catering partners, floral touches, photography referrals, and on-water ceremony logistics where required.',
}

export const yachtReviews = [
  {
    quote: 'Flawless from first call to disembarkation. The crew anticipated everything — our guests are still talking about the sunset.',
    name: 'Elena M.',
    context: 'Corporate hosting, Limassol',
  },
  {
    quote: 'The catamaran was immaculate and the route felt bespoke. Exactly the calm luxury we wanted for our anniversary.',
    name: 'James & Sarah K.',
    context: 'Private cruise, Protaras',
  },
  {
    quote: 'Professional, discreet, and beautifully organised. The perfect day on the water for our principals.',
    name: 'Private Office',
    context: 'Motor yacht charter',
  },
]

export const yachtFaq = [
  {
    q: 'What is included in the charter rate?',
    a: 'Typically captain/crew, standard fuel for agreed itinerary, safety equipment, and listed inclusions. Catering, premium beverages, extended hours, and special equipment are quoted separately.',
  },
  {
    q: 'Can we customise the route?',
    a: 'Yes — routes are planned around weather, time window, and your priorities (swim stops, quiet bays, sunset positioning).',
  },
  {
    q: 'How far in advance should we book?',
    a: 'Peak summer weekends fill early. For best selection, we recommend several weeks ahead — shorter notice may still be possible subject to fleet availability.',
  },
  {
    q: 'Do you arrange transfers and provisioning?',
    a: 'We coordinate ground transfers, champagne, cakes, floral, and approved catering partners — brief us once and we handle the choreography.',
  },
]
