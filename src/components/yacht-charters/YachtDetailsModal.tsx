import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router-dom'
import type { YachtCharter } from '../../data/yachtChartersData'

type Props = {
  yacht: YachtCharter | null
  onClose: () => void
  reduceMotion: boolean | null
}

export default function YachtDetailsModal({ yacht, onClose, reduceMotion }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!yacht) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [yacht, onClose])

  useEffect(() => {
    if (yacht && panelRef.current) {
      const el = panelRef.current.querySelector<HTMLElement>('button, [href], input, select, textarea')
      el?.focus()
    }
  }, [yacht])

  return (
    <AnimatePresence>
      {yacht ? (
        <motion.div
          className="yacht-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="yacht-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.3 }}
        >
          <button
            type="button"
            className="yacht-modal__backdrop"
            aria-label="Close"
            onClick={onClose}
          />
          <motion.div
            ref={panelRef}
            className="yacht-modal__panel"
            initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <button type="button" className="yacht-modal__close" onClick={onClose} aria-label="Close">
              ×
            </button>
            <div className="yacht-modal__grid">
              <div className="yacht-modal__gallery">
                {yacht.gallery.map((src, i) => (
                  <div key={src + i} className="yacht-modal__gallery-cell">
                    <img src={src} alt="" width={640} height={400} loading={i === 0 ? 'eager' : 'lazy'} />
                  </div>
                ))}
              </div>
              <div className="yacht-modal__content">
                <p className="yacht-modal__kicker">{yacht.type}</p>
                <h2 id="yacht-modal-title" className="yacht-modal__title">
                  {yacht.name}
                </h2>
                <p className="yacht-modal__desc">{yacht.description}</p>
                <ul className="yacht-modal__facts">
                  <li>
                    <span className="yacht-modal__fact-label">Guests</span>
                    <span>Up to {yacht.guests}</span>
                  </li>
                  <li>
                    <span className="yacht-modal__fact-label">Departure</span>
                    <span>{yacht.location}</span>
                  </li>
                  <li>
                    <span className="yacht-modal__fact-label">Durations</span>
                    <span>{yacht.durations.join(' · ')}</span>
                  </li>
                </ul>
                <div className="yacht-modal__prices">
                  <span>{yacht.price4h}</span>
                  <span>{yacht.price6h}</span>
                  <span>{yacht.priceFullDay} full day</span>
                </div>
                <div className="yacht-modal__included">
                  <h3 className="yacht-modal__sub">Included services</h3>
                  <ul>
                    {yacht.included.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contact"
                  className="yacht-modal__cta"
                  state={{
                    serviceInterest: 'VIP Services',
                    vipSubService: `Yacht charter — ${yacht.name} (${yacht.location})`,
                  }}
                  onClick={onClose}
                >
                  Send enquiry
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
