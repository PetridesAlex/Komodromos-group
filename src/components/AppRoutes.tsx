import { Navigate, Route, Routes } from 'react-router-dom'
import KomodromosGroupHomePage from './KomodromosGroupHomePage'
import ContactPage from './ContactPage'
import ServiceDetailPage from './ServiceDetailPage'
import WeddingServicesPage from './WeddingServicesPage'
import WeddingPackageDetailPage from './WeddingPackageDetailPage'
import BusinessConsultingPage from './BusinessConsultingPage'
import PoolGardenServicesPage from './PoolGardenServicesPage'
import PoolCategoryDetailPage from './PoolCategoryDetailPage'
import AviationServicesPage from './AviationServicesPage'
import GwCadetPage from './aviation/GwCadetPage'
import GwContactPage from './aviation/GwContactPage'
import GwAviationLayout from './aviation/GwAviationLayout'
import GwAviationSectionPage from './aviation/GwAviationSectionPage'
import GwPilotsPage from './aviation/GwPilotsPage'
import GwAirlineServicesPage from './aviation/GwAirlineServicesPage'
import GwAviationJobsPage from './aviation/GwAviationJobsPage'
import GwTrainingsPage from './aviation/GwTrainingsPage'
import AirServicesPage from './AirServicesPage'
import AirCategoryPage from './AirCategoryPage'
import PrivateJetFleetPage from './air/PrivateJetFleetPage'
import PrivateJetFleetDetailPage from './air/PrivateJetFleetDetailPage'
import LightAircraftFleetPage from './air/LightAircraftFleetPage'
import LightAircraftFleetDetailPage from './air/LightAircraftFleetDetailPage'
import LincolnLimousineDetailPage from './LincolnLimousineDetailPage'
import LimousineDetailPage from './LimousineDetailPage'
import LimousinesExperiencesPage from './LimousinesExperiencesPage'
import SuperLuxuryCarsPage from './SuperLuxuryCarsPage'
import FishingScubaPage from './FishingScubaPage'
import FishingDetailPage from './FishingDetailPage'
import ScubaDivingDetailPage from './ScubaDivingDetailPage'
import MaseratiGhibliDetailPage from './MaseratiGhibliDetailPage'
import Porsche718BoxsterDetailPage from './Porsche718BoxsterDetailPage'
import LamborghiniHuracanDetailPage from './LamborghiniHuracanDetailPage'
import LamborghiniUrusDetailPage from './LamborghiniUrusDetailPage'
import MercedesSClassDetailPage from './MercedesSClassDetailPage'
import Porsche911Carrera4SDetailPage from './Porsche911Carrera4SDetailPage'
import CasinoExperiencesPage from './CasinoExperiencesPage'
import VipSecurityProtectionPage from './VipSecurityProtectionPage'
import VipTourIslandPage from './VipTourIslandPage'
import YachtChartersPage from './yacht-charters/YachtChartersPage'
import YachtDetailPage from './yacht-charters/YachtDetailPage'
import TaxHowToTicPage from './TaxHowToTicPage'
import TaxTaxResidenceCertificatePage from './TaxTaxResidenceCertificatePage'
import TaxNonDomCertificatePage from './TaxNonDomCertificatePage'
import TaxClearancesPage from './TaxClearancesPage'
import TaxPaymentSupportPage from './TaxPaymentSupportPage'
import TaxTransferFeesCalculatorPage from './TaxTransferFeesCalculatorPage'
import TaxIncomeCalculatorPage from './TaxIncomeCalculatorPage'
import TaxServicesOverviewPage from './TaxServicesOverviewPage'
import TaxCompanyRegistrationPage from './TaxCompanyRegistrationPage'
import TaxOfficeSecretarialPage from './TaxOfficeSecretarialPage'
import TaxisNetService from '../pages/TaxisNetService'
import AstrealDevelopersPage from './AstrealDevelopersPage'
import AstrealAboutPage from './AstrealAboutPage'
import AstrealInvestCyprusPage from './AstrealInvestCyprusPage'
import AstrealOurServicesPage from './AstrealOurServicesPage'
import AstrealProjectDetailPage from './AstrealProjectDetailPage'
import StorageUnitSpecificationsPage from './StorageUnitSpecificationsPage'
import StorageTipDetailPage from './StorageTipDetailPage'
import StorageExtraServicesPage from './StorageExtraServicesPage'
import NotFoundPage from './NotFoundPage'
import BrandDomainRoutes from './BrandDomainRoutes'
import { useSiteContext } from '../seo/SiteContext'

export function AppRoutes() {
  const { brand } = useSiteContext()

  if (brand?.slug === 'aviation') {
    return <BrandDomainRoutes brandSlug="aviation" />
  }

  if (brand?.slug === 'tax') {
    return <BrandDomainRoutes brandSlug="tax" />
  }

  if (brand?.slug === 'astreal') {
    return <BrandDomainRoutes brandSlug="astreal" />
  }

  if (brand?.slug === 'pool') {
    return <BrandDomainRoutes brandSlug="pool" />
  }

  if (brand?.slug === 'adr-mediation') {
    return <BrandDomainRoutes brandSlug="adr-mediation" />
  }

  if (brand?.slug === 'janchapelle') {
    return <BrandDomainRoutes brandSlug="janchapelle" />
  }

  if (brand?.slug === 'wedding') {
    return <BrandDomainRoutes brandSlug="wedding" />
  }

  return <GroupRoutes />
}

