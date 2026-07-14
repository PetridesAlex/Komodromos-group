import { aviationPath, getAviationRoutes } from '../lib/brandPaths'

/** Internal Komodromos routes for Aviation Agency Services */
export const AVIATION_ROUTES = {
  home: '/services/aviation',
  pilots: '/services/aviation/pilots',
  jobs: '/services/aviation/jobs',
  airlines: '/services/aviation/airlines',
  trainings: '/services/aviation/trainings',
  cadet: '/services/aviation/cadet-programme',
  privacy: '/services/aviation/privacy',
  contact: '/services/aviation/contact',
} as const

export { getAviationRoutes, aviationPath }

/** In-page section anchors on the main aviation landing page */
export const AVIATION_SECTIONS = {
  hero: 'hero',
  about: 'about',
  services: 'services',
  clients: 'clients',
  leader: 'leader',
  team: 'team',
  blog: 'blog',
} as const

export function aviationSectionHref(section: keyof typeof AVIATION_SECTIONS) {
  return `${getAviationRoutes().home}#${AVIATION_SECTIONS[section]}`
}

export function getAviationSubNavItems(): AviationNavItem[] {
  const routes = getAviationRoutes()
  return [
    { label: 'HOME', shortLabel: 'Home', to: routes.home },
    { label: 'ABOUT US', shortLabel: 'About', to: aviationSectionHref('about') },
    { label: 'PILOTS', shortLabel: 'Pilots', to: routes.pilots },
    { label: 'AVIATION JOBS', shortLabel: 'Jobs', to: routes.jobs },
    { label: 'AIRLINES SERVICES', shortLabel: 'Airlines', to: routes.airlines },
    { label: 'TRAININGS & RATINGS', shortLabel: 'Training', to: routes.trainings },
    { label: 'CONTACT US', shortLabel: 'Contact', to: routes.contact },
    { label: 'GLOBALCADET PROGRAMME', shortLabel: 'Cadet', to: routes.cadet },
  ]
}

export type AviationNavItem = {
  label: string
  shortLabel: string
  to: string
}

export const gwSubNavBrand = {
  nameLead: 'Global',
  nameEmphasis: 'Wings',
  tagline: 'Aviation Recruitment & Training',
  mobileTagline: 'Aviation Agency',
  ariaLabel: 'Global Wings — aviation recruitment and training',
}

export const aviationSubNavItems: AviationNavItem[] = [
  { label: 'HOME', shortLabel: 'Home', to: AVIATION_ROUTES.home },
  { label: 'ABOUT US', shortLabel: 'About', to: aviationSectionHref('about') },
  { label: 'PILOTS', shortLabel: 'Pilots', to: AVIATION_ROUTES.pilots },
  { label: 'AVIATION JOBS', shortLabel: 'Jobs', to: AVIATION_ROUTES.jobs },
  { label: 'AIRLINES SERVICES', shortLabel: 'Airlines', to: AVIATION_ROUTES.airlines },
  { label: 'TRAININGS & RATINGS', shortLabel: 'Training', to: AVIATION_ROUTES.trainings },
  { label: 'CONTACT US', shortLabel: 'Contact', to: AVIATION_ROUTES.contact },
  { label: 'GLOBALCADET PROGRAMME', shortLabel: 'Cadet', to: AVIATION_ROUTES.cadet },
]

export type GwHeroMessage = {
  eyebrow: string
  title: string
  subtitle: string
}

export const gwHeroCta = {
  label: 'Explore our services',
}

export const gwHeroMessages: GwHeroMessage[] = [
  {
    eyebrow: 'Global Wings Ltd · Aviation Agency',
    title: 'Global Wings Ltd | Aviation Agency',
    subtitle: 'The new way of success',
  },
  {
    eyebrow: 'Aviation Recruitment & Training',
    title: 'Your aviation career starts here',
    subtitle: 'Connecting professionals with leading airlines worldwide',
  },
]

/** Hero caption cycle — video clear, then message, then repeat. */
export const gwHeroCycle = {
  videoClearMs: 3200,
  captionVisibleMs: 4800,
  fadeMs: 650,
} as const

export const AVIATION_YOUTUBE_VIDEO_ID = 'ufzgub092ks'

export const AVIATION_YOUTUBE_WATCH_URL = `https://www.youtube.com/watch?v=${AVIATION_YOUTUBE_VIDEO_ID}`

export const AVIATION_YOUTUBE_EMBED = `https://www.youtube-nocookie.com/embed/${AVIATION_YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&playsinline=1&color=white`

