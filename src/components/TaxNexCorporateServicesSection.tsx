import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import {
  TAX_CORPORATE_SERVICE_ROWS,
  TAX_CORPORATE_SERVICES_SECTION,
} from '../data/taxNexCorporateServicesContent'

const VIEW = { once: true, amount: 0.22 } as const
const EASE = [0.22, 1, 0.36, 1] as const

export default function TaxNexCorporateServicesSection() {
  const { i18n } = useTranslation()
  const reduceMotion = useReducedMotion()
  const locale = i18n.resolvedLanguage === 'en' ? 'en' : 'el'
  const section = TAX_CORPORATE_SERVICES_SECTION[locale]

  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: VIEW,
        transition: { duration: 0.55, ease: EASE },
      }

  return (
    <section
      id="tax-corporate-services"
      className="taxnex-section taxnex-section--corporate"
      aria-labelledby="tax-corporate-services-heading"
    >
      <div className="taxnex-corp__sheen" aria-hidden />
      <div className="container taxnex-corp">
        <motion.header className="taxnex-corp__head" {...fadeUp}>
          <p className="taxnex-eyebrow">{section.eyebrow}</p>
          <h2 id="tax-corporate-services-heading" className="taxnex-h2 taxnex-h2--on-dark">
            {section.title}
          </h2>
          <p className="taxnex-corp__intro">{section.intro}</p>
        </motion.header>

        <div className="taxnex-corp__rows">
          {TAX_CORPORATE_SERVICE_ROWS.map((row, index) => {
            const copy = row.card[locale]
            return (
              <motion.article
                key={row.card.id}
                className={`taxnex-corp-row${row.reverse ? ' taxnex-corp-row--reverse' : ''}`}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{
                  duration: 0.58,
                  ease: EASE,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
              >
                <figure className="taxnex-corp-row__media">
                  <div className="taxnex-corp-row__media-inner">
                    <img
                      src={row.image}
                      alt=""
                      width={row.imageWidth}
                      height={row.imageHeight}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      sizes="(max-width: 899px) 100vw, 50vw"
                      style={{ objectPosition: row.imagePosition }}
                    />
                  </div>
                  <span className="taxnex-corp-row__media-shade" aria-hidden />
                  <span className="taxnex-corp-row__media-rim" aria-hidden />
                </figure>

                <div
                  className={`taxnex-corp-card taxnex-corp-row__card${index === 0 ? ' taxnex-corp-card--primary' : ''}`}
                >
                  <div className="taxnex-corp-card__glow" aria-hidden />
                  <h3 className="taxnex-corp-card__title">
                    <Link to={row.card.href} className="taxnex-corp-card__title-link">
                      {copy.title}
                    </Link>
                  </h3>
                  <div className="taxnex-corp-card__actions">
                    <Link
                      className="taxnex-btn taxnex-btn--ghost taxnex-corp-card__contact"
                      to="/contact"
                      state={{ serviceInterest: 'Tax & Accounting Services' }}
                    >
                      {copy.contactCta}
                    </Link>
                    <Link
                      className="taxnex-corp-card__more"
                      to={row.card.href}
                      aria-label={copy.readMoreAria}
                    >
                      {copy.readMoreCta}
                      <span className="taxnex-corp-card__more-arrow" aria-hidden>
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
