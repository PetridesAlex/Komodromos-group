import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { PoolCategoryGalleryImage } from '../data/poolGardenPage'

export type PoolGalleryLightboxProps = {
  images: readonly PoolCategoryGalleryImage[]
  activeIndex: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function PoolGalleryLightbox({
  images,
  activeIndex,
  onClose,
  onNavigate,
}: PoolGalleryLightboxProps) {
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

  const image = images[activeIndex]

  const node = (
    <div
      className="pool-gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Project image preview"
      onClick={onClose}
    >
      <button
        type="button"
        className="pool-gallery-lightbox__close"
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        aria-label="Close preview"
      >
        <X size={22} strokeWidth={2} aria-hidden />
      </button>

      <div className="pool-gallery-lightbox__stage" onClick={(e) => e.stopPropagation()}>
        {len > 1 ? (
          <button
            type="button"
            className="pool-gallery-lightbox__nav pool-gallery-lightbox__nav--prev"
            onClick={() => onNavigate((activeIndex - 1 + len) % len)}
            aria-label="Previous image"
          >
            <ChevronLeft size={22} strokeWidth={2.25} aria-hidden />
          </button>
        ) : null}

        <figure className="pool-gallery-lightbox__figure">
          <div className="pool-gallery-lightbox__frame">
            <img src={image.src} alt={image.alt} decoding="async" />
          </div>
          {image.caption ? (
            <figcaption className="pool-gallery-lightbox__caption">{image.caption}</figcaption>
          ) : null}
        </figure>

        {len > 1 ? (
          <button
            type="button"
            className="pool-gallery-lightbox__nav pool-gallery-lightbox__nav--next"
            onClick={() => onNavigate((activeIndex + 1) % len)}
            aria-label="Next image"
          >
            <ChevronRight size={22} strokeWidth={2.25} aria-hidden />
          </button>
        ) : null}
      </div>

      {len > 1 ? (
        <p className="pool-gallery-lightbox__counter">
          {activeIndex + 1} / {len}
        </p>
      ) : null}
    </div>
  )

  return createPortal(node, document.body)
}
