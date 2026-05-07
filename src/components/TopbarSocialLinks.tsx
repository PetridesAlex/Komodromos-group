import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown, Orbit } from 'lucide-react'
import { socialLinks } from '../data/socialLinks'

type Props = { variant: 'desktop' | 'mobile' }

export default function TopbarSocialLinks({ variant }: Props) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

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

  const dropdown = (
    <div
      id={menuId}
      className={
        variant === 'desktop'
          ? 'social-hub-dropdown'
          : 'social-hub-dropdown social-hub-dropdown--mobile'
      }
      role="menu"
      aria-label="Social media links"
    >
      {socialLinks.map((s) => (
        <a
          key={s.label}
          href={s.href}
          role="menuitem"
          className="social-hub-dropdown__item"
          onClick={() => setOpen(false)}
        >
          <span className={`social-hub-dropdown__icon ${s.navClass}`}>{s.svg}</span>
          <span className="social-hub-dropdown__label">{s.label}</span>
        </a>
      ))}
    </div>
  )

  const trigger = (
    <button
      type="button"
      className={
        variant === 'desktop'
          ? 'social-hub-trigger'
          : 'social-hub-trigger social-hub-trigger--mobile'
      }
      aria-expanded={open}
      aria-haspopup="true"
      aria-controls={menuId}
      onClick={() => setOpen((v) => !v)}
    >
      <span className="social-hub-trigger__glow" aria-hidden />
      <Orbit
        className="social-hub-trigger__share"
        size={17}
        strokeWidth={2}
        aria-hidden
      />
      <span className="social-hub-trigger__text">Connect</span>
      <ChevronDown
        size={16}
        strokeWidth={2.25}
        className={`social-hub-trigger__chevron${open ? ' social-hub-trigger__chevron--open' : ''}`}
        aria-hidden
      />
    </button>
  )

  if (variant === 'desktop') {
    return (
      <div className="socials desktop-socials social-hub-wrap" ref={wrapRef}>
        {trigger}
        {open ? dropdown : null}
      </div>
    )
  }

  return (
    <div className="nav-mobile-socials social-hub-wrap" ref={wrapRef}>
      {trigger}
      {open ? dropdown : null}
    </div>
  )
}
