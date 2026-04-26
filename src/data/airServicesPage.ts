/** Images in `public/images/services/vip-service/air-services/` */
const AIR_IMG = '/images/services/vip-service/air-services'

export type AirCategoryId = 'jets' | 'light'

export const airServicesHero = {
  eyebrow: 'VIP Air & charter',
  /** Display: first word + accent second line for premium split title */
  titleWords: ['Air', 'Services'] as const,
  subtitle: 'Private jets and light aircraft — tailored to your route, schedule, and standards.',
}

export const airCategoryContent: Record<
  AirCategoryId,
  {
    image: string
    imageAlt: string
    title: string
    tagline: string
    lead: string
    highlights: { label: string; text: string }[]
    footnote: string
  }
> = {
  jets: {
    image: `${AIR_IMG}/private-jets.webp`,
    imageAlt: 'Private jet on the apron at dusk',
    title: 'Private Jets',
    tagline: 'Global range, complete cabin control, absolute discretion.',
    lead:
      'From heavy jets for intercontinental travel to super-mids for regional hops, we align aircraft to your schedule, entourage, and in-flight requirements — one brief, one point of contact, end to end.',
    highlights: [
      { label: 'Cabin & routing', text: 'Tailored layouts, meeting space, and sleep systems matched to the mission.' },
      { label: 'Crew & compliance', text: 'Vetted operators, slot coordination, and documentation handled for you.' },
      { label: 'On-ground continuity', text: 'Seamless links to ground transport, security, and hospitality teams.' },
    ],
    footnote: 'Typical use: principal travel, board movements, and time-critical itineraries where commercial schedules do not fit.',
  },
  light: {
    image: `${AIR_IMG}/Light-aircrafts.webp`,
    imageAlt: 'Light aircraft in flight over coastline',
    title: 'Light Aircraft',
    tagline: 'Agile, efficient, and ideal for short sectors and special access.',
    lead:
      'Turboprops and light jets for regional hops, island-hops, and routes where a smaller footprint unlocks the right airfield. We coordinate crew, maintenance windows, and last-minute changes without drama.',
    highlights: [
      { label: 'Access & speed', text: 'Shorter runways, faster turns, and flexible timing for tight programmes.' },
      { label: 'Cost clarity', text: 'Transparent options when a lighter platform is the smarter choice for the leg.' },
      { label: 'Bespoke add-ons', text: 'Cargo for gear, med-evac ready configs, and specialist crew when required.' },
    ],
    footnote: 'Well suited to island archipelagos, multi-stop day trips, and connections where a heavy jet is simply more metal than the mission needs.',
  },
}

const VIP = '/images/services/vip-service'

