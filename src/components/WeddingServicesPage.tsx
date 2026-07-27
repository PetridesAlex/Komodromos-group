import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Mail, MapPin, Phone, UserCircle2 } from 'lucide-react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import WeddingIntroSocial from './WeddingIntroSocial'
import WeddingHighlightTiles from './WeddingHighlightTiles'
import WeddingPackagesSection from './WeddingPackagesSection'
import { useReveal } from '../hooks/useReveal'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { useSiteContext } from '../seo/SiteContext'

const WHY_CHOOSE = [
  'Transparent planning and disciplined investment across every budget line',
  'Guidance from first enquiry through your wedding week — one accountable team',
  'Thorough preparation and contingency thinking so surprises stay off the timeline',
  'Bespoke execution and discreet luxury, shaped to your culture and guest list',
] as const

const WEDDING_OFFERINGS = [
  {
    title: 'Full-service planning',
    desc: 'Timeline, vendors, and creative direction from first sketch to farewell.',
    image: '/images/services/wedding-highlights/planning.webp',
  },
  {
    title: 'Venue & production',
    desc: 'Scenic Cyprus locations, staging, lighting, and flawless run-of-show.',
    image: '/images/services/wedding-highlights/production.webp',
  },
  {
    title: 'Guest experience',
    desc: 'Travel, hospitality, and seating crafted for every attendee.',
    image: '/images/services/wedding-highlights/guests.webp',
  },
  {
    title: 'Styling & florals',
    desc: 'Cohesive palettes, florals, and detail styling for photography-ready moments.',
    image: '/images/services/wedding-highlights/bridal.webp',
  },
  {
    title: 'Destination weddings',
    desc: 'Local expertise and discreet coordination for international couples.',
    image: '/images/services/wedding-highlights/destinations.webp',
  },
  {
    title: 'Day-of coordination',
    desc: 'Calm leadership on the day so you can stay present and celebrate.',
    image: '/images/services/wedding-highlights/consultation.webp',
  },
] as const

const TESTIMONIALS: { author: string; quote: string; lang?: string }[] = [
  {
    author: 'Κωνσταντίνα',
    lang: 'el',
    quote:
      '«Δεν μπορούσα να φανταστώ τον γάμο μου καλύτερα. Είσασταν όλοι καταπληκτικοί επαγγελματίες. Όλοι μου είπαν τα καλύτερα λόγια για το νυφικό μου, τα κεραστικά και φυσικά για την υπέροχη διακόσμηση του Σέργιου. Και το πιο σημαντικό, χωρίς να κουραστώ. Σας προτείνω με 1000. Ευχαριστώ για όλα.»',
  },
  {
    author: 'John',
    lang: 'en',
    quote:
      '“Something like more than happy from you guys! Thank you very much for everything!”',
  },
  {
    author: 'Μαρία και Γιάννης',
    lang: 'el',
    quote:
      '«Ευχαριστούμε πολύ για όλα!!! Δεν θα μπορούσαμε να φανταστούμε τον γάμο μας καλύτερο. Όλα ήταν τέλεια!!!»',
  },
]

const WEDDING_YOUTUBE_CHANNEL =
  'https://www.youtube.com/@weddingskybykomodromosgrou3234'

const WEDDING_ABOUT_CARDS = [
  {
    title: 'Wedding Sky',
    copy:
      'Wedding Sky is a leading company providing luxury weddings and event planning services in Cyprus. Our initiative is based on our love for weddings, passion for creating spectacular affairs, creativity, and commitment to our beloved clientele.',
  },
  {
    title: 'Our approach',
    tagline: 'Precision. Warmth. Discretion.',
    copy:
      'We believe in clear timelines, honest counsel, and calm leadership on the day. Every celebration is built around your story — with vendors, venues, and production aligned to one coherent plan.',
    featured: true,
  },
  {
    title: 'Production & creative',
    copy:
      'From styling and florals to lighting and run-of-show, our producers and partners work to one standard: seamless execution so you can stay present with family and guests.',
  },
  {
    title: 'Our team',
    copy:
      'Planners, coordinators, and specialists across Cyprus — supported by a trusted network of venues, artisans, and hospitality partners who share our commitment to quality.',
  },
] as const

const WEDDING_PILLARS = [
  { label: 'Destination Weddings', href: '#wedding-packages-heading' },
  { label: 'Full-Service Planning', href: '#wedding-about' },
  { label: 'Styling & Production', href: '#wedding-packages-heading' },
  { label: 'Films & Moments', href: WEDDING_YOUTUBE_CHANNEL, external: true },
] as const

