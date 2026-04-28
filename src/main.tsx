import { StrictMode, useState, useCallback } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import YachtChartersPage from './components/yacht-charters/YachtChartersPage.tsx'
import Preloader from './components/Preloader.tsx'
import CookieBanner from './components/CookieBanner.tsx'
import SocialHub from './components/SocialHub.tsx'

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
            <Route path="/services/air/:categorySlug" element={<AirCategoryPage />} />
            <Route path="/services/yacht-charters" element={<YachtChartersPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
          </Routes>
        </BrowserRouter>
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
