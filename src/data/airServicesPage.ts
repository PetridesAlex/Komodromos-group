/** Images in `public/images/services/vip-service/air-services/` */
const AIR_IMG = '/images/services/vip-service/air-services'

export type AirCategoryId = 'jets' | 'light'

/** Private jet fleet showcase (three aircraft) — `/services/air/private-jets/fleet` */
export const airPrivateJetFleetPath = '/services/air/private-jets/fleet' as const

export const airPrivateJetFleet = {
  eyebrow: 'Luxury Sky · Global Wings',
  title: 'Private jet fleet',
  lead:
    'Three aircraft families within our private jet programme. Layouts, range and availability are matched to every mission — from efficient regional legs to intercontinental comfort.',
  aircraft: [
    {
      id: 'challenger-604',
      name: 'Bombardier Challenger 604 / 605',
      segment: 'Super-midsize',
      description:
        'Stand-up cabin, generous luggage volume and a refined executive interior — a favourite for medium-haul charter, board moves and clients who value space to work and rest in the air.',
      image: `${AIR_IMG}/private-jet-bombardier/Bombardier-challenger%20.webp`,
      imageAlt: 'Bombardier Challenger private jet on the ramp',
      highlights: ['Typically 8–12 passengers', 'Smooth ride, executive cabin zones'],
    },
    {
      id: 'learjet-60-xr',
      name: 'Bombardier Learjet 60 XR',
      segment: 'Midsize jet',
      description:
        'Fast climbs and efficient cruise performance with an agile cabin footprint — suited to tight schedules, shorter runways and principals who value pace between meetings.',
      image: `${AIR_IMG}/private-jet-bombardier-learjet-60-xr/on%20air.webp`,
      imageAlt: 'Bombardier Learjet 60 XR in flight',
      highlights: ['Responsive regional missions', 'Executive cabin comfort'],
    },
    {
      id: 'global-charter',
      name: 'World',
      segment: 'Heavy jet',
      description:
        'Flagship range and cabin volume for principals, larger entourages and overnight routes — built for intercontinental schedules with full discretion and onboard hospitality.',
      image: `${AIR_IMG}/private-jet-world/world-5.webp`,
      imageAlt: 'Private long-range jet exterior',
      highlights: ['Intercontinental capability', 'Flexible cabin layouts'],
    },
  ],
} as const

/** URL segment under `/services/air/…` for each category */
export const airCategoryPath: Record<AirCategoryId, string> = {
  jets: 'private-jets',
  light: 'light-aircraft',
}

export function airSlugToCategoryId(slug: string | undefined): AirCategoryId | null {
  if (!slug) return null
  const pair = (Object.entries(airCategoryPath) as [AirCategoryId, string][]).find(([, p]) => p === slug)
  return pair ? pair[0] : null
}

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
      src: `${VIP}/vip-tour.webp`,
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

