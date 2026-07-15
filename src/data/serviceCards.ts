export type ServiceCard = {
  slug: string
  eyebrow: string
  title: string
  /** Optional label for the topbar Solutions dropdown only */
  navTitle?: string
  description: string
  tags: string[]
  image: string
  /** Optional brand mark PNG, `public/.../cards-logos-services/` */
  brandLogo?: string
  /**
   * `lighten` blends gold-on-dark-matte marks into the card. Use `normal` for
   * light (e.g. white) mattes so the mark is not washed out.
   */
  brandLogoBlend?: 'lighten' | 'normal'
  /** Homepage cover badge — service detail temporarily offline */
  comingSoon?: boolean
  /** When set, this service has a dedicated brand domain (see domainRegistry). */
  brandSlug?: string
}

/** Homepage / service list covers in `public/images/services/companie-services-cover/` */
const SVC_COVER = '/images/services/companie-services-cover'

const SVC_CARD_LOGO = `${SVC_COVER}/cards-logos-services`

export const serviceCards: ServiceCard[] = [
  {
    slug: 'vip',
    eyebrow: 'PRIVATE CLIENT EXPERIENCE',
    title: 'VIP Services',
    description:
      'Aviation, sea, road, and lifestyle—routed through one private desk. We brief, book, and follow through with discretion, so your time and preferences stay non-negotiable.',
    tags: ['PRIVATE CONCIERGE', 'TRAVEL PLANNING'],
    image: '/images/services/vip-service/luxury-travel.webp',
    brandLogo: `${SVC_CARD_LOGO}/luxury-sky.png`,
    brandLogoBlend: 'lighten',
  },
  {
    slug: 'wedding',
    eyebrow: 'SIGNATURE OCCASIONS',
    title: 'Wedding Services',
    description:
      'Concept-to-execution event direction for milestone celebrations, destination weddings, and executive experiences.',
    tags: ['CREATIVE DIRECTION', 'GUEST MANAGEMENT', 'VENUE PRODUCTION'],
    image: `${SVC_COVER}/wedding-sky.webp`,
    brandLogo: `${SVC_CARD_LOGO}/wedding-sky.png`,
    brandLogoBlend: 'lighten',
    comingSoon: true,
  },
  {
    slug: 'pool',
    eyebrow: 'ARCHITECTURAL OUTDOOR DESIGN',
    title: 'Swimming Pool & Garden Services',
    description:
      'Tailored exterior environments designed for leisure, hospitality, and long-term property value.',
    tags: ['POOL CONCEPTS', 'LANDSCAPE PLANNING', 'OUTDOOR INFRASTRUCTURE'],
    image: `${SVC_COVER}/Swimming-ppool.webp`,
    brandLogo: `${SVC_CARD_LOGO}/blue-sky.png`,
    brandLogoBlend: 'lighten',
  },
  {
    slug: 'storage',
    eyebrow: 'SECURE LOGISTICS',
    title: 'Storage2Rent',
    navTitle: 'Self Storage Services',
    description:
      'Enterprise-grade warehousing and container capacity for businesses and individuals that need space, security, and predictable monthly terms.',
    tags: ['INVENTORY FLOW', 'SECURE STORAGE', 'DISTRIBUTION SUPPORT'],
    image: `${SVC_COVER}/Storage-rent.webp`,
    brandLogo: `${SVC_CARD_LOGO}/storage-to-rent.png`,
    brandLogoBlend: 'lighten',
  },
  {
    slug: 'consulting',
    eyebrow: 'STRATEGIC ADVISORY',
    title: "Business Consultant's",
    description:
      'Executive advisory services helping organizations scale with clarity, governance, and market confidence.',
    tags: ['STRATEGY DESIGN', 'GROWTH MODELING', 'PERFORMANCE OVERSIGHT'],
    image: `${SVC_COVER}/10%20Business-consulting.webp`,
    brandLogo: `${SVC_CARD_LOGO}/komodromos-businness-consulting.png`,
    brandLogoBlend: 'normal',
  },
  {
    slug: 'aviation',
    eyebrow: 'AVIATION EXCELLENCE',
    title: 'Aviation Agency Services',
    description:
      'Private aviation orchestration — charter, management, and advisory for those who travel on their own terms.',
    tags: ['CHARTER', 'AIRCRAFT MANAGEMENT', 'AVIATION ADVISORY'],
    image: `${SVC_COVER}/Global-wings.webp`,
    brandLogo: `${SVC_CARD_LOGO}/global-wings.png`,
    brandLogoBlend: 'normal',
    brandSlug: 'aviation',
  },
  {
    slug: 'astreal',
    eyebrow: 'CAPITAL & DEVELOPMENT',
    title: 'Astreal Developers',
    navTitle: 'Property Developers',
    description:
      'End-to-end real estate structuring, from opportunity analysis to development strategy and portfolio growth.',
    tags: ['PROJECT PLANNING', 'INVESTMENT ADVISORY', 'ASSET MANAGEMENT'],
    image: `${SVC_COVER}/Astreal-developers.webp`,
    brandLogo: `${SVC_CARD_LOGO}/astreal-developers.png`,
    brandLogoBlend: 'lighten',
  },
  {
    slug: 'hr',
    eyebrow: 'PEOPLE & CULTURE',
    title: 'Human Resources Management',
    description:
      'Human capital services that align talent strategy, leadership development, and organizational outcomes.',
    tags: ['EXECUTIVE SEARCH', 'HR FRAMEWORKS', 'TALENT DEVELOPMENT'],
    image: `${SVC_COVER}/11 The-circle.webp`,
    brandLogo: `${SVC_CARD_LOGO}/the-circle-theory.png`,
    brandLogoBlend: 'lighten',
  },
  {
    slug: 'tax',
    eyebrow: 'CORPORATE COMPLIANCE',
    title: 'Tax & Accounting Services',
    description:
      'Trusted financial and legal support ensuring transparent operations, compliant structures, and informed decisions.',
    tags: ['TAX PLANNING', 'FINANCIAL REPORTING', 'REGULATORY ADVISORY'],
    image: `${SVC_COVER}/tax.webp`,
    brandLogo: `${SVC_CARD_LOGO}/tax-nex.png`,
    brandLogoBlend: 'lighten',
    comingSoon: true,
    brandSlug: 'tax',
  },
  {
    slug: 'janchapelle',
    eyebrow: 'BRIDAL & COUTURE',
    title: 'Janchapelle — All About Weddings',
    navTitle: 'Janchapelle - Luxury Bridal Collection',
    description:
      'One of the leading Wedding Dress houses. High-end fabrications and meticulous sewing techniques for brides who demand perfection.',
    tags: ['BRIDAL COUTURE', 'CUSTOM FITTINGS', 'LUXURY FABRICS'],
    image: `${SVC_COVER}/Bridal.webp`,
    brandLogo: `${SVC_CARD_LOGO}/jan-chapelle.png`,
    brandLogoBlend: 'lighten',
    comingSoon: true,
  },
  {
    slug: 'adr-mediation',
    eyebrow: 'DISPUTE RESOLUTION',
    title: 'A.D.R Dispute Mediation Center',
    description:
      'Professional mediation and arbitration services. We see solutions where others see problems — confidential, impartial, and results-driven.',
    tags: ['MEDIATION', 'ARBITRATION', 'CONFLICT RESOLUTION'],
    image: `${SVC_COVER}/justice-law.webp`,
    brandLogo: `${SVC_CARD_LOGO}/law-logo.png`,
    brandLogoBlend: 'lighten',
    comingSoon: true,
  },
]

export function getServiceBySlug(slug: string | undefined) {
  if (!slug) return undefined
  return serviceCards.find((c) => c.slug === slug)
}

/** Detail route for each homepage card (`/services/wedding`, `/services/pool`, etc.). */
export function getServicePagePath(slug: string): string {
  return `/services/${slug}`
}

export { getServicePageHref, isExternalServiceHref } from '../seo/domainRegistry'

