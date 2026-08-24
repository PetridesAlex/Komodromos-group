import {
  ORGANIZATION_ADDRESS,
  ORGANIZATION_EMAIL,
  ORGANIZATION_PHONE,
  ORGANIZATION_SAME_AS,
  SITE_NAME_FULL,
  SITE_URL,
  absoluteUrl,
} from './siteConfig'
import { MAIN_LOGO } from '../data/mainLogo'
import { BRAND_DOMAINS, GROUP_SITE_URL, isBrandDnsLive } from './domainRegistry'

export type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>

const LOGO_PATH = MAIN_LOGO.src

export function organizationSchema(
  siteUrl: string = SITE_URL,
  options?: {
    name?: string
    logoPath?: string
    isBrandSite?: boolean
  },
): Record<string, unknown> {
  const orgId = `${siteUrl.replace(/\/$/, '')}/#organization`
  const name = options?.name ?? SITE_NAME_FULL
  const logoPath = options?.logoPath ?? LOGO_PATH
  const isBrandSite = options?.isBrandSite === true

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name,
    url: siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl(logoPath, siteUrl),
    },
    email: ORGANIZATION_EMAIL,
    telephone: ORGANIZATION_PHONE,
    address: {
      '@type': 'PostalAddress',
      addressLocality: ORGANIZATION_ADDRESS.locality,
      addressCountry: ORGANIZATION_ADDRESS.country,
    },
  }

  // Brand domains must identify as themselves — claiming to be Komodromos Group
  // on weddingskycy.com / taxnexcy.com trips Chrome lookalike / phishing checks.
  if (isBrandSite) {
    schema.parentOrganization = {
      '@type': 'Organization',
      name: SITE_NAME_FULL,
      url: `${GROUP_SITE_URL}/`,
    }
  } else {
    schema.alternateName = ['Komodromos', 'Komodromos Group', 'Komodromos Group of Companies']
    schema.subOrganization = BRAND_DOMAINS.filter(isBrandDnsLive).map((brand) => ({
      '@type': 'Organization',
      name: brand.siteNameFull,
      url: `https://${brand.host}/`,
    }))
  }

  if (!isBrandSite && ORGANIZATION_SAME_AS.length > 0) {
    schema.sameAs = ORGANIZATION_SAME_AS
  }

  return schema
}

export function websiteSchema(
  siteUrl: string = SITE_URL,
  siteName: string = SITE_NAME_FULL,
): Record<string, unknown> {
  const base = siteUrl.replace(/\/$/, '')
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${base}/#website`,
    name: siteName,
    url: siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`,
    publisher: {
      '@id': `${base}/#organization`,
    },
  }
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
  siteUrl: string = SITE_URL,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, siteUrl),
    })),
  }
}

export function webPageSchema({
  title,
  description,
  path,
  siteUrl = SITE_URL,
  siteName = SITE_NAME_FULL,
}: {
  title: string
  description: string
  path: string
  siteUrl?: string
  siteName?: string
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: absoluteUrl(path, siteUrl),
    isPartOf: {
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`,
    },
  }
}

export function contactPageSchema(siteUrl: string = SITE_URL): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Komodromos Group',
    url: absoluteUrl('/contact', siteUrl),
    mainEntity: {
      '@type': 'Organization',
      name: SITE_NAME_FULL,
      email: ORGANIZATION_EMAIL,
      telephone: ORGANIZATION_PHONE,
      address: {
        '@type': 'PostalAddress',
        addressLocality: ORGANIZATION_ADDRESS.locality,
        addressCountry: ORGANIZATION_ADDRESS.country,
      },
    },
  }
}

/** Service schema for top-level /services/{slug} hubs. */
export function serviceSchema({
  name,
  description,
  path,
  siteUrl = SITE_URL,
}: {
  name: string
  description: string
  path: string
  siteUrl?: string
}): Record<string, unknown> {
  const base = siteUrl.replace(/\/$/, '')
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: absoluteUrl(path, siteUrl),
    provider: {
      '@id': `${base}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Cyprus',
    },
  }
}

export function combineSchemas(...schemas: Array<Record<string, unknown>>): JsonLd {
  return schemas
}

/** Homepage / hub navigation — helps Google map services and brand properties. */
export function siteNavigationListSchema(
  items: Array<{ name: string; url: string }>,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Komodromos Group services and companies',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function buildGroupHomeNavigationItems(): Array<{ name: string; url: string }> {
  const items: Array<{ name: string; url: string }> = [
    { name: 'Contact Komodromos Group', url: `${GROUP_SITE_URL}/contact` },
  ]

  const groupServices: Array<{ name: string; path: string }> = [
    { name: 'VIP Services', path: '/services/vip' },
    { name: 'Self Storage Cyprus', path: '/services/storage' },
    { name: 'Human Resources', path: '/services/hr' },
    { name: 'Business Consulting', path: '/services/consulting' },
    { name: 'Private Jets & Air', path: '/services/air' },
    { name: 'Yacht Charters', path: '/services/yacht-charters' },
    { name: 'Limousines', path: '/services/limousines-experiences' },
  ]

  for (const service of groupServices) {
    items.push({ name: service.name, url: `${GROUP_SITE_URL}${service.path}` })
  }

  for (const brand of BRAND_DOMAINS) {
    if (!isBrandDnsLive(brand)) continue
    items.push({
      name: brand.siteNameFull,
      url: `https://${brand.host}/`,
    })
  }

  return items
}