/** Premium light-aircraft marketing page (`/services/air/light-aircraft`). */
export const airLightPremiumPage = {
  heroEyebrow: 'Luxury Sky · Global Wings',
  heroTitle: 'Light Aircraft Flying Experiences',
  heroSubtitle:
    'Exclusive air tours and pilot pathways across Cyprus, Greece and beyond — designed to inspire confidence, excitement and a genuine passion for flight.',
  introHeading: 'Light Aircraft Flying Experiences & Exclusive Air Tours',
  introParagraphs: [
    'Have you ever dreamed of taking control of an aircraft and discovering the world from an entirely new perspective? Light aircraft offer the perfect gateway into aviation, combining precision handling, responsiveness and an immersive cockpit experience that transforms every flight into a truly unforgettable adventure.',
    'With Luxury Sky / Global Wings, you can explore a carefully curated range of Light Aircraft Flying Experiences across breathtaking destinations in Cyprus, Greece and beyond, designed to inspire confidence, excitement and a genuine passion for flight. Whether you are seeking a once-in-a-lifetime experience, a unique gift for someone special, or the first step toward earning your Private Pilot Licence, your journey begins here.',
  ] as const,
  signatureLead:
    'From scenic Cyprus tours and regional adventures to structured training — each journey is tailored to you.',
  experienceCards: [
    {
      title: 'Scenic Air Tours Over Cyprus',
      description:
        'Experience the magic of Cyprus from a spectacular bird’s-eye perspective. Our scenic air tours reveal the island’s most captivating coastlines, historic landmarks and untouched landscapes — many of which can only truly be appreciated from the sky. This extraordinary aerial journey allows you to “travel” across the island in a completely unique way, blending discovery, relaxation and pure aviation thrill into one seamless experience.',
    },
    {
      title: 'Day Trip Adventures to Beirut',
      description:
        'For travellers seeking something truly distinctive, Luxury Sky / Global Wings offers exclusive light aircraft journeys to the vibrant city of Beirut, the cosmopolitan capital of Lebanon. Immerse yourself in rich culture, authentic cuisine, stylish shopping districts and traditional Middle Eastern experiences. From iconic natural attractions such as the famous Jeita Grotto stalactites to lively cafés and historic neighbourhoods, Beirut offers unforgettable memories — made even more special by arriving in the refined comfort and exclusivity of a private aviation experience.',
    },
    {
      title: 'Weekend Escapes to the Greek Islands',
      description:
        'Our light aircraft fleet enables effortless access to the stunning Greek Islands, offering you and your companions the freedom to plan spontaneous weekend getaways or extended relaxing retreats. Whether it’s a romantic escape, a family holiday or a friends’ adventure, flying privately between the islands creates a seamless and elevated travel experience defined by flexibility, privacy and spectacular scenery. All services are fully tailored to your preferences, allowing you to select the most suitable aircraft from our curated fleet.',
    },
    {
      title: 'Learn to Fly with Luxury Sky',
      description:
        'For aviation enthusiasts — or those seeking the thrill of mastering the skies — begin your pilot training journey with Luxury Sky Flying School. Based near Larnaca International Airport, our academy delivers high-quality instruction from experienced and approachable flight instructors within a dynamic and welcoming aviation community.',
    },
  ] as const,
  learnToFlySchool: {
    title: 'Learn to Fly with Luxury Sky',
    paragraphs: [
      'For aviation enthusiasts — or those simply seeking the thrill of mastering the skies — Luxury Sky Flying School provides an inspiring environment to begin your pilot training journey.',
      'Based near Larnaca International Airport, our academy delivers high-quality instruction from experienced and approachable flight instructors within a dynamic and welcoming aviation community.',
      'Building upon the proud heritage of historic flying traditions in Cyprus, Luxury Sky continues a legacy of excellence in pilot training, offering a modern yet authentic learning experience in one of the region’s most beautiful flying locations.',
      'Whether your motivation is to fulfil a lifelong dream, pursue a professional pathway or simply enjoy the joy of flying, Luxury Sky offers an exceptional combination of expertise, atmosphere and aviation passion.',
    ],
  } as const,
  coursesSectionTitle: 'Flying Courses & Qualifications',
  coursesLead:
    'We currently offer training programmes leading to the following certifications and specialised ratings:',
  courses: [
    'PPL – Private Pilot Licence',
    'LAPL – Light Aircraft Pilot Licence',
    'IR(R) – Instrument Rating (Restricted)',
    'Flying Companion Courses',
    'Tailwheel Conversion Training',
    'Aerobatic Rating',
  ] as const,
  trialSectionTitle: 'Trial Flights & Membership Benefits',
  trialParagraphs: [
    'Guests can enjoy introductory flying lessons lasting either 30 minutes or a full hour, with gift vouchers available for personal experiences or premium presents.',
    'Training and trial flights are also available on the trusted Cessna 172, Diamonds, Tecnams platform, ideal for both beginners and progressing student pilots.',
    'For more frequent flyers, we provide solo aircraft hire rates and an exclusive membership programme offering attractive flight discounts and enhanced flexibility.',
  ] as const,
  finalCta: {
    title: 'Arrange Your Experience',
    body: 'To learn more or arrange your experience, contact us — our team will be delighted to help.',
    buttonLabel: 'Contact us',
  },
} as const

