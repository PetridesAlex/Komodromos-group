import { rewrite } from '@vercel/functions'
import { SEO_ALLOWLIST } from './src/seo/allowlist.generated'
import {
  brandPathToInternalPath,
  getBrandByHost,
  getBrandAllowlistPaths,
  getBrandRedirectUrl,
  getGroupToBrandRedirectUrl,
  isGroupHost,
  normalizeInternalPath,
} from './src/seo/domainRegistry'

const STATIC_PREFIXES = ['/assets/', '/images/', '/api/']
const STATIC_FILES = new Set([
  '/favicon.svg',
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml',
  '/sitemap-group.xml',
  '/sitemap-aviation.xml',
  '/sitemap-tax.xml',
  '/sitemap-astreal.xml',
  '/seo-allowlist.json',
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

export default function middleware(request: Request) {
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
}

export const config = {
  matcher: ['/((?!api|assets|images|favicon|robots\\.txt|sitemap|seo-allowlist\\.json).*)'],
}
