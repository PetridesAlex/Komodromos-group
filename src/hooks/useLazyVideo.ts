import { useEffect, useRef, useState } from 'react'

type UseLazyVideoOptions = {
  rootMargin?: string
  threshold?: number
}

export function useLazyVideo(options: UseLazyVideoOptions = {}) {
  const { rootMargin = '120px 0px', threshold = 0.01 } = options
  const containerRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  useEffect(() => {
    if (!shouldLoad) return
    const video = videoRef.current
    if (!video) return

    video.load()
    video.play().catch(() => {})
  }, [shouldLoad])

  return { containerRef, videoRef, shouldLoad }
}
