import { socialLinks } from '../data/socialLinks'

const INTRO_IMAGE = '/images/services/wedding-highlights/destinations.webp'

export default function WeddingIntroSocial() {
  return (
    <section className="wedding-intro-social" aria-labelledby="wedding-intro-heading">
      <div className="wedding-intro-social__ambient" aria-hidden />
      <div className="container wedding-intro-social__shell">
        <div className="wedding-intro-social__stage">
          <figure className="wedding-intro-social__media reveal-left">
            <img
              src={INTRO_IMAGE}
              alt="A refined Wedding Sky celebration setting in Cyprus"
              loading="lazy"
              decoding="async"
            />
            <div className="wedding-intro-social__media-scrim" aria-hidden />
            <figcaption className="wedding-intro-social__media-caption">
              <span>Wedding Sky</span>
              <strong>Composed in Cyprus</strong>
            </figcaption>
          </figure>

          <div className="wedding-intro-social__copy reveal-right reveal-delay-2">
            <header className="wedding-intro-social__header">
              <p className="wedding-intro-social__eyebrow">The Wedding Sky standard</p>
              <h2 id="wedding-intro-heading" className="wedding-intro-social__title">
                Cyprus celebrations, composed with care
              </h2>
              <span className="wedding-intro-social__rule" aria-hidden />
            </header>

            <p className="wedding-intro-social__lead">
              We choreograph celebrations that feel intentional — from first concept to the
              last guest departure — with teams who understand hospitality, timing, and the
              emotional cadence of a wedding week.
            </p>
            <p className="wedding-intro-social__lead wedding-intro-social__lead--secondary">
              Every detail is shaped around your story: venues with atmosphere, vendors who
              deliver under pressure, and a run of show that stays calm when the room is full.
            </p>

            <div className="wedding-intro-social__connect">
              <span className="wedding-intro-social__connect-label">Follow Wedding Sky</span>
              <nav className="wedding-intro-social__nav" aria-label="Wedding Sky social media">
                {socialLinks.slice(0, 5).map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className={`wedding-intro-social__pill ${s.navClass}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="wedding-intro-social__pill-icon">{s.svg}</span>
                    <span className="wedding-intro-social__pill-text">{s.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
