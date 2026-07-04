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
  return `${AVIATION_ROUTES.home}#${AVIATION_SECTIONS[section]}`
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
}

export const aviationServiceCards: AviationServiceCard[] = [
  {
    title: 'Pilots',
    to: AVIATION_ROUTES.pilots,
    description:
      'International pilot recruitment and placement connecting qualified aviators with leading airlines worldwide.',
    icon: 'pilots',
  },
  {
    title: 'Airline Services',
    to: AVIATION_ROUTES.airlines,
    description:
      'Crew resourcing, executive search, and specialist staffing solutions tailored to airline operations.',
    icon: 'airlines',
  },
  {
    title: 'Aviation Jobs',
    to: AVIATION_ROUTES.jobs,
    description:
      'Global career opportunities for aviation professionals across airlines, MROs, and aerospace organisations.',
    icon: 'jobs',
  },
  {
    title: 'Trainings & More Services',
    to: AVIATION_ROUTES.trainings,
    description:
      'Professional pilot training, certifications, type ratings, and career development programmes.',
    icon: 'trainings',
  },
]

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

export const gwClientCount = 10

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
}

export const gwTeamMembers: GwTeamMember[] = [
  {
    name: 'Capt. Giannos Komodromos',
    role:
      'CEO at Komodromos Group of Companies | Lawyer Corporate & Tax/Vat Consultant (LLB UoL) | Legal Mediator & Arbitrator A.D.R | Aviation Legal Consultant | Captain,TRI,CRMI,Flight Operations Auditor A320F',
  },
  {
    name: 'Capt. Philip Kanonis ',
    role: 'MEng CEng MRAeS',
    background:
      'Background: Airline Pilot, Technical Pilot, Aeornautical Engineer\n\n20 years experience.',
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
  },
  {
    name: 'Loukia Andreou',
    role: 'Office Manager',
    background:
      'Background: Bachelor degree environmental science and technology\n- Master of science on energy resources management\n7 Years Experience',
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
  carouselSlides?: number
}

export const aviationBlogPosts: AviationBlogPost[] = [
  {
    title: 'Experience & Capabilities',
    to: aviationSectionHref('leader'),
    tag: 'Insights',
    excerpt:
      'Global Wings Ltd have over 12 years combined experience in advising commercial and non-commercial airlines and aircraft operators on effective staffing and aviation recruitment solutions.',
  },
  {
    title: 'Flight Crew Resourcing',
    to: AVIATION_ROUTES.airlines,
    tag: 'Services',
    excerpt:
      'When seeking experienced and qualified flight crew to meet your operations or training requirements, Global Wings Ltd is the partner you can trust!',
    carouselSlides: 3,
  },
  {
    title: 'Privacy Policy',
    to: AVIATION_ROUTES.privacy,
    tag: 'Legal',
    excerpt:
      'At Global Wings Ltd we are committed to maintaining the accuracy, confidentiality and security of your personal information. This Privacy Policy describes the personal information...',
  },
]

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
