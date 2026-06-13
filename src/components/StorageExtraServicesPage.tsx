import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import {
  STORAGE_EXTRA_SERVICE_IMAGES,
  STORAGE_EXTRA_SERVICES_PATH,
  STORAGE_MOVING_IMAGES,
  STORAGE_MOVING_PARAGRAPHS,
} from '../data/storagePageImages'

const EASE = [0.22, 1, 0.36, 1] as const

const service = STORAGE_EXTRA_SERVICE_IMAGES[0]

export default function StorageExtraServicesPage() {
  const pageRef = useReveal()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  if (!service) {
    return null
  }

  return (
    <div className="page storage-detail-page storage-extra-detail-page" ref={pageRef}>
      <SiteTopbar logoPathname="/" logoScrollToId="home" homeHref="/" servicesSectionHref="/#services" />

      <article className="storage-extra-detail">
        <div className="storage-extra-detail__hero">
          <img
            src={service.image}
            alt={service.title}
            className="storage-extra-detail__hero-img"
            loading="eager"
            decoding="async"
          />
          <div className="storage-extra-detail__hero-scrim" aria-hidden />
          <div className="storage-extra-detail__hero-inner container">
            <nav className="storage-extra-detail__breadcrumb" aria-label="Breadcrumb">
              <ol className="storage-extra-detail__breadcrumb-list">
                <li>
                  <Link to="/services/storage" className="storage-extra-detail__crumb storage-extra-detail__crumb--link">
                    Storage2Rent
                  </Link>
                </li>
                <li aria-hidden>
                  <ChevronRight size={13} strokeWidth={2.25} />
                </li>
                <li>
                  <span className="storage-extra-detail__crumb storage-extra-detail__crumb--current" aria-current="page">
                    {service.title}
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="container storage-extra-detail__intro">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <Link to="/services/storage#storage-offers" className="storage-extra-detail__back">
              <ArrowLeft size={15} strokeWidth={2.25} aria-hidden />
              Back to storage options
            </Link>

            <p className="storage-extra-detail__eyebrow">Moving Services</p>
            <h1 className="storage-extra-detail__title">STORAGE2RENT Moving Services</h1>
          </motion.div>
        </div>

        <div className="storage-extra-detail__story">
          <div className="container storage-extra-detail__story-inner">
            {STORAGE_MOVING_PARAGRAPHS.map((paragraph, index) => {
              const image = STORAGE_MOVING_IMAGES[index % STORAGE_MOVING_IMAGES.length]!
              const imageFirst = index % 2 === 1

              return (
                <motion.section
                  key={paragraph.slice(0, 48)}
                  className={`storage-extra-detail__row${imageFirst ? ' storage-extra-detail__row--reverse' : ''}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: 0.04, ease: EASE }}
                >
                  <div className="storage-extra-detail__row-copy">
                    <span className="storage-extra-detail__row-index" aria-hidden>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="storage-extra-detail__row-text">{paragraph}</p>
                  </div>

                  <figure className="storage-extra-detail__row-media">
                    <div className="storage-extra-detail__row-media-accent" aria-hidden />
                    <img
                      src={image}
                      alt=""
                      className="storage-extra-detail__row-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </motion.section>
              )
            })}
          </div>
        </div>

        <div className="container storage-extra-detail__footer">
          <motion.div
            className="storage-extra-detail__closing"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <div className="storage-extra-detail__closing-accent" aria-hidden />
            <p className="storage-extra-detail__closing-text">
              Ready to plan your move? Our team is available across Cyprus for residential and commercial
              relocations of every size.
            </p>
            <Link
              to="/contact"
              state={{ serviceInterest: 'Storage2Rent - Moving Services' }}
              className="storage-extra-detail__cta"
            >
              <span className="storage-extra-detail__cta-sheen" aria-hidden />
              <span>Enquire now</span>
              <ArrowRight size={16} strokeWidth={2.25} aria-hidden />
            </Link>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  )
}

export { STORAGE_EXTRA_SERVICES_PATH }
