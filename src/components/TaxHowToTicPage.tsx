import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { ExternalLink, MailCheck, ShieldCheck, UserRound } from 'lucide-react'
import Footer from './Footer'
import SiteLogo from './SiteLogo'
import TopbarSocialLinks from './TopbarSocialLinks'
import { useReveal } from '../hooks/useReveal'

const EASE = [0.16, 1, 0.3, 1] as const

const STEPS = [
  {
    title: 'Create your Tax For All account',
    icon: UserRound,
    body:
      'Open the Tax For All portal and choose the registration option. Use a valid personal email you actively monitor so verification updates are delivered without delay.',
  },
  {
    title: 'Enter personal details and submit',
    icon: ShieldCheck,
    body:
      'Complete all required identity and contact fields exactly as they appear on official records. Then click "Submit my registration" to send your activation request.',
  },
  {
    title: 'Verify activation email',
    icon: MailCheck,
    body:
      'Check your inbox and spam/junk folders for the confirmation message from the tax portal. Follow the email instructions to activate your profile and continue onboarding.',
  },
] as const

const TAX_SERVICE_CARDS = [
  {
    title: 'Αριθμός Φορολογικού Μητρώου (Α.Φ.Μ)',
    body: 'Βοήθεια στην εγγραφή στο Τμήμα Φορολογίας και απόκτηση Α.Φ.Μ.',
    href: '/services/tax/how-to-get-a-tic',
  },
  {
    title: 'Πιστοποιητικά φορολογικής κατοικίας',
    body:
      'Επιβεβαιώστε την κατάσταση φορολογικής κατοικίας σας για συγκεκριμένο έτος ζητώντας Πιστοποιητικό Φορολογικής Κατοικίας.',
    href: '/contact',
  },
  {
    title: 'Πιστοποιητικά Non-Dom',
    body: 'Επιβεβαιώστε την κατάσταση non-dom και την απαλλαγή από πληρωμές SDC.',
    href: '/contact',
  },
  {
    title: 'Φορολογικές εκκαθαρίσεις',
    body: 'Αποκτήστε Πιστοποιητικό Φορολογικής Ενημερότητας που αποδεικνύει πλήρη φορολογική συμμόρφωση.',
    href: '/contact',
  },
  {
    title: 'Φορολογικοί έλεγχοι / φορολογικές ενστάσεις',
    body: 'Βοήθεια με φορολογικούς ελέγχους και κατάθεση φορολογικών ενστάσεων.',
    href: '/contact',
  },
  {
    title: 'Βοήθεια φορολογικών πληρωμών',
    body: 'Υποστήριξη σε πληρωμές Φόρου Εισοδήματος, ΓΕΣΥ και SDC.',
    href: '/contact',
  },
] as const

