import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useAviationScroll() {
  const location = useLocation()

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (location.hash) {
      const id = location.hash.replace('#', '')
      const scrollToSection = () => {
        const el = document.getElementById(id)
        if (!el) return
        el.scrollIntoView({
          behavior: reduce ? 'auto' : 'smooth',
          block: 'start',
        })
      }
      requestAnimationFrame(scrollToSection)
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])
}
