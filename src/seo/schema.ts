import {
  ORGANIZATION_ADDRESS,
  ORGANIZATION_EMAIL,
  ORGANIZATION_PHONE,
  SITE_NAME,
  SITE_NAME_FULL,
  SITE_URL,
  absoluteUrl,
} from './siteConfig'

export type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>

export function organizationSchema(siteUrl: string = SITE_URL): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME_FULL,
    url: siteUrl,
    logo: absoluteUrl('/images/services/companie-services-cover/cards-logos-services/main-logo.png', siteUrl),
    email: ORGANIZATION_EMAIL,
    telephone: ORGANIZATION_PHONE,
    address: {
      '@type': 'PostalAddress',
      addressLocality: ORGANIZATION_ADDRESS.locality,
      addressCountry: ORGANIZATION_ADDRESS.country,
    },
  }
}

export function websiteSchema(
  siteUrl: string = SITE_URL,
  siteName: string = SITE_NAME_FULL,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
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
      url: siteUrl,
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
