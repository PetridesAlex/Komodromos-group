import { useEffect, useId, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { socialLinks } from '../data/socialLinks'
import { useSiteContext } from '../seo/SiteContext'

function isWeddingSkyPath(pathname: string) {
  return pathname === '/services/wedding' || pathname.startsWith('/services/wedding/')
}

export default function SocialHub() {
  const { brand } = useSiteContext()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const id = useId()
  const panelId = `social-hub-panel-${id}`

  const hideOnWeddingSky = brand?.slug === 'wedding' || isWeddingSkyPath(pathname)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onDoc = (e: MouseEvent) => {
      const t = e.target as Node
      if (
        panelRef.current?.contains(t) ||
        btnRef.current?.contains(t)
      ) {
        return
      }
      setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onDoc)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onDoc)
    }
  }, [open])

  useEffect(() => {
    if (hideOnWeddingSky) setOpen(false)
  }, [hideOnWeddingSky])

  if (hideOnWeddingSky) return null

  return (
    <div className={`social-hub ${open ? 'social-hub--open' : ''}`}>
      {open && (
        <button
          type="button"
          className="social-hub-backdrop"
          aria-hidden
          tabIndex={-1}
          onClick={() => setOpen(false)}
        />
      )}
      <div
        id={panelId}
        ref={panelRef}
        className="social-hub-panel"
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        aria-label="Social channels"
      >
        <header className="social-hub-panel-head">
          <p className="social-hub-eyebrow">Official channels</p>
          <h2 className="social-hub-heading">
            <span className="social-hub-heading-gradient">Connect</span>
          </h2>
          <p className="social-hub-sub">
            <span className="social-hub-sub-muted">Follow </span>
            <span className="social-hub-sub-brand">Komodromos Group</span>
            <span className="social-hub-sub-muted"> across every channel</span>
          </p>
        </header>
        <ul className="social-hub-list">
          {socialLinks.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                className={`social-hub-item social-hub-item--${s.navClass}`}
                aria-label={s.label}
              >
                <span className="social-hub-item-icon">{s.svg}</span>
                <span className="social-hub-item-label">{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        ref={btnRef}
        className="social-hub-fab"
        aria-label={open ? 'Close social channels' : 'Open social channels'}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="social-hub-fab-inner">
          <svg
            className="social-hub-fab-icon social-hub-fab-icon--share"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
          </svg>
        </span>
        <span className="social-hub-fab-text">Social</span>
      </button>
    </div>
  )
}
