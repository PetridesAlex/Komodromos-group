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

      <main className="bg-[linear-gradient(170deg,#f8fbff_0%,#eef4ff_40%,#f8fbff_100%)] pt-24 pb-14 sm:pb-20">
        <section className="container">
          <div className="mx-auto max-w-5xl">
            <motion.div
              className="rounded-2xl border border-[#d5deec] bg-white/80 p-6 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.45)] backdrop-blur-sm sm:p-8 lg:p-10"
              initial={reduceMotion ? false : { opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.62, ease: EASE }}
            >
              <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#45658f]">
                Cyprus Tax Filing Guide
              </p>
              <h1 className="mt-3 text-center font-['Playfair_Display','Cormorant_Garamond',serif] text-3xl font-semibold leading-tight text-[#0f1d33] sm:text-4xl lg:text-5xl">
                How to Get a TIC
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-[#52647f] sm:text-base">
                Follow these steps to create your profile and proceed with your Cyprus tax onboarding.
                This flow is designed to match the current Tax For All registration process.
              </p>

              <div className="mt-6 flex justify-center">
                <a
                  href="https://taxforall.mof.gov.cy/Home"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#6f8fc5] bg-[#2d4770] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-[#e8f1ff] transition hover:bg-[#385785]"
                >
                  Open Tax For All Portal
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {STEPS.map((step, i) => (
                <motion.article
                  key={step.title}
                  className="rounded-2xl border border-[#c6d6ed] bg-[linear-gradient(170deg,#ffffff_0%,#f2f7ff_100%)] p-5 shadow-[0_22px_46px_-30px_rgba(15,23,42,0.42)]"
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: reduceMotion ? 0 : 0.52, delay: reduceMotion ? 0 : i * 0.08, ease: EASE }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#b4c7e5] bg-[#e9f0fc] text-[#2d4d7d]">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4a668f]">Step {i + 1}</p>
                  </div>
                  <h2 className="mt-4 font-['Playfair_Display','Cormorant_Garamond',serif] text-2xl font-semibold leading-tight text-[#0f213d]">
                    {step.title}
                  </h2>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-[#445a7c] sm:text-base">{step.body}</p>
                </motion.article>
              ))}
            </div>

            <motion.div
              className="mt-8 rounded-xl border border-[#d5deec] bg-white/75 p-5 text-center shadow-[0_20px_48px_-32px_rgba(15,23,42,0.35)]"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: reduceMotion ? 0 : 0.48, ease: EASE }}
            >
              <p className="text-sm leading-relaxed text-[#4d5f79] sm:text-base">
                Need help completing registration? Our team can guide you through TIC and TAXISnet
                setup to avoid delays.
              </p>
              <div className="mt-4">
                <Link
                  to="/contact"
                  state={{ serviceInterest: 'Tax & Accounting Services' }}
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-[#6f8fc5] bg-[#2d4770] px-6 text-sm font-semibold uppercase tracking-wide text-[#e8f1ff] transition hover:bg-[#385785]"
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
