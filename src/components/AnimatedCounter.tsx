import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'

type Props = {
  /** Target integer to count up to */
  value: number
  /** Animation length in ms */
  duration?: number
  /** Delay before starting (stagger multiple counters) */
  delayMs?: number
  /** Appended after the number (e.g. "%") */
  suffix?: string
  className?: string
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

export default function AnimatedCounter({
  value,
  duration = 1700,
  delayMs = 0,
  suffix,
  className,
}: Props) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLElement | null>(null)
  const reduceMotion = useReducedMotion()
  const ran = useRef(false)

  useEffect(() => {
    if (reduceMotion) setDisplay(value)
  }, [reduceMotion, value])

  useEffect(() => {
    if (reduceMotion) {
      return
    }

    const el = ref.current
    if (!el) return

    let raf = 0
    let timeoutId = 0

    const startCount = () => {
      if (ran.current) return
      ran.current = true
      const from = 0
      const to = value
      let startTs: number | null = null

      const tick = (ts: number) => {
        if (startTs === null) startTs = ts
        const elapsed = ts - startTs
        const p = Math.min(elapsed / duration, 1)
        setDisplay(Math.round(from + (to - from) * easeOutCubic(p)))
        if (p < 1) {
          raf = requestAnimationFrame(tick)
        }
      }

      raf = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          observer.disconnect()
          timeoutId = window.setTimeout(startCount, delayMs)
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
      window.clearTimeout(timeoutId)
    }
  }, [value, duration, delayMs, reduceMotion])

  return (
    <strong ref={ref} className={className}>
      {display}
      {suffix}
    </strong>
  )
}
