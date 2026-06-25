const POOL_PAGE_ASSETS = '/images/services/swimming-pool-garden-services'

/** Pool Categories strip — dedicated art per type */
const POOL_CATEGORY_OVERFLOW = `${POOL_PAGE_ASSETS}/Overflow.webp`
const POOL_CATEGORY_SKIMMER = `${POOL_PAGE_ASSETS}/Skimmer.webp`
const POOL_CATEGORY_INFINITY = `${POOL_PAGE_ASSETS}/infinity.webp`

/** Pool internal linings — dedicated art */
const POOL_LINING_LINER = `${POOL_PAGE_ASSETS}/Liner.webp`
const POOL_LINING_MOSAIC = `${POOL_PAGE_ASSETS}/Mosaic.webp`
const POOL_LINING_CERAMIC = `${POOL_PAGE_ASSETS}/Ceramic.webp`
const POOL_CERAMIC_MOSAIC_GALLERY = `${POOL_PAGE_ASSETS}/ceramic-mosaic-images`

function poolCeramicMosaicImage(filename: string): string {
  return `${POOL_CERAMIC_MOSAIC_GALLERY}/${encodeURIComponent(filename)}`
}

const POOL_COOLING_HEATING_GALLERY = `${POOL_PAGE_ASSETS}/cooling-heating-images`

function poolCoolingHeatingImage(filename: string): string {
  return `${POOL_COOLING_HEATING_GALLERY}/${encodeURIComponent(filename)}`
}

const POOL_GARDENS_GALLERY = `${POOL_PAGE_ASSETS}/gardens`

function poolGardenImage(filename: string): string {
  return `${POOL_GARDENS_GALLERY}/${encodeURIComponent(filename)}`
}

const POOL_INFINITY_GALLERY = `${POOL_PAGE_ASSETS}/infinity-pool-images`

function poolInfinityImage(filename: string): string {
  return `${POOL_INFINITY_GALLERY}/${encodeURIComponent(filename)}`
}

const POOL_OVERFLOW_GALLERY = `${POOL_PAGE_ASSETS}/overflow-images`

function poolOverflowImage(filename: string): string {
  return `${POOL_OVERFLOW_GALLERY}/${encodeURIComponent(filename)}`
}

const POOL_OVERFLOW_GALLERY_FILES = [
  'IMG_7334.JPG',
  'IMG_7335.JPG',
  'IMG_7336.JPG',
  'IMG_7337.JPG',
  'IMG_7338.JPG',
  'IMG_7339.JPG',
  'IMG_7340 2.JPG',
  'IMG_7340.JPG',
  'IMG_7341.JPG',
  'IMG_7342.JPG',
  'IMG_7343.JPG',
  'IMG_7345.JPG',
  'IMG_7346.JPG',
  'IMG_7347.JPG',
  'IMG_7348.JPG',
  'IMG_7349.JPG',
  'IMG_7350.JPG',
  'IMG_7351.JPG',
  'IMG_7352.JPG',
  'IMG_7353.JPG',
  'IMG_7354.JPG',
  'IMG_7355.JPG',
  'IMG_7356.JPG',
] as const

const POOL_SKIMMER_GALLERY = `${POOL_PAGE_ASSETS}/skimmer-images`

function poolSkimmerImage(filename: string): string {
  return `${POOL_SKIMMER_GALLERY}/${encodeURIComponent(filename)}`
}

const POOL_SKIMMER_GALLERY_FILES = [
  'IMG_7357.JPG',
  'IMG_7358.JPG',
  'IMG_7359.JPG',
  'IMG_7360.JPG',
  'IMG_7361.JPG',
  'IMG_7362.JPG',
  'IMG_7363.JPG',
  'IMG_7364.JPG',
  'IMG_7365.JPG',
  'IMG_7366.JPG',
  'IMG_7367.JPG',
  'IMG_7368.JPG',
  'IMG_7369.JPG',
  'IMG_7370.JPG',
  'IMG_7371.JPG',
  'IMG_7372.JPG',
  'IMG_7373.JPG',
  'IMG_7374.JPG',
  'IMG_7375.JPG',
  'IMG_7376.JPG',
  'IMG_7377.JPG',
  'IMG_7378.JPG',
  'IMG_7379.JPG',
  'IMG_7380.JPG',
  'IMG_7381.JPG',
  'IMG_7382.JPG',
  'IMG_7383.JPG',
  'IMG_7384.JPG',
  'IMG_7385.JPG',
  'IMG_7386.JPG',
  'IMG_7387.JPG',
  'IMG_7388.JPG',
  'IMG_7389.JPG',
  'IMG_7390.JPG',
  'IMG_7391.JPG',
  'IMG_7392.JPG',
  'IMG_7393.JPG',
  'IMG_7394.JPG',
  'IMG_7395.JPG',
  'IMG_7396.JPG',
  'IMG_7397.JPG',
  'IMG_7398.JPG',
  'IMG_7399.JPG',
  'IMG_7400.JPG',
  'IMG_7401.JPG',
  'IMG_7402.JPG',
  'IMG_7403.JPG',
  'IMG_7404.JPG',
  'IMG_7405.JPG',
  'IMG_7406.JPG',
  'IMG_7407.JPG',
  'IMG_7408.JPG',
  'IMG_7409.JPG',
  'IMG_7410.JPG',
  'IMG_7411.JPG',
  'IMG_7412.JPG',
] as const

const POOL_LINER_GALLERY = `${POOL_PAGE_ASSETS}/Linner-images`

function poolLinerImage(filename: string): string {
  return `${POOL_LINER_GALLERY}/${encodeURIComponent(filename)}`
}

const POOL_LINER_GALLERY_FILES = [
  'IMG_7396.JPG',
  'IMG_7440.JPG',
  'IMG_7441.JPG',
  'IMG_7442.JPG',
  'IMG_7443.JPG',
  'IMG_7444.JPG',
  'IMG_7445.JPG',
  'IMG_7446.JPG',
  'IMG_7447.JPG',
  'IMG_7448.JPG',
  'IMG_7449.JPG',
  'IMG_7450.JPG',
  'IMG_7451.JPG',
  'IMG_7452.JPG',
  'IMG_7453.JPG',
  'IMG_7454.JPG',
  'IMG_7455.JPG',
  'IMG_7456.JPG',
  'IMG_7457.JPG',
  'IMG_7458.JPG',
  'IMG_7459.JPG',
  'IMG_7460.JPG',
  'IMG_7461.JPG',
  'IMG_7462.JPG',
  'IMG_7463.JPG',
  'IMG_7464.JPG',
  'IMG_7465.JPG',
  'IMG_7466.JPG',
  'IMG_7467.JPG',
  'IMG_7468.JPG',
  'IMG_7469.JPG',
  'IMG_7470.JPG',
  'IMG_7471.JPG',
  'IMG_7472.JPG',
  'IMG_7473.JPG',
  'IMG_7474.JPG',
  'IMG_7475.JPG',
  'IMG_7476.JPG',
  'IMG_7478.JPG',
  'IMG_7479.JPG',
  'IMG_7480.JPG',
  'IMG_7481.JPG',
  'IMG_7482.JPG',
  'IMG_7483.JPG',
  'IMG_7484.JPG',
  'IMG_7485.JPG',
  'IMG_7486 2.JPG',
  'IMG_7486.JPG',
  'IMG_7487.JPG',
  'IMG_7489.JPG',
  'IMG_7490.JPG',
  'IMG_7491.JPG',
  'IMG_7492.JPG',
  'IMG_7493.JPG',
  'IMG_7494.JPG',
  'IMG_7495.JPG',
  'IMG_7497.JPG',
  'IMG_7498.JPG',
  'IMG_7499.JPG',
  'IMG_7500.JPG',
  'IMG_7501.JPG',
  'IMG_7502.JPG',
  'IMG_7503.JPG',
  'IMG_7504.JPG',
] as const

/** Service, renovation & repair — dedicated art */
const POOL_REPAIR_FOUNTAIN = `${POOL_PAGE_ASSETS}/Fountain.webp`

const POOL_WATERFALL_GALLERY = `${POOL_PAGE_ASSETS}/waterfall-images`

function poolWaterfallImage(filename: string): string {
  return `${POOL_WATERFALL_GALLERY}/${encodeURIComponent(filename)}`
}

const POOL_WATERFALL_GALLERY_FILES = [
  '61nO+S+VKgL._AC_UF350,350_QL80_.jpg',
  '61rCs8Mg6KS._AC_SL1001_.jpg',
  '81Cd6stNrwL._AC_UF894,1000_QL80_.jpg',
  'Can-You-Add-a-Waterfall-or-Fountain-to-a-Glass-Wall-Pool.jpg',
  'H57adc8e2aac44db7a15218964b6f6105E.avif',
  'IMG_7385.JPG',
  'IMG_7389.JPG',
  'IMG_7415.JPG',
  'IMG_7419.JPG',
  'IMG_7438.JPG',
  'IMG_7439.JPG',
  'Swimming-pool-waterfalls.webp',
  'home-design.jpg',
  'infinity-edge-spill-2000.jpg',
  'vevor-pond-accessories-pqsbjpjswled60001v1-31_600.avif',
  'waterfall-water-feature.webp',
  'waterfall-winter-pool-care-feature.jpg',
] as const

const POOL_REPAIR_COOLING = `${POOL_PAGE_ASSETS}/Cooling%20and%20Heating.webp`
const POOL_REPAIR_BAR = `${POOL_PAGE_ASSETS}/Bar-stools.webp`
const POOL_BAR_STOOLS_GALLERY = `${POOL_PAGE_ASSETS}/bar-stools-images`
const POOL_REPAIR_SWIM_SPAS = `${POOL_PAGE_ASSETS}/Swim-Spas.webp`

const POOL_SWIMSPA_GALLERY = `${POOL_PAGE_ASSETS}/swimspa-images`

function poolSwimSpaImage(filename: string): string {
  return `${POOL_SWIMSPA_GALLERY}/${encodeURIComponent(filename)}`
}

const POOL_SWIMSPA_GALLERY_FILES = [
  'IMG_6845.JPG',
  'IMG_7416.JPG',
  'IMG_7417.JPG',
  'IMG_7418.JPG',
  'IMG_7420.JPG',
  'IMG_7421.JPG',
  'IMG_7422.JPG',
  'IMG_7423.JPG',
  'IMG_7425.JPG',
  'IMG_7426.JPG',
  'IMG_7428.JPG',
  'IMG_7429.JPG',
  'IMG_7430.JPG',
  'IMG_7431.JPG',
  'IMG_7432.JPG',
  'IMG_7433.JPG',
  'IMG_7434.JPG',
  'IMG_7435.JPG',
  'IMG_7436.JPG',
  'IMG_7437.JPG',
] as const

const POOL_REPAIR_SERVICE = `${POOL_PAGE_ASSETS}/Service-maintenance.webp`
const POOL_REPAIR_GARDEN = `${POOL_PAGE_ASSETS}/garden-services-swimming-pool.webp`

const POOL_SERVICE_MAINTENANCE_GALLERY = `${POOL_PAGE_ASSETS}/service-maintenance-images`

function poolServiceMaintenanceImage(filename: string): string {
  return `${POOL_SERVICE_MAINTENANCE_GALLERY}/${encodeURIComponent(filename)}`
}