/** Full “page” section when Light Aircraft is selected — all copy is data-driven for easy updates. */
export const airLightExperiences = {
  headline: 'Light Aircraft Experiences',
  introHook:
    'Have you ever imagined taking control of an aircraft and discovering the world from an entirely new perspective?',
  intro: [
    'Light aircraft offer the perfect gateway into aviation, combining precision handling, responsiveness, and an immersive cockpit experience that transforms every flight into something truly unforgettable.',
    'With Luxury Sky / Global Wings, you can explore a carefully curated selection of light aircraft flying experiences across breathtaking destinations in Cyprus, Greece, and beyond. Each experience is designed to inspire confidence, excitement, and a genuine passion for flight.',
    'Whether you are looking for a once-in-a-lifetime adventure, a unique gift, or the first step toward earning your Private Pilot Licence — your journey begins here.',
  ],
  journeys: [
    {
      title: 'Scenic Air Tours Over Cyprus',
      paragraphs: [
        'Discover Cyprus from a spectacular bird’s-eye view.',
        'Our scenic air tours reveal the island’s most stunning coastlines, historic landmarks, and untouched landscapes — many of which can only be truly appreciated from the sky.',
        'This extraordinary experience allows you to explore the island in a completely unique way, combining discovery, relaxation, and the thrill of aviation into one seamless journey.',
      ],
    },
    {
      title: 'Day Trip Adventures to Beirut',
      paragraphs: [
        'For those seeking something truly distinctive, we offer exclusive light aircraft journeys to the vibrant city of Beirut.',
        'Immerse yourself in rich culture, authentic cuisine, stylish shopping districts, and traditional Middle Eastern experiences. From iconic natural attractions like the Jeita Grotto to lively cafés and historic neighbourhoods, Beirut promises unforgettable memories — made even more special by arriving in the comfort and exclusivity of private aviation.',
      ],
    },
    {
      title: 'Weekend Escapes to the Greek Islands',
      paragraphs: [
        'Our light aircraft fleet provides effortless access to the stunning Greek Islands, giving you the freedom to plan spontaneous weekend escapes or extended relaxing retreats.',
        'Whether it’s a romantic getaway, a family holiday, or an adventure with friends, flying privately between islands creates a seamless and elevated travel experience defined by flexibility, privacy, and breathtaking scenery.',
        'All journeys are fully tailored to your preferences, allowing you to select the ideal aircraft from our curated fleet.',
      ],
    },
  ],
  flightSchool: {
    title: 'Learn to Fly with Luxury Sky',
    paragraphs: [
      'For those who dream of mastering the skies, Luxury Sky Flying School offers the perfect place to begin.',
      'Located near Larnaca International Airport, our academy provides high-quality training led by experienced and approachable instructors, within a welcoming and dynamic aviation environment.',
      'Building on Cyprus’ rich aviation heritage, Luxury Sky delivers a modern, inspiring learning experience in one of the region’s most beautiful flying locations.',
      'Whether your goal is personal achievement, professional development, or simply the joy of flying, we offer the expertise, environment, and passion to guide your journey.',
    ],
  },
  qualifications: {
    title: 'Flying Courses & Qualifications',
    lead: 'We offer a range of professional training programmes, including:',
    items: [
      'PPL – Private Pilot Licence',
      'LAPL – Light Aircraft Pilot Licence',
      'IR(R) – Instrument Rating (Restricted)',
      'Flying Companion Courses',
      'Tailwheel Conversion Training',
      'Aerobatic Rating',
    ],
  },
  trialAndMembership: {
    title: 'Trial Flights & Membership Benefits',
    paragraphs: [
      'Experience the thrill of flying with our introductory lessons, available as 30-minute or 60-minute sessions — perfect for personal enjoyment or as a premium gift.',
      'Training and trial flights are conducted on trusted aircraft such as Cessna 172, Diamond, and Tecnam, ideal for both beginners and advancing pilots.',
    ],
    membershipLead: 'For frequent flyers, we offer:',
    membershipItems: [
      'Solo aircraft hire options',
      'Exclusive membership programmes',
      'Preferential flight rates and added flexibility',
    ],
  },
  closing: {
    title: 'Start Your Journey',
    body: 'To learn more or to arrange your experience, contact us today and take the first step into the world of aviation.',
    buttonLabel: 'Contact us',
  },
  gallery: [
    {
      src: `${VIP}/Aerophotography.webp`,
      alt: 'Aerial view from light aircraft over coastline',
      caption: 'Coastal passes',
    },
    {
      src: `${AIR_IMG}/Light-aircrafts.webp`,
      alt: 'Light aircraft in flight',
      caption: 'Island & short sectors',
    },
    {
      src: `${VIP}/vip-tour.webp`,
      alt: 'VIP scenic air tour',
      caption: 'Signature air tours',
    },
    {
      src: `${VIP}/Vip-tour-around-the-Island.webp`,
      alt: 'Aircraft on tour over the island',
      caption: 'Exclusive island routes',
    },
    {
      src: `${VIP}/air-services.webp`,
      alt: 'Aviation and concierge coordination',
      caption: 'Door-to-cockpit coordination',
    },
  ] as const,
}

