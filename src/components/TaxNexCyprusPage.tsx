import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import {
  TAX_INCOME_CALCULATOR_PATH,
  TAX_NEX_VAT_PCT,
  getTaxNexAddressLine,
  getTaxNexMetaLead,
  getTaxNexMission,
  getTaxNexNewsletter,
  getTaxNexPricingPlans,
  getTaxNexServiceStages,
  getTaxNexSteps,
  getTaxNexToolCards,
} from '../data/taxNexPageContent'
import { getTaxPlanCheckoutUrl, isValidHttpUrl } from '../lib/taxPlanCheckout'
import TaxNexFaqSection from './TaxNexFaqSection'
import TaxPlanCheckoutModal from './TaxPlanCheckoutModal'

function formatEur(n: number, locale: string) {
  const normalized = locale === 'en' ? 'en-US' : 'el-GR'
  return `${n.toLocaleString(normalized, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`
}

const BRAND_LOGO = '/images/services/tax-services/tax-net-logo.jpg'
const VIEW = { once: true, amount: 0.35 } as const
const EASE = [0.22, 1, 0.36, 1] as const

export default function TaxNexCyprusPage() {
  const reduceMotion = useReducedMotion()
  const { t, i18n } = useTranslation()
  const locale = i18n.resolvedLanguage === 'en' ? 'en' : 'el'
  const taxAddressLine = getTaxNexAddressLine(locale)
  const taxMetaLead = getTaxNexMetaLead(locale)
  const taxMission = getTaxNexMission(locale)
  const taxNewsletter = getTaxNexNewsletter(locale)
  const taxPricingPlans = getTaxNexPricingPlans(locale)
  const taxServiceStages = getTaxNexServiceStages(locale)
  const taxSteps = getTaxNexSteps(locale)
  const taxToolCards = getTaxNexToolCards(locale)
  const [showCookieNotice, setShowCookieNotice] = useState(false)
  const [paymentModal, setPaymentModal] = useState<{
    plan: (typeof taxPricingPlans)[number]
    checkoutUrl: string | null
  } | null>(null)

  useEffect(() => {
    try {
      const consent = localStorage.getItem('taxnex-cookie-consent')
      if (!consent) {
        setShowCookieNotice(true)
      }
    } catch {
      setShowCookieNotice(true)
    }
  }, [])

  const acceptCookies = () => {
    try {
      localStorage.setItem('taxnex-cookie-consent', 'accepted')
    } catch {
      // Ignore storage failures and still dismiss.
    }
    setShowCookieNotice(false)
  }

  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: VIEW,
        transition: { duration: 0.55, ease: EASE },
      }

  return (
    <div className="taxnex-root" lang={i18n.resolvedLanguage === 'en' ? 'en' : 'el'}>
      <div className="taxnex-topbar">
        <div className="container taxnex-topbar__inner">
          <span className="taxnex-topbar__pin" aria-hidden />
          <span className="taxnex-topbar__text">{taxAddressLine}</span>
        </div>
      </div>

      <header id="tax-hero" className="taxnex-hero">
        <div className="taxnex-hero__bg" aria-hidden />

        <div className="container taxnex-hero__inner">
          <div className="taxnex-hero__main">
            <div className="taxnex-hero__brand-row">
              <motion.img
                src={BRAND_LOGO}
                alt={t('tax.brandAlt')}
                width={280}
                height={110}
                className="taxnex-hero__logo"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
                animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.08 }}
              />
            </div>

            <motion.h1
              className="taxnex-hero__title"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.12 }}
            >
              {t('tax.heroTitle')}
            </motion.h1>
            <motion.p
              className="taxnex-hero__subtitle"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.22 }}
            >
              {t('tax.heroSubtitle')}
            </motion.p>

            <motion.div
              className="taxnex-hero__cta-block"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.42 }}
            >
              <p className="taxnex-hero__stage">{t('tax.stage1')}</p>
              <div className="taxnex-hero__cta-row">
                <Link className="taxnex-btn taxnex-btn--primary taxnex-btn--lg" to={TAX_INCOME_CALCULATOR_PATH}>
                  {t('tax.calculateTax')}
                </Link>
                <Link className="taxnex-btn taxnex-btn--hero-dark taxnex-btn--lg" to="/contact">
                  {t('tax.bookMeeting')}
                </Link>
                <Link className="taxnex-btn taxnex-btn--hero-dark taxnex-btn--lg" to="/contact">
                  {t('tax.bookOnlineMeeting')}
                </Link>
              </div>
              <p className="taxnex-hero__phones" aria-label={t('tax.contactPhonesAria')}>
                <a className="taxnex-hero__phone" href="tel:+357243333305">
                  +357 24 333 305
                </a>
                <span className="taxnex-hero__phones-sep" aria-hidden>
                  ·
                </span>
                <a className="taxnex-hero__phone" href="tel:+35796000336">
                  +357 96 000 336
                </a>
              </p>
            </motion.div>
          </div>

          <motion.div
            className="taxnex-hero__bg-copy"
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.26 }}
            aria-hidden
          >
            <p className="taxnex-hero__bg-copy-top">
              {t('tax.bgCopyLine1')} <strong>{t('tax.bgCopyLine1Strong')}</strong>
              <br />
              <strong>{t('tax.bgCopyLine2Strong')}</strong> {t('tax.bgCopyLine2')}
            </p>
            <p className="taxnex-hero__bg-copy-brand">TaxNex</p>
          </motion.div>
        </div>
      </header>

      <section id="tax-services" className="taxnex-section taxnex-section--light" aria-labelledby="tax-services-h">
        <div className="container">
          <motion.div className="taxnex-section__head taxnex-section__head--center" {...fadeUp}>
            <p className="taxnex-eyebrow">{t('tax.servicesEyebrow')}</p>
            <h2 id="tax-services-h" className="taxnex-h2">
              {t('tax.whatWeProvide')}
            </h2>
            <p className="taxnex-section__stage">{t('tax.stage2')}</p>
            <p className="taxnex-muted taxnex-section__intro">
              {t('tax.servicesIntro')}
            </p>
            <p className="taxnex-section__body taxnex-muted">{taxMetaLead}</p>
          </motion.div>

          <div className="taxnex-pricing-grid">
            {taxPricingPlans.map((plan, i) => {
              const checkoutUrl = getTaxPlanCheckoutUrl(plan.id)
              const hasCheckout = isValidHttpUrl(checkoutUrl)
              const gross = plan.priceEur * (1 + TAX_NEX_VAT_PCT / 100)
              const featured = plan.id === 'advisor'
              return (
                <motion.article
                  key={`services-${plan.id}`}
                  className={`taxnex-price-card${featured ? ' taxnex-price-card--featured' : ''}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEW}
                  transition={{ duration: 0.52, ease: EASE, delay: reduceMotion ? 0 : i * 0.07 }}
                >
                  <div className="taxnex-price-card__media">
                    <img
                      src={plan.image}
                      alt={plan.imageAlt}
                      width={600}
                      height={400}
                      loading="lazy"
                      decoding="async"
                      className="taxnex-price-card__img"
                    />
                  </div>
                  <div className="taxnex-price-card__body">
                    <p className="taxnex-price-card__kicker">{plan.kicker}</p>
                    <h3 className="taxnex-price-card__title">{plan.title}</h3>
                    <p className="taxnex-price-card__desc">{plan.description}</p>
                    {plan.includes && plan.includes.length > 0 ? (
                      <ul className="taxnex-price-card__includes">
                        {plan.includes.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    ) : null}
                    <div className="taxnex-price-card__price-block" aria-label={t('tax.priceAria')}>
                      <div className="taxnex-price-card__row">
                        <span className="taxnex-price-card__amount">
                          {formatEur(plan.priceEur, i18n.resolvedLanguage ?? 'el')}
                        </span>
                        <span className="taxnex-price-card__vat-label">{t('tax.vatLabel', { pct: TAX_NEX_VAT_PCT })}</span>
                      </div>
                      <p className="taxnex-price-card__gross">
                        {t('tax.totalWithVat')}: <strong>{formatEur(gross, i18n.resolvedLanguage ?? 'el')}</strong>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="taxnex-btn taxnex-btn--primary taxnex-price-card__pay"
                      onClick={() =>
                        setPaymentModal({
                          plan,
                          checkoutUrl: hasCheckout ? checkoutUrl : null,
                        })
                      }
                    >
                      {hasCheckout ? t('tax.payOnline') : t('tax.contactForPayment')}
                    </button>
                  </div>
                </motion.article>
              )
            })}
          </div>

          <div className="taxnex-stage-grid">
            {taxServiceStages.map((item, i) => (
              <motion.article
                key={item.stage}
                className="taxnex-stage-card"
                initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.5, ease: EASE, delay: reduceMotion ? 0 : i * 0.07 }}
              >
                <span className="taxnex-stage-card__badge">{item.stage}</span>
                <h3 className="taxnex-stage-card__title">{item.title}</h3>
                <p className="taxnex-stage-card__body">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <TaxPlanCheckoutModal
        isOpen={paymentModal != null}
        onClose={() => setPaymentModal(null)}
        plan={paymentModal?.plan ?? null}
        checkoutUrl={paymentModal?.checkoutUrl ?? null}
      />

      <section id="tax-mission" className="taxnex-section taxnex-section--mid" aria-labelledby="tax-mission-h">
        <div className="taxnex-mission__bg" aria-hidden />
        <div className="container taxnex-mission__inner">
          <motion.div className="taxnex-mission__copy" {...fadeUp}>
            <h2 id="tax-mission-h" className="taxnex-h2">
              {taxMission.title}
            </h2>
              {taxMission.lines.map((line) => (
              <p key={line} className="taxnex-mission__line">
                {line}
              </p>
            ))}
            <div className="taxnex-mission__phones">
              <a className="taxnex-phone" href="tel:+357243333305">
                +357 24 333 305
              </a>
              <span className="taxnex-mission__sep" aria-hidden>
                ·
              </span>
              <a className="taxnex-phone" href="tel:+35796000336">
                +357 96 000 336
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="tax-steps" className="taxnex-section taxnex-section--light" aria-labelledby="tax-steps-h">
        <div className="container">
          <motion.div className="taxnex-section__head" {...fadeUp}>
            <p className="taxnex-eyebrow">{t('tax.guide')}</p>
            <h2 id="tax-steps-h" className="taxnex-h2">
              {t('tax.stepsHeading')}
            </h2>
          </motion.div>
          <ol className="taxnex-steps">
              {taxSteps.map((step, i) => (
              <motion.li
                key={step.step}
                className="taxnex-step"
                initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.48, ease: EASE, delay: reduceMotion ? 0 : i * 0.06 }}
              >
                <span className="taxnex-step__num">{step.step}</span>
                <div className="taxnex-step__body">
                  <h3 className="taxnex-step__title">{step.title}</h3>
                  <p className="taxnex-step__lead">{step.lead}</p>
                  <Link className="taxnex-step__cta" to={step.href}>
                    {step.cta}
                  </Link>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section id="tax-tools" className="taxnex-section taxnex-section--tools">
        <div className="container">
          <motion.div className="taxnex-section__head" {...fadeUp}>
            <p className="taxnex-eyebrow taxnex-eyebrow--dark">{t('tax.freeTools')}</p>
            <h2 className="taxnex-h2">{t('tax.calculationsChecks')}</h2>
          </motion.div>
          <div className="taxnex-tools-grid">
            {taxToolCards.map((tool, i) => (
              <motion.article
                key={tool.title}
                className="taxnex-tool-card"
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.5, ease: EASE, delay: reduceMotion ? 0 : i * 0.08 }}
              >
                <h3 className="taxnex-tool-card__title">{tool.title}</h3>
                <p className="taxnex-tool-card__desc">{tool.description}</p>
                <Link className="taxnex-tool-card__btn" to={tool.href}>
                  {tool.cta}
                </Link>
              </motion.article>
            ))}
          </div>
          <p className="taxnex-tools-note">{t('tax.toolsNote')}</p>
        </div>
      </section>

      <section
        className="taxnex-section taxnex-section--faq taxnex-section--light border-t border-emerald-200/25"
        aria-label={t('tax.taxFaq')}
      >
        <div className="container">
          <motion.div className="mx-auto max-w-5xl py-8 sm:py-12" {...fadeUp}>
            <TaxNexFaqSection />
          </motion.div>
        </div>
      </section>

      <section id="tax-newsletter" className="taxnex-section taxnex-section--newsletter" aria-labelledby="tax-nl-h">
        <div className="container taxnex-newsletter">
          <div className="taxnex-newsletter__card">
            <motion.div {...fadeUp}>
              <h2 id="tax-nl-h" className="taxnex-h2 taxnex-h2--tight">
                {taxNewsletter.title}
              </h2>
              <p className="taxnex-newsletter__desc">{taxNewsletter.description}</p>
              <p className="taxnex-newsletter__alt">{taxNewsletter.altLine}</p>
              <div className="taxnex-newsletter__actions">
                <Link className="taxnex-btn taxnex-btn--primary" to="/contact">
                  {t('tax.subscribeContact')}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="tax-contact" className="taxnex-section taxnex-section--cta-bottom">
        <div className="container taxnex-bottom-cta">
          <p className="taxnex-bottom-cta__label">{t('tax.bottomLabel')}</p>
          <h2 className="taxnex-h2 taxnex-h2--tight">{t('tax.requestDetailsHeading')}</h2>
          <p className="taxnex-muted">{t('tax.requestDetailsBody')}</p>
          <Link className="taxnex-btn taxnex-btn--primary taxnex-btn--lg" to="/contact">
            {t('tax.requestDetailsCta')}
          </Link>
        </div>
      </section>

      {showCookieNotice ? (
        <div className="taxnex-cookie" role="region" aria-label={t('tax.cookieNoticeAria')}>
          <div className="taxnex-cookie__inner">
            <span className="taxnex-cookie__text">{t('tax.cookieNoticeBody')}</span>
            <button type="button" className="taxnex-cookie__btn" onClick={acceptCookies} aria-label={t('tax.cookieOk')}>
              {t('tax.cookieOk')}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
