import { MAIN_LOGO } from '../data/mainLogo'
import { GROUP_SITE_URL } from './domainRegistry'

export const SITE_URL = GROUP_SITE_URL
export const SITE_NAME = 'Komodromos Group'
export const SITE_NAME_FULL = 'Komodromos Group of Companies'
export const DEFAULT_DESCRIPTION =
  'Komodromos Group of Companies — premium services across aviation, VIP concierge, tax & accounting, property development, storage, weddings, and business consulting in Cyprus and internationally.'
export const DEFAULT_OG_IMAGE = `${SITE_URL}${MAIN_LOGO.src}`
export const ORGANIZATION_EMAIL = 'info@komodromosgroup.com'
export const ORGANIZATION_PHONE = '+35724333305'
export const ORGANIZATION_ADDRESS = {
  locality: 'Limassol',
  country: 'CY',
}

export function formatPageTitle(pageTitle: string, brandName?: string): string {
  const siteLabel = brandName ?? SITE_NAME
  if (pageTitle === SITE_NAME || pageTitle === SITE_NAME_FULL || pageTitle === brandName) {
    return brandName ?? SITE_NAME_FULL
  }
  return `${pageTitle} | ${siteLabel}`
}

export function absoluteUrl(path: string, siteUrl: string = SITE_URL): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (normalized === '/') return siteUrl
  return `${siteUrl}${normalized}`
}

export function absoluteImageUrl(image?: string, siteUrl: string = SITE_URL): string {
  if (!image) return `${siteUrl}${MAIN_LOGO.src}`
  if (image.startsWith('http://') || image.startsWith('https://')) return image
  return `${siteUrl}${image.startsWith('/') ? image : `/${image}`}`
}
