import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../lib/analytics'

/**
 * Sends a GA4 page_view on every client-side route change (SPA).
 * Dedupes StrictMode double-invoke for the same path+search.
 */
export default function AnalyticsRouteTracker() {
  const location = useLocation()
  const lastTracked = useRef<string | null>(null)

  useEffect(() => {
    const path = `${location.pathname}${location.search}`
    if (lastTracked.current === path) return
    lastTracked.current = path
    trackPageView(path)
  }, [location.pathname, location.search])

  return null
}
