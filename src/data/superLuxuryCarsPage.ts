/** Super & Luxury Cars — VIP mobility fleet */
const BASE = '/images/services/vip-service'
const CARS = `${BASE}/luxury-cars`
const MASERATI = `${CARS}/maserati`
const PORSCHE = `${CARS}/porche`
const LAMBORGHINI = `${CARS}/lamborghini`
const LAMBORGHINI_URUS = `${CARS}/lamborghini-urus`
const MERCEDES = `${CARS}/mercendez`

export const SUPER_LUXURY_CARS_HERO = `${BASE}/lamporghini.webp`

export type SuperLuxuryCarCard = {
  id: string
  kicker: string
  title: string
  image: string
  imageAlt: string
  /** Detail route — set when a dedicated car page exists */
  to?: string
}

export type SuperLuxuryCarDetail = {
  slug: string
  eyebrow: string
  title: string
  tagline: string
  heroImage: string
  gallery: readonly string[]
  panelEyebrow: string
  panelTitle: string
  lead: string
  facts: readonly { title: string; body: string }[]
  paragraphs: readonly string[]
  closing: string
  ctaLabel: string
  vipSubService: string
}

/**
 * Fleet cards on `/services/super-luxury-cars`.
 * Set `to` when dedicated detail pages are built.
 */
export const superLuxuryCarCards: SuperLuxuryCarCard[] = [
  {
    id: 'maserati',
    kicker: 'Vehicle 01',
    title: 'Maserati Ghibli Luxury Package',
    image: `${MASERATI}/maserati-cover.webp`,
    imageAlt: 'Maserati Ghibli Luxury Package available through Komodromos VIP Services',
    to: '/services/super-luxury-cars/maserati-ghibli',
  },
  {
    id: 'porsche',
    kicker: 'Vehicle 02',
    title: 'Porsche 718 Boxster S',
    image: `${PORSCHE}/porche-7.webp`,
    imageAlt: 'Porsche 718 Boxster S available through Komodromos VIP Services',
    to: '/services/super-luxury-cars/porsche-718-boxster-s',
  },
  {
    id: 'lamborghini',
    kicker: 'Vehicle 03',
    title: 'Lamborghini Huracán',
    image: `${LAMBORGHINI}/lamborghini-cover.png`,
    imageAlt: 'Lamborghini Huracán available through Komodromos VIP Services',
    to: '/services/super-luxury-cars/lamborghini-huracan',
  },
  {
    id: 'lamborghini-urus',
    kicker: 'Vehicle 04',
    title: 'Lamborghini Urus',
    image: `${LAMBORGHINI_URUS}/lamborghini-urus-cover.jpg`,
    imageAlt: 'Lamborghini Urus available through Komodromos VIP Services',
    to: '/services/super-luxury-cars/lamborghini-urus',
  },
  {
    id: 'mercedes-s-class',
    kicker: 'Vehicle 05',
    title: 'Mercedes-Benz S-Class',
    image: `${MERCEDES}/mercendez-cover.png`,
    imageAlt: 'Mercedes-Benz S-Class available through Komodromos VIP Services',
    to: '/services/super-luxury-cars/mercedes-s-class',
  },
]

