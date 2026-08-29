import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { CalendarHeart } from 'lucide-react'
import WeddingConsultationBookingModal from './WeddingConsultationBookingModal'
import { weddingConsultationCopy } from '../data/weddingPageCopy'
import { useWeddingLocale } from '../lib/weddingLocale'
import {
  WEDDING_SKY_OPEN_BOOKING_EVENT,
  type WeddingSkyOpenBookingDetail,
} from '../lib/weddingSkyBooking'

export default function WeddingSkyBookingLauncher() {
  const { t } = useWeddingLocale()
  const [open, setOpen] = useState(false)
  const [collectionName, setCollectionName] = useState<string | undefined>()
  const copy = weddingConsultationCopy

  useEffect(() => {
    const onOpen = (event: Event) => {
      const custom = event as CustomEvent<WeddingSkyOpenBookingDetail>
      const name = custom.detail?.collectionName?.trim()
      setCollectionName(name || undefined)
      setOpen(true)
    }

    window.addEventListener(WEDDING_SKY_OPEN_BOOKING_EVENT, onOpen)
    return () => window.removeEventListener(WEDDING_SKY_OPEN_BOOKING_EVENT, onOpen)
  }, [])

  const handleOpen = () => {
    setCollectionName(undefined)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  if (typeof document === 'undefined') return null

  return (
    <>
      {createPortal(
        <button
          type="button"
          className={`wedding-consult-fab wedding-consult-fab--global${
            open ? ' wedding-consult-fab--hidden' : ' wedding-consult-fab--visible'
          }`}
          onClick={handleOpen}
          aria-label={t(copy.fabAria)}
          aria-hidden={open}
          tabIndex={open ? -1 : 0}
        >
          <span className="wedding-consult-fab__pulse" aria-hidden />
          <span className="wedding-consult-fab__sheen" aria-hidden />
          <CalendarHeart size={18} strokeWidth={1.75} aria-hidden />
          <span className="wedding-consult-fab__label">{t(copy.fabLabel)}</span>
        </button>,
        document.body,
      )}

      <WeddingConsultationBookingModal
        open={open}
        onClose={handleClose}
        collectionName={collectionName}
      />
    </>
  )
}
