import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import {
  astrealBrandLogo,
  astrealHeroImage,
  astrealProjectCards,
} from '../data/astrealDevelopersPage'

const VIEW = { once: true, amount: 0.35, margin: '-48px 0px' } as const
const EASE = [0.22, 1, 0.36, 1] as const

export default function AstrealDevelopersPage() {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  /** Above-the-fold hero — mount-driven “live” entrance (not scroll) */
  const heroBgReveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1.15, ease: EASE },
      }

  const heroEyebrowLive = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 32, filter: 'blur(14px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        transition: { duration: 0.85, ease: EASE, delay: 0.15 },
      }

  const heroRuleLive = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, scaleX: 0 },
        animate: { opacity: 1, scaleX: 1 },
        transition: { duration: 1.05, ease: EASE, delay: 0.28 },
      }

  const heroTitleMainLive = reduceMotion
    ? {}
    : {
        initial: {
          opacity: 0,
          y: 48,
          filter: 'blur(22px)',
          clipPath: 'inset(0 100% 0 0)',
        },
        animate: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          clipPath: 'inset(0 0% 0 0)',
        },
        transition: { duration: 1.05, ease: EASE, delay: 0.38 },
      }

  const heroTitleSubLive = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 36, filter: 'blur(16px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        transition: { duration: 0.95, ease: EASE, delay: 0.52 },
      }

  const heroBrandLive = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.88, y: 28, rotate: -2 },
        animate: { opacity: 1, scale: 1, y: 0, rotate: 0 },
        transition: { type: 'spring' as const, stiffness: 88, damping: 17, mass: 0.72, delay: 0.62 },
      }

  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: VIEW,
        transition: { duration: 0.65, ease: EASE },
      }

  const aboutEase = EASE

  const aboutEyebrow = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22, filter: 'blur(8px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: VIEW,
        transition: { duration: 0.62, ease: aboutEase, delay: 0 },
      }

  const aboutTitleMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 38, filter: 'blur(12px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: VIEW,
        transition: { duration: 0.78, ease: aboutEase, delay: 0.07 },
      }

  const aboutLine = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, scaleX: 0 },
        whileInView: { opacity: 1, scaleX: 1 },
        viewport: VIEW,
        transition: { duration: 0.85, ease: aboutEase, delay: 0.08 },
      }

  const aboutLead = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 32, filter: 'blur(10px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: VIEW,
        transition: { duration: 0.72, ease: aboutEase, delay: 0.14 },
      }

  const aboutPara = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 36, filter: 'blur(8px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: VIEW,
        transition: { duration: 0.72, ease: aboutEase, delay: 0.1 },
      }

  const aboutQuote = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28, rotate: -0.5 },
        whileInView: { opacity: 1, y: 0, rotate: 0 },
        viewport: VIEW,
        transition: { type: 'spring' as const, stiffness: 70, damping: 22, delay: 0.22 },
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
        servicesSectionHref="/services"
      />

      <header className="astreal-hero" aria-labelledby="astreal-hero-title">
        <motion.div className="astreal-hero__bg" aria-hidden {...heroBgReveal}>
          <motion.img
            className="astreal-hero__bg-img"
            src={astrealHeroImage}
            alt=""
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
            {...(reduceMotion
              ? {}
              : {
                  initial: { scale: 1.14 },
                  animate: { scale: 1.03 },
                  transition: { duration: 1.45, ease: EASE, delay: 0.05 },
                })}
          />
          <div className="astreal-hero__scrim" />
          <div className="astreal-hero__vignette" aria-hidden />
          <div className="astreal-hero__scanlines" aria-hidden />
        </motion.div>
        <div className="container astreal-hero__inner">
          <motion.p
            className={`astreal-hero__eyebrow${reduceMotion ? '' : ' astreal-hero__eyebrow--live'}`}
            {...heroEyebrowLive}
          >
            ASTREAL Developers · Luxury houses
          </motion.p>
          <motion.span
            className="astreal-hero__rule"
            aria-hidden
            style={{ transformOrigin: 'left center' }}
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
          <motion.div className="astreal-hero__brand" {...heroBrandLive}>
            <span className="astreal-hero__brand-glow" aria-hidden />
            <img src={astrealBrandLogo} alt="Astreal Developers" width={220} height={80} />
          </motion.div>
        </div>
      </header>

      <section className="astreal-about astreal-about--premium" aria-labelledby="astreal-about-heading">
        <div className="astreal-about__ambient" aria-hidden />
        <div className="container astreal-about__grid">
          <div className="astreal-about__intro">
            <motion.span className="astreal-about__eyebrow" {...aboutEyebrow}>
              Who we are
            </motion.span>
            <div className="astreal-about__title-row">
              <motion.h2
                id="astreal-about-heading"
                className="astreal-section-title astreal-section-title--about"
                {...aboutTitleMotion}
              >
                About us
              </motion.h2>
              <motion.span className="astreal-about__title-accent" aria-hidden {...aboutLine} />
            </div>
            <motion.p className="astreal-lead astreal-lead--about" {...aboutLead}>
              <strong>ASTREAL Developers</strong> provides integrated services in architectural design,
              construction, development and project management.
            </motion.p>
          </div>
          <motion.div className="astreal-about__body">
            <motion.p className="astreal-about__prose" {...aboutPara}>
              We insist on design excellence, with a primary commitment to excellent customer service.
              Based on extensive and many years of professional experience, our office is a valuable and
              reliable professional partner for the development of property — working to maximize its
              performance.
            </motion.p>
            <motion.blockquote className="astreal-quote astreal-quote--elevated" {...aboutQuote}>
              <p>
                We understand that a home is not just a place. We build to ensure comfort for a lifetime
                in our homes.
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      <section className="astreal-services-preview" aria-labelledby="astreal-services-heading">
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
              <h3 className="astreal-spotlight-card__title">Island Studios</h3>
              <p className="astreal-spotlight-card__text">
                A contemporary studio-led concept — intelligent layouts, refined materials, and outdoor
                connection tailored to modern Mediterranean lifestyles.
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
                  to={`/services/astreal/projects/${project.id}`}
                  aria-label={`Open ${project.title} property page`}
                  tabIndex={-1}
                >
                  <span className="visually-hidden">View property details</span>
                </Link>
                <motion.figcaption className="astreal-project-card__cap astreal-project-card__cap--overlay" {...projectCaptionMotion}>
                  <div className="astreal-project-card__cap-inner">
                    <span className="astreal-project-card__kicker">{project.subtitle}</span>
                    <span className="astreal-project-card__name">{project.title}</span>
                    <Link
                      to={`/services/astreal/projects/${project.id}`}
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

      <section className="astreal-cta" aria-label="Contact Astreal">
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
            <Link to="/services" className="astreal-cta__btn astreal-cta__btn--ghost">
              All services
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
