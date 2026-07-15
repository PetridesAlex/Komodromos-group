import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Phone } from 'lucide-react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'

const BC_IMG_BASE = '/images/services/business-coosultant'
const SERVICE_INTEREST = "Business Consultant's"
const EASE = [0.22, 1, 0.36, 1] as const
const HERO_STAGGER = 0.11

const bcHeroActionsVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 1.05,
    },
  },
} as const

const bcHeroActionVariants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.58, ease: EASE },
  },
} as const

const MotionLink = motion.create(Link)

function bcImage(filename: string) {
  // Encode spaces only — full encodeURIComponent breaks filenames with "&"
  return `${BC_IMG_BASE}/${filename.replace(/ /g, '%20')}`
}

const IMAGES = {
  strategic: bcImage('Strategic Business Consulting.webp'),
  management: bcImage('Management Consulting .webp'),
  financial: bcImage('Financial Services Consulting.webp'),
  accountants: bcImage('Accountant & Auditors.webp'),
  hr: bcImage('Human Resources Consulting.webp'),
  digital: bcImage('Digital Consulting.webp'),
} as const

const CONSULTING_SERVICES = [
  {
    index: '01',
    title: 'Strategic Business Consulting',
    text:
      'Long-range vision, growth roadmaps, and commercial strategy aligned to your ambitions and market reality.',
    image: IMAGES.strategic,
    imageAlt: 'Strategic business consulting session',
  },
  {
    index: '02',
    title: 'Management Consulting',
    text:
      'Organisation design, leadership capability, and operational transformation that scales with your business.',
    image: IMAGES.management,
    imageAlt: 'Management consulting and leadership advisory',
  },
  {
    index: '03',
    title: 'Financial Services Consulting',
    text:
      'Financial planning, capital structure, and investment guidance to strengthen commercial decision-making.',
    image: IMAGES.financial,
    imageAlt: 'Financial services consulting',
  },
  {
    index: '04',
    title: 'Accountant & Auditors',
    text:
      'Statutory accounts, audit readiness, and compliance support delivered with precision and clarity.',
    image: IMAGES.accountants,
    imageAlt: 'Accounting and audit advisory',
  },
  {
    index: '05',
    title: 'Human Resources Consulting',
    text:
      'People strategy, culture, and performance programmes that align talent with business outcomes.',
    image: IMAGES.hr,
    imageAlt: 'Human resources consulting',
    href: '/services/hr',
  },
  {
    index: '06',
    title: 'Digital Consulting',
    text:
      'Technology enablement and digital transformation to modernise operations and unlock efficiency.',
    image: IMAGES.digital,
    imageAlt: 'Digital consulting and transformation',
  },
] as const

const ABOUT_BLOCKS = [
  {
    index: '01',
    theme: 'Our commitment',
    variant: 'lead',
    text:
      'At Komodromos Group of Companies, we are committed to helping entrepreneurs, business owners, investors, and organisations achieve sustainable growth through strategic expertise, innovation, and practical business solutions. Our mission is to empower ambitious leaders with the knowledge, guidance, and confidence required to build stronger businesses and create lasting value.',
  },
  {
    index: '02',
    theme: 'Strategy in action',
    variant: 'body',
    text:
      'Our approach combines strategic planning with hands-on execution, ensuring that every recommendation is aligned with your commercial objectives and long-term vision. We work closely with our clients to identify opportunities, overcome challenges, optimise operations, and implement effective strategies that deliver measurable business results.',
  },
  {
    index: '03',
    theme: 'Tailored engagement',
    variant: 'body',
    text:
      'Every engagement is tailored to the unique needs of each client. By combining commercial insight, industry expertise, and data-driven decision-making, we provide practical solutions that enhance operational efficiency, improve profitability, strengthen market positioning, and support sustainable business expansion. Our experienced consultants work alongside you throughout the journey, providing the guidance, accountability, and expertise needed to transform ambitious goals into tangible achievements.',
  },
  {
    index: '04',
    theme: 'Trusted partnership',
    variant: 'highlight',
    text:
      'Built on a foundation of professionalism, integrity, and excellence, Komodromos Group of Companies has established itself as a trusted strategic partner for businesses seeking long-term success. We believe that every successful organisation begins with a clear vision, decisive leadership, and a well-defined strategy. Our commitment is to help our clients navigate today\'s competitive business environment with confidence, make informed decisions, and unlock new opportunities for growth.',
  },
  {
    index: '05',
    theme: 'Your next chapter',
    variant: 'close',
    text:
      'Whether you are launching a new venture, expanding internationally, restructuring your organisation, or accelerating the growth of an established business, Komodromos Group of Companies delivers bespoke consulting solutions designed to support your ambitions and create lasting commercial value.',
  },
] as const