export const gwAboutSection = {
  eyebrow: 'Who we are',
  title: 'About Global Wings',
  intro:
    'Global Wings Ltd connects airlines with qualified flight and cabin crew worldwide — delivering trusted recruitment, training, and operational support with uncompromising professionalism.',
  body:
    'From airline partnerships to cadet pathways, we support aviation professionals and operators at every stage — with discretion, speed, and deep industry expertise.',
  highlights: [
    { value: '15+', label: 'Years experience' },
    { value: 'Global', label: 'Recruitment reach' },
    { value: '360°', label: 'Aviation solutions' },
  ],
  capabilities: [
    'Pilot & crew recruitment',
    'Airline staffing solutions',
    'Training & type ratings',
    'Executive aviation search',
  ],
  filmBadge: 'Company film',
  filmLead: 'Discover how Global Wings connects aviation talent with opportunity worldwide.',
  filmLinkLabel: 'Watch our story',
  filmLinkHint: 'Opens on YouTube',
}

export type AviationServiceCard = {
  title: string
  to: string
  description: string
  icon: 'pilots' | 'airlines' | 'jobs' | 'trainings'
  imageSrc: string
  imageAlt: string
  imagePosition?: string
}

const GW_SERVICES_IMAGES_BASE = '/images/services/global-wings/services'

function gwServiceImageSrc(filename: string) {
  return `${GW_SERVICES_IMAGES_BASE}/${encodeURIComponent(filename)}`
}

type AviationServiceCardDef = Omit<AviationServiceCard, 'to'> & {
  routeKey: 'pilots' | 'airlines' | 'jobs' | 'trainings'
}

const aviationServiceCardDefs: AviationServiceCardDef[] = [
  {
    title: 'Pilots',
    routeKey: 'pilots',
    description:
      'International pilot recruitment and placement connecting qualified aviators with leading airlines worldwide.',
    icon: 'pilots',
    imageSrc: gwServiceImageSrc('PILOTS .png'),
    imageAlt: 'Airline captain in formal uniform with command cap and gold epaulettes',
    imagePosition: 'center 28%',
  },
  {
    title: 'Airline Services',
    routeKey: 'airlines',
    description:
      'Crew resourcing, executive search, and specialist staffing solutions tailored to airline operations.',
    icon: 'airlines',
    imageSrc: gwServiceImageSrc('AIRLINE SERVICES .png'),
    imageAlt: 'Professional airline cabin crew providing premium in-flight service',
    imagePosition: 'center 35%',
  },
  {
    title: 'Aviation Jobs',
    routeKey: 'jobs',
    description:
      'Global career opportunities for aviation professionals across airlines, MROs, and aerospace organisations.',
    icon: 'jobs',
    imageSrc: gwServiceImageSrc('AVIATION JOBS .png'),
    imageAlt: 'Aviation professional reviewing career opportunities at an airport',
    imagePosition: 'center center',
  },
  {
    title: 'Trainings & More Services',
    routeKey: 'trainings',
    description:
      'Professional pilot training, certifications, type ratings, and career development programmes.',
    icon: 'trainings',
    imageSrc: gwServiceImageSrc('TRAININGS.png'),
    imageAlt: 'Pilot training session in a professional aviation simulator environment',
    imagePosition: 'center 40%',
  },
]

/** Domain-aware service card links (e.g. /pilots on global-wings.co). */
export function getAviationServiceCards(): AviationServiceCard[] {
  const routes = getAviationRoutes()
  return aviationServiceCardDefs.map(({ routeKey, ...card }) => ({
    ...card,
    to: routes[routeKey],
  }))
}

/** @deprecated Use getAviationServiceCards() for correct brand-domain paths */
export const aviationServiceCards: AviationServiceCard[] = aviationServiceCardDefs.map(
  ({ routeKey, ...card }) => ({
    ...card,
    to: AVIATION_ROUTES[routeKey],
  }),
)

export type AviationSectionSlug =
  | 'pilots'
  | 'jobs'
  | 'airlines'
  | 'trainings'
  | 'cadet-programme'
  | 'privacy'

export type AviationSection = {
  slug: AviationSectionSlug
  title: string
  heading: string
}

export const aviationSections: Record<AviationSectionSlug, AviationSection> = {
  pilots: {
    slug: 'pilots',
    title: 'Global Wings Pilots',
    heading: 'Global Wings Pilots',
  },
  jobs: {
    slug: 'jobs',
    title: 'Aviation Jobs',
    heading: 'Aviation Jobs',
  },
  airlines: {
    slug: 'airlines',
    title: 'Airline Services',
    heading: 'Airline Services',
  },
  trainings: {
    slug: 'trainings',
    title: 'Trainings & More Services',
    heading: 'Trainings & More Services',
  },
  'cadet-programme': {
    slug: 'cadet-programme',
    title: 'Globalcadet Programme',
    heading: 'Globalcadet Programme',
  },
  privacy: {
    slug: 'privacy',
    title: 'Privacy Policy',
    heading: 'Privacy Policy',
  },
}

export const aviationSectionSlugs = Object.keys(aviationSections) as AviationSectionSlug[]

