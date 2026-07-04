let previousPathname = typeof window !== 'undefined' ? window.location.pathname : '/'
let currentPathname = previousPathname

/** Call on every client-side route change (before reading entry state). */
export function syncNavigationPath(pathname: string) {
  previousPathname = currentPathname
  currentPathname = pathname
}

export function getPreviousPathname() {
  return previousPathname
}

export function isEnteringAviationFromOutside(pathname: string) {
  return pathname.startsWith('/services/aviation') && !previousPathname.startsWith('/services/aviation')
}
