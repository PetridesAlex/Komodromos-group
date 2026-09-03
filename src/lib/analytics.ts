/** Cookie banner storage key — keep in sync with CookieBanner. */
export const COOKIE_CONSENT_KEY = 'kg-cookie-consent'

const DEFAULT_MEASUREMENT_ID = 'G-PDJ7GZK8LC'

export type AnalyticsConversionEvent =
  | 'contact_form_submit'
  | 'phone_click'
  | 'email_click'
  | 'whatsapp_click'
  | 'enquiry_submit'

type ConsentState = 'granted' | 'denied'

type GtagConsentParams = {
  analytics_storage?: ConsentState
  ad_storage?: ConsentState
  ad_user_data?: ConsentState
  ad_personalization?: ConsentState
  wait_for_update?: number
}

type GtagFunction = {
  (command: 'js', date: Date): void
  (command: 'config', targetId: string, config?: Record<string, unknown>): void
  (command: 'event', eventName: string, params?: Record<string, unknown>): void
  (command: 'consent', action: 'default' | 'update', params: GtagConsentParams): void
  (...args: unknown[]): void
}

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: GtagFunction
  }
}

let initialized = false
/** Mirrors Consent Mode analytics_storage for our SPA tracking gate. */
let consentGranted = false

function measurementId(): string {
  const fromEnv = import.meta.env.VITE_GA_MEASUREMENT_ID
  if (typeof fromEnv === 'string' && fromEnv.trim()) {
    return fromEnv.trim()
  }
  return DEFAULT_MEASUREMENT_ID
}

function ensureGtagStub(): void {
  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== 'function') {
    // Official stub: push Arguments (not a rest-array) so gtag.js can replay the queue.
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments)
    } as GtagFunction
  }
}

function injectGtagScript(id: string): void {
  const src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`
  if (document.querySelector(`script[src="${src}"]`)) return

  const script = document.createElement('script')
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

function consentFromStorage(): boolean | null {
  try {
    const value = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (value === 'accepted') return true
    if (value === 'declined') return false
  } catch {
    // localStorage unavailable
  }
  return null
}

function applyConsentUpdate(granted: boolean): void {
  ensureGtagStub()
  const state: ConsentState = granted ? 'granted' : 'denied'
  window.gtag('consent', 'update', {
    analytics_storage: state,
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  })
}

function currentPath(): string {
  return `${window.location.pathname}${window.location.search}`
}

/**
 * One-time GA4 + Consent Mode bootstrap.
 * Defaults storage to denied until the cookie banner grants consent.
 */
export function initAnalytics(): void {
  if (typeof window === 'undefined' || initialized) return
  initialized = true

  const id = measurementId()
  if (!id) return

  ensureGtagStub()

  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 2000,
  })

  injectGtagScript(id)

  window.gtag('js', new Date())
  window.gtag('config', id, {
    send_page_view: false,
    anonymize_ip: true,
  })

  const stored = consentFromStorage()
  if (stored === true) {
    applyConsentUpdate(true)
    consentGranted = true
  } else if (stored === false) {
    applyConsentUpdate(false)
    consentGranted = false
  }
}

export function hasAnalyticsConsent(): boolean {
  return consentGranted
}

const CONSENT_EVENT = 'kg-analytics-consent'

/**
 * Sync Consent Mode with the cookie banner.
 * When consent flips to granted, send a page_view (first hit after Accept).
 */
export function updateAnalyticsConsent(granted: boolean): void {
  if (typeof window === 'undefined') return
  ensureGtagStub()

  const wasGranted = consentGranted
  applyConsentUpdate(granted)
  consentGranted = granted

  if (granted && !wasGranted && initialized) {
    trackPageView(currentPath())
  }

  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: { granted } }))
}

export function trackPageView(path: string): boolean {
  if (typeof window === 'undefined' || !initialized || !consentGranted) return false

  const pagePath = path.startsWith('/') ? path : `/${path}`
  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_location: `${window.location.origin}${pagePath}`,
    page_title: document.title,
  })
  return true
}

export function trackEvent(
  name: AnalyticsConversionEvent | (string & {}),
  params?: Record<string, unknown>,
): void {
  if (typeof window === 'undefined' || !initialized || !consentGranted) return
  window.gtag('event', name, params)
}

/** Listen for cookie-banner consent changes (SPA page-view sync). */
export function subscribeAnalyticsConsent(
  listener: (granted: boolean) => void,
): () => void {
  const handler = (event: Event) => {
    const detail = (event as CustomEvent<{ granted: boolean }>).detail
    listener(Boolean(detail?.granted))
  }
  window.addEventListener(CONSENT_EVENT, handler)
  return () => window.removeEventListener(CONSENT_EVENT, handler)
}
