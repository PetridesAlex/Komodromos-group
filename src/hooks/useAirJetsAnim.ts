import { useMemo } from 'react'
import { useReducedMotion, type Variants } from 'motion/react'

const JETS_EASE = [0.16, 1, 0.3, 1] as const

export function useAirJetsAnim() {
  const reduceMotion = useReducedMotion()

  return useMemo(() => {
    if (reduceMotion) {
      const still: Variants = { hidden: {}, visible: {} }
      return {
        introGroup: { hidden: {}, visible: { transition: { staggerChildren: 0 } } },
        introItem: still,
        listGroup: { hidden: {}, visible: { transition: { staggerChildren: 0 } } },
        article: still,
        articleBody: { hidden: {}, visible: { transition: { staggerChildren: 0 } } },
        articleHeading: still,
        segmentRow: { hidden: {}, visible: { transition: { staggerChildren: 0 } } },
        segmentText: still,
        segmentFig: still,
        galleryGroup: { hidden: {}, visible: { transition: { staggerChildren: 0 } } },
        galleryCell: still,
        foot: still,
      }
    }
    return {
      introGroup: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.4, staggerChildren: 0.1, delayChildren: 0.14 },
        },
      },
      introItem: {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: JETS_EASE } },
      },
      listGroup: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.16, delayChildren: 0.06 },
        },
      },
      article: {
        hidden: { opacity: 0, y: 48 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.68,
            ease: JETS_EASE,
            staggerChildren: 0.13,
            delayChildren: 0.06,
          },
        },
      },
      articleBody: {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.16, delayChildren: 0.02 },
        },
      },
      articleHeading: {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.58, ease: JETS_EASE },
        },
      },
      segmentRow: {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.04 } },
      },
      segmentText: {
        hidden: (flip: boolean) => ({ opacity: 0, x: flip ? 40 : -40 }),
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.58, ease: JETS_EASE },
        },
      },
      segmentFig: {
        hidden: (flip: boolean) => ({ opacity: 0, x: flip ? -44 : 44, scale: 0.94 }),
        visible: {
          opacity: 1,
          x: 0,
          scale: 1,
          transition: { duration: 0.65, ease: JETS_EASE },
        },
      },
      galleryGroup: {
        hidden: { opacity: 0 },
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
      },
      galleryCell: {
        hidden: { opacity: 0, y: 36, scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.58, ease: JETS_EASE },
        },
      },
      foot: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: JETS_EASE } },
      },
    }
  }, [reduceMotion])
}
