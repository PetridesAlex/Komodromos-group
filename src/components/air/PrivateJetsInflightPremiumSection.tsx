import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { airPrivateJetInflightPremium } from '../../data/airServicesPage'

const EASE = [0.16, 1, 0.3, 1] as const

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
          <div className="air-pjp__card-grid">
            {d.services.map((item, i) => (
              <motion.article
                key={item.title}
                className="air-pjp__card"
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : Math.min(i * 0.06, 0.36),
                  ease: EASE,
                }}
                whileHover={reduceMotion ? undefined : { y: -6, scale: 1.015 }}
              >
                <span className="air-pjp__card-num" aria-hidden>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="air-pjp__card-title">{item.title}</h3>
                <p className="air-pjp__card-desc">{item.description}</p>
                <span className="air-pjp__card-shine" aria-hidden />
              </motion.article>
            ))}
          </div>
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
