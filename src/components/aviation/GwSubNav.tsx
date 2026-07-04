import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu } from 'lucide-react'
import { Link, useLocation, type Location } from 'react-router-dom'
import { AVIATION_ROUTES, aviationSubNavItems, gwSubNavBrand } from '../../data/globalWingsPage'

function navTarget(to: string) {
  const hashIndex = to.indexOf('#')
  if (hashIndex === -1) return to
  return {
    pathname: to.slice(0, hashIndex),
    hash: to.slice(hashIndex + 1),
  }
}

function isAviationNavActive(to: string, location: Location) {
  const hashIndex = to.indexOf('#')

  if (hashIndex !== -1) {
    const pathname = to.slice(0, hashIndex)
    const hash = `#${to.slice(hashIndex + 1)}`
    return location.pathname === pathname && location.hash === hash
  }

  if (to === AVIATION_ROUTES.home) {
    return location.pathname === to && !location.hash
  }

  return location.pathname === to
}

type IndicatorStyle = {
  width: number
  left: number
}

export default function GwSubNav() {
  const location = useLocation()
  const trackRef = useRef<HTMLDivElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [indicator, setIndicator] = useState<IndicatorStyle>({ width: 0, left: 0 })
  const [indicatorReady, setIndicatorReady] = useState(false)

  const activeItem = aviationSubNavItems.find((item) => isAviationNavActive(item.to, location))

  const updateIndicator = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const active = track.querySelector('.gw-subnav__link--active')
    if (!(active instanceof HTMLElement)) {
      setIndicatorReady(false)
      return
    }

    setIndicator({
      left: active.offsetLeft,
      width: active.offsetWidth,
    })
    setIndicatorReady(true)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useLayoutEffect(() => {
    updateIndicator()
  }, [location.pathname, location.hash, updateIndicator])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const active = track.querySelector('.gw-subnav__link--active')
    if (active instanceof HTMLElement) {
      active.scrollIntoView({
        inline: 'center',
        block: 'nearest',
        behavior: reduce ? 'auto' : 'smooth',
      })
    }

    const observer = new ResizeObserver(() => updateIndicator())
    observer.observe(track)
    window.addEventListener('resize', updateIndicator)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateIndicator)
    }
  }, [location.pathname, location.hash, updateIndicator])

  useEffect(() => {
    if (!menuOpen) return

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target
      if (!(target instanceof Node) || !mobileRef.current?.contains(target)) {
        setMenuOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const toggleLabel = activeItem?.shortLabel ?? 'Menu'

  return (
    <nav className="gw-subnav" aria-label="Aviation services navigation">
      <div className="gw-subnav__shell">
        <div className="container gw-subnav__bar gw-subnav__bar--desktop">
          <Link to={AVIATION_ROUTES.home} className="gw-subnav__brand" aria-label={gwSubNavBrand.ariaLabel}>
            <span className="gw-subnav__mark" aria-hidden>
              GW
            </span>
            <span className="gw-subnav__brand-panel">
              <span className="gw-subnav__brand-accent" aria-hidden />
              <span className="gw-subnav__brand-copy">
                <span className="gw-subnav__brand-name">
                  <span className="gw-subnav__brand-name-lead">{gwSubNavBrand.nameLead}</span>{' '}
                  <span className="gw-subnav__brand-name-em">{gwSubNavBrand.nameEmphasis}</span>
                </span>
                <span className="gw-subnav__brand-tag">{gwSubNavBrand.tagline}</span>
              </span>
            </span>
          </Link>

          <div className="gw-subnav__track gw-subnav__track--desktop" ref={trackRef}>
            <span
              className={`gw-subnav__indicator${indicatorReady ? ' gw-subnav__indicator--ready' : ''}`}
              aria-hidden
              style={{
                width: `${indicator.width}px`,
                transform: `translateX(${indicator.left}px) translateY(-50%)`,
              }}
            />
            <ul className="gw-subnav__list">
              {aviationSubNavItems.map((item) => {
                const active = isAviationNavActive(item.to, location)
                return (
                  <li key={item.label} className="gw-subnav__item">
                    <Link
                      className={`gw-subnav__link${active ? ' gw-subnav__link--active' : ''}`}
                      to={navTarget(item.to)}
                      aria-current={active ? 'page' : undefined}
                      title={item.label}
                    >
                      {item.shortLabel}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <Link to={AVIATION_ROUTES.contact} className="gw-subnav__cta">
            Enquire
            <ArrowUpRight aria-hidden size={14} strokeWidth={2.25} />
          </Link>
        </div>

        <div className="container gw-subnav__bar gw-subnav__bar--mobile" ref={mobileRef}>
          <Link to={AVIATION_ROUTES.home} className="gw-subnav__brand gw-subnav__brand--compact" aria-label={gwSubNavBrand.ariaLabel}>
            <span className="gw-subnav__mark" aria-hidden>
              GW
            </span>
            <span className="gw-subnav__brand-copy gw-subnav__brand-copy--compact">
              <span className="gw-subnav__brand-name">
                <span className="gw-subnav__brand-name-lead">{gwSubNavBrand.nameLead}</span>{' '}
                <span className="gw-subnav__brand-name-em">{gwSubNavBrand.nameEmphasis}</span>
              </span>
              <span className="gw-subnav__brand-tag">{gwSubNavBrand.mobileTagline}</span>
            </span>
          </Link>

          <button
            type="button"
            className={`gw-subnav__toggle${menuOpen ? ' gw-subnav__toggle--open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="gw-subnav-menu"
            aria-haspopup="true"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu className="gw-subnav__toggle-menu-icon" size={15} strokeWidth={2} aria-hidden />
            <span className="gw-subnav__toggle-label">{toggleLabel}</span>
            <ChevronDown className="gw-subnav__toggle-icon" size={14} strokeWidth={2.25} aria-hidden />
          </button>

          <div
            className={`gw-subnav__menu-wrap${menuOpen ? ' gw-subnav__menu-wrap--open' : ''}`}
            id="gw-subnav-menu"
            aria-hidden={!menuOpen}
          >
            <ul className="gw-subnav__menu" role="menu">
              {aviationSubNavItems.map((item) => {
                const active = isAviationNavActive(item.to, location)
                return (
                  <li key={item.label} className="gw-subnav__menu-item" role="none">
                    <Link
                      className={`gw-subnav__menu-link${active ? ' gw-subnav__menu-link--active' : ''}`}
                      to={navTarget(item.to)}
                      role="menuitem"
                      aria-current={active ? 'page' : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="gw-subnav__menu-link-label">{item.shortLabel}</span>
                      <span className="gw-subnav__menu-link-full">{item.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
