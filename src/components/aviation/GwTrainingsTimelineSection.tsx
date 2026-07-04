import { useCallback, useId, useState, type KeyboardEvent } from 'react'
import {
  Award,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Plane,
  Route,
  Shield,
} from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { trainingsTimeline, trainingsTimelineSection } from '../../data/aviationTrainingsPage'

const BEAT_ICONS = [ClipboardCheck, BookOpen, Plane, Route, Shield, Award] as const

export default function GwTrainingsTimelineSection() {
  const reduceMotion = useReducedMotion()
  const baseId = useId()
  const [activeIndex, setActiveIndex] = useState(0)

  const lastIndex = trainingsTimeline.length - 1
  const activeStep = trainingsTimeline[activeIndex]
  const ActiveIcon = BEAT_ICONS[activeIndex] ?? ClipboardCheck
  const progress = lastIndex === 0 ? 100 : (activeIndex / lastIndex) * 100
  const isSingleItem = activeStep.items.length === 1

  const selectStep = useCallback((index: number) => {
    setActiveIndex(Math.max(0, Math.min(index, lastIndex)))
  }, [lastIndex])

  function handleBeatKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      next = index === lastIndex ? 0 : index + 1
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
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

    selectStep(next)
    document.getElementById(`${baseId}-beat-${next}`)?.focus()
  }

  return (
    <section className="gw-trainings-section gw-trainings-section--timeline" aria-labelledby="gw-trainings-timeline-title">
      <div className="gw-trainings-timeline-explorer__bg" aria-hidden />
      <div className="container gw-trainings-timeline-explorer">
        <header className="gw-trainings-timeline-explorer__header reveal">
          <p className="gw-trainings-section__eyebrow gw-trainings-section__eyebrow--light">
            {trainingsTimelineSection.eyebrow}
          </p>
          <h2 id="gw-trainings-timeline-title" className="gw-trainings-section__title gw-trainings-section__title--light">
            {trainingsTimelineSection.title}
          </h2>
          <p className="gw-trainings-timeline-explorer__intro">{trainingsTimelineSection.intro}</p>
        </header>

        <div className="gw-trainings-beats reveal reveal-delay-1">
          <div className="gw-trainings-beats__track-shell" aria-hidden>
            <div className="gw-trainings-beats__track">
              <motion.div
                className="gw-trainings-beats__progress"
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          <div className="gw-trainings-beats__nav" role="tablist" aria-label="Training programme phases">
            {trainingsTimeline.map((step, index) => {
              const isActive = index === activeIndex
              const isComplete = index < activeIndex
              const Icon = BEAT_ICONS[index] ?? ClipboardCheck

              return (
                <button
                  key={step.title}
                  type="button"
                  id={`${baseId}-beat-${index}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${baseId}-beat-panel`}
                  tabIndex={isActive ? 0 : -1}
                  className={`gw-trainings-beat${isActive ? ' gw-trainings-beat--active' : ''}${isComplete ? ' gw-trainings-beat--complete' : ''}`}
                  onClick={() => selectStep(index)}
                  onKeyDown={(event) => handleBeatKeyDown(event, index)}
                >
                  <span className="gw-trainings-beat__node" aria-hidden>
                    <Icon className="gw-trainings-beat__icon" strokeWidth={1.5} />
                    <span className="gw-trainings-beat__index">{step.step}</span>
                  </span>
                  <span className="gw-trainings-beat__label">{step.shortLabel}</span>
                  <span className="gw-trainings-beat__title">{step.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="gw-trainings-beat-panel-wrap reveal reveal-delay-2">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeStep.title}
              id={`${baseId}-beat-panel`}
              role="tabpanel"
              aria-labelledby={`${baseId}-beat-${activeIndex}`}
              className="gw-trainings-beat-panel"
              initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12, scale: 0.99 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="gw-trainings-beat-panel__accent" aria-hidden />
              <div className="gw-trainings-beat-panel__head">
                <span className="gw-trainings-beat-panel__icon-wrap" aria-hidden>
                  <ActiveIcon className="gw-trainings-beat-panel__icon" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="gw-trainings-beat-panel__phase">
                    Phase {activeStep.step} · Step {parseInt(activeStep.step, 10)} of {trainingsTimeline.length}
                  </p>
                  <h3 className="gw-trainings-beat-panel__title">{activeStep.title}</h3>
                </div>
                <div className="gw-trainings-beat-panel__counter" aria-hidden>
                  <span className="gw-trainings-beat-panel__counter-value">{activeStep.step}</span>
                </div>
              </div>

              {isSingleItem ? (
                <p className="gw-trainings-beat-panel__text">{activeStep.items[0]}</p>
              ) : (
                <ul className="gw-trainings-beat-panel__list" aria-label={`${activeStep.title} milestones`}>
                  {activeStep.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      className="gw-trainings-beat-panel__item"
                      initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: reduceMotion ? 0.01 : 0.32,
                        delay: reduceMotion ? 0 : itemIndex * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <span className="gw-trainings-beat-panel__item-index" aria-hidden>
                        {String(itemIndex + 1).padStart(2, '0')}
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.article>
          </AnimatePresence>

          <div className="gw-trainings-beat-controls">
            <button
              type="button"
              className="gw-trainings-beat-controls__btn"
              aria-label="Previous phase"
              disabled={activeIndex === 0}
              onClick={() => selectStep(activeIndex - 1)}
            >
              <ChevronLeft aria-hidden size={18} strokeWidth={2} />
            </button>
            <p className="gw-trainings-beat-controls__label">
              {activeStep.shortLabel} · {activeIndex + 1}/{trainingsTimeline.length}
            </p>
            <button
              type="button"
              className="gw-trainings-beat-controls__btn"
              aria-label="Next phase"
              disabled={activeIndex === lastIndex}
              onClick={() => selectStep(activeIndex + 1)}
            >
              <ChevronRight aria-hidden size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
