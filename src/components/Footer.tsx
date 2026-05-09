import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MAIN_LOGO } from '../data/mainLogo'
import { socialLinks } from '../data/socialLinks'

export default function Footer() {
  const { t } = useTranslation()
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
              src={MAIN_LOGO.src}
              alt="Komodromos Group"
              className="footer2-logo-img"
              width={MAIN_LOGO.width}
              height={MAIN_LOGO.height}
              loading="lazy"
              decoding="async"
            />
          </Link>
        </div>

        <div className="footer2-actions">
          {footerLinks.map((link, i) => (
            <span key={link.label}>
              <Link to={link.to}>{link.label}</Link>
              {i < footerLinks.length - 1 && (
                <span className="footer2-sep">&mdash;</span>
              )}
            </span>
          ))}
        </div>

        <div className="footer2-socials">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label}>
              {s.svg}
            </a>
          ))}
        </div>

        <div className="footer2-bottom">
          <span>{t('footer.copyright')}</span>
          <span className="footer2-tagline">
            {t('footer.tagline1')}
            <br />
            {t('footer.tagline2')}
            <br />
            {t('footer.tagline3')}
          </span>
        </div>
      </div>
    </footer>
  )
}
