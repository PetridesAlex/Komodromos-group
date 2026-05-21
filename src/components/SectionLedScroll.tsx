import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const THRESHOLDS = [0, 0.08, 0.16, 0.28, 0.4, 0.55, 0.7, 0.85, 1] as const
const MIN_RATIO = 0.14

/**
 * Activates a strong background LED glow on whichever `.section-led` block
 * is most visible while scrolling (one active section at a time).
 */
export default function SectionLedScroll() {
  const { pathname } = useLocation()

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.section-led'))
    if (!sections.length) return

    const ratios = new Map<HTMLElement, number>()
    let active: HTMLElement | null = null

    const pickActive = () => {
      let best: HTMLElement | null = null
      let bestRatio = 0
      for (const [el, ratio] of ratios) {
        if (ratio > bestRatio) {
          bestRatio = ratio
          best = el
        }
      }
      const next = bestRatio >= MIN_RATIO ? best : null
      if (next === active) return
      active?.classList.remove('is-led-active')
      active = next
      active?.classList.add('is-led-active')
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(
            entry.target as HTMLElement,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          )
        }
        pickActive()
      },
      {
        threshold: [...THRESHOLDS],
        rootMargin: '-14% 0px -14% 0px',
      },
    )

    for (const section of sections) {
      ratios.set(section, 0)
      observer.observe(section)
    }

    const onScroll = () => pickActive()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      for (const section of sections) {
        section.classList.remove('is-led-active')
      }
    }
  }, [pathname])

  return null
}
