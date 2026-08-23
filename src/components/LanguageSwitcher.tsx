import { useTranslation } from 'react-i18next'
import { resolveWeddingLocale, WEDDING_LOCALES, type WeddingLocale } from '../lib/weddingLocale'

const LANGUAGE_META: Record<
  WeddingLocale,
  { labelKey: string; switchKey: string; short: string }
> = {
  en: {
    short: 'EN',
    labelKey: 'common.language.en',
    switchKey: 'common.language.switchToEnglish',
  },
  el: {
    short: 'EL',
    labelKey: 'common.language.gr',
    switchKey: 'common.language.switchToGreek',
  },
  ru: {
    short: 'RU',
    labelKey: 'common.language.ru',
    switchKey: 'common.language.switchToRussian',
  },
}

type Props = {
  className?: string
  /** Restrict visible languages (defaults to all three). */
  languages?: readonly WeddingLocale[]
}

export default function LanguageSwitcher({
  className,
  languages = WEDDING_LOCALES,
}: Props) {
  const { i18n, t } = useTranslation()
  const activeLanguage = resolveWeddingLocale(i18n.resolvedLanguage ?? i18n.language)

  return (
    <div
      className={['lang-switch', className].filter(Boolean).join(' ')}
      role="group"
      aria-label={t('common.language.switcher')}
    >
      {languages.map((lng) => {
        const meta = LANGUAGE_META[lng]
        return (
          <button
            key={lng}
            type="button"
            className={`lang-switch__btn${activeLanguage === lng ? ' lang-switch__btn--active' : ''}`}
            onClick={() => void i18n.changeLanguage(lng)}
            aria-pressed={activeLanguage === lng}
            aria-label={t(meta.switchKey)}
          >
            {t(meta.labelKey, { defaultValue: meta.short })}
          </button>
        )
      })}
    </div>
  )
}
