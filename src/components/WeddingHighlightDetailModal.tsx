import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import type { WeddingHighlightTile } from '../data/weddingHighlightTiles'
import { getServiceCoverImageAlt } from '../data/seo/serviceCoverImageAlts'
import { useWeddingLocale } from '../lib/weddingLocale'
import { weddingTilesSectionCopy } from '../data/weddingPageCopy'
import WeddingLazyImage from './WeddingLazyImage'

type WeddingHighlightDetailModalProps = {
  tile: WeddingHighlightTile | null
  onClose: () => void
}

export default function WeddingHighlightDetailModal({
  tile,
  onClose,
}: WeddingHighlightDetailModalProps) {
  const { t } = useWeddingLocale()
  const panelRef = useRef<HTMLDivElement>(null)
  const open = tile !== null && tile.detail !== undefined

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    panelRef.current?.focus()
  }, [open, tile?.id])

  if (!open || !tile?.detail) return null

  const title = t(tile.title)
  const headline = tile.detail.headline ? t(tile.detail.headline) : title
  const imageAlt = getServiceCoverImageAlt(tile.image, title)

  const node = (
    <div
      className="wedding-highlight-detail"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wedding-highlight-detail-title"
      onClick={onClose}
    >
      <div className="wedding-highlight-detail__backdrop" aria-hidden />

      <div
        ref={panelRef}
        className="wedding-highlight-detail__panel"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="wedding-highlight-detail__close"
          onClick={onClose}
          aria-label={t(weddingTilesSectionCopy.closeDetail)}
        >
          <X size={22} strokeWidth={2} aria-hidden />
        </button>

        <div
          className={[
            'wedding-highlight-detail__media',
            tile.imageFit === 'contain' ? 'wedding-highlight-detail__media--contain' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <WeddingLazyImage src={tile.image} alt={imageAlt} priority />
          <span className="wedding-highlight-detail__media-scrim" aria-hidden />
        </div>

        <div className="wedding-highlight-detail__body">
          <p className="wedding-highlight-detail__eyebrow">{t(weddingTilesSectionCopy.detailEyebrow)}</p>
          <h2 id="wedding-highlight-detail-title" className="wedding-highlight-detail__title">
            {headline}
          </h2>
          <span className="wedding-highlight-detail__rule" aria-hidden />

          <div className="wedding-highlight-detail__copy">
            {tile.detail.paragraphs.map((paragraph) => (
              <p key={paragraph.en}>{t(paragraph)}</p>
            ))}
          </div>

          <Link
            to="/contact"
            state={{ serviceInterest: 'Wedding Services', weddingPackage: title }}
            className="wedding-highlight-detail__cta"
            onClick={onClose}
          >
            <span className="wedding-highlight-detail__cta-fill" aria-hidden />
            <span className="wedding-highlight-detail__cta-shine" aria-hidden />
            <span className="wedding-highlight-detail__cta-label">
              {t(weddingTilesSectionCopy.enquireService)}
            </span>
          </Link>
        </div>
      </div>
    </div>
  )

  return createPortal(node, document.body)
}