const POOL_SERVICE_MAINTENANCE_GALLERY_FILES = [
  'DirtyGreenPOol.jpg',
  'GettyImages-874107750.jpg',
  'IMG_7495.JPG',
  'IMG_7496.JPG',
  'IMG_7538.JPG',
  'IMG_7539.JPG',
  'IMG_7540.JPG',
  'IMG_7541.JPG',
  'IMG_7542.JPG',
  'IMG_7543.JPG',
  'IMG_7544.JPG',
  'IMG_7545.JPG',
  'IMG_7546.JPG',
  'IMG_7547.JPG',
  'IMG_7548.JPG',
  'IMG_7549.JPG',
  'IMG_7550.JPG',
  'IMG_7551.JPG',
  'IMG_7552.JPG',
  'IMG_7553.JPG',
  'IMG_7554.JPG',
  'IMG_7555.JPG',
  'IMG_7556 2.JPG',
  'IMG_7558.JPG',
  'IMG_7559.JPG',
  'IMG_7560.JPG',
  'IMG_7561.JPG',
  'IMG_7562.JPG',
  'IMG_7563.JPG',
  'IMG_7564.JPG',
  'IMG_7565.JPG',
  'IMG_7566.JPG',
  'IMG_7567.JPG',
  'IMG_7568.JPG',
  'IMG_7569.JPG',
  'IMG_7570.JPG',
  'IMG_7571.JPG',
  'IMG_7572.JPG',
  'IMG_7573.JPG',
  'IMG_7574.JPG',
  'IMG_7575.JPG',
  'IMG_7576.JPG',
  'IMG_7577.JPG',
  'IMG_7578.JPG',
  'IMG_7579.JPG',
  'IMG_7580.JPG',
  'IMG_7581.JPG',
  'IMG_7584.JPG',
  'IMG_7585.JPG',
  'IMG_7586.JPG',
  'IMG_7587.JPG',
  'IMG_7588.JPG',
  'IMG_7589.JPG',
  'IMG_7590.JPG',
  'IMG_7591.JPG',
  'IMG_7592.JPG',
  'IMG_7593.JPG',
  'IMG_7594.JPG',
  'IMG_7595.JPG',
  'IMG_7596.JPG',
  'IMG_7597.JPG',
  'IMG_7598.JPG',
  'IMG_7599.JPG',
  'IMG_7600.JPG',
  'IMG_7601.JPG',
  'IMG_7602.JPG',
  'IMG_7603.JPG',
  'IMG_7604.JPG',
  'IMG_7605.JPG',
  'IMG_7606.JPG',
  'Pool-Maintenance.png',
  'Swimming-pool-service-and-equipment-with-chemical-cleaning-productsEDIT.jpg',
  'dirty-pool.jpg',
  'pool-cleaning-tools.jpg',
  'pool-maintenance-checklist.jpg',
  'shutterstock_638547673.jpg',
] as const

export type PoolGardenShowcaseItem = {
  id: string
  label: string
  imageSrc: string
}

export type PoolCategoryGalleryImage = {
  src: string
  alt: string
  caption?: string
}

export type PoolCategoryContentSection = {
  title: string
  paragraphs: readonly string[]
  media?: readonly PoolCategoryGalleryImage[]
  mediaLayout?: 'split' | 'duo' | 'trio' | 'quad'
}

export type PoolCategoryDetail = {
  eyebrow: string
  title: string
  subtitle: string
  imageAlt: string
  sections: readonly PoolCategoryContentSection[]
  highlights: readonly string[]
  galleryImages?: readonly PoolCategoryGalleryImage[]
  galleryLead?: string
}

/** Pool Categories — primary hydraulic / form types */
export const poolCategories: PoolGardenShowcaseItem[] = [
  {
    id: 'overflow',
    label: 'Overflow',
    imageSrc: POOL_CATEGORY_OVERFLOW,
  },
  {
    id: 'skimmer',
    label: 'Skimmer',
    imageSrc: POOL_CATEGORY_SKIMMER,
  },
  {
    id: 'infinity',
    label: 'Infinity',
    imageSrc: POOL_CATEGORY_INFINITY,
  },
]

export const POOL_CATEGORY_DETAILS: Partial<Record<string, PoolCategoryDetail>> = {
  overflow: {
    eyebrow: 'BlueSky Pools · Pool Systems',
    title: 'Overflow Swimming Pools',
    subtitle: 'The pinnacle of luxury pool design',
    imageAlt: 'Overflow swimming pool with seamless deck-level water line',
    galleryLead:
      'A curated portfolio of overflow swimming pools — deck-level water lines, perimeter channels, and luxury installations from BlueSky Pools.',
    galleryImages: [
      {
        src: POOL_CATEGORY_OVERFLOW,
        alt: 'Overflow swimming pool with seamless deck-level water line',
        caption: 'Overflow pool — deck-level water line',
      },
      ...POOL_OVERFLOW_GALLERY_FILES.map((file, index) => ({
        src: poolOverflowImage(file),
        alt: `BlueSky Pools overflow swimming pool project ${index + 1}`,
        caption: `Overflow project ${index + 1}`,
      })),
    ],
    highlights: [
      'Luxury villas & estates',
      'High-end hotels & resorts',
      'Wellness centres',
      'Premium architecture',
    ],
    sections: [
      {
        title: 'Luxury by design',
        mediaLayout: 'duo',
        media: [
          {
            src: poolOverflowImage('IMG_7336.JPG'),
            alt: 'Overflow swimming pool with deck-level perimeter channel',
            caption: 'Seamless deck-level water line',
          },
          {
            src: poolOverflowImage('IMG_7335.JPG'),
            alt: 'Luxury overflow pool with elegant perimeter channel',
            caption: 'Luxury overflow design',
          },
        ],
        paragraphs: [
          'Overflow swimming pools represent the pinnacle of luxury pool design, offering exceptional aesthetics, superior water circulation, and an unparalleled swimming experience. Designed with the water level perfectly aligned with the surrounding deck, these pools create a seamless visual effect that enhances the elegance of any residential, commercial, or hospitality project.',
          'Unlike conventional pool systems, overflow pools continuously collect surface water through a dedicated perimeter channel, ensuring the constant removal of debris, dust, oils, and other impurities. This advanced circulation process not only improves water quality but also maintains a cleaner, healthier, and more hygienic swimming environment.',
        ],
      },
      {
        title: 'Hydraulic excellence',
        mediaLayout: 'split',
        media: [
          {
            src: poolOverflowImage('IMG_7340.JPG'),
            alt: 'Overflow pool perimeter channel with crystal-clear water',
            caption: 'Perimeter channel circulation',
          },
        ],
        paragraphs: [
          'Beyond their striking appearance, overflow pools provide superior hydraulic performance and more efficient water treatment. The continuous circulation allows for better distribution of filtration and sanitation systems, resulting in crystal-clear water and enhanced operational efficiency. For this reason, overflow pools are widely regarded as the preferred choice for luxury villas, high-end hotels, exclusive resorts, wellness centres, and premium architectural developments.',
        ],
      },
      {
        title: 'The BlueSky Pools standard',
        mediaLayout: 'duo',
        media: [
          {
            src: poolOverflowImage('IMG_7345.JPG'),
            alt: 'Bespoke overflow pool construction by BlueSky Pools',
            caption: 'Bespoke overflow construction',
          },
          {
            src: poolOverflowImage('IMG_7350.JPG'),
            alt: 'Premium overflow pool with refined architectural finish',
            caption: 'Premium architectural finish',
          },
        ],
        paragraphs: [
          'At BlueSky Pools, we specialise in the design and construction of bespoke overflow swimming pools tailored to the unique requirements of each client and project. With over 25 years of industry experience, our team combines expert engineering, innovative construction techniques, and premium-quality materials to deliver outstanding results that meet the highest international standards.',
          'From initial consultation and technical planning to construction and final commissioning, we manage every stage of the project with meticulous attention to detail. Our commitment to quality, precision, and customer satisfaction ensures that every overflow pool we build delivers exceptional performance, long-term durability, and timeless visual appeal.',
        ],
      },
      {
        title: 'An investment in excellence',
        mediaLayout: 'quad',
        media: [
          {
            src: poolOverflowImage('IMG_7352.JPG'),
            alt: 'Overflow pool integrated with luxury outdoor landscape',
            caption: 'Landscape integration',
          },
          {
            src: poolOverflowImage('IMG_7354.JPG'),
            alt: 'High-end overflow pool installation detail',
            caption: 'High-end installation detail',
          },
          {
            src: poolOverflowImage('IMG_7355.JPG'),
            alt: 'Overflow swimming pool with pristine water clarity',
            caption: 'Crystal-clear overflow water',
          },
          {
            src: poolOverflowImage('IMG_7356.JPG'),
            alt: 'Completed BlueSky Pools overflow swimming pool project',
            caption: 'Completed overflow project',
          },
        ],
        paragraphs: [
          'Choosing an overflow swimming pool from BlueSky Pools is an investment in luxury, sophistication, and lasting value. It is a statement of architectural excellence that transforms any outdoor space into a stunning aquatic masterpiece while providing an extraordinary swimming experience for years to come.',
        ],
      },
    ],
  },
  skimmer: {
    eyebrow: 'BlueSky Pools · Pool Systems',
    title: 'Skimmer Swimming Pools',
    subtitle: 'Performance, reliability, and timeless practicality',
    imageAlt: 'Skimmer swimming pool with efficient surface water circulation',
    galleryLead:
      'A curated portfolio of skimmer swimming pools — residential installations, commercial projects, and reliable surface-circulation systems from BlueSky Pools.',
    galleryImages: [
      {
        src: POOL_CATEGORY_SKIMMER,
        alt: 'Skimmer swimming pool with efficient surface water circulation',
        caption: 'Skimmer pool — surface collection system',
      },
      ...POOL_SKIMMER_GALLERY_FILES.map((file, index) => ({
        src: poolSkimmerImage(file),
        alt: `BlueSky Pools skimmer swimming pool project ${index + 1}`,
        caption: `Skimmer project ${index + 1}`,
      })),
    ],
    highlights: [
      'Private villas & holiday homes',
      'Hotels & apartment complexes',
      'Leisure facilities',
      'Residential & commercial',
    ],
    sections: [
      {
        title: 'Performance & reliability',
        mediaLayout: 'duo',
        media: [
          {
            src: poolSkimmerImage('IMG_7358.JPG'),
            alt: 'Skimmer swimming pool with efficient surface water circulation',
            caption: 'Efficient surface circulation',
          },
          {
            src: poolSkimmerImage('IMG_7360.JPG'),
            alt: 'Residential skimmer swimming pool with crystal-clear water',
            caption: 'Reliable skimmer performance',
          },
        ],
        paragraphs: [
          'Skimmer swimming pools remain one of the most popular and practical pool solutions, offering an excellent balance of performance, reliability, aesthetics, and cost-effectiveness. Designed with a highly efficient water circulation system, skimmer pools provide crystal-clear water, easy maintenance, and long-term durability, making them an ideal choice for both residential and commercial applications.',
          'In a skimmer pool, the water level is positioned slightly below the pool edge, allowing specially designed skimmer units to continuously collect surface debris, leaves, dust, and other contaminants before they sink to the bottom. This process ensures effective water filtration, improved cleanliness, and a comfortable swimming environment throughout the year.',
        ],
      },
      {
        title: 'Simplicity & efficiency',
        mediaLayout: 'split',
        media: [
          {
            src: poolSkimmerImage('IMG_7375.JPG'),
            alt: 'Skimmer pool with practical and efficient water circulation design',
            caption: 'Simple, efficient skimmer design',
          },
        ],
        paragraphs: [
          'One of the greatest advantages of skimmer swimming pools is their simplicity and efficiency. With fewer mechanical components compared to overflow systems, skimmer pools are generally more economical to construct, operate, and maintain, while still delivering excellent water quality and reliable performance. Their versatile design makes them suitable for a wide range of properties, from private villas and holiday homes to hotels, apartment complexes, and leisure facilities.',
        ],
      },
      {
        title: 'Expert construction',
        mediaLayout: 'duo',
        media: [
          {
            src: poolSkimmerImage('IMG_7385.JPG'),
            alt: 'BlueSky Pools skimmer pool construction in progress',
            caption: 'Expert skimmer construction',
          },
          {
            src: poolSkimmerImage('IMG_7395.JPG'),
            alt: 'Premium skimmer pool integrated with landscape design',
            caption: 'Landscape integration',
          },
        ],
        paragraphs: [
          'At BlueSky Pools, we specialise in the design and construction of high-quality skimmer swimming pools tailored to the specific requirements of each project. With more than 25 years of industry experience, our team combines technical expertise, premium construction materials, and advanced engineering solutions to create pools that are both visually attractive and built to stand the test of time.',
          'Every project is approached with careful planning and attention to detail, ensuring optimal hydraulic performance, structural integrity, and seamless integration with the surrounding landscape and architecture. From concept and design through to construction and final handover, we are committed to delivering exceptional workmanship and outstanding customer satisfaction.',
        ],
      },
      {
        title: 'Lasting value',
        mediaLayout: 'quad',
        media: [
          {
            src: poolSkimmerImage('IMG_7400.JPG'),
            alt: 'Completed skimmer swimming pool with premium finish',
            caption: 'Premium skimmer finish',
          },
          {
            src: poolSkimmerImage('IMG_7405.JPG'),
            alt: 'Commercial skimmer pool installation by BlueSky Pools',
            caption: 'Commercial skimmer installation',
          },
          {
            src: poolSkimmerImage('IMG_7410.JPG'),
            alt: 'Luxury villa skimmer swimming pool project',
            caption: 'Luxury villa skimmer pool',
          },
          {
            src: poolSkimmerImage('IMG_7412.JPG'),
            alt: 'Completed BlueSky Pools skimmer swimming pool project',
            caption: 'Lasting value & enjoyment',
          },
        ],
        paragraphs: [
          'Choosing a skimmer swimming pool from BlueSky Pools means investing in a proven, efficient, and elegant pool solution backed by decades of experience and professional expertise. Our commitment to quality, innovation, and reliability ensures that your swimming pool will provide enjoyment, comfort, and lasting value for many years to come.',
        ],
      },
    ],
  },
  infinity: {
    eyebrow: 'BlueSky Pools · Pool Systems',
    title: 'Infinity Swimming Pools',
    subtitle: 'Vanishing-edge elegance for extraordinary views',
    imageAlt: 'Infinity swimming pool with vanishing edge overlooking the landscape',
    galleryLead:
      'A curated portfolio of infinity and vanishing-edge pools — horizon views, premium finishes, and architectural installations from BlueSky Pools.',
    galleryImages: [
      {
        src: POOL_CATEGORY_INFINITY,
        alt: 'Infinity swimming pool with vanishing edge overlooking the landscape',
        caption: 'Infinity edge — horizon view',
      },
      {
        src: poolInfinityImage('infinity-swimming-pool.jpg'),
        alt: 'Luxury infinity swimming pool with vanishing edge',
        caption: 'Luxury infinity pool',
      },
      {
        src: poolInfinityImage('tile-infinity-pool-1000w.jpg'),
        alt: 'Infinity pool with premium tile finish and overflow edge',
        caption: 'Premium tile infinity finish',
      },
      {
        src: poolInfinityImage('a.webp'),
        alt: 'Vanishing-edge pool overlooking scenic landscape',
        caption: 'Vanishing-edge vista',
      },
      {
        src: poolInfinityImage('hq720.jpg'),
        alt: 'Architectural infinity pool with seamless water line',
        caption: 'Architectural infinity design',
      },
    ],
    highlights: [
      'Sea & mountain vistas',
      'Luxury residences',
      'Boutique hotels & resorts',
      'Premium developments',
    ],
    sections: [
      {
        title: 'Architectural elegance',
        mediaLayout: 'duo',
        media: [
          {
            src: poolInfinityImage('hq720.jpg'),
            alt: 'Architectural infinity pool with seamless vanishing edge',
            caption: 'Endless horizon effect',
          },
          {
            src: poolInfinityImage('infinity-swimming-pool.jpg'),
            alt: 'Luxury infinity swimming pool with vanishing edge',
            caption: 'Spectacular vanishing edge',
          },
        ],
        paragraphs: [
          'Infinity swimming pools, also known as vanishing-edge or negative-edge pools, represent the ultimate expression of luxury, architectural elegance, and sophisticated outdoor living. Designed to create the breathtaking illusion that the water extends endlessly into the horizon, infinity pools seamlessly blend the swimming pool with the surrounding landscape, delivering a truly spectacular visual experience.',
          'Whether overlooking the sea, mountains, countryside, or a stunning city skyline, an infinity pool transforms any property into a remarkable architectural statement. The unique overflow edge creates a mirror-like water surface that enhances the sense of space, tranquillity, and exclusivity, making it one of the most sought-after features in luxury residences, boutique hotels, resorts, and premium developments worldwide.',
        ],
      },
      {
        title: 'Advanced engineering',
        mediaLayout: 'split',
        media: [
          {
            src: poolInfinityImage('tile-infinity-pool-1000w.jpg'),
            alt: 'Infinity pool with premium tile finish and overflow edge',
            caption: 'Precision overflow engineering',
          },
        ],
        paragraphs: [
          'Beyond their striking appearance, infinity pools are engineered with advanced hydraulic systems that continuously circulate water over the vanishing edge into a concealed catch basin before being filtered and returned to the pool. This process ensures exceptional water quality, improved circulation, and a consistently clean and inviting swimming environment.',
        ],
      },
      {
        title: 'Bespoke design & build',
        mediaLayout: 'duo',
        media: [
          {
            src: poolInfinityImage('a.webp'),
            alt: 'Vanishing-edge pool overlooking scenic landscape',
            caption: 'Bespoke infinity design',
          },
          {
            src: poolInfinityImage('hq720.jpg'),
            alt: 'Architectural infinity pool with seamless water line',
            caption: 'Seamless water line detail',
          },
        ],
        paragraphs: [
          'At BlueSky Pools, we specialise in the bespoke design and construction of luxury infinity swimming pools that combine innovative engineering with exceptional craftsmanship. With more than 25 years of experience in the swimming pool industry, we have successfully delivered high-end projects that meet the most demanding architectural and technical requirements.',
          'Every infinity pool is carefully designed to maximise the property\'s natural views while ensuring flawless functionality, structural integrity, and long-term performance. Our experienced team manages every aspect of the project, from concept development and engineering studies to construction, finishing, and commissioning, delivering a seamless experience from start to finish.',
        ],
      },
      {
        title: 'Premium materials & finishing',
        mediaLayout: 'split',
        media: [
          {
            src: poolInfinityImage('infinity-swimming-pool.jpg'),
            alt: 'Luxury infinity swimming pool with premium finishing',
            caption: 'Premium pool finishing',
          },
        ],
        paragraphs: [
          'We utilise only premium materials, advanced construction techniques, and state-of-the-art equipment to ensure that each infinity pool not only looks extraordinary but also performs to the highest standards for years to come. Attention to detail, precision engineering, and uncompromising quality are at the heart of everything we do.',
        ],
      },
      {
        title: 'A unique lifestyle experience',
        mediaLayout: 'duo',
        media: [
          {
            src: poolInfinityImage('tile-infinity-pool-1000w.jpg'),
            alt: 'Infinity pool tile detail at vanishing edge',
            caption: 'Timeless infinity elegance',
          },
          {
            src: poolInfinityImage('a.webp'),
            alt: 'Infinity pool blending with natural surroundings',
            caption: 'Landscape integration',
          },
        ],
        paragraphs: [
          'Choosing an infinity swimming pool from BlueSky Pools is more than adding a pool to your property — it is investing in a unique lifestyle experience. Combining breathtaking aesthetics, cutting-edge technology, and over 25 years of expertise, we create stunning aquatic masterpieces that elevate the beauty, value, and prestige of every project.',
        ],
      },
    ],
  },
}

