import { useEffect, useRef } from 'react'

/**
 * Subtle scroll-linked movement on `[data-hero-parallax]` layers inside
 * `[data-hero-parallax-root]` sections — smoothed for an inertial feel.
 * Disabled when `prefers-reduced-motion: reduce`.
 */
export default function HeroParallaxEffect() {
  const smoothRef = useRef(new WeakMap<HTMLElement, number>())

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')

    const MAX_SHIFT = 32
    const FACTOR = 0.052
    const LERP = 0.14

    let raf = 0
    const smooth = smoothRef.current

    const tick = () => {
      if (mq.matches) {
        document.querySelectorAll<HTMLElement>('[data-hero-parallax]').forEach((el) => {
          el.style.transform = ''
        })
        return
      }

      document.querySelectorAll<HTMLElement>('[data-hero-parallax-root]').forEach((root) => {
        root.querySelectorAll<HTMLElement>('[data-hero-parallax]').forEach((layer) => {
          const rect = root.getBoundingClientRect()
          const vh = window.innerHeight
          const heroMid = rect.top + rect.height / 2
          const viewMid = vh / 2
          const target = Math.max(
            -MAX_SHIFT,
            Math.min(MAX_SHIFT, (heroMid - viewMid) * FACTOR),
          )
          const prev = smooth.get(layer) ?? target
          const next = prev + (target - prev) * LERP
          smooth.set(layer, next)
          layer.style.transform = `translate3d(0, ${next}px, 0)`
        })
      })
    }

    const onScrollOrResize = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize, { passive: true })
    mq.addEventListener('change', onScrollOrResize)
    onScrollOrResize()

    return () => {
      mq.removeEventListener('change', onScrollOrResize)
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      cancelAnimationFrame(raf)
      document.querySelectorAll<HTMLElement>('[data-hero-parallax]').forEach((el) => {
        el.style.transform = ''
      })
    }
  }, [])

  return null
}
