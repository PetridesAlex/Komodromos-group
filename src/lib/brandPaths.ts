import {
  getBrandByHost,
  getBrandBySlug,
  internalPathToBrandPath,
  GROUP_SITE_URL,
  type BrandDomainConfig,
} from '../seo/domainRegistry'

function currentBrand(): BrandDomainConfig | undefined {
  if (typeof window === 'undefined') return undefined
  return getBrandByHost(window.location.host)
}

export function aviationPath(segment?: string): string {
  const brand = currentBrand()
  const clean = segment?.replace(/^\//, '') ?? ''

  if (brand?.slug === 'aviation') {
    return clean ? `/${clean}` : '/'
  }

  return clean ? `/services/aviation/${clean}` : '/services/aviation'
}

export function aviationSectionHref(section: string): string {
  return `${aviationPath()}#${section}`
}

export function getAviationRoutes() {
  return {
    home: aviationPath(),
    pilots: aviationPath('pilots'),
    jobs: aviationPath('jobs'),
    airlines: aviationPath('airlines'),
    trainings: aviationPath('trainings'),
    cadet: aviationPath('cadet-programme'),
    privacy: aviationPath('privacy'),
    contact: aviationPath('contact'),
  } as const
}

export function taxPath(subpath = ''): string {
  const brand = currentBrand()
  const clean = subpath.replace(/^\/services\/tax\/?/, '').replace(/^\//, '')

  if (brand?.slug === 'tax') {
    if (!clean) return '/'
    if (clean === 'services') return '/services'
    return `/${clean}`
  }

  if (!clean) return '/services/tax'
  return `/services/tax/${clean}`
}

/** Converts an absolute internal tax path (optionally with a hash) to the
 *  correct link target for the current host — brand-relative on taxnexcy.com,
 *  full `/services/tax/...` on the group site. */
export function taxBrandHref(internalPathWithHash: string): string {
  const hashIdx = internalPathWithHash.indexOf('#')
  const path = hashIdx === -1 ? internalPathWithHash : internalPathWithHash.slice(0, hashIdx)
  const hash = hashIdx === -1 ? '' : internalPathWithHash.slice(hashIdx)
  if (path !== '/services/tax' && !path.startsWith('/services/tax/')) {
    return `${path}${hash}`
  }
  return `${taxPath(path)}${hash}`
}

/** Contact destination that works on both the group site and taxnexcy.com.
 *  Brand domain uses the absolute group contact URL (SPA has no /contact route). */
export function taxContactHref(): string {
  const brand = currentBrand()
  if (brand?.slug === 'tax') return `${GROUP_SITE_URL}/contact`
  return '/contact'
}

export function astrealPath(subpath = ''): string {
  const brand = currentBrand()
  const clean = subpath.replace(/^\/services\/astreal\/?/, '').replace(/^\//, '')

  if (brand?.slug === 'astreal') {
    return clean ? `/${clean}` : '/'
  }

  if (!clean) return '/services/astreal'
  return `/services/astreal/${clean}`
}

export function getAstrealRoutes() {
  return {
    home: astrealPath(),
    about: astrealPath('about'),
    ourServices: astrealPath('our-services'),
    invest: astrealPath('invest-in-cyprus'),
    projects: (projectId: string) => astrealPath(`projects/${projectId}`),
    projectsHash: `${astrealPath()}#astreal-projects`,
  } as const
}

export function poolPath(subpath = ''): string {
  const brand = currentBrand()
  const clean = subpath.replace(/^\/services\/pool\/?/, '').replace(/^\//, '')

  if (brand?.slug === 'pool') {
    return clean ? `/${clean}` : '/'
  }

  if (!clean) return '/services/pool'
  return `/services/pool/${clean}`
}

/** Converts an absolute internal pool path (optionally with a hash) to the
 *  correct link target for the current host — brand-relative on bluesky-pools.com,
 *  full `/services/pool/...` on the group site. */
export function poolBrandHref(internalPathWithHash: string): string {
  const hashIdx = internalPathWithHash.indexOf('#')
  const path = hashIdx === -1 ? internalPathWithHash : internalPathWithHash.slice(0, hashIdx)
  const hash = hashIdx === -1 ? '' : internalPathWithHash.slice(hashIdx)
  return `${poolPath(path)}${hash}`
}

export function weddingPath(subpath = ''): string {
  const brand = currentBrand()
  const clean = subpath.replace(/^\/services\/wedding\/?/, '').replace(/^\//, '')

  if (brand?.slug === 'wedding') {
    return clean ? `/${clean}` : '/'
  }

  if (!clean) return '/services/wedding'
  return `/services/wedding/${clean}`
}

/** Converts an absolute internal wedding path (optionally with a hash) to the
 *  correct link target for the current host — brand-relative on weddingskycy.com,
 *  full `/services/wedding/...` on the group site. */
export function weddingBrandHref(internalPathWithHash: string): string {
  const hashIdx = internalPathWithHash.indexOf('#')
  const path = hashIdx === -1 ? internalPathWithHash : internalPathWithHash.slice(0, hashIdx)
  const hash = hashIdx === -1 ? '' : internalPathWithHash.slice(hashIdx)
  return `${weddingPath(path)}${hash}`
}

/**
 * Wedding Sky destination that works from any host:
 * - on weddingskycy.com → brand-relative path
 * - on the group site / local DEV → `/services/wedding/...`
 * - on another brand domain (e.g. janchapelle) → absolute `https://www.weddingskycy.com/...`
 */
export function weddingSkyHref(internalPathWithHash: string): string {
  const hashIdx = internalPathWithHash.indexOf('#')
  const path = hashIdx === -1 ? internalPathWithHash : internalPathWithHash.slice(0, hashIdx)
  const hash = hashIdx === -1 ? '' : internalPathWithHash.slice(hashIdx)

  if (path !== '/services/wedding' && !path.startsWith('/services/wedding/')) {
    return `${path}${hash}`
  }

  const brand = currentBrand()
  if (brand?.slug === 'wedding') {
    return `${weddingPath(path)}${hash}`
  }

  if (import.meta.env.DEV || !brand) {
    return `${path}${hash}`
  }

  const wedding = getBrandBySlug('wedding')
  if (wedding && wedding.brandDnsLive !== false) {
    const clean = internalPathToBrandPath(path, wedding)
    return `https://${wedding.host}${clean === '/' ? '' : clean}${hash}`
  }

  return `${GROUP_SITE_URL}${path}${hash}`
}

export function isAbsoluteHttpHref(href: string): boolean {
  return /^https?:\/\//i.test(href)
}

export function janchapellePath(subpath = ''): string {
  const brand = currentBrand()
  const clean = subpath.replace(/^\/services\/janchapelle\/?/, '').replace(/^\//, '')

  if (brand?.slug === 'janchapelle') {
    return clean ? `/${clean}` : '/'
  }

  if (!clean) return '/services/janchapelle'
  return `/services/janchapelle/${clean}`
}

/** Converts an absolute internal Janchapelle path to the correct host target. */
export function janchapelleBrandHref(internalPathWithHash: string): string {
  const hashIdx = internalPathWithHash.indexOf('#')
  const path = hashIdx === -1 ? internalPathWithHash : internalPathWithHash.slice(0, hashIdx)
  const hash = hashIdx === -1 ? '' : internalPathWithHash.slice(hashIdx)
  return `${janchapellePath(path)}${hash}`
}

export function toBrandPathIfNeeded(internalPath: string): string {
  const brand = currentBrand()
  if (!brand) return internalPath
  if (!internalPath.startsWith(brand.basePath)) return internalPath
  return internalPathToBrandPath(internalPath, brand)
}
