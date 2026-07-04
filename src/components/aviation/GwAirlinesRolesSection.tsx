import { useCallback, useId, useState, type KeyboardEvent } from 'react'
import { ArrowRight, Briefcase, Plane, Wrench } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { AVIATION_ROUTES } from '../../data/globalWingsPage'
import {
  airlinesRoleCategories,
  airlinesRolesSection,
} from '../../data/aviationAirlineServicesPage'

const ROLE_ICONS = [Briefcase, Plane, Wrench] as const

const contactState = {
  serviceInterest: 'Aviation Agency Services',
  contactPrefill: {
    message: 'I would like to discuss airline staffing and recruitment requirements with Global Wings Ltd.',
  },
}

export default function GwAirlinesRolesSection() {
  const reduceMotion = useReducedMotion()
  const baseId = useId()
  const [activeIndex, setActiveIndex] = useState(0)

  const totalRoles = airlinesRoleCategories.reduce((sum, category) => sum + category.roles.length, 0)
  const activeCategory = airlinesRoleCategories[activeIndex]
  const ActiveIcon = ROLE_ICONS[activeIndex] ?? Briefcase

  const selectCategory = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const lastIndex = airlinesRoleCategories.length - 1
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
    <section className="gw-airlines-section gw-airlines-section--roles" aria-labelledby="gw-airlines-roles-title">
      <div className="gw-airlines-roles__bg" aria-hidden />
      <div className="container gw-airlines-roles">
        <header className="gw-airlines-roles__header reveal">
          <p className="gw-airlines-section__eyebrow">{airlinesRolesSection.eyebrow}</p>
          <h2 id="gw-airlines-roles-title" className="gw-airlines-section__title">
            {airlinesRolesSection.title}
          </h2>
          <p className="gw-airlines-roles__intro">{airlinesRolesSection.intro}</p>
          <ul className="gw-airlines-roles__stats" aria-label="Recruitment scope">
            <li>
              <span className="gw-airlines-roles__stat-value">{airlinesRoleCategories.length}</span>
              <span className="gw-airlines-roles__stat-label">Disciplines</span>
            </li>
            <li>
              <span className="gw-airlines-roles__stat-value">{totalRoles}+</span>
              <span className="gw-airlines-roles__stat-label">Role types</span>
            </li>
            <li>
              <span className="gw-airlines-roles__stat-value">Exec</span>
              <span className="gw-airlines-roles__stat-label">To technical</span>
            </li>
          </ul>
        </header>

        <div className="gw-airlines-roles__shell reveal reveal-delay-1">
          <div
            className="gw-airlines-roles__nav"
            role="tablist"
            aria-label="Airline role categories"
            aria-orientation="vertical"
          >
            {airlinesRoleCategories.map((category, index) => {
              const Icon = ROLE_ICONS[index] ?? Briefcase
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
                  className={`gw-airlines-roles__tab${isActive ? ' gw-airlines-roles__tab--active' : ''}`}
                  onClick={() => selectCategory(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                >
                  <span className="gw-airlines-roles__tab-index" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="gw-airlines-roles__tab-icon-wrap" aria-hidden>
                    <Icon className="gw-airlines-roles__tab-icon" strokeWidth={1.5} />
                  </span>
                  <span className="gw-airlines-roles__tab-copy">
                    <span className="gw-airlines-roles__tab-title">{category.shortLabel}</span>
                    <span className="gw-airlines-roles__tab-meta">{category.roles.length} roles</span>
                  </span>
                </button>
              )
            })}
          </div>

          <div className="gw-airlines-roles__panel-wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.title}
                id={`${baseId}-panel-${activeIndex}`}
                role="tabpanel"
                aria-labelledby={`${baseId}-tab-${activeIndex}`}
                className="gw-airlines-roles__panel"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="gw-airlines-roles__panel-head">
                  <span className="gw-airlines-roles__panel-icon-wrap" aria-hidden>
                    <ActiveIcon className="gw-airlines-roles__panel-icon" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="gw-airlines-roles__panel-eyebrow">Active discipline</p>
                    <h3 className="gw-airlines-roles__panel-title">{activeCategory.title}</h3>
                    <p className="gw-airlines-roles__panel-summary">{activeCategory.summary}</p>
                  </div>
                </div>

                <ul className="gw-airlines-roles__roles" aria-label={`${activeCategory.title} roles`}>
                  {activeCategory.roles.map((role, roleIndex) => (
                    <motion.li
                      key={role}
                      className="gw-airlines-roles__role"
                      initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: reduceMotion ? 0.01 : 0.24,
                        delay: reduceMotion ? 0 : roleIndex * 0.02,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {role}
                    </motion.li>
                  ))}
                </ul>

                <div className="gw-airlines-roles__panel-foot">
                  <p className="gw-airlines-roles__panel-note">
                    Need a bespoke airline staffing brief? Our consultants tailor searches to your fleet and network.
                  </p>
                  <Link to={AVIATION_ROUTES.contact} state={contactState} className="gw-airlines-roles__cta">
                    Discuss requirements
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
