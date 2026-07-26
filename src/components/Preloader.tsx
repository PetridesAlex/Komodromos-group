import { useEffect, useState, useRef } from 'react'

/** New Komodromos Group brand mark (transparent blue emblem). */
const BRAND_MARK = '/images/brand/komodromos-mark.png'

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
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
      </div>

      <div className="preloader-bar-wrap">
        <div className="preloader-bar">
          <div
            className="preloader-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="preloader-pct">{Math.round(progress)}%</span>
      </div>
    </div>
  )
}
