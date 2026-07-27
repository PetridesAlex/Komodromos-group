import { useEffect, useRef, useState } from 'react'

type ParsedStatValue = {
  prefix: string
  target: number
  suffix: string
  decimals: number
}

function parseStatValue(raw: string): ParsedStatValue {
  const match = raw.match(/^(.*?)(\d[\d,]*(?:\.\d+)?)(.*)$/)
  if (!match) {
    return { prefix: '', target: 0, suffix: raw, decimals: 0 }
  }

  const [, prefix = '', numberPart = '0', suffix = ''] = match
  const decimals = numberPart.includes('.') ? (numberPart.split('.')[1]?.length ?? 0) : 0
  const target = Number(numberPart.replace(/,/g, '')) || 0

  return { prefix, target, suffix, decimals }
}

function formatCounted(value: number, decimals: number): string {
  if (decimals > 0) {
    return value.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  }
  return Math.round(value).toLocaleString('en-US')
}

type Props = {
  value: string
  className?: string
  duration?: number
  /** Wait this long after the trigger before counting (ms). */
  delay?: number
  /** Start after `delay` on mount — use for hero stats already in view. */
  eager?: boolean
}

/** Animates numeric stat values (e.g. `34`, `€750,000`) when visible. */
export default function OnassisCountUp({
  value,
  className,
  duration = 1600,
  delay = 0,
  eager = false,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const parsed = parseStatValue(value)
  const [display, setDisplay] = useState(() => `${parsed.prefix}0${parsed.suffix}`)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || parsed.target === 0) {
      setDisplay(value)
      return
    }

    let cancelled = false
    let started = false
    let timeoutId = 0
    let rafId = 0

    const runCount = () => {
      if (started || cancelled) return
      started = true

      timeoutId = window.setTimeout(() => {
        if (cancelled) return

        const start = performance.now()
        const tick = (now: number) => {
          if (cancelled) return
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - (1 - progress) ** 3
          const current = parsed.target * eased
          setDisplay(`${parsed.prefix}${formatCounted(current, parsed.decimals)}${parsed.suffix}`)
          if (progress < 1) rafId = requestAnimationFrame(tick)
          else setDisplay(value)
        }
        rafId = requestAnimationFrame(tick)
      }, delay)
    }

    if (eager) {
      runCount()
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          if (!entry?.isIntersecting) return
          runCount()
          observer.disconnect()
        },
        { threshold: 0.15, rootMargin: '0px 0px -4% 0px' },
      )
      observer.observe(el)

      return () => {
        cancelled = true
        observer.disconnect()
        window.clearTimeout(timeoutId)
        cancelAnimationFrame(rafId)
      }
    }

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
      cancelAnimationFrame(rafId)
    }
  }, [delay, duration, eager, parsed.decimals, parsed.prefix, parsed.suffix, parsed.target, value])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