const GW_CLIENTS_BASE = '/images/services/global-wings/clients-brands'

function gwClientLogoSrc(filename: string) {
  return `${GW_CLIENTS_BASE}/${encodeURIComponent(filename)}`
}

export type GwClientLogo = {
  name: string
  src?: string
  shortName?: string
}

export const gwClientLogos: GwClientLogo[] = [
  { name: 'Turkish Airlines', src: gwClientLogoSrc('ChatGPT Image Jul 7, 2026, 09_35_11 PM.png') },
  { name: 'airhub Aviation', src: gwClientLogoSrc('ChatGPT Image Jul 7, 2026, 09_38_49 PM.png') },
  { name: 'Jetstream Aviation Academy', shortName: 'Jetstream Academy', src: gwClientLogoSrc('ChatGPT Image Jul 7, 2026, 09_42_36 PM.png') },
  { name: 'SKY express', src: gwClientLogoSrc('ChatGPT Image Jul 7, 2026, 09_46_42 PM.png') },
  { name: 'Avion Express', src: gwClientLogoSrc('ChatGPT Image Jul 7, 2026, 09_50_01 PM.png') },
  { name: 'San Marino Executive Aviation', shortName: 'San Marino Aviation', src: gwClientLogoSrc('ChatGPT Image Jul 7, 2026, 09_54_09 PM.png') },
  { name: 'Marathon Airlines', src: gwClientLogoSrc('ChatGPT Image Jul 7, 2026, 09_55_35 PM.png') },
  { name: 'SmartLynx Airlines', src: gwClientLogoSrc('ChatGPT Image Jul 7, 2026, 09_56_30 PM.png') },
  { name: 'Avia Solutions Group', shortName: 'Avia Solutions', src: gwClientLogoSrc('Avia Solution Group.png') },
  { name: 'BA Training', src: gwClientLogoSrc('BAA .jpg') },
  { name: 'CAE Inc.', src: gwClientLogoSrc('CAE_Inc.-Logo.wine.png') },
  { name: 'GetJet Airlines', shortName: 'GetJet', src: gwClientLogoSrc('Get Jet.png') },
]

/** @deprecated Use gwClientLogos.length */
export const gwClientCount = gwClientLogos.length

export const gwLeaderSection = {
  title: 'The Global Leader in Aviation Solutions',
  paragraphs: [
    'Global Wings Ltd is a Pilot Recruitment Agency providing various job opportunities to pilots & cabin crews all over the world.\n\nWhen seeking experienced and qualified flight or cabin crews to meet your operations or training requirements,  Global Wings Ltd is the crew agency you can trust!\n\nWe have successfully sourced, screened and submitted required personnel for many airlines, from major international carriers right through to domestic start up operations.',
    'We offer airlines the operational flexibility needed, especially during high demand seasons, fleet expansions, aircraft introduction or route expansion. We offer a cost effective solution to providing a qualified, experienced and professional flight, cabin crews and engineers whenever you may need them.',
  ],
  moreHref: '#',
}

export type GwTeamMember = {
  name: string
  role: string
  background?: string
  imageSrc?: string
  imageAlt?: string
  imagePosition?: string
}

const GW_TEAM_IMAGES_BASE = '/images/services/global-wings/team'

function gwTeamImageSrc(filename: string) {
  return `${GW_TEAM_IMAGES_BASE}/${encodeURIComponent(filename)}`
}

export const gwTeamMembers: GwTeamMember[] = [
  {
    name: 'Capt. Giannos Komodromos',
    role:
      'CEO at Komodromos Group of Companies | Lawyer Corporate & Tax/Vat Consultant (LLB UoL) | Legal Mediator & Arbitrator A.D.R | Aviation Legal Consultant | Captain,TRI,CRMI,Flight Operations Auditor A320F',
    imageSrc: gwTeamImageSrc('Capt. Giannos Komodromos .png'),
    imageAlt: 'Capt. Giannos Komodromos, CEO of Komodromos Group and Global Wings',
    imagePosition: 'center 22%',
  },
  {
    name: 'Capt. Philip Kanonis ',
    role: 'MEng CEng MRAeS',
    background:
      'Background: Airline Pilot, Technical Pilot, Aeornautical Engineer\n\n20 years experience.',
    imageSrc: gwTeamImageSrc('Capt. Philip Kanonis .png'),
    imageAlt: 'Capt. Philip Kanonis, airline and technical pilot',
    imagePosition: 'center 20%',
  },
  {
    name: 'Andy Georgiou Komodromou',
    role: 'Business Management & Marketing (MBA)',
    background:
      'Background: A320 Airlines Pilot, MBA, Psychologist, Member of Flight Safety Faundation.\n8 years experience\n.',
  },
  {
    name: 'Dr George Athanasiou',
    role: 'MD, MSc, AvMed',
    background:
      'Background:General and Aviation Medicine\nAviation Authorised Medical Examiner - CY-AME-03.\n25 Years experience.',
    imageSrc: gwTeamImageSrc('Dr George Athanasiou .png'),
    imageAlt: 'Dr George Athanasiou, aviation medical examiner',
    imagePosition: 'center 18%',
  },
  {
    name: 'Kalia Stavrou',
    role: 'Bachelor of Laws',
    background: 'Background: Bachelor of Laws\n LLB  (Hons)',
  },
  {
    name: 'Chariklia Mich',
    role: 'Bachelor of Laws',
    background:
      'Background: Law area & AML, Human Resources specialist\n4 years experience',
    imageSrc: gwTeamImageSrc('CHARIKLEIA COSTA .png'),
    imageAlt: 'Chariklia Mich, law and human resources specialist',
    imagePosition: 'center 24%',
  },
  {
    name: 'Loukia Andreou',
    role: 'Office Manager',
    background:
      'Background: Bachelor degree environmental science and technology\n- Master of science on energy resources management\n7 Years Experience',
    imageSrc: gwTeamImageSrc('LOUKIA ANDREOU .png'),
    imageAlt: 'Loukia Andreou, office manager at Global Wings',
    imagePosition: 'center 20%',
  },
]

