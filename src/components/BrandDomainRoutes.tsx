import { Navigate, Route, Routes } from 'react-router-dom'
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
import SiteTopbar from './SiteTopbar'
import TaxNexCyprusPage from './TaxNexCyprusPage'
import AstrealDevelopersPage from './AstrealDevelopersPage'
import AstrealAboutPage from './AstrealAboutPage'
import AstrealInvestCyprusPage from './AstrealInvestCyprusPage'
import AstrealOurServicesPage from './AstrealOurServicesPage'
import AstrealProjectDetailPage from './AstrealProjectDetailPage'

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
      <Route path="/services/tax/*" element={<Navigate to="/" replace />} />
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

type Props = {
  brandSlug: 'aviation' | 'tax' | 'astreal'
}

export default function BrandDomainRoutes({ brandSlug }: Props) {
  if (brandSlug === 'aviation') return <AviationBrandRoutes />
  if (brandSlug === 'tax') return <TaxBrandRoutes />
  if (brandSlug === 'astreal') return <AstrealBrandRoutes />
  return null
}
