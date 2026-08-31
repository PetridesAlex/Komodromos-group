import { getServiceBySlug } from '../data/serviceCards'

export const GROUP_HOST = 'www.komodromosgroup.com'
export const GROUP_APEX_HOST = 'komodromosgroup.com'
export const GROUP_SITE_URL = `https://${GROUP_HOST}`

export type BrandDomainConfig = {
  slug: string
  host: string
  apexHost: string
  siteName: string
  siteNameFull: string
  basePath: string
  /**
   * When false, keep `/services/{slug}` on the group site and do not 308 to the
   * brand domain (use while brand DNS still points at a legacy host).
   * Defaults to true.
   */
  brandDnsLive?: boolean
}

export const BRAND_DOMAINS: BrandDomainConfig[] = [
  {
    slug: 'aviation',
    host: 'www.global-wings.co',
    apexHost: 'global-wings.co',
    siteName: 'Global Wings',
    siteNameFull: 'Global Wings Ltd',
    basePath: '/services/aviation',
  },
  {
    slug: 'tax',
    host: 'www.taxnexcy.com',
    apexHost: 'taxnexcy.com',
    siteName: 'TaxNex',
    siteNameFull: 'TaxNex Cyprus',
    basePath: '/services/tax',
  },
  {
    slug: 'astreal',
    host: 'www.astrealdevelopers.com',
    apexHost: 'astrealdevelopers.com',
    siteName: 'Astreal Developers',
    siteNameFull: 'Astreal Developers',
    basePath: '/services/astreal',
  },
  {
    slug: 'pool',
    host: 'www.bluesky-pools.com',
    apexHost: 'bluesky-pools.com',
    siteName: 'Blue Sky Pools',
    siteNameFull: 'Blue Sky Pools & Gardens',
    basePath: '/services/pool',
  },
  {
    slug: 'adr-mediation',
    host: 'www.adrcentercy.com',
    apexHost: 'adrcentercy.com',
    siteName: 'ADR Center',
    siteNameFull: 'A.D.R Dispute Mediation Center',
    basePath: '/services/adr-mediation',
  },
  {
    slug: 'janchapelle',
    host: 'www.janchapelle.com',
    apexHost: 'janchapelle.com',
    siteName: 'Janchapelle',
    siteNameFull: 'Janchapelle — Luxury Bridal Collection',
    basePath: '/services/janchapelle',
  },
  {
    slug: 'wedding',
    host: 'www.weddingskycy.com',
    apexHost: 'weddingskycy.com',
    siteName: 'Wedding Sky',
    siteNameFull: 'Wedding Sky Cyprus',
    basePath: '/services/wedding',
  },
]

const BRAND_BY_HOST = new Map<string, BrandDomainConfig>()
const BRAND_BY_SLUG = new Map<string, BrandDomainConfig>()

for (const brand of BRAND_DOMAINS) {
  BRAND_BY_HOST.set(brand.host, brand)
  BRAND_BY_HOST.set(brand.apexHost, brand)
  BRAND_BY_SLUG.set(brand.slug, brand)
}

export function normalizeHost(host: string): string {
  return host.toLowerCase().replace(/:\d+$/, '')
}

export function getBrandByHost(host: string | undefined | null): BrandDomainConfig | undefined {
  if (!host) return undefined
  return BRAND_BY_HOST.get(normalizeHost(host))
}

export function getBrandBySlug(slug: string | undefined): BrandDomainConfig | undefined {
  if (!slug) return undefined
  return BRAND_BY_SLUG.get(slug)
}

export function isGroupHost(host: string | undefined | null): boolean {
  if (!host) return true
  const normalized = normalizeHost(host)
  return (
    normalized === GROUP_HOST ||
    normalized === GROUP_APEX_HOST ||
    normalized.endsWith('.vercel.app')
  )
}

export function getSiteUrlForHost(host: string | undefined | null): string {
  const brand = getBrandByHost(host)
  if (brand) return `https://${brand.host}`
  return GROUP_SITE_URL
}

export function internalPathToBrandPath(
  internalPath: string,
  brand: BrandDomainConfig,
): string {
  const normalized = normalizeInternalPath(internalPath)
  if (!normalized.startsWith(brand.basePath)) return normalized

  const suffix = normalized.slice(brand.basePath.length)
  if (!suffix || suffix === '/') return '/'
  return suffix
}

export function brandPathToInternalPath(
  brandPath: string,
  brand: BrandDomainConfig,
): string {
  const normalized = normalizeInternalPath(brandPath)
  if (normalized === '/') return brand.basePath

  if (normalized.startsWith(brand.basePath)) {
    return normalized
  }

  if (brand.slug === 'tax' && normalized === '/services') {
    return `${brand.basePath}/services`
  }

  return `${brand.basePath}${normalized}`
}

