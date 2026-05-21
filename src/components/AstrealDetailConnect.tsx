import { Link } from 'react-router-dom'
import { socialLinks } from '../data/socialLinks'
import {
  ASTREAL_CONTACT_EMAIL,
  ASTREAL_CONTACT_PHONES,
  getAstrealViberUrl,
  getAstrealWhatsAppUrl,
} from '../data/astrealContact'

type Props = {
  projectTitle: string
}

const INSTANT_CHANNELS = [
  { key: 'whatsapp', label: 'WhatsApp', navClass: 'wa', sub: 'Message our team' },
  { key: 'viber', label: 'Viber', navClass: 'vb', sub: 'Open Viber chat' },
] as const

export default function AstrealDetailConnect({ projectTitle }: Props) {
  const serviceInterest = `Astreal — ${projectTitle}`
  const otherSocials = socialLinks.filter((s) => s.label !== 'WhatsApp' && s.label !== 'Viber')

  return (
    <section
      className="astreal-detail-connect section-led"
      aria-labelledby="astreal-detail-connect-heading"
    >
      <div className="astreal-detail-article__inner">
        <div className="astreal-detail-connect__panel">
          <p className="astreal-detail-connect__eyebrow">Private consultation</p>
          <h2 id="astreal-detail-connect-heading" className="astreal-detail-connect__title">
            Request details or book a viewing
          </h2>
          <p className="astreal-detail-connect__lede">
            Speak with Astreal Developers — operated by Komodromos Group. Choose the channel that suits you:
            instant messaging, a direct call, or a formal enquiry.
          </p>

          <div className="astreal-detail-connect__cta-row">
            <Link
              to="/contact"
              className="astreal-detail-connect__btn astreal-detail-connect__btn--primary"
              state={{ serviceInterest, contactPrefill: { message: `I would like to book a private viewing for ${projectTitle}.` } }}
            >
              <span className="astreal-detail-connect__btn-text">Book an appointment</span>
            </Link>
            <Link
              to="/contact"
              className="astreal-detail-connect__btn astreal-detail-connect__btn--ghost"
              state={{ serviceInterest, contactPrefill: { message: `Please send full details for ${projectTitle}.` } }}
            >
              <span className="astreal-detail-connect__btn-text">Request details</span>
            </Link>
          </div>

          <div className="astreal-detail-connect__phones" aria-label="Phone numbers">
            <p className="astreal-detail-connect__block-label">Call us directly</p>
            <ul className="astreal-detail-connect__phone-list">
              {ASTREAL_CONTACT_PHONES.map((phone) => (
                <li key={phone.tel}>
                  <a href={`tel:${phone.tel}`} className="astreal-detail-connect__phone">
                    <span className="astreal-detail-connect__phone-icon" aria-hidden>
                      ☎
                    </span>
                    <span className="astreal-detail-connect__phone-text">
                      <span className="astreal-detail-connect__phone-label">{phone.label}</span>
                      <span className="astreal-detail-connect__phone-number">{phone.display}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a href={`mailto:${ASTREAL_CONTACT_EMAIL}`} className="astreal-detail-connect__email">
              {ASTREAL_CONTACT_EMAIL}
            </a>
          </div>

          <div className="astreal-detail-connect__instant">
            <p className="astreal-detail-connect__block-label">Instant messaging</p>
            <ul className="astreal-detail-connect__instant-grid">
              {INSTANT_CHANNELS.map((channel) => {
                const href =
                  channel.key === 'whatsapp'
                    ? getAstrealWhatsAppUrl(projectTitle)
                    : getAstrealViberUrl()
                const link = socialLinks.find((s) => s.label === channel.label)
                return (
                  <li key={channel.key}>
                    <a
                      href={href}
                      className={`astreal-detail-connect__instant-card astreal-detail-connect__instant-card--${channel.navClass}`}
                      target={channel.key === 'whatsapp' ? '_blank' : undefined}
                      rel={channel.key === 'whatsapp' ? 'noopener noreferrer' : undefined}
                    >
                      <span className={`astreal-detail-connect__instant-icon social ${channel.navClass}`}>
                        {link?.svg}
                      </span>
                      <span className="astreal-detail-connect__instant-copy">
                        <span className="astreal-detail-connect__instant-name">{channel.label}</span>
                        <span className="astreal-detail-connect__instant-sub">{channel.sub}</span>
                      </span>
                      <span className="astreal-detail-connect__instant-arrow" aria-hidden>
                        →
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="astreal-detail-connect__socials">
            <p className="astreal-detail-connect__block-label">Follow &amp; connect</p>
            <ul className="astreal-detail-connect__social-grid">
              {otherSocials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className={`social ${s.navClass}`}
                    aria-label={s.label}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {s.svg}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
