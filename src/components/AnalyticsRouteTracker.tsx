import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import {
  hasAnalyticsConsent,
  subscribeAnalyticsConsent,
  trackPageView,
} from '../lib/analytics'

/**
 * Sends a GA4 page_view on every client-side route change (SPA),
 * only after cookie consent has granted analytics storage.
 */
export default function AnalyticsRouteTracker() {
  const location = useLocation()
  const lastTracked = useRef<string | null>(null)

  useEffect(() => {
    const path = `${location.pathname}${location.search}`

    const tryTrack = () => {
      if (lastTracked.current === path) return
      if (!hasAnalyticsConsent()) return
      if (!trackPageView(path)) return
      lastTracked.current = path
    }

    tryTrack()

    return subscribeAnalyticsConsent((granted) => {
      if (!granted) {
        lastTracked.current = null
        return
      }
      // page_view already sent by updateAnalyticsConsent on grant — sync only
      lastTracked.current = path
    })
  }, [location.pathname, location.search])

  return null
}
