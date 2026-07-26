import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { taxBrandHref } from '../lib/brandPaths'

function TickerCells({ phrase, gap }: { phrase: string; gap: string }) {
  const cell = `${phrase}${gap}`
  return (
    <>
      {[0, 1, 2, 3].map((key) => (
        <span key={key} className="tax-page-promo-bar__chunk">
          {cell}
        </span>
      ))}
    </>
  )
}

export default function TaxPagePromoBar() {
  const { t } = useTranslation()
  const phrase = t('serviceDetail.taxPromoTicker')
  const gap = t('serviceDetail.taxPromoSep')

  return (
    <div className="tax-page-promo-bar">
      <div className="tax-page-promo-bar__gloss" aria-hidden />
      <div className="tax-page-promo-bar__scanline" aria-hidden />
      <Link
        to={taxBrandHref('/services/tax#tax-contact')}
        className="tax-page-promo-bar__link"
        aria-label={t('serviceDetail.taxPromoCtaAria')}
      >
        <span className="tax-page-promo-bar__sr">{t('serviceDetail.taxPromoLine')}</span>
        <div className="tax-page-promo-bar__viewport" aria-hidden>
          <div className="tax-page-promo-bar__track">
            <div className="tax-page-promo-bar__half">
              <TickerCells phrase={phrase} gap={gap} />
            </div>
            <div className="tax-page-promo-bar__half">
              <TickerCells phrase={phrase} gap={gap} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