export function poolCategoryDetailPath(categoryId: string): string {
  return `/services/pool/categories/${categoryId}`
}

export function getPoolCategoryDetail(categoryId: string | undefined) {
  if (!categoryId) return undefined
  const category = poolCategories.find((item) => item.id === categoryId)
  const detail = POOL_CATEGORY_DETAILS[categoryId]
  if (!category || !detail) return undefined
  return { category, detail }
}

export function getPoolCategoryGallery(
  category: PoolGardenShowcaseItem,
  detail: PoolCategoryDetail,
): readonly PoolCategoryGalleryImage[] {
  if (detail.galleryImages?.length) return detail.galleryImages
  return [{ src: category.imageSrc, alt: detail.imageAlt }]
}

export type PoolServiceRepairItem = {
  id: string
  label: string
  imageSrc: string
}

/** Service, renovation & repair — full capability matrix */
export const poolServiceRenovationRepair: PoolServiceRepairItem[] = [
  {
    id: 'fountains',
    label: 'Fountains',
    imageSrc: POOL_REPAIR_FOUNTAIN,
  },
  {
    id: 'cooling-and-heating',
    label: 'Cooling and heating',
    imageSrc: POOL_REPAIR_COOLING,
  },
  {
    id: 'swim-spas',
    label: 'Swim spas',
    imageSrc: POOL_REPAIR_SWIM_SPAS,
  },
  {
    id: 'bar-and-stools',
    label: 'Bar and stools',
    imageSrc: POOL_REPAIR_BAR,
  },
  {
    id: 'service-and-maintenance',
    label: 'Service and maintenance',
    imageSrc: POOL_REPAIR_SERVICE,
  },
  {
    id: 'garden-services',
    label: 'Garden services',
    imageSrc: POOL_REPAIR_GARDEN,
  },
]

/** Pool internal linings — finishes */
export const poolInternalLinings: PoolGardenShowcaseItem[] = [
  {
    id: 'liners',
    label: 'Liners',
    imageSrc: POOL_LINING_LINER,
  },
  {
    id: 'mosaic-and-ceramic',
    label: 'Mosaic & ceramic',
    imageSrc: POOL_LINING_MOSAIC,
  },
]

