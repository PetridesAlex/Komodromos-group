import {
  ArrowRight,
  CalendarHeart,
  Gift,
  Lightbulb,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { weddingConsultationCopy } from '../data/weddingPageCopy'
import { openWeddingSkyBooking } from '../lib/weddingSkyBooking'
import { useWeddingLocale } from '../lib/weddingLocale'

type Props = {
  collectionName: string
}

const BENEFIT_META = [
  { tone: 'gold', Icon: Gift },
  { tone: 'azure', Icon: Lightbulb },
  { tone: 'pearl', Icon: ShieldCheck },
] as const

export default function WeddingConsultationPromo({ collectionName }: Props) {
  const { t } = useWeddingLocale()
  const copy = weddingConsultationCopy

  const handleBook = () => {
    openWeddingSkyBooking({ collectionName })
  }

  return (
    <section
      className="wedding-consult-promo"
      aria-labelledby="wedding-consult-promo-title"
    >
      <div className="wedding-consult-promo__backdrop" aria-hidden>
        <span className="wedding-consult-promo__orb wedding-consult-promo__orb--gold" />
        <span className="wedding-consult-promo__orb wedding-consult-promo__orb--blue" />
        <span className="wedding-consult-promo__orb wedding-consult-promo__orb--azure" />
        <span className="wedding-consult-promo__mesh" />
        <span className="wedding-consult-promo__sheen" />
      </div>

      <div className="container wedding-consult-promo__inner">
        <div className="wedding-consult-promo__content">
          <p className="wedding-consult-promo__eyebrow">
            <Sparkles size={14} strokeWidth={1.75} aria-hidden />
            {t(copy.eyebrow)}
          </p>
          <h2 id="wedding-consult-promo-title" className="wedding-consult-promo__headline">
            {t(copy.headline)}
          </h2>
          <p className="wedding-consult-promo__subline">{t(copy.subline)}</p>

          <ul className="wedding-consult-promo__benefits">
            {copy.benefits.map((benefit, index) => {
              const meta = BENEFIT_META[index] ?? BENEFIT_META[0]
              const Icon = meta.Icon
              return (
                <li
                  key={benefit.en}
                  className={`wedding-consult-promo__chip wedding-consult-promo__chip--${meta.tone}`}
                  style={{ ['--chip-i' as string]: String(index) }}
                >
                  <span className="wedding-consult-promo__chip-glow" aria-hidden />
                  <span className="wedding-consult-promo__chip-sheen" aria-hidden />
                  <span className="wedding-consult-promo__chip-icon" aria-hidden>
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="wedding-consult-promo__chip-label">{t(benefit)}</span>
                </li>
              )
            })}
          </ul>

          {collectionName ? (
            <p className="wedding-consult-promo__collection">{collectionName}</p>
          ) : null}

          <div className="wedding-consult-promo__actions">
            <button type="button" className="wedding-consult-promo__cta" onClick={handleBook}>
              <span className="wedding-consult-promo__cta-sheen" aria-hidden />
              <span className="wedding-consult-promo__cta-label">
                <CalendarHeart size={18} strokeWidth={1.75} aria-hidden />
                {t(copy.cta)}
                <ArrowRight size={16} strokeWidth={2} aria-hidden />
              </span>
            </button>
            <p className="wedding-consult-promo__cta-sub">{t(copy.ctaSub)}</p>
          </div>

          <p className="wedding-consult-promo__trust">{t(copy.trustLine)}</p>
        </div>
      </div>
    </section>
  )
}