const WEDDING_FAQ_ITEMS = [
  {
    title: '1. About My Special Event in Cyprus',
    body: 'My Special Event in Cyprus is a wedding planning and coordination company based in Larnaca. It brings together a team of trusted and experienced wedding professionals, each recognized for their expertise in the industry. The company offers all-in-one wedding packages designed to make the planning process smooth, organized, and stress-free for couples across Cyprus.',
  },
  {
    title: '2. Already Booked Some Services?',
    body: 'Absolutely. Many couples come to us after already arranging some parts of their wedding, whether through other suppliers, friends, or family contacts. We can create a package that includes only the remaining services you still need, ensuring everything works together seamlessly.',
  },
  {
    title: '3. Can I Combine Different Package Options?',
    body: 'Yes, of course. Our packages are flexible and can be adjusted to suit your preferences. You can mix services from different packages or even build a completely new package from scratch based on your own style, needs, and priorities.',
  },
  {
    title: '4. What Happens If I Remove a Service?',
    body: 'The price is always adjusted based on the services included. Removing a service will reduce the overall cost, while adding extra services will increase it accordingly. A valid wedding package must include at least 5 services.',
  },
  {
    title: '5. Why Choose an All-in-One Wedding Package?',
    body: 'An all-in-one package helps you save valuable time, reduce costs, and avoid unnecessary stress. You benefit from professional planning, continuous support, and access to trusted suppliers. Everything is handled in one place, ensuring consistency, quality, and excellent value for money.',
  },
  {
    title: '6. How Does the Company Operate Financially?',
    body: 'My Special Event in Cyprus works through strong partnerships with experienced professionals. These partners provide commission arrangements, meaning clients do not pay anything extra. This structure allows us to offer premium services at competitive prices while maintaining high standards.',
  },
  {
    title: '7. Are Wedding Packages Flexible?',
    body: 'Yes. While we offer ready-made packages, all options can be modified, combined, or fully customized. Each couple can create a package that perfectly matches their vision and requirements.',
  },
  {
    title: '8. Do I Need to Book Everything Through You?',
    body: 'Not at all. You can choose only the services you need. If you already have some arrangements in place, we can build a package using the remaining services. A minimum of 5 services is required to form a complete package.',
  },
  {
    title: '9. Where Do You Provide Wedding Services?',
    body: 'We organize weddings across the entire island of Cyprus, covering all cities and regions.',
  },
  {
    title: '10. Is the Quotation Binding?',
    body: 'No. All quotations are provided without any obligation. The final decision to proceed with our services is entirely up to you.',
  },
  {
    title: '11. Where Is Your Office Located?',
    body: 'Our office is located in Larnaca, Cyprus.',
  },
  {
    title: '12. Is an Office Visit Required for a Quote?',
    body: 'Not necessarily. While we recommend meeting in person at our Larnaca office for a more detailed discussion, consultations can also be arranged via phone, Viber, or Skype. This allows us to understand your needs and provide a personalized offer wherever you are.',
  },
] as const

const NAV_SCROLL_THRESHOLD_PX = 28

