import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer'
import SiteTopbar from '../SiteTopbar'
import GwSubNav from './GwSubNav'
import { useAviationScroll } from '../../hooks/useAviationScroll'
import { getServiceBySlug } from '../../data/serviceCards'
import { GROUP_SITE_URL } from '../../seo/domainRegistry'
import { useSiteContext } from '../../seo/SiteContext'

export default function GwAviationLayout() {
  const location = useLocation()
  const { isBrandDomain } = useSiteContext()
  const outletKey = `${location.pathname}${location.hash}`
  const card = getServiceBySlug('aviation')

  useAviationScroll()

  if (!card) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="page aviation-services-page gw-page">
      <div className="gw-page__content">
        <SiteTopbar
          logoPathname={isBrandDomain ? '/' : '/'}
          logoScrollToId="home"
          homeHref="/"
          servicesSectionHref={isBrandDomain ? `${GROUP_SITE_URL}/#services` : '/#services'}
        />

        <GwSubNav />

        <div key={outletKey} className="gw-aviation-outlet">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  )
}
