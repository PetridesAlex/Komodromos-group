import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState } from 'react'
import { ArrowRight, Check, ZoomIn } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import WeddingLazyImage from './WeddingLazyImage'
import FlyerFlipLightbox from './FlyerFlipLightbox'
import {
  christeningPackages,
  christeningPackagesPageCopy,
} from '../data/christeningPackages'
import type { LocalizedText } from '../lib/weddingLocale'
import { getServiceCoverImageAlt } from '../data/seo/serviceCoverImageAlts'
import { weddingBrandHref } from '../lib/brandPaths'
import { useWeddingLocale } from '../lib/weddingLocale'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
} as const

const itemVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.18 } },
} as const

/** Shared flyer-package shape used by christening + complete wedding catalogues. */
export type FlyerPackageCard = {
  id: string
  name: LocalizedText
  tagline: LocalizedText
  priceDisplay: LocalizedText
  priceNote?: LocalizedText
  image: string
  /** Optional reverse flyer for a premium 3D flip on the catalogue card. */
  flipImage?: string
  highlight: LocalizedText
  sections: ReadonlyArray<{ title: LocalizedText; items: readonly LocalizedText[] }>
  featured?: boolean
}

export type FlyerPricingGridCopy = {
  catalogueEyebrow: LocalizedText
  catalogueHeading: LocalizedText
  catalogueHeadingLine1: LocalizedText
  catalogueHeadingLine2: LocalizedText
  catalogueLead: LocalizedText
  previewFlyer: LocalizedText
  previewHint: LocalizedText
  /** Short label for flipable flyer cards (e.g. “Flip”). */
  flipHint?: LocalizedText
  /** Lightbox labels for cover / details sides. */
  coverSideLabel?: LocalizedText
  detailsSideLabel?: LocalizedText
  eyebrow: LocalizedText
  featuredBadge: LocalizedText
  includes: LocalizedText
  enquireShort: LocalizedText
  viewDetails: LocalizedText
  note: LocalizedText
}

type ChristeningPricingGridProps = {
  packages?: readonly FlyerPackageCard[]
  copy?: FlyerPricingGridCopy
  /** DOM id prefix for package cards */
  idPrefix?: string
}

