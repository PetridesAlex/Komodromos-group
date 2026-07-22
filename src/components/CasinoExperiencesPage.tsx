import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Car,
  Crown,
  Gem,
  Music,
  ShieldCheck,
  ShieldPlus,
  Spade,
  Sparkles,
  Wine,
} from 'lucide-react'
import CasinoReservationModal from './CasinoReservationModal'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'

const CASINO_IMG = '/images/services/Casino'

const TABLE_GAMES = ['American Roulette', 'Blackjack', 'Baccarat', 'Poker'] as const

const HEADLINE_STATS: ReadonlyArray<{ target: number; suffix?: string; label: string }> = [
  { target: 1000, suffix: '+', label: 'Premium slot machines' },
  { target: 100, label: 'International table games' },
  { target: 9, label: 'Professional poker tables' },
  { target: 18, label: 'Private platinum tables' },
]

const HIGHLIGHTS: ReadonlyArray<{ icon: typeof Crown; text: string }> = [
  { icon: Sparkles, text: 'Over 1,000 premium slot machines' },
  { icon: Spade, text: '100 international table games' },
  { icon: Spade, text: '9 professional poker tables' },
  { icon: Crown, text: 'Exclusive Platinum Club VIP lounge' },
  { icon: Gem, text: '6 private poker rooms' },
  { icon: Gem, text: '18 private platinum gaming tables' },
  { icon: Wine, text: 'World-class restaurants & fine dining' },
  { icon: Wine, text: 'Premium bars & signature cocktails' },
  { icon: Music, text: 'Live entertainment at Centre Stage' },
]

type TransportTier = {
  icon: typeof Crown
  eyebrow: string
  name: string
  blurb: string
  features: readonly string[]
  image: string
  note?: string
}

const TRANSPORT_TIERS: readonly TransportTier[] = [
  {
    icon: Crown,
    eyebrow: 'Signature arrival',
    name: 'VIP Stretch Limousine',
    blurb:
      'Travel in exceptional style aboard our luxurious 10-passenger stretch limousine — the unforgettable way to arrive.',
    features: [
      'Elegant luxury leather interior',
      'Fully stocked premium bar',
      'Selection of complimentary beverages',
      'Five entertainment screens',
      'Ambient mood lighting',
      'Personalised chill-out music playlist',
      'Spacious VIP seating',
      'Professional chauffeur service',
    ],
    image: `${CASINO_IMG}/casino-services-4.webp`,
    note: 'Perfect for couples, groups of friends, celebrations, bachelor & bachelorette parties, corporate guests, or an unforgettable casino arrival.',
  },
  {
    icon: Gem,
    eyebrow: 'Executive elegance',
    name: 'Mercedes-Maybach / S-Class L AMG',
    blurb:
      'For guests who appreciate understated elegance and executive comfort, arrive in a Mercedes S-Class L AMG with panoramic view — or a Mercedes-Maybach, subject to availability.',
    features: [
      'Executive rear seating',
      'Panoramic roof',
      'Premium leather interior',
      'Climate-controlled comfort',
      'Complimentary refreshments',
      'Professional chauffeur',
      'Complete discretion and privacy',
    ],
    image: `${CASINO_IMG}/casino-maybach-car.webp`,
  },
  {
    icon: ShieldCheck,
    eyebrow: 'Discreet protection',
    name: 'Luxury Security Escort',
    blurb:
      'For guests requiring enhanced privacy and security, a dedicated Range Rover VIP security vehicle can accompany your journey.',
    features: [
      'Professional close-protection team',
      'Available throughout your entire experience',
      'Complete comfort and discretion',
      'Peace of mind from arrival to departure',
    ],
    image: `${CASINO_IMG}/casino-services-6.webp`,
  },
  {
    icon: ShieldPlus,
    eyebrow: 'Upon request',
    name: 'Armoured VIP Transportation',
    blurb:
      'For the highest level of personal security, we can arrange an armoured BMW 7 Series — available by special request.',
    features: [
      'Fully armoured executive vehicle',
      'Professional VIP chauffeur',
      'Personal security protection',
      'Maximum discretion',
      'Premium executive comfort',
    ],
    image: `${CASINO_IMG}/casino-services-2.webp`,
    note: 'Ideal for high-profile individuals, executives, diplomats, celebrities, and guests requiring enhanced security.',
  },
]

const GALLERY: readonly string[] = [
  `${CASINO_IMG}/casino-services-1.webp`,
  `${CASINO_IMG}/casino-services-2.webp`,
  `${CASINO_IMG}/casino-services-3.webp`,
  `${CASINO_IMG}/casino-services-4.webp`,
  `${CASINO_IMG}/casino-services-5.webp`,
  `${CASINO_IMG}/casino-services-6.webp`,
]

const CONTACT_STATE = {
  serviceInterest: 'VIP Services',
  vipSubService: 'Casino Experiences',
} as const

