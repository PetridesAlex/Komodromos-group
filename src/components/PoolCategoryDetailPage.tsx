import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowLeft, ArrowRight, ChevronRight, ZoomIn } from 'lucide-react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import PoolGalleryLightbox from './PoolGalleryLightbox'
import { useReveal } from '../hooks/useReveal'
import {
  getPoolGardenGallery,
  resolvePoolGardenDetailPage,
} from '../data/poolGardenPage'

const POOL_EASE = [0.22, 1, 0.36, 1] as const

const fadeUpView = {
  once: true,
  amount: 0.18,
  margin: '-50px 0px',
} as const

const contentGridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.04 },
  },
}

const contentSectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: POOL_EASE },
  },
}

export default function PoolCategoryDetailPage() {
  const { categoryId, serviceId, liningId } = useParams<{
    categoryId?: string
    serviceId?: string
    liningId?: string
  }>()
  const reduceMotion = useReducedMotion()
  const pageRef = useReveal()
  const page = resolvePoolGardenDetailPage(categoryId, serviceId, liningId)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const siblingIndex = page
    ? page.navigableSiblings.findIndex((item) => item.id === page.id)
    : -1
  const prevSibling = siblingIndex > 0 ? page!.navigableSiblings[siblingIndex - 1] : null
  const nextSibling =
    siblingIndex >= 0 && siblingIndex < (page?.navigableSiblings.length ?? 0) - 1
      ? page!.navigableSiblings[siblingIndex + 1]
      : null

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    setLightboxIndex(null)
  }, [categoryId, serviceId, liningId])

  if (!page) {
    const fallback = categoryId
      ? '/services/pool#pool-categories'
      : liningId
        ? '/services/pool#pool-internal-linings'
        : '/services/pool#service-renovation-repair'
    return <Navigate to={fallback} replace />
  }

  const { detail } = page
  const gallery = getPoolGardenGallery(page.imageSrc, page.label, detail)
  const contentTitle =
    page.kind === 'category'
      ? `Understanding ${page.label.toLowerCase()} pools`
      : `About ${page.label.toLowerCase()}`

  return (
    <div className="page pool-garden-page pool-category-detail-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <article className="pool-category-detail">
        <div className="pool-category-detail__topbar">
          <div className="container pool-category-detail__topbar-inner">
            <nav className="pool-category-detail__breadcrumb" aria-label="Breadcrumb">
              <ol className="pool-category-detail__breadcrumb-list">
                <li className="pool-category-detail__breadcrumb-item">
                  <Link
                    to="/services/pool"
                    className="pool-category-detail__crumb pool-category-detail__crumb--link"
                  >
                    Pool &amp; Garden
                  </Link>
                </li>
                <li className="pool-category-detail__breadcrumb-sep" aria-hidden>
                  <ChevronRight size={13} strokeWidth={2.25} />
                </li>
                <li className="pool-category-detail__breadcrumb-item">
                  <Link
                    to={page.sectionHref}
                    className="pool-category-detail__crumb pool-category-detail__crumb--link"
                  >
                    {page.sectionLabel}
                  </Link>
                </li>
                <li className="pool-category-detail__breadcrumb-sep" aria-hidden>
                  <ChevronRight size={13} strokeWidth={2.25} />
                </li>
                <li className="pool-category-detail__breadcrumb-item pool-category-detail__breadcrumb-item--current">
                  <span
                    className="pool-category-detail__crumb pool-category-detail__crumb--current"
                    aria-current="page"
                  >
                    {page.label}
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <section className="pool-category-detail__intro-band" aria-labelledby="pool-category-detail-title">
          <div className="pool-category-detail__intro-inner">
            <motion.header
              className="pool-category-detail__head"
              initial={reduceMotion ? false : { opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: POOL_EASE }}
            >
              <p className="pool-category-detail__eyebrow">{detail.eyebrow}</p>
              <h1 id="pool-category-detail-title" className="pool-category-detail__title">
                {detail.title}
              </h1>
              <p className="pool-category-detail__subtitle">{detail.subtitle}</p>
              <div className="pool-category-detail__rule" aria-hidden />
              {detail.highlights.length > 0 ? (
                <ul className="pool-category-detail__highlights" aria-label="Ideal applications">
                  {detail.highlights.map((item, index) => (
                    <motion.li
                      key={item}
                      className="pool-category-detail__highlight"
                      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.12 + index * 0.06, ease: POOL_EASE }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              ) : null}
            </motion.header>
          </div>
        </section>

        <section className="pool-category-detail__content-band" aria-label="Detailed overview">
          <div className="pool-category-detail__content-inner">
            <motion.header
              className="pool-category-detail__section-head pool-category-detail__section-head--content"
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: POOL_EASE }}
              viewport={fadeUpView}
            >
              <p className="pool-category-detail__section-kicker">In depth</p>
              <h2 className="pool-category-detail__section-title">{contentTitle}</h2>
              <div className="pool-category-detail__section-rule" aria-hidden />
            </motion.header>

            <motion.div
              className="pool-category-detail__sections"
              variants={reduceMotion ? undefined : contentGridVariants}
              initial={reduceMotion ? false : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={fadeUpView}
            >
              {detail.sections.map((section, index) => {
                const hasMedia = Boolean(section.media?.length)
                const layoutClass = hasMedia
                  ? [
                      'pool-category-detail__section',
                      'pool-category-detail__section--with-media',
                      index % 2 === 1 ? 'pool-category-detail__section--media-reverse' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')
                  : 'pool-category-detail__section'

                return (
                  <motion.article
                    key={section.title}
                    className={layoutClass}
                    variants={reduceMotion ? undefined : contentSectionVariants}
                  >
                    <div className="pool-category-detail__section-index" aria-hidden>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="pool-category-detail__section-body">
                      {hasMedia ? (
                        <div
                          className={[
                            'pool-category-detail__section-media',
                            section.mediaLayout
                              ? `pool-category-detail__section-media--${section.mediaLayout}`
                              : 'pool-category-detail__section-media--split',
                          ].join(' ')}
                        >
                          {section.media!.map((image) => (
                            <figure
                              key={image.src}
                              className="pool-category-detail__section-figure"
                            >
                              <div className="pool-category-detail__section-figure-frame">
                                <img
                                  src={image.src}
                                  alt={image.alt}
                                  loading="lazy"
                                  decoding="async"
                                />
                              </div>
                              {image.caption ? (
                                <figcaption className="pool-category-detail__section-figure-caption">
                                  {image.caption}
                                </figcaption>
                              ) : null}
                            </figure>
                          ))}
                        </div>
                      ) : null}
                      <div className="pool-category-detail__section-copy-wrap">
                        <h3 className="pool-category-detail__section-heading">{section.title}</h3>
                        <div className="pool-category-detail__section-copy">
                          {section.paragraphs.map((paragraph) => (
                            <p
                              key={paragraph.slice(0, 48)}
                              className="pool-category-detail__paragraph"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </motion.div>
          </div>
        </section>

        {gallery.length > 0 ? (
          <section
            className="pool-category-detail__gallery-band pool-category-detail__gallery-band--compact"
            aria-labelledby="pool-category-gallery-title"
          >
            <div className="pool-category-detail__gallery-inner pool-category-detail__gallery-inner--compact">
              <motion.header
                className="pool-category-detail__section-head pool-category-detail__section-head--gallery pool-category-detail__section-head--gallery-centered"
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: POOL_EASE }}
                viewport={fadeUpView}
              >
                <p className="pool-category-detail__section-kicker">Visual portfolio</p>
                <h2 id="pool-category-gallery-title" className="pool-category-detail__section-title">
                  Project gallery
                </h2>
                <p className="pool-category-detail__section-lead pool-category-detail__section-lead--gallery">
                  {detail.galleryLead ??
                    `Explore ${page.label.toLowerCase()} installations from recent BlueSky Pools projects.`}
                </p>
                <div className="pool-category-detail__section-rule" aria-hidden />
              </motion.header>

              <p className="pool-category-detail__gallery-hint">
                <ZoomIn size={13} strokeWidth={2.25} aria-hidden />
                Click any image to preview
              </p>

              <div
                className="pool-category-detail__gallery-grid pool-category-detail__gallery-grid--compact"
                role="list"
              >
                {gallery.map((image, index) => (
                  <button
                    key={`${image.src}-${index}`}
                    type="button"
                    role="listitem"
                    className="pool-category-detail__gallery-item pool-category-detail__gallery-item--compact"
                    onClick={() => setLightboxIndex(index)}
                    aria-label={`Preview image ${index + 1}: ${image.caption ?? image.alt}`}
                  >
                    <span className="pool-category-detail__gallery-item-frame">
                      <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                    </span>
                    <span className="pool-category-detail__gallery-item-overlay" aria-hidden>
                      <ZoomIn size={18} strokeWidth={2} />
                    </span>
                    {image.caption ? (
                      <span className="pool-category-detail__gallery-caption pool-category-detail__gallery-caption--compact">
                        {image.caption}
                      </span>
                    ) : null}
                  </button>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <PoolGalleryLightbox
          images={gallery}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />

        <motion.div
          className="pool-category-detail__actions-band"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: POOL_EASE }}
          viewport={fadeUpView}
        >
          <div className="pool-category-detail__actions-inner">
            <Link
              to="/contact"
              state={{ serviceInterest: 'Swimming Pool & Garden Services' }}
              className="pool-category-detail__cta"
            >
              Request a consultation
            </Link>
            <Link to={page.sectionHref} className="pool-category-detail__back">
              <ArrowLeft size={15} strokeWidth={2.25} aria-hidden />
              Back to {page.sectionLabel.toLowerCase()}
            </Link>
          </div>
        </motion.div>

        {(prevSibling || nextSibling) && (
          <nav className="pool-category-detail__pager" aria-label="Related pool pages">
            <div className="pool-category-detail__pager-inner">
              {prevSibling ? (
                <Link
                  to={page.detailPath(prevSibling.id)}
                  className="pool-category-detail__pager-link pool-category-detail__pager-link--prev"
                >
                  <ArrowLeft size={16} strokeWidth={2.25} aria-hidden />
                  <span className="pool-category-detail__pager-label">
                    <span className="pool-category-detail__pager-kicker">Previous</span>
                    {prevSibling.label}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {nextSibling ? (
                <Link
                  to={page.detailPath(nextSibling.id)}
                  className="pool-category-detail__pager-link pool-category-detail__pager-link--next"
                >
                  <span className="pool-category-detail__pager-label">
                    <span className="pool-category-detail__pager-kicker">Next</span>
                    {nextSibling.label}
                  </span>
                  <ArrowRight size={16} strokeWidth={2.25} aria-hidden />
                </Link>
              ) : null}
            </div>
          </nav>
        )}
      </article>

      <Footer />
    </div>
  )
}
