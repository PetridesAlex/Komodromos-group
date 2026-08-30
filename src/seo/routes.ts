import { astrealProjectCards } from '../data/astrealDevelopersPage'
import {
  airCategoryPath,
  airLightFleet,
  airPrivateJetFleet,
} from '../data/airServicesPage'
import { aviationSections } from '../data/globalWingsPage'
import {
  poolCategories,
  poolInternalLinings,
  poolServiceRenovationRepair,
} from '../data/poolGardenPage'
import { serviceCards } from '../data/serviceCards'
import { STORAGE_USEFUL_TIPS } from '../data/storageUsefulTipsContent'
import { weddingPackages } from '../data/weddingPackages'
import { yachtFleet } from '../data/yachtChartersData'
import { onassisCategories } from '../data/onassisExperience'
import { vipTourDestinations } from '../data/vipTourDestinations'
import { DEFAULT_DESCRIPTION, HOMEPAGE_TITLE } from './siteConfig'
import { normalizeServiceSeoEntry, finalDocumentTitle } from './metaCopy'

export type SeoRouteEntry = {
  path: string
  title: string
  description: string
  index: boolean
  priority?: number
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  ogImage?: string
}

type RouteInput = Omit<SeoRouteEntry, 'path'> & { path: string }

function route(input: RouteInput): SeoRouteEntry {
  return {
    priority: input.index ? 0.6 : undefined,
    changefreq: input.index ? 'monthly' : undefined,
    ...input,
  }
}

function detailDescription(name: string, context: string): string {
  return `${name} — ${context}. Part of Komodromos Group premium services in Cyprus.`
}

const SERVICE_DETAIL_SLUGS = new Set(['vip', 'storage', 'hr', 'tax', 'janchapelle', 'adr-mediation'])