function CountUpValue({
  target,
  suffix = '',
  duration = 1800,
}: {
  target: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const startedRef = useRef(false)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting || startedRef.current) return
        startedRef.current = true

        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
          else setValue(target)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className="casino-stat__value">
      {value.toLocaleString('en-US')}
      {suffix}
    </span>
  )
}

export default function CasinoExperiencesPage() {
  const pageRef = useReveal()
  const [reserveOpen, setReserveOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function scrollToContent() {
    const el = document.getElementById('casino-content')
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <div className="page casino-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <section
        className="casino-hero"
        data-hero-parallax-root
        aria-label="City of Dreams Mediterranean"
      >
        <div
          className="casino-hero__bg"
          aria-hidden
          data-hero-parallax
          style={{ backgroundImage: `url("${CASINO_IMG}/casino-services-6.webp")` }}
        />
        <div className="casino-hero__scrim" aria-hidden />
        <div className="casino-hero__glow casino-hero__glow--1" aria-hidden />
        <div className="casino-hero__glow casino-hero__glow--2" aria-hidden />

        <div className="container casino-hero__inner">
          <p className="casino-hero__eyebrow reveal">Casino Experiences</p>
          <h1 className="casino-hero__title reveal reveal-delay-1">
            City of Dreams Mediterranean
          </h1>
          <p className="casino-hero__subtitle reveal reveal-delay-2">
            Europe&rsquo;s Ultimate Luxury Casino Experience
          </p>
          <p className="casino-hero__tagline reveal reveal-delay-3">
            Where Fortune Meets Unparalleled Luxury
          </p>
          <div className="casino-hero__actions reveal reveal-delay-3">
            <button type="button" className="casino-btn casino-btn--gold" onClick={scrollToContent}>
              Explore the experience
              <ArrowRight size={17} strokeWidth={2} aria-hidden />
            </button>
            <button
              type="button"
              className="casino-btn casino-btn--ghost"
              onClick={() => setReserveOpen(true)}
            >
              Reserve your night
            </button>
          </div>
        </div>
        <div className="casino-hero__fade" aria-hidden />
      </section>

      <main id="casino-content">
        <section className="casino-section casino-intro" aria-label="Introduction">
          <div className="container casino-intro__inner">
            <div className="casino-rule" aria-hidden>
              <span className="casino-rule__pip" />
            </div>
            <p className="casino-intro__lead reveal">
              Prepare to experience the excitement, glamour, and prestige of Europe&rsquo;s largest
              integrated casino resort. At City of Dreams Mediterranean, every detail has been
              designed to deliver an unforgettable world-class gaming experience, where luxury,
              entertainment, and exceptional service come together in perfect harmony.
            </p>
            <p className="casino-intro__body reveal">
              Whether you are a seasoned player or visiting for an extraordinary night out, this
              iconic destination promises an atmosphere unlike any other.
            </p>

            <div className="casino-stats reveal">
              {HEADLINE_STATS.map((stat) => (
                <div key={stat.label} className="casino-stat">
                  <CountUpValue target={stat.target} suffix={stat.suffix} />
                  <span className="casino-stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="casino-section casino-grand" aria-labelledby="casino-grand-title">
          <div className="container casino-grand__inner">
            <div className="casino-grand__media reveal">
              <img
                src={`${CASINO_IMG}/casino-services-3.webp`}
                alt="The Grand Casino gaming floor"
                loading="lazy"
                decoding="async"
              />
              <span className="casino-grand__media-badge">7,500 m&sup2;</span>
            </div>
            <div className="casino-grand__copy reveal">
              <p className="casino-eyebrow">The Grand Casino</p>
              <h2 id="casino-grand-title" className="casino-heading">
                A gaming paradise where sophistication meets adrenaline
              </h2>
              <p className="casino-text">
                Step inside an impressive 7,500 m&sup2; gaming floor and challenge your luck at an
                outstanding collection of world-renowned table games:
              </p>
              <ul className="casino-games">
                {TABLE_GAMES.map((game) => (
                  <li key={game} className="casino-games__item">
                    <Spade size={15} strokeWidth={2} aria-hidden />
                    {game}
                  </li>
                ))}
              </ul>
              <p className="casino-text">
                Or immerse yourself in the excitement of over 1,000 state-of-the-art slot machines,
                offering endless entertainment and the opportunity to win spectacular prizes.
              </p>

              <div className="casino-feature-cards">
                <div className="casino-feature-card">
                  <Crown size={18} strokeWidth={1.75} aria-hidden />
                  <h3>The Platinum Club</h3>
                  <p>
                    Elegant private gaming salons, VIP tables, and personalised premium service
                    designed for the most discerning players.
                  </p>
                </div>
                <div className="casino-feature-card">
                  <Spade size={18} strokeWidth={1.75} aria-hidden />
                  <h3>Professional Poker</h3>
                  <p>
                    A dedicated poker area suitable for both experienced players and newcomers
                    looking to experience the thrill of the game.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="casino-section casino-beyond" aria-labelledby="casino-beyond-title">
          <div className="container casino-beyond__inner">
            <div className="casino-beyond__copy reveal">
              <p className="casino-eyebrow">Luxury Beyond Gaming</p>
              <h2 id="casino-beyond-title" className="casino-heading">
                Your experience extends far beyond the casino floor
              </h2>
              <p className="casino-text">
                Indulge in exceptional fine dining, signature cocktails, premium lounges, and
                spectacular live performances at Centre Stage, creating the perfect balance between
                excitement and relaxation.
              </p>
              <p className="casino-text casino-text--accent">
                Every visit is designed to become an unforgettable memory.
              </p>
            </div>
            <div className="casino-beyond__media reveal">
              <img
                src={`${CASINO_IMG}/casino-services-5.webp`}
                alt="Fine dining and live entertainment at the resort"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="casino-section casino-highlights" aria-labelledby="casino-highlights-title">
          <div className="container">
            <header className="casino-section__head reveal">
              <p className="casino-eyebrow">Casino Highlights</p>
              <h2 id="casino-highlights-title" className="casino-heading casino-heading--center">
                Everything that makes a night here extraordinary
              </h2>
            </header>
            <ul className="casino-highlights__grid reveal">
              {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                <li key={text} className="casino-highlight">
                  <span className="casino-highlight__icon" aria-hidden>
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="casino-highlight__text">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="casino-section casino-transport" aria-labelledby="casino-transport-title">
          <div className="container">
            <header className="casino-section__head reveal">
              <p className="casino-eyebrow">Exclusive VIP Transportation</p>
              <h2 id="casino-transport-title" className="casino-heading casino-heading--center">
                Your luxury experience begins long before you arrive
              </h2>
              <p className="casino-section__lead">
                A collection of premium chauffeur-driven vehicles designed to deliver comfort,
                privacy, prestige, and complete peace of mind from the moment you leave your hotel.
              </p>
            </header>

            <div className="casino-tiers">
              {TRANSPORT_TIERS.map(({ icon: Icon, ...tier }) => (
                <article key={tier.name} className="casino-tier reveal">
                  <div className="casino-tier__media">
                    <img src={tier.image} alt={tier.name} loading="lazy" decoding="async" />
                    <span className="casino-tier__eyebrow">
                      <Icon size={14} strokeWidth={2} aria-hidden />
                      {tier.eyebrow}
                    </span>
                  </div>
                  <div className="casino-tier__body">
                    <h3 className="casino-tier__name">{tier.name}</h3>
                    <p className="casino-tier__blurb">{tier.blurb}</p>
                    <ul className="casino-tier__features">
                      {tier.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    {tier.note ? <p className="casino-tier__note">{tier.note}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="casino-section casino-gallery" aria-label="Gallery">
          <div className="container">
            <header className="casino-section__head reveal">
              <p className="casino-eyebrow">
                <Car size={14} strokeWidth={2} aria-hidden /> The Atmosphere
              </p>
              <h2 className="casino-heading casino-heading--center">A glimpse of the experience</h2>
            </header>
            <div className="casino-gallery__grid reveal">
              {GALLERY.map((src, index) => (
                <figure
                  key={src}
                  className={`casino-gallery__item${index % 5 === 0 ? ' casino-gallery__item--wide' : ''}`}
                >
                  <img src={src} alt="City of Dreams Mediterranean" loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="casino-cta" aria-labelledby="casino-cta-title">
          <div className="casino-cta__glow" aria-hidden />
          <div className="container casino-cta__inner reveal">
            <p className="casino-eyebrow">An Experience Reserved for the Exceptional</p>
            <h2 id="casino-cta-title" className="casino-cta__title">
              Luxury. Prestige. Excitement.
            </h2>
            <p className="casino-cta__text">
              Whether you&rsquo;re chasing the thrill of the tables, celebrating a special occasion,
              entertaining distinguished clients, or simply indulging in one of Europe&rsquo;s most
              prestigious destinations, every moment is crafted to exceed expectations. From luxury
              transportation to VIP gaming, world-class hospitality, and unforgettable
              entertainment, we create an experience that is truly extraordinary.
            </p>
            <p className="casino-cta__signature">Your VIP Casino Experience Begins Here.</p>
            <div className="casino-cta__actions">
              <Link to="/contact" state={CONTACT_STATE} className="casino-btn casino-btn--gold">
                Request your VIP experience
                <ArrowRight size={17} strokeWidth={2} aria-hidden />
              </Link>
              <Link to="/services/vip" className="casino-btn casino-btn--ghost">
                Back to VIP services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CasinoReservationModal open={reserveOpen} onClose={() => setReserveOpen(false)} />
    </div>
  )
}
