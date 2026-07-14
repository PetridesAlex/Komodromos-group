import { StrictMode, useState, useCallback, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import './index.css'
import './tailwind.css'
import Preloader from './components/Preloader.tsx'
import GwAviationPreloader from './components/aviation/GwAviationPreloader.tsx'
import {
  consumeGlobalWingsEntryIntent,
  getBootPreloader,
  markGlobalWingsBootPreloaderDone,
  markGroupBootPreloaderDone,
  stripGlobalWingsEntryQuery,
} from './lib/navigationHistory.ts'
import { unlockDocumentScroll } from './lib/documentScrollLock.ts'
import NavigationPathSync from './components/NavigationPathSync.tsx'
import CookieBanner from './components/CookieBanner.tsx'
import SocialHub from './components/SocialHub.tsx'
import HeroParallaxEffect from './components/HeroParallaxEffect.tsx'
import SectionLedScroll from './components/SectionLedScroll.tsx'
import ServiceMaintenanceGate from './components/ServiceMaintenanceGate.tsx'
import SeoManager, { SeoOverrideProvider } from './seo/SeoManager.tsx'
import { SiteContextProvider } from './seo/SiteContext.tsx'
import { AppRoutes } from './components/AppRoutes.tsx'

function Root() {
  const [bootPreloader, setBootPreloader] = useState(getBootPreloader)

  const handleGlobalWingsPreloaderDone = useCallback(() => {
    markGlobalWingsBootPreloaderDone()
    markGroupBootPreloaderDone()
    consumeGlobalWingsEntryIntent()
    stripGlobalWingsEntryQuery()
    unlockDocumentScroll()
    setBootPreloader('none')
  }, [])

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

    const safetyTimer = window.setTimeout(() => {
      if (bootPreloader === 'global-wings') {
        handleGlobalWingsPreloaderDone()
        return
      }
      handleGroupPreloaderDone()
    }, 5000)

    return () => window.clearTimeout(safetyTimer)
  }, [bootPreloader, handleGlobalWingsPreloaderDone, handleGroupPreloaderDone])

  return (
    <>
      <BrowserRouter>
        <SiteContextProvider>
          <NavigationPathSync />
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
        </SiteContextProvider>
      </BrowserRouter>

      {bootPreloader === 'global-wings' ? (
        <GwAviationPreloader onDone={handleGlobalWingsPreloaderDone} />
      ) : null}
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
