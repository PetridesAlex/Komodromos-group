import {
  getBrandByHost,
  internalPathToBrandPath,
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

export function toBrandPathIfNeeded(internalPath: string): string {
  const brand = currentBrand()
  if (!brand) return internalPath
  if (!internalPath.startsWith(brand.basePath)) return internalPath
  return internalPathToBrandPath(internalPath, brand)
}
