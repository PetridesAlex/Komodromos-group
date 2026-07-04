import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Footer from '../Footer'
import SiteTopbar from '../SiteTopbar'
import GwSubNav from './GwSubNav'
import GwAviationPreloader from './GwAviationPreloader'
import { useAviationScroll } from '../../hooks/useAviationScroll'
import { getServiceBySlug } from '../../data/serviceCards'
import { isEnteringAviationFromOutside } from '../../lib/navigationHistory'

export default function GwAviationLayout() {
  const location = useLocation()
  const outletKey = `${location.pathname}${location.hash}`
  const card = getServiceBySlug('aviation')
  const entryCheckedRef = useRef(false)
  const [showPreloader, setShowPreloader] = useState(() => {
    entryCheckedRef.current = true
    return isEnteringAviationFromOutside(location.pathname)
  })

  useAviationScroll()

  useEffect(() => {
    if (entryCheckedRef.current) {
      entryCheckedRef.current = false
      return
    }

    if (isEnteringAviationFromOutside(location.pathname)) {
      setShowPreloader(true)
    }
  }, [location.pathname])

  if (!card) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="page aviation-services-page gw-page">
      {showPreloader ? (
        <GwAviationPreloader onDone={() => setShowPreloader(false)} />
      ) : null}

      <div className={showPreloader ? 'gw-page__content gw-page__content--hidden' : 'gw-page__content'}>
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
    </div>
  )
}
