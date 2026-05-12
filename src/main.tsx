import { StrictMode, useState, useCallback } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './i18n'
import './index.css'
import './tailwind.css'
import KomodromosGroupHomePage from './components/KomodromosGroupHomePage.tsx'
import ContactPage from './components/ContactPage.tsx'
import ServiceDetailPage from './components/ServiceDetailPage.tsx'
import WeddingServicesPage from './components/WeddingServicesPage.tsx'
import WeddingPackageDetailPage from './components/WeddingPackageDetailPage.tsx'
import BusinessConsultingPage from './components/BusinessConsultingPage.tsx'
import PoolGardenServicesPage from './components/PoolGardenServicesPage.tsx'
import AviationServicesPage from './components/AviationServicesPage.tsx'
import AirServicesPage from './components/AirServicesPage.tsx'
import AirCategoryPage from './components/AirCategoryPage.tsx'
import PrivateJetFleetPage from './components/air/PrivateJetFleetPage.tsx'
import PrivateJetFleetDetailPage from './components/air/PrivateJetFleetDetailPage.tsx'
import LightAircraftFleetPage from './components/air/LightAircraftFleetPage.tsx'
import LightAircraftFleetDetailPage from './components/air/LightAircraftFleetDetailPage.tsx'
import LincolnLimousineDetailPage from './components/LincolnLimousineDetailPage.tsx'
import LimousineDetailPage from './components/LimousineDetailPage.tsx'
import LimousinesExperiencesPage from './components/LimousinesExperiencesPage.tsx'
import VipSecurityProtectionPage from './components/VipSecurityProtectionPage.tsx'
import VipTourIslandPage from './components/VipTourIslandPage.tsx'
import YachtChartersPage from './components/yacht-charters/YachtChartersPage.tsx'
import YachtDetailPage from './components/yacht-charters/YachtDetailPage.tsx'
import ServicesLandingPage from './components/ServicesLandingPage.tsx'
import TaxHowToTicPage from './components/TaxHowToTicPage.tsx'
import TaxTaxResidenceCertificatePage from './components/TaxTaxResidenceCertificatePage.tsx'
import TaxNonDomCertificatePage from './components/TaxNonDomCertificatePage.tsx'
import TaxClearancesPage from './components/TaxClearancesPage.tsx'
import TaxHowToTaxisnetPage from './components/TaxHowToTaxisnetPage.tsx'
import TaxTransferFeesCalculatorPage from './components/TaxTransferFeesCalculatorPage.tsx'
import TaxIncomeCalculatorPage from './components/TaxIncomeCalculatorPage.tsx'
import TaxServicesOverviewPage from './components/TaxServicesOverviewPage.tsx'
import AstrealDevelopersPage from './components/AstrealDevelopersPage.tsx'
import AstrealAboutPage from './components/AstrealAboutPage.tsx'
import AstrealProjectDetailPage from './components/AstrealProjectDetailPage.tsx'
import Preloader from './components/Preloader.tsx'
import CookieBanner from './components/CookieBanner.tsx'
import SocialHub from './components/SocialHub.tsx'
import HeroParallaxEffect from './components/HeroParallaxEffect.tsx'

function Root() {
  const [loaded, setLoaded] = useState(false)
  const handleDone = useCallback(() => setLoaded(true), [])

  return (
    <>
      {!loaded && <Preloader onDone={handleDone} />}
      <div style={loaded ? undefined : { display: 'none' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<KomodromosGroupHomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/wedding" element={<WeddingServicesPage />} />
            <Route path="/services/wedding/packages/:packageId" element={<WeddingPackageDetailPage />} />
            <Route path="/services/consulting" element={<BusinessConsultingPage />} />
            <Route path="/services/pool" element={<PoolGardenServicesPage />} />
            <Route path="/services/aviation" element={<AviationServicesPage />} />
            <Route path="/services/air" element={<AirServicesPage />} />
            <Route path="/services/air/private-jets/fleet" element={<PrivateJetFleetPage />} />
            <Route path="/services/air/private-jets/fleet/:aircraftId" element={<PrivateJetFleetDetailPage />} />
            <Route path="/services/air/light-aircraft/fleet" element={<LightAircraftFleetPage />} />
            <Route path="/services/air/light-aircraft/fleet/:aircraftId" element={<LightAircraftFleetDetailPage />} />
            <Route path="/services/air/:categorySlug" element={<AirCategoryPage />} />
            <Route
              path="/services/limousines-experiences/chrysler-300-super-stretch"
              element={<LimousineDetailPage />}
            />
            <Route
              path="/services/limousines-experiences/lincoln-30ft-stretched"
              element={<LincolnLimousineDetailPage />}
            />
            <Route path="/services/limousines-experiences" element={<LimousinesExperiencesPage />} />
            <Route path="/services/vip-security-protection" element={<VipSecurityProtectionPage />} />
            <Route path="/services/vip-tour-around-island" element={<VipTourIslandPage />} />
            <Route path="/services/yacht-charters/:yachtId" element={<YachtDetailPage />} />
            <Route path="/services/yacht-charters" element={<YachtChartersPage />} />
            <Route path="/services/tax/how-to-get-a-tic" element={<TaxHowToTicPage />} />
            <Route path="/services/tax/tax-residence-certificate" element={<TaxTaxResidenceCertificatePage />} />
            <Route path="/services/tax/non-dom-certificate" element={<TaxNonDomCertificatePage />} />
            <Route path="/services/tax/tax-clearances" element={<TaxClearancesPage />} />
            <Route path="/services/tax/how-to-register-to-taxisnet" element={<TaxHowToTaxisnetPage />} />
            <Route path="/services/tax/transfer-fees-calculator" element={<TaxTransferFeesCalculatorPage />} />
            <Route path="/services/tax/income-tax-calculator" element={<TaxIncomeCalculatorPage />} />
            <Route path="/services/tax/services" element={<TaxServicesOverviewPage />} />
            <Route path="/services/astreal/about" element={<AstrealAboutPage />} />
            <Route path="/services/astreal/projects/:projectId" element={<AstrealProjectDetailPage />} />
            <Route path="/services/astreal" element={<AstrealDevelopersPage />} />
            <Route path="/services" element={<ServicesLandingPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
          </Routes>
        </BrowserRouter>
        <HeroParallaxEffect />
        <CookieBanner />
        <SocialHub />
      </div>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
