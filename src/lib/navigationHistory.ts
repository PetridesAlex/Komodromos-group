import {
  AVIATION_ROUTE_SEGMENTS,
  getBrandByHost,
  normalizeInternalPath,
} from '../seo/domainRegistry'

let previousPathname = typeof window !== 'undefined' ? window.location.pathname : '/'
let currentPathname = previousPathname

export const GW_ENTRY_QUERY = 'gw-entry'
export const GW_ENTRY_SESSION_KEY = 'gw-entry-intent'
export const GW_ENTRY_BOOT_DONE_KEY = 'gw-entry-boot-done'

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

function hasGlobalWingsEntryIntent(): boolean {
  if (typeof sessionStorage === 'undefined') return false
  return sessionStorage.getItem(GW_ENTRY_SESSION_KEY) === '1'
}

function isGroupAviationPath(pathname: string): boolean {
  const normalized = normalizeInternalPath(pathname)
  return normalized === '/services/aviation' || normalized.startsWith('/services/aviation/')
}

export function markGlobalWingsEntryIntent() {
  if (typeof sessionStorage === 'undefined') return
  sessionStorage.setItem(GW_ENTRY_SESSION_KEY, '1')
  sessionStorage.removeItem(GW_ENTRY_BOOT_DONE_KEY)
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

/** Show the Global Wings entry preloader at app boot (before React Router mounts). */
export function shouldUseGlobalWingsEntryPreloader(): boolean {
  if (typeof window === 'undefined') return false

  if (hasGwEntryFlag(window.location.search)) {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem(GW_ENTRY_BOOT_DONE_KEY)
    }
    return true
  }

  if (hasGlobalWingsEntryIntent()) return true

  if (isGroupAviationPath(window.location.pathname) && !wasGlobalWingsBootPreloaderDone()) {
    return true
  }

  return false
}

/** Skip the Komodromos Group splash when entering Global Wings. */
export function shouldSkipGroupPreloader(): boolean {
  if (typeof window === 'undefined') return false
  if (shouldUseGlobalWingsEntryPreloader()) return true
  if (getBrandByHost(window.location.hostname)?.slug === 'aviation') return true
  if (isGroupAviationPath(window.location.pathname)) return true
  return false
}

export function stripGlobalWingsEntryQuery() {
  if (typeof window === 'undefined') return
  const url = new URL(window.location.href)
  if (!url.searchParams.has(GW_ENTRY_QUERY)) return
  url.searchParams.delete(GW_ENTRY_QUERY)
  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
}

export type BootPreloader = 'global-wings' | 'group' | 'none'

export function getBootPreloader(): BootPreloader {
  if (shouldUseGlobalWingsEntryPreloader()) return 'global-wings'
  if (!shouldSkipGroupPreloader()) return 'group'
  return 'none'
}
