import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Heart, Menu, Search, X } from 'lucide-react'
import {
  JANCHAPELLE_CHAT,
  JANCHAPELLE_DONT_MISS,
  JANCHAPELLE_FEATURED,
  type JanchapelleDressCard,
} from '../data/janchapellePage'
import { janchapelleBrandHref } from '../lib/brandPaths'
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
  if (label === 'WhatsApp') {
    return { ...link, href: JANCHAPELLE_CHAT.whatsappHref }
  }
  if (label === 'Viber') {
    return { ...link, href: JANCHAPELLE_CHAT.viberHref }
  }
  return link
})

const NAV_CHAT = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: JANCHAPELLE_CHAT.whatsappHref,
    className: 'jc-bridal-nav__chat-link--wa',
  },
  {
    id: 'viber',
    label: 'Viber',
    href: JANCHAPELLE_CHAT.viberHref,
    className: 'jc-bridal-nav__chat-link--vb',
  },
] as const

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden focusable="false">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function ViberIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden focusable="false">
      <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602c-.167 0-.303.135-.304.302 0 .167.133.303.3.305 1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3.166-.002.3-.138.3-.304-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695c-.19-.032-.4.005-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948-.008.046-.01.093-.007.14 0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87.686.543 1.418 1.027 2.186 1.447 1.328.733 2.126 1.07 2.604 1.206l.01.014c.13.042.265.064.402.063.046.002.092 0 .138-.008.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248-.217-.383-.454-.756-.71-1.115-.25-.34-.826-1.033-.83-1.035-.137-.165-.31-.265-.502-.297zm4.49.88c-.158.002-.29.124-.3.282-.01.167.115.312.282.324 1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57-.002.168.13.306.3.31.166.003.305-.13.31-.297.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63c-.16.002-.29.127-.3.287-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164.01.167.15.295.318.287.167-.008.295-.15.287-.317-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z" />
    </svg>
  )
}

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
  const location = useLocation()
  const homeHref = janchapelleBrandHref('/services/janchapelle')
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
            <Link
              to={homeHref}
              className="jc-bridal-nav__brand"
              aria-label="Janchapelle home"
              onClick={() => {
                setMenuOpen(false)
                setSearchOpen(false)
                setWishlistOpen(false)
                if (location.pathname === homeHref) {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
            >
              <span className="jc-bridal-nav__brand-name">Janchapelle</span>
              <span className="jc-bridal-nav__brand-line">Bridal Atelier</span>
            </Link>
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
            <div
              className="jc-bridal-nav__chat"
              aria-label={`Message Janchapelle at ${JANCHAPELLE_CHAT.phoneDisplay}`}
            >
              {NAV_CHAT.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`jc-bridal-nav__chat-link ${item.className}`}
                  style={{ ['--chat-i' as string]: String(index) }}
                  target={item.id === 'whatsapp' ? '_blank' : undefined}
                  rel={item.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                  aria-label={`${item.label} ${JANCHAPELLE_CHAT.phoneDisplay}`}
                  title={`${item.label} · ${JANCHAPELLE_CHAT.phoneDisplay}`}
                >
                  <span className="jc-bridal-nav__chat-pulse" aria-hidden />
                  <span className="jc-bridal-nav__chat-icon" aria-hidden>
                    {item.id === 'whatsapp' ? <WhatsAppIcon /> : <ViberIcon />}
                  </span>
                </a>
              ))}
            </div>
            <button
              type="button"
              className="jc-bridal-nav__appt"
              onClick={onBookAppointment}
            >
              <span className="jc-bridal-nav__appt-label jc-bridal-nav__appt-label--full">
                Book appointment
              </span>
              <span className="jc-bridal-nav__appt-label jc-bridal-nav__appt-label--short">
                Book
              </span>
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
