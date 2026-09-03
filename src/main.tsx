import { StrictMode, useState, useCallback, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import './index.css'
import './tailwind.css'
import Preloader from './components/Preloader.tsx'
import {
  getBootPreloader,
  markGroupBootPreloaderDone,
} from './lib/navigationHistory.ts'
import { unlockDocumentScroll } from './lib/documentScrollLock.ts'
import NavigationPathSync from './components/NavigationPathSync.tsx'
import CookieBanner from './components/CookieBanner.tsx'
import AnalyticsRouteTracker from './components/AnalyticsRouteTracker.tsx'
import SocialHub from './components/SocialHub.tsx'
import HeroParallaxEffect from './components/HeroParallaxEffect.tsx'
import SectionLedScroll from './components/SectionLedScroll.tsx'
import ServiceMaintenanceGate from './components/ServiceMaintenanceGate.tsx'
import TurnstileHost from './components/TurnstileHost.tsx'
import SeoManager, { SeoOverrideProvider } from './seo/SeoManager.tsx'
import { SiteContextProvider } from './seo/SiteContext.tsx'
import { AppRoutes } from './components/AppRoutes.tsx'
import { initAnalytics } from './lib/analytics.ts'

initAnalytics()

function Root() {
  const [bootPreloader, setBootPreloader] = useState(getBootPreloader)

  const handleGroupPreloaderDone = useCallback(() => {
    markGroupBootPreloaderDone()
    unlockDocumentScroll()
    setBootPreloader('none')
  }, [])

  useEffect(() => {
    unlockDocumentScroll()
  }, [])

  useEffect(() => {
    if (bootPreloader === 'none') {
      unlockDocumentScroll()
      return
    }

    const safetyTimer = window.setTimeout(handleGroupPreloaderDone, 5000)
    return () => window.clearTimeout(safetyTimer)
  }, [bootPreloader, handleGroupPreloaderDone])

  return (
    <>
      <BrowserRouter>
        <SiteContextProvider>
          <NavigationPathSync />
          <AnalyticsRouteTracker />
          <SeoOverrideProvider>
            <SeoManager />
            <SectionLedScroll />
            <ServiceMaintenanceGate>
              <AppRoutes />
            </ServiceMaintenanceGate>
          </SeoOverrideProvider>
          <HeroParallaxEffect />
          <CookieBanner />
          <SocialHub />
          <TurnstileHost />
        </SiteContextProvider>
      </BrowserRouter>

      {bootPreloader === 'group' ? <Preloader onDone={handleGroupPreloaderDone} /> : null}
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Root />
    </HelmetProvider>
  </StrictMode>,
)
