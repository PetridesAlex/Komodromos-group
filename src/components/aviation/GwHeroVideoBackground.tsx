import { useEffect, useRef, useState } from 'react'
import { GW_HERO_VIDEO_SRC, prefetchGwHeroVideo } from '../../lib/gwHeroVideo'

export default function GwHeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    prefetchGwHeroVideo()

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || reduceMotion) return

    const markReady = () => setReady(true)

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      markReady()
    } else {
      video.addEventListener('canplay', markReady, { once: true })
    }

    video.play().catch(() => {
      /* Autoplay may be blocked until user gesture — first frame still shows when loaded. */
    })

    return () => video.removeEventListener('canplay', markReady)
  }, [reduceMotion])

  if (reduceMotion) return null

  return (
    <div
      className={`gw-hero__video-wrap${ready ? ' gw-hero__video-wrap--ready' : ''}`}
      aria-hidden
    >
      <video
        ref={videoRef}
        className="gw-hero__video"
        src={GW_HERO_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
      />
      <div className="gw-hero__video-scrim" />
    </div>
  )
}
