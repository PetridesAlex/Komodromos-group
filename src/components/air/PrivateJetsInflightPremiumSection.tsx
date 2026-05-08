import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { airJetsInFlight, airPrivateJetInflightPremium } from '../../data/airServicesPage'

const EASE = [0.16, 1, 0.3, 1] as const
const INTRO_IMG = '/images/services/vip-service/air-services/private-jet-introduction'
const STORY_IMAGES = [
  { src: `${INTRO_IMG}/private-jet-introduction-1.webp`, alt: 'Private jet introduction visual 1' },
  { src: `${INTRO_IMG}/private-jet-introduction-2.webp`, alt: 'Private jet introduction visual 2' },
  { src: `${INTRO_IMG}/private-jet-introduction-3.webp`, alt: 'Private jet introduction visual 3' },
  { src: `${INTRO_IMG}/private-jet-introduction-4.webp`, alt: 'Private jet introduction visual 4' },
  { src: `${INTRO_IMG}/private-jet-introduction-6.webp`, alt: 'Private jet introduction visual 6' },
  { src: `${INTRO_IMG}/private-jet-introduction-7.webp`, alt: 'Private jet introduction visual 7' },
  { src: `${INTRO_IMG}/private-jet-introduction-8.webp`, alt: 'Private jet introduction visual 8' },
] as const

type Props = {
  lightPath: string
}

function buildContactMessage(values: {
  travelDate: string
  departure: string
  destination: string
  passengers: string
  message: string
}) {
  const lines = [
    'Private Jet In-Flight Services — enquiry',
    '',
    `Preferred travel date: ${values.travelDate || '—'}`,
    `Departure location: ${values.departure || '—'}`,
    `Destination: ${values.destination || '—'}`,
    `Number of passengers: ${values.passengers || '—'}`,
    '',
    'Message / special requests:',
    values.message.trim() || '—',
  ]
  return lines.join('\n')
}

