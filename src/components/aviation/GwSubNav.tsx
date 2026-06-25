import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link, useLocation, type Location } from 'react-router-dom'
import { AVIATION_ROUTES, aviationSubNavItems } from '../../data/globalWingsPage'

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

export default function GwSubNav() {
  const location = useLocation()
  const trackRef = useRef<HTMLDivElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const activeItem = aviationSubNavItems.find((item) => isAviationNavActive(item.to, location))

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const active = track.querySelector('.gw-subnav__link--active')
    if (!(active instanceof HTMLElement)) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    active.scrollIntoView({
      inline: 'center',
      block: 'nearest',
      behavior: reduce ? 'auto' : 'smooth',
    })
  }, [location.pathname, location.hash])

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

  const toggleLabel = activeItem?.label ?? 'Navigation'

  return (
    <nav className="gw-subnav" aria-label="Aviation services navigation">
      <div className="gw-subnav__track gw-subnav__track--desktop" ref={trackRef}>
        <ul className="gw-subnav__list">
          {aviationSubNavItems.map((item) => {
            const active = isAviationNavActive(item.to, location)
            return (
              <li key={item.label} className="gw-subnav__item">
                <Link
                  className={`gw-subnav__link${active ? ' gw-subnav__link--active' : ''}`}
                  to={navTarget(item.to)}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="gw-subnav__mobile" ref={mobileRef}>
        <button
          type="button"
          className={`gw-subnav__toggle${menuOpen ? ' gw-subnav__toggle--open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="gw-subnav-menu"
          aria-haspopup="true"
          onClick={() => setMenuOpen((open) => !open)}
        >
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
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
