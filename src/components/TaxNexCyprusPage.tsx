import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import {
  TAX_INCOME_CALCULATOR_PATH,
  TAX_NEX_ADDRESS_LINE,
  TAX_NEX_HERO,
  TAX_NEX_HERO_LEAD_SHORT,
  TAX_NEX_META_LEAD,
  TAX_NEX_MISSION,
  TAX_NEX_NEWSLETTER,
  TAX_NEX_PRICING_PLANS,
  TAX_NEX_SERVICE_STAGES,
  TAX_NEX_STEPS,
  TAX_NEX_TOOL_CARDS,
  TAX_NEX_VAT_PCT,
} from '../data/taxNexPageContent'
import { getTaxPlanCheckoutUrl, isValidHttpUrl } from '../lib/taxPlanCheckout'
import TaxNexFaqSection from './TaxNexFaqSection'
import TaxPlanCheckoutModal from './TaxPlanCheckoutModal'

function formatEurEl(n: number) {
  return `${n.toLocaleString('el-GR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`
}

const BRAND_LOGO = '/images/services/companie-services-cover/cards-logos-services/tax-nex.png'

const VIEW = { once: true, amount: 0.35 } as const
const EASE = [0.22, 1, 0.36, 1] as const

export default function TaxNexCyprusPage() {
  const reduceMotion = useReducedMotion()
  const [paymentModal, setPaymentModal] = useState<{
    plan: (typeof TAX_NEX_PRICING_PLANS)[number]
    checkoutUrl: string | null
  } | null>(null)

  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: VIEW,
        transition: { duration: 0.55, ease: EASE },
      }

  return (
    <div className="taxnex-root" lang="el">
      <div className="taxnex-topbar">
        <div className="container taxnex-topbar__inner">
          <span className="taxnex-topbar__pin" aria-hidden />
          <span className="taxnex-topbar__text">{TAX_NEX_ADDRESS_LINE}</span>
        </div>
      </div>

      <header id="tax-hero" className="taxnex-hero">
        <div className="taxnex-hero__bg" aria-hidden />

        <div className="container taxnex-hero__inner">
          <div className="taxnex-hero__brand-row">
            <motion.img
              src={BRAND_LOGO}
              alt="TaxNex"
              width={200}
              height={72}
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
            {TAX_NEX_HERO.title}
          </motion.h1>
          <motion.p
            className="taxnex-hero__subtitle"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.22 }}
          >
            {TAX_NEX_HERO.subtitle}
          </motion.p>
          <motion.p
            className="taxnex-hero__lead"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.32 }}
          >
            {TAX_NEX_HERO_LEAD_SHORT}
          </motion.p>

          <motion.div
            className="taxnex-hero__cta-block"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.42 }}
          >
            <Link className="taxnex-btn taxnex-btn--primary" to={TAX_INCOME_CALCULATOR_PATH}>
              ΥΠΟΛΟΓΙΣΤΕ ΤΟΝ ΦΟΡΟ ΣΑΣ
            </Link>
            <p className="taxnex-hero__phones" aria-label="Τηλέφωνα επικοινωνίας">
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
            <Link className="taxnex-hero__link-contact" to="/contact">
              Αίτημα επικοινωνίας
            </Link>
          </motion.div>
        </div>
      </header>

      <section id="tax-services" className="taxnex-section taxnex-section--light" aria-labelledby="tax-services-h">
        <div className="container">
          <motion.div className="taxnex-section__head" {...fadeUp}>
            <p className="taxnex-eyebrow">Οι Υπηρεσίες Μας</p>
            <h2 id="tax-services-h" className="taxnex-h2">
              Τι παρέχουμε
            </h2>
            <p className="taxnex-muted taxnex-section__intro">
              Οργανωμένη ροή από την πρώτη συμβουλή μέχρι την οριστική υποβολή — με ανθρώπινο έλεγχο σε κάθε στάδιο.
            </p>
            <p className="taxnex-section__body taxnex-muted">{TAX_NEX_META_LEAD}</p>
          </motion.div>
          <div className="taxnex-stage-grid">
            {TAX_NEX_SERVICE_STAGES.map((item, i) => (
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

      <section id="tax-pricing" className="taxnex-section taxnex-section--pricing" aria-labelledby="tax-pricing-h">
        <div className="container">
          <motion.div className="taxnex-section__head" {...fadeUp}>
            <p className="taxnex-eyebrow">Πακέτα υποβολής</p>
            <h2 id="tax-pricing-h" className="taxnex-h2">
              Φορολογική δήλωση — επιλέξτε τρόπο
            </h2>
            <p className="taxnex-muted taxnex-section__intro">
              Τρία επίπεδα υποστήριξης όπως στο TaxNex. Η πληρωμή ολοκληρώνεται online μέσω Stripe (ή εναλλακτικά JCC όταν
              συνδεθεί)— ρυθμίστε τα URLs στο περιβάλλον της εφαρμογής.
            </p>
          </motion.div>
          <div className="taxnex-pricing-grid">
            {TAX_NEX_PRICING_PLANS.map((plan, i) => {
              const checkoutUrl = getTaxPlanCheckoutUrl(plan.id)
              const hasCheckout = isValidHttpUrl(checkoutUrl)
              const gross = plan.priceEur * (1 + TAX_NEX_VAT_PCT / 100)
              const featured = plan.id === 'advisor'
              return (
                <motion.article
                  key={plan.id}
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
                    <div className="taxnex-price-card__price-block" aria-label="Τιμή">
                      <div className="taxnex-price-card__row">
                        <span className="taxnex-price-card__amount">{formatEurEl(plan.priceEur)}</span>
                        <span className="taxnex-price-card__vat-label">+ ΦΠΑ {TAX_NEX_VAT_PCT}%</span>
                      </div>
                      <p className="taxnex-price-card__gross">
                        Σύνολο με ΦΠΑ: <strong>{formatEurEl(gross)}</strong>
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
                      {hasCheckout ? 'Πληρωμή online' : 'Επικοινωνία για πληρωμή'}
                    </button>
                  </div>
                </motion.article>
              )
            })}
          </div>
          <p className="taxnex-pricing-footnote">
            Οι σύνδεσμοι ασφαλούς πληρωμής (Stripe ή JCC) ενεργοποιούνται από τους διαχειριστές — μέχρι τότε μπορείτε να
            ζητήσετε χειροκίνητη ολοκλήρωση μέσω επικοινωνίας. Πριν από την πληρωμή συλλέγονται στοιχεία επικοινωνίας για
            απόδειξη και υποστήριξη.
          </p>
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
              {TAX_NEX_MISSION.title}
            </h2>
            {TAX_NEX_MISSION.lines.map((line) => (
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
            <p className="taxnex-eyebrow">Οδηγός</p>
            <h2 id="tax-steps-h" className="taxnex-h2">
              Τρία βήματα για πρόσβαση & υποβολή
            </h2>
          </motion.div>
          <ol className="taxnex-steps">
            {TAX_NEX_STEPS.map((step, i) => (
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
            <p className="taxnex-eyebrow taxnex-eyebrow--dark">Δωρεάν εργαλεία</p>
            <h2 className="taxnex-h2">Υπολογισμοί & έλεγχοι</h2>
          </motion.div>
          <div className="taxnex-tools-grid">
            {TAX_NEX_TOOL_CARDS.map((tool, i) => (
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
          <p className="taxnex-tools-note">
            Επιπλέον αριθμομηχανές και οδηγοί (Capital Gains, απαλλαγές εισοδήματος, έντυπο TD59 κ.λπ.) διαθέσιμα
            κατόπιν αιτήματος μέσω της ομάδας μας — δείτε την ενότητα επικοινωνίας.
          </p>
        </div>
      </section>

      <section
        className="taxnex-section taxnex-section--faq taxnex-section--light border-t border-emerald-200/25"
        aria-label="Συχνές ερωτήσεις — Tax & Accounting"
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
                {TAX_NEX_NEWSLETTER.title}
              </h2>
              <p className="taxnex-newsletter__desc">{TAX_NEX_NEWSLETTER.description}</p>
              <p className="taxnex-newsletter__alt">{TAX_NEX_NEWSLETTER.altLine}</p>
              <div className="taxnex-newsletter__actions">
                <Link className="taxnex-btn taxnex-btn--primary" to="/contact">
                  Εγγραφή / Επικοινωνία
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="tax-contact" className="taxnex-section taxnex-section--cta-bottom">
        <div className="container taxnex-bottom-cta">
          <p className="taxnex-bottom-cta__label">Komodromos Group · Tax & Accounting Services</p>
          <h2 className="taxnex-h2 taxnex-h2--tight">Ζητήστε λεπτομέρειες για την υπηρεσία</h2>
          <p className="taxnex-muted">
            Συμπληρώστε τη φόρμα επικοινωνίας και η ομάδα μας θα επιστρέψει με το επόμενο βήμα.
          </p>
          <Link className="taxnex-btn taxnex-btn--primary taxnex-btn--lg" to="/contact">
            REQUEST DETAILS
          </Link>
        </div>
      </section>
    </div>
  )
}
