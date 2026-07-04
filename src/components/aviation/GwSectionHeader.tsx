import { motion, useReducedMotion } from 'motion/react'

const EASE = [0.22, 1, 0.36, 1] as const

type Props = {
  eyebrow: string
  title: string
  intro?: string
  /** Optional class for section-specific spacing overrides */
  className?: string
  variant?: 'light' | 'dark'
}

export default function GwSectionHeader({
  eyebrow,
  title,
  intro,
  className = '',
  variant = 'light',
}: Props) {
  const reduceMotion = useReducedMotion()

  const item = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.7, ease: EASE },
        },
      }

  const container = reduceMotion
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
    : {
        hidden: {},
        visible: { transition: { staggerChildren: 0.11, delayChildren: 0.06 } },
      }

  return (
    <motion.header
      className={`gw-section-header gw-section-header--${variant}${className ? ` ${className}` : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px -8% 0px' }}
      variants={container}
    >
      <span className="gw-section-header__accent" aria-hidden />
      <span className="gw-section-header__glow" aria-hidden />

      <motion.span className="gw-section-header__eyebrow" variants={item}>
        <span className="gw-section-header__eyebrow-dot" aria-hidden />
        {eyebrow}
      </motion.span>

      <motion.h2 className="gw-section-header__title" variants={item}>
        {title}
      </motion.h2>

      <motion.span className="gw-section-header__rule" variants={item} aria-hidden />

      {intro ? (
        <motion.p className="gw-section-header__intro" variants={item}>
          {intro}
        </motion.p>
      ) : null}
    </motion.header>
  )
}