/** Premium marketing content for Private Jet In-Flight Services (`/services/air/private-jets`). */
export const airPrivateJetInflightPremium = {
  eyebrow: 'Luxury Sky · Global Wings',
  title: 'Private Jet In-Flight Services',
  intro:
    'Luxury Sky / Global Wings elevates the private aviation experience through refined cabin design and exceptional onboard services. Stepping aboard feels like entering an elegant residence in the sky, where every detail is curated to deliver comfort, efficiency, privacy, and relaxation throughout the journey.',
  quote:
    'At the core of our onboard service is genuine attentiveness and a deep commitment to excellence. Our goal is to ensure every passenger feels completely at ease, with every request handled with discretion and precision.',
  services: [
    {
      title: 'A Home Above the Clouds',
      description:
        'A warm yet sophisticated cabin environment designed for both productivity and relaxation. Passengers can work from a fully equipped executive space or unwind in a serene family-friendly setting.',
    },
    {
      title: 'An Elite Aviation Team',
      description:
        'Every flight is operated by a dedicated Cabin Host and two highly qualified pilots. Our crews are trained to deliver exceptional safety, comfort, and discreet service on every journey.',
    },
    {
      title: 'Exclusive Private Dining',
      description:
        'Enjoy bespoke onboard dining, from gourmet menus and Michelin-inspired selections to personalised meals designed around your preferences, lifestyle, and comfort.',
    },
    {
      title: 'Wine Above the World',
      description:
        'A curated in-flight wine programme featuring exceptional labels selected to perform beautifully at cruising altitude and complement the onboard dining experience.',
    },
    {
      title: 'Young Traveller Experiences',
      description:
        'A tailored programme for younger passengers, combining entertainment, comfort, and educational touches to make every journey enjoyable and memorable.',
    },
    {
      title: 'Pet Travel Reimagined',
      description:
        'A thoughtful pet travel programme designed with comfort, safety, nutrition, and care in mind, allowing pets to travel in a calm and comfortable environment.',
    },
    {
      title: 'Wellness in Flight',
      description:
        'Wellbeing-focused onboard experiences created to support physical comfort, mental clarity, relaxation, and overall vitality throughout the journey.',
    },
    {
      title: 'High-Speed Connectivity in the Sky',
      description:
        'Stay connected with advanced onboard internet suitable for business communication, Ultra-HD streaming, and multi-device connectivity during flight.',
    },
  ] as const,
  discover: {
    title: 'Discover More',
    text: 'Luxury Sky / Global Wings provides flexible private aviation solutions designed around your travel lifestyle. Clients benefit from global aircraft availability, elevated onboard service, and access to super-midsize, long-range, and ultra-long-range business jets.',
    buttonLabel: 'Request Private Jet Information',
  },
  enquiry: {
    title: 'Private jet enquiry',
    subtitle: 'Share your plans and our team will respond with tailored options.',
  },
} as const

/** One image + copy row in Private Jets “in-flight” articles (`image` optional until assets exist). */
export type AirJetsInflightSegment = {
  paragraph: string
  caption?: string
  image?: { src: string; alt: string }
}

/** Full section when Private Jets is selected — in-flight experience story + gallery. */
export const airJetsInFlight = {
  headline: 'Private Jet In-Flight Services',
  intro: [
    'Luxury Sky / Global Wings elevates the private aviation experience through refined cabin design and exceptional onboard services. Stepping aboard a Luxury Sky / Global Wings aircraft feels like entering an elegant residence in the sky, where every element is thoughtfully curated to deliver superior comfort, efficiency and relaxation throughout the journey.',
  ],
  quote:
    'At the core of the service delivered by Luxury Sky / Global Wings Cabin Hosts is genuine attentiveness and a deep commitment to excellence. Our goal is to ensure you feel completely at ease on board — every request is handled with discretion and precision.',
  /** Blog-style articles; optional `image: { src, alt }` per segment when assets are ready (under `public/`). */
  sections: [
    {
      title: 'A home above the clouds',
      segments: [
        {
          paragraph:
            'The distinctive cabin concept of Luxury Sky / Global Wings, harmonised across the entire fleet, welcomes travellers worldwide with a warm yet sophisticated ambience.',
          caption: 'Cabin ambience',
        },
        {
          paragraph:
            'Passengers can stay productive within a fully equipped executive workspace or unwind in a serene family-friendly environment. Each cabin is designed to accommodate diverse travel needs with effortless flexibility.',
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
          caption: 'Crew & hospitality',
        },
        {
          paragraph:
            'Flight crews specialise in a single aircraft type, ensuring exceptional familiarity and instinctive operational performance. Pilots undergo recurrent training twice annually, while Cabin Crew receive advanced hospitality and safety instruction from globally recognised institutions.',
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
          caption: 'On-board dining',
        },
        {
          paragraph:
            'From signature menus developed by internationally acclaimed chefs and selections sourced from Michelin-starred partner restaurants, to personalised meal plans designed by in-house nutrition experts or your preferred comfort dishes — every detail is tailored to your tastes.',
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
          caption: 'Wine at altitude',
        },
        {
          paragraph:
            'Drawn from renowned vineyards across the globe, these wines are chosen to complement the unique sensory conditions experienced at high altitude.',
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
          caption: 'Young guests',
        },
        {
          paragraph:
            'Combining immersive entertainment with educational enrichment, each journey can be customised to reflect the child’s age, interests and imagination — transforming travel into a memorable adventure.',
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
          caption: 'Comfort for companions',
        },
        {
          paragraph:
            'Every aspect is designed to address the practical and emotional needs of travelling with pets.',
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
