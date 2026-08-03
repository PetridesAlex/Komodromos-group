import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import type { YachtCharter } from '../../data/yachtChartersData'
import { getYachtCharterImageAlt } from '../../data/seo/yachtCharterImageAlts'

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
  const isFlagship = Boolean(yacht.featured)

  return (
    <MotionLink
      to={`/services/yacht-charters/${yacht.id}`}
      className={`yacht-card yacht-card--minimal${isFlagship ? ' yacht-card--flagship' : ''}`}
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
              y: isFlagship ? -4 : -6,
              scale: isFlagship ? 1.008 : 1.015,
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
          alt={getYachtCharterImageAlt(yacht.image, yacht.imageAlt ?? `${yacht.name} luxury yacht charter in Cyprus`)}
          width={isFlagship ? 1600 : 800}
          height={isFlagship ? 900 : 450}
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
        {isFlagship ? (
          <>
            <div className="yacht-card__flagship-veil" aria-hidden />
            <div className="yacht-card__flagship-frame" aria-hidden />
            <div className="yacht-card__flagship-copy">
              {yacht.featuredEyebrow ? (
                <p className="yacht-card__flagship-eyebrow">{yacht.featuredEyebrow}</p>
              ) : null}
              <h3 className="yacht-card__name">{yacht.name}</h3>
              {yacht.featuredMeta ? (
                <p className="yacht-card__flagship-meta">{yacht.featuredMeta}</p>
              ) : null}
              <span className="yacht-card__flagship-cta">
                Discover the experience
                <span aria-hidden> →</span>
              </span>
            </div>
          </>
        ) : null}
      </div>
      {isFlagship ? null : <h3 className="yacht-card__name">{yacht.name}</h3>}
    </MotionLink>
  )
}
