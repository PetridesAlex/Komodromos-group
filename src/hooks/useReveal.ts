import { useEffect, useRef } from 'react'

const REVEAL_SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-scale'

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    /* Skip reveal transforms on phones/tablets — WebKit often crashes while scrolling */
    const isCoarsePointer = window.matchMedia('(hover: none), (max-width: 900px)').matches
    if (reducedMotion || isCoarsePointer) {
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
        threshold: [0.06, 0.14],
        rootMargin: '0px 0px -8% 0px',
      },
    )

    const observeAll = () => {
      root.querySelectorAll(REVEAL_SELECTOR).forEach((node) => {
        if (node.classList.contains('revealed')) return
        observer.observe(node)
      })
    }

    observeAll()
    const frame = window.requestAnimationFrame(observeAll)

    const mutation = new MutationObserver(() => observeAll())
    mutation.observe(root, { childList: true, subtree: true })

    return () => {
      window.cancelAnimationFrame(frame)
      mutation.disconnect()
      observer.disconnect()
    }
  }, [])

  return ref
}
