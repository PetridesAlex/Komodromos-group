import { useEffect, useRef, useState } from 'react'
import { JANCHAPELLE_HERO } from '../data/janchapellePage'

type Props = {
  poster?: string
  video?: string
}

export default function JanchapelleHeroVideo({
  poster = JANCHAPELLE_HERO.image,
  video = JANCHAPELLE_HERO.video,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const el = videoRef.current
    if (!el || reduceMotion) return

    const markReady = () => setReady(true)

    if (el.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      markReady()
    } else {
      el.addEventListener('canplay', markReady, { once: true })
    }

    el.play().catch(() => {
      /* Autoplay may be blocked — poster remains visible until interaction. */
    })

    return () => el.removeEventListener('canplay', markReady)
  }, [reduceMotion])

  return (
    <div className="jc-hero__media" aria-hidden>
      {(reduceMotion || !ready) && (
        <div
          className="jc-hero__poster"
          style={{ backgroundImage: `url("${poster}")` }}
        />
      )}
      {!reduceMotion ? (
        <video
          ref={videoRef}
          className={`jc-hero__video${ready ? ' jc-hero__video--ready' : ''}`}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
        />
      ) : null}
    </div>
  )
}
