import { Link, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const EASE = [0.22, 1, 0.36, 1] as const

const ASTREAL_HUB = {
  label: 'Astreal Developers',
  path: '/services/astreal',
} as const

const ASTREAL_SIBLING_PAGES = [
  { label: 'About us', path: '/services/astreal/about' },
  { label: 'Our Services', path: '/services/astreal/our-services' },
  { label: 'Invest in Cyprus', path: '/services/astreal/invest-in-cyprus' },
] as const

type AstrealPageNavProps = {
  currentLabel: string
}

export default function AstrealPageNav({ currentLabel }: AstrealPageNavProps) {
  const { pathname } = useLocation()
  const reduceMotion = useReducedMotion()

  const siblings = ASTREAL_SIBLING_PAGES.filter((page) => page.path !== pathname)

  const enter = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.45, ease: EASE },
      }

  return (
    <motion.nav className="astreal-page-nav" aria-label="Page navigation" {...enter}>
      <Link to={ASTREAL_HUB.path} className="astreal-page-nav__btn astreal-page-nav__btn--back">
        ← Hub
      </Link>

      <span className="astreal-page-nav__btn astreal-page-nav__btn--current" aria-current="page">
        {currentLabel}
      </span>

      {siblings.map((page) => (
        <Link key={page.path} to={page.path} className="astreal-page-nav__btn astreal-page-nav__btn--link">
          {page.label}
        </Link>
      ))}

      <Link
        to={`${ASTREAL_HUB.path}#astreal-projects`}
        className="astreal-page-nav__btn astreal-page-nav__btn--link"
      >
        Projects
      </Link>
    </motion.nav>
  )
}
