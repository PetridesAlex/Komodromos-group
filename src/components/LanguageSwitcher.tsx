import { useTranslation } from 'react-i18next'

const SUPPORTED_LANGUAGES = ['en', 'el'] as const

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const activeLanguage = i18n.resolvedLanguage === 'en' ? 'en' : 'el'

  return (
    <div className="lang-switch" role="group" aria-label="Language switcher">
      {SUPPORTED_LANGUAGES.map((lng) => (
        <button
          key={lng}
          type="button"
          className={`lang-switch__btn${activeLanguage === lng ? ' lang-switch__btn--active' : ''}`}
          onClick={() => void i18n.changeLanguage(lng)}
          aria-pressed={activeLanguage === lng}
          aria-label={lng === 'en' ? t('common.language.switchToEnglish') : t('common.language.switchToGreek')}
        >
          {lng === 'en' ? t('common.language.en') : t('common.language.gr')}
        </button>
      ))}
    </div>
  )
}
