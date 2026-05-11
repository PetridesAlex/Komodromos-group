import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import type { YachtCharter } from '../../data/yachtChartersData'

const MotionLink = motion(Link)

const VIEW = { once: true, amount: 0.22 } as const
const EASE = [0.22, 1, 0.36, 1] as const

type Props = {
  yacht: YachtCharter
  index: number
  reduceMotion: boolean | null
}

export default function YachtCard({ yacht, index, reduceMotion }: Props) {
  const stagger = reduceMotion ? 0 : Math.min(index * 0.055, 0.72)

  return (
    <MotionLink
      to={`/services/yacht-charters/${yacht.id}`}
      className="yacht-card yacht-card--minimal"
      layout="position"
      initial={reduceMotion ? false : { opacity: 0, y: 42, scale: 0.96 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={VIEW}
      transition={{
        duration: reduceMotion ? 0.01 : 0.62,
        delay: stagger,
        ease: EASE,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              scale: 1.015,
              transition: { type: 'spring', stiffness: 420, damping: 28 },
            }
      }
      whileTap={reduceMotion ? undefined : { scale: 0.992 }}
      aria-label={`${yacht.name} — view details`}
    >
      <div className="yacht-card__media">
        <div className="yacht-card__media-gloss" aria-hidden />
        <img
          className="yacht-card__img"
          src={yacht.image}
          alt=""
          width={800}
          height={450}
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 className="yacht-card__name">{yacht.name}</h3>
    </MotionLink>
  )
}
