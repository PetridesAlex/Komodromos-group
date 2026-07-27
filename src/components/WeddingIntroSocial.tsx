import { socialLinks } from '../data/socialLinks'

export default function WeddingIntroSocial() {
  return (
    <section className="wedding-intro-social" aria-labelledby="wedding-intro-heading">
      <div className="wedding-intro-social__ambient" aria-hidden />
      <div className="container wedding-intro-social__shell">
        <header className="wedding-intro-social__header">
          <p className="wedding-intro-social__eyebrow">The Wedding Sky standard</p>
          <h2 id="wedding-intro-heading" className="wedding-intro-social__title">
            Cyprus celebrations, composed with care
          </h2>
          <span className="wedding-intro-social__rule" aria-hidden />
        </header>

        <div className="wedding-intro-social__body">
          <article className="wedding-intro-social__column">
            <p className="wedding-intro-social__lang">English</p>
            <p className="wedding-intro-social__lead">
              We choreograph celebrations that feel intentional — from first concept to the
              last guest departure — with teams who understand hospitality, timing, and the
              emotional cadence of a wedding week.
            </p>
          </article>
          <article className="wedding-intro-social__column wedding-intro-social__column--el">
            <p className="wedding-intro-social__lang">Ελληνικά</p>
            <p className="wedding-intro-social__lead-el" lang="el">
              Οργανώνουμε γάμους με ακρίβεια και ζεστασιά — από την πρώτη ιδέα μέχρι το αντίο των
              καλεσμένων — με ομάδες που σέβονται τη φιλοξενία, το χρόνο και τη συγκίνηση μιας
              εβδομάδας γάμου.
            </p>
          </article>
        </div>

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
    </section>
  )
}
