import { Link, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { getAstrealRoutes } from '../lib/brandPaths'

const EASE = [0.22, 1, 0.36, 1] as const

const navContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
} as const

const navItem = {
  hidden: { opacity: 0, y: -6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: EASE },
  },
} as const

const MotionLink = motion.create(Link)

type AstrealPageNavProps = {
  currentLabel: string
}

export default function AstrealPageNav({ currentLabel }: AstrealPageNavProps) {
  const { pathname } = useLocation()
  const reduceMotion = useReducedMotion()
  const routes = getAstrealRoutes()

  const siblingPages = [
    { label: 'About us', path: routes.about },
    { label: 'Our Services', path: routes.ourServices },
    { label: 'Invest in Cyprus', path: routes.invest },
  ] as const

  const siblings = siblingPages.filter((page) => page.path !== pathname)

  const linkMotion = reduceMotion
    ? {}
    : {
        whileHover: { y: -1 },
        whileTap: { y: 0 },
        transition: { duration: 0.24, ease: EASE },
      }

  const motionProps = reduceMotion
    ? {}
    : {
        variants: navContainer,
        initial: 'hidden' as const,
        animate: 'visible' as const,
      }

  const itemVariants = reduceMotion ? undefined : navItem

  return (
    <motion.nav className="astreal-page-nav" aria-label="Page navigation" {...motionProps}>
      <MotionLink
        to={routes.home}
        className="astreal-page-nav__btn astreal-page-nav__btn--back"
        variants={itemVariants}
        {...linkMotion}
      >
        ← Hub
      </MotionLink>

      <span className="astreal-page-nav__divider" aria-hidden />

      <motion.span
        className="astreal-page-nav__btn astreal-page-nav__btn--current"
        aria-current="page"
        variants={itemVariants}
      >
        {currentLabel}
      </motion.span>

      {siblings.map((page) => (
        <MotionLink
          key={page.path}
          to={page.path}
          className="astreal-page-nav__btn astreal-page-nav__btn--link"
          variants={itemVariants}
          {...linkMotion}
        >
          {page.label}
        </MotionLink>
      ))}

      <MotionLink
        to={routes.projectsHash}
        className="astreal-page-nav__btn astreal-page-nav__btn--link"
        variants={itemVariants}
        {...linkMotion}
      >
        Projects
      </MotionLink>
    </motion.nav>
  )
}