function GroupRoutes() {
  return (
    <Routes>
      <Route path="/" element={<KomodromosGroupHomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services/wedding" element={<WeddingServicesPage />} />
      <Route path="/services/wedding/packages/:packageId" element={<WeddingPackageDetailPage />} />
      <Route path="/services/consulting" element={<BusinessConsultingPage />} />
      <Route path="/services/pool" element={<PoolGardenServicesPage />} />
      <Route path="/services/pool/categories/:categoryId" element={<PoolCategoryDetailPage />} />
      <Route path="/services/pool/services/:serviceId" element={<PoolCategoryDetailPage />} />
      <Route path="/services/pool/linings/:liningId" element={<PoolCategoryDetailPage />} />
      <Route path="/services/aviation" element={<GwAviationLayout />}>
        <Route index element={<AviationServicesPage />} />
        <Route path="pilots" element={<GwPilotsPage />} />
        <Route path="airlines" element={<GwAirlineServicesPage />} />
        <Route path="jobs" element={<GwAviationJobsPage />} />
        <Route path="trainings" element={<GwTrainingsPage />} />
        <Route path="contact" element={<GwContactPage />} />
        <Route path="cadet-programme" element={<GwCadetPage />} />
        <Route path=":sectionSlug" element={<GwAviationSectionPage />} />
      </Route>
      <Route path="/services/air" element={<AirServicesPage />} />
      <Route path="/services/air/private-jets/fleet" element={<PrivateJetFleetPage />} />
      <Route path="/services/air/private-jets/fleet/:aircraftId" element={<PrivateJetFleetDetailPage />} />
      <Route path="/services/air/light-aircraft/fleet" element={<LightAircraftFleetPage />} />
      <Route path="/services/air/light-aircraft/fleet/:aircraftId" element={<LightAircraftFleetDetailPage />} />
      <Route path="/services/air/:categorySlug" element={<AirCategoryPage />} />
      <Route path="/services/limousines-experiences/chrysler-300-super-stretch" element={<LimousineDetailPage />} />
      <Route path="/services/limousines-experiences/lincoln-30ft-stretched" element={<LincolnLimousineDetailPage />} />
      <Route path="/services/limousines-experiences" element={<LimousinesExperiencesPage />} />
      <Route path="/services/super-luxury-cars/maserati-ghibli" element={<MaseratiGhibliDetailPage />} />
      <Route path="/services/super-luxury-cars/porsche-718-boxster-s" element={<Porsche718BoxsterDetailPage />} />
      <Route path="/services/super-luxury-cars/lamborghini-huracan" element={<LamborghiniHuracanDetailPage />} />
      <Route path="/services/super-luxury-cars/lamborghini-urus" element={<LamborghiniUrusDetailPage />} />
      <Route path="/services/super-luxury-cars/mercedes-s-class" element={<MercedesSClassDetailPage />} />
      <Route
        path="/services/super-luxury-cars/porsche-911-carrera-4s-cabriolet"
        element={<Porsche911Carrera4SDetailPage />}
      />
      <Route path="/services/super-luxury-cars" element={<SuperLuxuryCarsPage />} />
      <Route path="/services/fishing-scuba-diving/fishing" element={<FishingDetailPage />} />
      <Route path="/services/fishing-scuba-diving/scuba-diving" element={<ScubaDivingDetailPage />} />
      <Route path="/services/fishing-scuba-diving" element={<FishingScubaPage />} />
      <Route path="/services/vip-security-protection" element={<VipSecurityProtectionPage />} />
      <Route path="/services/casino-experiences" element={<CasinoExperiencesPage />} />
      <Route path="/services/vip-tour-around-island" element={<VipTourIslandPage />} />
      <Route path="/services/yacht-charters/:yachtId" element={<YachtDetailPage />} />
      <Route path="/services/yacht-charters" element={<YachtChartersPage />} />
      <Route path="/services/tax/how-to-get-a-tic" element={<TaxHowToTicPage />} />
      <Route path="/services/tax/tax-residence-certificate" element={<TaxTaxResidenceCertificatePage />} />
      <Route path="/services/tax/non-dom-certificate" element={<TaxNonDomCertificatePage />} />
      <Route path="/services/tax/tax-clearances" element={<TaxClearancesPage />} />
      <Route path="/services/tax/tax-payment-support" element={<TaxPaymentSupportPage />} />
      <Route path="/services/tax/transfer-fees-calculator" element={<TaxTransferFeesCalculatorPage />} />
      <Route path="/services/tax/income-tax-calculator" element={<TaxIncomeCalculatorPage />} />
      <Route path="/services/tax/taxisnet-application" element={<TaxisNetService />} />
      <Route path="/services/tax/services" element={<TaxServicesOverviewPage />} />
      <Route path="/services/tax/company-registration-cyprus" element={<TaxCompanyRegistrationPage />} />
      <Route path="/services/tax/office-secretarial-services" element={<TaxOfficeSecretarialPage />} />
      <Route path="/services/astreal/about" element={<AstrealAboutPage />} />
      <Route path="/services/astreal/invest-in-cyprus" element={<AstrealInvestCyprusPage />} />
      <Route path="/services/astreal/our-services" element={<AstrealOurServicesPage />} />
      <Route path="/services/astreal/projects/:projectId" element={<AstrealProjectDetailPage />} />
      <Route path="/services/astreal" element={<AstrealDevelopersPage />} />
      <Route path="/services/storage/unit-specifications" element={<StorageUnitSpecificationsPage />} />
      <Route path="/services/storage/tips/:tipId" element={<StorageTipDetailPage />} />
      <Route path="/services/storage/extra-services/man-with-van" element={<StorageExtraServicesPage />} />
      <Route path="/services" element={<Navigate to="/#services" replace />} />
      <Route path="/services/:slug" element={<ServiceDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
