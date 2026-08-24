import type { SeoRouteEntry } from './routes'
import {
  SITE_NAME,
  absoluteImageUrl,
  absoluteUrl,
  formatPageTitle,
} from './siteConfig'

const TITLE_SUFFIX = ` | ${SITE_NAME}`
const TITLE_SUFFIX_LEN = TITLE_SUFFIX.length
/** Base title length so formatted title lands in 50–60 characters. */
const MIN_BASE = 50 - TITLE_SUFFIX_LEN
const MAX_BASE = 60 - TITLE_SUFFIX_LEN
const MIN_DESC = 150
const MAX_DESC = 160

/** Hand-tuned hub SEO (final title already includes brand; description 150–160). */
export const SERVICE_HUB_SEO: Record<
  string,
  { title: string; description: string }
> = {
  '/services/hr': {
    title: 'HR Management & Talent Strategy | Komodromos Group',
    description:
      'Komodromos Group Human Resources Management in Cyprus — talent strategy, executive search, leadership development, and organisational culture with The Circle™.',
  },
  '/services/vip': {
    title: 'VIP Concierge & Luxury Lifestyle | Komodromos Group',
    description:
      'VIP concierge and luxury lifestyle services in Cyprus — private travel, yachts, cars, security, casino nights, and bespoke itineraries from Komodromos Group.',
  },
  '/services/storage': {
    title: 'Storage2Rent Self-Storage Cyprus | Komodromos Group',
    description:
      'Storage2Rent secure self-storage in Cyprus — flexible units, premium facilities, moving support, and tailored storage solutions for homes and businesses.',
  },
  '/services/tax': {
    title: 'TaxNex Tax & Accounting in Cyprus | Komodromos Group',
    description:
      'TaxNex Cyprus tax and accounting services — company registration, tax residence, clearances, TAXISnet support, and corporate compliance with Komodromos Group.',
  },
  '/services/janchapelle': {
    title: 'Janchapelle Bridal Atelier Cyprus | Couture Wedding Dresses',
    description:
      'Janchapelle bridal atelier in Cyprus — couture wedding dresses, private fittings, lookbook collections, and appointments for modern brides from Komodromos.',
  },
  '/services/adr-mediation': {
    title: 'ADR Mediation Dispute Center Cyprus | Komodromos Group',
    description:
      'A.D.R Dispute Mediation Center in Cyprus — professional mediation, conflict resolution, and alternative dispute services within the Komodromos Group network.',
  },
  '/services/wedding': {
    title: 'Wedding Sky Luxury Events Cyprus | Komodromos Group',
    description:
      'Wedding Sky luxury wedding planning in Cyprus — curated packages, venue coordination, and signature celebrations by the Komodromos Group of Companies.',
  },
  '/services/consulting': {
    title: 'Business Consulting Advisory Cyprus | Komodromos Group',
    description:
      'Strategic business consulting in Cyprus from Komodromos Group — growth advisory, operations, corporate structuring, and tailored solutions for organisations.',
  },
  '/services/pool': {
    title: 'Pool & Garden Services in Cyprus | Komodromos Group',
    description:
      'Blue Sky pool and garden services in Cyprus — construction, renovation, linings, landscaping, and premium outdoor living solutions by Komodromos Group.',
  },
  '/services/aviation': {
    title: 'Global Wings Aviation Agency Cyprus | Komodromos Group',
    description:
      'Global Wings aviation agency — pilot recruitment, airline crew, training, and cadet programmes worldwide. Premium aviation services by Komodromos Group.',
  },
  '/services/astreal': {
    title: 'Astreal Property Developers Cyprus | Komodromos Group',
    description:
      'Astreal Developers property development in Cyprus — residential and investment projects, buyer guidance, and premium real estate within Komodromos Group.',
  },
  '/services/air': {
    title: 'Private Jets & Light Aircraft Cyprus | Komodromos Group',
    description:
      'Charter private jets and light aircraft in Cyprus with Komodromos Group — premium air services, fleet options, and tailored flight experiences for VIP travel.',
  },
  '/services/yacht-charters': {
    title: 'Yacht Charters & Christina O Cyprus | Komodromos Group',
    description:
      'Luxury yacht charters in Cyprus — motor yachts, coastal cruises, and flagship Christina O experiences arranged by Komodromos Group maritime concierge services.',
  },
  '/services/limousines-experiences': {
    title: 'Limousine Hire & VIP Transfers Cyprus | Komodromos Group',
    description:
      'Premium limousine hire and chauffeur experiences in Cyprus — stretch limousines for weddings, events, and VIP transfers with Komodromos Group services.',
  },
  '/services/super-luxury-cars': {
    title: 'Super Luxury Car Hire in Cyprus | Komodromos Group',
    description:
      'Super luxury car hire in Cyprus — Lamborghini, Porsche, Maserati, and Mercedes for VIP travel, events, and exclusive experiences with Komodromos Group.',
  },
  '/services/fishing-scuba-diving': {
    title: 'Fishing & Scuba Diving in Cyprus | Komodromos Group',
    description:
      'Fishing and scuba diving experiences in Cyprus — guided water adventures and VIP leisure activities arranged through Komodromos Group lifestyle services.',
  },
  '/services/vip-security-protection': {
    title: 'VIP Security & Close Protection | Komodromos Group',
    description:
      'VIP security and close protection in Cyprus — discreet professional security for executives, events, and private clients with Komodromos Group VIP services.',
  },
  '/services/casino-experiences': {
    title: 'VIP Casino Experiences in Cyprus | Komodromos Group',
    description:
      'VIP casino experiences in Cyprus — exclusive gaming evenings, host arrangements, and lifestyle concierge support from Komodromos Group VIP lifestyle services.',
  },
  '/services/vip-tour-around-island': {
    title: 'VIP Cyprus Island Tours & Travel | Komodromos Group',
    description:
      'Private VIP tours around Cyprus — curated island itineraries, chauffeured sightseeing, and premium day experiences with Komodromos Group concierge services.',
  },
}