export default function TaxHowToTicPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page" ref={pageRef}>
      <header className="topbar">
        <div className="container topbar-inner">
          <SiteLogo />
          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
            <Link to="/#services" className="nav-active" onClick={() => setMenuOpen(false)}>
              SERVICES
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              CONTACT
            </Link>
            <TopbarSocialLinks variant="mobile" />
          </nav>
          <TopbarSocialLinks variant="desktop" />
          <button
            type="button"
            className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main className="bg-[linear-gradient(170deg,#f6fffb_0%,#e9fbf3_42%,#f4fffa_100%)] pt-24 pb-14 sm:pb-20">
        <section className="container">
          <div className="mx-auto max-w-5xl">
            <motion.div
              className="rounded-2xl border border-emerald-200/70 bg-white/85 p-6 shadow-[0_30px_70px_-40px_rgba(6,95,70,0.34)] backdrop-blur-sm sm:p-8 lg:p-10"
              initial={reduceMotion ? false : { opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.62, ease: EASE }}
            >
              <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                Cyprus Tax Filing Guide
              </p>
              <h1 className="mt-3 text-center font-['Playfair_Display','Cormorant_Garamond',serif] text-3xl font-semibold leading-tight text-emerald-950 sm:text-4xl lg:text-5xl">
                How to Get a TIC
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-emerald-900/70 sm:text-base">
                Follow these steps to create your profile and proceed with your Cyprus tax onboarding.
                This flow is designed to match the current Tax For All registration process.
              </p>

              <div className="mt-6 flex justify-center">
                <a
                  href="https://taxforall.mof.gov.cy/Home"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-emerald-300 bg-emerald-700 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-emerald-50 transition hover:bg-emerald-600"
                >
                  Open Tax For All Portal
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="container mt-8">
          <motion.div
            className="mx-auto max-w-6xl rounded-2xl border border-emerald-200/80 bg-white/80 p-6 shadow-[0_26px_58px_-36px_rgba(6,95,70,0.3)] backdrop-blur-sm sm:p-8"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.56, ease: EASE }}
          >
            <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">Οι Υπηρεσίες Μας</p>
            <h2 className="mt-2 text-center font-['Playfair_Display','Cormorant_Garamond',serif] text-3xl font-semibold text-emerald-950 sm:text-4xl">
              Διαδικασία
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {TAX_SERVICE_CARDS.map((card, i) => (
                <motion.article
                  key={card.title}
                  className="rounded-xl border border-emerald-200/80 bg-[linear-gradient(165deg,#ffffff_0%,#ecfdf4_100%)] p-5 shadow-[0_20px_44px_-32px_rgba(6,95,70,0.33)]"
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: reduceMotion ? 0 : 0.48, delay: reduceMotion ? 0 : i * 0.06, ease: EASE }}
                >
                  <h3 className="font-['Playfair_Display','Cormorant_Garamond',serif] text-2xl font-semibold leading-tight text-emerald-950">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-emerald-900/72 sm:text-[0.96rem]">{card.body}</p>
                  <Link
                    to={card.href}
                    state={{ serviceInterest: 'Tax & Accounting Services' }}
                    className="mt-4 inline-flex h-10 items-center justify-center rounded-lg border border-emerald-300/70 bg-emerald-700 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-50 transition hover:bg-emerald-600"
                  >
                    ΔΙΑΒΑΣΤΕ ΠΕΡΙΣΣΟΤΕΡΑ
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="container mt-8">
          <div className="mx-auto max-w-5xl">
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {STEPS.map((step, i) => (
                <motion.article
                  key={step.title}
                  className="rounded-2xl border border-emerald-200/75 bg-[linear-gradient(170deg,#ffffff_0%,#ecfdf4_100%)] p-5 shadow-[0_22px_46px_-30px_rgba(6,95,70,0.34)]"
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: reduceMotion ? 0 : 0.52, delay: reduceMotion ? 0 : i * 0.08, ease: EASE }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-100 text-emerald-700">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">Step {i + 1}</p>
                  </div>
                  <h2 className="mt-4 font-['Playfair_Display','Cormorant_Garamond',serif] text-2xl font-semibold leading-tight text-emerald-950">
                    {step.title}
                  </h2>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-emerald-900/72 sm:text-base">{step.body}</p>
                </motion.article>
              ))}
            </div>

            <motion.div
              className="mt-8 rounded-xl border border-emerald-200/80 bg-white/80 p-5 text-center shadow-[0_20px_48px_-32px_rgba(6,95,70,0.3)]"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: reduceMotion ? 0 : 0.48, ease: EASE }}
            >
              <p className="text-sm leading-relaxed text-emerald-900/72 sm:text-base">
                Need help completing registration? Our team can guide you through TIC and TAXISnet
                setup to avoid delays.
              </p>
              <div className="mt-4">
                <Link
                  to="/contact"
                  state={{ serviceInterest: 'Tax & Accounting Services' }}
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-emerald-300 bg-emerald-700 px-6 text-sm font-semibold uppercase tracking-wide text-emerald-50 transition hover:bg-emerald-600"
                >
                  Contact Tax Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
