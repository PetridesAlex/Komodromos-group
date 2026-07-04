import { useCallback, useId, useState, type KeyboardEvent } from 'react'
import { Award, ClipboardCheck, Plane, Stethoscope, Wrench } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { trainingsServiceCategories, trainingsServicesSection } from '../../data/aviationTrainingsPage'

const SERVICE_ICONS = [Plane, Award, ClipboardCheck, Stethoscope, Wrench] as const

export default function GwTrainingsServicesSection() {
  const reduceMotion = useReducedMotion()
  const baseId = useId()
  const [activeIndex, setActiveIndex] = useState(0)

  const totalServices = trainingsServiceCategories.reduce((sum, category) => sum + category.items.length, 0)
  const activeCategory = trainingsServiceCategories[activeIndex]
  const ActiveIcon = SERVICE_ICONS[activeIndex] ?? Plane
  const summary = activeCategory.summary ?? ''

  const selectCategory = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const lastIndex = trainingsServiceCategories.length - 1
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
    <section className="gw-trainings-section gw-trainings-section--services" aria-labelledby="gw-trainings-services-title">
      <div className="gw-trainings-services__bg" aria-hidden />
      <div className="container gw-trainings-services">
        <header className="gw-trainings-services__header reveal">
          <p className="gw-trainings-section__eyebrow gw-trainings-section__eyebrow--light">
            {trainingsServicesSection.eyebrow}
          </p>
          <h2
            id="gw-trainings-services-title"
            className="gw-trainings-section__title gw-trainings-section__title--light"
          >
            {trainingsServicesSection.title}
          </h2>
          <p className="gw-trainings-services__intro">{trainingsServicesSection.intro}</p>
          <ul className="gw-trainings-services__stats" aria-label="Training scope">
            <li>
              <span className="gw-trainings-services__stat-value">{trainingsServiceCategories.length}</span>
              <span className="gw-trainings-services__stat-label">Categories</span>
            </li>
            <li>
              <span className="gw-trainings-services__stat-value">{totalServices}+</span>
              <span className="gw-trainings-services__stat-label">Programmes</span>
            </li>
            <li>
              <span className="gw-trainings-services__stat-value">EASA</span>
              <span className="gw-trainings-services__stat-label">Standards</span>
            </li>
          </ul>
        </header>

        <div className="gw-trainings-services__shell reveal reveal-delay-1">
          <div
            className="gw-trainings-services__nav"
            role="tablist"
            aria-label="Training service categories"
            aria-orientation="vertical"
          >
            {trainingsServiceCategories.map((category, index) => {
              const Icon = SERVICE_ICONS[index] ?? Plane
              const isActive = index === activeIndex
              const shortLabel = category.shortLabel

              return (
                <button
                  key={category.title}
                  type="button"
                  id={`${baseId}-tab-${index}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${baseId}-panel-${index}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`gw-trainings-services__tab${isActive ? ' gw-trainings-services__tab--active' : ''}`}
                  onClick={() => selectCategory(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                >
                  <span className="gw-trainings-services__tab-index" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="gw-trainings-services__tab-icon-wrap" aria-hidden>
                    <Icon className="gw-trainings-services__tab-icon" strokeWidth={1.5} />
                  </span>
                  <span className="gw-trainings-services__tab-copy">
                    <span className="gw-trainings-services__tab-title">{shortLabel}</span>
                    <span className="gw-trainings-services__tab-meta">{category.items.length} programmes</span>
                  </span>
                </button>
              )
            })}
          </div>

          <div className="gw-trainings-services__panel-wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.title}
                id={`${baseId}-panel-${activeIndex}`}
                role="tabpanel"
                aria-labelledby={`${baseId}-tab-${activeIndex}`}
                className="gw-trainings-services__panel"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="gw-trainings-services__panel-head">
                  <span className="gw-trainings-services__panel-icon-wrap" aria-hidden>
                    <ActiveIcon className="gw-trainings-services__panel-icon" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="gw-trainings-services__panel-eyebrow">Active category</p>
                    <h3 className="gw-trainings-services__panel-title">{activeCategory.title}</h3>
                    {summary ? <p className="gw-trainings-services__panel-summary">{summary}</p> : null}
                  </div>
                </div>

                <ul className="gw-trainings-services__chips" aria-label={`${activeCategory.title} programmes`}>
                  {activeCategory.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      className="gw-trainings-services__chip"
                      initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: reduceMotion ? 0.01 : 0.28,
                        delay: reduceMotion ? 0 : itemIndex * 0.03,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
