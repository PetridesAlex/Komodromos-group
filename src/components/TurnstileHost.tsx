import { useEffect, useRef } from 'react'
import {
  ensureTurnstileReady,
  getTurnstileSiteKey,
  isTurnstileConfigured,
  rejectTurnstileToken,
  resolveTurnstileToken,
} from '../lib/turnstile'

/**
 * Single off-screen Turnstile widget for the whole app.
 * Tokens are requested via getTurnstileToken() at submit time.
 */
export default function TurnstileHost() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const renderedRef = useRef(false)

  useEffect(() => {
    if (!isTurnstileConfigured()) return
    if (renderedRef.current) return

    let cancelled = false
    let widgetId: string | undefined

    ;(async () => {
      const api = await ensureTurnstileReady()
      if (cancelled || !api || !containerRef.current) return

      const sitekey = getTurnstileSiteKey()
      if (!sitekey) return

      try {
        widgetId = api.render(containerRef.current, {
          sitekey,
          size: 'invisible',
          appearance: 'execute',
          execution: 'execute',
          retry: 'auto',
          theme: 'auto',
          callback: (token) => resolveTurnstileToken(token),
          'error-callback': () => rejectTurnstileToken(),
          'timeout-callback': () => rejectTurnstileToken(),
          'expired-callback': () => {
            try {
              if (widgetId) api.reset(widgetId)
            } catch {
              // ignore
            }
          },
        })
        window.__kgTurnstileWidgetId = widgetId
        renderedRef.current = true
      } catch (err) {
        console.warn('[TurnstileHost] Failed to render widget', err)
      }
    })()

    return () => {
      cancelled = true
      if (widgetId && window.turnstile) {
        try {
          window.turnstile.remove(widgetId)
        } catch {
          // ignore
        }
      }
      if (window.__kgTurnstileWidgetId === widgetId) {
        delete window.__kgTurnstileWidgetId
      }
      renderedRef.current = false
    }
  }, [])

  if (!isTurnstileConfigured()) return null

  return (
    <div
      ref={containerRef}
      className="kg-turnstile-host"
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: '-9999px',
        bottom: 0,
        width: 1,
        height: 1,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    />
  )
}
