import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import {
  astrealBrandLogo,
  astrealHeroImage,
  astrealProjectCards,
} from '../data/astrealDevelopersPage'
import { getAstrealRoutes } from '../lib/brandPaths'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { useSiteContext } from '../seo/SiteContext'
import { GROUP_SITE_URL } from '../seo/domainRegistry'

const VIEW = { once: true, amount: 0.35, margin: '-48px 0px' } as const
const EASE = [0.22, 1, 0.36, 1] as const

export default function AstrealDevelopersPage() {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()
  const { isBrandDomain } = useSiteContext()
  const routes = getAstrealRoutes()
  const [projectsMenuOpen, setProjectsMenuOpen] = useState(false)
  const projectsPickerRef = useRef<HTMLDivElement>(null)
  const poolHref = isBrandDomain ? `${GROUP_SITE_URL}/services/pool` : '/services/pool'
  const servicesSectionHref = isBrandDomain ? buildGroupSiteReturnUrl('services') : '/#services'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!projectsMenuOpen) return

    function onPointerDown(e: PointerEvent) {
      if (!projectsPickerRef.current?.contains(e.target as Node)) {
        setProjectsMenuOpen(false)
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setProjectsMenuOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [projectsMenuOpen])

  function scrollToProjectsSection() {
    setProjectsMenuOpen(false)
    document.getElementById('astreal-projects')?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  function toggleProjectsMenu() {
    setProjectsMenuOpen((open) => !open)
  }

  /** Above-the-fold hero — mount-driven “live” entrance (not scroll) */
  const heroBgReveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1.15, ease: EASE },
      }

  const heroMarkLive = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.88, y: 28, rotate: -2 },
        animate: { opacity: 1, scale: 1, y: 0, rotate: 0 },
        transition: { type: 'spring' as const, stiffness: 88, damping: 17, mass: 0.72, delay: 0.08 },
      }

  const heroEyebrowLive = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 32, filter: 'blur(14px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        transition: { duration: 0.85, ease: EASE, delay: 0.22 },
      }

  const heroRuleLive = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, scaleX: 0 },
        animate: { opacity: 1, scaleX: 1 },
        transition: { duration: 1.05, ease: EASE, delay: 0.32 },
      }

  const heroTitleMainLive = reduceMotion
    ? {}
    : {
        initial: {
          opacity: 0,
          y: 48,
          filter:
            'blur(22px) drop-shadow(0 18px 56px rgba(0, 0, 0, 0)) drop-shadow(0 4px 12px rgba(0, 0, 0, 0))',
          clipPath: 'inset(0 100% 0 0)',
        },
        animate: {
          opacity: 1,
          y: 0,
          filter:
            'blur(0px) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.55)) drop-shadow(0 10px 40px rgba(0, 0, 0, 0.48)) drop-shadow(0 22px 64px rgba(8, 12, 22, 0.38))',
          clipPath: 'inset(0 0% 0 0)',
        },
        transition: { duration: 1.05, ease: EASE, delay: 0.42 },
      }

  const heroTitleSubLive = reduceMotion
    ? {}
    : {
        initial: {
          opacity: 0,
          y: 36,
          filter: 'blur(16px)',
          textShadow:
            '0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(8, 12, 22, 0)',
        },
        animate: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          textShadow:
            '0 1px 3px rgba(0, 0, 0, 0.6), 0 4px 28px rgba(0, 0, 0, 0.45), 0 14px 52px rgba(8, 12, 22, 0.42)',
        },
        transition: { duration: 0.95, ease: EASE, delay: 0.56 },
      }

  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: VIEW,
        transition: { duration: 0.65, ease: EASE },
      }

  const projectViewport = { once: true, amount: 0.42, margin: '-12% 0px' } as const

  const projectHeroMotion = reduceMotion
    ? {}
    : {
        initial: { scale: 1.09 },
        whileInView: { scale: 1 },
        viewport: projectViewport,
        transition: { duration: 1.15, ease: EASE },
      }

  const projectCaptionMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 36, filter: 'blur(10px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: projectViewport,
        transition: { duration: 0.78, ease: EASE, delay: 0.14 },
      }

  const projMastView = { once: true, amount: 0.25, margin: '-48px 0px' } as const

  const projMastEyebrow = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16, filter: 'blur(6px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: projMastView,
        transition: { duration: 0.62, ease: EASE },
      }

  const projMastTitle = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 40, filter: 'blur(14px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: projMastView,
        transition: { duration: 0.88, ease: EASE, delay: 0.08 },
      }

  const projMastRule = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, scaleX: 0 },
        whileInView: { opacity: 1, scaleX: 1 },
        viewport: projMastView,
        transition: { duration: 0.95, ease: EASE, delay: 0.16 },
      }

  const projMastTagline = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: projMastView,
        transition: { duration: 0.68, ease: EASE, delay: 0.22 },
      }

  const projMastLede = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 26, filter: 'blur(10px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: projMastView,
        transition: { duration: 0.75, ease: EASE, delay: 0.28 },
      }

  const projMastHint = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        viewport: projMastView,
        transition: { duration: 0.72, ease: EASE, delay: 0.38 },
      }

  return (
    <div className="page astreal-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref={servicesSectionHref}
      />

      <header className="astreal-hero" aria-labelledby="astreal-hero-title">
        <nav className="astreal-hero__top-bar" aria-label="Astreal hero quick links">
          <div className="container astreal-hero__top-bar-inner">
            <Link to={routes.about} className="astreal-hero__top-link">
              About us
            </Link>
            <Link to={routes.ourServices} className="astreal-hero__top-link">
              Our services
            </Link>
            <Link to={routes.invest} className="astreal-hero__top-link">
              Invest in Cyprus
            </Link>
            {isBrandDomain ? (
              <a
                href={poolHref}
                className="astreal-hero__top-link astreal-hero__top-link--premium"
                aria-label="Swimming pool and outdoor services — open Komodromos pool & garden page"
                rel="noopener noreferrer"
              >
                <span className="astreal-hero__top-link-promo">Featured service</span>
                <span className="astreal-hero__top-link-main">Swimming pool &amp; outdoor</span>
                <span className="astreal-hero__top-link-sub">Explore pool services →</span>
              </a>
            ) : (
              <Link
                to={poolHref}
                className="astreal-hero__top-link astreal-hero__top-link--premium"
                aria-label="Swimming pool and outdoor services — open Komodromos pool & garden page"
              >
                <span className="astreal-hero__top-link-promo">Featured service</span>
                <span className="astreal-hero__top-link-main">Swimming pool &amp; outdoor</span>
                <span className="astreal-hero__top-link-sub">Explore pool services →</span>
              </Link>
            )}
          </div>
        </nav>
        <motion.div className="astreal-hero__bg" aria-hidden {...heroBgReveal}>
          <img
            className="astreal-hero__bg-img"
            src={astrealHeroImage}
            alt=""
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="astreal-hero__scrim" />
          <div className="astreal-hero__vignette" aria-hidden />
          <div className="astreal-hero__scanlines" aria-hidden />
        </motion.div>
        <div className="container astreal-hero__inner">
          <motion.div className="astreal-hero__mark" {...heroMarkLive}>
            <span className="astreal-hero__brand-glow" aria-hidden />
            <img src={astrealBrandLogo} alt="Astreal Developers" width={440} height={160} />
          </motion.div>
          <motion.p
            className={`astreal-hero__eyebrow${reduceMotion ? '' : ' astreal-hero__eyebrow--live'}`}
            {...heroEyebrowLive}
          >
            ASTREAL Developers · Luxury houses
          </motion.p>
          <motion.span
            className="astreal-hero__rule"
            aria-hidden
            style={{ transformOrigin: 'center center' }}
            {...heroRuleLive}
          />
          <h1 id="astreal-hero-title" className="astreal-hero__title">
            <motion.span className="astreal-hero__title-main" {...heroTitleMainLive}>
              Dreaming for a luxury house
            </motion.span>
            <motion.span className="astreal-hero__title-line" {...heroTitleSubLive}>
              We master plan to perfection
            </motion.span>
          </h1>
        </div>
        <div className="astreal-hero__scroll-zone">
          <div
            ref={projectsPickerRef}
            className={`astreal-hero__projects-picker${projectsMenuOpen ? ' is-open' : ''}`}
          >
            <button
              type="button"
              className="astreal-hero__projects-jump"
              onClick={toggleProjectsMenu}
              aria-expanded={projectsMenuOpen}
              aria-controls="astreal-hero-projects-menu"
              aria-haspopup="true"
              aria-label={
                projectsMenuOpen
                  ? 'Close projects list'
                  : 'See our projects — open project list'
              }
            >
              <span className="astreal-hero__projects-jump-ring" aria-hidden />
              <span className="astreal-hero__projects-jump-row">
                <span className="astreal-hero__projects-jump-label">
                  <span className="astreal-hero__projects-jump-kicker">See our</span>
                  <span className="astreal-hero__projects-jump-title">projects</span>
                </span>
                <span className="astreal-hero__projects-jump-arrows" aria-hidden>
                  <svg className="astreal-hero__projects-jump-svg" viewBox="0 0 20 40" width="18" height="32">
                    <path
                      className="astreal-hero__projects-jump-chev astreal-hero__projects-jump-chev--1"
                      d="M5 8l5 5 5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="astreal-hero__projects-jump-chev astreal-hero__projects-jump-chev--2"
                      d="M5 17l5 5 5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="astreal-hero__projects-jump-chev astreal-hero__projects-jump-chev--3"
                      d="M5 26l5 5 5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.45"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {projectsMenuOpen && (
                <motion.div
                  id="astreal-hero-projects-menu"
                  className="astreal-hero__projects-menu"
                  role="menu"
                  aria-label="Astreal project portfolio"
                  initial={
                    reduceMotion
                      ? { opacity: 1, height: 'auto' }
                      : { opacity: 0, height: 0, y: -12 }
                  }
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={
                    reduceMotion
                      ? { opacity: 0, height: 0 }
                      : { opacity: 0, height: 0, y: -10 }
                  }
                  transition={{ duration: 0.38, ease: EASE }}
                >
                  <p className="astreal-hero__projects-menu-kicker">Latest developments</p>
                  <ul className="astreal-hero__projects-menu-list">
                    {astrealProjectCards.map((project, i) => (
                      <motion.li
                        key={project.id}
                        className="astreal-hero__projects-menu-item"
                        role="none"
                        initial={reduceMotion ? false : { opacity: 0, x: -14, y: -6 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{
                          duration: 0.42,
                          ease: EASE,
                          delay: reduceMotion ? 0 : 0.06 + i * 0.07,
                        }}
                      >
                        <Link
                          role="menuitem"
                          to={routes.projects(project.id)}
                          className="astreal-hero__projects-menu-link"
                          onClick={() => setProjectsMenuOpen(false)}
                        >
                          <span className="astreal-hero__projects-menu-thumb">
                            <img src={project.imageSrc} alt="" width={56} height={40} loading="lazy" decoding="async" />
                          </span>
                          <span className="astreal-hero__projects-menu-copy">
                            <span className="astreal-hero__projects-menu-name">{project.title}</span>
                            <span className="astreal-hero__projects-menu-sub">{project.subtitle}</span>
                          </span>
                          <span className="astreal-hero__projects-menu-go" aria-hidden>
                            →
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="astreal-hero__projects-menu-all"
                    onClick={scrollToProjectsSection}
                  >
                    Browse full portfolio
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      <section
        className="astreal-services-preview section-led"
        aria-labelledby="astreal-services-heading"
      >
        <div className="container">
          <motion.h2 id="astreal-services-heading" className="astreal-section-title astreal-section-title--center" {...fadeUp}>
            Our projects at a glance
          </motion.h2>
          <div className="astreal-services-preview__grid">
            <motion.article className="astreal-spotlight-card" {...fadeUp}>
              <h3 className="astreal-spotlight-card__title">ASTRON Villas in Kiti Village</h3>
              <p className="astreal-spotlight-card__text">
                Situated in the privileged area of Kiti, the ASTRON Villas project is a beacon of luxury
                and convenience — crafted for discerning owners who expect privacy, pool-side living, and
                proximity to the coast and airport.
              </p>
            </motion.article>
            <motion.article className="astreal-spotlight-card" {...fadeUp}>
              <h3 className="astreal-spotlight-card__title">CORAL in Kiti, Larnaca</h3>
              <p className="astreal-spotlight-card__text">
                A distinctive luxury residential development — generous covered and land areas, private
                pool, jacuzzi, and sauna, with south-facing spaces and contemporary architecture throughout.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="astreal-projects astreal-projects--stacked" id="astreal-projects" aria-labelledby="astreal-projects-heading">
        <div className="container astreal-projects__header astreal-projects-masthead">
          <div className="astreal-projects-masthead__ambient" aria-hidden />
          <motion.span className="astreal-projects-masthead__eyebrow" {...projMastEyebrow}>
            Private portfolio · Limited commissions
          </motion.span>
          <motion.h2
            id="astreal-projects-heading"
            className="astreal-projects-masthead__title"
            {...projMastTitle}
          >
            <span className="astreal-projects-masthead__title-pre">Latest</span>{' '}
            <span className="astreal-projects-masthead__title-accent">projects</span>
          </motion.h2>
          <motion.span
            className="astreal-projects-masthead__rule"
            aria-hidden
            style={{ transformOrigin: 'left center' }}
            {...projMastRule}
          />
          <motion.p className="astreal-projects-masthead__tagline" {...projMastTagline}>
            Curated for patrons who expect discretion, architectural integrity, and execution without compromise.
          </motion.p>
          <motion.p className="astreal-projects-masthead__lede" {...projMastLede}>
            Each development below represents a singular brief — disciplined planning, exacting specification,
            and oversight aligned with institutional-grade delivery. Access is intentionally selective;
            the work speaks through permanence, not volume.
          </motion.p>
          <motion.p className="astreal-projects-masthead__hint" {...projMastHint}>
            Scroll — full-screen architectural immersion per residence.
          </motion.p>
        </div>
        <ul className="astreal-projects__stack">
          {astrealProjectCards.map((project, i) => (
            <li key={project.id} className="astreal-project-card astreal-project-card--viewport">
              <figure className="astreal-project-card__media astreal-project-card__media--fullscreen">
                <div className="astreal-project-card__img-shell">
                  <motion.img
                    className="astreal-project-card__fullscreen-img"
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    width={1920}
                    height={1080}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    {...projectHeroMotion}
                  />
                </div>
                <div className="astreal-project-card__media-scrim" aria-hidden />
                <Link
                  className="astreal-project-card__hit"
                  to={routes.projects(project.id)}
                  aria-label={`Open ${project.title} property page`}
                  tabIndex={-1}
                >
                  <span className="visually-hidden">View property details</span>
                </Link>
                <motion.figcaption className="astreal-project-card__cap astreal-project-card__cap--overlay" {...projectCaptionMotion}>
                  <div className="astreal-project-card__cap-inner">
                    <span className="astreal-project-card__kicker">{project.subtitle}</span>
                    <span className="astreal-project-card__name astreal-project-card__name--split">
                      {(project.cardTitleLines ?? [project.title, '']).map((line, lineIndex) =>
                        line ? (
                          <span
                            key={`${project.id}-${line}`}
                            className={[
                              'astreal-project-card__name-line',
                              lineIndex === 1 ? 'astreal-project-card__name-line--accent' : '',
                            ]
                              .filter(Boolean)
                              .join(' ')}
                          >
                            {line}
                          </span>
                        ) : null,
                      )}
                    </span>
                    <Link
                      to={routes.projects(project.id)}
                      className="astreal-project-card__cta"
                    >
                      <span className="astreal-project-card__cta-label">View property</span>
                      <span className="astreal-project-card__cta-shine" aria-hidden />
                      <span className="astreal-project-card__cta-arrow" aria-hidden>
                        →
                      </span>
                    </Link>
                  </div>
                </motion.figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section className="astreal-cta section-led" aria-label="Contact Astreal">
        <div className="container astreal-cta__inner">
          <motion.p className="astreal-cta__copy" {...fadeUp}>
            Discuss land, design intent, or investment structure — we respond with a clear next step.
          </motion.p>
          <motion.div className="astreal-cta__actions" {...fadeUp}>
            <Link
              to="/contact"
              className="astreal-cta__btn astreal-cta__btn--primary"
              state={{ serviceInterest: 'Astreal Developers' }}
            >
              Get in touch now
            </Link>
            <Link to="/#services" className="astreal-cta__btn astreal-cta__btn--ghost">
              All services
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