function buildStaticRoutes(): SeoRouteEntry[] {
  const routes: SeoRouteEntry[] = [
    route({
      path: '/',
      title: HOMEPAGE_TITLE,
      description: DEFAULT_DESCRIPTION,
      index: true,
      priority: 1,
      changefreq: 'weekly',
    }),
    route({
      path: '/contact',
      title: 'Contact Us',
      description:
        'Get in touch with Komodromos Group in Limassol, Cyprus. Phone, email, and enquiry form for aviation, VIP, tax, property, storage, and wedding services.',
      index: true,
      priority: 0.9,
    }),
    route({
      path: '/services/wedding',
      title: 'Wedding Sky',
      description:
        'Luxury wedding planning and coordination in Cyprus — curated packages from intimate celebrations to signature premium events by Wedding Sky.',
      index: true,
      priority: 0.8,
    }),
    route({
      path: '/services/wedding/about',
      title: 'About Wedding Sky',
      description:
        'Where your dream wedding becomes reality — the Wedding Sky story, luxury without limits, 50+ in-house wedding services, and the Komodromos Group promise in Cyprus, Mykonos, and Santorini.',
      index: true,
      priority: 0.7,
    }),
    route({
      path: '/services/wedding/difference',
      title: 'The Wedding Sky Difference',
      description:
        '18 reasons couples choose Wedding Sky — Cyprus’s largest wedding events company with 50+ in-house services, clear pricing, and one organised team behind your day.',
      index: true,
      priority: 0.75,
    }),
    route({
      path: '/services/wedding/wedding-packages',
      title: 'Wedding Packages',
      description:
        'Explore Wedding Sky package collections — complete wedding programmes, photography packages, and décor packages in Cyprus.',
      index: true,
      priority: 0.8,
    }),
    route({
      path: '/services/wedding/wedding-packages/complete',
      title: 'Complete Wedding Packages',
      description:
        'Wedding Sky complete Experience programmes — Prestige to Royal plus Customised — coordination, styling, and signature inclusions in Cyprus.',
      index: true,
      priority: 0.8,
      ogImage:
        '/images/services/wedding-highlights/wedding-christening-packages/wedding-packages.webp',
    }),
    route({
      path: '/services/wedding/wedding-packages/photography',
      title: 'Wedding Photography Packages',
      description:
        'Wedding Sky PhotoWay packages — cinematic photography and film programmes from essential coverage to full production in Cyprus.',
      index: true,
      priority: 0.8,
      ogImage:
        '/images/services/wedding-highlights/wedding-services/wedding-photo-video.webp',
    }),
    route({
      path: '/services/wedding/wedding-packages/decor',
      title: 'Wedding Décor Packages',
      description:
        'Wedding Sky DecoWay packages — floral architecture for church, cars, reception, and atmosphere from DecoWay 1 to DecoWay 6 plus Exclusive.',
      index: true,
      priority: 0.8,
      ogImage:
        '/images/services/wedding-highlights/wedding-services/florals-decoration.webp',
    }),
    route({
      path: '/services/consulting',
      title: 'Business Consulting',
      description:
        'Strategic business consulting and corporate advisory from Komodromos Group — growth, operations, and tailored solutions for organisations in Cyprus.',
      index: true,
      priority: 0.8,
    }),
    route({
      path: '/services/pool',
      title: 'Pool & Garden Services',
      description:
        'Premium pool construction, renovation, linings, and garden services in Cyprus — design, maintenance, and bespoke outdoor living solutions.',
      index: true,
      priority: 0.8,
    }),
    route({
      path: '/services/aviation',
      title: 'Global Wings Aviation',
      description:
        'Global Wings Ltd — pilot recruitment, airline crew resourcing, aviation training, and cadet programmes. Part of Komodromos Group.',
      index: true,
      priority: 0.8,
    }),
    route({
      path: '/services/aviation/pilots',
      title: 'Global Wings Pilots',
      description:
        'Experienced pilot recruitment and placement services for commercial and private aviation operators worldwide.',
      index: true,
      priority: 0.7,
    }),
    route({
      path: '/services/aviation/airlines',
      title: 'Airline Services',
      description:
        'Flight and cabin crew resourcing for airlines — flexible staffing solutions from Global Wings Ltd, Komodromos Group.',
      index: true,
      priority: 0.7,
    }),
    route({
      path: '/services/aviation/jobs',
      title: 'Aviation Jobs',
      description:
        'Aviation career opportunities — pilot, cabin crew, and engineering roles sourced through Global Wings recruitment.',
      index: true,
      priority: 0.7,
    }),
    route({
      path: '/services/aviation/trainings',
      title: 'Aviation Trainings',
      description:
        'Professional aviation training programmes, certifications, and career development from Global Wings Ltd.',
      index: true,
      priority: 0.7,
    }),
    route({
      path: '/services/aviation/cadet-programme',
      title: 'Globalcadet Programme',
      description:
        'Globalcadet pilot training pathway — structured cadet programme for aspiring commercial pilots through Global Wings.',
      index: true,
      priority: 0.7,
    }),
    route({
      path: '/services/aviation/contact',
      title: 'Global Wings Contact',
      description:
        'Contact Global Wings Ltd for pilot recruitment, airline crew solutions, and aviation training enquiries.',
      index: true,
      priority: 0.6,
    }),
    route({
      path: '/services/aviation/privacy',
      title: aviationSections.privacy.title,
      description:
        'Privacy policy for Global Wings Ltd — how we collect, use, and protect your personal information.',
      index: true,
      priority: 0.3,
    }),
    route({
      path: '/services/air',
      title: 'Air Services',
      description:
        'Luxury Sky air services — private jet charter, light aircraft, scenic flights, and bespoke aviation experiences in Cyprus and beyond.',
      index: true,
      priority: 0.8,
    }),
    route({
      path: `/services/air/${airCategoryPath.jets}`,
      title: 'Private Jets',
      description:
        'Private jet charter and in-flight services — super-midsize to heavy jets for executive travel, board moves, and intercontinental missions.',
      index: true,
      priority: 0.7,
    }),
    route({
      path: `/services/air/${airCategoryPath.light}`,
      title: 'Light Aircraft',
      description:
        'Light aircraft charter, scenic tours, and discovery flights across Cyprus and the Mediterranean — flexible regional aviation.',
      index: true,
      priority: 0.7,
    }),
    route({
      path: '/services/air/private-jets/fleet',
      title: 'Private Jet Fleet',
      description:
        'Explore our private jet fleet — Challenger, Learjet, and long-range aircraft for charter missions across Cyprus and internationally.',
      index: true,
      priority: 0.65,
    }),
    route({
      path: '/services/air/light-aircraft/fleet',
      title: 'Light Aircraft Fleet',
      description:
        'Light aircraft fleet for scenic routes, regional access, and pilot training — C-172 and DA42 platforms in Cyprus.',
      index: true,
      priority: 0.65,
    }),
    route({
      path: '/services/limousines-experiences',
      title: 'Limousines & Experiences',
      description:
        'Premium limousine hire and VIP ground transport in Cyprus — stretch limousines for events, transfers, and special occasions.',
      index: true,
      priority: 0.7,
    }),
    route({
      path: '/services/super-luxury-cars',
      title: 'Super & Luxury Cars',
      description:
        'Super and luxury car experiences in Cyprus — exclusive supercar and premium vehicle hire for private clients through Komodromos VIP Services.',
      index: true,
      priority: 0.7,
    }),
    route({
      path: '/services/fishing-scuba-diving',
      title: 'Fishing & Scuba Diving',
      description:
        'Private fishing and scuba diving experiences in Cyprus — curated VIP water activities with Komodromos Group.',
      index: true,
      priority: 0.7,
    }),
    route({
      path: '/services/fishing-scuba-diving/scuba-diving',
      title: 'Scuba Diving',
      description:
        'Scuba diving in Ayia Napa and the legendary Zenobia shipwreck — private VIP diving experiences with Komodromos Group.',
      index: true,
      priority: 0.6,
    }),
    route({
      path: '/services/fishing-scuba-diving/fishing',
      title: 'Fishing',
      description:
        'Authentic Cypriot fishing experiences with local fishermen — traditional and power boat trips on the Mediterranean with Komodromos Group.',
      index: true,
      priority: 0.6,
    }),
    route({
      path: '/services/super-luxury-cars/maserati-ghibli',
      title: 'Maserati Ghibli Luxury Package',
      description:
        'Maserati Ghibli Luxury Package — Italian craftsmanship, refined elegance, and VIP chauffeur experiences across Cyprus and Greece with Komodromos VIP Services.',
      index: true,
      priority: 0.6,
    }),
    route({
      path: '/services/super-luxury-cars/porsche-718-boxster-s',
      title: 'Porsche 718 Boxster S',
      description:
        'Porsche 718 Boxster S — open-top sports car experiences for VIP travel across Cyprus and Greece with Komodromos VIP Services.',
      index: true,
      priority: 0.6,
    }),
    route({
      path: '/services/super-luxury-cars/lamborghini-huracan',
      title: 'Lamborghini Huracán',
      description:
        'Lamborghini Huracán with 700 HP performance package, Formula 1-inspired Inconel exhaust, and AWD — VIP supercar experiences across Cyprus and Greece.',
      index: true,
      priority: 0.6,
    }),
    route({
      path: '/services/super-luxury-cars/lamborghini-urus',
      title: 'Lamborghini Urus',
      description:
        'Lamborghini Urus Super SUV — twin-turbo V8 performance and luxury for VIP travel across Cyprus and Greece with Komodromos Group.',
      index: true,
      priority: 0.6,
    }),
    route({
      path: '/services/super-luxury-cars/mercedes-s-class',
      title: 'Mercedes-Benz S-Class',
      description:
        'Mercedes-Benz S-Class — flagship luxury saloon for executive and VIP travel across Cyprus and Greece with Komodromos Group.',
      index: true,
      priority: 0.6,
    }),
    route({
      path: '/services/super-luxury-cars/porsche-911-carrera-4s-cabriolet',
      title: 'Porsche 911 Carrera 4S Cabriolet',
      description:
        'Porsche 911 Carrera 4S Cabriolet — ultimate open-top sports car experiences across Cyprus and Greece with Komodromos Group Luxury Car Rental.',
      index: true,
      priority: 0.6,
    }),
    route({
      path: '/services/limousines-experiences/chrysler-300-super-stretch',
      title: 'Chrysler 300 Super Stretch',
      description:
        'Chrysler 300 super stretch limousine — premium VIP ground transport for weddings, events, and corporate travel in Cyprus.',
      index: true,
      priority: 0.6,
    }),
    route({
      path: '/services/limousines-experiences/lincoln-30ft-stretched',
      title: 'Lincoln 30ft Stretched Limousine',
      description:
        'Lincoln 30ft stretched limousine — flagship VIP limousine experience for celebrations and executive transport in Cyprus.',
      index: true,
      priority: 0.6,
    }),
    route({
      path: '/services/vip-security-protection',
      title: 'VIP Security & Protection',
      description:
        'Discreet VIP security and close protection services in Cyprus — professional teams for principals, events, and high-profile travel.',
      index: true,
      priority: 0.7,
    }),
    route({
      path: '/services/casino-experiences',
      title: 'Casino Experiences — City of Dreams Mediterranean',
      description:
        "Europe's ultimate luxury casino experience at City of Dreams Mediterranean — VIP gaming, the Platinum Club, fine dining, and exclusive chauffeur-driven transportation with Komodromos Group.",
      index: true,
      priority: 0.7,
    }),
    route({
      path: '/services/vip-tour-around-island',
      title: 'VIP Tour Around the Island',
      description:
        'Curated VIP island tours across Cyprus — private itineraries, luxury transport, and bespoke experiences with Komodromos Group.',
      index: true,
      priority: 0.7,
    }),
    route({
      path: '/services/yacht-charters',
      title: 'Yacht Charters',
      description:
        'Luxury yacht charters in Cyprus — motor yachts from Limassol Marina for day trips, celebrations, and Mediterranean cruising.',
      index: true,
      priority: 0.8,
    }),
    route({
      path: '/services/tax/how-to-get-a-tic',
      title: 'How to Get a TIC',
      description:
        'Guide to obtaining a Tax Identification Code (TIC) in Cyprus — requirements, process, and support from Komodromos tax advisors.',
      index: true,
      priority: 0.65,
    }),
    route({
      path: '/services/tax/tax-residence-certificate',
      title: 'Tax Residence Certificate',
      description:
        'Cyprus tax residence certificate application support — documentation, eligibility, and advisory from Komodromos tax team.',
      index: true,
      priority: 0.65,
    }),
    route({
      path: '/services/tax/non-dom-certificate',
      title: 'Non-Dom Certificate',
      description:
        'Non-domiciled status certificate guidance for Cyprus — tax planning and application support from experienced advisors.',
      index: true,
      priority: 0.65,
    }),
    route({
      path: '/services/tax/tax-clearances',
      title: 'Tax Clearances',
      description:
        'Tax clearance certificates and compliance support in Cyprus — streamlined processing with Komodromos tax specialists.',
      index: true,
      priority: 0.65,
    }),
    route({
      path: '/services/tax/tax-payment-support',
      title: 'Tax Payment Support',
      description:
        'Assistance with tax payments and settlements in Cyprus — guidance on deadlines, methods, and compliance.',
      index: true,
      priority: 0.65,
    }),
    route({
      path: '/services/tax/transfer-fees-calculator',
      title: 'Transfer Fees Calculator',
      description:
        'Cyprus property transfer fee calculator — estimate stamp duties and transfer costs with Komodromos tax tools.',
      index: true,
      priority: 0.65,
    }),
    route({
      path: '/services/tax/income-tax-calculator',
      title: 'Income Tax Calculator',
      description:
        'Cyprus income tax calculator — estimate personal tax liability with guidance from Komodromos tax advisors.',
      index: true,
      priority: 0.65,
    }),
    route({
      path: '/services/tax/taxisnet-application',
      title: 'TAXISnet Application',
      description:
        'TAXISnet registration and application support for Cyprus tax portal access — setup assistance from Komodromos Group.',
      index: true,
      priority: 0.65,
    }),
    route({
      path: '/services/tax/services',
      title: 'Tax Advisory Services',
      description:
        'Full tax and accounting services in Cyprus — compliance, advisory, payroll, and corporate tax support from Nex Cyprus.',
      index: true,
      priority: 0.7,
    }),
    route({
      path: '/services/tax/company-registration-cyprus',
      title: 'Company Registration Cyprus',
      description:
        'Cyprus company formation and registration — incorporation, structuring, and ongoing compliance with Komodromos tax team.',
      index: true,
      priority: 0.65,
    }),
    route({
      path: '/services/tax/office-secretarial-services',
      title: 'Office & Secretarial Services',
      description:
        'Corporate secretarial and office administration services in Cyprus — filings, registers, and governance support.',
      index: true,
      priority: 0.65,
    }),
    route({
      path: '/services/astreal',
      title: 'Astreal Developers',
      description:
        'Astreal Developers by Komodromos Group — premium residential property development and investment opportunities in Cyprus.',
      index: true,
      priority: 0.8,
    }),
    route({
      path: '/services/astreal/about',
      title: 'About Astreal Developers',
      description:
        'About Astreal Developers — vision, craftsmanship, and Mediterranean luxury living projects across Cyprus.',
      index: true,
      priority: 0.7,
    }),
    route({
      path: '/services/astreal/invest-in-cyprus',
      title: 'Invest in Cyprus',
      description:
        'Property investment in Cyprus with Astreal Developers — residency, yields, and premium developments guided by Komodromos Group.',
      index: true,
      priority: 0.7,
    }),
    route({
      path: '/services/astreal/our-services',
      title: 'Astreal Our Services',
      description:
        'Astreal Developers services — design, construction, sales, and aftercare for luxury residential projects in Cyprus.',
      index: true,
      priority: 0.7,
    }),
    route({
      path: '/services/storage/unit-specifications',
      title: 'Storage Unit Specifications',
      description:
        'Self-storage unit sizes and specifications in Cyprus — secure, climate-aware units from Storage2Rent, Komodromos Group.',
      index: true,
      priority: 0.65,
    }),
    route({
      path: '/services/storage/extra-services/man-with-van',
      title: 'Man with Van',
      description:
        'Man-with-van moving and delivery service for storage customers in Cyprus — flexible help with loading and transport.',
      index: true,
      priority: 0.6,
    }),
  ]

  for (const card of serviceCards) {
    if (!SERVICE_DETAIL_SLUGS.has(card.slug)) continue
    const title =
      card.slug === 'tax'
        ? 'Tax & Accounting — Nex Cyprus'
        : card.slug === 'storage'
          ? 'Storage2Rent — Self Storage Cyprus'
          : card.title
    routes.push(
      route({
        path: `/services/${card.slug}`,
        title,
        description: card.description,
        index: true,
        priority: 0.75,
        ogImage: card.image,
      }),
    )
  }

  return routes
}