export const maseratiGhibliDetail: SuperLuxuryCarDetail = {
  slug: 'maserati-ghibli',
  eyebrow: 'Super & Luxury Cars',
  title: 'Maserati Ghibli Luxury Package',
  tagline: 'Where Luxury Meets Italian Excellence.',
  heroImage: `${MASERATI}/maserati-cover.webp`,
  gallery: [
    `${MASERATI}/maserati-1.webp`,
    `${MASERATI}/maserati-2.webp`,
    `${MASERATI}/maserati-3.webp`,
    `${MASERATI}/maserati-4.webp`,
    `${MASERATI}/maserati-5.webp`,
    `${MASERATI}/maserati-6.webp`,
    `${MASERATI}/maserati-7.webp`,
    `${MASERATI}/maserati-8.webp`,
    `${MASERATI}/maserati-9.webp`,
  ],
  panelEyebrow: 'Italian luxury saloon',
  panelTitle: 'Maserati Ghibli Luxury Package',
  lead:
    'Elevate every journey with the Maserati Ghibli Luxury Package—a perfect expression of Italian craftsmanship, refined elegance, and dynamic performance. Designed for those who appreciate the finer things in life, this exceptional luxury saloon transforms every drive into a first-class experience.',
  facts: [
    {
      title: 'Craftsmanship',
      body: 'Italian design language with refined detailing and unmistakable Maserati character.',
    },
    {
      title: 'Cabin',
      body: 'Premium leather upholstery, sophisticated finishes, and outstanding comfort.',
    },
    {
      title: 'Performance',
      body: 'Smooth power and dynamic presence that turn every arrival into a statement.',
    },
    {
      title: 'Destinations',
      body: 'Ideal for business travel, celebrations, and discovering Cyprus and Greece.',
    },
  ],
  paragraphs: [
    'Relax in a beautifully appointed cabin featuring premium leather upholstery, sophisticated finishes, and outstanding comfort, while enjoying the smooth power and unmistakable character that only a Maserati can deliver.',
    "Whether you're travelling for business, celebrating a special occasion, or exploring the stunning landscapes of Cyprus and Greece, the Maserati Ghibli Luxury Package offers the perfect combination of prestige, comfort, and style.",
    'Every detail has been carefully selected to create an unforgettable experience, allowing you to travel in absolute luxury while turning heads wherever you go.',
  ],
  closing:
    'Experience the elegance of Italy. Discover Cyprus and Greece in uncompromising luxury with the Maserati Ghibli Luxury Package.',
  ctaLabel: 'Request this vehicle',
  vipSubService: 'Maserati Ghibli Luxury Package',
}

export const porsche718BoxsterDetail: SuperLuxuryCarDetail = {
  slug: 'porsche-718-boxster-s',
  eyebrow: 'Super & Luxury Cars',
  title: 'Porsche 718 Boxster S',
  tagline: 'Open-Top Thrill. Pure Porsche Character.',
  heroImage: `${PORSCHE}/porche-1-cover.webp`,
  gallery: [
    `${PORSCHE}/porche-3.webp`,
    `${PORSCHE}/porche-7.webp`,
    `${PORSCHE}/porche-5.webp`,
    `${PORSCHE}/porche-4.webp`,
    `${PORSCHE}/porche-2.webp`,
    `${PORSCHE}/porche-6.webp`,
  ],
  panelEyebrow: 'Mid-engine roadster',
  panelTitle: 'Porsche 718 Boxster S',
  lead:
    'Feel the freedom of the open road in the Porsche 718 Boxster S—an iconic mid-engine roadster that blends razor-sharp performance, refined craftsmanship, and unmistakable Porsche presence. Designed for those who seek excitement without compromising elegance, every drive becomes an experience to remember.',
  facts: [
    {
      title: 'Performance',
      body: 'Responsive mid-engine balance with the agile, precision-driven feel of a true Porsche roadster.',
    },
    {
      title: 'Design',
      body: 'Timeless proportions, distinctive lines, and a convertible silhouette that turns every arrival into a moment.',
    },
    {
      title: 'Cabin',
      body: 'Driver-focused cockpit with premium materials and a sport-luxury atmosphere.',
    },
    {
      title: 'Destinations',
      body: 'Perfect for coastal drives, special occasions, and discovering Cyprus and Greece in style.',
    },
  ],
  paragraphs: [
    'Lower the top and let the Mediterranean air complete the journey. The Boxster S delivers pure driving engagement—precise handling, confident acceleration, and the signature soundtrack that only Porsche can deliver—while remaining composed and comfortable for refined VIP travel.',
    'Whether you are celebrating a milestone, enjoying a private coastal escape, or arriving with presence for a special occasion, the Porsche 718 Boxster S offers the perfect balance of sport, prestige, and open-air freedom.',
    'Every detail has been curated to create an unforgettable experience—allowing you to travel with energy, elegance, and absolute distinction wherever the road leads.',
  ],
  closing:
    'Embrace the open road. Discover Cyprus and Greece in pure Porsche style with the 718 Boxster S.',
  ctaLabel: 'Request this vehicle',
  vipSubService: 'Porsche 718 Boxster S',
}