export const POOL_LINING_DETAILS: Partial<Record<string, PoolCategoryDetail>> = {
  liners: {
    eyebrow: 'BlueSky Pools · Pool Finishes',
    title: 'Swimming Pool Liners',
    subtitle: 'Waterproof protection with elegant, lasting style',
    imageAlt: 'Professionally installed reinforced swimming pool liner',
    galleryLead:
      'A curated portfolio of reinforced pool liner installations — colours, patterns, and flawless finishes from recent BlueSky Pools projects.',
    galleryImages: [
      {
        src: POOL_LINING_LINER,
        alt: 'Professionally installed reinforced swimming pool liner',
        caption: 'Pool liner — reinforced waterproof finish',
      },
      ...POOL_LINER_GALLERY_FILES.map((file, index) => ({
        src: poolLinerImage(file),
        alt: `BlueSky Pools liner installation project ${index + 1}`,
        caption: `Liner project ${index + 1}`,
      })),
    ],
    highlights: [
      'Reinforced waterproof liners',
      'Wide range of colours & finishes',
      'New pools & renovations',
      'Premium manufacturer materials',
    ],
    sections: [
      {
        title: 'Appearance & waterproof integrity',
        mediaLayout: 'duo',
        media: [
          {
            src: poolLinerImage('IMG_7440.JPG'),
            alt: 'Professionally installed reinforced swimming pool liner',
            caption: 'Reinforced waterproof finish',
          },
          {
            src: poolLinerImage('IMG_7475.JPG'),
            alt: 'Finished pool with solid blue liner, built-in steps, and sun shelf filled with clear water',
            caption: 'Smooth blue liner with integrated steps',
          },
        ],
        paragraphs: [
          'A professionally installed pool liner is one of the most effective ways to enhance the appearance, durability, and waterproof integrity of a swimming pool. Combining modern aesthetics with exceptional performance, reinforced pool liners provide a long-lasting, attractive, and cost-effective solution for both new swimming pool projects and pool renovations.',
        ],
      },
      {
        title: 'Premium design options',
        mediaLayout: 'split',
        media: [
          {
            src: poolLinerImage('IMG_7460.JPG'),
            alt: 'Empty pool lined with blue marble-pattern vinyl liner fitted over built-in steps',
            caption: 'Custom blue patterned liner finish',
          },
        ],
        paragraphs: [
          'At BlueSky Pools, we specialise in the supply and installation of premium-quality swimming pool liners that deliver outstanding waterproof protection while transforming the overall look and feel of your pool. Available in a wide range of colours, patterns, and finishes, liners offer endless design possibilities, allowing homeowners, hotels, resorts, and commercial facilities to achieve a customised and elegant aquatic environment.',
        ],
      },
      {
        title: 'Sealed performance & comfort',
        mediaLayout: 'duo',
        media: [
          {
            src: poolLinerImage('IMG_7480.JPG'),
            alt: 'Technician heat-welding a pool liner seam with a heat gun and hand roller',
            caption: 'Heat-welded liner seam detail',
          },
          {
            src: poolLinerImage('IMG_7500.JPG'),
            alt: 'Blue patterned liner with a return jet opening cut and aligned ready for sealing',
            caption: 'Fixture opening prepared in liner',
          },
        ],
        paragraphs: [
          'One of the key advantages of liner systems is their ability to provide a perfectly sealed waterproof surface. Resistant to UV exposure, chemicals, algae formation, and everyday wear, modern reinforced liners offer exceptional durability and are designed to withstand demanding operating conditions for many years. Their smooth finish also creates a comfortable swimming experience while simplifying cleaning and ongoing maintenance.',
        ],
      },
      {
        title: 'Renovation & transformation',
        mediaLayout: 'split',
        media: [
          {
            src: poolLinerImage('IMG_7495.JPG'),
            alt: 'Empty pool shell cleared of the old finish and prepared for a new liner installation',
            caption: 'Pool shell prepared for relining',
          },
        ],
        paragraphs: [
          'Liner installations are particularly popular for swimming pool renovations, allowing older pools to be completely transformed without extensive structural modifications. By upgrading to a high-quality reinforced liner, clients can restore the appearance of an ageing pool while improving waterproof performance and extending the life of the structure.',
        ],
      },
      {
        title: 'Expert installation & lasting value',
        mediaLayout: 'quad',
        media: [
          {
            src: poolLinerImage('IMG_7490.JPG'),
            alt: 'Blue patterned vinyl liner being fitted over corner steps during installation',
            caption: 'Liner formed over corner steps',
          },
          {
            src: poolLinerImage('IMG_7445.JPG'),
            alt: 'Rectangular pool interior finished with blue mosaic tiles at sunset',
            caption: 'Blue mosaic tile pool interior',
          },
          {
            src: poolLinerImage('IMG_7502.JPG'),
            alt: 'Blue mosaic tiles being applied inside a rooftop pool under construction',
            caption: 'Mosaic tile installation in progress',
          },
          {
            src: poolLinerImage('IMG_7504.JPG'),
            alt: 'Completed empty pool with dark blue mosaic tile interior and bench ledge',
            caption: 'Dark mosaic tile finish complete',
          },
        ],
        paragraphs: [
          'With over 25 years of experience in the swimming pool industry, BlueSky Pools has developed extensive expertise in the installation of reinforced liner systems for residential, commercial, and hospitality projects. Our skilled technicians ensure precise measurements, meticulous preparation, and flawless installation, delivering a perfect finish that combines aesthetics with long-term reliability. We work exclusively with trusted manufacturers and premium materials that meet the highest industry standards for quality, safety, and performance.',
          'From luxury villas and private residences to hotels, resorts, and large-scale developments, BlueSky Pools provides bespoke liner solutions tailored to the specific requirements of each project. Choosing BlueSky Pools for your liner installation means investing in a beautiful, durable, and professionally finished swimming pool that will maintain its appearance and performance for years to come.',
        ],
      },
    ],
  },
  'mosaic-and-ceramic': {
    eyebrow: 'BlueSky Pools · Pool Finishes',
    title: 'Mosaic & Ceramic Finishes',
    subtitle: 'Luxury craftsmanship and timeless pool elegance',
    imageAlt: 'Premium mosaic swimming pool finish with intricate tile detail',
    galleryLead:
      'A curated portfolio of mosaic and ceramic pool finishes — patterns, glass tiles, and premium surfaces from recent BlueSky Pools projects.',
    galleryImages: [
      {
        src: POOL_LINING_MOSAIC,
        alt: 'Premium mosaic swimming pool finish with intricate tile detail',
        caption: 'Mosaic finish — intricate patterns',
      },
      {
        src: POOL_LINING_CERAMIC,
        alt: 'Elegant ceramic swimming pool finish with refined surface',
        caption: 'Ceramic finish — refined surface',
      },
      {
        src: poolCeramicMosaicImage('swimming-pool-mosaic-tiles.jpg'),
        alt: 'Swimming pool lined with premium mosaic tiles',
        caption: 'Premium mosaic pool lining',
      },
      {
        src: poolCeramicMosaicImage('swimming-pool-mosaic-tiles-1.jpg'),
        alt: 'Close view of swimming pool mosaic tile installation',
        caption: 'Mosaic tile detail',
      },
      {
        src: poolCeramicMosaicImage('Custom-Blue-Glass-Mosaic-Tile-for-Pools-Spas.jpg'),
        alt: 'Custom blue glass mosaic tile for pools and spas',
        caption: 'Custom blue glass mosaic',
      },
      {
        src: poolCeramicMosaicImage('glass-pool-tiles-min.jpg'),
        alt: 'Glass mosaic pool tiles with luminous water reflection',
        caption: 'Glass mosaic pool tiles',
      },
      {
        src: poolCeramicMosaicImage('7-mosaic-pool-tile-tileclub.jpg'),
        alt: 'Decorative mosaic pool tile pattern',
        caption: 'Decorative mosaic pattern',
      },
      {
        src: poolCeramicMosaicImage('patterns-of-pool-tile-1692101498531_557e90f7-4f1c-4d95-9abe-aad71aa9d005.webp'),
        alt: 'Assorted premium pool tile patterns and finishes',
        caption: 'Pool tile pattern range',
      },
      {
        src: poolCeramicMosaicImage('gold-pool-tiles-24k-gold-wavy-square-mosaic-closeup-2-jpg.webp'),
        alt: 'Luxury gold wavy square mosaic pool tile closeup',
        caption: 'Gold mosaic accent tiles',
      },
      {
        src: poolCeramicMosaicImage('MU-pool_bondi-saphire_bbcbf814-0ee1-4c65-8e60-590289c18d30.jpg'),
        alt: 'Sapphire blue mosaic pool finish',
        caption: 'Sapphire blue mosaic',
      },
      {
        src: poolCeramicMosaicImage('Ren-II-Peacock-with-bull-nose-trim.jpg'),
        alt: 'Peacock mosaic pool finish with bullnose trim',
        caption: 'Peacock mosaic with trim',
      },
      {
        src: poolCeramicMosaicImage('quietude-black-1x1.jpg'),
        alt: 'Quietude black ceramic pool mosaic tiles',
        caption: 'Black ceramic mosaic',
      },
      {
        src: poolCeramicMosaicImage('signature-black-SS82323K1-2.jpg'),
        alt: 'Signature black pool mosaic finish',
        caption: 'Signature black finish',
      },
      {
        src: poolCeramicMosaicImage('pool-finishes.jpeg-1-1-e1613822535290.jpg'),
        alt: 'Premium swimming pool interior finish options',
        caption: 'Premium pool finishes',
      },
      {
        src: poolCeramicMosaicImage('image_1800x1800.webp'),
        alt: 'High-end mosaic swimming pool interior',
        caption: 'High-end mosaic interior',
      },
      {
        src: poolCeramicMosaicImage('img-20240423-wa0093.jpg'),
        alt: 'Installed mosaic pool finish on luxury project',
        caption: 'Luxury project installation',
      },
      {
        src: poolCeramicMosaicImage('821272.webp'),
        alt: 'Ceramic and mosaic pool tile surface',
        caption: 'Ceramic mosaic surface',
      },
      {
        src: poolCeramicMosaicImage('1280_9c06ca28-b840-45ba-9f41-037bd58dc88e.jpg'),
        alt: 'Contemporary mosaic swimming pool design',
        caption: 'Contemporary mosaic design',
      },
      {
        src: poolCeramicMosaicImage('21.jpg'),
        alt: 'Elegant pool mosaic with crystal-clear water effect',
        caption: 'Crystal-clear water effect',
      },
      {
        src: poolCeramicMosaicImage('a-picture10.jpg'),
        alt: 'Bespoke mosaic pool finish detail',
        caption: 'Bespoke finish detail',
      },
      {
        src: poolCeramicMosaicImage('images.jpg'),
        alt: 'Mosaic pool tile colour and texture sample',
        caption: 'Colour & texture sample',
      },
      {
        src: poolCeramicMosaicImage('images-1.jpg'),
        alt: 'Ceramic pool tile finish sample',
        caption: 'Ceramic finish sample',
      },
      {
        src: poolCeramicMosaicImage('117967-17667434.jpg'),
        alt: 'Swimming pool with premium mosaic waterline',
        caption: 'Premium waterline mosaic',
      },
      {
        src: poolCeramicMosaicImage('1683247701374392.jpg'),
        alt: 'Luxury villa pool with mosaic interior lining',
        caption: 'Luxury villa pool lining',
      },
      {
        src: poolCeramicMosaicImage('7776350.jpg'),
        alt: 'Resort-style pool with ceramic mosaic finish',
        caption: 'Resort-style pool finish',
      },
      {
        src: poolCeramicMosaicImage('c89e6727d5c62f2e0964fa5f4014840b.jpg'),
        alt: 'Architectural pool with custom mosaic layout',
        caption: 'Custom mosaic layout',
      },
      {
        src: poolCeramicMosaicImage('bhaehaeg.jpg'),
        alt: 'Detailed mosaic tile pattern for swimming pools',
        caption: 'Intricate tile pattern',
      },
      {
        src: poolCeramicMosaicImage('il_794xN.1707484343_5i1l_700x700.webp'),
        alt: 'Designer mosaic pool tile closeup',
        caption: 'Designer mosaic closeup',
      },
      {
        src: poolCeramicMosaicImage('Untitled-3_93ff2729-56d8-43db-8859-dc18e562f1e3.jpg'),
        alt: 'Glass mosaic pool finish with depth and shimmer',
        caption: 'Glass mosaic shimmer',
      },
      {
        src: poolCeramicMosaicImage('d8db4abc9c291c270555e76214.jpg@4e_500w_500h.src_95Q.webp'),
        alt: 'Pool mosaic tile texture and colour reference',
        caption: 'Tile texture reference',
      },
      {
        src: poolCeramicMosaicImage(
          'Various-Types-Swimming-Pool-Mosaic-Hot-Melting-Glass-Mosaic-Porcelain-Mosaic-Iridescent-or-Crystal-Blue-Green-Cheap-Price-or-High-End-Bathroom-Wall-Tile-Mosaic.webp',
        ),
        alt: 'Various swimming pool mosaic types including glass and porcelain',
        caption: 'Glass & porcelain mosaic range',
      },
    ],
    highlights: [
      'Mosaic & ceramic finishes',
      'Custom patterns & layouts',
      'Luxury villas & resorts',
      'Premium international materials',
    ],
    sections: [
      {
        title: 'Luxury & timeless elegance',
        mediaLayout: 'duo',
        media: [
          {
            src: poolCeramicMosaicImage('7776350.jpg'),
            alt: 'Resort-style pool with ceramic mosaic finish',
            caption: 'Timeless mosaic elegance',
          },
          {
            src: poolCeramicMosaicImage('swimming-pool-mosaic-tiles.jpg'),
            alt: 'Swimming pool lined with premium mosaic tiles',
            caption: 'Architectural pool feature',
          },
        ],
        paragraphs: [
          'Mosaic and ceramic finishes represent the ultimate combination of luxury, craftsmanship, and timeless elegance in swimming pool design. Renowned for their exceptional beauty, durability, and versatility, these premium finishes transform a swimming pool into a stunning architectural feature while providing long-lasting performance and sophistication.',
        ],
      },
      {
        title: 'Premium finishes & design',
        mediaLayout: 'split',
        media: [
          {
            src: poolCeramicMosaicImage('Custom-Blue-Glass-Mosaic-Tile-for-Pools-Spas.jpg'),
            alt: 'Custom blue glass mosaic tile for pools and spas',
            caption: 'Custom glass mosaic design',
          },
        ],
        paragraphs: [
          'At BlueSky Pools, we specialise in the installation of high-quality mosaic and ceramic pool finishes that elevate the visual appeal of any swimming pool. Whether creating a contemporary masterpiece, a classic Mediterranean retreat, or a bespoke luxury design, our extensive range of colours, textures, patterns, and custom layouts allows every pool to become a unique reflection of its owner\'s vision.',
        ],
      },
      {
        title: 'Mosaic & ceramic aesthetics',
        mediaLayout: 'duo',
        media: [
          {
            src: poolCeramicMosaicImage('glass-pool-tiles-min.jpg'),
            alt: 'Glass mosaic pool tiles with luminous water reflection',
            caption: 'Luminous glass mosaic',
          },
          {
            src: poolCeramicMosaicImage('21.jpg'),
            alt: 'Elegant ceramic pool finish with crystal-clear water effect',
            caption: 'Refined ceramic finish',
          },
        ],
        paragraphs: [
          'Mosaic finishes are widely regarded as the pinnacle of pool aesthetics. Their ability to create intricate patterns, vibrant colour effects, and remarkable depth gives the water a luxurious, crystal-clear appearance that changes beautifully with sunlight and movement. Ceramic finishes offer a similarly elegant look while providing exceptional strength, consistency, and resistance to wear, making them ideal for both residential and commercial applications.',
        ],
      },
      {
        title: 'Outstanding durability',
        mediaLayout: 'split',
        media: [
          {
            src: poolCeramicMosaicImage('quietude-black-1x1.jpg'),
            alt: 'Quietude black ceramic pool mosaic tiles',
            caption: 'Durable ceramic mosaic',
          },
        ],
        paragraphs: [
          'Beyond their visual impact, mosaic and ceramic finishes are renowned for their outstanding durability. Resistant to UV exposure, chemicals, temperature fluctuations, and everyday use, these materials maintain their beauty and structural integrity for decades when professionally installed. Their smooth, high-quality surfaces also contribute to easier maintenance and long-term reliability.',
        ],
      },
      {
        title: 'Expert craftsmanship & lasting value',
        mediaLayout: 'quad',
        media: [
          {
            src: poolCeramicMosaicImage('MU-pool_bondi-saphire_bbcbf814-0ee1-4c65-8e60-590289c18d30.jpg'),
            alt: 'Sapphire blue mosaic pool finish',
            caption: 'Sapphire mosaic finish',
          },
          {
            src: poolCeramicMosaicImage('Ren-II-Peacock-with-bull-nose-trim.jpg'),
            alt: 'Peacock mosaic pool finish with bullnose trim',
            caption: 'Peacock mosaic & trim',
          },
          {
            src: poolCeramicMosaicImage('gold-pool-tiles-24k-gold-wavy-square-mosaic-closeup-2-jpg.webp'),
            alt: 'Luxury gold wavy square mosaic pool tile closeup',
            caption: 'Gold accent mosaic',
          },
          {
            src: poolCeramicMosaicImage('img-20240423-wa0093.jpg'),
            alt: 'Installed mosaic pool finish on luxury project',
            caption: 'Flawless installation',
          },
        ],
        paragraphs: [
          'With over 25 years of experience in the swimming pool industry, BlueSky Pools combines traditional craftsmanship with modern installation techniques to deliver flawless results on every project. Our experienced team pays meticulous attention to every detail, ensuring perfect alignment, superior adhesion, and a finish that meets the highest standards of quality and precision.',
          'Whether for a luxury villa, boutique hotel, resort, wellness centre, or private residence, we work closely with clients, architects, and designers to create bespoke pool finishes that complement the surrounding architecture and landscape. At BlueSky Pools, we use only premium mosaic and ceramic products sourced from trusted international manufacturers, ensuring superior quality, durability, and aesthetic excellence.',
          'Choosing mosaic or ceramic finishes from BlueSky Pools is an investment in luxury, durability, and enduring beauty. Combining over 25 years of expertise with premium materials and exceptional workmanship, we create swimming pools that not only perform flawlessly but also become striking visual centrepieces that enhance the value and prestige of any property.',
        ],
      },
    ],
  },
}

