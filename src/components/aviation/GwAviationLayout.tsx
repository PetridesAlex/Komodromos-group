import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer'
import SiteTopbar from '../SiteTopbar'
import GwSubNav from './GwSubNav'
import { useAviationScroll } from '../../hooks/useAviationScroll'
import { getServiceBySlug } from '../../data/serviceCards'

export default function GwAviationLayout() {
  const location = useLocation()
  const outletKey = `${location.pathname}${location.hash}`
  const card = getServiceBySlug('aviation')

  useAviationScroll()

  if (!card) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="page aviation-services-page gw-page">
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <GwSubNav />

      <div key={outletKey} className="gw-aviation-outlet">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}
