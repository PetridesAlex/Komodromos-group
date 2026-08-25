import { useState } from 'react'
import { Wallet, Users, ShieldCheck, Sparkles, type LucideIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { weddingWhyCopy } from '../data/weddingPageCopy'
import { useWeddingLocale } from '../lib/weddingLocale'

const WEDDING_WHY_ICONS: LucideIcon[] = [Wallet, Users, ShieldCheck, Sparkles]

const EASE = [0.22, 1, 0.36, 1] as const

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.12,
    },
  },
}

const cardWrapVariants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: EASE,
      when: 'beforeChildren',
    },
  },
}

const cardVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.14,
    },
  },
}

const partVariants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: EASE,
    },
  },
}

const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.78,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.58,
      ease: EASE,
    },
  },
}

const ghostVariants = {
  hidden: {
    opacity: 0,
    x: 18,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.62,
      ease: EASE,
    },
  },
}

export default function WeddingWhyCards() {
  const { t } = useWeddingLocale()
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="wedding-why__grid"
      variants={reduceMotion ? undefined : gridVariants}
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.16, margin: '0px 0px -8% 0px' }}
    >
      {weddingWhyCopy.items.map((item, index) => (
        <CardItem
          key={item.title.en}
          index={index}
          Icon={WEDDING_WHY_ICONS[index] ?? Sparkles}
          title={t(item.title)}
          body={t(item.body)}
          reduceMotion={Boolean(reduceMotion)}
        />
      ))}
    </motion.div>
  )
}

function CardItem({
  index,
  Icon,
  title,
  body,
  reduceMotion,
}: {
  index: number
  Icon: LucideIcon
  title: string
  body: string
  reduceMotion: boolean
}) {
  const [revealed, setRevealed] = useState(reduceMotion)

  if (reduceMotion) {
    return (
      <div className="wedding-why__card-wrap">
        <article
          className="wedding-why__card wedding-why__card--revealed"
          style={{ '--why-i': index } as React.CSSProperties}
        >
          <span className="wedding-why__ghost" aria-hidden>
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="wedding-why__card-top">
            <span className="wedding-why__icon" aria-hidden>
              <Icon size={20} strokeWidth={1.75} />
            </span>
            <span className="wedding-why__index" aria-hidden>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <h3 className="wedding-why__card-title">{title}</h3>
          <p className="wedding-why__text">{body}</p>
          <span className="wedding-why__line" aria-hidden />
        </article>
      </div>
    )
  }

  return (
    <motion.div
      className="wedding-why__card-wrap"
      variants={cardWrapVariants}
      onAnimationComplete={() => {
        window.setTimeout(() => setRevealed(true), 520)
      }}
    >
      <motion.article
        className={`wedding-why__card${revealed ? ' wedding-why__card--revealed' : ''}`}
        style={{ '--why-i': index } as React.CSSProperties}
        variants={cardVariants}
      >
        <motion.span className="wedding-why__ghost" aria-hidden variants={ghostVariants}>
          {String(index + 1).padStart(2, '0')}
        </motion.span>

        <motion.div className="wedding-why__card-top" variants={partVariants}>
          <motion.span className="wedding-why__icon" aria-hidden variants={iconVariants}>
            <Icon size={20} strokeWidth={1.75} />
          </motion.span>
          <span className="wedding-why__index" aria-hidden>
            {String(index + 1).padStart(2, '0')}
          </span>
        </motion.div>

        <motion.h3 className="wedding-why__card-title" variants={partVariants}>
          {title}
        </motion.h3>

        <motion.p className="wedding-why__text" variants={partVariants}>
          {body}
        </motion.p>

        <motion.span className="wedding-why__line" aria-hidden variants={partVariants} />
      </motion.article>
    </motion.div>
  )
}
