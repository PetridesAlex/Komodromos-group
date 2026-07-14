import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useCallback, useState } from 'react'
import Footer from '../Footer'
import SiteTopbar from '../SiteTopbar'
import GwSubNav from './GwSubNav'
import GwAviationPreloader from './GwAviationPreloader'
import { useAviationScroll } from '../../hooks/useAviationScroll'
import { getServiceBySlug } from '../../data/serviceCards'
import {
  buildGroupSiteReturnUrl,
  consumeGlobalWingsEntryIntent,
  isEnteringAviationFromOutside,
  markGlobalWingsBootPreloaderDone,
  markGroupBootPreloaderDone,
  wasGlobalWingsBootPreloaderDone,
} from '../../lib/navigationHistory'
import { useSiteContext } from '../../seo/SiteContext'

export default function GwAviationLayout() {
  const location = useLocation()
  const { isBrandDomain } = useSiteContext()
  const outletKey = `${location.pathname}${location.hash}`
  const card = getServiceBySlug('aviation')
  const [entryPreloader, setEntryPreloader] = useState(
    () =>
      !wasGlobalWingsBootPreloaderDone() &&
      isEnteringAviationFromOutside(location.pathname, isBrandDomain),
  )

  useAviationScroll()

  const handleEntryPreloaderDone = useCallback(() => {
    markGlobalWingsBootPreloaderDone()
    markGroupBootPreloaderDone()
    consumeGlobalWingsEntryIntent()
    setEntryPreloader(false)
  }, [])

  if (!card) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      {entryPreloader ? <GwAviationPreloader onDone={handleEntryPreloaderDone} /> : null}
      <div className="page aviation-services-page gw-page">
        <div className="gw-page__content">
        <SiteTopbar
          logoPathname={isBrandDomain ? '/' : '/'}
          logoScrollToId="home"
          homeHref="/"
          servicesSectionHref={isBrandDomain ? buildGroupSiteReturnUrl('services') : '/#services'}
        />

        <GwSubNav />

        <div key={outletKey} className="gw-aviation-outlet">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
    </>
  )
}
