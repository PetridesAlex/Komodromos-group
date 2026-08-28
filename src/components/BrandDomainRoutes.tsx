import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AviationServicesPage from './AviationServicesPage'
import GwAirlineServicesPage from './aviation/GwAirlineServicesPage'
import GwAviationJobsPage from './aviation/GwAviationJobsPage'
import GwAviationLayout from './aviation/GwAviationLayout'
import GwAviationSectionPage from './aviation/GwAviationSectionPage'
import GwCadetPage from './aviation/GwCadetPage'
import GwContactPage from './aviation/GwContactPage'
import GwPilotsPage from './aviation/GwPilotsPage'
import GwTrainingsPage from './aviation/GwTrainingsPage'
import NotFoundPage from './NotFoundPage'
import TaxClearancesPage from './TaxClearancesPage'
import TaxCompanyRegistrationPage from './TaxCompanyRegistrationPage'
import TaxHowToTicPage from './TaxHowToTicPage'
import TaxIncomeCalculatorPage from './TaxIncomeCalculatorPage'
import TaxNonDomCertificatePage from './TaxNonDomCertificatePage'
import TaxOfficeSecretarialPage from './TaxOfficeSecretarialPage'
import TaxPaymentSupportPage from './TaxPaymentSupportPage'
import TaxServicesOverviewPage from './TaxServicesOverviewPage'
import TaxTaxResidenceCertificatePage from './TaxTaxResidenceCertificatePage'
import TaxTransferFeesCalculatorPage from './TaxTransferFeesCalculatorPage'
import TaxisNetService from '../pages/TaxisNetService'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { GROUP_SITE_URL } from '../seo/domainRegistry'
import SiteTopbar from './SiteTopbar'
import TaxNexCyprusPage from './TaxNexCyprusPage'
import AstrealDevelopersPage from './AstrealDevelopersPage'
import AstrealAboutPage from './AstrealAboutPage'
import AstrealInvestCyprusPage from './AstrealInvestCyprusPage'
import AstrealOurServicesPage from './AstrealOurServicesPage'
import AstrealProjectDetailPage from './AstrealProjectDetailPage'
import PoolGardenServicesPage from './PoolGardenServicesPage'
import PoolCategoryDetailPage from './PoolCategoryDetailPage'
import ServiceDetailPage from './ServiceDetailPage'
import WeddingServicesPage from './WeddingServicesPage'
import WeddingPackageDetailPage from './WeddingPackageDetailPage'
import WeddingAboutPage from './WeddingAboutPage'
import WeddingPackageCategoryPage from './WeddingPackageCategoryPage'
import JanchapelleBridalPage from './JanchapelleBridalPage'
import JanchapelleCollectionDetailPage from './JanchapelleCollectionDetailPage'
import JanchapelleHouseDetailPage from './JanchapelleHouseDetailPage'

function TaxBrandHome() {
  return (
    <div className="page">
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref={buildGroupSiteReturnUrl('services')}
      />
      <TaxNexCyprusPage />
    </div>
  )
}

/** Remap legacy group paths (/services/tax/...) to brand-relative URLs so SPA
 *  clicks on taxnexcy.com land on the right page instead of the homepage. */
function TaxGroupPathRedirect() {
  const { pathname, search, hash } = useLocation()
  const rest = pathname.replace(/^\/services\/tax\/?/, '')
  const to = `${rest ? `/${rest}` : '/'}${search}${hash}`
  return <Navigate to={to} replace />
}

/** /contact is a group-site page — send brand-domain visitors there. */
function TaxBrandContactRedirect() {
  useEffect(() => {
    window.location.replace(`${GROUP_SITE_URL}/contact`)
  }, [])

  return (
    <div className="page">
      <div className="taxnex-root" style={{ minHeight: '40vh', display: 'grid', placeItems: 'center' }}>
        <p className="taxnex-muted">Redirecting to contact…</p>
      </div>
    </div>
  )
}

