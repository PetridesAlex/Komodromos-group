import { rewrite } from '@vercel/functions'
import { SEO_ALLOWLIST } from './src/seo/allowlist.generated'

const STATIC_PREFIXES = ['/assets/', '/images/', '/api/']
const STATIC_FILES = new Set([
  '/favicon.svg',
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml',
  '/seo-allowlist.json',
  '/index.html',
])

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/'
  const withoutTrailing = pathname.replace(/\/+$/, '')
  return withoutTrailing || '/'
}

function isStaticAsset(pathname: string): boolean {
  if (STATIC_FILES.has(pathname)) return true
  return STATIC_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}

export default function middleware(request: Request) {
  const { pathname } = new URL(request.url)
  const normalized = normalizePathname(pathname)

  if (isStaticAsset(normalized)) {
    return
  }

  if (!SEO_ALLOWLIST.has(normalized)) {
    return rewrite(new URL('/index.html', request.url), { status: 404 })
  }
}

export const config = {
  matcher: ['/((?!api|assets|images|favicon|robots\\.txt|sitemap\\.xml|seo-allowlist\\.json).*)'],
}
