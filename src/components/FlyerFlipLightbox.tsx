import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { RotateCcw } from 'lucide-react'
import WeddingLazyImage from './WeddingLazyImage'

export type FlyerFlipLightboxItem = {
  id: string
  name: string
  frontSrc: string
  frontAlt: string
  backSrc?: string
  backAlt?: string
}

type FlyerFlipLightboxProps = {
  items: readonly FlyerFlipLightboxItem[]
  activeIndex: number | null
  onClose: () => void
  onNavigate: (index: number) => void
  ariaLabel?: string
  flipLabel?: string
  coverLabel?: string
  detailsLabel?: string
}

export default function FlyerFlipLightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
  ariaLabel = 'Package flyer preview',
  flipLabel = 'Flip',
  coverLabel = 'Cover',
  detailsLabel = 'Details',
}: FlyerFlipLightboxProps) {
  const len = items.length
  const open = activeIndex !== null && len > 0 && activeIndex >= 0 && activeIndex < len
  const item = open && activeIndex !== null ? items[activeIndex] : null
  const canFlip = Boolean(item?.backSrc)
  const [showBack, setShowBack] = useState(false)

  useEffect(() => {
    setShowBack(false)
  }, [activeIndex])

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  useEffect(() => {
    if (!open || activeIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        onNavigate((activeIndex - 1 + len) % len)
        return
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        onNavigate((activeIndex + 1) % len)
        return
      }
      if (canFlip && (e.key === ' ' || e.key === 'f' || e.key === 'F')) {
        e.preventDefault()
        setShowBack((prev) => !prev)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, activeIndex, len, onClose, onNavigate, canFlip])

  if (!open || activeIndex === null || !item) return null

  const sideLabel = showBack && canFlip ? detailsLabel : coverLabel

  const node = (
    <div
      className="limo-lightbox flyer-flip-lightbox christening-flyer-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      onClick={onClose}
    >
      <button
        type="button"
        className="limo-lightbox__close"
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        aria-label="Close preview"
      >
        ×
      </button>

      <div className="flyer-flip-lightbox__stage" onClick={(e) => e.stopPropagation()}>
        <div className="flyer-flip-lightbox__toolbar">
          <p className="flyer-flip-lightbox__title">{item.name}</p>
          <p className="flyer-flip-lightbox__side">{sideLabel}</p>
        </div>

        <div className="flyer-flip-lightbox__row">
          {len > 1 ? (
            <button
              type="button"
              className="limo-lightbox__nav limo-lightbox__nav--prev"
              onClick={() => onNavigate((activeIndex - 1 + len) % len)}
              aria-label="Previous package"
            >
              ‹
            </button>
          ) : null}

          <div
            className={[
              'flyer-flip-lightbox__scene',
              showBack && canFlip ? 'flyer-flip-lightbox__scene--flipped' : '',
              canFlip ? 'flyer-flip-lightbox__scene--flippable' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <button
              type="button"
              className="flyer-flip-lightbox__card"
              onClick={() => {
                if (canFlip) setShowBack((prev) => !prev)
              }}
              aria-label={
                canFlip
                  ? `${flipLabel}: ${showBack ? coverLabel : detailsLabel}`
                  : item.name
              }
              aria-pressed={canFlip ? showBack : undefined}
            >
              <span className="flyer-flip-lightbox__inner">
                <span className="flyer-flip-lightbox__face flyer-flip-lightbox__face--front">
                  <WeddingLazyImage
                    src={item.frontSrc}
                    alt={item.frontAlt}
                    priority
                    className="flyer-flip-lightbox__img"
                  />
                </span>
                {canFlip && item.backSrc ? (
                  <span className="flyer-flip-lightbox__face flyer-flip-lightbox__face--back">
                    <WeddingLazyImage
                      src={item.backSrc}
                      alt={item.backAlt ?? item.frontAlt}
                      priority
                      className="flyer-flip-lightbox__img"
                    />
                  </span>
                ) : null}
              </span>
            </button>
          </div>

          {len > 1 ? (
            <button
              type="button"
              className="limo-lightbox__nav limo-lightbox__nav--next"
              onClick={() => onNavigate((activeIndex + 1) % len)}
              aria-label="Next package"
            >
              ›
            </button>
          ) : null}
        </div>

        <div className="flyer-flip-lightbox__footer">
          {canFlip ? (
            <button
              type="button"
              className={[
                'flyer-flip-lightbox__flip-btn',
                showBack ? 'flyer-flip-lightbox__flip-btn--revealed' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => setShowBack((prev) => !prev)}
              aria-pressed={showBack}
            >
              <span className="flyer-flip-lightbox__flip-btn-fill" aria-hidden />
              <span className="flyer-flip-lightbox__flip-btn-shine" aria-hidden />
              <span className="flyer-flip-lightbox__flip-btn-icon" aria-hidden>
                <RotateCcw strokeWidth={2.1} />
              </span>
              <span className="flyer-flip-lightbox__flip-btn-copy">
                <span className="flyer-flip-lightbox__flip-btn-eyebrow">{flipLabel}</span>
                <span className="flyer-flip-lightbox__flip-btn-label">
                  {showBack ? coverLabel : detailsLabel}
                </span>
              </span>
            </button>
          ) : null}
          {len > 1 ? (
            <p className="limo-lightbox__counter">
              {activeIndex + 1} / {len}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )

  return createPortal(node, document.body)
}
