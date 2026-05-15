const OUR_SERVICES_IMAGES = '/images/services/Astreal-Developers/our-services'

export const ASTREAL_OUR_SERVICES_HERO_IMAGE = `${OUR_SERVICES_IMAGES}/our-services-1.webp`

export type AstrealServiceBlock = {
  id: string
  title: string
  image: string
  imageAlt: string
  paragraphs: string[]
  tagline: string
}

export const ASTREAL_OUR_SERVICES_PAGE = {
  title: 'Our Services',
  heroImageAlt: 'Astreal Developers — comprehensive real estate services in Cyprus',
  missionLead:
    'Our mission is crystal clear: To surpass expectations and establish new standards within the real estate industry. We are dedicated to providing not only outstanding properties but also an unparalleled customer experience. Our team of skilled professionals is passionate about transforming your dreams into reality, crafting inspiring spaces that stand the test of time.',
  missionBody:
    "Explore our exquisite collection of properties for sale, nestled in the most breathtaking corners of the island. Cyprus real estate offers not only a comfortable living environment but also a wealth of opportunities for a profitable investment and thriving business ventures in the island's rapidly growing economy. With us, our clients can trust in expert guidance and a personalized approach tailored to their unique needs. Experience the difference with us—where your vision becomes a reality!",
  pillars: [
    {
      id: 'build',
      title: 'Build',
      image: `${OUR_SERVICES_IMAGES}/build-our-services.webp`,
      imageAlt: 'Construction and build services by Astreal Developers',
      paragraphs: [
        'We have the knowhow and technical experience, offer constant supervision which are updated. This results in a flawless materialization the projects.',
        'Through our knowledge in construction, we build structures that are durable and resistant to time, functional and made of high-quality materials.',
        'Our core philosophy is to deliver a structure made of high quality, is durable and of bespoken design.',
        'We assure the completion on schedule and at an affordable cost.',
        'Our goal is to provide better service and satisfaction to our clients.',
      ],
      tagline: 'Quality, durability, and delivery on schedule.',
    },
    {
      id: 'design',
      title: 'Design',
      image: `${OUR_SERVICES_IMAGES}/design-our-services.webp`,
      imageAlt: 'Interior and architectural design by Astreal Developers',
      paragraphs: [
        'Our work is extraordinary, imprinting in every single step of the selection, preparation, design and construction processes, our own in- depth knowledge of the idiosyncrasies of islandic life, our own experiences on numerous successful prime Cyprus projects and our own proactive, client-oriented approach.',
        'With an emphasis on quality, functionality, but also the search and use of new materials-technologies, we create standard building activities that act as points of reference.',
        "The project's design, architecture, furniture, fabrics, art, and accessories are all things we take into consideration. We constantly seek out fresh materials, techniques, and skilled craftsmen to craft furniture and interiors of unparalleled beauty.",
        'We pay close heed to every little thing.',
      ],
      tagline: 'We pay close heed to every little thing.',
    },
    {
      id: 'strategy',
      title: 'Strategy',
      image: `${OUR_SERVICES_IMAGES}/strategy-our-services.webp`,
      imageAlt: 'Real estate strategy and turnkey developments in Cyprus',
      paragraphs: [
        'We deliver to our clients, turnkey-ready to live in, fully furnished estates, luxury villas, where inspiration and sophisticated design meet with idyllic landscapes, bedazzling panoramic views, daring style and high-end innovative solutions, all serving the highest standards of functionality and comfort.',
      ],
      tagline: 'Simplicity is the ultimate sophistication',
    },
    {
      id: 'real-estate-advisory',
      title: 'Real Estate Advisory',
      image: `${OUR_SERVICES_IMAGES}/real-estate-advisory.webp`,
      imageAlt: 'Real estate advisory and investment guidance in Cyprus',
      paragraphs: [
        'Our clients can utilize the residential property market as an alternative investment strategy in their portfolios thanks to our real estate knowledge.',
        'Our clients have entire faith in us, knowing that we are in complete agreement with our investors and providing them with a competitive edge in the market.',
      ],
      tagline: 'Our knowledge and experience make the difference in the investment market',
    },
    {
      id: 'property-valuation',
      title: 'Property Valuation and Survey',
      image: `${OUR_SERVICES_IMAGES}/property-valuation-survey-our-services.webp`,
      imageAlt: 'Property valuation and survey services in Cyprus',
      paragraphs: [
        'Our team of certified valuers provide valuation services for commercial, residential and hotel properties to banks, property companies, developers, investors and fund managers.',
        'We are among the best in the market and ensure our valuation is current and market oriented.',
        'The combination of consistent updates from our research team and comprehensive advice from partners in investment and development , enable us to provide exceptional valuation advice.',
      ],
      tagline: 'We are among the best in the market.',
    },
    {
      id: 'development',
      title: 'Development',
      image: `${OUR_SERVICES_IMAGES}/development-our-services.webp`,
      imageAlt: 'Property development and redevelopment in Cyprus',
      paragraphs: [
        'Our many years of real estate knowledge help us recognize properties that have been neglected but have a lot of potentials.',
        'We design and build new structures, as well as modify existing ones through redevelopment to increase their value. We specialize in commercial and residential buildings ranging from apartment complexes to single family homes, hotels, office buildings, warehouses, and retail spaces.',
      ],
      tagline:
        'Apartment complexes, single family homes, hotels, office buildings, warehouses, and retail spaces.',
    },
    {
      id: 'project-management',
      title: 'Project Management',
      image: `${OUR_SERVICES_IMAGES}/our-services-1.webp`,
      imageAlt: 'Project management for residential and commercial developments',
      paragraphs: [
        'Our goal is to make the entire process seamless and stress free for our clients.',
        "We've got our development and project management chops down to handle all the tricky stuff and get each project done without much fuss.",
      ],
      tagline: 'We handle all the tricky stuff and get each project done without much fuss.',
    },
  ] satisfies AstrealServiceBlock[],
} as const