export const lamborghiniHuracanDetail: SuperLuxuryCarDetail = {
  slug: 'lamborghini-huracan',
  eyebrow: 'Super & Luxury Cars',
  title: 'Lamborghini Huracán',
  tagline: 'Unleash Pure Italian Passion.',
  heroImage: `${LAMBORGHINI}/lamborghini-cover.png`,
  gallery: [
    `${LAMBORGHINI}/lamborghini-1.png`,
    `${LAMBORGHINI}/lamborghini-2.png`,
    `${LAMBORGHINI}/lamborghini-3.png`,
    `${LAMBORGHINI}/lamborghini-4.png`,
    `${LAMBORGHINI}/lamborghini-5.png`,
    `${LAMBORGHINI}/lamborghini-6.png`,
    `${LAMBORGHINI}/lamborghini-7.png`,
    `${LAMBORGHINI}/lamborghini-8.png`,
    `${LAMBORGHINI}/lamborghini-9.png`,
    `${LAMBORGHINI}/lamborghini-10.png`,
    `${LAMBORGHINI}/lamborghini-11.png`,
    `${LAMBORGHINI}/lamborghini-12.png`,
    `${LAMBORGHINI}/lamborghini-13.png`,
    `${LAMBORGHINI}/lamborghini-14.png`,
    `${LAMBORGHINI}/lamborghini-15.png`,
    `${LAMBORGHINI}/lamborghini-16.png`,
    `${LAMBORGHINI}/lamborghini-17.png`,
    `${LAMBORGHINI}/lamborghini-18.png`,
    `${LAMBORGHINI}/lamborghini-19.png`,
    `${LAMBORGHINI}/lamborghini-20.png`,
  ],
  panelEyebrow: 'Italian supercar',
  panelTitle: 'Lamborghini Huracán',
  lead:
    "Experience the extraordinary behind the wheel of one of the world's most iconic supercars. The Lamborghini Huracán combines breathtaking Italian design, exceptional performance, and uncompromising engineering to deliver an unforgettable driving experience.",
  facts: [
    {
      title: 'The Sound',
      body: 'Formula 1-inspired Inconel exhaust — an exhilarating V10 soundtrack that turns heads wherever you go.',
    },
    {
      title: 'The Power',
      body: 'ECU performance upgrade unlocking an impressive 700 horsepower from the naturally aspirated V10.',
    },
    {
      title: 'The Drive',
      body: "Lamborghini's legendary all-wheel-drive system for outstanding grip, confidence, and precision.",
    },
    {
      title: 'Destinations',
      body: 'Coastlines of Cyprus, mountain roads of Greece, and arrivals at exclusive destinations.',
    },
  ],
  paragraphs: [
    'This exclusive Huracán has been enhanced with a bespoke performance package, featuring a Formula 1-inspired Inconel exhaust system that unleashes an exhilarating V10 soundtrack guaranteed to turn heads wherever you go. Complemented by a professionally engineered ECU performance upgrade, the naturally aspirated V10 now produces an impressive 700 horsepower, delivering explosive acceleration and razor-sharp responsiveness.',
    "Equipped with Lamborghini's legendary all-wheel-drive (AWD) system, the Huracán offers outstanding grip, confidence, and precision, allowing you to enjoy every twist and turn with complete control. Whether accelerating along the breathtaking coastlines of Cyprus, exploring the spectacular mountain roads of Greece, or arriving in style at an exclusive destination, every journey becomes an unforgettable adventure.",
    'Inside, the driver-focused cockpit blends premium craftsmanship with cutting-edge technology, creating the perfect balance between luxury and motorsport-inspired performance.',
    "This is more than a luxury supercar—it's a sensory experience that combines breathtaking speed, unmistakable sound, and world-class engineering.",
  ],
  closing:
    "Experience the thrilling sound of the Formula 1-inspired Inconel exhaust, unleash the power of 700 HP, and enjoy the confidence of Lamborghini's legendary all-wheel-drive system. Discover Cyprus and Greece in the ultimate expression of Italian performance and luxury.",
  ctaLabel: 'Request this vehicle',
  vipSubService: 'Lamborghini Huracán',
}

