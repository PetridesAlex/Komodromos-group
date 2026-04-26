import { motion } from 'motion/react'
import type { YachtCharter } from '../../data/yachtChartersData'
import type { DurationFilter } from './YachtFilter'

type Props = {
  yacht: YachtCharter
  durationHighlight: DurationFilter
  onViewDetails: () => void
  onRequestBooking: () => void
  reduceMotion: boolean | null
}

export default function YachtCard({
  yacht,
  durationHighlight,
  onViewDetails,
  onRequestBooking,
  reduceMotion,
}: Props) {
  const priceFocus =
    durationHighlight === '4h'
      ? yacht.price4h
      : durationHighlight === '6h'
        ? yacht.price6h
        : yacht.priceFullDay

  return (
    <motion.article
      className="yacht-card"
      layout
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="yacht-card__media">
        <img
          className="yacht-card__img"
          src={yacht.image}
          alt={yacht.name}
          width={800}
          height={520}
          loading="lazy"
          decoding="async"
        />
        <div className="yacht-card__veil" aria-hidden />
        <span className="yacht-card__type">{yacht.type}</span>
      </div>
      <div className="yacht-card__body">
        <h3 className="yacht-card__name">{yacht.name}</h3>
        <p className="yacht-card__meta">
          <span>{yacht.location}</span>
          <span className="yacht-card__dot" aria-hidden />
          <span>Up to {yacht.guests} guests</span>
        </p>
        <div className="yacht-card__prices">
          <div className="yacht-card__price">
            <span className="yacht-card__price-label">4h</span>
            <span
              className={
                durationHighlight === '4h'
                  ? 'yacht-card__price-num yacht-card__price-num--focus'
                  : 'yacht-card__price-num'
              }
            >
              {yacht.price4h}
            </span>
          </div>
          <div className="yacht-card__price">
            <span className="yacht-card__price-label">6h</span>
            <span
              className={
                durationHighlight === '6h'
                  ? 'yacht-card__price-num yacht-card__price-num--focus'
                  : 'yacht-card__price-num'
              }
            >
              {yacht.price6h}
            </span>
          </div>
          <div className="yacht-card__price">
            <span className="yacht-card__price-label">Day</span>
            <span
              className={
                durationHighlight === 'fullday'
                  ? 'yacht-card__price-num yacht-card__price-num--focus'
                  : 'yacht-card__price-num'
              }
            >
              {yacht.priceFullDay}
            </span>
          </div>
        </div>
        <p className="yacht-card__focus-hint">
          From <strong>{priceFocus}</strong> for selected duration
        </p>
        <div className="yacht-card__actions">
          <button type="button" className="yacht-card__btn yacht-card__btn--ghost" onClick={onViewDetails}>
            View details
          </button>
          <button
            type="button"
            className="yacht-card__btn yacht-card__btn--gold"
            onClick={onRequestBooking}
          >
            Request booking
          </button>
        </div>
      </div>
    </motion.article>
  )
}