export const POOL_SERVICE_DETAILS: Partial<Record<string, PoolCategoryDetail>> = {
  fountains: {
    eyebrow: 'BlueSky Pools · Water Features',
    title: 'Swimming Pool Fountains',
    subtitle: 'Elegance, ambience, and the art of flowing water',
    imageAlt: 'Decorative swimming pool fountain with elegant water display',
    galleryLead:
      'A curated portfolio of pool fountains and water features — cascades, deck jets, and architectural water displays from BlueSky Pools.',
    galleryImages: [
      {
        src: POOL_REPAIR_FOUNTAIN,
        alt: 'Decorative swimming pool fountain with elegant water display',
        caption: 'Pool fountain — architectural water feature',
      },
      ...POOL_WATERFALL_GALLERY_FILES.map((file, index) => ({
        src: poolWaterfallImage(file),
        alt: `BlueSky Pools fountain and water feature project ${index + 1}`,
        caption: `Fountain project ${index + 1}`,
      })),
    ],
    highlights: [
      'Luxury villas & gardens',
      'Hotels, resorts & spas',
      'Deck jets & water arches',
      'Custom architectural displays',
    ],
    sections: [
      {
        title: 'Beauty & ambience',
        mediaLayout: 'duo',
        media: [
          {
            src: poolWaterfallImage('IMG_7419.JPG'),
            alt: 'Decorative swimming pool fountain with elegant water display',
            caption: 'Elegant fountain display',
          },
          {
            src: poolWaterfallImage('Swimming-pool-waterfalls.webp'),
            alt: 'Swimming pool with cascading waterfall feature',
            caption: 'Cascading water feature',
          },
        ],
        paragraphs: [
          'Swimming pool fountains are the perfect addition for those seeking to elevate the beauty, ambience, and overall experience of their pool environment. Combining visual elegance with the soothing sound of flowing water, fountains transform an ordinary swimming pool into a captivating aquatic feature that enhances both residential and commercial spaces.',
          'Whether incorporated into a modern luxury villa, hotel, resort, spa, or private garden, pool fountains create a sense of movement, sophistication, and tranquillity. From elegant water arches and deck jets to custom-designed cascading features and architectural water displays, fountains add a unique focal point that enhances the overall aesthetic appeal of the property.',
        ],
      },
      {
        title: 'Practical benefits',
        mediaLayout: 'split',
        media: [
          {
            src: poolWaterfallImage('waterfall-water-feature.webp'),
            alt: 'Pool water feature improving circulation and aeration',
            caption: 'Circulation & aeration benefits',
          },
        ],
        paragraphs: [
          'Beyond their visual impact, swimming pool fountains offer practical benefits as well. The continuous movement of water helps improve circulation and aeration, contributing to better water quality and a fresher swimming environment. Additionally, the gentle sound of flowing water creates a relaxing atmosphere, promoting comfort and well-being while enhancing the overall outdoor living experience.',
        ],
      },
      {
        title: 'Bespoke design & installation',
        mediaLayout: 'duo',
        media: [
          {
            src: poolWaterfallImage('IMG_7415.JPG'),
            alt: 'Bespoke pool fountain design integrated with landscape',
            caption: 'Bespoke fountain design',
          },
          {
            src: poolWaterfallImage('IMG_7438.JPG'),
            alt: 'Custom architectural pool water feature installation',
            caption: 'Architectural water display',
          },
        ],
        paragraphs: [
          'At BlueSky Pools, we specialise in the design and installation of bespoke swimming pool fountain systems tailored to the unique style and requirements of each project. With over 25 years of industry experience, we combine creativity, engineering expertise, and premium-quality materials to create stunning water features that seamlessly integrate with the pool and surrounding landscape.',
          'Our team works closely with architects, designers, developers, and homeowners to develop customised solutions that complement the property\'s architecture while delivering reliable performance and long-term durability. From concept design and hydraulic engineering to installation and commissioning, every detail is carefully planned and executed to the highest standards.',
        ],
      },
      {
        title: 'Engineering & craftsmanship',
        mediaLayout: 'split',
        media: [
          {
            src: poolWaterfallImage('infinity-edge-spill-2000.jpg'),
            alt: 'Engineered pool fountain with infinity edge spill detail',
            caption: 'Precision fountain engineering',
          },
        ],
        paragraphs: [
          'Using advanced technology and precision craftsmanship, we create fountain systems that are both visually impressive and operationally efficient. Whether you desire a subtle decorative feature or a dramatic statement piece, BlueSky Pools can bring your vision to life with exceptional attention to detail and uncompromising quality.',
        ],
      },
      {
        title: 'Timeless elegance',
        mediaLayout: 'quad',
        media: [
          {
            src: poolWaterfallImage('IMG_7389.JPG'),
            alt: 'Luxury pool fountain with refined water display',
            caption: 'Luxury fountain finish',
          },
          {
            src: poolWaterfallImage('IMG_7439.JPG'),
            alt: 'Pool fountain integrated with premium outdoor setting',
            caption: 'Premium outdoor integration',
          },
          {
            src: poolWaterfallImage(
              'Can-You-Add-a-Waterfall-or-Fountain-to-a-Glass-Wall-Pool.jpg',
            ),
            alt: 'Glass wall pool with integrated fountain feature',
            caption: 'Glass wall fountain feature',
          },
          {
            src: poolWaterfallImage('home-design.jpg'),
            alt: 'Completed BlueSky Pools fountain and water feature project',
            caption: 'Timeless water feature elegance',
          },
        ],
        paragraphs: [
          'Choosing a swimming pool fountain from BlueSky Pools is an investment in elegance, relaxation, and architectural distinction. Our expertise, innovation, and commitment to excellence ensure that every water feature becomes a timeless addition that enhances the beauty, value, and enjoyment of your swimming pool for years to come.',
        ],
      },
    ],
  },
  'cooling-and-heating': {
    eyebrow: 'BlueSky Pools · Climate Control',
    title: 'Swimming Pool Cooling & Heating',
    subtitle: 'Perfect water temperature in every season',
    imageAlt: 'Swimming pool heating and cooling system installation',
    galleryLead:
      'A curated portfolio of pool heating and cooling installations — heat pumps, climate systems, and year-round comfort solutions from BlueSky Pools.',
    galleryImages: [
      {
        src: POOL_REPAIR_COOLING,
        alt: 'Swimming pool heating and cooling system installation',
        caption: 'Pool heating & cooling — year-round comfort',
      },
      {
        src: poolCoolingHeatingImage('cooling-heating-1.jpg'),
        alt: 'Swimming pool heat pump installation',
        caption: 'Heat pump installation',
      },
      {
        src: poolCoolingHeatingImage('cooling-heating-2.png'),
        alt: 'Pool climate control system equipment',
        caption: 'Climate control equipment',
      },
      {
        src: poolCoolingHeatingImage('cooling-heating-3.webp'),
        alt: 'Energy-efficient pool heating unit',
        caption: 'Energy-efficient heating unit',
      },
      {
        src: poolCoolingHeatingImage('cooling-heating-4.jpg'),
        alt: 'Swimming pool heating system on luxury project',
        caption: 'Luxury pool heating system',
      },
      {
        src: poolCoolingHeatingImage('cooling-heating-5.jpg'),
        alt: 'Pool cooling and heating hydraulic integration',
        caption: 'Hydraulic system integration',
      },
      {
        src: poolCoolingHeatingImage('cooling-heating-6.webp'),
        alt: 'Modern pool heat pump with digital controls',
        caption: 'Modern heat pump controls',
      },
      {
        src: poolCoolingHeatingImage('cooling-heating-7.webp'),
        alt: 'Commercial pool heating and cooling setup',
        caption: 'Commercial climate setup',
      },
      {
        src: poolCoolingHeatingImage('cooling-heating-8.jpg'),
        alt: 'Residential pool heating installation',
        caption: 'Residential heating install',
      },
      {
        src: poolCoolingHeatingImage('cooling-heating-9.jpg'),
        alt: 'Pool equipment room with heating system',
        caption: 'Equipment room installation',
      },
      {
        src: poolCoolingHeatingImage('cooling-heating-10.jpg'),
        alt: 'Swimming pool with integrated temperature control',
        caption: 'Integrated temperature control',
      },
      {
        src: poolCoolingHeatingImage('cooling-heating-11.jpg'),
        alt: 'Heat pump connected to swimming pool filtration',
        caption: 'Heat pump & filtration',
      },
      {
        src: poolCoolingHeatingImage('cooling-heating-12.jpg'),
        alt: 'Premium pool heating system commissioning',
        caption: 'System commissioning',
      },
      {
        src: poolCoolingHeatingImage('cooling-heating-13.png'),
        alt: 'Pool cooling system for summer comfort',
        caption: 'Pool cooling system',
      },
      {
        src: poolCoolingHeatingImage('cooling-heating-15.png'),
        alt: 'Advanced swimming pool climate management',
        caption: 'Advanced climate management',
      },
    ],
    highlights: [
      'Year-round swimming',
      'Heat pumps & climate systems',
      'Residential & commercial pools',
      'Energy-efficient solutions',
    ],
    sections: [
      {
        title: 'Year-round comfort',
        mediaLayout: 'duo',
        media: [
          {
            src: poolCoolingHeatingImage('cooling-heating-2.png'),
            alt: 'Pool climate control system equipment installation',
            caption: 'Year-round pool comfort',
          },
          {
            src: poolCoolingHeatingImage('cooling-heating-1.jpg'),
            alt: 'Swimming pool heat pump installation',
            caption: 'Heat pump technology',
          },
        ],
        paragraphs: [
          'Enjoy the perfect swimming temperature all year round with advanced swimming pool heating and cooling systems from BlueSky Pools. Designed to maximise comfort, energy efficiency, and pool usability, modern temperature control solutions allow you to extend your swimming season and maintain ideal water conditions regardless of weather or climate.',
          'Whether you wish to warm your pool during cooler months or keep the water refreshingly comfortable throughout the hottest summer days, a professionally designed heating and cooling system ensures a consistently enjoyable swimming experience for you, your family, guests, or customers.',
        ],
      },
      {
        title: 'Efficient temperature control',
        mediaLayout: 'split',
        media: [
          {
            src: poolCoolingHeatingImage('cooling-heating-6.webp'),
            alt: 'Modern pool heat pump with digital controls',
            caption: 'Precise digital temperature control',
          },
        ],
        paragraphs: [
          'Modern pool temperature control technology offers precise regulation of water temperature while minimising energy consumption. Advanced heat pumps and integrated climate management systems provide efficient heating and cooling performance, helping pool owners reduce operational costs without compromising comfort. These systems are environmentally friendly, highly reliable, and suitable for both residential and commercial swimming pools.',
        ],
      },
      {
        title: 'Property & guest benefits',
        mediaLayout: 'duo',
        media: [
          {
            src: poolCoolingHeatingImage('cooling-heating-4.jpg'),
            alt: 'Swimming pool heating system on luxury project',
            caption: 'Luxury villa pool heating',
          },
          {
            src: poolCoolingHeatingImage('cooling-heating-10.jpg'),
            alt: 'Swimming pool with integrated temperature control',
            caption: 'Resort-ready pool comfort',
          },
        ],
        paragraphs: [
          'For luxury villas, hotels, resorts, wellness centres, and private residences, temperature-controlled swimming pools offer significant advantages. They increase the usability of the pool throughout the year, enhance guest satisfaction, improve property value, and ensure that the pool remains a desirable feature in every season.',
        ],
      },
      {
        title: 'Expert design & integration',
        mediaLayout: 'split',
        media: [
          {
            src: poolCoolingHeatingImage('cooling-heating-5.jpg'),
            alt: 'Pool cooling and heating hydraulic integration',
            caption: 'Expert hydraulic integration',
          },
        ],
        paragraphs: [
          'At BlueSky Pools, we specialise in the design, supply, and installation of high-performance swimming pool heating and cooling solutions tailored to the specific requirements of each project. With more than 25 years of experience in the swimming pool industry, we understand how to create efficient and reliable systems that deliver exceptional comfort while maintaining optimal energy efficiency.',
          'Our experienced team carefully evaluates every project to recommend the most suitable heating and cooling technology based on pool size, usage patterns, environmental conditions, and client expectations. From system selection and hydraulic integration to installation and commissioning, every stage is completed with precision, professionalism, and attention to detail.',
        ],
      },
      {
        title: 'Long-term performance',
        mediaLayout: 'quad',
        media: [
          {
            src: poolCoolingHeatingImage('cooling-heating-9.jpg'),
            alt: 'Pool equipment room with heating system',
            caption: 'Equipment room setup',
          },
          {
            src: poolCoolingHeatingImage('cooling-heating-11.jpg'),
            alt: 'Heat pump connected to swimming pool filtration',
            caption: 'Reliable system connection',
          },
          {
            src: poolCoolingHeatingImage('cooling-heating-12.jpg'),
            alt: 'Premium pool heating system commissioning',
            caption: 'Professional commissioning',
          },
          {
            src: poolCoolingHeatingImage('cooling-heating-13.png'),
            alt: 'Pool cooling system for summer comfort',
            caption: 'Summer cooling performance',
          },
        ],
        paragraphs: [
          'Using premium equipment from trusted manufacturers and the latest energy-efficient technologies, we deliver solutions that provide long-term reliability, lower operating costs, and outstanding performance year after year.',
          'Choosing BlueSky Pools for your swimming pool heating and cooling requirements means investing in comfort, efficiency, and expert craftsmanship. With our extensive industry knowledge and commitment to quality, we ensure that your swimming pool remains at the perfect temperature, allowing you to enjoy a luxurious swimming experience throughout every season of the year.',
        ],
      },
    ],
  },
  'swim-spas': {
    eyebrow: 'BlueSky Pools · Wellness',
    title: 'Swim Spas',
    subtitle: 'Fitness, relaxation, and luxury in one compact system',
    imageAlt: 'Premium swim spa with counter-current technology',
    galleryLead:
      'A curated portfolio of swim spa installations — counter-current fitness, hydrotherapy, and year-round wellness from BlueSky Pools.',
    galleryImages: [
      {
        src: POOL_REPAIR_SWIM_SPAS,
        alt: 'Premium swim spa with counter-current technology',
        caption: 'Swim spa — year-round fitness and hydrotherapy',
      },
      ...POOL_SWIMSPA_GALLERY_FILES.map((file, index) => ({
        src: poolSwimSpaImage(file),
        alt: `BlueSky Pools swim spa project ${index + 1}`,
        caption: `Swim spa project ${index + 1}`,
      })),
    ],
    highlights: [
      'Counter-current swim technology',
      'Fitness & rehabilitation',
      'Hydrotherapy jets',
      'Compact year-round use',
    ],
    sections: [
      {
        title: 'Fitness, relaxation & luxury',
        mediaLayout: 'duo',
        media: [
          {
            src: poolSwimSpaImage('IMG_7416.JPG'),
            alt: 'Premium swim spa with counter-current technology',
            caption: 'Counter-current swim technology',
          },
          {
            src: poolSwimSpaImage('IMG_7417.JPG'),
            alt: 'Luxury swim spa with integrated fitness and hydrotherapy',
            caption: 'Fitness & hydrotherapy combined',
          },
        ],
        paragraphs: [
          'Swim spas offer the perfect combination of fitness, relaxation, and luxury, bringing together the benefits of a swimming pool and a spa in one innovative solution. Designed for year-round enjoyment, swim spas provide a versatile aquatic environment where you can swim, exercise, relax, and unwind, all within a compact and highly efficient system.',
          'Unlike traditional swimming pools, swim spas utilise powerful counter-current technology that creates a continuous water flow, allowing users to swim in place regardless of the spa\'s size. This makes them an ideal choice for fitness enthusiasts, rehabilitation programmes, low-impact exercise, and professional training, while also providing a relaxing hydrotherapy experience for the entire family.',
        ],
      },
      {
        title: 'Versatility & wellness',
        mediaLayout: 'split',
        media: [
          {
            src: poolSwimSpaImage('IMG_7423.JPG'),
            alt: 'Swim spa hydrotherapy jets for wellness and relaxation',
            caption: 'Hydrotherapy & wellness',
          },
        ],
        paragraphs: [
          'One of the greatest advantages of a swim spa is its versatility. Whether you are looking to improve your fitness, enjoy aquatic exercise, recover from physical strain, or simply relax after a long day, a swim spa offers the perfect environment. Integrated hydrotherapy jets help relieve muscle tension, improve circulation, reduce stress, and promote overall well-being, creating a complete wellness experience within the comfort of your own home.',
        ],
      },
      {
        title: 'Compact luxury solution',
        mediaLayout: 'duo',
        media: [
          {
            src: poolSwimSpaImage('IMG_7428.JPG'),
            alt: 'Compact swim spa installation for limited outdoor space',
            caption: 'Compact footprint design',
          },
          {
            src: poolSwimSpaImage('IMG_7432.JPG'),
            alt: 'Premium swim spa integrated into luxury outdoor setting',
            caption: 'Luxury outdoor integration',
          },
        ],
        paragraphs: [
          'Swim spas are also an excellent solution for properties where space may be limited but luxury and functionality remain a priority. Their compact footprint, energy-efficient operation, and modern design make them suitable for private residences, luxury villas, wellness centres, hotels, and premium hospitality developments.',
        ],
      },
      {
        title: 'Premium supply & installation',
        mediaLayout: 'split',
        media: [
          {
            src: poolSwimSpaImage('IMG_7435.JPG'),
            alt: 'Professional swim spa installation by BlueSky Pools',
            caption: 'Professional installation',
          },
        ],
        paragraphs: [
          'At BlueSky Pools, we specialise in supplying and installing premium-quality swim spas tailored to the unique requirements of each client. With over 25 years of experience in the aquatic industry, we carefully select high-performance products that combine advanced technology, exceptional reliability, and contemporary design.',
          'Our team provides professional guidance throughout the entire process, from product selection and technical planning to installation and commissioning. We ensure that every swim spa is seamlessly integrated into its surroundings while delivering maximum performance, comfort, and long-term value.',
        ],
      },
      {
        title: 'Health & lifestyle investment',
        mediaLayout: 'quad',
        media: [
          {
            src: poolSwimSpaImage('IMG_7430.JPG'),
            alt: 'Swim spa for year-round fitness and aquatic exercise',
            caption: 'Year-round fitness',
          },
          {
            src: poolSwimSpaImage('IMG_7434.JPG'),
            alt: 'Swim spa hydrotherapy and relaxation experience',
            caption: 'Therapeutic relaxation',
          },
          {
            src: poolSwimSpaImage('IMG_7436.JPG'),
            alt: 'Premium swim spa with contemporary design finish',
            caption: 'Contemporary swim spa design',
          },
          {
            src: poolSwimSpaImage('IMG_7437.JPG'),
            alt: 'Completed BlueSky Pools swim spa installation project',
            caption: 'Lasting wellness investment',
          },
        ],
        paragraphs: [
          'Choosing a swim spa from BlueSky Pools is an investment in health, wellness, and lifestyle enhancement. Combining cutting-edge technology, therapeutic benefits, and luxurious comfort, our swim spas provide a year-round aquatic experience designed to improve your quality of life while adding lasting value to your property.',
        ],
      },
    ],
  },
  'bar-and-stools': {
    eyebrow: 'BlueSky Pools · Outdoor Living',
    title: 'Pool Bars & Underwater Stools',
    subtitle: 'Resort-style entertainment in your swimming pool',
    imageAlt: 'Custom pool bar with underwater stools and swim-up seating',
    galleryLead:
      'A curated look at swim-up bars, submerged seating, and resort-style poolside entertaining from recent BlueSky Pools projects.',
    galleryImages: [
      {
        src: POOL_REPAIR_BAR,
        alt: 'Custom pool bar with underwater stools and swim-up seating',
        caption: 'Swim-up bar — resort-style pool entertaining',
      },
      {
        src: `${POOL_BAR_STOOLS_GALLERY}/Bar-Stools-1.jpg`,
        alt: 'Luxury swimming pool with integrated swim-up bar and submerged stools',
        caption: 'Integrated bar & submerged seating',
      },
      {
        src: `${POOL_BAR_STOOLS_GALLERY}/Bar-Stools-2.JPG`,
        alt: 'Pool bar detail with elegant underwater stool arrangement',
        caption: 'Underwater stool detail',
      },
      {
        src: `${POOL_BAR_STOOLS_GALLERY}/Bar-Stools-3.JPG`,
        alt: 'Swim-up pool bar with premium finish and social seating',
        caption: 'Social swim-up configuration',
      },
      {
        src: `${POOL_BAR_STOOLS_GALLERY}/Bar-Stools-4.jpg`,
        alt: 'Custom pool bar built into the pool shell with refined stonework',
        caption: 'Bespoke bar construction',
      },
      {
        src: `${POOL_BAR_STOOLS_GALLERY}/Bar-Stools-5.jpg`,
        alt: 'Resort-inspired pool bar with comfortable in-water seating',
        caption: 'Resort-inspired entertaining',
      },
      {
        src: `${POOL_BAR_STOOLS_GALLERY}/Bar-Stools-6.jpg`,
        alt: 'Swimming pool bar area with architectural waterline detailing',
        caption: 'Architectural waterline finish',
      },
      {
        src: `${POOL_BAR_STOOLS_GALLERY}/Bar-Stools-7.JPG`,
        alt: 'Premium pool bar installation with submerged lounge seating',
        caption: 'Submerged lounge seating',
      },
      {
        src: `${POOL_BAR_STOOLS_GALLERY}/Bar-Stools-8.jpg`,
        alt: 'Luxury outdoor pool with swim-up bar and integrated stools',
        caption: 'Luxury outdoor installation',
      },
      {
        src: `${POOL_BAR_STOOLS_GALLERY}/Bar-Stools-9.avif`,
        alt: 'Contemporary pool bar design with clean lines and premium materials',
        caption: 'Contemporary bar design',
      },
    ],
    highlights: [
      'Swim-up bars & submerged seating',
      'Luxury residences & resorts',
      'Bespoke architectural styles',
      'Resort-style outdoor living',
    ],
    sections: [
      {
        title: 'Entertainment & relaxation',
        mediaLayout: 'duo',
        media: [
          {
            src: `${POOL_BAR_STOOLS_GALLERY}/Bar-Stools-1.jpg`,
            alt: 'Luxury swimming pool with integrated swim-up bar and submerged stools',
            caption: 'Resort-style pool entertaining',
          },
          {
            src: `${POOL_BAR_STOOLS_GALLERY}/Bar-Stools-2.JPG`,
            alt: 'Pool bar detail with elegant underwater stool arrangement',
            caption: 'Luxury in-water social space',
          },
        ],
        paragraphs: [
          'Transform your swimming pool into the ultimate entertainment and relaxation destination with custom-designed pool bars and underwater stools. Combining luxury, functionality, and modern outdoor living, these unique features create a resort-style atmosphere that enhances the enjoyment, value, and visual appeal of any swimming pool.',
          'Pool bars and submerged seating areas have become increasingly popular in luxury residences, hotels, resorts, beach clubs, and wellness facilities, offering a sophisticated space where family, friends, and guests can socialise while remaining comfortably immersed in the water. Whether enjoying a refreshing drink, entertaining visitors, or simply relaxing in the sun, a pool bar creates a truly exclusive experience that brings a touch of five-star luxury to your outdoor environment.',
        ],
      },
      {
        title: 'Resort-style comfort',
        mediaLayout: 'split',
        media: [
          {
            src: `${POOL_BAR_STOOLS_GALLERY}/Bar-Stools-3.JPG`,
            alt: 'Luxury swimming pool with integrated swim-up bar and submerged stools',
            caption: 'Comfortable in-water seating with bar access',
          },
        ],
        paragraphs: [
          'Carefully integrated into the pool design, underwater stools provide comfortable seating while maintaining the elegant aesthetics of the swimming pool. Combined with a swim-up bar, they create a seamless transition between leisure, entertainment, and relaxation, allowing users to enjoy the pool in an entirely new way.',
        ],
      },
      {
        title: 'Custom design options',
        mediaLayout: 'duo',
        media: [
          {
            src: `${POOL_BAR_STOOLS_GALLERY}/Bar-Stools-4.jpg`,
            alt: 'Swim-up pool bar with premium finish and social seating',
            caption: 'Mediterranean-inspired bar styling',
          },
          {
            src: `${POOL_BAR_STOOLS_GALLERY}/Bar-Stools-5.jpg`,
            alt: 'Resort-inspired pool bar with comfortable in-water seating',
            caption: 'Tailored to property architecture',
          },
        ],
        paragraphs: [
          'Beyond their luxurious appearance, pool bars and submerged seating areas can be fully customised to complement the architectural style of the property. From contemporary minimalist designs to elegant Mediterranean and resort-inspired concepts, every detail can be tailored to create a unique and personalised outdoor living space.',
        ],
      },
      {
        title: 'Bespoke design & construction',
        mediaLayout: 'split',
        media: [
          {
            src: `${POOL_BAR_STOOLS_GALLERY}/Bar-Stools-6.jpg`,
            alt: 'Custom pool bar built into the pool shell with refined stonework',
            caption: 'Precision shell integration & finishing',
          },
        ],
        paragraphs: [
          'At BlueSky Pools, we specialise in the bespoke design and construction of luxury pool bars and underwater seating solutions that combine exceptional craftsmanship with innovative engineering. With more than 25 years of experience in the swimming pool industry, we understand how to seamlessly integrate these features into new or existing pools while maintaining optimal functionality, comfort, and structural integrity.',
          'Our team works closely with homeowners, architects, designers, and developers to create custom solutions that reflect each client\'s lifestyle and vision. From concept design and technical planning to construction and finishing, every project is executed with precision, attention to detail, and the highest quality standards.',
        ],
      },
      {
        title: 'Durability & exclusivity',
        mediaLayout: 'trio',
        media: [
          {
            src: `${POOL_BAR_STOOLS_GALLERY}/Bar-Stools-7.JPG`,
            alt: 'Premium pool bar installation with submerged lounge seating',
            caption: 'Long-lasting submerged seating',
          },
          {
            src: `${POOL_BAR_STOOLS_GALLERY}/Bar-Stools-8.jpg`,
            alt: 'Luxury outdoor pool with swim-up bar and integrated stools',
            caption: 'Five-star outdoor experience',
          },
          {
            src: `${POOL_BAR_STOOLS_GALLERY}/Bar-Stools-9.avif`,
            alt: 'Contemporary pool bar design with clean lines and premium materials',
            caption: 'Contemporary material palette',
          },
        ],
        paragraphs: [
          'Using premium materials and advanced construction techniques, we ensure that every pool bar and underwater seating area delivers outstanding durability, comfort, and long-term performance. The result is a luxurious aquatic space that enhances both the enjoyment and prestige of your property.',
          'Choosing BlueSky Pools for your pool bar and underwater stool installation means investing in a feature that combines elegance, entertainment, and exclusivity. Our expertise and commitment to excellence allow us to create exceptional pool environments that offer a true resort-style experience within the comfort of your own property.',
        ],
      },
    ],
  },
  'service-and-maintenance': {
    eyebrow: 'BlueSky Pools · Aftercare',
    title: 'Pool Service & Maintenance',
    subtitle: 'Crystal-clear water, peak performance, complete peace of mind',
    imageAlt: 'Professional swimming pool service and maintenance',
    galleryLead:
      'A curated look at pool service, maintenance, and aftercare — equipment care, water treatment, and year-round support from BlueSky Pools.',
    galleryImages: [
      {
        src: POOL_REPAIR_SERVICE,
        alt: 'Professional swimming pool service and maintenance',
        caption: 'Pool service & maintenance — year-round care',
      },
      ...POOL_SERVICE_MAINTENANCE_GALLERY_FILES.map((file, index) => ({
        src: poolServiceMaintenanceImage(file),
        alt: `BlueSky Pools service and maintenance project ${index + 1}`,
        caption: `Maintenance project ${index + 1}`,
      })),
    ],
    highlights: [
      'Crystal-clear water year-round',
      'Filtration & equipment care',
      'Residential & commercial pools',
      'Emergency technical support',
    ],
    sections: [
      {
        title: 'Professional ongoing care',
        mediaLayout: 'duo',
        media: [
          {
            src: poolServiceMaintenanceImage('IMG_7539.JPG'),
            alt: 'Damaged pool plumbing pipe identified during a maintenance visit',
            caption: 'Early detection of plumbing issues',
          },
          {
            src: poolServiceMaintenanceImage('IMG_7540.JPG'),
            alt: 'Pool deck excavation exposing underground pipes for repair',
            caption: 'On-site pipe repair and replacement',
          },
        ],
        paragraphs: [
          'A beautiful swimming pool requires more than expert construction—it requires ongoing professional care to maintain its performance, appearance, and longevity. At BlueSky Pools, we provide comprehensive swimming pool service and maintenance solutions designed to keep your pool operating flawlessly, ensuring crystal-clear water, maximum efficiency, and complete peace of mind throughout the year.',
        ],
      },
      {
        title: 'System inspections & reliability',
        mediaLayout: 'split',
        media: [
          {
            src: poolServiceMaintenanceImage('Pool-Maintenance.png'),
            alt: 'Swimming pool equipment inspection and maintenance service',
            caption: 'Filtration & equipment inspections',
          },
        ],
        paragraphs: [
          'Regular maintenance is essential for protecting your investment and preventing costly repairs. Our experienced technicians carry out thorough inspections of filtration systems, pumps, heating equipment, lighting, water features, automation systems, and all critical pool components. By identifying potential issues at an early stage, we help prevent unexpected breakdowns and ensure your pool continues to perform at its best.',
        ],
      },
      {
        title: 'Water balance & treatment',
        mediaLayout: 'duo',
        media: [
          {
            src: poolServiceMaintenanceImage('pool-cleaning-tools.jpg'),
            alt: 'Professional pool cleaning tools and maintenance equipment',
            caption: 'Professional cleaning equipment',
          },
          {
            src: poolServiceMaintenanceImage(
              'Swimming-pool-service-and-equipment-with-chemical-cleaning-productsEDIT.jpg',
            ),
            alt: 'Pool water treatment with chemical cleaning products',
            caption: 'Water testing & treatment',
          },
        ],
        paragraphs: [
          'Maintaining the correct water balance is equally important. Proper water treatment not only keeps the pool sparkling clean and inviting but also protects swimmers, extends the lifespan of equipment, and preserves pool finishes. Through professional testing and precise chemical management, we ensure consistently safe, healthy, and perfectly balanced water conditions.',
        ],
      },
      {
        title: 'Tailored maintenance programmes',
        mediaLayout: 'split',
        media: [
          {
            src: poolServiceMaintenanceImage('IMG_7550.JPG'),
            alt: 'Tailored swimming pool maintenance programme in progress',
            caption: 'Tailored maintenance programmes',
          },
        ],
        paragraphs: [
          'With more than 25 years of experience in the swimming pool industry, BlueSky Pools has earned a reputation for reliability, professionalism, and exceptional customer care. Our maintenance programmes are tailored to the specific requirements of each pool, whether it is a private residence, luxury villa, hotel, resort, apartment development, or commercial facility.',
          'We offer a complete range of services, including routine maintenance visits, water testing and treatment, equipment inspections, filter cleaning, seasonal start-ups and closures, leak detection, repairs, upgrades, and emergency technical support. Our goal is to ensure that every pool under our care remains in peak condition all year round.',
        ],
      },
      {
        title: 'Peace of mind partnership',
        mediaLayout: 'quad',
        media: [
          {
            src: poolServiceMaintenanceImage('IMG_7580.JPG'),
            alt: 'Crystal-clear swimming pool after professional maintenance',
            caption: 'Crystal-clear water results',
          },
          {
            src: poolServiceMaintenanceImage('IMG_7590.JPG'),
            alt: 'Commercial pool maintenance by BlueSky Pools',
            caption: 'Commercial pool aftercare',
          },
          {
            src: poolServiceMaintenanceImage('IMG_7600.JPG'),
            alt: 'Residential pool service and seasonal maintenance',
            caption: 'Residential service visits',
          },
          {
            src: poolServiceMaintenanceImage('IMG_7605.JPG'),
            alt: 'Completed pool maintenance and equipment care project',
            caption: 'Complete peace of mind',
          },
        ],
        paragraphs: [
          'At BlueSky Pools, we understand that a swimming pool should be a source of enjoyment, not concern. That is why our dedicated team works proactively to maintain every aspect of your pool, allowing you to focus on enjoying the experience while we take care of the details.',
          'By choosing BlueSky Pools for your service and maintenance needs, you are partnering with a company that combines over two decades of expertise, technical excellence, and a commitment to the highest standards of quality. We are dedicated to protecting your investment and ensuring that your swimming pool remains beautiful, efficient, and ready to enjoy whenever you need it.',
        ],
      },
    ],
  },
  'garden-services': {
    eyebrow: 'BlueSky Pools · Landscape',
    title: 'Garden Services',
    subtitle: 'Elegant landscapes that complement your swimming pool',
    imageAlt: 'Professionally landscaped garden alongside a swimming pool',
    galleryLead:
      'A curated portfolio of poolside gardens and landscape projects — planting, stonework, and outdoor living spaces from BlueSky Pools.',
    galleryImages: [
      {
        src: POOL_REPAIR_GARDEN,
        alt: 'Professionally landscaped garden alongside a swimming pool',
        caption: 'Poolside landscape design',
      },
      ...[
        'IMG_7509.JPG',
        'IMG_7510.JPG',
        'IMG_7511.JPG',
        'IMG_7512.JPG',
        'IMG_7513.JPG',
        'IMG_7514.JPG',
        'IMG_7515.JPG',
        'IMG_7516.JPG',
        'IMG_7517.JPG',
        'IMG_7518.JPG',
        'IMG_7519.JPG',
        'IMG_7520.JPG',
        'IMG_7521.JPG',
        'IMG_7522.JPG',
        'IMG_7523.JPG',
        'IMG_7524.JPG',
        'IMG_7525.JPG',
        'IMG_7526.JPG',
        'IMG_7527.JPG',
        'IMG_7528.JPG',
        'IMG_7529.JPG',
        'IMG_7530.JPG',
        'IMG_7531.JPG',
        'IMG_7532.JPG',
        'IMG_7533.JPG',
        'IMG_7534.JPG',
        'IMG_7535.JPG',
        'IMG_7536.JPG',
        'IMG_7537.JPG',
      ].map((file, index) => ({
        src: poolGardenImage(file),
        alt: `BlueSky Pools garden and landscape project ${index + 1}`,
        caption: `Garden project ${index + 1}`,
      })),
    ],
    highlights: [
      'Landscape design & planting',
      'Irrigation & outdoor lighting',
      'Pool & garden integration',
      'Ongoing garden maintenance',
    ],
    sections: [
      {
        title: 'Harmonious outdoor living',
        mediaLayout: 'duo',
        media: [
          {
            src: poolGardenImage('IMG_7509.JPG'),
            alt: 'Professionally landscaped garden alongside a swimming pool',
            caption: 'Harmonious pool & garden design',
          },
          {
            src: poolGardenImage('IMG_7510.JPG'),
            alt: 'Landscaped garden surrounding a luxury swimming pool',
            caption: 'Luxury outdoor living space',
          },
        ],
        paragraphs: [
          'A beautifully designed and professionally maintained garden is the perfect complement to any swimming pool, creating a harmonious outdoor environment that enhances the beauty, functionality, and value of your property. At BlueSky Pools, we offer comprehensive garden services designed to transform outdoor spaces into elegant landscapes that provide comfort, privacy, and year-round enjoyment.',
          'Whether you are creating a new outdoor living area or upgrading an existing landscape, our team combines creativity, expertise, and attention to detail to deliver stunning results tailored to your property\'s unique character and your personal lifestyle. From contemporary minimalist gardens to lush Mediterranean landscapes, every project is carefully designed to achieve the perfect balance between aesthetics and practicality.',
        ],
      },
      {
        title: 'Comprehensive garden services',
        mediaLayout: 'split',
        media: [
          {
            src: poolGardenImage('IMG_7515.JPG'),
            alt: 'Garden planting scheme with poolside landscaping',
            caption: 'Planting & landscape design',
          },
        ],
        paragraphs: [
          'Our garden services include landscape design, planting schemes, lawn installation, irrigation systems, decorative stonework, outdoor lighting, pathways, garden features, and ongoing maintenance. We carefully select plants, trees, and materials that thrive in the local climate while creating visually appealing and sustainable outdoor environments.',
        ],
      },
      {
        title: 'More than visual appeal',
        mediaLayout: 'duo',
        media: [
          {
            src: poolGardenImage('IMG_7520.JPG'),
            alt: 'Private garden retreat integrated with swimming pool',
            caption: 'Private garden retreat',
          },
          {
            src: poolGardenImage('IMG_7525.JPG'),
            alt: 'Outdoor entertaining area with landscaped planting',
            caption: 'Entertainment & relaxation',
          },
        ],
        paragraphs: [
          'A professionally landscaped garden offers far more than visual appeal. It creates inviting outdoor spaces for relaxation and entertainment, improves privacy, enhances property value, and contributes to a healthier and more enjoyable lifestyle. When combined with a swimming pool, a well-designed garden transforms the entire property into a luxurious retreat that can be enjoyed throughout the year.',
        ],
      },
      {
        title: 'Integrated landscape design',
        mediaLayout: 'split',
        media: [
          {
            src: poolGardenImage('IMG_7530.JPG'),
            alt: 'Integrated pool, patio, and garden landscape design',
            caption: 'Integrated landscape design',
          },
        ],
        paragraphs: [
          'With over 25 years of experience in outdoor project development, BlueSky Pools understands how to seamlessly integrate gardens with swimming pools, water features, patios, and outdoor living areas. Our team works closely with homeowners, architects, designers, and developers to create cohesive outdoor environments where every element works together in perfect harmony.',
        ],
      },
      {
        title: 'Lasting outdoor value',
        mediaLayout: 'quad',
        media: [
          {
            src: poolGardenImage('IMG_7532.JPG'),
            alt: 'Premium garden stonework and planting detail',
            caption: 'Premium stonework & planting',
          },
          {
            src: poolGardenImage('IMG_7534.JPG'),
            alt: 'Mature garden landscaping around pool area',
            caption: 'Mature landscape planting',
          },
          {
            src: poolGardenImage('IMG_7535.JPG'),
            alt: 'Garden pathways and outdoor lighting installation',
            caption: 'Pathways & outdoor lighting',
          },
          {
            src: poolGardenImage('IMG_7537.JPG'),
            alt: 'Completed BlueSky Pools garden and pool project',
            caption: 'Completed garden project',
          },
        ],
        paragraphs: [
          'From the initial design concept through installation and ongoing care, we are committed to delivering exceptional workmanship, premium-quality materials, and outstanding customer service. Every project is approached with professionalism, precision, and a dedication to exceeding expectations.',
          'Choosing BlueSky Pools for your garden services means investing in an outdoor space that combines natural beauty, functionality, and long-term value. Our expertise, creativity, and commitment to excellence ensure that your garden becomes a stunning extension of your home, creating an outdoor environment that you and your family can enjoy for many years to come.',
        ],
      },
    ],
  },
}

