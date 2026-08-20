/**
 * Cloudflare Turnstile client helpers.
 * Uses a single hosted widget (see TurnstileHost) when available.
 */

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
const SCRIPT_ID = 'cf-turnstile-script'

type TurnstileRenderOptions = {
  sitekey: string
  callback?: (token: string) => void
  'error-callback'?: (error?: string) => void
  'expired-callback'?: () => void
  'timeout-callback'?: () => void
  size?: 'normal' | 'compact' | 'flexible' | 'invisible'
  appearance?: 'always' | 'execute' | 'interaction-only'
  retry?: 'auto' | 'never'
  theme?: 'light' | 'dark' | 'auto'
  execution?: 'render' | 'execute'
}

type TurnstileApi = {
  render: (container: string | HTMLElement, options: TurnstileRenderOptions) => string
  reset: (widgetId?: string) => void
  remove: (widgetId?: string) => void
  getResponse: (widgetId?: string) => string | undefined
  execute: (container?: string | HTMLElement | string, options?: TurnstileRenderOptions) => void
  ready: (callback: () => void) => void
}

type PendingToken = {
  resolve: (token: string) => void
  reject: (error: Error) => void
  timer: number
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
    __kgTurnstileWidgetId?: string
    __kgTurnstileReady?: Promise<void>
    __kgTurnstilePending?: PendingToken | null
  }
}

const VERIFY_ERROR =
  'Could not verify your submission. Please refresh the page and try again, or email info@komodromosgroup.com directly.'

export function getTurnstileSiteKey(): string {
  const key = import.meta.env.VITE_TURNSTILE_SITE_KEY
  return typeof key === 'string' ? key.trim() : ''
}

export function isTurnstileConfigured(): boolean {
  return getTurnstileSiteKey().length > 0
}

function loadTurnstileScript(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Turnstile is only available in the browser.'))
  }

  if (window.turnstile) {
    return Promise.resolve()
  }

  if (window.__kgTurnstileReady) {
    return window.__kgTurnstileReady
  }

  window.__kgTurnstileReady = new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true })
      existing.addEventListener('error', () => reject(new Error('Failed to load Turnstile.')), {
        once: true,
      })
      if (window.turnstile) resolve()
      return
    }

    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.src = SCRIPT_SRC
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load Turnstile.'))
    document.head.appendChild(script)
  })

  return window.__kgTurnstileReady
}

export async function ensureTurnstileReady(): Promise<TurnstileApi | null> {
  if (!isTurnstileConfigured()) return null
  await loadTurnstileScript()
  return window.turnstile ?? null
}

/** Called by TurnstileHost when a token is issued. */
export function resolveTurnstileToken(token: string): void {
  const pending = window.__kgTurnstilePending
  if (!pending) return
  window.clearTimeout(pending.timer)
  window.__kgTurnstilePending = null
  pending.resolve(token)
}

/** Called by TurnstileHost on challenge error/timeout. */
export function rejectTurnstileToken(message = VERIFY_ERROR): void {
  const pending = window.__kgTurnstilePending
  if (!pending) return
  window.clearTimeout(pending.timer)
  window.__kgTurnstilePending = null
  pending.reject(new Error(message))
}

/**
 * Obtain a fresh Turnstile token for form submission.
 * Returns '' when the site key is not configured (local/dev without Turnstile).
 */
export async function getTurnstileToken(): Promise<string> {
  const sitekey = getTurnstileSiteKey()
  if (!sitekey) return ''

  const api = await ensureTurnstileReady()
  if (!api) {
    throw new Error(VERIFY_ERROR)
  }

  // Wait briefly for TurnstileHost to finish rendering if needed
  const deadline = Date.now() + 4000
  while (!window.__kgTurnstileWidgetId && Date.now() < deadline) {
    await new Promise((r) => window.setTimeout(r, 50))
  }

  const widgetId = window.__kgTurnstileWidgetId
  if (!widgetId) {
    // One-shot fallback widget
    return executeOneShot(api, sitekey)
  }

  if (window.__kgTurnstilePending) {
    rejectTurnstileToken(VERIFY_ERROR)
  }

  return new Promise<string>((resolve, reject) => {
    const timer = window.setTimeout(() => {
      if (window.__kgTurnstilePending) {
        window.__kgTurnstilePending = null
        reject(new Error('Verification timed out. Please refresh the page and try again.'))
      }
    }, 20000)

    window.__kgTurnstilePending = { resolve, reject, timer }

    try {
      api.reset(widgetId)
      api.execute(widgetId)
    } catch {
      window.clearTimeout(timer)
      window.__kgTurnstilePending = null
      reject(new Error(VERIFY_ERROR))
    }
  })
}

function executeOneShot(api: TurnstileApi, sitekey: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const container = document.createElement('div')
    container.style.position = 'fixed'
    container.style.left = '-9999px'
    container.style.bottom = '0'
    container.setAttribute('aria-hidden', 'true')
    document.body.appendChild(container)

    let id = ''
    const cleanup = () => {
      try {
        if (id) api.remove(id)
      } catch {
        // ignore
      }
      container.remove()
    }

    const timer = window.setTimeout(() => {
      cleanup()
      reject(new Error('Verification timed out. Please refresh the page and try again.'))
    }, 20000)

    try {
      id = api.render(container, {
        sitekey,
        size: 'invisible',
        appearance: 'execute',
        execution: 'execute',
        callback: (token) => {
          window.clearTimeout(timer)
          cleanup()
          resolve(token)
        },
        'error-callback': () => {
          window.clearTimeout(timer)
          cleanup()
          reject(new Error(VERIFY_ERROR))
        },
        'timeout-callback': () => {
          window.clearTimeout(timer)
          cleanup()
          reject(new Error(VERIFY_ERROR))
        },
      })
      api.execute(id)
    } catch {
      window.clearTimeout(timer)
      cleanup()
      reject(new Error(VERIFY_ERROR))
    }
  })
}
