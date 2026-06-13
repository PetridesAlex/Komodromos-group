import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SiteLogo from './SiteLogo'
import TopbarSocialLinks from './TopbarSocialLinks'
import { getServicePagePath, serviceCards } from '../data/serviceCards'

export type SiteTopbarProps = {
  logoPathname?: string
  logoScrollToId?: string
  /** `#home` on group page, `/` on SSC */
  homeHref: string
  /** `#services` / `#storage-options` / `/#storage-options` for dropdown trigger */
  servicesSectionHref: string
  /** Optional extra classes on `<header class="topbar">` (e.g. wedding scroll state) */
  className?: string
}

function NavHome({
  href,
  onNavigate,
}: {
  href: string
  onNavigate: () => void
}) {
  if (href.startsWith('#')) {
    return (
      <a href={href} onClick={onNavigate}>
        Overview
      </a>
    )
  }
  return (
    <Link to={href} onClick={onNavigate}>
      Overview
    </Link>
  )
}

function NavServicesTrigger({
  href,
  onNavigate,
}: {
  href: string
  onNavigate: () => void
}) {
  if (href.startsWith('#')) {
    return (
      <a href={href} className="nav-dropdown__trigger" onClick={onNavigate}>
        Solutions
      </a>
    )
  }
  const hashIdx = href.indexOf('#')
  if (hashIdx !== -1) {
    const pathname = href.slice(0, hashIdx) || '/'
    const hash = href.slice(hashIdx + 1)
    return (
      <Link
        to={{ pathname, hash }}
        className="nav-dropdown__trigger"
        onClick={onNavigate}
      >
        Solutions
      </Link>
    )
  }
  return (
    <Link to={href} className="nav-dropdown__trigger" onClick={onNavigate}>
      Solutions
    </Link>
  )
}

export default function SiteTopbar({
  logoPathname = '/',
  logoScrollToId = 'home',
  homeHref,
  servicesSectionHref,
  className,
}: SiteTopbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen, close])

  return (
    <header className={['topbar', className].filter(Boolean).join(' ')}>
      <button
        type="button"
        className={`nav-backdrop${menuOpen ? ' nav-backdrop--open' : ''}`}
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={close}
      />
      <div className="container topbar-inner">
        <SiteLogo pathname={logoPathname} scrollToId={logoScrollToId} />
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <NavHome href={homeHref} onNavigate={close} />
          <div className="nav-dropdown">
            <NavServicesTrigger href={servicesSectionHref} onNavigate={close} />
            <div
              className="nav-dropdown__panel"
              role="navigation"
              aria-label="Group companies and services"
            >
              <Link
                to="/#services"
                className="nav-dropdown__link nav-dropdown__link--all"
                onClick={close}
              >
                Explore all solutions
              </Link>
              <ul className="nav-dropdown__list">
                {serviceCards.map((card) => (
                  <li key={card.slug}>
                    <Link
                      to={getServicePagePath(card.slug)}
                      className="nav-dropdown__link"
                      onClick={close}
                    >
                      <span className="nav-dropdown__eyebrow">{card.eyebrow}</span>
                      <span className="nav-dropdown__title">
                        {card.navTitle ?? card.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link to="/contact" onClick={close} className="nav-links__cta">
            Concierge Desk
          </Link>
          <TopbarSocialLinks variant="mobile" />
        </nav>
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
  )
}
