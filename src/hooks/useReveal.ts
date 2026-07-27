import { useEffect, useRef } from 'react'

const REVEAL_SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-scale'

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      root.querySelectorAll(REVEAL_SELECTOR).forEach((node) => {
        node.classList.add('revealed')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: [0.08, 0.16],
        rootMargin: '0px 0px -6% 0px',
      }
    )

    const observeAll = () => {
      root.querySelectorAll(REVEAL_SELECTOR).forEach((node) => {
        if (node.classList.contains('revealed')) return
        observer.observe(node)
      })
    }

    observeAll()
    // Catch nested sections that paint a frame later
    const frame = window.requestAnimationFrame(observeAll)

    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [])

  return ref
}