export default function WeddingServicesPage() {
  const [navScrolled, setNavScrolled] = useState(false)
  const [faqOpen, setFaqOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0)
  const location = useLocation()
  const pageRef = useReveal()
  const { isBrandDomain } = useSiteContext()
  const servicesSectionHref = isBrandDomain
    ? buildGroupSiteReturnUrl('services')
    : '/#services'

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onScroll = () => {
      setNavScrolled(window.scrollY > NAV_SCROLL_THRESHOLD_PX)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const hash = location.hash
    if (!hash || !hash.startsWith('#wedding-package-')) return
    const id = hash.slice(1)
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
    return () => window.clearTimeout(t)
  }, [location.hash])

  useEffect(() => {
    if (!faqOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setFaqOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [faqOpen])

  return (
    <div className="page wedding-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref={servicesSectionHref}
        className={navScrolled ? 'topbar--scrolled' : undefined}
      />

      <section className="wedding-hero" aria-labelledby="wedding-hero-heading" data-hero-parallax-root>
        <div className="wedding-hero__layers" aria-hidden>
          <div
            className="wedding-hero__bg"
            data-hero-parallax
            style={{
              backgroundImage:
                'url(/images/services/companie-services-cover/wedding-sky.webp)',
            }}
          />
          <div className="wedding-hero__vignette" />
          <div className="wedding-hero__scrim" />
          <div className="wedding-hero__grain" />
        </div>

        <div className="wedding-hero__frame">
          <div className="wedding-hero__brand-block">
            <p className="wedding-hero__located">Located in Cyprus</p>
            <h1 id="wedding-hero-heading" className="wedding-hero__brand">
              Wedding Sky
            </h1>
            <p className="wedding-hero__atelier">
              Luxury Destination Wedding Planning Atelier
            </p>
          </div>

          <div className="wedding-hero__footer-row">
            <div className="wedding-hero__footer-copy">
              <p className="wedding-hero__title">
                Make your dream wedding come true
              </p>
              <p className="wedding-hero__lead">
                From intimate vows to grand celebrations, we design refined experiences in
                Cyprus — guided by taste, precision, and love stories that feel unmistakably
                yours.
              </p>
            </div>
            <div className="wedding-hero__meta">
              <p className="wedding-hero__established">Komodromos Group</p>
              <div className="wedding-hero__actions">
                <a href="#wedding-packages-heading" className="wedding-hero__cta">
                  Explore packages
                </a>
                <Link to="/contact" className="wedding-hero__cta wedding-hero__cta--ghost">
                  Enquire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wedding-pillars" aria-label="Wedding Sky services">
        <div className="container wedding-pillars__inner">
          {WEDDING_PILLARS.map((pillar, index) =>
            'external' in pillar && pillar.external ? (
              <a
                key={pillar.label}
                href={pillar.href}
                className={`wedding-pillars__item reveal reveal-delay-${Math.min(index + 1, 4)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="wedding-pillars__label">{pillar.label}</span>
                <span className="wedding-pillars__plus" aria-hidden>
                  +
                </span>
              </a>
            ) : (
              <a
                key={pillar.label}
                href={pillar.href}
                className={`wedding-pillars__item reveal reveal-delay-${Math.min(index + 1, 4)}`}
              >
                <span className="wedding-pillars__label">{pillar.label}</span>
                <span className="wedding-pillars__plus" aria-hidden>
                  +
                </span>
              </a>
            ),
          )}
        </div>
      </section>

      <a
        href={WEDDING_YOUTUBE_CHANNEL}
        target="_blank"
        rel="noopener noreferrer"
        className="wedding-tv-ad-bar reveal"
      >
        <span className="wedding-tv-ad-bar__shine" aria-hidden />
        <div className="container wedding-tv-ad-bar__inner">
          <span className="wedding-tv-ad-bar__copy">
            Click to visit our YouTube channel — films, ideas & Wedding Sky moments.
          </span>
          <span className="wedding-tv-ad-bar__cta">
            <span className="wedding-tv-ad-bar__cta-yt" aria-hidden>
              <svg
                className="wedding-tv-ad-bar__cta-yt-svg"
                viewBox="0 0 24 24"
                width={22}
                height={22}
                aria-hidden
                focusable="false"
              >
                <path
                  fill="#FF0000"
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
                />
                <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </span>
            Open channel
          </span>
        </div>
      </a>

      <WeddingIntroSocial />
      <WeddingHighlightTiles />

      <section className="wedding-video-section">
        <div className="container">
          <div className="wedding-video-frame reveal-scale">
            <div className="wedding-video-embed">
              <iframe
                title="Wedding Sky — showcase video"
                src="https://www.youtube.com/embed/vKmpAXognnc?start=2&rel=0&modestbranding=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </section>

      <WeddingPackagesSection />

      <section className="wedding-section wedding-knowledge-bar" aria-label="Wedding package FAQ access">
        <div className="container">
          <button
            type="button"
            className="wedding-knowledge-bar__trigger reveal"
            onClick={() => setFaqOpen(true)}
          >
            <span className="wedding-knowledge-bar__line" aria-hidden />
            <span className="wedding-knowledge-bar__text">Everything You Need to Know</span>
            <span className="wedding-knowledge-bar__line" aria-hidden />
          </button>
        </div>
      </section>

      {faqOpen ? (
        <div className="wedding-knowledge-modal" role="dialog" aria-modal="true" aria-labelledby="wedding-knowledge-title">
          <button
            type="button"
            className="wedding-knowledge-modal__backdrop"
            aria-label="Close information popup"
            onClick={() => setFaqOpen(false)}
          />
          <div className="wedding-knowledge-modal__panel">
            <div className="wedding-knowledge-modal__head">
              <h2 id="wedding-knowledge-title">Everything You Need to Know</h2>
              <button
                type="button"
                className="wedding-knowledge-modal__close"
                onClick={() => setFaqOpen(false)}
              >
                Close
              </button>
            </div>
            <div className="wedding-knowledge-modal__list">
              {WEDDING_FAQ_ITEMS.map((item, index) => (
                <article
                  key={item.title}
                  className={`wedding-knowledge-modal__item${
                    openFaqIndex === index ? ' wedding-knowledge-modal__item--open' : ''
                  }`}
                >
                  <button
                    type="button"
                    className="wedding-knowledge-modal__item-toggle"
                    onClick={() =>
                      setOpenFaqIndex((current) => (current === index ? -1 : index))
                    }
                    aria-expanded={openFaqIndex === index}
                    aria-controls={`wedding-knowledge-item-${index}`}
                  >
                    <h3>{item.title}</h3>
                    <span className="wedding-knowledge-modal__item-icon" aria-hidden>
                      {openFaqIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    id={`wedding-knowledge-item-${index}`}
                    className="wedding-knowledge-modal__item-body"
                  >
                    <div className="wedding-knowledge-modal__item-body-inner">
                      <p>{item.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <section className="wedding-section wedding-services-block">
        <div className="container">
          <header className="wedding-section__head reveal">
            <p className="wedding-section__eyebrow">Wedding Sky</p>
            <h2 className="wedding-section__title">Our services</h2>
            <p className="wedding-section__intro wedding-services-block__intro">
              Planning, creative direction, and on-site production under one disciplined
              structure — calibrated to your vision, traditions, and the experience you
              want every guest to remember.
            </p>
          </header>
          <div className="wedding-offerings">
            {WEDDING_OFFERINGS.map((item, index) => (
              <article
                key={item.title}
                className={`wedding-offering-card reveal reveal-delay-${Math.min((index % 3) + 1, 3)}`}
                style={{ ['--offer-i' as string]: String(index) }}
              >
                <div className="wedding-offering-card__media">
                  <img src={item.image} alt="" loading="lazy" decoding="async" />
                  <div className="wedding-offering-card__media-scrim" aria-hidden />
                  <span className="wedding-offering-card__index" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="wedding-offering-card__body">
                  <h3 className="wedding-offering-card__title">{item.title}</h3>
                  <p className="wedding-offering-card__desc">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wedding-section wedding-why">
        <div className="container">
          <header className="wedding-section__head reveal">
            <p className="wedding-section__eyebrow">Our approach</p>
            <h2 className="wedding-section__title wedding-why__title">
              Why couples choose Wedding Sky
            </h2>
            <p className="wedding-section__intro wedding-why__intro">
              Standards we apply to every mandate — whether your celebration is intimate or
              full-scale.
            </p>
          </header>
          <div className="wedding-why__grid">
            {WHY_CHOOSE.map((line, index) => (
              <div
                key={line}
                className={`wedding-why__card reveal reveal-delay-${Math.min(index + 1, 4)}`}
              >
                <span className="wedding-why__num" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="wedding-why__text">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wedding-section wedding-testimonials" aria-labelledby="wedding-testimonials-heading">
        <div className="container">
          <header className="wedding-section__head wedding-testimonials__head reveal">
            <p className="wedding-section__eyebrow">Love stories</p>
            <h2 id="wedding-testimonials-heading" className="wedding-section__title">
              Testimonials
            </h2>
            <p className="wedding-section__intro wedding-testimonials__intro">
              Kind words from couples who trusted Wedding Sky with their day.
            </p>
          </header>
          <div className="wedding-testimonials__grid">
            {TESTIMONIALS.map((t, index) => (
              <blockquote
                key={t.author}
                className={`wedding-testimonial reveal reveal-delay-${Math.min(index + 1, 4)}`}
                lang={t.lang}
                style={{ ['--review-i' as string]: String(index) }}
              >
                <div className="wedding-testimonial__header">
                  <div
                    className="wedding-testimonial__avatar"
                    aria-hidden
                  >
                    <UserCircle2
                      className="wedding-testimonial__avatar-icon"
                      strokeWidth={1.15}
                      size={32}
                    />
                  </div>
                  <span className="wedding-testimonial__deco-quote" aria-hidden>
                    “
                  </span>
                </div>
                <p className="wedding-testimonial__quote">{t.quote}</p>
                <footer className="wedding-testimonial__footer">
                  <span className="wedding-testimonial__author">{t.author}</span>
                  <span className="wedding-testimonial__badge">Verified client</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="wedding-section wedding-about" id="wedding-about">
        <div className="container wedding-about__inner">
          <header className="wedding-about__head reveal">
            <p className="wedding-about__eyebrow">Wedding Sky</p>
            <h2 className="wedding-section__title wedding-about__page-title">About us</h2>
            <span className="wedding-about__rule" aria-hidden />
            <p className="wedding-about__lead">
              Luxury wedding planning in Cyprus — built on taste, precision, and care for every
              couple we guide.
            </p>
          </header>

          <div className="wedding-about__grid">
            {WEDDING_ABOUT_CARDS.map((card, index) => (
              <article
                key={card.title}
                className={`wedding-about__card reveal reveal-delay-${Math.min(index + 1, 4)}${
                  'featured' in card && card.featured ? ' wedding-about__card--featured' : ''
                }`}
                style={{ ['--about-i' as string]: String(index) }}
              >
                <span className="wedding-about__card-index" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="wedding-about__subhead">{card.title}</h3>
                {card.tagline ? (
                  <p className="wedding-about__tagline">{card.tagline}</p>
                ) : null}
                <p className="wedding-about__copy">{card.copy}</p>
              </article>
            ))}
          </div>

          <div className="wedding-about__cta-wrap reveal">
            <Link to="/contact" className="wedding-about__cta">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>

      <section className="wedding-section wedding-visit" aria-labelledby="wedding-visit-heading">
        <div className="container wedding-visit__inner">
          <header className="wedding-section__head wedding-visit__head reveal">
            <p className="wedding-section__eyebrow">Wedding Sky</p>
            <h2 id="wedding-visit-heading" className="wedding-section__title">
              Location &amp; contact
            </h2>
            <p className="wedding-section__intro wedding-visit__intro">
              Visit us in Limassol or reach the Wedding Sky team directly.
            </p>
          </header>
          <div className="wedding-visit__grid">
            <div
              className="wedding-visit__card reveal reveal-delay-1"
              style={{ ['--visit-i' as string]: '0' }}
            >
              <div className="wedding-visit__card-top">
                <span className="wedding-visit__icon" aria-hidden>
                  <MapPin size={20} strokeWidth={1.75} />
                </span>
                <h3 className="wedding-visit__label">Address</h3>
              </div>
              <address className="wedding-visit__address">
                John Kennedy Street, Iris House, 4th Floor, 440A
                <br />
                Neapolis, 3106 Limassol
                <br />
                Cyprus
              </address>
            </div>
            <div
              className="wedding-visit__card reveal reveal-delay-2"
              style={{ ['--visit-i' as string]: '1' }}
            >
              <div className="wedding-visit__card-top">
                <span className="wedding-visit__icon" aria-hidden>
                  <Phone size={20} strokeWidth={1.75} />
                </span>
                <h3 className="wedding-visit__label">Telephone</h3>
              </div>
              <ul className="wedding-visit__list">
                <li>
                  <a href="tel:+35724333305">+357 24 333 305</a>
                </li>
                <li>
                  <a href="tel:+35770002009">+357 7000 2009</a>
                </li>
                <li>
                  <a href="tel:+35770003008">+357 7000 3008</a>
                </li>
              </ul>
              <h3 className="wedding-visit__label wedding-visit__label--spaced">
                Mobile
              </h3>
              <ul className="wedding-visit__list">
                <li>
                  <a href="tel:+35799243100">+357 99 24 3100</a>
                </li>
                <li>
                  <a href="tel:+35799047978">+357 99 04 7978</a>
                </li>
              </ul>
            </div>
            <div
              className="wedding-visit__card reveal reveal-delay-3"
              style={{ ['--visit-i' as string]: '2' }}
            >
              <div className="wedding-visit__card-top">
                <span className="wedding-visit__icon" aria-hidden>
                  <Mail size={20} strokeWidth={1.75} />
                </span>
                <h3 className="wedding-visit__label">E-mail</h3>
              </div>
              <ul className="wedding-visit__list">
                <li>
                  <a href="mailto:info@weddingskycy.com">info@weddingskycy.com</a>
                </li>
                <li>
                  <a href="mailto:weddingskycy@gmail.com">
                    weddingskycy@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="wedding-visit__map-wrap reveal reveal-delay-4">
            <iframe
              title="Wedding Sky — map"
              className="wedding-visit__map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Iris+House+John+Kennedy+Limassol+Cyprus&output=embed"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
