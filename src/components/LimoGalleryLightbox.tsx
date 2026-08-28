import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export type LimoGalleryLightboxProps = {
  images: readonly string[]
  activeIndex: number | null
  onClose: () => void
  onNavigate: (index: number) => void
  altForIndex: (index: number) => string
  captionForIndex?: (index: number) => string
  rootClassName?: string
  ariaLabel?: string
}

export default function LimoGalleryLightbox({
  images,
  activeIndex,
  onClose,
  onNavigate,
  altForIndex,
  captionForIndex,
  rootClassName,
  ariaLabel = 'Gallery preview',
}: LimoGalleryLightboxProps) {
  const len = images.length
  const open = activeIndex !== null && len > 0 && activeIndex >= 0 && activeIndex < len

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
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        onNavigate((activeIndex + 1) % len)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, activeIndex, len, onClose, onNavigate])

  if (!open || activeIndex === null) return null

  const src = images[activeIndex]

  const node = (
    <div
      className={['limo-lightbox', rootClassName].filter(Boolean).join(' ')}
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

      <div className="limo-lightbox__stage" onClick={(e) => e.stopPropagation()}>
        <div className="limo-lightbox__frame">
          {len > 1 ? (
            <button
              type="button"
              className="limo-lightbox__nav limo-lightbox__nav--prev"
              onClick={() => onNavigate((activeIndex - 1 + len) % len)}
              aria-label="Previous image"
            >
              ‹
            </button>
          ) : null}
          <img
            className="limo-lightbox__img"
            src={src}
            alt={altForIndex(activeIndex)}
            decoding="async"
          />
          {len > 1 ? (
            <button
              type="button"
              className="limo-lightbox__nav limo-lightbox__nav--next"
              onClick={() => onNavigate((activeIndex + 1) % len)}
              aria-label="Next image"
            >
              ›
            </button>
          ) : null}
        </div>
        {len > 1 ? (
          <p className="limo-lightbox__counter">
            {activeIndex + 1} / {len}
          </p>
        ) : null}
        {captionForIndex ? (
          <p className="limo-lightbox__caption">{captionForIndex(activeIndex)}</p>
        ) : null}
      </div>
    </div>
  )

  return createPortal(node, document.body)
}