export type GwStat = {
  value: string
  label: string
  animate?: boolean
}

export const gwStats: GwStat[] = [
  { value: '1500', label: 'Happy Clients', animate: true },
  { value: '28', label: 'International partners', animate: true },
  { value: '230', label: 'Trainings', animate: true },
  { value: '100%', label: 'Success', animate: false },
]

export type AviationBlogPost = {
  title: string
  to: string
  excerpt: string
  tag: string
  images: {
    src: string
    alt: string
    imagePosition?: string
  }[]
  /** @deprecated Use images.length */
  carouselSlides?: number
}

const GW_BLOG_IMAGES_BASE = '/images/services/global-wings/blog'

function gwBlogImageSrc(filename: string) {
  return `${GW_BLOG_IMAGES_BASE}/${encodeURIComponent(filename)}`
}

export function getAviationBlogPosts(): AviationBlogPost[] {
  const routes = getAviationRoutes()

  return [
    {
      title: 'Experience & Capabilities',
      to: aviationSectionHref('leader'),
      tag: 'Insights',
      excerpt:
        'Global Wings Ltd have over 12 years combined experience in advising commercial and non-commercial airlines and aircraft operators on effective staffing and aviation recruitment solutions.',
      images: [
        {
          src: gwBlogImageSrc('Experience & Capabilities.jpg'),
          alt: 'Professional handshake representing aviation skills, experience, and growth',
          imagePosition: 'center center',
        },
      ],
    },
    {
      title: 'Flight Crew Resourcing',
      to: routes.airlines,
      tag: 'Services',
      excerpt:
        'When seeking experienced and qualified flight crew to meet your operations or training requirements, Global Wings Ltd is the partner you can trust!',
      images: [
        {
          src: gwBlogImageSrc('Flight Crew Resourcing.png'),
          alt: 'Aviation recruiter reviewing a global flight crew talent network on a tablet',
          imagePosition: 'center 42%',
        },
      ],
    },
    {
      title: 'Privacy Policy',
      to: routes.privacy,
      tag: 'Legal',
      excerpt:
        'At Global Wings Ltd we are committed to maintaining the accuracy, confidentiality and security of your personal information. This Privacy Policy describes the personal information...',
      images: [
        {
          src: gwBlogImageSrc('Privacy Policy .png'),
          alt: 'Digital padlock representing secure handling of personal aviation data',
          imagePosition: 'center 38%',
        },
      ],
    },
  ]
}

/** @deprecated Use getAviationBlogPosts() for correct brand-domain paths */
export const aviationBlogPosts: AviationBlogPost[] = getAviationBlogPosts()

export const gwClosingCta = {
  eyebrow: 'Partner With Global Wings',
  title: 'The new way of',
  titleEmphasis: 'aviation success.',
  lead:
    'Take the next step in your business — or let us provide the crucial personnel and services your organisation needs. Contact us and make the right move with Global Wings.',
  primaryCta: 'Contact our team',
  secondaryCta: 'Explore services',
  highlights: [
    { value: '12+', label: 'Years experience' },
    { value: 'Global', label: 'Recruitment reach' },
    { value: '24/7', label: 'Aviation support' },
  ],
}

export const gwSocialLinks = [
  { id: 'facebook', label: 'Facebook' },
  { id: 'twitter', label: 'Twitter' },
  { id: 'linkedin', label: 'LinkedIn' },
  { id: 'dribbble', label: 'Dribbble' },
  { id: 'rss', label: 'RSS' },
] as const
