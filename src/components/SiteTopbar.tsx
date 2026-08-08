import { useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SiteLogo from './SiteLogo'
import TopbarSocialLinks from './TopbarSocialLinks'
import { getServicePageHref, isExternalServiceHref } from '../data/serviceCards'
import { getSolutionsMenuCards, isServiceLinkableFromGroup } from '../lib/serviceMaintenance'
import { prepareGlobalWingsEntryNavigation } from '../lib/gwEntryNavigation'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { useSiteContext } from '../seo/SiteContext'
import { GROUP_SITE_URL } from '../seo/domainRegistry'

export type SiteTopbarProps = {
  logoPathname?: string
  logoScrollToId?: string
  /** `/` on group homepage (scrolls to hero without `#home`), `/` on other pages */
  homeHref: string
  /** `#services` / `#storage-options` / `/#storage-options` for dropdown trigger */
  servicesSectionHref: string
  /** Optional extra classes on `<header class="topbar">` (e.g. wedding scroll state) */
  className?: string
}

function isExternalHref(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://')
}

function scrollToHomeHero() {
  document.getElementById('home')?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth',
    block: 'start',
  })
  window.history.replaceState(null, '', '/')
}

function NavHome({
  href,
  onNavigate,
}: {
  href: string
  onNavigate: () => void
}) {
  const location = useLocation()

  if (href.startsWith('#') || isExternalHref(href)) {
    return (
      <a href={href} onClick={onNavigate}>
        Overview
      </a>
    )
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === '/' && location.pathname === '/') {
      e.preventDefault()
      scrollToHomeHero()
    }
    onNavigate()
  }

  return (
    <Link to={href} onClick={handleClick}>
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
  if (href.startsWith('#') || isExternalHref(href)) {
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
  const { isBrandDomain } = useSiteContext()
  const [menuOpen, setMenuOpen] = useState(false)
  const close = useCallback(() => setMenuOpen(false), [])
  const resolvedHomeHref = isBrandDomain ? buildGroupSiteReturnUrl('home') : homeHref
  const resolvedServicesHref = isBrandDomain
    ? buildGroupSiteReturnUrl('services')
    : servicesSectionHref
  const exploreAllHref = isBrandDomain ? buildGroupSiteReturnUrl('services') : '/#services'
  const contactHref = isBrandDomain ? `${GROUP_SITE_URL}/contact` : '/contact'

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

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 981px)')
    const onChange = () => {
      if (mq.matches) close()
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [close])

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
          <NavHome href={resolvedHomeHref} onNavigate={close} />
          <div className="nav-dropdown">
            <NavServicesTrigger href={resolvedServicesHref} onNavigate={close} />
            <div
              className="nav-dropdown__panel"
              role="navigation"
              aria-label="Group companies and services"
            >
              {isExternalHref(exploreAllHref) ? (
                <a
                  href={exploreAllHref}
                  className="nav-dropdown__link nav-dropdown__link--all"
                  onClick={close}
                >
                  Explore all solutions
                </a>
              ) : (
                <Link
                  to="/#services"
                  className="nav-dropdown__link nav-dropdown__link--all"
                  onClick={close}
                >
                  Explore all solutions
                </Link>
              )}
              <ul className="nav-dropdown__list">
                {getSolutionsMenuCards().map((card) => {
                  const external = isExternalServiceHref(card.slug)
                  const href = getServicePageHref(card.slug)
                  const isGlobalWings = card.slug === 'aviation'
                  const underConstruction = Boolean(card.comingSoon)
                  const linkable = isServiceLinkableFromGroup(card.slug)
                  const linkContent = (
                    <>
                      <span className="nav-dropdown__eyebrow">{card.eyebrow}</span>
                      <span className="nav-dropdown__title">
                        {card.navTitle ?? card.title}
                      </span>
                      {underConstruction ? (
                        <span className="nav-dropdown__status">Under construction</span>
                      ) : null}
                    </>
                  )

                  return (
                    <li key={card.slug}>
                      {!linkable ? (
                        <span
                          className="nav-dropdown__link nav-dropdown__link--soon"
                          aria-disabled="true"
                        >
                          {linkContent}
                        </span>
                      ) : external ? (
                        <a
                          href={href}
                          className={`nav-dropdown__link${underConstruction ? ' nav-dropdown__link--soon' : ''}`}
                          rel="noopener noreferrer"
                          onClick={() => {
                            if (isGlobalWings) prepareGlobalWingsEntryNavigation()
                            close()
                          }}
                        >
                          {linkContent}
                        </a>
                      ) : (
                        <Link
                          to={href}
                          className={`nav-dropdown__link${underConstruction ? ' nav-dropdown__link--soon' : ''}`}
                          onClick={() => {
                            if (isGlobalWings) prepareGlobalWingsEntryNavigation()
                            close()
                          }}
                        >
                          {linkContent}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          {isExternalHref(contactHref) ? (
            <a href={contactHref} onClick={close} className="nav-links__cta">
              Concierge Desk
            </a>
          ) : (
            <Link to="/contact" onClick={close} className="nav-links__cta">
              Concierge Desk
            </Link>
          )}
          <TopbarSocialLinks variant="mobile" />
        </nav>
        <TopbarSocialLinks variant="desktop" />
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
