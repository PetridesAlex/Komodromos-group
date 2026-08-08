import { Link, useLocation } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import PageSeo from '../seo/PageSeo'
import { useReveal } from '../hooks/useReveal'
import { getMaintenanceServiceTitle } from '../lib/serviceMaintenance'
import { useSiteContext } from '../seo/SiteContext'
import { GROUP_SITE_URL } from '../seo/domainRegistry'

export default function ServiceMaintenancePage() {
  const pageRef = useReveal()
  const { pathname } = useLocation()
  const { brand, isBrandDomain } = useSiteContext()
  const serviceTitle = getMaintenanceServiceTitle(pathname, brand?.slug)

  const homeHref = isBrandDomain ? GROUP_SITE_URL : '/'
  const contactHref = isBrandDomain ? `${GROUP_SITE_URL}/contact` : '/contact'
  const servicesSectionHref = isBrandDomain ? `${GROUP_SITE_URL}/#services` : '/#services'

  return (
    <>
      <PageSeo
        title="Service Under Maintenance"
        description="This Komodromos Group service is temporarily unavailable while we refine the experience."
        path={pathname}
        noindex
      />
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref={homeHref}
        servicesSectionHref={servicesSectionHref}
      />
      <main className="kg-not-found kg-service-maintenance" ref={pageRef}>
        <div className="container">
          <p className="kg-not-found__eyebrow reveal">Under maintenance</p>
          <h1 className="kg-not-found__title reveal reveal-delay-1">
            {serviceTitle ? `${serviceTitle} is being updated` : 'This service is being updated'}
          </h1>
          <p className="kg-not-found__lead reveal reveal-delay-2">
            We are refining this experience and it is temporarily unavailable. Please explore our
            other services or contact our team — we will be happy to assist you directly.
          </p>
          <div className="kg-not-found__actions reveal reveal-delay-3">
            {isBrandDomain ? (
              <>
                <a href={homeHref}>Back to home</a>
                <a href={contactHref}>Contact us</a>
              </>
            ) : (
              <>
                <Link to="/">Back to home</Link>
                <Link to="/contact">Contact us</Link>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
