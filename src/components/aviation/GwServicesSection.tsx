import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight, Briefcase, Building2, GraduationCap, PlaneTakeoff } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import GwSectionHeader from './GwSectionHeader'
import { getAviationServiceCards, type AviationServiceCard } from '../../data/globalWingsPage'

const SERVICE_ICONS: Record<AviationServiceCard['icon'], LucideIcon> = {
  pilots: PlaneTakeoff,
  airlines: Building2,
  jobs: Briefcase,
  trainings: GraduationCap,
}

function GwServiceCard({
  item,
  index,
  reduceMotion,
}: {
  item: AviationServiceCard
  index: number
  reduceMotion: boolean | null
}) {
  const Icon = SERVICE_ICONS[item.icon]

  return (
    <motion.div
      className="gw-services-grid__item"
      initial={reduceMotion ? false : { opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: reduceMotion ? 0.01 : 0.65,
        delay: reduceMotion ? 0 : index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link to={item.to} className="gw-service-card">
        <div className="gw-service-card__media">
          <motion.div
            className="gw-service-card__photo-wrap"
            whileHover={reduceMotion ? undefined : { scale: 1.06 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              className="gw-service-card__photo"
              src={item.imageSrc}
              alt={item.imageAlt}
              width={960}
              height={1280}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              draggable={false}
              style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
            />
            <div className="gw-service-card__overlay" aria-hidden />
            <div className="gw-service-card__shine" aria-hidden />
          </motion.div>

          <div className="gw-service-card__content">
            <div className="gw-service-card__meta">
              <span className="gw-service-card__index" aria-hidden>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="gw-service-card__icon" aria-hidden>
                <Icon size={18} strokeWidth={1.75} />
              </span>
            </div>

            <div className="gw-service-card__copy">
              <h3 className="gw-service-card__title">{item.title}</h3>
              <p className="gw-service-card__description">{item.description}</p>
              <span className="gw-service-card__cta">
                Explore service
                <ArrowUpRight className="gw-service-card__cta-icon" size={15} strokeWidth={2} aria-hidden />
              </span>
            </div>
          </div>
        </div>

        <span className="gw-service-card__accent" aria-hidden />
      </Link>
    </motion.div>
  )
}

export default function GwServicesSection({ sectionId }: { sectionId: string }) {
  const reduceMotion = useReducedMotion()
  const aviationServiceCards = getAviationServiceCards()

  return (
    <section id={sectionId} className="gw-section gw-section--services">
      <div className="gw-services-section__bg" aria-hidden />
      <div className="container">
        <GwSectionHeader
          className="gw-services-section__header"
          eyebrow="What we offer"
          title="Our Services"
          intro="End-to-end aviation solutions — from pilot recruitment and airline staffing to global careers and professional training."
        />
      </div>

      <div className="gw-section__bleed gw-services-grid">
        {aviationServiceCards.map((item, i) => (
          <GwServiceCard key={item.icon} item={item} index={i} reduceMotion={reduceMotion} />
        ))}
      </div>
    </section>
  )
}
