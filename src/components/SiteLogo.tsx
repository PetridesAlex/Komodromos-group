import { Link, useLocation } from 'react-router-dom'
import { BRAND_MARK } from '../data/mainLogo'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { useSiteContext } from '../seo/SiteContext'

type SiteLogoProps = {
  /** Router pathname used in the logo link */
  pathname?: string
  /** DOM id to scroll to when the user is already on `pathname` */
  scrollToId?: string
}

export default function SiteLogo({
  pathname: logoPathname = '/',
  scrollToId = 'home',
}: SiteLogoProps) {
  const location = useLocation()
  const { isBrandDomain } = useSiteContext()

  const logoImage = (
    <img
      src={BRAND_MARK.src}
      alt="Komodromos Group"
      className="logo__mark"
      width={BRAND_MARK.width}
      height={BRAND_MARK.height}
      loading="eager"
      decoding="async"
      fetchPriority="high"
    />
  )

  if (isBrandDomain) {
    return (
      <a href={buildGroupSiteReturnUrl(scrollToId)} className="logo">
        {logoImage}
      </a>
    )
  }

  const isHomeScrollTarget = scrollToId === 'home' && logoPathname === '/'
  const linkTo = isHomeScrollTarget
    ? { pathname: logoPathname }
    : { pathname: logoPathname, hash: scrollToId }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname !== logoPathname) return
    e.preventDefault()
    document.getElementById(scrollToId)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'start',
    })
    // Keep homepage URL clean — never write `#home` into the address bar.
    const nextUrl = isHomeScrollTarget ? logoPathname : `${logoPathname}#${scrollToId}`
    window.history.replaceState(null, '', nextUrl)
  }

  return (
    <Link to={linkTo} className="logo" onClick={handleLogoClick}>
      {logoImage}
    </Link>
  )
}
