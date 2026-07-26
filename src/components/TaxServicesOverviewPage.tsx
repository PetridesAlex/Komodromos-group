import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import { TAX_NEX_PRICING_PLANS, TAX_NEX_VAT_PCT } from '../data/taxNexPageContent'
import { taxBrandHref } from '../lib/brandPaths'
import TaxContactLink from './TaxContactLink'

const EASE = [0.16, 1, 0.3, 1] as const

const EXTRA_SERVICE_CARDS = [
  {
    title: 'Αριθμός Φορολογικής Ταυτότητας (ΑΦΤ)',
    body: 'Βοήθεια στην εγγραφή στο Τμήμα Φορολογίας και απόκτηση ΑΦΜ',
    href: '/services/tax/how-to-get-a-tic',
  },
  {
    title: 'Πιστοποιητικά φορολογικής κατοικίας',
    body:
      'Επιβεβαιώστε την Κατάσταση Φορολογικής Κατοικίας σας για ένα συγκεκριμένο έτος ζητώντας Πιστοποιητικό Φορολογικής Κατοικίας από το Τμήμα Φορολογίας',
    href: '/services/tax/tax-residence-certificate',
  },
  {
    title: 'Πιστοποιητικά Non-Dom',
    body: 'Επιβεβαιώστε την κατάσταση "non-dom" σας και την απαλλαγή από πληρωμές SDC',
    href: '/services/tax/non-dom-certificate',
  },
  {
    title: 'Φορολογικές εκκαθαρίσεις',
    body: 'Αποκτήστε Πιστοποιητικό Φορολογικής Ενημερότητας που επιβεβαιώνει ότι όλες οι φορολογικές σας υποχρεώσεις έχουν εκπληρωθεί',
    href: '/services/tax/tax-clearances',
  },
  {
    title: 'Βοήθεια φορολογικών πληρωμών',
    body: 'Βοήθεια με πληρωμές Φόρου Εισοδήματος, ΓΕΣΥ και SDC μέσω τραπεζικής και Πύλης Φόρων',
    href: '/services/tax/tax-payment-support',
  },
] as const

const ADVISORY_SECTIONS = [
  {
    title: 'Εκπέμπουμε σε μια νέα εποχή στη διαχείριση περιουσιακών στοιχείων και συμβουλευτικές επενδύσεις',
    body:
      'Η Komodromos Group είναι μια ανεξάρτητη, εξατομικευμένη συμβουλευτική εταιρεία που προσφέρει προσαρμοσμένες λύσεις σε φορολογικό σχεδιασμό, εταιρική οργάνωση και επενδυτική υποστήριξη.',
    img: '/images/services/tax-services/tax-body.webp',
  },
  {
    title: 'Ενδυνάμωση επιχειρήσεων, οργανισμών και επαγγελματιών επενδυτών',
    body:
      'Η Komodromos Group προσφέρει εξατομικευμένο και ολοκληρωμένο φάσμα υπηρεσιών που σκοπό έχουν να αναβαθμίσουν το χαρτοφυλάκιό σας και να ενισχύσουν τη μακροπρόθεσμη στρατηγική σας.',
    img: 'https://taxnexcy.com/wp-content/uploads/2025/08/IMAGE-4.webp',
  },
  {
    title: 'Νομικές υπηρεσίες και υπηρεσίες κανονιστικής συμμόρφωσης',
    body:
      'Εταιρικές υπηρεσίες με πλήρη υποστήριξη κανονιστικής συμμόρφωσης, φορολογικών υποχρεώσεων και τεκμηρίωσης για ιδιώτες και επιχειρήσεις.',
    img: '/images/services/tax-services/tax-hero.webp',
  },
] as const

function formatEurEl(n: number) {
  return `${n.toLocaleString('el-GR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`
}

