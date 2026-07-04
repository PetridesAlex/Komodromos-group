import { useCallback, useId, useState, type KeyboardEvent } from 'react'
import { ArrowRight, Briefcase, Compass, Plane, Users, Wrench } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { AVIATION_ROUTES } from '../../data/globalWingsPage'
import { jobsPositionCategories, jobsPositionsSection } from '../../data/aviationJobsPage'

const POSITION_ICONS = [Plane, Users, Wrench, Compass, Briefcase] as const

const SERVICE_INTEREST = 'Aviation Agency Services'

const contactVacanciesState = {
  serviceInterest: SERVICE_INTEREST,
  contactPrefill: {
    message: 'I would like to discuss aviation recruitment opportunities with Global Wings Ltd.',
  },
}

export default function GwJobsPositionsSection() {
  const reduceMotion = useReducedMotion()
  const baseId = useId()
  const [activeIndex, setActiveIndex] = useState(0)

  const totalRoles = jobsPositionCategories.reduce((sum, category) => sum + category.roles.length, 0)
  const activeCategory = jobsPositionCategories[activeIndex]
  const ActiveIcon = POSITION_ICONS[activeIndex] ?? Briefcase

  const selectCategory = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const lastIndex = jobsPositionCategories.length - 1
    let next = index

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault()
      next = index === lastIndex ? 0 : index + 1
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault()
      next = index === 0 ? lastIndex : index - 1
    } else if (event.key === 'Home') {
      event.preventDefault()
      next = 0
    } else if (event.key === 'End') {
      event.preventDefault()
      next = lastIndex
    } else {
      return
    }

    selectCategory(next)
    document.getElementById(`${baseId}-tab-${next}`)?.focus()
  }

  return (
    <section className="gw-jobs-section gw-jobs-section--positions" aria-labelledby="gw-jobs-positions-title">
      <div className="gw-jobs-positions__bg" aria-hidden />
      <div className="container gw-jobs-positions">
        <header className="gw-jobs-positions__header reveal">
          <p className="gw-jobs-section__eyebrow">{jobsPositionsSection.eyebrow}</p>
          <h2 id="gw-jobs-positions-title" className="gw-jobs-section__title">
            {jobsPositionsSection.title}
          </h2>
          <p className="gw-jobs-positions__intro">{jobsPositionsSection.intro}</p>
          <ul className="gw-jobs-positions__stats" aria-label="Recruitment scope">
            <li>
              <span className="gw-jobs-positions__stat-value">{jobsPositionCategories.length}</span>
              <span className="gw-jobs-positions__stat-label">Disciplines</span>
            </li>
            <li>
              <span className="gw-jobs-positions__stat-value">{totalRoles}+</span>
              <span className="gw-jobs-positions__stat-label">Role types</span>
            </li>
            <li>
              <span className="gw-jobs-positions__stat-value">Global</span>
              <span className="gw-jobs-positions__stat-label">Placements</span>
            </li>
          </ul>
        </header>

        <div className="gw-jobs-positions__shell reveal reveal-delay-1">
          <div
            className="gw-jobs-positions__nav"
            role="tablist"
            aria-label="Aviation position categories"
            aria-orientation="vertical"
          >
            {jobsPositionCategories.map((category, index) => {
              const Icon = POSITION_ICONS[index] ?? Briefcase
              const isActive = index === activeIndex

              return (
                <button
                  key={category.title}
                  type="button"
                  id={`${baseId}-tab-${index}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${baseId}-panel-${index}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`gw-jobs-positions__tab${isActive ? ' gw-jobs-positions__tab--active' : ''}`}
                  onClick={() => selectCategory(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="gw-jobs-positions-active"
                      className="gw-jobs-positions__tab-indicator"
                      transition={{
                        duration: reduceMotion ? 0 : 0.16,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      aria-hidden
                    />
                  ) : null}
                  <span className="gw-jobs-positions__tab-index" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="gw-jobs-positions__tab-icon-wrap" aria-hidden>
                    <Icon className="gw-jobs-positions__tab-icon" strokeWidth={2} />
                  </span>
                  <span className="gw-jobs-positions__tab-copy">
                    <span className="gw-jobs-positions__tab-title">{category.title}</span>
                    <span className="gw-jobs-positions__tab-meta">
                      {category.roles.length} roles
                    </span>
                  </span>
                </button>
              )
            })}
          </div>

          <div className="gw-jobs-positions__panel-wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.title}
                id={`${baseId}-panel-${activeIndex}`}
                role="tabpanel"
                aria-labelledby={`${baseId}-tab-${activeIndex}`}
                className="gw-jobs-positions__panel"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="gw-jobs-positions__panel-head">
                  <span className="gw-jobs-positions__panel-icon-wrap" aria-hidden>
                    <ActiveIcon className="gw-jobs-positions__panel-icon" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="gw-jobs-positions__panel-eyebrow">Active discipline</p>
                    <h3 className="gw-jobs-positions__panel-title">{activeCategory.title}</h3>
                    <p className="gw-jobs-positions__panel-summary">{activeCategory.summary}</p>
                  </div>
                </div>

                <ul className="gw-jobs-positions__roles" aria-label={`${activeCategory.title} roles`}>
                  {activeCategory.roles.map((role, roleIndex) => (
                    <motion.li
                      key={role}
                      className="gw-jobs-positions__role"
                      initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: reduceMotion ? 0.01 : 0.16,
                        delay: reduceMotion ? 0 : roleIndex * 0.02,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {role}
                    </motion.li>
                  ))}
                </ul>

                <div className="gw-jobs-positions__panel-foot">
                  <p className="gw-jobs-positions__panel-note">
                    Don&apos;t see your exact title? We recruit across adjacent aviation specialisms too.
                  </p>
                  <Link to={AVIATION_ROUTES.contact} state={contactVacanciesState} className="gw-jobs-positions__cta">
                    Discuss your role
                    <ArrowRight aria-hidden size={16} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
