import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowLeft, ArrowRight, ChevronRight, MapPin, Package, ShieldCheck } from 'lucide-react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import {
  STORAGE_EXTRA_SERVICE_IMAGES,
  STORAGE_EXTRA_SERVICE_HERO_IMAGE,
  STORAGE_EXTRA_SERVICE_SHOWCASE_IMAGE,
  STORAGE_EXTRA_SERVICES_INTRO,
  STORAGE_EXTRA_SERVICES_PATH,
  STORAGE_MOVING_IMAGES,
  STORAGE_MOVING_STORY_BLOCKS,
} from '../data/storagePageImages'

const EASE = [0.22, 1, 0.36, 1] as const

const SERVICE_HIGHLIGHTS = [
  {
    text: 'Flexible loading for homes and offices',
    icon: Package,
  },
  {
    text: 'Careful handling with modern equipment',
    icon: ShieldCheck,
  },
  {
    text: 'Available across every city in Cyprus',
    icon: MapPin,
  },
] as const

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
        <header className="storage-extra-detail__hero">
          <img
            src={STORAGE_EXTRA_SERVICE_HERO_IMAGE}
            alt={service.title}
            className="storage-extra-detail__hero-img"
            loading="eager"
            decoding="async"
          />
          <div className="storage-extra-detail__hero-scrim" aria-hidden />
          <div className="storage-extra-detail__hero-glow storage-extra-detail__hero-glow--1" aria-hidden />
          <div className="storage-extra-detail__hero-glow storage-extra-detail__hero-glow--2" aria-hidden />

          <motion.nav
            className="storage-extra-detail__breadcrumb"
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06, ease: EASE }}
          >
            <ol className="storage-extra-detail__breadcrumb-list">
              <li className="storage-extra-detail__breadcrumb-item">
                <Link to="/services/storage" className="storage-extra-detail__crumb storage-extra-detail__crumb--link">
                  Storage2Rent
                </Link>
              </li>
              <li className="storage-extra-detail__breadcrumb-sep" aria-hidden>
                <ChevronRight size={12} strokeWidth={2.25} />
              </li>
              <li className="storage-extra-detail__breadcrumb-item">
                <Link
                  to="/services/storage#storage-extra-services"
                  className="storage-extra-detail__crumb storage-extra-detail__crumb--link"
                >
                  {STORAGE_EXTRA_SERVICES_INTRO.eyebrow}
                </Link>
              </li>
              <li className="storage-extra-detail__breadcrumb-sep" aria-hidden>
                <ChevronRight size={12} strokeWidth={2.25} />
              </li>
              <li className="storage-extra-detail__breadcrumb-item storage-extra-detail__breadcrumb-item--current">
                <span className="storage-extra-detail__crumb storage-extra-detail__crumb--current" aria-current="page">
                  {service.title}
                </span>
              </li>
            </ol>
          </motion.nav>

          <div className="storage-extra-detail__hero-stage container">
            <motion.div
              className="storage-extra-detail__hero-copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            >
              <p className="storage-extra-detail__hero-eyebrow">
                <span className="storage-extra-detail__hero-eyebrow-line" aria-hidden />
                <span>{STORAGE_EXTRA_SERVICES_INTRO.eyebrow}</span>
                <span className="storage-extra-detail__hero-eyebrow-line" aria-hidden />
              </p>
              <h1 className="storage-extra-detail__hero-title">
                <span className="storage-extra-detail__hero-title-main">STORAGE2RENT</span>
                <span className="storage-extra-detail__hero-title-accent">Moving Services</span>
              </h1>
              <p className="storage-extra-detail__hero-lead">{STORAGE_EXTRA_SERVICES_INTRO.lead}</p>
            </motion.div>
          </div>
        </header>

        <div className="container storage-extra-detail__toolbar">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18, ease: EASE }}
          >
            <Link to="/services/storage#storage-extra-services" className="storage-extra-detail__back">
              <ArrowLeft size={15} strokeWidth={2.25} aria-hidden />
              Back to storage options
            </Link>
          </motion.div>
        </div>

        <motion.section
          className="storage-extra-detail__showcase"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: EASE }}
          aria-labelledby="storage-extra-showcase-heading"
        >
          <div className="storage-extra-detail__showcase-bleed">
            <div className="storage-extra-detail__showcase-inner">
              <div className="storage-extra-detail__showcase-accent" aria-hidden />
              <div className="storage-extra-detail__showcase-grid">
              <div className="storage-extra-detail__showcase-copy">
                <p className="storage-extra-detail__showcase-eyebrow">Featured service</p>
                <h2 id="storage-extra-showcase-heading" className="storage-extra-detail__showcase-title">
                  {service.title}
                </h2>
                <p className="storage-extra-detail__showcase-lead">
                  Professional van and crew support for moves of every size—paired seamlessly with your storage plan.
                </p>
                <ul className="storage-extra-detail__showcase-highlights">
                  {SERVICE_HIGHLIGHTS.map((item, index) => {
                    const Icon = item.icon

                    return (
                      <motion.li
                        key={item.text}
                        className="storage-extra-detail__showcase-highlight"
                        initial={{ opacity: 0, x: -18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-30px' }}
                        transition={{ duration: 0.48, delay: index * 0.09, ease: EASE }}
                      >
                        <span className="storage-extra-detail__showcase-highlight-index" aria-hidden>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="storage-extra-detail__showcase-highlight-icon" aria-hidden>
                          <Icon size={17} strokeWidth={2.25} />
                        </span>
                        <span className="storage-extra-detail__showcase-highlight-text">{item.text}</span>
                        <span className="storage-extra-detail__showcase-highlight-sheen" aria-hidden />
                      </motion.li>
                    )
                  })}
                </ul>
              </div>

              <figure className="storage-extra-detail__showcase-media">
                <div className="storage-extra-detail__showcase-media-accent" aria-hidden />
                <img
                  src={STORAGE_EXTRA_SERVICE_SHOWCASE_IMAGE}
                  alt={service.title}
                  className="storage-extra-detail__showcase-img"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            </div>
          </div>
        </motion.section>

        <div className="storage-extra-detail__story">
          <div className="storage-extra-detail__story-inner">
            {STORAGE_MOVING_STORY_BLOCKS.map((block, index) => {
              const image = STORAGE_MOVING_IMAGES[index]!
              const imageFirst = index % 2 === 1

              return (
                <motion.section
                  key={block.title}
                  className={`storage-extra-detail__row${imageFirst ? ' storage-extra-detail__row--reverse' : ''}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: 0.04, ease: EASE }}
                >
                  <div className="storage-extra-detail__row-copy">
                    <div className="storage-extra-detail__row-copy-accent" aria-hidden />
                    <div className="storage-extra-detail__row-head">
                      <span className="storage-extra-detail__row-index" aria-hidden>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="storage-extra-detail__row-label">{block.label}</span>
                    </div>
                    <h3 className="storage-extra-detail__row-title">{block.title}</h3>
                    <p className="storage-extra-detail__row-text">{block.body}</p>
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
