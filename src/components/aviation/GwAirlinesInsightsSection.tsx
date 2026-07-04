import { useState } from 'react'
import { ChevronDown, Globe2, Shield, Sparkles, Users } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { airlinesInsightSections, airlinesInsightsSection } from '../../data/aviationAirlineServicesPage'

const INSIGHT_ICONS = [Globe2, Users, Shield, Sparkles] as const

export default function GwAirlinesInsightsSection() {
  const reduceMotion = useReducedMotion()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="gw-airlines-section gw-airlines-section--insights" aria-labelledby="gw-airlines-insights-title">
      <div className="gw-airlines-insights__bg" aria-hidden />
      <div className="container gw-airlines-insights">
        <header className="gw-airlines-insights__header reveal">
          <p className="gw-airlines-section__eyebrow gw-airlines-section__eyebrow--light">
            {airlinesInsightsSection.eyebrow}
          </p>
          <h2 id="gw-airlines-insights-title" className="gw-airlines-section__title gw-airlines-section__title--light">
            {airlinesInsightsSection.title}
          </h2>
          <p className="gw-airlines-insights__intro">{airlinesInsightsSection.intro}</p>
        </header>

        <div className="gw-airlines-insights__stack">
          {airlinesInsightSections.map((section, index) => {
            const Icon = INSIGHT_ICONS[index] ?? Globe2
            const isOpen = openIndex === index
            const isFeatured = index === 0

            return (
              <motion.article
                key={section.title}
                className={`gw-airlines-insight reveal reveal-delay-${Math.min(index + 1, 4)}${isOpen ? ' gw-airlines-insight--open' : ''}${isFeatured ? ' gw-airlines-insight--featured' : ''}`}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: reduceMotion ? 0.01 : 0.5, delay: reduceMotion ? 0 : index * 0.08 }}
              >
                <div className="gw-airlines-insight__accent" aria-hidden />
                <button
                  type="button"
                  className="gw-airlines-insight__trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="gw-airlines-insight__index" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="gw-airlines-insight__icon-wrap" aria-hidden>
                    <Icon className="gw-airlines-insight__icon" strokeWidth={1.5} />
                  </span>
                  <span className="gw-airlines-insight__trigger-copy">
                    <span className="gw-airlines-insight__tag">{section.tag}</span>
                    <span className="gw-airlines-insight__title">{section.title}</span>
                  </span>
                  <ChevronDown className="gw-airlines-insight__chevron" aria-hidden size={18} strokeWidth={2} />
                </button>

                <div className="gw-airlines-insight__panel" hidden={!isOpen}>
                  <div className="gw-airlines-insight__panel-inner">
                    {section.paragraphs.map((para) => (
                      <p key={para} className="gw-airlines-insight__para">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
