import { Helmet } from 'react-helmet-async'
import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  absoluteImageUrl,
  formatPageTitle,
} from './siteConfig'
import { MAIN_LOGO } from '../data/mainLogo'
import type { JsonLd } from './schema'
import { combineSchemas, organizationSchema, websiteSchema } from './schema'
import { useSiteContext } from './SiteContext'

export type PageSeoProps = {
  title: string
  description?: string
  path: string
  image?: string
  noindex?: boolean
  jsonLd?: JsonLd
  includeGlobalSchema?: boolean
}

function serializeJsonLd(jsonLd: JsonLd): string {
  return JSON.stringify(jsonLd)
}

export default function PageSeo({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image,
  noindex = false,
  jsonLd,
  includeGlobalSchema = true,
}: PageSeoProps) {
  const { siteUrl, absoluteUrl, brand } = useSiteContext()
  const pageTitle = formatPageTitle(title, brand?.siteName)
  const canonical = absoluteUrl(path)
  const brandDefaultImage =
    brand?.slug === 'wedding'
      ? '/images/services/companie-services-cover/wedding-sky.webp'
      : undefined
  const ogImage = absoluteImageUrl(image ?? brandDefaultImage, siteUrl)
  const robots = noindex ? 'noindex, nofollow' : 'index, follow'
  const siteName = brand?.siteNameFull ?? SITE_NAME
  const brandLogoPath =
    brand?.slug === 'wedding'
      ? '/images/services/companie-services-cover/cards-logos-services/wedding-sky.png'
      : brand
        ? MAIN_LOGO.src
        : undefined

  const globalSchema = includeGlobalSchema
    ? combineSchemas(
        organizationSchema(siteUrl, {
          name: siteName,
          logoPath: brandLogoPath,
          isBrandSite: Boolean(brand),
        }),
        websiteSchema(siteUrl, siteName),
      )
    : null

  const schemaPayload =
    jsonLd && globalSchema
      ? combineSchemas(...(Array.isArray(jsonLd) ? jsonLd : [jsonLd]), ...(Array.isArray(globalSchema) ? globalSchema : [globalSchema]))
      : jsonLd ?? globalSchema

  return (
    <Helmet>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemaPayload ? (
        <script type="application/ld+json">{serializeJsonLd(schemaPayload)}</script>
      ) : null}
    </Helmet>
  )
}
