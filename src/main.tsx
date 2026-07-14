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
  stripGlobalWingsEntryQuery,
} from './lib/navigationHistory.ts'
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
  const appReady = bootPreloader === 'none'

  const handleGlobalWingsPreloaderDone = useCallback(() => {
    markGlobalWingsBootPreloaderDone()
    consumeGlobalWingsEntryIntent()
    stripGlobalWingsEntryQuery()
    setBootPreloader('none')
  }, [])

  const handleGroupPreloaderDone = useCallback(() => {
    setBootPreloader('none')
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.left = ''
    document.body.style.right = ''
    document.body.style.width = ''
    document.body.removeAttribute('data-kg-scroll-lock-y')
  }, [])

  return (
    <>
      {bootPreloader === 'global-wings' ? (
        <GwAviationPreloader onDone={handleGlobalWingsPreloaderDone} />
      ) : null}
      {bootPreloader === 'group' ? <Preloader onDone={handleGroupPreloaderDone} /> : null}
      <div style={appReady ? undefined : { display: 'none' }}>
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
      </div>
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
