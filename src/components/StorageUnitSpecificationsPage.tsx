import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import StorageUnitSpecCard from './StorageUnitSpecCard'
import { useReveal } from '../hooks/useReveal'
import {
  STORAGE_UNIT_SPECIFICATIONS,
  STORAGE_UNIT_SPECS_PATH,
} from '../data/storageUnitSpecifications'

const EASE = [0.22, 1, 0.36, 1] as const

export default function StorageUnitSpecificationsPage() {
  const pageRef = useReveal()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <div className="page storage-detail-page storage-unit-specs-page" ref={pageRef}>
      <SiteTopbar logoPathname="/" logoScrollToId="home" homeHref="/" servicesSectionHref="/#services" />

      <article className="storage-unit-specs">
        <header className="storage-unit-specs__hero">
          <div className="storage-unit-specs__hero-glow storage-unit-specs__hero-glow--1" aria-hidden />
          <div className="storage-unit-specs__hero-glow storage-unit-specs__hero-glow--2" aria-hidden />

          <motion.nav
            className="storage-unit-specs__breadcrumb"
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06, ease: EASE }}
          >
            <ol className="storage-unit-specs__breadcrumb-list">
              <li className="storage-unit-specs__breadcrumb-item">
                <Link to="/services/storage" className="storage-unit-specs__crumb storage-unit-specs__crumb--link">
                  Storage2Rent
                </Link>
              </li>
              <li className="storage-unit-specs__breadcrumb-sep" aria-hidden>
                <ChevronRight size={12} strokeWidth={2.25} />
              </li>
              <li className="storage-unit-specs__breadcrumb-item storage-unit-specs__breadcrumb-item--current">
                <span className="storage-unit-specs__crumb storage-unit-specs__crumb--current" aria-current="page">
                  Unit specifications
                </span>
              </li>
            </ol>
          </motion.nav>

          <div className="container storage-unit-specs__hero-inner">
            <motion.div
              className="storage-unit-specs__hero-copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              <p className="storage-unit-specs__hero-eyebrow">
                <span className="storage-unit-specs__hero-eyebrow-line" aria-hidden />
                <span>Unit specifications</span>
                <span className="storage-unit-specs__hero-eyebrow-line" aria-hidden />
              </p>

              <div className="storage-unit-specs__hero-title-block">
                <span className="storage-unit-specs__hero-title-accent-bar" aria-hidden />
                <h1 className="storage-unit-specs__hero-title">
                  <span className="storage-unit-specs__hero-title-main">Storage Unit Sizes</span>
                  <span className="storage-unit-specs__hero-title-accent">&amp; Specifications</span>
                </h1>
              </div>

              <div className="storage-unit-specs__hero-lead-panel">
                <p className="storage-unit-specs__hero-lead">
                  Precise dimensional data for every Storage2Rent container and insulated warehouse unit —
                  external footprint, internal capacity, door openings, and usable volume.
                </p>
                <ul className="storage-unit-specs__hero-highlights" aria-label="Specification categories">
                  <li>External &amp; internal dimensions</li>
                  <li>Door opening measurements</li>
                  <li>Capacity &amp; volume</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </header>

        <div className="storage-unit-specs__grid-wrap">
          <div className="container storage-unit-specs__grid">
            {STORAGE_UNIT_SPECIFICATIONS.map((unit, index) => (
              <StorageUnitSpecCard key={unit.id} unit={unit} index={index} />
            ))}
          </div>
        </div>

        <div className="container storage-unit-specs__footer">
          <motion.div
            className="storage-unit-specs__closing"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <div className="storage-unit-specs__closing-accent" aria-hidden />
            <p className="storage-unit-specs__closing-text">
              Need help choosing the right unit size? Our team can recommend the best option based on what you
              plan to store and how often you need access.
            </p>
            <Link
              to="/contact"
              state={{ serviceInterest: 'Storage2Rent - Unit specifications' }}
              className="storage-unit-specs__cta"
            >
              <span className="storage-unit-specs__cta-sheen" aria-hidden />
              <span>Request a tailored quote</span>
              <ArrowRight size={16} strokeWidth={2.25} aria-hidden />
            </Link>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  )
}

export { STORAGE_UNIT_SPECS_PATH }
