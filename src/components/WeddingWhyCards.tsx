import { Wallet, Users, ShieldCheck, Sparkles, type LucideIcon } from 'lucide-react'
import { weddingWhyCopy } from '../data/weddingPageCopy'
import { useWeddingLocale } from '../lib/weddingLocale'

const WEDDING_WHY_ICONS: LucideIcon[] = [Wallet, Users, ShieldCheck, Sparkles]

export default function WeddingWhyCards() {
  const { t } = useWeddingLocale()

  return (
    <div className="wedding-why__grid">
      {weddingWhyCopy.items.map((item, index) => {
        const Icon = WEDDING_WHY_ICONS[index] ?? Sparkles
        const indexLabel = String(index + 1).padStart(2, '0')

        return (
          <article
            key={item.title.en}
            className={`wedding-why__card wedding-why__card--revealed reveal reveal-delay-${Math.min(index + 1, 4)}`}
            style={{ ['--why-i' as string]: String(index) }}
          >
            <span className="wedding-why__ghost" aria-hidden>
              {indexLabel}
            </span>
            <div className="wedding-why__card-top">
              <span className="wedding-why__icon" aria-hidden>
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <span className="wedding-why__index" aria-hidden>
                {indexLabel}
              </span>
            </div>
            <h3 className="wedding-why__card-title">{t(item.title)}</h3>
            <p className="wedding-why__text">{t(item.body)}</p>
            <span className="wedding-why__line" aria-hidden />
          </article>
        )
      })}
    </div>
  )
}
