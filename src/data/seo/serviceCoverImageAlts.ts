/**
 * SEO-editable image alt text — serviceCoverImageAlts
 * Edit the strings only. Keys are image URL paths used on the site.
 */

export const serviceCoverImageAlts: Record<string, string> = {
  '/images/services/companie-services-cover/11 The-circle.webp': 'Human Resources Management — Komodromos Group service cover',
  '/images/services/companie-services-cover/Astreal-developers.webp': 'Astreal Developers — Komodromos Group service cover',
  '/images/services/companie-services-cover/Bridal.webp': 'Janchapelle — All About Weddings — Komodromos Group service cover',
  '/images/services/companie-services-cover/Global-wings.webp': 'Aviation Agency Services — Komodromos Group service cover',
  '/images/services/companie-services-cover/Storage-rent.webp': 'Storage2Rent — Komodromos Group service cover',
  '/images/services/swimming-pool-garden-services/Swim-Spas.webp': 'Swimming Pool & Garden Services — Komodromos Group service cover',
  '/images/services/companie-services-cover/justice-law.webp': 'A.D.R Dispute Mediation Center — Komodromos Group service cover',
  '/images/services/companie-services-cover/tax.webp': 'Tax & Accounting Services — Komodromos Group service cover',
  '/images/services/companie-services-cover/wedding-sky.webp': 'Wedding Services — Komodromos Group service cover',
  '/images/services/vip-service/Real-estate.webp': 'Real Estate — VIP Services Cyprus',
  '/images/services/vip-service/air-services.webp': 'Air Services & Experiences — VIP Services Cyprus',
  '/images/services/vip-service/cazino.webp': 'Casino Experiences — VIP Services Cyprus',
  '/images/services/vip-service/fishing-scuba-diving.webp': 'Fishing & Scuba Diving — VIP Services Cyprus',
  '/images/services/vip-service/lamporghini.webp': 'Super & Luxury Cars — VIP Services Cyprus',
  '/images/services/vip-service/limouzine.webp': 'Limousines Experiences — VIP Services Cyprus',
  '/images/services/vip-service/luxury-travel.webp': 'VIP Services — Komodromos Group service cover',
  '/images/services/vip-service/luxury-yacht.webp': 'Maritime Services & Experiences — VIP Services Cyprus',
  '/images/services/vip-service/private-jet.webp': 'VIP Security & Protection — VIP Services Cyprus',
  '/images/services/vip-service/vip-transpotration.webp': 'VIP Tour Around the Island & More — VIP Services Cyprus',
  '/images/services/wedding-highlights/bridal.webp': 'Bridal couture & partner ateliers — Wedding Sky Cyprus',
  '/images/services/wedding-highlights/consultation.webp': 'Book a private consultation — Wedding Sky Cyprus',
  '/images/services/wedding-highlights/destinations.webp': 'Island-wide ceremonies & receptions — Wedding Sky Cyprus',
  '/images/services/wedding-highlights/guests.webp': 'Hospitality, travel cues & seating craft — Wedding Sky Cyprus',
  '/images/services/wedding-highlights/packages.webp': 'Tiers from essential to fully bespoke — Wedding Sky Cyprus',
  '/images/services/wedding-highlights/planning.webp': 'Concept, timeline & vendor orchestration — Wedding Sky Cyprus',
  '/images/services/wedding-highlights/production.webp': 'Venue design, lighting & run of show — Wedding Sky Cyprus',
  '/images/services/wedding-highlights/stories.webp': 'Words from couples we walked beside — Wedding Sky Cyprus',
  '/images/services/wedding-packages/tier-basic-plus.webp': 'Wedding Sky Basic Plus package, Cyprus',
  '/images/services/wedding-packages/tier-basic.webp': 'Wedding Sky Basic package, Cyprus',
  '/images/services/wedding-packages/tier-classic-plus.webp': 'Wedding Sky Classic Plus package, Cyprus',
  '/images/services/wedding-packages/tier-classic.webp': 'Wedding Sky Classic package, Cyprus',
  '/images/services/wedding-packages/tier-customised.webp': 'Wedding Sky Customised package, Cyprus',
  '/images/services/wedding-packages/tier-premium.webp': 'Wedding Sky Premium package, Cyprus',
}

export function getServiceCoverImageAlt(src: string, fallback: string): string {
  const direct = serviceCoverImageAlts[src]?.trim()
  if (direct) return direct
  try {
    const decoded = serviceCoverImageAlts[decodeURIComponent(src)]?.trim()
    if (decoded) return decoded
  } catch {
    /* ignore */
  }
  const file = src.split('/').pop() ?? ''
  const byFile = serviceCoverImageAlts[file]?.trim()
  if (byFile) return byFile
  try {
    const decodedFile = decodeURIComponent(file)
    const byDecodedFile = serviceCoverImageAlts[decodedFile]?.trim()
    if (byDecodedFile) return byDecodedFile
  } catch {
    /* ignore */
  }
  return fallback
}
