import {
  AVIATION_ROUTE_SEGMENTS,
  GROUP_SITE_URL,
  getBrandByHost,
  normalizeInternalPath,
} from '../seo/domainRegistry'

let previousPathname = typeof window !== 'undefined' ? window.location.pathname : '/'
let currentPathname = previousPathname

export const GW_ENTRY_QUERY = 'gw-entry'
export const GW_ENTRY_SESSION_KEY = 'gw-entry-intent'
export const GW_ENTRY_BOOT_DONE_KEY = 'gw-entry-boot-done'
export const GROUP_BOOT_DONE_KEY = 'group-boot-done'
export const GROUP_RETURN_QUERY = 'group-return'

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

export function hasGroupReturnFlag(search: string): boolean {
  return new URLSearchParams(search).get(GROUP_RETURN_QUERY) === '1'
}

/** Cross-domain link back to the group hub without replaying the group boot splash.
 * Pass `home` (or omit) for a clean root URL with no hash; other values set `#services` / `#contact` etc. */
export function buildGroupSiteReturnUrl(hash = 'home'): string {
  const url = new URL(`${GROUP_SITE_URL}/`)
  url.searchParams.set(GROUP_RETURN_QUERY, '1')
  if (hash && hash !== 'home') {
    url.hash = hash
  }
  return url.toString()
}

export function markGlobalWingsEntryIntent() {
  if (typeof sessionStorage === 'undefined') return
  sessionStorage.setItem(GW_ENTRY_SESSION_KEY, '1')
  sessionStorage.removeItem(GW_ENTRY_BOOT_DONE_KEY)
  markGroupBootPreloaderDone()
}

export function consumeGlobalWingsEntryIntent(): boolean {
  if (typeof sessionStorage === 'undefined') return false
  const hadIntent = sessionStorage.getItem(GW_ENTRY_SESSION_KEY) === '1'
  sessionStorage.removeItem(GW_ENTRY_SESSION_KEY)
  return hadIntent
}

export function markGlobalWingsBootPreloaderDone() {
  if (typeof sessionStorage === 'undefined') return
  sessionStorage.setItem(GW_ENTRY_BOOT_DONE_KEY, '1')
}

export function wasGlobalWingsBootPreloaderDone(): boolean {
  if (typeof sessionStorage === 'undefined') return false
  return sessionStorage.getItem(GW_ENTRY_BOOT_DONE_KEY) === '1'
}

export function markGroupBootPreloaderDone() {
  if (typeof sessionStorage === 'undefined') return
  sessionStorage.setItem(GROUP_BOOT_DONE_KEY, '1')
}

export function wasGroupBootPreloaderDone(): boolean {
  if (typeof sessionStorage === 'undefined') return false
  return sessionStorage.getItem(GROUP_BOOT_DONE_KEY) === '1'
}

function isGlobalWingsBootContext(): boolean {
  if (typeof window === 'undefined') return false
  const brand = getBrandByHost(window.location.hostname)
  if (brand?.slug === 'aviation') return true
  return normalizeInternalPath(window.location.pathname).startsWith('/services/aviation')
}

/** Global Wings loads directly — no boot splash. */
export function shouldUseGlobalWingsEntryPreloader(): boolean {
  return false
}

function prepareGlobalWingsBoot(): void {
  if (typeof window === 'undefined') return
  markGlobalWingsBootPreloaderDone()
  markGroupBootPreloaderDone()
  consumeGlobalWingsEntryIntent()
  stripGlobalWingsEntryQuery()
}

function isGroupSiteBoot(): boolean {
  const host = window.location.hostname
  return !getBrandByHost(host)
}

/** Komodromos Group splash once per session on the group homepage. */
export function shouldShowGroupBootPreloader(): boolean {
  if (typeof window === 'undefined') return false
  if (wasGroupBootPreloaderDone()) return false
  if (isGlobalWingsBootContext()) return false
  if (shouldUseGlobalWingsEntryPreloader()) return false
  if (!isGroupSiteBoot()) return false
  return true
}

/** Skip the Komodromos Group splash when entering Global Wings. */
export function shouldSkipGroupPreloader(): boolean {
  if (typeof window === 'undefined') return false
  if (shouldUseGlobalWingsEntryPreloader()) return true
  if (getBrandByHost(window.location.hostname)?.slug === 'aviation') return true
  if (wasGroupBootPreloaderDone()) return true
  return false
}

export function stripGlobalWingsEntryQuery() {
  if (typeof window === 'undefined') return
  const url = new URL(window.location.href)
  if (!url.searchParams.has(GW_ENTRY_QUERY)) return
  url.searchParams.delete(GW_ENTRY_QUERY)
  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
}

export function stripGroupReturnQuery() {
  if (typeof window === 'undefined') return
  const url = new URL(window.location.href)
  if (!url.searchParams.has(GROUP_RETURN_QUERY)) return
  url.searchParams.delete(GROUP_RETURN_QUERY)
  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
}

export type BootPreloader = 'group' | 'none'

export function getBootPreloader(): BootPreloader {
  if (typeof window !== 'undefined' && hasGroupReturnFlag(window.location.search)) {
    markGroupBootPreloaderDone()
    stripGroupReturnQuery()
    return 'none'
  }
  if (typeof window !== 'undefined' && isGlobalWingsBootContext()) {
    prepareGlobalWingsBoot()
    return 'none'
  }
  if (shouldShowGroupBootPreloader()) return 'group'
  if (typeof window !== 'undefined' && getBrandByHost(window.location.hostname)) {
    markGroupBootPreloaderDone()
  }
  return 'none'
}
