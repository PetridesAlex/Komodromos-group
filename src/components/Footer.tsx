import { Link } from 'react-router-dom'
import i18n from '../i18n'
import { BRAND_MARK } from '../data/mainLogo'
import { socialLinks } from '../data/socialLinks'

/** Group footer (`footer2`) always uses English; TaxNex hub does not render this component. */
export default function Footer() {
  const t = i18n.getFixedT('en')
  const footerLinks = [
    { label: t('footer.bookConsultation'), to: '/contact' },
    { label: t('footer.viewServices'), to: '/#services' },
  ] as const

  return (
    <footer className="footer2">
      <div className="footer2-curve">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,80 C360,0 1080,0 1440,80 L1440,100 L0,100 Z"
            fill="#0a0f1a"
          />
        </svg>
      </div>

      <div className="footer2-body">
        <div className="footer2-orbs">
          <div className="footer2-orb footer2-orb-1" />
          <div className="footer2-orb footer2-orb-2" />
          <div className="footer2-orb footer2-orb-3" />
          <div className="footer2-orb footer2-orb-4" />
          <div className="footer2-orb footer2-orb-5" />
        </div>
        <div className="footer2-brand">
          <Link to="/" className="footer2-logo">
            <img
              src={BRAND_MARK.src}
              alt="Komodromos Group"
              className="footer2-logo-mark"
              width={BRAND_MARK.width}
              height={BRAND_MARK.height}
              loading="lazy"
              decoding="async"
            />
          </Link>
        </div>

        <div className="footer2-actions">
          {footerLinks.map((link) => (
            <Link key={link.label} to={link.to} className="footer2-actions__link">
              <span className="footer2-actions__fill" aria-hidden />
              <span className="footer2-actions__label">{link.label}</span>
            </Link>
          ))}
        </div>

        <div className="footer2-socials">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} className="footer2-socials__link" aria-label={s.label}>
              <span className="footer2-socials__icon">{s.svg}</span>
            </a>
          ))}
        </div>

        <div className="footer2-bottom">
          <div className="footer2-bottom__left">
            <span className="footer2-bottom__copy">{t('footer.copyright')}</span>
          </div>
          <span className="footer2-bottom__rule" aria-hidden />
          <div className="footer2-bottom__right">
            <span className="footer2-tagline">
              <span className="footer2-tagline__line">{t('footer.tagline1')}</span>
              <span className="footer2-tagline__line">{t('footer.tagline2')}</span>
              <span className="footer2-tagline__line footer2-tagline__line--accent">
                {t('footer.tagline3')}
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