export function poolServiceDetailPath(serviceId: string): string {
  return `/services/pool/services/${serviceId}`
}

export function poolLiningDetailPath(liningId: string): string {
  return `/services/pool/linings/${liningId}`
}

export function getPoolServiceDetail(serviceId: string | undefined) {
  if (!serviceId) return undefined
  const service = poolServiceRenovationRepair.find((item) => item.id === serviceId)
  const detail = POOL_SERVICE_DETAILS[serviceId]
  if (!service || !detail) return undefined
  return { service, detail }
}

export function getPoolLiningDetail(liningId: string | undefined) {
  if (!liningId) return undefined
  const lining = poolInternalLinings.find((item) => item.id === liningId)
  const detail = POOL_LINING_DETAILS[liningId]
  if (!lining || !detail) return undefined
  return { lining, detail }
}

export type PoolGardenDetailPageData = {
  kind: 'category' | 'service' | 'lining'
  id: string
  label: string
  imageSrc: string
  detail: PoolCategoryDetail
  sectionHref: string
  sectionLabel: string
  fallbackHref: string
  navigableSiblings: ReadonlyArray<{ id: string; label: string }>
  detailPath: (id: string) => string
}

export function resolvePoolGardenDetailPage(
  categoryId?: string,
  serviceId?: string,
  liningId?: string,
): PoolGardenDetailPageData | undefined {
  if (categoryId) {
    const match = getPoolCategoryDetail(categoryId)
    if (!match) return undefined
    return {
      kind: 'category',
      id: match.category.id,
      label: match.category.label,
      imageSrc: match.category.imageSrc,
      detail: match.detail,
      sectionHref: '/services/pool#pool-categories',
      sectionLabel: 'Pool categories',
      fallbackHref: '/services/pool#pool-categories',
      navigableSiblings: poolCategories
        .filter((item) => POOL_CATEGORY_DETAILS[item.id])
        .map((item) => ({ id: item.id, label: item.label })),
      detailPath: poolCategoryDetailPath,
    }
  }

  if (serviceId) {
    const match = getPoolServiceDetail(serviceId)
    if (!match) return undefined
    return {
      kind: 'service',
      id: match.service.id,
      label: match.service.label,
      imageSrc: match.service.imageSrc,
      detail: match.detail,
      sectionHref: '/services/pool#service-renovation-repair',
      sectionLabel: 'Service & repair',
      fallbackHref: '/services/pool#service-renovation-repair',
      navigableSiblings: poolServiceRenovationRepair
        .filter((item) => POOL_SERVICE_DETAILS[item.id])
        .map((item) => ({ id: item.id, label: item.label })),
      detailPath: poolServiceDetailPath,
    }
  }

  if (liningId) {
    const match = getPoolLiningDetail(liningId)
    if (!match) return undefined
    return {
      kind: 'lining',
      id: match.lining.id,
      label: match.lining.label,
      imageSrc: match.lining.imageSrc,
      detail: match.detail,
      sectionHref: '/services/pool#pool-internal-linings',
      sectionLabel: 'Internal linings',
      fallbackHref: '/services/pool#pool-internal-linings',
      navigableSiblings: poolInternalLinings
        .filter((item) => POOL_LINING_DETAILS[item.id])
        .map((item) => ({ id: item.id, label: item.label })),
      detailPath: poolLiningDetailPath,
    }
  }

  return undefined
}