export default function TaxServicesOverviewPage() {
  const reduceMotion = useReducedMotion()
  const pageRef = useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <main className="bg-[linear-gradient(175deg,#f7fffc_0%,#eefcf7_45%,#f6fffb_100%)] pt-24 pb-14 sm:pb-20">
        <section className="container">
          <motion.div
            className="rounded-2xl border border-emerald-200/55 bg-white/80 p-6 shadow-[0_26px_60px_-38px_rgba(6,95,70,0.35)] backdrop-blur-sm sm:p-8"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.58, ease: EASE }}
          >
            <Link
              to={taxBrandHref('/services/tax')}
              className="inline-flex h-10 items-center justify-center rounded-lg border border-emerald-300/65 bg-emerald-50 px-4 text-xs font-bold uppercase tracking-[0.14em] text-emerald-800 transition hover:bg-emerald-100"
            >
              ΑΡΧΙΚΗ
            </Link>
            <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Οι Υπηρεσίες Μας</p>
            <h1 className="mt-2 text-center font-['Playfair_Display','Cormorant_Garamond',serif] text-4xl font-semibold text-slate-800 sm:text-5xl">
              Τι παρέχουμε
            </h1>
          </motion.div>
        </section>

        <section className="container mt-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {TAX_NEX_PRICING_PLANS.map((plan, i) => (
              <motion.article
                key={plan.id}
                className="overflow-hidden rounded-2xl border border-emerald-200/50 bg-white shadow-[0_22px_52px_-34px_rgba(15,23,42,0.38)]"
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: reduceMotion ? 0 : 0.52, delay: reduceMotion ? 0 : i * 0.08, ease: EASE }}
              >
                <img src={plan.image} alt={plan.imageAlt} className="h-52 w-full object-cover" loading="lazy" decoding="async" />
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.13em] text-emerald-700">{plan.kicker}</p>
                  <h2 className="mt-2 font-['Playfair_Display','Cormorant_Garamond',serif] text-2xl font-semibold leading-tight text-slate-900">
                    {plan.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{plan.description}</p>
                  {plan.includes?.length ? (
                    <ul className="mt-3 space-y-1.5">
                      {plan.includes.map((line) => (
                        <li key={line} className="text-sm text-slate-700">
                          - {line}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <p className="mt-4 text-sm font-semibold text-slate-800">
                    {formatEurEl(plan.priceEur)} <span className="text-emerald-700">+{TAX_NEX_VAT_PCT}% ΦΠΑ</span>
                  </p>
                  <div className="mt-4">
                    <Link
                      to={
                        plan.id === 'diy'
                          ? taxBrandHref('/services/tax/income-tax-calculator')
                          : '/contact'
                      }
                      className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-800/20 bg-slate-900 px-5 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-slate-800"
                    >
                      ΔΙΑΒΑΣΤΕ ΠΕΡΙΣΣΟΤΕΡΑ
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="container mt-10">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {EXTRA_SERVICE_CARDS.map((card, i) => (
              <motion.article
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-[linear-gradient(160deg,#ffffff_0%,#f3f7fb_100%)] p-6 shadow-[0_18px_42px_-30px_rgba(15,23,42,0.34)]"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : i * 0.06, ease: EASE }}
              >
                <h3 className="font-['Playfair_Display','Cormorant_Garamond',serif] text-2xl font-semibold leading-tight text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.body}</p>
                <Link
                  to={taxBrandHref(card.href)}
                  className="mt-4 inline-flex h-11 items-center justify-center rounded-lg border border-slate-900/20 bg-slate-900 px-5 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-slate-800"
                >
                  ΔΙΑΒΑΣΤΕ ΠΕΡΙΣΣΟΤΕΡΑ
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="container mt-12 space-y-6">
          {ADVISORY_SECTIONS.map((section, i) => (
            <motion.article
              key={section.title}
              className="grid overflow-hidden rounded-2xl border border-emerald-200/60 bg-white shadow-[0_24px_56px_-34px_rgba(16,185,129,0.24)] md:grid-cols-2"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: reduceMotion ? 0 : 0.56, delay: reduceMotion ? 0 : i * 0.08, ease: EASE }}
            >
              <img src={section.img} alt={section.title} className="h-64 w-full object-cover md:h-full" loading="lazy" decoding="async" />
              <div className="p-6 sm:p-8">
                <h3 className="font-['Playfair_Display','Cormorant_Garamond',serif] text-3xl font-semibold leading-tight text-slate-900">
                  {section.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{section.body}</p>
                <TaxContactLink className="mt-5 inline-flex h-11 items-center justify-center rounded-lg border border-emerald-300 bg-emerald-600 px-5 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-emerald-500">
                  ΔΙΑΒΑΣΤΕ ΠΕΡΙΣΣΟΤΕΡΑ
                </TaxContactLink>
              </div>
            </motion.article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}
