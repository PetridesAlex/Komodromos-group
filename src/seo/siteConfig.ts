import { MAIN_LOGO } from '../data/mainLogo'

export const SITE_URL = 'https://www.komodromosgroup.com'
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

export function formatPageTitle(pageTitle: string): string {
  if (pageTitle === SITE_NAME || pageTitle === SITE_NAME_FULL) return SITE_NAME_FULL
  return `${pageTitle} | ${SITE_NAME}`
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (normalized === '/') return SITE_URL
  return `${SITE_URL}${normalized}`
}

export function absoluteImageUrl(image?: string): string {
  if (!image) return DEFAULT_OG_IMAGE
  if (image.startsWith('http://') || image.startsWith('https://')) return image
  return `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`
}