export function getPoolGardenGallery(
  imageSrc: string,
  label: string,
  detail: PoolCategoryDetail,
): readonly PoolCategoryGalleryImage[] {
  const gallery =
    detail.galleryImages?.length ?
      [...detail.galleryImages]
    : [{ src: imageSrc, alt: detail.imageAlt || label, caption: undefined }]

  const sectionSrcs = new Set(
    detail.sections.flatMap((section) => section.media?.map((image) => image.src) ?? []),
  )

  const seen = new Set<string>()

  return gallery.filter((image) => {
    if (sectionSrcs.has(image.src) || seen.has(image.src)) return false
    seen.add(image.src)
    return true
  })
}

export const poolGardenPillars = [
  {
    key: 'residential',
    title: 'Residential pool & garden',
    body:
      'Private homes, villas, and estates — from first concept to handover, with outdoor living, lighting, and planting in one coherent plan.',
  },
  {
    key: 'commercial',
    title: 'Commercial & hospitality',
    body:
      'Pools, spas, and exterior amenities for hotels, clubs, and developments — engineered for duty cycles, compliance, and guest experience.',
  },
  {
    key: 'construction',
    title: 'Construction & renewal',
    body:
      'New builds, renovations, and structural interventions — coordinated with shell, MEP, and landscape so timelines and quality stay aligned.',
  },
]

