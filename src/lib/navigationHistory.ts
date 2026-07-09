import { AVIATION_ROUTE_SEGMENTS, normalizeInternalPath } from '../seo/domainRegistry'

let previousPathname = typeof window !== 'undefined' ? window.location.pathname : '/'
let currentPathname = previousPathname

export const GW_ENTRY_QUERY = 'gw-entry'

/** Call on every client-side route change (before reading entry state). */
export function syncNavigationPath(pathname: string) {
  previousPathname = currentPathname
  currentPathname = pathname
}

export function getPreviousPathname() {
  return previousPathname
}

export function isAviationRoutePath(pathname: string, isAviationBrandHost = false): boolean {
  const normalized = normalizeInternalPath(pathname)
  if (normalized.startsWith('/services/aviation')) return true
  if (!isAviationBrandHost) return false
  if (normalized === '/') return true
  const segment = normalized.slice(1)
  return (AVIATION_ROUTE_SEGMENTS as readonly string[]).includes(segment)
}

export function isEnteringAviationFromOutside(pathname: string, isAviationBrandHost = false) {
  const entering = isAviationRoutePath(pathname, isAviationBrandHost)
  const wasInside =
    isAviationRoutePath(previousPathname, isAviationBrandHost) ||
    previousPathname.startsWith('/services/aviation')
  return entering && !wasInside
}

export function hasGwEntryFlag(search: string): boolean {
  return new URLSearchParams(search).get(GW_ENTRY_QUERY) === '1'
}
