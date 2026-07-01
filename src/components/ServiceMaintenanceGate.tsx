import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { isPathUnderMaintenance } from '../lib/serviceMaintenance'
import ServiceMaintenancePage from './ServiceMaintenancePage'

type Props = {
  children: ReactNode
}

/** Blocks maintenance service routes in production; local dev keeps full preview access. */
export default function ServiceMaintenanceGate({ children }: Props) {
  const { pathname } = useLocation()

  if (isPathUnderMaintenance(pathname)) {
    return <ServiceMaintenancePage />
  }

  return children
}