export type PoolGardenIntroContent = {
  eyebrow: string
  title: string
  subtitle: string
  paragraphs: readonly string[]
  servicesTitle: string
  services: readonly string[]
  excellenceTitle: string
  excellenceParagraphs: readonly string[]
  brandName: string
  tagline: string
}

/** BlueSky Pools — editorial introduction after the hero */
export const POOL_GARDEN_INTRO: PoolGardenIntroContent = {
  eyebrow: 'BlueSky Pools',
  title: 'Luxury Pool Design & Construction in Cyprus',
  subtitle: 'Creating Exceptional Swimming Pools Inspired by Excellence',
  paragraphs: [
    'At BlueSky Pools, we specialise in the design and construction of premium swimming pools that combine outstanding aesthetics, innovative engineering and uncompromising quality.',
    'From elegant private residential pools to sophisticated large-scale commercial developments, every project is tailored to reflect the vision, lifestyle and expectations of our clients.',
    'Whether indoors or outdoors, our experienced team transforms concepts into stunning aquatic environments that enhance properties and create unforgettable experiences for years to come.',
  ],
  servicesTitle: 'Our Services Include',
  services: [
    'Custom Swimming Pool Design & Construction',
    'Skimmer & Overflow Pool Systems',
    'Infinity Edge Pools',
    'Premium Pool Finishes & Mosaic Installations',
    'Automatic Pool Covers',
    'Water Features & Luxury Pool Accessories',
    'Renovation & Modernisation of Existing Pools',
  ],
  excellenceTitle: 'Excellence in Every Detail',
  excellenceParagraphs: [
    'Combining advanced construction techniques with modern sustainable solutions, we deliver swimming pools that offer exceptional performance, durability and timeless elegance. Every detail is carefully considered, from structural integrity and hydraulic efficiency to visual impact and seamless architectural integration.',
    'Our portfolio includes prestigious residential and commercial projects throughout Cyprus, showcasing our commitment to craftsmanship, innovation and superior quality. The result is more than just a swimming pool — it is a bespoke lifestyle feature designed to elevate your property and enrich everyday living.',
  ],
  brandName: 'BlueSky Pools',
  tagline: 'Where Luxury, Innovation and Craftsmanship Meet.',
}
