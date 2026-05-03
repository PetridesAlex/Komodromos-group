import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import type { YachtCharter } from '../../data/yachtChartersData'

const MotionLink = motion(Link)

type Props = {
  yacht: YachtCharter
  reduceMotion: boolean | null
}

export default function YachtCard({ yacht, reduceMotion }: Props) {
  return (
    <MotionLink
      to={`/services/yacht-charters/${yacht.id}`}
      className="yacht-card yacht-card--minimal"
      layout
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: reduceMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
      aria-label={`${yacht.name} — view details`}
    >
      <div className="yacht-card__media">
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
