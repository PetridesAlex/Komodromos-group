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

export function getGroupToBrandRedirectUrl(
  pathname: string,
  host: string | undefined | null,
): string | null {
  if (!isGroupHost(host)) return null

  const normalized = normalizeInternalPath(pathname)

  for (const brand of BRAND_DOMAINS) {
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
  if (!brand) return null
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
  if (!brand) return `/services/${slug}`

  const onBrandHost = getBrandByHost(currentHost ?? null)?.slug === slug
  if (onBrandHost) return '/'

  const base = `https://${brand.host}/`
  return slug === 'aviation' ? withAviationEntryParam(base) : base
}

export function isExternalServiceHref(slug: string, currentHost?: string | null): boolean {
  const brand = getBrandBySlug(slug)
  if (!brand) return false
  return getBrandByHost(currentHost ?? null)?.slug !== slug
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

export function getBrandAllowlistPaths(brand: BrandDomainConfig): string[] {
  const paths = ['/']
  for (const segment of brand.slug === 'aviation' ? AVIATION_ROUTE_SEGMENTS : TAX_ROUTE_SEGMENTS) {
    paths.push(segment === 'services' && brand.slug === 'tax' ? '/services' : `/${segment}`)
  }
  return paths
}

export function getAllBrandAllowlistPaths(): string[] {
  return BRAND_DOMAINS.flatMap((brand) => getBrandAllowlistPaths(brand))
}