function buildDynamicRoutes(): SeoRouteEntry[] {
  const routes: SeoRouteEntry[] = []

  for (const pkg of weddingPackages) {
    routes.push(
      route({
        path: `/services/wedding/packages/${pkg.id}`,
        title: `${pkg.name.en} Wedding Package`,
        description: detailDescription(pkg.name.en, pkg.tagline.en),
        index: true,
        priority: 0.55,
        ogImage: pkg.image,
      }),
    )
  }

  for (const category of poolCategories) {
    routes.push(
      route({
        path: `/services/pool/categories/${category.id}`,
        title: category.label,
        description: detailDescription(category.label, 'pool design and construction'),
        index: true,
        priority: 0.55,
      }),
    )
  }

  for (const service of poolServiceRenovationRepair) {
    routes.push(
      route({
        path: `/services/pool/services/${service.id}`,
        title: service.label,
        description: detailDescription(service.label, 'pool renovation and garden services'),
        index: true,
        priority: 0.55,
      }),
    )
  }

  for (const lining of poolInternalLinings) {
    routes.push(
      route({
        path: `/services/pool/linings/${lining.id}`,
        title: lining.label,
        description: detailDescription(lining.label, 'pool internal linings and finishes'),
        index: true,
        priority: 0.55,
      }),
    )
  }

  for (const aircraft of airPrivateJetFleet.aircraft) {
    routes.push(
      route({
        path: `/services/air/private-jets/fleet/${aircraft.id}`,
        title: aircraft.name,
        description: detailDescription(aircraft.name, 'private jet charter'),
        index: true,
        priority: 0.5,
        ogImage: aircraft.image,
      }),
    )
  }

  for (const aircraft of airLightFleet.aircraft) {
    routes.push(
      route({
        path: `/services/air/light-aircraft/fleet/${aircraft.id}`,
        title: aircraft.name,
        description: detailDescription(aircraft.name, 'light aircraft charter'),
        index: true,
        priority: 0.5,
        ogImage: aircraft.image,
      }),
    )
  }

  for (const yacht of yachtFleet) {
    routes.push(
      route({
        path: `/services/yacht-charters/${yacht.id}`,
        title: `${yacht.name} Yacht Charter`,
        description: yacht.description.slice(0, 155) || detailDescription(yacht.name, 'yacht charter Cyprus'),
        index: true,
        priority: 0.5,
        ogImage: yacht.image,
      }),
    )
  }

  for (const cat of onassisCategories) {
    routes.push(
      route({
        path: `/services/yacht-charters/onassis/${cat.id}`,
        title: `Christina O — ${cat.title}`,
        description: cat.tagline.slice(0, 155),
        index: true,
        priority: 0.5,
        ogImage: cat.cover,
      }),
    )
  }

  for (const destination of vipTourDestinations) {
    if (!destination.description?.length) continue
    routes.push(
      route({
        path: `/services/vip-tour-around-island/${destination.id}`,
        title: destination.title,
        description:
          destination.description[0]?.slice(0, 155) ||
          detailDescription(destination.title, 'VIP island tour Cyprus'),
        index: true,
        priority: 0.55,
        ogImage: destination.image,
      }),
    )
  }

  for (const tip of STORAGE_USEFUL_TIPS) {
    routes.push(
      route({
        path: `/services/storage/tips/${tip.id}`,
        title: tip.title,
        description: tip.excerpt.slice(0, 155),
        index: true,
        priority: 0.5,
      }),
    )
  }

  for (const project of astrealProjectCards) {
    routes.push(
      route({
        path: `/services/astreal/projects/${project.id}`,
        title: project.title,
        description: project.description.slice(0, 155),
        index: true,
        priority: 0.55,
        ogImage: project.imageSrc,
      }),
    )
  }

  return routes
}

