import { Outlet } from 'react-router-dom'
import WeddingSkyBookingLauncher from './WeddingSkyBookingLauncher'

/** Shared shell for all Wedding Sky routes — keeps the booking FAB always available. */
export default function WeddingSkyLayout() {
  return (
    <>
      <Outlet />
      <WeddingSkyBookingLauncher />
    </>
  )
}
