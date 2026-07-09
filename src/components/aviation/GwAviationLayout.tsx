import { Navigate, Outlet, useLocation, useSearchParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Footer from '../Footer'
import SiteTopbar from '../SiteTopbar'
import GwSubNav from './GwSubNav'
import GwAviationPreloader from './GwAviationPreloader'
import { useAviationScroll } from '../../hooks/useAviationScroll'
import { getServiceBySlug } from '../../data/serviceCards'
import { GW_ENTRY_QUERY, hasGwEntryFlag, isEnteringAviationFromOutside } from '../../lib/navigationHistory'
import { GROUP_SITE_URL } from '../../seo/domainRegistry'
import { useSiteContext } from '../../seo/SiteContext'

export default function GwAviationLayout() {
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const { isBrandDomain, brand } = useSiteContext()
  const isAviationBrandHost = brand?.slug === 'aviation'
  const outletKey = `${location.pathname}${location.hash}`
  const card = getServiceBySlug('aviation')
  const entryCheckedRef = useRef(false)
  const [showPreloader, setShowPreloader] = useState(() => {
    entryCheckedRef.current = true
    return (
      hasGwEntryFlag(location.search) ||
      isEnteringAviationFromOutside(location.pathname, isAviationBrandHost)
    )
  })

  useAviationScroll()

  useEffect(() => {
    if (entryCheckedRef.current) {
      entryCheckedRef.current = false
      return
    }

    if (isEnteringAviationFromOutside(location.pathname, isAviationBrandHost)) {
      setShowPreloader(true)
    }
  }, [location.pathname, isAviationBrandHost])

  const handlePreloaderDone = () => {
    setShowPreloader(false)

    if (hasGwEntryFlag(location.search)) {
      const next = new URLSearchParams(searchParams)
      next.delete(GW_ENTRY_QUERY)
      setSearchParams(next, { replace: true })
    }
  }

  if (!card) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="page aviation-services-page gw-page">
      {showPreloader ? <GwAviationPreloader onDone={handlePreloaderDone} /> : null}

      <div className={showPreloader ? 'gw-page__content gw-page__content--hidden' : 'gw-page__content'}>
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
