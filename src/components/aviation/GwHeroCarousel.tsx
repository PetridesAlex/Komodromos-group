import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import {
  AVIATION_SECTIONS,
  aviationSectionHref,
  gwHeroCta,
  gwHeroCycle,
  gwHeroMessages,
} from '../../data/globalWingsPage'
import GwHeroVideoBackground from './GwHeroVideoBackground'

const SERVICES_LINK = aviationSectionHref('services')
const EASE = [0.22, 1, 0.36, 1] as const

export default function GwHeroCarousel() {
  const reduceMotion = useReducedMotion()
  const [messageIndex, setMessageIndex] = useState(0)
  const [captionVisible, setCaptionVisible] = useState(reduceMotion ?? false)

  const message = gwHeroMessages[messageIndex] ?? gwHeroMessages[0]

  useEffect(() => {
    if (reduceMotion) {
      setCaptionVisible(true)
      return
    }

    let cancelled = false
    const timers: number[] = []

    const schedule = (fn: () => void, delay: number) => {
      const id = window.setTimeout(() => {
        if (!cancelled) fn()
      }, delay)
      timers.push(id)
    }

    const runCycle = () => {
      setCaptionVisible(false)
      schedule(() => {
        setCaptionVisible(true)
        schedule(() => {
          setCaptionVisible(false)
          schedule(() => {
            setMessageIndex((i) => (i + 1) % gwHeroMessages.length)
            runCycle()
          }, gwHeroCycle.fadeMs)
        }, gwHeroCycle.captionVisibleMs)
      }, gwHeroCycle.videoClearMs)
    }

    runCycle()

    return () => {
      cancelled = true
      timers.forEach((id) => window.clearTimeout(id))
    }
  }, [reduceMotion])

  return (
    <section
      id={AVIATION_SECTIONS.hero}
      className={`gw-hero${captionVisible ? ' gw-hero--caption-visible' : ' gw-hero--video-clear'}`}
      aria-label="Global Wings hero"
    >
      <GwHeroVideoBackground />

      <div className="gw-hero__stage">
        <AnimatePresence mode="wait">
          {captionVisible ? (
            <motion.div
              key={messageIndex}
              className="gw-hero__caption container"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: gwHeroCycle.fadeMs / 1000, ease: EASE }}
            >
              <p className="gw-hero__eyebrow">
                <span className="gw-hero__eyebrow-dot" aria-hidden />
                {message.eyebrow}
              </p>
              <h1 className="gw-hero__title">{message.title}</h1>
              <h2 className="gw-hero__subtitle">{message.subtitle}</h2>
              <Link className="gw-hero__cta" to={SERVICES_LINK}>
                <span className="gw-hero__cta-fill" aria-hidden />
                <span className="gw-hero__cta-label">{gwHeroCta.label}</span>
                <ArrowRight className="gw-hero__cta-icon" aria-hidden size={16} strokeWidth={2.25} />
              </Link>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <Link className="gw-hero__scroll" to={SERVICES_LINK} aria-label="Scroll to services">
        <ChevronDown aria-hidden />
      </Link>

      <div className="gw-hero__beats" aria-hidden>
        {gwHeroMessages.map((item, index) => (
          <span
            key={item.title}
            className={`gw-hero__beat${index === messageIndex ? ' gw-hero__beat--active' : ''}${
              captionVisible && index === messageIndex ? ' gw-hero__beat--live' : ''
            }`}
          />
        ))}
      </div>
    </section>
  )
}
