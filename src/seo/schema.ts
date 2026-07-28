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

export type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>

const LOGO_PATH = MAIN_LOGO.src

export function organizationSchema(siteUrl: string = SITE_URL): Record<string, unknown> {
  const orgId = `${siteUrl.replace(/\/$/, '')}/#organization`
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name: SITE_NAME_FULL,
    url: siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl(LOGO_PATH, siteUrl),
      width: MAIN_LOGO.width,
      height: MAIN_LOGO.height,
    },
    email: ORGANIZATION_EMAIL,
    telephone: ORGANIZATION_PHONE,
    address: {
      '@type': 'PostalAddress',
      addressLocality: ORGANIZATION_ADDRESS.locality,
      addressCountry: ORGANIZATION_ADDRESS.country,
    },
  }

  if (ORGANIZATION_SAME_AS.length > 0) {
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

export function combineSchemas(...schemas: Array<Record<string, unknown>>): JsonLd {
  return schemas
}
