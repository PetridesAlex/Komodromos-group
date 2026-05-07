import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { ExternalLink, KeyRound, LogIn, ShieldAlert } from 'lucide-react'
import Footer from './Footer'
import SiteLogo from './SiteLogo'
import TopbarSocialLinks from './TopbarSocialLinks'
import { useReveal } from '../hooks/useReveal'

const EASE = [0.16, 1, 0.3, 1] as const

const STEPS = [
  {
    title: 'Find your Tax Number (TIC)',
    icon: KeyRound,
    points: [
      'Locate your official Cyprus Tax Identification Code (TIC) before starting TAXISnet login.',
      'Ensure the number is entered exactly as issued to avoid login or account lookup issues.',
    ],
  },
  {
    title: 'Use your TAXISnet credentials',
    icon: LogIn,
    points: [
      "Log in with the username and password (PIN) sent to you by Cyprus tax authorities.",
      'If credentials are missing or expired, request an official reset through the relevant tax channel.',
    ],
  },
  {
    title: 'Security & support check',
    icon: ShieldAlert,
    points: [
      'We are not the Cyprus tax authorities; we only guide you through setup and filing support.',
      'Never share credentials publicly. Keep access details private and secure.',
    ],
  },
] as const

export default function TaxHowToTaxisnetPage() {
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
                How to Register to TAXISnet
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-[#52647f] sm:text-base">
                Complete TAXISnet access in a structured way, then continue with your tax submission
                workflow without delays.
              </p>

              <div className="mt-6 flex justify-center">
                <a
                  href="https://taxisnet.mof.gov.cy"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#6f8fc5] bg-[#2d4770] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-[#e8f1ff] transition hover:bg-[#385785]"
                >
                  Open TAXISnet
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {STEPS.map((step, i) => (
                <motion.article
                  key={step.title}
                  className="rounded-2xl border border-[#cfdbed] bg-[linear-gradient(170deg,#ffffff_0%,#f4f8ff_100%)] p-5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.38)]"
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
                  <ul className="mt-4 space-y-3">
                    {step.points.map((point) => (
                      <li key={point} className="relative pl-4 text-sm leading-relaxed text-[#455978] sm:text-[0.95rem]">
                        <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-[#5f82b8]" />
                        {point}
                      </li>
                    ))}
                  </ul>
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
                If you get blocked during TAXISnet setup, we can help you validate details and proceed
                to the next filing step.
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