export function normalizeInternalPath(pathname: string): string {
  if (!pathname || pathname === '/') return '/'
  const withoutTrailing = pathname.replace(/\/+$/, '')
  return withoutTrailing || '/'
}

export function resolveInternalPath(pathname: string, host?: string | null): string {
  const brand = getBrandByHost(host ?? null)
  if (!brand) return normalizeInternalPath(pathname)
  return brandPathToInternalPath(pathname, brand)
}

export function resolveCanonicalPath(internalPath: string, host?: string | null): string {
  const brand = getBrandByHost(host ?? null)
  const normalized = normalizeInternalPath(internalPath)
  if (!brand) return normalized
  if (!normalized.startsWith(brand.basePath)) return normalized
  return internalPathToBrandPath(normalized, brand)
}

export function isPathAllowedOnHost(pathname: string, host: string | undefined | null): boolean {
  const normalized = normalizeInternalPath(pathname)
  const brand = getBrandByHost(host)

  if (!brand) {
    return true
  }

  if (normalized.startsWith('/services/') && !normalized.startsWith(brand.basePath)) {
    return false
  }

  if (normalized === '/contact' || normalized === '/') {
    return normalized === '/'
  }

  const internal = brandPathToInternalPath(normalized, brand)
  return internal.startsWith(brand.basePath)
}

export function getBrandRedirectUrl(
  pathname: string,
  host: string | undefined | null,
): string | null {
  const brand = getBrandByHost(host)
  if (!brand) return null

  const normalized = normalizeInternalPath(pathname)

  if (normalized.startsWith(brand.basePath)) {
    const clean = internalPathToBrandPath(normalized, brand)
    return `https://${brand.host}${clean === '/' ? '' : clean}`
  }

  if (normalized.startsWith('/services/')) {
    return `${GROUP_SITE_URL}${normalized}`
  }

  if (normalized === '/contact') {
    return `${GROUP_SITE_URL}/contact`
  }

  return null
}

export function isBrandDnsLive(brand: BrandDomainConfig | undefined): boolean {
  if (!brand) return false
  return brand.brandDnsLive !== false
}

function isBrandServiceUnderMaintenance(slug: string): boolean {
  // Keep redirects/links on the group SPA while the service card is offline.
  return getServiceBySlug(slug)?.comingSoon === true
}

export function getGroupToBrandRedirectUrl(
  pathname: string,
  host: string | undefined | null,
): string | null {
  if (!isGroupHost(host)) return null

  const normalized = normalizeInternalPath(pathname)

  for (const brand of BRAND_DOMAINS) {
    if (!isBrandDnsLive(brand)) continue
    if (isBrandServiceUnderMaintenance(brand.slug)) continue
    if (normalized === brand.basePath || normalized.startsWith(`${brand.basePath}/`)) {
      const clean = internalPathToBrandPath(normalized, brand)
      const base = `https://${brand.host}${clean === '/' ? '' : clean}`
      return brand.slug === 'aviation' ? withAviationEntryParam(base) : base
    }
  }

  return null
}

export function getServiceBrandUrl(slug: string): string | null {
  const brand = getBrandBySlug(slug)
  if (!brand || !isBrandDnsLive(brand)) return null
  if (isBrandServiceUnderMaintenance(slug)) return null
  const base = `https://${brand.host}/`
  return slug === 'aviation' ? withAviationEntryParam(base) : base
}

export const GW_ENTRY_QUERY = 'gw-entry'

export function withAviationEntryParam(url: string): string {
  const parsed = new URL(url)
  parsed.searchParams.set(GW_ENTRY_QUERY, '1')
  return parsed.toString()
}

export function getServicePageHref(slug: string, currentHost?: string | null): string {
  const brand = getBrandBySlug(slug)
  const host = currentHost ?? (typeof window !== 'undefined' ? window.location.host : null)
  const currentBrand = getBrandByHost(host ?? null)

  if (brand) {
    const onBrandHost = currentBrand?.slug === slug
    if (onBrandHost) return '/'

    // Local dev: keep brand navigation on the same origin (localhost) instead of
    // sending users to production brand domains, which breaks the embedded preview.
    if (import.meta.env.DEV) {
      if (slug === 'aviation') return `/services/aviation?${GW_ENTRY_QUERY}=1`
      return `/services/${slug}`
    }

    // Offline / under construction — keep users on the group SPA route so the
    // maintenance gate can serve the under-construction page.
    if (isBrandServiceUnderMaintenance(slug) || !isBrandDnsLive(brand)) {
      return `/services/${slug}`
    }

    const base = `https://${brand.host}/`
    return slug === 'aviation' ? withAviationEntryParam(base) : base
  }

  // Group-only services: from a brand domain, leave to the group site so SPA
  // routes like /services/vip are not swallowed by brand catch-alls.
  if (currentBrand && !import.meta.env.DEV) {
    return `${GROUP_SITE_URL}/services/${slug}`
  }

  return `/services/${slug}`
}