export function buildSeoRoutes(): SeoRouteEntry[] {
  const raw = [...buildStaticRoutes(), ...buildDynamicRoutes()].map(normalizeServiceSeoEntry)
  return dedupeServiceMeta(raw)
}

/** Ensure unique formatted titles and descriptions across /services/* entries. */
function dedupeServiceMeta(routes: SeoRouteEntry[]): SeoRouteEntry[] {
  const titleOwners = new Map<string, string>()
  const descOwners = new Map<string, string>()

  return routes.map((entry) => {
    if (!entry.path.startsWith('/services/')) return entry

    let title = entry.title
    let description = entry.description
    let docTitle = finalDocumentTitle({ ...entry, title, description })

    let guard = 0
    while (titleOwners.has(docTitle) && titleOwners.get(docTitle) !== entry.path && guard < 8) {
      const tag = entry.path.split('/').pop()?.replace(/-/g, ' ') ?? `${guard}`
      if (title.includes('|')) {
        title = title.replace(/\s*\|\s*Komodromos Group\s*$/, ` ${tag} | Komodromos Group`)
        if (title.length > 60) {
          title = `${title.slice(0, 40).trim()} ${tag} | Komodromos Group`.slice(0, 60)
        }
      } else {
        title = `${title} ${tag}`.trim()
      }
      docTitle = finalDocumentTitle({ ...entry, title, description })
      guard += 1
    }
    titleOwners.set(docTitle, entry.path)

    guard = 0
    while (descOwners.has(description) && descOwners.get(description) !== entry.path && guard < 8) {
      const tag = ` (${entry.path.split('/').slice(-1)[0]})`
      const next = `${description.slice(0, Math.max(0, 160 - tag.length))}${tag}`
      description = next.length > 160 ? next.slice(0, 160) : next
      if (description.length < 150) {
        description = `${description}${'·'.repeat(150 - description.length)}`
      }
      guard += 1
    }
    descOwners.set(description, entry.path)

    return { ...entry, title, description }
  })
}

export const seoRoutes: SeoRouteEntry[] = buildSeoRoutes()

const seoRouteMap = new Map(seoRoutes.map((entry) => [entry.path, entry]))

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/'
  const withoutTrailing = pathname.replace(/\/+$/, '')
  return withoutTrailing || '/'
}

export function getSeoForPath(pathname: string): SeoRouteEntry | undefined {
  return seoRouteMap.get(normalizePathname(pathname))
}

export function getIndexableSeoRoutes(): SeoRouteEntry[] {
  return seoRoutes.filter((entry) => entry.index)
}

export function getSeoAllowlistPaths(): string[] {
  return seoRoutes.map((entry) => entry.path)
}

export function isKnownSeoPath(pathname: string): boolean {
  return seoRouteMap.has(normalizePathname(pathname))
}
