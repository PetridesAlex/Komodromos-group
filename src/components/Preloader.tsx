import { useEffect, useState, useRef } from 'react'
import { serviceCards } from '../data/serviceCards'

/** New Komodromos Group brand mark (transparent blue emblem). */
const BRAND_MARK = '/images/brand/komodromos-mark.png'

/** Same portfolio as the Solutions dropdown — shown as a brief preload advertise reel. */
const PRELOAD_SERVICES = serviceCards.map((card) => ({
  eyebrow: card.eyebrow,
  title: card.navTitle ?? card.title,
}))

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [serviceIndex, setServiceIndex] = useState(0)
  const [servicePhase, setServicePhase] = useState<'in' | 'out'>('in')
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone
  const calledDone = useRef(false)

  useEffect(() => {
    const duration = 4000
    const interval = 30
    const step = 100 / (duration / interval)
    let current = 0

    const timer = setInterval(() => {
      current += step + Math.random() * step * 0.4
      if (current >= 100) {
        current = 100
        clearInterval(timer)
        if (!calledDone.current) {
          setTimeout(() => setFadeOut(true), 300)
          setTimeout(() => {
            if (!calledDone.current) {
              calledDone.current = true
              onDoneRef.current()
            }
          }, 1100)
        }
      }
      setProgress(Math.min(current, 100))
    }, interval)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (PRELOAD_SERVICES.length === 0) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setServicePhase('in')
      return
    }

    let cancelled = false
    let index = 0
    let timeoutId = 0
    const startDelay = 700
    const holdMs = 300
    const outMs = 180

    const schedule = (fn: () => void, ms: number) => {
      timeoutId = window.setTimeout(() => {
        if (!cancelled) fn()
      }, ms)
    }

    const showNext = () => {
      setServicePhase('in')
      setServiceIndex(index)
      schedule(() => {
        setServicePhase('out')
        schedule(() => {
          index = (index + 1) % PRELOAD_SERVICES.length
          showNext()
        }, outMs)
      }, holdMs)
    }

    schedule(showNext, startDelay)
    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
    }
  }, [])

  const activeService = PRELOAD_SERVICES[serviceIndex] ?? PRELOAD_SERVICES[0]

  return (
    <div className={`preloader ${fadeOut ? 'preloader-exit' : ''}`}>
      <div className="preloader-glow preloader-glow-1" />
      <div className="preloader-glow preloader-glow-2" />
      <div className="preloader-glow preloader-glow-3" />

      <div className="preloader-content">
        <div className="preloader-logo-wrap">
          <span className="preloader-logo-halo" aria-hidden />
          <img
            src={BRAND_MARK}
            alt="Komodromos Group"
            className="preloader-logo-img"
            width={512}
            height={512}
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <h1 className="preloader-wordmark" aria-label="Komodromos Group">
          {'KOMODROMOS'.split('').map((ch, i) => (
            <span
              key={`k-${i}`}
              className="preloader-wordmark__letter"
              style={{ animationDelay: `${0.5 + i * 0.06}s` }}
              aria-hidden
            >
              {ch}
            </span>
          ))}
          <span className="preloader-wordmark__space" aria-hidden />
          {'GROUP'.split('').map((ch, i) => (
            <span
              key={`g-${i}`}
              className="preloader-wordmark__letter preloader-wordmark__letter--accent"
              style={{ animationDelay: `${0.5 + (10 + i) * 0.06}s` }}
              aria-hidden
            >
              {ch}
            </span>
          ))}
          <span className="preloader-wordmark__shine" aria-hidden />
        </h1>
        <p className="preloader-tagline">
          <span className="preloader-tagline__rule" aria-hidden />
          <span className="preloader-tagline__text">Premium Companies · Unified Standards</span>
          <span className="preloader-tagline__rule" aria-hidden />
        </p>

        {activeService ? (
          <div className="preloader-services" aria-hidden>
            <p className="preloader-services__label">Group companies</p>
            <div
              key={serviceIndex}
              className={`preloader-services__item preloader-services__item--${servicePhase}`}
            >
              <span className="preloader-services__eyebrow">{activeService.eyebrow}</span>
              <span className="preloader-services__title">{activeService.title}</span>
            </div>
            <div className="preloader-services__dots">
              {PRELOAD_SERVICES.map((service, i) => (
                <span
                  key={service.title}
                  className={`preloader-services__dot${i === serviceIndex ? ' is-active' : ''}`}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="preloader-bar-wrap">
        <div className="preloader-bar">
          <div className="preloader-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="preloader-pct">{Math.round(progress)}%</span>
      </div>
    </div>
  )
}