export const lamborghiniUrusDetail: SuperLuxuryCarDetail = {
  slug: 'lamborghini-urus',
  eyebrow: 'Super & Luxury Cars',
  title: 'Lamborghini Urus',
  tagline: "The World's First Super SUV. Unrivalled Power. Unmistakable Prestige.",
  heroImage: `${LAMBORGHINI_URUS}/lamborghini-urus-cover.jpg`,
  gallery: [
    `${LAMBORGHINI_URUS}/lamborghini-urus-1.jpg`,
    `${LAMBORGHINI_URUS}/lamborghini-urus-2.jpg`,
    `${LAMBORGHINI_URUS}/lamborghini-urus-3.jpg`,
    `${LAMBORGHINI_URUS}/lamborghini-urus-4.jpg`,
    `${LAMBORGHINI_URUS}/lamborghini-urus-5.jpg`,
    `${LAMBORGHINI_URUS}/lamborghini-urus-6.jpg`,
    `${LAMBORGHINI_URUS}/lamborghini-urus-7.jpg`,
    `${LAMBORGHINI_URUS}/lamborghini-urus-8.jpg`,
    `${LAMBORGHINI_URUS}/lamborghini-urus-9.jpg`,
    `${LAMBORGHINI_URUS}/lamborghini-urus-10.jpg`,
    `${LAMBORGHINI_URUS}/lamborghini-urus-11.jpg`,
    `${LAMBORGHINI_URUS}/lamborghini-urus-12.jpg`,
    `${LAMBORGHINI_URUS}/lamborghini-urus-13.jpg`,
    `${LAMBORGHINI_URUS}/lamborghini-urus-14.jpg`,
    `${LAMBORGHINI_URUS}/lamborghini-urus-15.jpg`,
    `${LAMBORGHINI_URUS}/lamborghini-urus-16.jpg`,
    `${LAMBORGHINI_URUS}/lamborghini-urus-17.jpg`,
    `${LAMBORGHINI_URUS}/lamborghini-urus-18.png`,
  ],
  panelEyebrow: 'Super SUV',
  panelTitle: 'Lamborghini Urus',
  lead:
    'Prepare to experience the extraordinary with the Lamborghini Urus—the world\'s most iconic Super SUV, where breathtaking performance meets uncompromising luxury. Designed to dominate every road, the Urus combines the soul of a Lamborghini supercar with the practicality and comfort of a luxury SUV, creating an experience unlike any other.',
  facts: [
    {
      title: 'Performance',
      body: 'Twin-turbocharged V8 with explosive acceleration, razor-sharp handling, and an unmistakable soundtrack.',
    },
    {
      title: 'Control',
      body: 'Advanced all-wheel-drive and multiple driving modes for grip, confidence, and precision on every road.',
    },
    {
      title: 'Cabin',
      body: 'Handcrafted premium leather, carbon fibre, cutting-edge technology, and exceptional comfort.',
    },
    {
      title: 'Destinations',
      body: 'Coastal drives, mountain roads, and exclusive arrivals across Cyprus and Greece.',
    },
  ],
  paragraphs: [
    'Powered by an exhilarating twin-turbocharged V8 engine, the Lamborghini Urus delivers explosive acceleration, razor-sharp handling, and an unmistakable soundtrack that commands attention wherever it goes. Every press of the accelerator unleashes pure adrenaline, transforming every journey into an unforgettable adventure.',
    "Its advanced all-wheel-drive system and multiple driving modes provide exceptional grip, confidence, and precision, allowing you to enjoy everything from scenic coastal drives to winding mountain roads with complete control. Whether you're exploring the breathtaking landscapes of Cyprus, discovering the beauty of Greece, or arriving at an exclusive event, the Urus guarantees a drive that is as thrilling as it is luxurious.",
    'Step inside the handcrafted cabin and discover a world of premium leather, carbon fibre, cutting-edge technology, and exceptional comfort. Every detail has been meticulously designed to create an atmosphere of elegance while maintaining the unmistakable spirit of Lamborghini.',
    "Bold, powerful, and instantly recognisable, the Lamborghini Urus is more than a luxury SUV—it's a statement of success, confidence, and uncompromising performance.",
  ],
  closing:
    'Experience supercar performance with everyday versatility. Discover Cyprus and Greece behind the wheel of the Lamborghini Urus and redefine what luxury driving truly means with Komodromos Group Luxury Car Rental.',
  ctaLabel: 'Request this vehicle',
  vipSubService: 'Lamborghini Urus',
}

