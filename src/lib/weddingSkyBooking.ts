export const WEDDING_SKY_OPEN_BOOKING_EVENT = 'wedding-sky:open-booking'

export type WeddingSkyOpenBookingDetail = {
  collectionName?: string
}

export function openWeddingSkyBooking(detail?: WeddingSkyOpenBookingDetail) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(
    new CustomEvent<WeddingSkyOpenBookingDetail>(WEDDING_SKY_OPEN_BOOKING_EVENT, {
      detail: detail ?? {},
    }),
  )
}