function AviationBrandRoutes() {
  return (
    <Routes>
      <Route element={<GwAviationLayout />}>
        <Route index element={<AviationServicesPage />} />
        <Route path="pilots" element={<GwPilotsPage />} />
        <Route path="airlines" element={<GwAirlineServicesPage />} />
        <Route path="jobs" element={<GwAviationJobsPage />} />
        <Route path="trainings" element={<GwTrainingsPage />} />
        <Route path="contact" element={<GwContactPage />} />
        <Route path="cadet-programme" element={<GwCadetPage />} />
        <Route path=":sectionSlug" element={<GwAviationSectionPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

function TaxBrandRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TaxBrandHome />} />
      <Route path="/how-to-get-a-tic" element={<TaxHowToTicPage />} />
      <Route path="/tax-residence-certificate" element={<TaxTaxResidenceCertificatePage />} />
      <Route path="/non-dom-certificate" element={<TaxNonDomCertificatePage />} />
      <Route path="/tax-clearances" element={<TaxClearancesPage />} />
      <Route path="/tax-payment-support" element={<TaxPaymentSupportPage />} />
      <Route path="/transfer-fees-calculator" element={<TaxTransferFeesCalculatorPage />} />
      <Route path="/income-tax-calculator" element={<TaxIncomeCalculatorPage />} />
      <Route path="/taxisnet-application" element={<TaxisNetService />} />
      <Route path="/services" element={<TaxServicesOverviewPage />} />
      <Route path="/company-registration-cyprus" element={<TaxCompanyRegistrationPage />} />
      <Route path="/office-secretarial-services" element={<TaxOfficeSecretarialPage />} />
      <Route path="/contact" element={<TaxBrandContactRedirect />} />
      <Route path="/services/tax/*" element={<TaxGroupPathRedirect />} />
      <Route path="/services/tax" element={<TaxGroupPathRedirect />} />
      <Route path="/services/*" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

function AstrealBrandRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AstrealDevelopersPage />} />
      <Route path="/about" element={<AstrealAboutPage />} />
      <Route path="/invest-in-cyprus" element={<AstrealInvestCyprusPage />} />
      <Route path="/our-services" element={<AstrealOurServicesPage />} />
      <Route path="/projects/:projectId" element={<AstrealProjectDetailPage />} />
      <Route path="/services/astreal/*" element={<Navigate to="/" replace />} />
      <Route path="/services/*" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

function PoolBrandRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PoolGardenServicesPage />} />
      <Route path="/categories/:categoryId" element={<PoolCategoryDetailPage />} />
      <Route path="/services/:serviceId" element={<PoolCategoryDetailPage />} />
      <Route path="/linings/:liningId" element={<PoolCategoryDetailPage />} />
      <Route path="/services/pool/*" element={<Navigate to="/" replace />} />
      <Route path="/services/*" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

function AdrBrandRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ServiceDetailPage slugOverride="adr-mediation" />} />
      <Route path="/services/adr-mediation/*" element={<Navigate to="/" replace />} />
      <Route path="/services/*" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

function JanchapelleBrandRoutes() {
  return (
    <Routes>
      <Route path="/" element={<JanchapelleBridalPage />} />
      <Route path="/collections/:collectionId" element={<JanchapelleCollectionDetailPage />} />
      <Route path="/houses/:houseId" element={<JanchapelleHouseDetailPage />} />
      <Route path="/services/janchapelle/*" element={<Navigate to="/" replace />} />
      <Route path="/services/*" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

function WeddingBrandRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WeddingServicesPage />} />
      <Route path="/about" element={<WeddingAboutPage />} />
      <Route path="/categories/:categoryId" element={<WeddingPackageCategoryPage />} />
      <Route path="/packages/:packageId" element={<WeddingPackageDetailPage />} />
      <Route path="/services/wedding/about" element={<Navigate to="/about" replace />} />
      <Route path="/services/wedding/*" element={<Navigate to="/" replace />} />
      <Route path="/services/*" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

type Props = {
  brandSlug:
    | 'aviation'
    | 'tax'
    | 'astreal'
    | 'pool'
    | 'adr-mediation'
    | 'janchapelle'
    | 'wedding'
}

export default function BrandDomainRoutes({ brandSlug }: Props) {
  if (brandSlug === 'aviation') return <AviationBrandRoutes />
  if (brandSlug === 'tax') return <TaxBrandRoutes />
  if (brandSlug === 'astreal') return <AstrealBrandRoutes />
  if (brandSlug === 'pool') return <PoolBrandRoutes />
  if (brandSlug === 'adr-mediation') return <AdrBrandRoutes />
  if (brandSlug === 'janchapelle') return <JanchapelleBrandRoutes />
  if (brandSlug === 'wedding') return <WeddingBrandRoutes />
  return null
}