export default function PrivateJetsInflightPremiumSection({ lightPath }: Props) {
  const reduceMotion = useReducedMotion()
  const navigate = useNavigate()
  const d = airPrivateJetInflightPremium
  const story = airJetsInFlight.sections

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [travelDate, setTravelDate] = useState('')
  const [departure, setDeparture] = useState('')
  const [destination, setDestination] = useState('')
  const [passengers, setPassengers] = useState('')
  const [message, setMessage] = useState('')

  const scrollToEnquiry = useCallback(() => {
    const el = document.getElementById('air-pj-enquiry')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }, [])

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = buildContactMessage({ travelDate, departure, destination, passengers, message })
    navigate('/contact', {
      state: {
        serviceInterest: 'VIP Services',
        vipSubService: 'Private Jet In-Flight Services',
        contactPrefill: {
          name: fullName,
          email,
          phone,
          service: 'VIP Services',
          message: body,
        },
      },
    })
  }

  return (
    <div className="air-pjp" id="air-jets-inflight">
      <div className="air-pjp__ambient" aria-hidden>
        <span className="air-pjp__glow air-pjp__glow--1" />
        <span className="air-pjp__glow air-pjp__glow--2" />
      </div>

      <section className="air-pjp__masthead" aria-labelledby="air-pjp-title">
        <div className="container air-pjp__masthead-inner">
          <motion.p
            className="air-pjp__eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: EASE }}
          >
            {d.eyebrow}
          </motion.p>
          <motion.h1
            id="air-pjp-title"
            className="air-pjp__title"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.06, ease: EASE }}
          >
            {d.title}
          </motion.h1>
          <motion.p
            className="air-pjp__intro"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.12, ease: EASE }}
          >
            {d.intro}
          </motion.p>
          <motion.blockquote
            className="air-pjp__quote"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.58, delay: reduceMotion ? 0 : 0.2, ease: EASE }}
          >
            <p className="air-pjp__quote-text">{d.quote}</p>
          </motion.blockquote>
        </div>
      </section>

      <section className="air-pjp__services" aria-label="In-flight services">
        <div className="container">
          <motion.div
            className="air-pjp__world"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: reduceMotion ? 0 : 0.62, ease: EASE }}
          >
            <h2 className="air-pjp__world-title">World-class fleet expression</h2>
            <p className="air-pjp__world-lead">
              Presented in the same editorial rhythm as the light-aircraft storytelling blocks, pairing premium
              narrative copy with image-ready visual frames.
            </p>
            <ul className="air-pjp__story-grid">
              {story.map((section, i) => {
                const firstSegment = section.segments[0] as { image?: { src: string; alt: string } } | undefined
                const fallbackImage = firstSegment?.image
                const cardImage = STORY_IMAGES[i] ?? fallbackImage

                return (
                  <motion.li
                    key={section.title}
                    className="air-pjp__story-card"
                    initial={reduceMotion ? false : { opacity: 0, y: 38, scale: 0.975 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.28, margin: '-10% 0px -12% 0px' }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.64,
                      delay: reduceMotion ? 0 : i * 0.07,
                      ease: EASE,
                    }}
                    whileHover={reduceMotion ? undefined : { y: -7, scale: 1.014 }}
                  >
                  <motion.div
                    className="air-pjp__story-content"
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.35, margin: '-10% 0px -10% 0px' }}
                    transition={{ duration: reduceMotion ? 0 : 0.52, ease: EASE }}
                  >
                    <motion.figure
                      className="air-pjp__story-media"
                      aria-label={`${section.title} image placeholder`}
                      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: reduceMotion ? 0 : 0.58, ease: EASE }}
                    >
                      {cardImage ? (
                        <img
                          className="air-pjp__story-img"
                          src={cardImage.src}
                          alt={cardImage.alt}
                          loading="lazy"
                          decoding="async"
                          width={900}
                          height={620}
                        />
                      ) : (
                        <div className="air-pjp__story-placeholder">
                          <span className="air-pjp__story-placeholder-label">Image will be added</span>
                        </div>
                      )}
                    </motion.figure>
                    <motion.div
                      className="air-pjp__story-text"
                      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.54,
                        delay: reduceMotion ? 0 : 0.04,
                        ease: EASE,
                      }}
                    >
                      <span className="air-pjp__story-index">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="air-pjp__story-title">{section.title}</h3>
                      {section.segments.map((segment, segmentIndex) => (
                        <motion.p
                          key={segment.paragraph}
                          className="air-pjp__story-paragraph"
                          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-30px' }}
                          transition={{
                            duration: reduceMotion ? 0 : 0.48,
                            delay: reduceMotion ? 0 : 0.08 + segmentIndex * 0.06,
                            ease: EASE,
                          }}
                        >
                          {segment.paragraph}
                        </motion.p>
                      ))}
                    </motion.div>
                  </motion.div>
                  <span className="air-pjp__story-shine" aria-hidden />
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="air-pjp__discover" aria-labelledby="air-pjp-discover-title">
        <div className="container">
          <motion.div
            className="air-pjp__discover-panel"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: EASE }}
          >
            <h2 id="air-pjp-discover-title" className="air-pjp__discover-title">
              {d.discover.title}
            </h2>
            <p className="air-pjp__discover-text">{d.discover.text}</p>
            <button type="button" className="air-pjp__btn air-pjp__btn--gold" onClick={scrollToEnquiry}>
              {d.discover.buttonLabel}
            </button>
            <span className="air-pjp__discover-glow" aria-hidden />
          </motion.div>
        </div>
      </section>

      <section
        className="air-pjp__enquiry"
        id="air-pj-enquiry"
        aria-labelledby="air-pj-enquiry-title"
        tabIndex={-1}
      >
        <div className="container">
          <motion.div
            className="air-pjp__enquiry-shell"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: EASE }}
          >
            <header className="air-pjp__enquiry-head">
              <h2 id="air-pj-enquiry-title" className="air-pjp__enquiry-title">
                {d.enquiry.title}
              </h2>
              <p className="air-pjp__enquiry-sub">{d.enquiry.subtitle}</p>
              <a href={lightPath} className="air-pjp__enquiry-alt">
                Explore light aircraft
              </a>
            </header>
            <form className="air-pjp__form" onSubmit={handleEnquirySubmit}>
              <div className="air-pjp__form-row">
                <label className="air-pjp__field">
                  <span className="air-pjp__label">Full Name</span>
                  <input
                    className="air-pjp__input"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </label>
                <label className="air-pjp__field">
                  <span className="air-pjp__label">Email Address</span>
                  <input
                    className="air-pjp__input"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className="air-pjp__form-row">
                <label className="air-pjp__field">
                  <span className="air-pjp__label">Phone Number</span>
                  <input
                    className="air-pjp__input"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
                <label className="air-pjp__field">
                  <span className="air-pjp__label">Preferred Travel Date</span>
                  <input
                    className="air-pjp__input"
                    name="travelDate"
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                  />
                </label>
              </div>
              <div className="air-pjp__form-row">
                <label className="air-pjp__field">
                  <span className="air-pjp__label">Departure Location</span>
                  <input
                    className="air-pjp__input"
                    name="departure"
                    type="text"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                  />
                </label>
                <label className="air-pjp__field">
                  <span className="air-pjp__label">Destination</span>
                  <input
                    className="air-pjp__input"
                    name="destination"
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </label>
              </div>
              <label className="air-pjp__field air-pjp__field--full">
                <span className="air-pjp__label">Number of Passengers</span>
                <input
                  className="air-pjp__input"
                  name="passengers"
                  type="text"
                  inputMode="numeric"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                />
              </label>
              <label className="air-pjp__field air-pjp__field--full">
                <span className="air-pjp__label">Message / Special Requests</span>
                <textarea
                  className="air-pjp__textarea"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
              <button type="submit" className="air-pjp__btn air-pjp__btn--gold air-pjp__btn--wide">
                Submit Enquiry
              </button>
              <p className="air-pjp__form-note">
                You will be taken to our contact page with your details filled in to send securely.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