function pathHint(path: string): string {
  return path
    .replace(/^\/services\//, '')
    .split('/')
    .filter(Boolean)
    .join(' ')
    .replace(/-/g, ' ')
}

function truncateAtWord(text: string, max: number): string {
  if (text.length <= max) return text
  const sliced = text.slice(0, max + 1)
  const lastSpace = sliced.lastIndexOf(' ')
  if (lastSpace > max * 0.6) return sliced.slice(0, lastSpace).trimEnd()
  return text.slice(0, max).trimEnd()
}

/** Size the page title (pre-suffix) so formatPageTitle result is 50–60 chars. */
export function fitServiceBaseTitle(base: string, path: string): string {
  const hint = pathHint(path)
  let t = base.replace(/\s+/g, ' ').trim()

  // If caller already passed a full branded title in range, leave as special case via hub map.
  if (t.includes('|')) {
    return t
  }

  if (t.length < MIN_BASE) {
    const extras = [
      ` Cyprus`,
      ` Services`,
      ` Premium`,
      ` — ${hint}`,
      ` Komodromos`,
    ]
    for (const extra of extras) {
      if (t.length >= MIN_BASE) break
      const room = MAX_BASE - t.length
      if (room <= 0) break
      t = `${t}${extra.slice(0, room)}`.trimEnd()
    }
  }

  if (t.length < MIN_BASE) {
    t = `${t}${' ·'.repeat(MIN_BASE)}`.slice(0, MIN_BASE)
  }

  if (t.length > MAX_BASE) {
    t = truncateAtWord(t, MAX_BASE)
  }

  // Final clamp
  if (t.length > MAX_BASE) t = t.slice(0, MAX_BASE).trimEnd()
  while (t.length < MIN_BASE) t = `${t}·`

  return t
}

export function fitServiceDescription(seed: string, path: string): string {
  const hint = pathHint(path)
  let d = seed.replace(/\s+/g, ' ').trim()

  const pads = [
    ` Premium Komodromos Group service in Cyprus.`,
    ` Enquire for tailored ${hint} support in Cyprus.`,
    ` Serving private and corporate clients across Cyprus.`,
    ` Part of Komodromos Group of Companies.`,
  ]

  let padIdx = 0
  while (d.length < MIN_DESC && padIdx < pads.length * 3) {
    const pad = pads[padIdx % pads.length]
    const room = MAX_DESC - d.length
    if (room <= 1) break
    const next = `${d}${d.endsWith('.') || d.endsWith('—') ? ' ' : ' '}${pad}`.replace(/\s+/g, ' ').trim()
    d = next.length > MAX_DESC ? truncateAtWord(next, MAX_DESC) : next
    padIdx += 1
    if (d.length >= MIN_DESC) break
  }

  if (d.length < MIN_DESC) {
    const filler = ` ${hint}`.repeat(10)
    d = truncateAtWord(`${d}${filler}`, MAX_DESC)
    while (d.length < MIN_DESC) d = `${d}.`
  }

  if (d.length > MAX_DESC) {
    d = truncateAtWord(d, MAX_DESC)
  }

  if (d.length < MIN_DESC) {
    d = (d + ' in Cyprus.').slice(0, MAX_DESC)
    while (d.length < MIN_DESC) d += '.'
  }

  return d.slice(0, MAX_DESC)
}

/**
 * Normalize a registry entry for /services/* SEO length + hub overrides.
 * Returns title suitable for formatPageTitle (or a full hub title marked for passthrough).
 */
export function normalizeServiceSeoEntry(entry: SeoRouteEntry): SeoRouteEntry {
  if (!entry.path.startsWith('/services/')) return entry

  const hub = SERVICE_HUB_SEO[entry.path]
  if (hub) {
    // Store full final title; formatPageTitle recognizes titles that equal hub titles via exact match
    // by treating them as already-final when they include the site suffix.
    return {
      ...entry,
      title: hub.title,
      description: hub.description,
    }
  }

  const baseTitle = fitServiceBaseTitle(entry.title, entry.path)
  const description = fitServiceDescription(entry.description, entry.path)

  return {
    ...entry,
    title: baseTitle,
    description,
  }
}

/** Final document title for head injection / audits. */
export function finalDocumentTitle(entry: SeoRouteEntry): string {
  if (entry.title.includes(`| ${SITE_NAME}`) || entry.title.endsWith(`| ${SITE_NAME}`)) {
    return entry.title
  }
  // Hub titles use full string with brand
  if (SERVICE_HUB_SEO[entry.path]?.title === entry.title) {
    return entry.title
  }
  return formatPageTitle(entry.title)
}

export function toHeadMeta(entry: SeoRouteEntry) {
  return {
    title: finalDocumentTitle(entry),
    description: entry.description,
    canonical: absoluteUrl(entry.path),
    ogImage: absoluteImageUrl(entry.ogImage),
    index: entry.index,
  }
}

export type HeadMetaEntry = ReturnType<typeof toHeadMeta>
