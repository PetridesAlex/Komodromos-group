/** VIP detail page grid — cover images in public/images/services/vip-service/ */
const base = '/images/services/vip-service'

export type VipSubServiceItem = {
  slug: string
  title: string
  image: string
  /** When set, overrides automatic title split (kicker + name lines). */
  kicker?: string
  nameLine?: string
  /** Custom link; default ServiceCard target is `/contact`. */
  to?: string
}

export const vipSubServices: VipSubServiceItem[] = [
  {
    slug: 'maritime',
    title: 'Maritime Services & Experiences',
    kicker: 'Maritime',
    nameLine: 'Services & experiences',
    image: `${base}/luxury-yacht.webp`,
    to: '/services/yacht-charters',
  },
  {
    slug: 'air',
    title: 'Air Services & Experiences',
    kicker: 'Air',
    nameLine: 'Services & experiences',
    image: `${base}/air-services.webp`,
    to: '/services/air',
  },
  {
    slug: 'super-luxury-cars',
    title: 'Super & Luxury Cars',
    image: `${base}/lamporghini.webp`,
  },
  {
    slug: 'limousines',
    title: 'Limousines Experiences',
    kicker: 'Limousines',
    nameLine: 'experiences',
    image: `${base}/limouzine.webp`,
    to: '/services/limousines-experiences',
  },
  /** General VIP / lifestyle concierge — `public/images/services/vip-service/private-jet.webp` */
  {
    slug: 'vip-concierge',
    title: 'VIP Security & Protection',
    kicker: 'VIP',
    nameLine: 'Security & protection',
    image: `${base}/private-jet.webp`,
  },
  {
    slug: 'fishing-scuba',
    title: 'Fishing & Scuba Diving',
    image: `${base}/fishing-scuba-diving.webp`,
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    image: `${base}/Real-estate.webp`,
  },
  {
    slug: 'casino',
    title: 'Casino Experiences',
    kicker: 'Casino',
    nameLine: 'experiences',
    image: `${base}/cazino.webp`,
  },
  {
    slug: 'vip-tour-island',
    title: 'VIP Tour Around the Island & More',
    image: `${base}/vip-transpotration.webp`,
  },
]
