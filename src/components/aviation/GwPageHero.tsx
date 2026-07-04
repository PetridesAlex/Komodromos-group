import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import GwImagePlaceholder from './GwImagePlaceholder'

export type GwPageHeroAction = {
  label: string
  to: string
  variant?: 'primary' | 'secondary'
  state?: unknown
}

export type GwPageHeroHighlight = {
  value: string
  label: string
}

export type GwPageHeroProps = {
  id?: string
  eyebrow: string
  title: string
  subtitle?: string
  lead?: string
  paragraphs?: string[]
  highlights?: GwPageHeroHighlight[]
  actions?: GwPageHeroAction[]
  children?: ReactNode
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

export default function GwPageHero({
  id = 'gw-page-hero-title',
  eyebrow,
  title,
  subtitle,
  lead,
  paragraphs = [],
  highlights = [],
  actions = [],
  children,
}: GwPageHeroProps) {
  const reduceMotion = useReducedMotion()

  const motionProps = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: 'hidden' as const,
          animate: 'visible' as const,
          variants: fadeUp,
          transition: { duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  let delayStep = 0
  const nextDelay = () => {
    const value = delayStep * 0.1
    delayStep += 1
    return value
  }

  return (
    <section className="gw-page-hero" aria-labelledby={id}>
      <GwImagePlaceholder variant="hero-bg" className="gw-page-hero__bg" label="Insert image here" />
      <div className="gw-page-hero__scrim" aria-hidden />
      <div className="gw-page-hero__grid" aria-hidden />
      <div className="gw-page-hero__glow gw-page-hero__glow--left" aria-hidden />
      <div className="gw-page-hero__glow gw-page-hero__glow--right" aria-hidden />
      <div className="gw-page-hero__accent" aria-hidden />

      <div className="container gw-page-hero__inner">
        <motion.p className="gw-page-hero__eyebrow" {...motionProps(nextDelay())}>
          <span className="gw-page-hero__eyebrow-dot" aria-hidden />
          {eyebrow}
        </motion.p>

        <motion.h1 id={id} className="gw-page-hero__title" {...motionProps(nextDelay())}>
          {title}
        </motion.h1>

        {subtitle ? (
          <motion.p className="gw-page-hero__subtitle" {...motionProps(nextDelay())}>
            {subtitle}
          </motion.p>
        ) : null}

        {lead ? (
          <motion.p className="gw-page-hero__lead" {...motionProps(nextDelay())}>
            {lead}
          </motion.p>
        ) : null}

        {paragraphs.map((para) => (
          <motion.p key={para} className="gw-page-hero__para" {...motionProps(nextDelay())}>
            {para}
          </motion.p>
        ))}

        {highlights.length > 0 ? (
          <motion.ul className="gw-page-hero__highlights" aria-label="Highlights" {...motionProps(nextDelay())}>
            {highlights.map((item) => (
              <li key={item.label}>
                <span className="gw-page-hero__highlight-value">{item.value}</span>
                <span className="gw-page-hero__highlight-label">{item.label}</span>
              </li>
            ))}
          </motion.ul>
        ) : null}

        {actions.length > 0 ? (
          <motion.div className="gw-page-hero__actions" {...motionProps(nextDelay())}>
            {actions.map((action) => (
              <Link
                key={action.label}
                to={action.to}
                state={action.state}
                className={`gw-page-hero__btn gw-page-hero__btn--${action.variant ?? 'primary'}`}
              >
                {action.label}
              </Link>
            ))}
          </motion.div>
        ) : null}

        {children ? (
          <motion.div className="gw-page-hero__extra" {...motionProps(nextDelay())}>
            {children}
          </motion.div>
        ) : null}
      </div>

      <div className="gw-page-hero__fade" aria-hidden />
    </section>
  )
}
