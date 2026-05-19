import { useCallback, useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import { TAX_NEX_FAQ_SECTION_ID } from '../data/taxNexFaqData'

type NavLinkItem = {
  key: string
  label: string
  href: string
  isRouter?: boolean
  cta?: boolean
}

type NavToolItem = {
  key: string
  label: string
  href: string
  isRouter?: boolean
}

export default function TaxNexPageNav() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const panelId = useId()

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen, closeMenu])

  const mainLinks: NavLinkItem[] = [
    { key: 'intro', label: t('serviceDetail.intro'), href: '#tax-hero' },
    { key: 'services', label: t('serviceDetail.services'), href: '/services/tax/services', isRouter: true },
    { key: 'packages', label: t('serviceDetail.packages'), href: '#tax-pricing' },
    { key: 'mission', label: t('serviceDetail.mission'), href: '#tax-mission' },
    { key: 'steps', label: t('serviceDetail.steps'), href: '#tax-steps' },
    { key: 'trust', label: t('serviceDetail.trust'), href: '#tax-trust' },
    { key: 'changes', label: t('serviceDetail.changes2026'), href: '#tax-changes-2026' },
    {
      key: 'faq',
      label: t('serviceDetail.faq'),
      href: `/services/tax#${TAX_NEX_FAQ_SECTION_ID}`,
      isRouter: true,
    },
    { key: 'updates', label: t('serviceDetail.updates'), href: '#tax-newsletter' },
    { key: 'request', label: t('serviceDetail.request'), href: '#tax-contact', cta: true },
  ]

  const toolLinks: NavToolItem[] = [
    {
      key: 'income-calc',
      label: t('serviceDetail.incomeTaxCalc'),
      href: '/services/tax/income-tax-calculator',
      isRouter: true,
    },
    { key: 'residence', label: t('serviceDetail.taxResidenceCheck'), href: '#tax-tools' },
    {
      key: 'transfer',
      label: t('serviceDetail.transferFeesCalc'),
      href: '/services/tax/transfer-fees-calculator',
      isRouter: true,
    },
    {
      key: 'exemption-20',
      label: t('serviceDetail.taxExemption20'),
      href: '/services/tax/income-tax-calculator',
      isRouter: true,
    },
    {
      key: 'exemption-50',
      label: t('serviceDetail.taxExemption50'),
      href: '/services/tax/income-tax-calculator',
      isRouter: true,
    },
    { key: 'td59', label: 'FORM TD59', href: '#tax-tools' },
  ]

  const renderLink = (item: NavLinkItem | NavToolItem, className: string) => {
    if (item.isRouter) {
      return (
        <Link key={item.key} to={item.href} className={className} onClick={closeMenu}>
          {item.label}
        </Link>
      )
    }
    return (
      <a key={item.key} href={item.href} className={className} onClick={closeMenu}>
        {item.label}
      </a>
    )
  }

  const drawer =
    menuOpen &&
    createPortal(
      <>
        <button
          type="button"
          className="taxnex-nav__backdrop taxnex-nav__backdrop--visible"
          aria-hidden={false}
          onClick={closeMenu}
        />
        <div
          id={panelId}
          className="taxnex-nav__panel taxnex-nav__panel--open"
          role="dialog"
          aria-modal="true"
          aria-label={t('serviceDetail.taxNavAria')}
        >
          <div className="taxnex-nav__panel-head">
            <p className="taxnex-nav__panel-title">{t('serviceDetail.taxNavAria')}</p>
            <button type="button" className="taxnex-nav__close" onClick={closeMenu} aria-label={t('common.close', 'Close')}>
              ×
            </button>
          </div>

          <nav className="taxnex-nav__links">
            {mainLinks.map((item) =>
              renderLink(item, `taxnex-nav__link${item.cta ? ' taxnex-nav__link--cta' : ''}`),
            )}

            <div className="taxnex-nav__group">
              <p className="taxnex-nav__group-label">{t('serviceDetail.tools')}</p>
              <div className="taxnex-nav__group-links">
                {toolLinks.map((item) => renderLink(item, 'taxnex-nav__link taxnex-nav__link--sub'))}
              </div>
            </div>

            <div className="taxnex-nav__lang">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </>,
      document.body,
    )

  return (
    <>
      <button
        type="button"
        className={`taxnex-nav__toggle${menuOpen ? ' taxnex-nav__toggle--open' : ''}`}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={t('serviceDetail.taxNavAria')}
        aria-expanded={menuOpen}
        aria-controls={panelId}
      >
        <span className="taxnex-nav__toggle-icon" aria-hidden>
          <span />
          <span />
          <span />
        </span>
        <span className="taxnex-nav__toggle-label">menu</span>
      </button>
      {drawer}
    </>
  )
}
