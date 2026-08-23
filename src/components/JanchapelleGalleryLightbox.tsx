import { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export type JanchapelleGalleryLightboxItem = {
  src: string
  alt: string
}

type Props = {
  items: readonly JanchapelleGalleryLightboxItem[]
  index: number | null
  onClose: () => void
  onChangeIndex: (index: number) => void
  label: string
}

export default function JanchapelleGalleryLightbox({
  items,
  index,
  onClose,
  onChangeIndex,
  label,
}: Props) {
  const touchStartX = useRef<number | null>(null)

  const goPrev = useCallback(() => {
    if (index === null || items.length === 0) return
    onChangeIndex((index - 1 + items.length) % items.length)
  }, [index, items.length, onChangeIndex])

  const goNext = useCallback(() => {
    if (index === null || items.length === 0) return
    onChangeIndex((index + 1) % items.length)
  }, [index, items.length, onChangeIndex])

  useEffect(() => {
    if (index === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      else if (event.key === 'ArrowLeft') goPrev()
      else if (event.key === 'ArrowRight') goNext()
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [index, onClose, goPrev, goNext])

  if (index === null || !items[index] || typeof document === 'undefined') return null

  const current = items[index]

  return createPortal(
    <div
      className="jc-gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0]?.clientX ?? null
      }}
      onTouchEnd={(event) => {
        const startX = touchStartX.current
        const endX = event.changedTouches[0]?.clientX
        touchStartX.current = null
        if (startX == null || endX == null) return
        const delta = endX - startX
        if (Math.abs(delta) < 56) return
        if (delta > 0) goPrev()
        else goNext()
      }}
    >
      <button
        type="button"
        className="jc-gallery-lightbox__backdrop"
        onClick={onClose}
        aria-label="Close image preview"
      />
      <button
        type="button"
        className="jc-gallery-lightbox__close"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      {items.length > 1 ? (
        <>
          <button
            type="button"
            className="jc-gallery-lightbox__nav jc-gallery-lightbox__nav--prev"
            onClick={(event) => {
              event.stopPropagation()
              goPrev()
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className="jc-gallery-lightbox__nav jc-gallery-lightbox__nav--next"
            onClick={(event) => {
              event.stopPropagation()
              goNext()
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </>
      ) : null}
      <div
        className="jc-gallery-lightbox__stage"
        onClick={(event) => event.stopPropagation()}
        onKeyDown={(event) => event.stopPropagation()}
      >
        <img
          className="jc-gallery-lightbox__img"
          src={current.src}
          alt={current.alt}
          width={1440}
          height={1920}
          sizes="100vw"
          decoding="async"
        />
        <p className="jc-gallery-lightbox__counter">
          {index + 1} / {items.length}
        </p>
      </div>
    </div>,
    document.body,
  )
}
