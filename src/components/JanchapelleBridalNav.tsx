import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { Heart, Menu, Search, X } from 'lucide-react'
import {
  JANCHAPELLE_DONT_MISS,
  JANCHAPELLE_FEATURED,
  type JanchapelleDressCard,
} from '../data/janchapellePage'
import { socialLinks } from '../data/socialLinks'

const NAV_LINKS = [
  { id: 'dresses', label: 'Wedding dresses', href: '#jc-featured' },
  { id: 'reviews', label: 'Reviews', href: '#jc-reviews' },
  { id: 'events', label: 'Events', href: '#jc-events' },
] as const

const LOOKBOOK: readonly JanchapelleDressCard[] = [
  ...JANCHAPELLE_FEATURED,
  ...JANCHAPELLE_DONT_MISS,
]

const DRAWER_SOCIAL_LABELS = ['WhatsApp', 'Instagram', 'Viber', 'Facebook'] as const

const DRAWER_SOCIALS = DRAWER_SOCIAL_LABELS.map((label) => {
  const link = socialLinks.find((item) => item.label === label)
  if (!link) {
    throw new Error(`Missing social link for ${label}`)
  }
  return link
})

type Props = {
  onBookAppointment: () => void
}

function scrollToHash(href: string) {
  const id = href.replace('#', '')
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function JanchapelleBridalNav({ onBookAppointment }: Props) {
  const menuTitleId = useId()
  const searchTitleId = useId()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [wishlist, setWishlist] = useState<string[]>([])
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('jc-wishlist')
      if (!raw) return
      const parsed = JSON.parse(raw) as unknown
      if (Array.isArray(parsed)) {
        setWishlist(parsed.filter((id): id is string => typeof id === 'string'))
      }
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('jc-wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  useEffect(() => {
    if (!menuOpen && !searchOpen && !wishlistOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setSearchOpen(false)
        setWishlistOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen, searchOpen, wishlistOpen])

  useEffect(() => {
    if (!searchOpen) return
    const t = window.setTimeout(() => searchInputRef.current?.focus(), 40)
    return () => window.clearTimeout(t)
  }, [searchOpen])

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return LOOKBOOK.slice(0, 6)
    return LOOKBOOK.filter(
      (dress) =>
        dress.name.toLowerCase().includes(q) || dress.house.toLowerCase().includes(q),
    ).slice(0, 8)
  }, [query])

  const wishlistItems = useMemo(
    () => LOOKBOOK.filter((dress) => wishlist.includes(dress.id)),
    [wishlist],
  )

  function toggleWishlist(id: string) {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  function go(href: string) {
    setMenuOpen(false)
    setSearchOpen(false)
    setWishlistOpen(false)
    scrollToHash(href)
  }

  return (
    <>
      <nav className="jc-bridal-nav" aria-label="Janchapelle bridal navigation">
        <div className="jc-bridal-nav__inner">
          <div className="jc-bridal-nav__left">
            <button
              type="button"
              className="jc-bridal-nav__icon"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => {
                setSearchOpen(false)
                setWishlistOpen(false)
                setMenuOpen(true)
              }}
            >
              <Menu size={22} strokeWidth={1.55} aria-hidden />
            </button>
            <button
              type="button"
              className={`jc-bridal-nav__icon jc-bridal-nav__icon--heart${
                wishlistOpen ? ' is-active' : ''
              }${wishlist.length > 0 ? ' has-saved' : ''}`}
              aria-label="Saved looks"
              aria-expanded={wishlistOpen}
              onClick={() => {
                setMenuOpen(false)
                setSearchOpen(false)
                setWishlistOpen(true)
              }}
            >
              <span className="jc-bridal-nav__heart-glow" aria-hidden />
              <Heart
                size={18}
                strokeWidth={1.35}
                className="jc-bridal-nav__heart-icon"
                aria-hidden
              />
              {wishlist.length > 0 ? (
                <span className="jc-bridal-nav__badge" aria-hidden>
                  {wishlist.length > 9 ? '9+' : wishlist.length}
                </span>
              ) : null}
            </button>
            <button
              type="button"
              className="jc-bridal-nav__icon"
              aria-label="Search gowns"
              aria-expanded={searchOpen}
              onClick={() => {
                setMenuOpen(false)
                setWishlistOpen(false)
                setSearchOpen(true)
              }}
            >
              <Search size={20} strokeWidth={1.55} aria-hidden />
            </button>
          </div>

          <div className="jc-bridal-nav__center">
            <a
              href="#jc-hero-heading"
              className="jc-bridal-nav__brand"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <span className="jc-bridal-nav__brand-name">Janchapelle</span>
              <span className="jc-bridal-nav__brand-line">Bridal Atelier</span>
            </a>
            <ul className="jc-bridal-nav__links" aria-label="Bridal sections">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="jc-bridal-nav__link"
                    onClick={(e) => {
                      e.preventDefault()
                      go(link.href)
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="jc-bridal-nav__right">
            <button
              type="button"
              className="jc-bridal-nav__appt"
              onClick={onBookAppointment}
            >
              Book appointment
            </button>
          </div>
        </div>
      </nav>

      {menuOpen ? (
        <div
          className="jc-drawer"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setMenuOpen(false)
          }}
        >
          <div
            className="jc-drawer__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={menuTitleId}
          >
            <div className="jc-drawer__head">
              <p id={menuTitleId} className="jc-drawer__title">
                Menu
              </p>
              <button
                type="button"
                className="jc-bridal-nav__icon"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <X size={22} strokeWidth={1.6} aria-hidden />
              </button>
            </div>
            <ul className="jc-drawer__list">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="jc-drawer__link"
                    onClick={(e) => {
                      e.preventDefault()
                      go(link.href)
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  className="jc-drawer__link jc-drawer__link--btn"
                  onClick={() => {
                    setMenuOpen(false)
                    onBookAppointment()
                  }}
                >
                  Book an appointment
                </button>
              </li>
            </ul>
            <div className="jc-drawer__social">
              <p className="jc-drawer__social-label">Connect with us</p>
              <ul className="jc-drawer__social-list" aria-label="Janchapelle social channels">
                {DRAWER_SOCIALS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`jc-drawer__social-link jc-drawer__social-link--${link.navClass}`}
                      target={link.href !== '#' ? '_blank' : undefined}
                      rel={link.href !== '#' ? 'noopener noreferrer' : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="jc-drawer__social-icon">{link.svg}</span>
                      <span className="jc-drawer__social-name">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}

      {searchOpen ? (
        <div
          className="jc-drawer jc-drawer--search"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSearchOpen(false)
          }}
        >
          <div
            className="jc-drawer__panel jc-drawer__panel--search"
            role="dialog"
            aria-modal="true"
            aria-labelledby={searchTitleId}
          >
            <div className="jc-drawer__head">
              <p id={searchTitleId} className="jc-drawer__title">
                Search gowns
              </p>
              <button
                type="button"
                className="jc-bridal-nav__icon"
                aria-label="Close search"
                onClick={() => setSearchOpen(false)}
              >
                <X size={22} strokeWidth={1.6} aria-hidden />
              </button>
            </div>
            <label className="jc-search-field">
              <span className="visually-hidden">Search lookbook</span>
              <Search size={18} strokeWidth={1.7} aria-hidden />
              <input
                ref={searchInputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by gown or collection…"
                autoComplete="off"
              />
            </label>
            <ul className="jc-search-results">
              {searchResults.length === 0 ? (
                <li className="jc-search-results__empty">No gowns match that search.</li>
              ) : (
                searchResults.map((dress) => (
                  <li key={dress.id}>
                    <button
                      type="button"
                      className="jc-search-result"
                      onClick={() => {
                        toggleWishlist(dress.id)
                        go('#jc-featured')
                      }}
                    >
                      <img src={dress.image} alt="" width={56} height={72} />
                      <span>
                        <span className="jc-search-result__house">{dress.house}</span>
                        <span className="jc-search-result__name">{dress.name}</span>
                      </span>
                      <Heart
                        size={16}
                        strokeWidth={1.8}
                        className={
                          wishlist.includes(dress.id)
                            ? 'jc-search-result__heart is-on'
                            : 'jc-search-result__heart'
                        }
                        aria-hidden
                      />
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      ) : null}

      {wishlistOpen ? (
        <div
          className="jc-drawer"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setWishlistOpen(false)
          }}
        >
          <div
            className="jc-drawer__panel"
            role="dialog"
            aria-modal="true"
            aria-label="Saved looks"
          >
            <div className="jc-drawer__head">
              <p className="jc-drawer__title">Saved looks</p>
              <button
                type="button"
                className="jc-bridal-nav__icon"
                aria-label="Close saved looks"
                onClick={() => setWishlistOpen(false)}
              >
                <X size={22} strokeWidth={1.6} aria-hidden />
              </button>
            </div>
            {wishlistItems.length === 0 ? (
              <p className="jc-wishlist-empty">
                Heart a gown from search or the lookbook to save it here.
              </p>
            ) : (
              <ul className="jc-search-results">
                {wishlistItems.map((dress) => (
                  <li key={dress.id}>
                    <button
                      type="button"
                      className="jc-search-result"
                      onClick={() => go('#jc-featured')}
                    >
                      <img src={dress.image} alt="" width={56} height={72} />
                      <span>
                        <span className="jc-search-result__house">{dress.house}</span>
                        <span className="jc-search-result__name">{dress.name}</span>
                      </span>
                      <Heart
                        size={16}
                        strokeWidth={1.8}
                        className="jc-search-result__heart is-on"
                        aria-hidden
                      />
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <button
              type="button"
              className="jc-bridal-nav__appt jc-bridal-nav__appt--block"
              onClick={() => {
                setWishlistOpen(false)
                onBookAppointment()
              }}
            >
              Book appointment
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
