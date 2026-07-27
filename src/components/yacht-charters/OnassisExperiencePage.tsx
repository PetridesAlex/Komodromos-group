import { Fragment, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from '../Footer'
import SiteTopbar from '../SiteTopbar'
import { useReveal } from '../../hooks/useReveal'
import {
  onassisAmenityGroups,
  onassisCategories,
  onassisCta,
  onassisHero,
  onassisIntro,
  onassisListItemImage,
  onassisListItemName,
  onassisStats,
  onassisStorySections,
  onassisVideo,
} from '../../data/onassisExperience'
import OnassisPillarIcon from './OnassisPillarIcon'
import ChristinaOBookModal from './ChristinaOBookModal'
import OnassisCountUp from './OnassisCountUp'

const EASE = [0.16, 1, 0.3, 1] as const

const CONTACT_STATE = {
  serviceInterest: 'VIP Services',
  vipSubService: 'Yacht charter — Christina O',
} as const

export default function OnassisExperiencePage() {
  const navigate = useNavigate()
  const reduceMotion = useReducedMotion()
  const pageRef = useReveal()
  const charterMenuRef = useRef<HTMLDivElement>(null)
  const charterCloseTimer = useRef<number | null>(null)
  const [charterOpen, setCharterOpen] = useState(false)
  const [bookOpen, setBookOpen] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const hasLocalVideo = Boolean(onassisVideo.src)
  const hasYoutube = Boolean(onassisVideo.youtubeId) && !hasLocalVideo
  const videoReady = hasLocalVideo || hasYoutube

  const openCharterMenu = () => {
    if (charterCloseTimer.current != null) {
      window.clearTimeout(charterCloseTimer.current)
      charterCloseTimer.current = null
    }
    setCharterOpen(true)
  }

  const scheduleCloseCharterMenu = () => {
    if (charterCloseTimer.current != null) window.clearTimeout(charterCloseTimer.current)
    charterCloseTimer.current = window.setTimeout(() => {
      setCharterOpen(false)
      charterCloseTimer.current = null
    }, 160)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const previous = root.style.scrollBehavior
    root.style.scrollBehavior = 'smooth'
    return () => {
      root.style.scrollBehavior = previous
    }
  }, [])

  useEffect(() => {
    return () => {
      if (charterCloseTimer.current != null) window.clearTimeout(charterCloseTimer.current)
    }
  }, [])

  useEffect(() => {
    if (!charterOpen) return
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node
      if (charterMenuRef.current && !charterMenuRef.current.contains(target)) {
        setCharterOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCharterOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [charterOpen])

  return (
    <div className="page onassis-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <nav className="onassis-jump" aria-label="Page sections">
        <div className="container onassis-jump__shell">
          <p className="onassis-jump__brand" aria-hidden="true">
            Christina O
          </p>
          <div className="onassis-jump__inner" role="list">
            {onassisStorySections.map((section) => (
              <Fragment key={section.id}>
                <a href={`#${section.id}`} className="onassis-jump__link" role="listitem">
                  {section.navLabel}
                </a>
                {section.id === 'history' ? (
                  <a href="#onassis-film" className="onassis-jump__link" role="listitem">
                    Film
                  </a>
                ) : null}
              </Fragment>
            ))}
            <a href="#onassis-amenities" className="onassis-jump__link" role="listitem">
              Amenities
            </a>
          </div>

          <div
            ref={charterMenuRef}
            className={`onassis-jump__menu${charterOpen ? ' is-open' : ''}`}
            onMouseEnter={openCharterMenu}
            onMouseLeave={scheduleCloseCharterMenu}
          >
            <button
              type="button"
              className="onassis-jump__link onassis-jump__link--accent onassis-jump__menu-trigger"
              aria-expanded={charterOpen}
              aria-haspopup="menu"
              onClick={() => setCharterOpen((open) => !open)}
            >
              Charter
              <span className="onassis-jump__chevron" aria-hidden />
            </button>

            <div className="onassis-jump__dropdown" role="menu" aria-label="Charter options">
              <div className="onassis-jump__dropdown-panel">
                <a
                  href="#onassis-charter"
                  className="onassis-jump__dropdown-item"
                  role="menuitem"
                  onClick={() => setCharterOpen(false)}
                >
                  <span className="onassis-jump__dropdown-label">View charter rates</span>
                  <span className="onassis-jump__dropdown-hint">Weekly pricing &amp; details</span>
                </a>
                <button
                  type="button"
                  className="onassis-jump__dropdown-item onassis-jump__dropdown-item--accent"
                  role="menuitem"
                  onClick={() => {
                    setCharterOpen(false)
                    setBookOpen(true)
                  }}
                >
                  <span className="onassis-jump__dropdown-label">Book Now</span>
                  <span className="onassis-jump__dropdown-hint">Request a private booking</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <ChristinaOBookModal open={bookOpen} onClose={() => setBookOpen(false)} />

      <section className="onassis-hero" aria-label="Christina O flagship yacht" data-hero-parallax-root>
        <div className="onassis-hero__media" data-hero-parallax>
          <motion.img
            className="onassis-hero__img"
            src={onassisHero.image}
            alt=""
            width={2000}
            height={1000}
            sizes="100vw"
            fetchPriority="high"
            decoding="async"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0.01 : 1.2, ease: EASE }}
          />
          <div className="onassis-hero__scrim" aria-hidden />
          <div className="onassis-hero__glow" aria-hidden />
        </div>

        <div className="container onassis-hero__inner">
          <div className="onassis-hero__copy">
            <motion.p
              className="onassis-hero__eyebrow"
              initial={reduceMotion ? false : { opacity: 0, y: 18, letterSpacing: '0.5em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0.32em' }}
              transition={{ duration: reduceMotion ? 0.01 : 0.9, delay: reduceMotion ? 0 : 0.15, ease: EASE }}
            >
              {onassisHero.eyebrow}
            </motion.p>

            <motion.h1
              className="onassis-hero__name"
              initial={reduceMotion ? false : { opacity: 0, y: 36, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: reduceMotion ? 0.01 : 1, delay: reduceMotion ? 0 : 0.28, ease: EASE }}
            >
              {onassisHero.name}
            </motion.h1>

            <motion.div
              className="onassis-hero__rule"
              aria-hidden
              initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.8, delay: reduceMotion ? 0 : 0.48, ease: EASE }}
            />

            <motion.p
              className="onassis-hero__headline"
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.85, delay: reduceMotion ? 0 : 0.55, ease: EASE }}
            >
              {onassisHero.headline}
            </motion.p>

            <motion.p
              className="onassis-hero__lead"
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.85, delay: reduceMotion ? 0 : 0.68, ease: EASE }}
            >
              {onassisHero.lead}
            </motion.p>

            <motion.ul
              className="onassis-hero__facts"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.8, delay: reduceMotion ? 0 : 0.8, ease: EASE }}
            >
              {onassisStats.map((stat, i) => (
                <li key={stat.label} className="onassis-hero__fact">
                  <OnassisCountUp
                    className="onassis-hero__fact-value"
                    value={stat.value}
                    eager
                    delay={reduceMotion ? 0 : 900 + i * 90}
                    duration={1500 + i * 80}
                  />
                  <span className="onassis-hero__fact-label">{stat.label}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              className="onassis-hero__actions"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.8, delay: reduceMotion ? 0 : 0.92, ease: EASE }}
            >
              <a href="#onassis-story" className="onassis-btn onassis-btn--gold">
                Discover her story
              </a>
              <Link to="/contact" className="onassis-btn onassis-btn--ghost" state={CONTACT_STATE}>
                Request a private charter
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#onassis-intro"
          className="onassis-hero__scroll"
          aria-label="Scroll to introduction"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 1.2, duration: 0.6 }}
        >
          <span className="onassis-hero__scroll-line" aria-hidden />
          <span>Explore</span>
        </motion.a>

        <nav className="onassis-hero__nav" aria-label="Previous page">
          <button type="button" className="onassis-hero-back" onClick={() => navigate(-1)}>
            ← Previous page
          </button>
        </nav>
      </section>

      <section id="onassis-intro" className="onassis-intro" aria-label="Introduction">
        <div className="container onassis-intro__inner">
          <div className="onassis-intro__copy reveal reveal-left">
            <p className="onassis-eyebrow">{onassisIntro.eyebrow}</p>
            <h2 className="onassis-section-title">{onassisIntro.title}</h2>
            {onassisIntro.paragraphs.map((p, i) => (
              <p key={i} className={`onassis-intro__text reveal reveal-delay-${Math.min(i + 1, 6)}`}>
                {p}
              </p>
            ))}
            <div className="onassis-intro__actions reveal reveal-delay-4">
              <Link to="/contact" className="onassis-btn onassis-btn--gold" state={CONTACT_STATE}>
                Enquire to charter
              </Link>
              <a href="#onassis-amenities" className="onassis-btn onassis-btn--ghost">
                View amenities
              </a>
            </div>
          </div>
          <dl className="onassis-stats reveal reveal-right reveal-delay-2">
            {onassisStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`onassis-stat reveal reveal-scale reveal-delay-${Math.min(i + 1, 6)}`}
              >
                <dt className="onassis-stat__label">{stat.label}</dt>
                <dd className="onassis-stat__value">
                  <OnassisCountUp
                    value={stat.value}
                    delay={180 + i * 70}
                    duration={1700 + i * 120}
                  />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="onassis-categories" className="onassis-categories" aria-label="Explore Christina O">
        <div className="container">
          <header className="onassis-categories__head reveal">
            <p className="onassis-eyebrow">Explore further</p>
            <h2 className="onassis-section-title onassis-section-title--underline">
              Discover Christina O
            </h2>
            <p className="onassis-categories__lead reveal reveal-delay-2">
              Choose a perspective for a closer look at decks, suites, history and lifestyle.
            </p>
          </header>

          <div className="onassis-cat-grid">
            {onassisCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 48, scale: 0.92, filter: 'blur(12px)' }
                }
                whileInView={
                  reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
                }
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.75,
                  delay: reduceMotion ? 0 : Math.min(i * 0.1, 0.6),
                  ease: EASE,
                }}
              >
                <Link to={`/services/yacht-charters/onassis/${cat.id}`} className="onassis-cat-card">
                  <div className="onassis-cat-card__media">
                    <img
                      className="onassis-cat-card__img"
                      src={cat.cover}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="onassis-cat-card__scrim" aria-hidden />
                  </div>
                  <div className="onassis-cat-card__body">
                    <span className="onassis-cat-card__label">{cat.label}</span>
                    <span className="onassis-cat-card__tagline">{cat.tagline}</span>
                    <span className="onassis-cat-card__cta" aria-hidden>
                      Discover →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div id="onassis-story" className="onassis-story">
        {onassisStorySections.map((section, index) => (
          <Fragment key={section.id}>
          <section
            id={section.id}
            className={`onassis-story-block reveal${index % 2 === 1 ? ' onassis-story-block--alt' : ''}${
              section.id === 'accommodation' ? ' onassis-story-block--suites' : ''
            }`}
            aria-labelledby={`${section.id}-title`}
          >
            <div className="container onassis-story-block__inner">
              <motion.header
                className="onassis-story-block__head"
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.7, ease: EASE }}
              >
                {section.eyebrow ? <p className="onassis-eyebrow">{section.eyebrow}</p> : null}
                <h2
                  id={`${section.id}-title`}
                  className="onassis-section-title onassis-section-title--underline onassis-section-title--left"
                >
                  {section.title}
                </h2>
              </motion.header>

              <div className="onassis-story-block__body">
                {section.paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    className="onassis-story-block__text"
                    initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: reduceMotion ? 0.01 : 0.65,
                      delay: reduceMotion ? 0 : 0.08 + i * 0.08,
                      ease: EASE,
                    }}
                  >
                    {p}
                  </motion.p>
                ))}

                {section.quote ? (
                  <motion.blockquote
                    className="onassis-quote"
                    initial={reduceMotion ? false : { opacity: 0, x: -18 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: reduceMotion ? 0.01 : 0.7, delay: 0.12, ease: EASE }}
                  >
                    <p className="onassis-quote__text">“{section.quote.text}”</p>
                    {section.quote.attribution ? (
                      <footer className="onassis-quote__attr">— {section.quote.attribution}</footer>
                    ) : null}
                  </motion.blockquote>
                ) : null}

                {section.lists?.some(
                  (list) => list.presentation !== 'tiles' && list.presentation !== 'roster',
                ) ? (
                  <div className="onassis-list-grid">
                    {section.lists
                      .filter(
                        (list) =>
                          list.presentation !== 'tiles' && list.presentation !== 'roster',
                      )
                      .map((list) => (
                        <motion.div
                          key={list.title ?? list.items.map(onassisListItemName).join('-')}
                          className="onassis-list-card"
                          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: reduceMotion ? 0.01 : 0.65, ease: EASE }}
                        >
                          {list.title ? <h3 className="onassis-list-card__title">{list.title}</h3> : null}
                          <ul className="onassis-checklist">
                            {list.items.map((item) => {
                              const name = onassisListItemName(item)
                              return <li key={name}>{name}</li>
                            })}
                          </ul>
                        </motion.div>
                      ))}
                  </div>
                ) : null}

                {section.lists?.some((list) => list.presentation === 'roster') ? (
                  <motion.div
                    className="onassis-roster"
                    initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: reduceMotion ? 0.01 : 0.75, ease: EASE }}
                  >
                    <div className="onassis-roster__head">
                      <p className="onassis-roster__eyebrow">Distinguished company</p>
                      <h3 className="onassis-roster__title">Icons who stepped aboard</h3>
                    </div>
                    <div className="onassis-roster__columns">
                      {section.lists
                        .filter((list) => list.presentation === 'roster')
                        .map((list, colIndex) => (
                          <div
                            key={list.title ?? list.items.map(onassisListItemName).join('-')}
                            className="onassis-roster__column"
                          >
                            <div className="onassis-roster__column-head">
                              <span className="onassis-roster__column-index" aria-hidden>
                                {String(colIndex + 1).padStart(2, '0')}
                              </span>
                              {list.title ? (
                                <h4 className="onassis-roster__column-title">{list.title}</h4>
                              ) : null}
                            </div>
                            <ul className="onassis-roster__names">
                              {list.items.map((item, itemIndex) => {
                                const name = onassisListItemName(item)
                                return (
                                  <motion.li
                                    key={name}
                                    className="onassis-roster__name"
                                    initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                                    whileInView={
                                      reduceMotion ? undefined : { opacity: 1, x: 0 }
                                    }
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{
                                      duration: reduceMotion ? 0.01 : 0.45,
                                      delay: reduceMotion
                                        ? 0
                                        : Math.min(colIndex * 0.08 + itemIndex * 0.05, 0.55),
                                      ease: EASE,
                                    }}
                                  >
                                    <span className="onassis-roster__name-index" aria-hidden>
                                      {String(itemIndex + 1).padStart(2, '0')}
                                    </span>
                                    <span className="onassis-roster__name-text">{name}</span>
                                  </motion.li>
                                )
                              })}
                            </ul>
                          </div>
                        ))}
                    </div>
                  </motion.div>
                ) : null}
              </div>
            </div>

            {section.lists
              ?.filter((list) => list.presentation === 'tiles')
              .map((list) => (
                <motion.div
                  key={list.title ?? list.items.map(onassisListItemName).join('-')}
                  className="onassis-island-board onassis-island-board--bleed"
                  initial={reduceMotion ? false : { opacity: 0, y: 36 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: reduceMotion ? 0.01 : 0.75, ease: EASE }}
                >
                  {list.title ? (
                    <div className="container onassis-island-board__head">
                      <p className="onassis-island-board__eyebrow">Named suites</p>
                      <h3 className="onassis-island-board__title">{list.title}</h3>
                    </div>
                  ) : null}
                  <ul className="onassis-island-board__grid">
                    {list.items.map((item, itemIndex) => {
                      const name = onassisListItemName(item)
                      const image = onassisListItemImage(item)
                      return (
                        <motion.li
                          key={name}
                          className="onassis-island-tile"
                          aria-label={`${name} stateroom`}
                          initial={
                            reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }
                          }
                          whileInView={
                            reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }
                          }
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{
                            duration: reduceMotion ? 0.01 : 0.6,
                            delay: reduceMotion ? 0 : Math.min(itemIndex * 0.06, 0.42),
                            ease: EASE,
                          }}
                          whileHover={
                            reduceMotion
                              ? undefined
                              : {
                                  y: -6,
                                  transition: { type: 'spring', stiffness: 380, damping: 24 },
                                }
                          }
                        >
                          {image ? (
                            <div className="onassis-island-tile__media">
                              <img
                                src={image}
                                alt=""
                                className="onassis-island-tile__img"
                                loading="lazy"
                                decoding="async"
                              />
                              <span className="onassis-island-tile__scrim" aria-hidden />
                            </div>
                          ) : null}
                          <div className="onassis-island-tile__meta">
                            <span className="onassis-island-tile__index" aria-hidden>
                              {String(itemIndex + 1).padStart(2, '0')}
                            </span>
                            <span className="onassis-island-tile__name">{name}</span>
                            <span className="onassis-island-tile__caption">Stateroom</span>
                          </div>
                        </motion.li>
                      )
                    })}
                  </ul>
                </motion.div>
              ))}

            {section.highlights?.length ? (
              <div className="container onassis-story-block__highlights">
                <ul className="onassis-pillars">
                  {section.highlights.map((item, itemIndex) => (
                    <motion.li
                      key={item.text}
                      className="onassis-pillars__item"
                      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{
                        duration: reduceMotion ? 0.01 : 0.55,
                        delay: reduceMotion ? 0 : Math.min(itemIndex * 0.06, 0.36),
                        ease: EASE,
                      }}
                    >
                      <span className="onassis-pillars__icon" aria-hidden>
                        <OnassisPillarIcon name={item.icon} />
                      </span>
                      <span className="onassis-pillars__text">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>

          {section.id === 'history' ? (
            <section
              id="onassis-film"
              className="onassis-film reveal"
              aria-labelledby="onassis-film-title"
            >
              <div className="container onassis-film__inner">
                <header className="onassis-film__head">
                  <p className="onassis-eyebrow">{onassisVideo.eyebrow}</p>
                  <h2
                    id="onassis-film-title"
                    className="onassis-section-title onassis-section-title--underline onassis-section-title--left"
                  >
                    {onassisVideo.title}
                  </h2>
                  <p className="onassis-film__lead">{onassisVideo.lead}</p>
                </header>

                <div className="onassis-film__stage">
                  <div className="onassis-film__frame">
                    {hasLocalVideo && videoPlaying ? (
                      <video
                        ref={videoRef}
                        className="onassis-film__video"
                        src={onassisVideo.src}
                        poster={onassisVideo.poster}
                        controls
                        autoPlay
                        playsInline
                      />
                    ) : hasYoutube && videoPlaying ? (
                      <iframe
                        className="onassis-film__video"
                        src={`https://www.youtube.com/embed/${onassisVideo.youtubeId}?autoplay=1&rel=0`}
                        title="Christina O film"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <img
                          className="onassis-film__poster"
                          src={onassisVideo.poster}
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="onassis-film__scrim" aria-hidden />
                        <div className="onassis-film__vignette" aria-hidden />

                        {videoReady ? (
                          <button
                            type="button"
                            className="onassis-film__play"
                            onClick={() => setVideoPlaying(true)}
                            aria-label="Play Christina O film"
                          >
                            <span className="onassis-film__play-icon" aria-hidden />
                            <span className="onassis-film__play-label">Play film</span>
                          </button>
                        ) : (
                          <div className="onassis-film__soon" role="status">
                            <span className="onassis-film__play-icon onassis-film__play-icon--soon" aria-hidden />
                            <p className="onassis-film__soon-label">{onassisVideo.ctaLabel}</p>
                            <p className="onassis-film__soon-hint">
                              Our cinematic film of Christina O will appear here shortly.
                            </p>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <div className="onassis-film__meta" aria-hidden>
                    <span>Christina O</span>
                    <span className="onassis-film__meta-dot" />
                    <span>Private charter film</span>
                  </div>
                </div>
              </div>
            </section>
          ) : null}
          </Fragment>
        ))}
      </div>

      <section id="onassis-amenities" className="onassis-amenities" aria-label="Amenities and capacity">
        <div className="container">
          <header className="onassis-amenities__head reveal">
            <p className="onassis-eyebrow">Practical details</p>
            <h2 className="onassis-section-title onassis-section-title--underline">
              Capacity, comfort &amp; adventure
            </h2>
            <p className="onassis-amenities__lead reveal reveal-delay-2">
              Everything arranged for private charters, landmark celebrations, and exclusive events at
              anchor.
            </p>
          </header>

          <div className="onassis-amenity-grid">
            {onassisAmenityGroups.map((group, i) => (
              <article
                key={group.id}
                className={`onassis-amenity-card reveal reveal-scale reveal-delay-${Math.min(i + 1, 6)}`}
              >
                <div className="onassis-amenity-card__top">
                  <span className="onassis-amenity-card__index" aria-hidden>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="onassis-amenity-card__title">{group.title}</h3>
                </div>
                {group.lead ? <p className="onassis-amenity-card__lead">{group.lead}</p> : null}
                <ul className="onassis-checklist onassis-amenity-card__list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {group.nested?.map((nested) => (
                  <div
                    key={nested.title ?? nested.items.map(onassisListItemName).join('-')}
                    className="onassis-amenity-card__nested"
                  >
                    {nested.title ? (
                      <h4 className="onassis-amenity-card__nested-title">{nested.title}</h4>
                    ) : null}
                    <ul className="onassis-checklist onassis-checklist--compact onassis-amenity-card__list">
                      {nested.items.map((item) => {
                        const name = onassisListItemName(item)
                        return <li key={name}>{name}</li>
                      })}
                    </ul>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="onassis-charter" className="onassis-cta" aria-label="Enquire">
        <div className="container onassis-cta__inner reveal reveal-scale">
          <p className="onassis-eyebrow">Private charter</p>
          <h2 className="onassis-cta__title">{onassisCta.title}</h2>
          <p className="onassis-cta__rate reveal reveal-delay-2">{onassisCta.rate}</p>
          <p className="onassis-cta__rate-note reveal reveal-delay-3">{onassisCta.rateNote}</p>
          <p className="onassis-cta__text reveal reveal-delay-3">{onassisCta.text}</p>
          <div className="onassis-cta__actions reveal reveal-delay-4">
            <Link to="/contact" className="onassis-btn onassis-btn--gold" state={CONTACT_STATE}>
              Request your charter
            </Link>
            <Link to="/services/yacht-charters" className="onassis-btn onassis-btn--ghost">
              ← Back to fleet
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
