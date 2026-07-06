import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, ChevronDown, Headset, Sparkles } from 'lucide-react'
import { socialLinks } from '../data/socialLinks'

type Props = { variant: 'desktop' | 'mobile' }

const EASE = [0.16, 1, 0.3, 1] as const

const SOCIAL_HINTS: Record<string, string> = {
  WhatsApp: 'Instant chat',
  Viber: 'Voice & message',
  Instagram: 'Stories & updates',
  Facebook: 'Community',
  TikTok: 'Behind the scenes',
  YouTube: 'Video insights',
}

function deskGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

export default function TopbarSocialLinks({ variant }: Props) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const menuId = useId()
  const reduceMotion = useReducedMotion()
  const greeting = deskGreeting()

  useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const panelMotion = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: -12, scale: 0.94, filter: 'blur(8px)' },
        animate: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
        exit: { opacity: 0, y: -8, scale: 0.97, filter: 'blur(4px)' },
      }

  const itemMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
      }

  const panel = (
    <AnimatePresence>
      {open ? (
        <motion.div
          id={menuId}
          className={
            variant === 'desktop'
              ? 'social-assistant-panel'
              : 'social-assistant-panel social-assistant-panel--mobile'
          }
          role="dialog"
          aria-label="Connection desk — social channels"
          {...panelMotion}
          transition={{ duration: 0.38, ease: EASE }}
        >
          <div className="social-assistant-panel__shine" aria-hidden />
          <div className="social-assistant-panel__head-glow" aria-hidden />
          <header className="social-assistant-panel__head">
            <motion.div
              className="social-assistant-panel__agent"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.36, ease: EASE }}
            >
              <span className="social-assistant-panel__agent-ring" aria-hidden />
              <span className="social-assistant-panel__agent-ring social-assistant-panel__agent-ring--pulse" aria-hidden />
              <span className="social-assistant-panel__agent-icon">
                <Headset size={18} strokeWidth={2.25} aria-hidden />
              </span>
              <span className="social-assistant-panel__status" aria-hidden />
            </motion.div>
            <div className="social-assistant-panel__intro">
              <motion.p
                className="social-assistant-panel__eyebrow"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.32, delay: reduceMotion ? 0 : 0.06, ease: EASE }}
              >
                <Sparkles size={12} strokeWidth={2.25} aria-hidden />
                Connection desk
              </motion.p>
              <motion.p
                className="social-assistant-panel__greeting"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.36, delay: reduceMotion ? 0 : 0.12, ease: EASE }}
              >
                {greeting}
              </motion.p>
              <motion.p
                className="social-assistant-panel__lead"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.36, delay: reduceMotion ? 0 : 0.18, ease: EASE }}
              >
                Choose a channel — our team responds with discretion.
              </motion.p>
            </div>
          </header>

          <ul className="social-assistant-panel__list" role="menu">
            {socialLinks.map((s, index) => (
              <motion.li
                key={s.label}
                role="none"
                {...itemMotion}
                transition={{ duration: 0.32, delay: reduceMotion ? 0 : 0.04 + index * 0.045, ease: EASE }}
              >
                <a
                  href={s.href}
                  role="menuitem"
                  className="social-assistant-panel__link"
                  onClick={() => setOpen(false)}
                >
                  <span className={`social-assistant-panel__icon social-assistant-panel__icon--${s.navClass}`}>
                    {s.svg}
                  </span>
                  <span className="social-assistant-panel__copy">
                    <span className="social-assistant-panel__label">{s.label}</span>
                    <span className="social-assistant-panel__hint">
                      {SOCIAL_HINTS[s.label] ?? 'Official channel'}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="social-assistant-panel__arrow"
                    size={15}
                    strokeWidth={2}
                    aria-hidden
                  />
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="social-assistant-panel__footer"
            {...itemMotion}
            transition={{ duration: 0.32, delay: reduceMotion ? 0 : 0.34, ease: EASE }}
          >
            <Link to="/contact" className="social-assistant-panel__contact" onClick={() => setOpen(false)}>
              <span>Concierge inquiry form</span>
              <ArrowUpRight size={14} strokeWidth={2.25} aria-hidden />
            </Link>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )

  const trigger = (
    <button
      type="button"
      className={[
        'social-assistant-trigger',
        open ? 'social-assistant-trigger--open' : '',
        variant === 'mobile' ? 'social-assistant-trigger--mobile' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-expanded={open}
      aria-haspopup="dialog"
      aria-controls={menuId}
      onClick={() => setOpen((v) => !v)}
    >
      <span className="social-assistant-trigger__glow" aria-hidden />
      <span className="social-assistant-trigger__aurora" aria-hidden />
      <span className="social-assistant-trigger__avatar" aria-hidden>
        <span className="social-assistant-trigger__pulse" />
        <span className="social-assistant-trigger__pulse social-assistant-trigger__pulse--delayed" />
        <span className="social-assistant-trigger__avatar-inner">
          <Headset size={16} strokeWidth={2.25} />
        </span>
        <span className="social-assistant-trigger__online" />
      </span>
      <span className="social-assistant-trigger__copy">
        <span className="social-assistant-trigger__kicker">
          <span className="social-assistant-trigger__live-dot" aria-hidden />
          Live now
        </span>
        <span className="social-assistant-trigger__label">Connect</span>
      </span>
      <ChevronDown
        size={15}
        strokeWidth={2.25}
        className="social-assistant-trigger__chevron"
        aria-hidden
      />
    </button>
  )

  if (variant === 'desktop') {
    return (
      <div className="socials desktop-socials social-assistant-wrap" ref={wrapRef}>
        {trigger}
        {panel}
      </div>
    )
  }

  return (
    <div className="nav-mobile-socials social-assistant-wrap" ref={wrapRef}>
      {trigger}
      {panel}
    </div>
  )
}
