import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import {
  ASTREAL_OUR_SERVICES_HERO_IMAGE,
  ASTREAL_OUR_SERVICES_PAGE,
} from '../data/astrealOurServicesContent'
import AstrealServicesTimeline from './AstrealServicesTimeline'

const VIEW = { once: true, amount: 0.28, margin: '-48px 0px' } as const
const EASE = [0.22, 1, 0.36, 1] as const
const page = ASTREAL_OUR_SERVICES_PAGE

export default function AstrealOurServicesPage() {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28, filter: 'blur(8px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: VIEW,
          transition: { duration: 0.68, ease: EASE, delay },
        }

  const titleMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 36, clipPath: 'inset(0 100% 0 0)' },
        animate: { opacity: 1, y: 0, clipPath: 'inset(0 0% 0 0)' },
        transition: { duration: 0.9, ease: EASE, delay: 0.08 },
      }

  const figureMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 48, scale: 0.96, filter: 'blur(12px)' },
        animate: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
        transition: { type: 'spring' as const, stiffness: 72, damping: 18, mass: 0.85, delay: 0.28 },
      }

  const imgMotion = reduceMotion
    ? {}
    : {
        initial: { scale: 1.12 },
        animate: { scale: 1 },
        transition: { duration: 1.35, ease: EASE, delay: 0.32 },
      }

  const imgDrift = reduceMotion
    ? {}
    : {
        animate: { scale: [1, 1.045, 1] },
        transition: {
          duration: 14,
          ease: 'easeInOut' as const,
          repeat: Infinity,
          repeatType: 'mirror' as const,
        },
      }

  return (
    <div className="page astreal-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <main className="astreal-about-page astreal-services-page">
        <div className="astreal-about-page__shell">
          <nav className="astreal-detail-breadcrumb" aria-label="Breadcrumb">
            <Link to="/services/astreal">Astreal Developers</Link>
            <span className="astreal-detail-breadcrumb__sep" aria-hidden>
              /
            </span>
            <span className="astreal-detail-breadcrumb__current">Our Services</span>
          </nav>

          <section
            className="astreal-about astreal-about--premium astreal-about--page-layout"
            aria-labelledby="astreal-services-heading"
          >
            <div className="astreal-about-page__content astreal-services-page__content">
              <header className="astreal-about-page__masthead">
                <motion.h1
                  id="astreal-services-heading"
                  className="astreal-about-page__heading"
                  {...titleMotion}
                >
                  {page.title}
                </motion.h1>
              </header>

              <motion.figure className="astreal-services-page__figure" {...figureMotion}>
                <span className="astreal-services-page__figure-shine" aria-hidden />
                <motion.div className="astreal-services-page__figure-media" {...imgMotion}>
                  <motion.img
                    src={ASTREAL_OUR_SERVICES_HERO_IMAGE}
                    alt={page.heroImageAlt}
                    width={1600}
                    height={900}
                    loading="eager"
                    decoding="async"
                    className="astreal-services-page__img"
                    {...imgDrift}
                  />
                </motion.div>
              </motion.figure>

              <motion.p className="astreal-lead astreal-lead--about astreal-services-page__lead" {...fadeUp(0)}>
                {page.missionLead}
              </motion.p>

              <motion.p className="astreal-about__prose astreal-about-page__prose" {...fadeUp(0.06)}>
                {page.missionBody}
              </motion.p>

              <AstrealServicesTimeline pillars={page.pillars} />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
