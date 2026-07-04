import { useEffect, useRef, useState } from 'react'
import { Plane } from 'lucide-react'
import { gwSubNavBrand } from '../../data/globalWingsPage'

const DURATION_MS = 3000
const TICK_MS = 40

type Props = {
  onDone: () => void
}

export default function GwAviationPreloader({ onDone }: Props) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone
  const finishedRef = useRef(false)

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    const start = performance.now()
    const tick = () => {
      const elapsed = performance.now() - start
      const next = Math.min(100, (elapsed / DURATION_MS) * 100)
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
          }, 650)
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

  return (
    <div
      className={`gw-preloader${fadeOut ? ' gw-preloader--exit' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Global Wings aviation experience"
    >
      <div className="gw-preloader__bg" aria-hidden />
      <div className="gw-preloader__glow gw-preloader__glow--one" aria-hidden />
      <div className="gw-preloader__glow gw-preloader__glow--two" aria-hidden />

      <div className="gw-preloader__sky" aria-hidden>
        <span className="gw-preloader__trail" />
        <span className="gw-preloader__plane-wrap">
          <Plane className="gw-preloader__plane" strokeWidth={1.75} aria-hidden />
        </span>
      </div>

      <div className="gw-preloader__content">
        <p className="gw-preloader__eyebrow">Aviation Recruitment & Training</p>
        <h1 className="gw-preloader__brand" aria-label={gwSubNavBrand.ariaLabel}>
          <span className="gw-preloader__brand-lead">{gwSubNavBrand.nameLead}</span>
          <span className="gw-preloader__brand-em">{gwSubNavBrand.nameEmphasis}</span>
        </h1>
        <p className="gw-preloader__tagline">Preparing your aviation experience</p>
      </div>

      <div className="gw-preloader__bar-wrap">
        <div className="gw-preloader__bar">
          <span className="gw-preloader__bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="gw-preloader__pct">{Math.round(progress)}%</span>
      </div>
    </div>
  )
}
