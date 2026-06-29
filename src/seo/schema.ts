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

export function organizationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME_FULL,
    url: SITE_URL,
    logo: absoluteUrl('/images/services/companie-services-cover/cards-logos-services/main-logo.png'),
    email: ORGANIZATION_EMAIL,
    telephone: ORGANIZATION_PHONE,
    address: {
      '@type': 'PostalAddress',
      addressLocality: ORGANIZATION_ADDRESS.locality,
      addressCountry: ORGANIZATION_ADDRESS.country,
    },
  }
}

export function websiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME_FULL,
    url: SITE_URL,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
  }
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function webPageSchema({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME_FULL,
      url: SITE_URL,
    },
  }
}

export function contactPageSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Komodromos Group',
    url: absoluteUrl('/contact'),
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
