import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Check, X } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const
const SCROLL_LOCK_ATTR = 'data-kg-scroll-lock-y'

type StorageOfferDetailModalProps = {
  open: boolean
  title: string
  image: string
  body: string
  bullets?: readonly string[]
  closing?: string
  onClose: () => void
}

function lockPageScroll(scrollY: number) {
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
  document.body.setAttribute(SCROLL_LOCK_ATTR, String(scrollY))
}

function unlockPageScroll(scrollY: number) {
  const stored = document.body.getAttribute(SCROLL_LOCK_ATTR)
  const parsed = stored ? parseInt(stored, 10) : scrollY
  const targetY = Number.isNaN(parsed) ? scrollY : parsed

  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
  document.body.removeAttribute(SCROLL_LOCK_ATTR)
  window.scrollTo(0, targetY)
}

export default function StorageOfferDetailModal({
  open,
  title,
  image,
  body,
  bullets,
  closing,
  onClose,
}: StorageOfferDetailModalProps) {
  const reduceMotion = useReducedMotion()
  const titleId = useId()
  const bodyId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const scrollYRef = useRef(0)

  useEffect(() => {
    if (!open) return

    scrollYRef.current = window.scrollY
    lockPageScroll(scrollYRef.current)

    const frame = window.requestAnimationFrame(() => {
      closeRef.current?.focus()
    })

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('keydown', onKeyDown)
      unlockPageScroll(scrollYRef.current)
    }
  }, [open, onClose])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="storage-offer-modal"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.28, ease: EASE }}
        >
          <motion.button
            type="button"
            className="storage-offer-modal__backdrop"
            aria-label="Close details"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.28 }}
          />

          <motion.div
            className="storage-offer-modal__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={bodyId}
            initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.38, ease: EASE }}
          >
            <div className="storage-offer-modal__accent" aria-hidden />

            <button
              ref={closeRef}
              type="button"
              className="storage-offer-modal__close"
              onClick={onClose}
              aria-label="Close details"
            >
              <X size={18} strokeWidth={2.25} />
            </button>

            <div className="storage-offer-modal__media">
              <img src={image} alt="" decoding="async" />
            </div>

            <div className="storage-offer-modal__body">
              <p className="storage-offer-modal__eyebrow">Storage2Rent</p>
              <h2 id={titleId} className="storage-offer-modal__title">
                {title}
              </h2>
              <p id={bodyId} className="storage-offer-modal__text">
                {body}
              </p>
              {bullets && bullets.length > 0 ? (
                <ul className="storage-offer-modal__list" aria-label="Security features">
                  {bullets.map((item) => (
                    <li key={item} className="storage-offer-modal__list-item">
                      <span className="storage-offer-modal__list-icon" aria-hidden>
                        <Check size={12} strokeWidth={2.75} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {closing ? <p className="storage-offer-modal__closing">{closing}</p> : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
