import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import {
  isBrandUnderMaintenance,
  isPathUnderMaintenance,
} from '../lib/serviceMaintenance'
import { useSiteContext } from '../seo/SiteContext'
import ServiceMaintenancePage from './ServiceMaintenancePage'

type Props = {
  children: ReactNode
}

/** Blocks maintenance service routes in production; local dev keeps full preview access. */
export default function ServiceMaintenanceGate({ children }: Props) {
  const { pathname } = useLocation()
  const { brand } = useSiteContext()

  if (isBrandUnderMaintenance(brand?.slug) || isPathUnderMaintenance(pathname)) {
    return <ServiceMaintenancePage />
  }

  return children
}
