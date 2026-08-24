import { rewrite } from '@vercel/functions'
import { SEO_ALLOWLIST } from './src/seo/allowlist.generated'
import { SEO_HEAD_META } from './src/seo/headMeta.generated'
import { injectSeoHead } from './src/seo/injectSeoHead'
import {
  brandPathToInternalPath,
  getBrandByHost,
  getBrandAllowlistPaths,
  getBrandRedirectUrl,
  getGroupToBrandRedirectUrl,
  GROUP_SITE_URL,
  internalPathToBrandPath,
  isGroupHost,
  normalizeInternalPath,
} from './src/seo/domainRegistry'

const STATIC_PREFIXES = ['/assets/', '/images/', '/api/']
const STATIC_FILES = new Set([
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/apple-touch-icon.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/site.webmanifest',
  '/robots.txt',
  '/sitemap.xml',
  '/sitemap-group.xml',
  '/sitemap-aviation.xml',
  '/sitemap-tax.xml',
  '/sitemap-astreal.xml',
  '/sitemap-pool.xml',
  '/sitemap-adr-mediation.xml',
  '/sitemap-janchapelle.xml',
  '/sitemap-wedding.xml',
  '/seo-allowlist.json',
  '/seo-head.json',
  '/index.html',
])

function isStaticAsset(pathname: string): boolean {
  if (STATIC_FILES.has(pathname)) return true
  return STATIC_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}

function isAllowedPath(pathname: string, host: string): boolean {
  const normalized = normalizeInternalPath(pathname)
  const brand = getBrandByHost(host)

  if (brand) {
    const allowedBrandPaths = new Set(getBrandAllowlistPaths(brand))
    if (!allowedBrandPaths.has(normalized)) return false
    const internal = brandPathToInternalPath(normalized, brand)
    return SEO_ALLOWLIST.has(internal)
  }

  return SEO_ALLOWLIST.has(normalized)
}

function wantsHtml(request: Request): boolean {
  const accept = request.headers.get('accept') ?? ''
  // Document navigations and crawlers typically include text/html
  if (!accept || accept === '*/*') return true
  return accept.includes('text/html')
}

export default async function middleware(request: Request) {
  const url = new URL(request.url)
  const host = url.hostname
  const normalized = normalizeInternalPath(url.pathname)

  if (isStaticAsset(normalized)) {
    return
  }

  const groupBrandRedirect = getGroupToBrandRedirectUrl(normalized, host)
  if (groupBrandRedirect) {
    return Response.redirect(`${groupBrandRedirect}${url.search}`, 308)
  }

  const redirectTarget = getBrandRedirectUrl(normalized, host)
  if (redirectTarget) {
    const redirectUrl = new URL(redirectTarget)
    if (redirectUrl.hostname !== host || redirectUrl.pathname !== url.pathname) {
      return Response.redirect(`${redirectTarget}${url.search}`, 308)
    }
  }

  if (!isGroupHost(host) && getBrandByHost(host)) {
    if (normalized.startsWith('/services/') && !isAllowedPath(normalized, host)) {
      return Response.redirect(`https://www.komodromosgroup.com${normalized}`, 308)
    }
  }

  if (!isAllowedPath(normalized, host)) {
    return rewrite(new URL('/index.html', request.url), { status: 404 })
  }

  if (wantsHtml(request) && request.method === 'GET') {
    const brand = getBrandByHost(host)
    const internalPath = brand ? brandPathToInternalPath(normalized, brand) : normalized
    const meta = SEO_HEAD_META[internalPath]

    if (meta) {
      let headMeta = meta
      if (brand) {
        const brandPath = internalPathToBrandPath(internalPath, brand)
        const brandOrigin = `https://${brand.host}`
        const canonical =
          brandPath === '/' ? `${brandOrigin}/` : `${brandOrigin}${brandPath}`

        // Never serve komodromosgroup.com asset URLs from a brand host — Chrome
        // Safe Browsing can treat cross-brand identity as a lookalike / phishing signal.
        let ogImage = meta.ogImage.replace(GROUP_SITE_URL, brandOrigin)
        if (
          brand.slug === 'wedding' &&
          (brandPath === '/' || ogImage.includes('/cards-logos-services/main-logo.png'))
        ) {
          ogImage = `${brandOrigin}/images/services/companie-services-cover/wedding-sky.webp`
        }

        headMeta = {
          ...meta,
          canonical,
          ogImage,
          siteName: brand.siteNameFull,
        }
      }

      try {
        const indexRes = await fetch(new URL('/index.html', request.url))
        if (indexRes.ok) {
          const html = await indexRes.text()
          const patched = injectSeoHead(html, headMeta)
          return new Response(patched, {
            status: 200,
            headers: {
              'Content-Type': 'text/html; charset=utf-8',
              'Cache-Control': 'public, max-age=0, must-revalidate',
            },
          })
        }
      } catch {
        // Fall through to SPA rewrite
      }
    }
  }
}

export const config = {
  matcher: [
    '/((?!api|assets|images|favicon|robots\\.txt|sitemap|seo-allowlist\\.json|seo-head\\.json).*)',
  ],
}
