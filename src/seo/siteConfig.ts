import { MAIN_LOGO } from '../data/mainLogo'
import { GROUP_SITE_URL } from './domainRegistry'

export const SITE_URL = GROUP_SITE_URL
export const SITE_NAME = 'Komodromos Group'
export const SITE_NAME_FULL = 'Komodromos Group of Companies'

/** Homepage document title — used as-is (no site-name suffix). 57 characters. */
export const HOMEPAGE_TITLE =
  'Komodromos Group | Aviation, Property & Business Services'

/** Default / homepage meta description — 150 characters. */
export const DEFAULT_DESCRIPTION =
  'Komodromos Group of Companies delivers premium aviation, VIP concierge, tax, property development, storage, weddings and business solutions in Cyprus.'

export const DEFAULT_OG_IMAGE = `${SITE_URL}${MAIN_LOGO.src}`
export const ORGANIZATION_EMAIL = 'info@komodromosgroup.com'
export const ORGANIZATION_PHONE = '+35724333305'
export const ORGANIZATION_ADDRESS = {
  locality: 'Limassol',
  country: 'CY',
}

/** Real social profile URLs only — omit placeholders. Empty until profiles are configured. */
export const ORGANIZATION_SAME_AS: string[] = []

export function formatPageTitle(pageTitle: string, brandName?: string): string {
  const siteLabel = brandName ?? SITE_NAME
  const suffix = ` | ${siteLabel}`
  if (
    pageTitle === SITE_NAME ||
    pageTitle === SITE_NAME_FULL ||
    pageTitle === HOMEPAGE_TITLE ||
    pageTitle === brandName
  ) {
    if (pageTitle === HOMEPAGE_TITLE) return HOMEPAGE_TITLE
    return brandName ?? SITE_NAME_FULL
  }
  // Already a full document title (hub SEO / hand-tuned)
  if (pageTitle.endsWith(suffix) || pageTitle.includes(' | ')) {
    return pageTitle
  }
  return `${pageTitle}${suffix}`
}

export function absoluteUrl(path: string, siteUrl: string = SITE_URL): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (normalized === '/') return siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`
  return `${siteUrl}${normalized}`
}

export function absoluteImageUrl(image?: string, siteUrl: string = SITE_URL): string {
  if (!image) return `${siteUrl}${MAIN_LOGO.src}`
  if (image.startsWith('http://') || image.startsWith('https://')) return image
  return `${siteUrl}${image.startsWith('/') ? image : `/${image}`}`
}
