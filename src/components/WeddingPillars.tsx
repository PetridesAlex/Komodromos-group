import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { weddingHeroCopy, weddingPillarsCopy } from '../data/weddingPageCopy'
import { weddingBrandHref } from '../lib/brandPaths'
import { useWeddingLocale } from '../lib/weddingLocale'

const MotionLink = motion.create(Link)

const EASE = [0.22, 1, 0.36, 1] as const

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.06,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: EASE,
      when: 'beforeChildren',
    },
  },
}

function PillarItem({
  pillar,
  index,
}: {
  pillar: (typeof weddingPillarsCopy)[number]
  index: number
}) {
  const { t } = useWeddingLocale()
  const isHash = pillar.href.startsWith('#')
  const href = isHash ? pillar.href : weddingBrandHref(pillar.href)
  const indexLabel = String(index + 1).padStart(2, '0')
  const className = `wedding-pillars__item wedding-pillars__item--${pillar.id}`
  const pillarStyle = { ['--pillar-i' as string]: String(index) }

  const bodyVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.12,
      },
    },
  }

  const partVariants = {
    hidden: {
      opacity: 0,
      y: 18,
      x: index === 1 ? 0 : index === 0 ? -10 : 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.58,
        ease: EASE,
      },
    },
  }

  const motionProps = {
    className,
    style: pillarStyle,
    variants: itemVariants,
  }

  const content = (
    <>
      <span className="wedding-pillars__accent" aria-hidden />
      <span className="wedding-pillars__glow" aria-hidden />
      <span className="wedding-pillars__sheen" aria-hidden />

      <motion.span className="wedding-pillars__index" variants={partVariants} aria-hidden>
        {indexLabel}
      </motion.span>

      <motion.span className="wedding-pillars__body" variants={bodyVariants}>
        <motion.span className="wedding-pillars__label" variants={partVariants}>
          {t(pillar.label)}
        </motion.span>
        <motion.span className="wedding-pillars__rule" variants={partVariants} aria-hidden />
      </motion.span>

      <motion.span className="wedding-pillars__action" variants={partVariants} aria-hidden>
        <span className="wedding-pillars__action-ring" />
        <span className="wedding-pillars__action-icon">+</span>
      </motion.span>
    </>
  )

  if (isHash) {
    return (
      <motion.a href={href} {...motionProps}>
        {content}
      </motion.a>
    )
  }

  return (
    <MotionLink to={href} {...motionProps}>
      {content}
    </MotionLink>
  )
}

export default function WeddingPillars() {
  const reducedMotion = useReducedMotion()
  const { t } = useWeddingLocale()

  return (
    <section
      className={`wedding-pillars${reducedMotion ? ' wedding-pillars--static' : ''}`}
      aria-label={t(weddingHeroCopy.exploreServices)}
    >
      <div className="wedding-pillars__ambient" aria-hidden />
      <div className="container">
        <motion.div
          className="wedding-pillars__inner"
          variants={gridVariants}
          initial={reducedMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: '-32px' }}
        >
          {weddingPillarsCopy.map((pillar, index) => (
            <PillarItem key={pillar.id} pillar={pillar} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
