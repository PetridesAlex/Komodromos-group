import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import { TAXNEX_SOCIAL_URLS } from '../data/taxNexPageContent'

/** Brand-coloured Instagram / Facebook / YouTube marks for the TaxNex top bar. */
export default function TaxNexTopbarSocials() {
  const { t } = useTranslation()
  const igGradId = `taxnex-ig-grad-${useId().replace(/:/g, '')}`

  return (
    <div className="taxnex-topbar__socials" role="navigation" aria-label={t('tax.topbarSocialAria')}>
      <a
        className="taxnex-topbar-social__link taxnex-topbar-social__link--ig"
        href={TAXNEX_SOCIAL_URLS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden className="taxnex-topbar-social__svg">
          <defs>
            <linearGradient id={igGradId} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFDC80" />
              <stop offset="45%" stopColor="#F77737" />
              <stop offset="100%" stopColor="#C32AA3" />
            </linearGradient>
          </defs>
          <path
            fill={`url(#${igGradId})`}
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
          />
        </svg>
      </a>
      <a
        className="taxnex-topbar-social__link taxnex-topbar-social__link--yt"
        href={TAXNEX_SOCIAL_URLS.youtube}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden className="taxnex-topbar-social__svg">
          <path
            fill="#FF0000"
            d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
          />
          <path fill="#fff" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </a>
      <a
        className="taxnex-topbar-social__link taxnex-topbar-social__link--fb"
        href={TAXNEX_SOCIAL_URLS.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden className="taxnex-topbar-social__svg">
          <path
            fill="#0866FF"
            d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
          />
        </svg>
      </a>
    </div>
  )
}
