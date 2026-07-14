import { useEffect, useMemo, useRef, useState } from 'react'
import { Plane } from 'lucide-react'
import { gwSubNavBrand } from '../../data/globalWingsPage'
import { prefetchGwHeroVideo } from '../../lib/gwHeroVideo'

const GW_LOGO_SRC = '/images/services/companie-services-cover/cards-logos-services/global-wings.png'
const DURATION_MS = 3000
const EXIT_MS = 520
const TICK_MS = 32

const STATUS_PHASES = [
  { threshold: 0, label: 'Initiating departure sequence' },
  { threshold: 24, label: 'Loading aviation systems' },
  { threshold: 52, label: 'Clearing flight path' },
  { threshold: 78, label: 'Welcome aboard' },
] as const

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

function getStatusLabel(progress: number): string {
  let label: string = STATUS_PHASES[0].label
  for (const phase of STATUS_PHASES) {
    if (progress >= phase.threshold) label = phase.label
  }
  return label
}

type Props = {
  onDone: () => void
}

export default function GwAviationPreloader({ onDone }: Props) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [statusVisible, setStatusVisible] = useState(true)
  const onDoneRef = useRef(onDone)
  const finishedRef = useRef(false)
  const statusRef = useRef<string>(STATUS_PHASES[0].label)

  onDoneRef.current = onDone

  const statusLabel = useMemo(() => getStatusLabel(progress), [progress])

  useEffect(() => {
    if (statusLabel !== statusRef.current) {
      statusRef.current = statusLabel
      setStatusVisible(false)
      const timer = window.setTimeout(() => setStatusVisible(true), 140)
      return () => window.clearTimeout(timer)
    }
  }, [statusLabel])

  useEffect(() => {
    prefetchGwHeroVideo()
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    const start = performance.now()
    const tick = () => {
      const elapsed = performance.now() - start
      const linear = Math.min(1, elapsed / DURATION_MS)
      const next = easeOutCubic(linear) * 100
      setProgress(next)

      if (elapsed >= DURATION_MS) {
        if (!finishedRef.current) {
          finishedRef.current = true
          setProgress(100)
          setFadeOut(true)
          window.setTimeout(() => {
            document.documentElement.style.overflow = ''
            document.body.style.overflow = ''
            onDoneRef.current()
          }, EXIT_MS)
        }
        return
      }

      window.setTimeout(tick, TICK_MS)
    }

    const timer = window.setTimeout(tick, TICK_MS)
    return () => {
      window.clearTimeout(timer)
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [])

  const altitude = Math.round(progress * 41.2)

  return (
    <div
      className={`gw-preloader${fadeOut ? ' gw-preloader--exit' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Global Wings aviation experience"
    >
      <div className="gw-preloader__bg" aria-hidden />
      <div className="gw-preloader__aurora gw-preloader__aurora--one" aria-hidden />
      <div className="gw-preloader__aurora gw-preloader__aurora--two" aria-hidden />
      <div className="gw-preloader__stars" aria-hidden />
      <div className="gw-preloader__grid" aria-hidden />
      <div className="gw-preloader__horizon" aria-hidden />
      <div className="gw-preloader__radar" aria-hidden />

      <div className="gw-preloader__glow gw-preloader__glow--one" aria-hidden />
      <div className="gw-preloader__glow gw-preloader__glow--two" aria-hidden />

      <div className="gw-preloader__flight-scene" aria-hidden>
        <svg className="gw-preloader__path" viewBox="0 0 360 80" preserveAspectRatio="none">
          <path
            className="gw-preloader__path-track"
            d="M0 58 C 72 58, 108 18, 180 28 S 288 68, 360 24"
            pathLength={100}
          />
          <path
            className="gw-preloader__path-active"
            d="M0 58 C 72 58, 108 18, 180 28 S 288 68, 360 24"
            pathLength={100}
            style={{ strokeDashoffset: `${100 - progress}` }}
          />
        </svg>
        <span
          className="gw-preloader__plane-wrap"
          style={{ left: `${Math.min(96, Math.max(2, progress * 0.96))}%` }}
        >
          <Plane className="gw-preloader__plane" strokeWidth={1.75} aria-hidden />
          <span className="gw-preloader__plane-trail" />
        </span>
      </div>

      <div className="gw-preloader__content">
        <div className="gw-preloader__logo-wrap">
          <img
            src={GW_LOGO_SRC}
            alt=""
            className="gw-preloader__logo"
            width={168}
            height={48}
            decoding="async"
            aria-hidden
          />
        </div>

        <p className="gw-preloader__eyebrow">{gwSubNavBrand.tagline}</p>
        <h1 className="gw-preloader__brand" aria-label={gwSubNavBrand.ariaLabel}>
          <span className="gw-preloader__brand-lead">{gwSubNavBrand.nameLead}</span>
          <span className="gw-preloader__brand-em">{gwSubNavBrand.nameEmphasis}</span>
        </h1>

        <p
          className={`gw-preloader__status${statusVisible ? ' gw-preloader__status--visible' : ''}`}
        >
          {statusLabel}
        </p>
      </div>

      <div className="gw-preloader__footer">
        <div className="gw-preloader__metrics">
          <span className="gw-preloader__metric">
            <span className="gw-preloader__metric-label">Altitude</span>
            <span className="gw-preloader__metric-value">{altitude.toLocaleString()} ft</span>
          </span>
          <span className="gw-preloader__metric">
            <span className="gw-preloader__metric-label">Systems</span>
            <span className="gw-preloader__metric-value">{Math.round(progress)}%</span>
          </span>
        </div>

        <div className="gw-preloader__bar-wrap">
          <div className="gw-preloader__bar">
            <span className="gw-preloader__bar-fill" style={{ width: `${progress}%` }} />
            <span className="gw-preloader__bar-shimmer" aria-hidden />
          </div>
        </div>
      </div>
    </div>
  )
}