export const mercedesSClassDetail: SuperLuxuryCarDetail = {
  slug: 'mercedes-s-class',
  eyebrow: 'Super & Luxury Cars',
  title: 'Mercedes-Benz S-Class',
  tagline: 'The Benchmark of Executive Luxury.',
  heroImage: `${MERCEDES}/mercendez-cover.png`,
  gallery: [
    `${MERCEDES}/mercedes-s-class-1.png`,
    `${MERCEDES}/mercedes-s-class-2.png`,
    `${MERCEDES}/mercedes-s-class-3.png`,
    `${MERCEDES}/mercedes-s-class-4.png`,
    `${MERCEDES}/mercedes-s-class-5.png`,
    `${MERCEDES}/mercedes-s-class-6.png`,
    `${MERCEDES}/mercedes-s-class-8.png`,
    `${MERCEDES}/mercedes-s-class-9.png`,
    `${MERCEDES}/mercedes-s-class-10.png`,
    `${MERCEDES}/mercedes-s-class-11.png`,
    `${MERCEDES}/mercedes-s-class-12.png`,
    `${MERCEDES}/mercedes-s-class-13.png`,
    `${MERCEDES}/mercedes-s-class-14.png`,
    `${MERCEDES}/mercedes-s-class-15.png`,
    `${MERCEDES}/mercedes-s-class-17.png`,
    `${MERCEDES}/mercedes-s-class-18.png`,
    `${MERCEDES}/mercedes-s-class-19.png`,
    `${MERCEDES}/mercedes-s-class-20.png`,
    `${MERCEDES}/mercedes-s-class-21.png`,
    `${MERCEDES}/mercedes-s-class-23.png`,
    `${MERCEDES}/mercedes-s-class-25.png`,
    `${MERCEDES}/mercedes-s-class-26.png`,
  ],
  panelEyebrow: 'Flagship luxury saloon',
  panelTitle: 'Mercedes-Benz S-Class',
  lead:
    'Arrive with quiet authority in the Mercedes-Benz S-Class—the definitive luxury saloon for discerning travellers who expect refined comfort, advanced technology, and impeccable presence. Designed as the flagship of executive motoring, every journey feels composed, private, and first class.',
  facts: [
    {
      title: 'Presence',
      body: 'Iconic Mercedes design with commanding proportions and an unmistakable executive silhouette.',
    },
    {
      title: 'Cabin',
      body: 'A sanctuary of premium materials, exceptional seating comfort, and meticulously crafted finishes.',
    },
    {
      title: 'Comfort',
      body: 'Smooth, quiet travel ideal for business transfers, celebrations, and long-distance VIP journeys.',
    },
    {
      title: 'Destinations',
      body: 'Perfect for Cyprus and Greece—airport arrivals, coastal routes, and exclusive events.',
    },
  ],
  paragraphs: [
    'Step into a cabin engineered for serenity. Soft lighting, spacious seating, and sophisticated detailing create an atmosphere where work, conversation, or quiet relaxation all feel effortless—transforming every transfer into a premium experience.',
    'Whether you are travelling for business, celebrating a special occasion, or exploring the landscapes of Cyprus and Greece in complete comfort, the S-Class delivers the perfect balance of prestige, discretion, and modern luxury.',
    'Every detail has been curated for clients who value composure over spectacle—allowing you to travel with elegance, confidence, and absolute refinement wherever the road leads.',
  ],
  closing:
    'Experience the benchmark of executive luxury. Discover Cyprus and Greece in the Mercedes-Benz S-Class with Komodromos Group Luxury Car Rental.',
  ctaLabel: 'Request this vehicle',
  vipSubService: 'Mercedes-Benz S-Class',
}

