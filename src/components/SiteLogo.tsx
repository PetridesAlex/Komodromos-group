import { Link, useLocation } from 'react-router-dom'
import { MAIN_LOGO } from '../data/mainLogo'
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
      src={MAIN_LOGO.src}
      alt="Komodromos Group"
      className="logo__img"
      width={MAIN_LOGO.width}
      height={MAIN_LOGO.height}
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

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname !== logoPathname) return
    e.preventDefault()
    document.getElementById(scrollToId)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'start',
    })
    window.history.replaceState(null, '', `${logoPathname}#${scrollToId}`)
  }

  return (
    <Link
      to={{ pathname: logoPathname, hash: scrollToId }}
      className="logo"
      onClick={handleLogoClick}
    >
      {logoImage}
    </Link>
  )
}