function scrollToId(id: string) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById(id)?.scrollIntoView({
    behavior: reduce ? 'auto' : 'smooth',
    block: 'start',
  })
}

type HeroBlurLineProps = {
  text: string
  baseDelay: number
  reducedMotion: boolean
  className?: string
}

function HeroBlurLine({ text, baseDelay, reducedMotion, className = '' }: HeroBlurLineProps) {
  const words = text.split(' ')

  if (reducedMotion) {
    return <span className={className}>{text}</span>
  }

  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={`${word}-${wordIndex}`}
          className="bc-hero__title-word"
          initial={{ opacity: 0, filter: 'blur(12px)', y: -18 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{
            duration: 0.62,
            delay: baseDelay + wordIndex * HERO_STAGGER,
            ease: EASE,
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

function HeroTitle({ reducedMotion }: { reducedMotion: boolean }) {
  if (reducedMotion) {
    return (
      <>
        <span className="bc-hero__title-line bc-hero__title-line--primary">
          Unlock Sustainable
        </span>
        <span className="bc-hero__title-line bc-hero__title-line--accent">Business Growth</span>
      </>
    )
  }

  return (
    <>
      <span className="bc-hero__title-line bc-hero__title-line--primary">
        <HeroBlurLine text="Unlock Sustainable" baseDelay={0.22} reducedMotion={reducedMotion} />
      </span>
      <span className="bc-hero__title-line bc-hero__title-line--accent">
        <HeroBlurLine
          text="Business Growth"
          baseDelay={0.22 + 2 * HERO_STAGGER + 0.12}
          reducedMotion={reducedMotion}
        />
      </span>
    </>
  )
}

function heroRevealProps(reducedMotion: boolean, delay: number) {
  if (reducedMotion) {
    return {}
  }

  return {
    initial: { opacity: 0, y: -20, filter: 'blur(8px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.62, delay, ease: EASE },
  }
}

type ServiceCardProps = {
  service: (typeof CONSULTING_SERVICES)[number]
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const isLinked = 'href' in service && service.href

  const body = (
    <>
      <div className="bc-service-card__media">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="bc-service-card__img"
          loading="lazy"
          decoding="async"
        />
        <span className="bc-service-card__shade" aria-hidden />
        <span className="bc-service-card__index" aria-hidden>
          {service.index}
        </span>
      </div>
      <div className="bc-service-card__body">
        <header className="bc-service-card__body-head">
          <span className="bc-service-card__body-rule" aria-hidden />
          <h3 className="bc-service-card__body-title">{service.title}</h3>
        </header>
        <p className="bc-service-card__text">{service.text}</p>
        {isLinked ? (
          <footer className="bc-service-card__body-foot">
            <span className="bc-service-card__cta bc-service-card__cta--link">
              Explore programme
              <ArrowRight className="bc-service-card__cta-icon" aria-hidden />
            </span>
          </footer>
        ) : null}
      </div>
    </>
  )

  const className = `bc-service-card reveal reveal-delay-${Math.min(index + 1, 4)}`

  if (isLinked) {
    return (
      <Link to={service.href} className={`${className} bc-service-card--linked`}>
        {body}
      </Link>
    )
  }

  return <article className={className}>{body}</article>
}

export default function BusinessConsultingPage() {
  const pageRef = useReveal()
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page consulting-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <section className="bc-hero" aria-labelledby="bc-hero-title" data-hero-parallax-root>
        <motion.div
          className="bc-hero__bg"
          style={{ backgroundImage: `url(${IMAGES.strategic})` }}
          aria-hidden
          data-hero-parallax
          initial={reducedMotion ? false : { scale: 1.08 }}
          animate={reducedMotion ? undefined : { scale: [1.08, 1.02, 1.08] }}
          transition={
            reducedMotion ? undefined : { duration: 20, repeat: Infinity, ease: 'easeInOut' }
          }
        />
        <div className="bc-hero__scrim" aria-hidden />
        <div className="bc-hero__glow bc-hero__glow--gold" aria-hidden />
        <div className="bc-hero__glow bc-hero__glow--blue" aria-hidden />

        <div className="bc-hero__shell">
          <div className="bc-hero__inner">
            <motion.p className="bc-hero__eyebrow" {...heroRevealProps(!!reducedMotion, 0.08)}>
              Komodromos Group — Business Consulting
            </motion.p>

            <h1 id="bc-hero-title" className="bc-hero__title">
              <HeroTitle reducedMotion={!!reducedMotion} />
            </h1>

            <motion.p
              className="bc-hero__subtitle"
              {...heroRevealProps(!!reducedMotion, 0.22 + 4 * HERO_STAGGER + 0.2)}
            >
              Helping Ambitious Businesses Scale with Confidence
            </motion.p>

            <motion.span
              className="bc-hero__rule"
              aria-hidden
              initial={reducedMotion ? false : { scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                duration: 0.72,
                delay: 0.22 + 4 * HERO_STAGGER + 0.34,
                ease: EASE,
              }}
            />

            <motion.p
              className="bc-hero__lead"
              {...heroRevealProps(!!reducedMotion, 0.22 + 4 * HERO_STAGGER + 0.48)}
            >
              We partner with entrepreneurs and business owners to transform growing companies
              into efficient, scalable, and highly profitable organisations. Through strategic
              guidance, proven methodologies, and tailored solutions, we help you overcome growth
              barriers, optimise performance, and build a business designed for long-term success.
            </motion.p>

            <motion.div
              className="bc-hero__actions"
              variants={bcHeroActionsVariants}
              initial={reducedMotion ? false : 'hidden'}
              animate={reducedMotion ? undefined : 'visible'}
            >
              <MotionLink
                to="/contact"
                state={{ serviceInterest: SERVICE_INTEREST }}
                className="bc-btn bc-btn--primary"
                variants={bcHeroActionVariants}
              >
                <span className="bc-btn__label">Schedule consultation</span>
                <span className="bc-btn__title">Complimentary strategy session</span>
              </MotionLink>
              <motion.button
                type="button"
                className="bc-btn bc-btn--secondary"
                variants={bcHeroActionVariants}
                onClick={() => scrollToId('bc-services')}
              >
                <span className="bc-btn__label">Explore</span>
                <span className="bc-btn__title">Discover our services</span>
                <ArrowRight className="bc-btn__icon" aria-hidden />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bc-section bc-mission" aria-labelledby="bc-mission-title">
        <div className="container bc-mission__grid">
          <div className="bc-mission__copy">
            <p className="bc-section__eyebrow reveal">Our mission</p>
            <h2 id="bc-mission-title" className="bc-section__title reveal reveal-delay-1">
              Empowering sustainable growth
            </h2>
            <p className="bc-section__lead reveal reveal-delay-2">
              At Komodromos Group of Companies, our mission is to empower businesses,
              entrepreneurs, and investors with strategic solutions that drive sustainable
              growth, innovation, and long-term success.
            </p>
            <div className="bc-mission__body">
              <p className="bc-section__text reveal reveal-delay-2">
                We work alongside our clients to overcome challenges, identify new
                opportunities, and create lasting value through expert guidance, practical
                expertise, and a commitment to excellence.
              </p>
              <p className="bc-section__text bc-section__text--emphasis reveal reveal-delay-3">
                Built on integrity, professionalism, and results, we are dedicated to
                delivering trusted business solutions while creating a positive impact for
                our clients, partners, and the communities we serve.
              </p>
            </div>
          </div>
          <div className="bc-mission__visual reveal-right">
            <div className="bc-mission__frame">
              <img
                src={IMAGES.management}
                alt="Management consulting and organisational leadership"
                className="bc-mission__img"
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="bc-mission__badge" aria-hidden>
              Management consulting
            </span>
          </div>
        </div>
      </section>

      <section
        id="bc-services"
        className="bc-section bc-services scroll-mt-28"
        aria-labelledby="bc-services-title"
      >
        <div className="container">
          <header className="bc-services__head">
            <p className="bc-section__eyebrow reveal">Discover our services</p>
            <h2 id="bc-services-title" className="bc-section__title reveal reveal-delay-1">
              Integrated consulting across your business
            </h2>
            <p className="bc-section__intro reveal reveal-delay-2">
              From strategy and finance to people and digital — specialist advisory
              designed to work together as your organisation grows.
            </p>
          </header>
        </div>
        <div className="bc-services__grid-wrap">
          <div className="bc-services__grid" role="list">
            {CONSULTING_SERVICES.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="bc-about"
        className="bc-section bc-about scroll-mt-28"
        aria-labelledby="bc-about-title"
      >
        <div className="container bc-about__inner">
          <header className="bc-about__head reveal">
            <p className="bc-section__eyebrow">About us</p>
            <h2 id="bc-about-title" className="bc-section__title">
              About Komodromos Group of Companies
            </h2>
          </header>
          <div className="bc-about__grid">
            <div className="bc-about__media reveal-left">
              <div className="bc-about__frame">
                <img
                  src={IMAGES.financial}
                  alt="Financial services consulting and strategic advisory"
                  className="bc-about__img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="bc-about__caption" aria-hidden>
                Financial services consulting
              </span>
            </div>
            <div className="bc-about__copy bc-about__prose">
              {ABOUT_BLOCKS.map((block, index) => (
                <article
                  key={block.index}
                  className={`bc-about__block bc-about__block--${block.variant} reveal reveal-delay-${Math.min(index + 1, 4)}`}
                >
                  <header className="bc-about__block-head">
                    <span className="bc-about__block-index" aria-hidden>
                      {block.index}
                    </span>
                    <span className="bc-about__block-rule" aria-hidden />
                    <span className="bc-about__block-theme">{block.theme}</span>
                  </header>
                  <p className="bc-about__block-text">{block.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bc-section bc-callback" aria-labelledby="bc-callback-title">
        <div className="container">
          <div className="bc-split-panel reveal">
            <div className="bc-split-panel__media">
              <img
                src={IMAGES.digital}
                alt="Digital consulting and business transformation"
                className="bc-split-panel__img"
                loading="lazy"
                decoding="async"
              />
              <span className="bc-split-panel__media-label" aria-hidden>
                Digital consulting
              </span>
            </div>
            <div className="bc-split-panel__copy">
              <div className="bc-callback__icon-wrap" aria-hidden>
                <Phone strokeWidth={1.75} />
              </div>
              <p className="bc-callback__eyebrow">Not ready for a strategy consultation?</p>
              <h2 id="bc-callback-title" className="bc-callback__title">
                Request a complimentary call back
              </h2>
              <p className="bc-callback__text">
                Have questions or want to learn more? Speak with one of our experienced
                consultants to discuss your business goals and discover how Komodromos Group
                of Companies can help you achieve sustainable growth and long-term success.
              </p>
              <Link
                to="/contact"
                state={{ serviceInterest: SERVICE_INTEREST, enquiryType: 'callback' }}
                className="bc-btn bc-btn--primary bc-btn--inline"
              >
                <span className="bc-btn__label">Get started</span>
                <span className="bc-btn__title">Request your complimentary call back</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="bc-contact"
        className="bc-section bc-contact scroll-mt-28"
        aria-labelledby="bc-contact-title"
      >
        <div className="container bc-contact__inner">
          <div className="bc-split-panel bc-split-panel--reverse reveal">
            <div className="bc-split-panel__media">
              <img
                src={IMAGES.accountants}
                alt="Accountant and auditors — professional advisory"
                className="bc-split-panel__img"
                loading="lazy"
                decoding="async"
              />
              <span className="bc-split-panel__media-label" aria-hidden>
                Accountant &amp; auditors
              </span>
            </div>
            <div className="bc-split-panel__copy bc-contact__panel">
              <p className="bc-section__eyebrow">Contact us</p>
              <h2 id="bc-contact-title" className="bc-section__title">
                General enquiries
              </h2>
              <p className="bc-section__lead">
                Whether you&apos;re looking to grow your business, explore new opportunities, or
                discuss your next strategic move, Komodromos Group of Companies is here to help.
              </p>
              <p className="bc-section__text">
                Our experienced team is ready to provide expert guidance and tailored business
                solutions to support your goals. Get in touch today for more information.
              </p>
              <div className="bc-contact__actions">
                <Link
                  to="/contact"
                  state={{ serviceInterest: SERVICE_INTEREST }}
                  className="bc-btn bc-btn--primary bc-btn--inline"
                >
                  <span className="bc-btn__label">Contact</span>
                  <span className="bc-btn__title">Get in touch today</span>
                </Link>
                <div className="bc-contact__phones">
                  <div className="bc-contact__phones-group">
                    <p className="bc-contact__phones-label">Direct lines</p>
                    <div className="bc-contact__phones-row">
                      <a href="tel:+35724333305" className="bc-contact__phone-chip">
                        <Phone className="bc-contact__phone-chip-icon" aria-hidden size={16} strokeWidth={2.25} />
                        <span>+357 2433 3305</span>
                      </a>
                      <a href="tel:+35724333306" className="bc-contact__phone-chip">
                        <Phone className="bc-contact__phone-chip-icon" aria-hidden size={16} strokeWidth={2.25} />
                        <span>+357 2433 3306</span>
                      </a>
                      <a href="tel:+35724428111" className="bc-contact__phone-chip">
                        <Phone className="bc-contact__phone-chip-icon" aria-hidden size={16} strokeWidth={2.25} />
                        <span>+357 2442 8111</span>
                      </a>
                    </div>
                  </div>
                  <div className="bc-contact__phones-divider" aria-hidden />
                  <div className="bc-contact__phones-group">
                    <p className="bc-contact__phones-label">Alternative numbers</p>
                    <div className="bc-contact__phones-row">
                      <a href="tel:+35796000336" className="bc-contact__phone-chip">
                        <Phone className="bc-contact__phone-chip-icon" aria-hidden size={16} strokeWidth={2.25} />
                        <span>+357 9600 0336</span>
                      </a>
                      <a href="tel:+35796000236" className="bc-contact__phone-chip">
                        <Phone className="bc-contact__phone-chip-icon" aria-hidden size={16} strokeWidth={2.25} />
                        <span>+357 9600 0236</span>
                      </a>
                      <a href="tel:+35799243100" className="bc-contact__phone-chip">
                        <Phone className="bc-contact__phone-chip-icon" aria-hidden size={16} strokeWidth={2.25} />
                        <span>+357 9924 3100</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