export function isExternalServiceHref(slug: string, currentHost?: string | null): boolean {
  if (import.meta.env.DEV) return false
  const host = currentHost ?? (typeof window !== 'undefined' ? window.location.host : null)
  const currentBrand = getBrandByHost(host ?? null)
  const brand = getBrandBySlug(slug)

  if (brand) {
    if (!isBrandDnsLive(brand) || isBrandServiceUnderMaintenance(slug)) return false
    return currentBrand?.slug !== slug
  }

  // From taxnexcy.com (or any brand host), group-service paths must be full URLs.
  return Boolean(currentBrand)
}

export const AVIATION_ROUTE_SEGMENTS = [
  'pilots',
  'jobs',
  'airlines',
  'trainings',
  'cadet-programme',
  'privacy',
  'contact',
] as const

export const TAX_ROUTE_SEGMENTS = [
  'how-to-get-a-tic',
  'tax-residence-certificate',
  'non-dom-certificate',
  'tax-clearances',
  'tax-payment-support',
  'transfer-fees-calculator',
  'income-tax-calculator',
  'taxisnet-application',
  'services',
  'company-registration-cyprus',
  'office-secretarial-services',
] as const

export const ASTREAL_ROUTE_SEGMENTS = [
  'about',
  'invest-in-cyprus',
  'our-services',
  'projects/astron',
  'projects/astron-nova',
  'projects/coral',
  'projects/venus',
  'projects/athenian-heritage-luxury-residence',
] as const

export const POOL_ROUTE_SEGMENTS = [
  'categories/overflow',
  'categories/skimmer',
  'categories/infinity',
  'services/fountains',
  'services/cooling-and-heating',
  'services/swim-spas',
  'services/bar-and-stools',
  'services/service-and-maintenance',
  'services/garden-services',
  'linings/liners',
  'linings/mosaic-and-ceramic',
] as const

export const WEDDING_ROUTE_SEGMENTS = [
  'about',
  'difference',
  'concierge',
  'wedding-packages',
  'wedding-packages/complete',
  'wedding-packages/photography',
  'wedding-packages/decor',
  'categories/wedding',
  'categories/christian',
  'packages/prestige',
  'packages/grand',
  'packages/elite',
  'packages/exclusive',
  'packages/imperial',
  'packages/crown',
  'packages/royal',
  'packages/customised',
  'packages/photoway-4',
  'packages/decoway-6',
  'packages/decoway-5',
  'packages/decoway-4',
  'packages/decoway-3',
  'packages/decoway-2',
  'packages/decoway-exclusive',
  'packages/decoway-1',
  'packages/photoway-3',
  'packages/photoway-2',
  'packages/photoway-1',
  'packages/christening-1',
  'packages/christening-2',
  'packages/christening-3',
  'packages/christening-4',
  'packages/christening-oceanic',
] as const

function brandRouteSegments(brand: BrandDomainConfig): readonly string[] {
  if (brand.slug === 'aviation') return AVIATION_ROUTE_SEGMENTS
  if (brand.slug === 'tax') return TAX_ROUTE_SEGMENTS
  if (brand.slug === 'astreal') return ASTREAL_ROUTE_SEGMENTS
  if (brand.slug === 'pool') return POOL_ROUTE_SEGMENTS
  if (brand.slug === 'wedding') return WEDDING_ROUTE_SEGMENTS
  return []
}

export function getBrandAllowlistPaths(brand: BrandDomainConfig): string[] {
  const paths = ['/']
  for (const segment of brandRouteSegments(brand)) {
    paths.push(segment === 'services' && brand.slug === 'tax' ? '/services' : `/${segment}`)
  }
  return paths
}

export function getAllBrandAllowlistPaths(): string[] {
  return BRAND_DOMAINS.flatMap((brand) => getBrandAllowlistPaths(brand))
}

/** Paths on the group site that 308 to a live brand domain — exclude from group sitemap. */
export function isBrandManagedInternalPath(path: string): boolean {
  const normalized = normalizeInternalPath(path)
  for (const brand of BRAND_DOMAINS) {
    if (!isBrandDnsLive(brand)) continue
    if (normalized === brand.basePath || normalized.startsWith(`${brand.basePath}/`)) {
      return true
    }
  }
  return false
}