/** Full section when Private Jets is selected — in-flight experience story + gallery. */
export const airJetsInFlight = {
  headline: 'Private Jet In-Flight Services',
  intro: [
    'Luxury Sky / Global Wings elevates the private aviation experience through refined cabin design and exceptional onboard services. Stepping aboard a Luxury Sky / Global Wings aircraft feels like entering an elegant residence in the sky, where every element is thoughtfully curated to deliver superior comfort, efficiency and relaxation throughout the journey.',
  ],
  quote:
    'At the core of the service delivered by Luxury Sky / Global Wings Cabin Hosts is genuine attentiveness and a deep commitment to excellence. Our goal is to ensure you feel completely at ease on board — every request is handled with discretion and precision.',
  /** Blog-style articles: each paragraph is followed by its own image (paths easy to swap). */
  sections: [
    {
      title: 'A home above the clouds',
      segments: [
        {
          paragraph:
            'The distinctive cabin concept of Luxury Sky / Global Wings, harmonised across the entire fleet, welcomes travellers worldwide with a warm yet sophisticated ambience.',
          image: { src: `${VIP}/private-jet.webp`, alt: 'Private jet cabin interior with refined seating' },
          caption: 'Cabin ambience',
        },
        {
          paragraph:
            'Passengers can stay productive within a fully equipped executive workspace or unwind in a serene family-friendly environment. Each cabin is designed to accommodate diverse travel needs with effortless flexibility.',
          image: { src: `${AIR_IMG}/private-jets.webp`, alt: 'Private jet on the apron, ready for departure' },
          caption: 'Your aircraft, your rhythm',
        },
      ],
    },
    {
      title: 'An elite aviation team',
      segments: [
        {
          paragraph:
            'To guarantee consistently outstanding service, every Luxury Sky / Global Wings flight is operated by a dedicated Cabin Host alongside two highly qualified pilots.',
          image: { src: `${VIP}/vip-hero.webp`, alt: 'VIP aviation and crew service' },
          caption: 'Crew & hospitality',
        },
        {
          paragraph:
            'Flight crews specialise in a single aircraft type, ensuring exceptional familiarity and instinctive operational performance. Pilots undergo recurrent training twice annually, while Cabin Crew receive advanced hospitality and safety instruction from globally recognised institutions.',
          image: { src: `${VIP}/air-services.webp`, alt: 'Aviation operations and coordination' },
          caption: 'Training & standards',
        },
      ],
    },
    {
      title: 'Exclusive private dining',
      segments: [
        {
          paragraph:
            'The Private Dining specialists of Luxury Sky / Global Wings curate bespoke culinary experiences on board, offering an extensive range of gourmet options.',
          image: { src: `${VIP}/wedding-package.webp`, alt: 'Elegant dining and celebration setting' },
          caption: 'On-board dining',
        },
        {
          paragraph:
            'From signature menus developed by internationally acclaimed chefs and selections sourced from Michelin-starred partner restaurants, to personalised meal plans designed by in-house nutrition experts or your preferred comfort dishes — every detail is tailored to your tastes.',
          image: { src: `${VIP}/luxury-travel.webp`, alt: 'Luxury travel and curated experiences' },
          caption: 'Menus tailored to you',
        },
      ],
    },
    {
      title: 'Wine above the world',
      segments: [
        {
          paragraph:
            'Inspired by the pursuit of the perfect glass of wine at cruising altitude, Luxury Sky / Global Wings presents a carefully crafted Wine Program featuring exceptional labels selected for their optimal performance in flight.',
          image: { src: `${VIP}/cazino.webp`, alt: 'Champagne and premium beverages' },
          caption: 'Wine at altitude',
        },
        {
          paragraph:
            'Drawn from renowned vineyards across the globe, these wines are chosen to complement the unique sensory conditions experienced at high altitude.',
          image: { src: `${VIP}/vip-mercendes-tour.webp`, alt: 'Luxury lifestyle and refined service' },
          caption: 'Global cellar selection',
        },
      ],
    },
    {
      title: 'Young traveller experiences',
      segments: [
        {
          paragraph:
            'Luxury Sky / Global Wings offers one of the most comprehensive aviation programs designed specifically for younger passengers.',
          image: { src: `${VIP}/vip-tour.webp`, alt: 'Family and VIP travel experiences' },
          caption: 'Young guests',
        },
        {
          paragraph:
            'Combining immersive entertainment with educational enrichment, each journey can be customised to reflect the child’s age, interests and imagination — transforming travel into a memorable adventure.',
          image: { src: `${VIP}/Vip-tour-around-the-Island.webp`, alt: 'Scenic tour from the air' },
          caption: 'Adventure in the sky',
        },
      ],
    },
    {
      title: 'Pet travel reimagined',
      segments: [
        {
          paragraph:
            'Developed in collaboration with veterinary professionals, grooming specialists, nutritionists and behavioural experts, the Luxury Sky / Global Wings Pet Travel Program ensures animals travel safely and comfortably.',
          image: { src: `${VIP}/luxury-villa.webp`, alt: 'Comfort and care' },
          caption: 'Comfort for companions',
        },
        {
          paragraph:
            'Every aspect is designed to address the practical and emotional needs of travelling with pets.',
          image: { src: `${VIP}/limouzine.webp`, alt: 'Seamless ground and air travel' },
          caption: 'Door-to-door peace of mind',
        },
      ],
    },
    {
      title: 'Wellness in flight',
      segments: [
        {
          paragraph:
            'Cabin environment, rest programmes and discreet attention to how you feel at altitude are woven into every itinerary. From sleep-friendly scheduling and cabin pressurisation considered for recovery to light movement and hydration guided by the crew, the aim is for you to step off the aircraft restored — ready for what comes next.',
          image: { src: `${VIP}/Aerophotography.webp`, alt: 'Calm skies and journey above the clouds' },
          caption: 'Arrive restored',
        },
      ],
    },
  ] as const,
  gallery: [
    {
      src: `${AIR_IMG}/private-jets.webp`,
      alt: 'Private jet on the apron at dusk',
      caption: 'Fleet & dispatch',
    },
    {
      src: `${VIP}/private-jet.webp`,
      alt: 'Private jet cabin interior and seating',
      caption: 'Cabin & residence in the sky',
    },
    {
      src: `${VIP}/vip-hero.webp`,
      alt: 'VIP aviation experience',
      caption: 'Door-to-cockpit continuity',
    },
    {
      src: `${VIP}/luxury-travel.webp`,
      alt: 'Luxury travel and concierge',
      caption: 'Journey, elevated',
    },
  ] as const,
}