export default function ChristeningPricingGrid({
  packages = christeningPackages,
  copy = christeningPackagesPageCopy,
  idPrefix = 'christening-package',
}: ChristeningPricingGridProps) {
  const { t } = useWeddingLocale()
  const reduceMotion = useReducedMotion()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const lightboxItems = useMemo(
    () =>
      packages.map((pkg) => ({
        id: pkg.id,
        name: t(pkg.name),
        frontSrc: pkg.image,
        frontAlt: getServiceCoverImageAlt(pkg.image, t(pkg.name)),
        backSrc: pkg.flipImage,
        backAlt: pkg.flipImage
          ? getServiceCoverImageAlt(pkg.flipImage, t(pkg.name))
          : undefined,
      })),
    [packages, t],
  )

  const openPreview = useCallback((index: number) => {
    setLightboxIndex(index)
  }, [])

  return (
    <div className="christening-pricing-grid">
      <header className="christening-pricing-grid__intro">
        <p className="christening-pricing-grid__eyebrow">
          <span className="christening-pricing-grid__eyebrow-line" aria-hidden />
          <span>{t(copy.catalogueEyebrow)}</span>
          <span className="christening-pricing-grid__eyebrow-line" aria-hidden />
        </p>
        <h2
          className="christening-pricing-grid__title"
          aria-label={t(copy.catalogueHeading)}
        >
          <span className="christening-pricing-grid__title-line christening-pricing-grid__title-line--primary">
            {t(copy.catalogueHeadingLine1)}
          </span>
          <span className="christening-pricing-grid__title-line christening-pricing-grid__title-line--secondary">
            {t(copy.catalogueHeadingLine2)}
          </span>
        </h2>
        <span className="christening-pricing-grid__rule" aria-hidden />
        <p className="christening-pricing-grid__lead">
          {t(copy.catalogueLead)}
        </p>
      </header>

      <motion.div
        className="christening-pricing-grid__cards"
        variants={containerVariants}
        initial={reduceMotion ? 'visible' : 'hidden'}
        animate="visible"
      >
        {packages.map((pkg, index) => {
          const featured = pkg.featured === true
          const packageNo = String(index + 1).padStart(2, '0')
          const flipSrc = pkg.flipImage
          const canFlip = Boolean(flipSrc) && !reduceMotion
          const frontAlt = getServiceCoverImageAlt(pkg.image, t(pkg.name))
          const backAlt = flipSrc
            ? getServiceCoverImageAlt(flipSrc, t(pkg.name))
            : frontAlt

          return (
            <motion.article
              key={pkg.id}
              id={`${idPrefix}-${pkg.id}`}
              variants={reduceMotion ? itemVariantsReduced : itemVariants}
              className={[
                'christening-pricing-card',
                featured ? 'christening-pricing-card--featured' : '',
                canFlip ? 'christening-pricing-card--flip' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <div className="christening-pricing-card__flyer">
                {canFlip && flipSrc ? (
                  <div className="christening-pricing-card__flyer-scene">
                    <button
                      type="button"
                      className="christening-pricing-card__flyer-trigger"
                      onClick={() => openPreview(index)}
                      aria-label={`${t(copy.previewFlyer)}: ${t(pkg.name)}`}
                    >
                      <span className="christening-pricing-card__flyer-frame">
                        <span className="christening-pricing-card__flyer-inner">
                          <span className="christening-pricing-card__flyer-face christening-pricing-card__flyer-face--front">
                            <WeddingLazyImage
                              src={pkg.image}
                              alt={frontAlt}
                              priority={index < 2}
                              className="christening-pricing-card__flyer-img"
                            />
                          </span>
                          <span className="christening-pricing-card__flyer-face christening-pricing-card__flyer-face--back">
                            <WeddingLazyImage
                              src={flipSrc}
                              alt={backAlt}
                              priority={false}
                              className="christening-pricing-card__flyer-img"
                            />
                          </span>
                        </span>
                      </span>
                      <span className="christening-pricing-card__flyer-flip-hint" aria-hidden>
                        <span>
                          {t(copy.flipHint ?? { en: 'Flip', el: 'Γύρισμα', ru: 'Переворот' })}
                        </span>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="christening-pricing-card__flyer-zoom christening-pricing-card__flyer-zoom--action"
                      onClick={() => openPreview(index)}
                      aria-label={`${t(copy.previewFlyer)}: ${t(pkg.name)}`}
                    >
                      <ZoomIn strokeWidth={2.25} />
                      <span>{t(copy.previewHint)}</span>
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="christening-pricing-card__flyer-trigger"
                    onClick={() => openPreview(index)}
                    aria-label={`${t(copy.previewFlyer)}: ${t(pkg.name)}`}
                  >
                    <span className="christening-pricing-card__flyer-frame">
                      <WeddingLazyImage
                        src={pkg.image}
                        alt={frontAlt}
                        priority={index < 2}
                        className="christening-pricing-card__flyer-img"
                      />
                    </span>
                    <span className="christening-pricing-card__flyer-zoom" aria-hidden>
                      <ZoomIn strokeWidth={2.25} />
                      <span>{t(copy.previewHint)}</span>
                    </span>
                  </button>
                )}
                <span className="christening-pricing-card__index" aria-hidden>
                  {packageNo}
                </span>
              </div>

              <div className="christening-pricing-card__body">
                <div className="christening-pricing-card__body-backdrop" aria-hidden>
                  <span className="christening-pricing-card__body-glow" />
                  <span className="christening-pricing-card__body-scrim" />
                </div>

                <div className="christening-pricing-card__body-content">
                <header className="christening-pricing-card__head">
                  <p className="christening-pricing-card__eyebrow">
                    {t(copy.eyebrow)} · {packageNo}
                  </p>

                  <div className="christening-pricing-card__title-row">
                    <h3 className="christening-pricing-card__name">{t(pkg.name)}</h3>
                    {featured ? (
                      <span className="christening-pricing-card__badge">
                        {t(copy.featuredBadge)}
                      </span>
                    ) : null}
                  </div>

                  <p className="christening-pricing-card__price">{t(pkg.priceDisplay)}</p>

                  {pkg.priceNote ? (
                    <p className="christening-pricing-card__price-note">{t(pkg.priceNote)}</p>
                  ) : null}

                  <span className="christening-pricing-card__rule" aria-hidden />

                  <p className="christening-pricing-card__tagline">{t(pkg.tagline)}</p>
                </header>

                <section
                  className="christening-pricing-card__includes"
                  aria-label={t(copy.includes)}
                >
                  <h4 className="christening-pricing-card__includes-label">
                    {t(copy.includes)}
                  </h4>

                  <div className="christening-pricing-card__includes-scroll">
                    {pkg.sections.map((section) => (
                      <div
                        key={section.title.en}
                        className="christening-pricing-card__section"
                      >
                        <p className="christening-pricing-card__section-title">
                          {t(section.title)}
                        </p>
                        <ul className="christening-pricing-card__list">
                          {section.items.map((item) => (
                            <li key={item.en} className="christening-pricing-card__list-item">
                              <span
                                className="christening-pricing-card__check"
                                aria-hidden
                              >
                                <Check strokeWidth={3} />
                              </span>
                              <span>{t(item)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <footer className="christening-pricing-card__foot">
                  <p className="christening-pricing-card__highlight">{t(pkg.highlight)}</p>

                  <div className="christening-pricing-card__actions">
                    <Link
                      to="/contact"
                      state={{
                        serviceInterest: 'Wedding Services',
                        weddingPackage: t(pkg.name),
                      }}
                      className="christening-pricing-card__cta christening-pricing-card__cta--primary"
                    >
                      <span className="christening-pricing-card__cta-fill" aria-hidden />
                      <span className="christening-pricing-card__cta-shine" aria-hidden />
                      <span className="christening-pricing-card__cta-label">
                        {t(copy.enquireShort)}
                      </span>
                      <ArrowRight
                        className="christening-pricing-card__cta-icon"
                        strokeWidth={2.25}
                        aria-hidden
                      />
                    </Link>
                    <Link
                      to={weddingBrandHref(`/services/wedding/packages/${pkg.id}`)}
                      className="christening-pricing-card__cta christening-pricing-card__cta--secondary"
                    >
                      <span className="christening-pricing-card__cta-fill" aria-hidden />
                      <span className="christening-pricing-card__cta-label">
                        {t(copy.viewDetails)}
                      </span>
                      <ArrowRight
                        className="christening-pricing-card__cta-icon"
                        strokeWidth={2.25}
                        aria-hidden
                      />
                    </Link>
                  </div>

                  <p className="christening-pricing-card__note">
                    {t(copy.note)}
                  </p>
                </footer>
                </div>
              </div>
            </motion.article>
          )
        })}
      </motion.div>

      <FlyerFlipLightbox
        items={lightboxItems}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
        ariaLabel={t(copy.previewFlyer)}
        flipLabel={t(copy.flipHint ?? { en: 'Flip', el: 'Γύρισμα', ru: 'Переворот' })}
        coverLabel={t(
          copy.coverSideLabel ?? { en: 'Cover', el: 'Εξώφυλλο', ru: 'Обложка' },
        )}
        detailsLabel={t(
          copy.detailsSideLabel ?? {
            en: 'Full details',
            el: 'Πλήρη στοιχεία',
            ru: 'Полные детали',
          },
        )}
      />
    </div>
  )
}
