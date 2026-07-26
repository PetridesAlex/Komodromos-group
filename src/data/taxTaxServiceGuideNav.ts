/**
 * Shared sidebar nav for TaxNex-style tax service inner guides (TIC, tax residence, etc.).
 */

import { taxBrandHref, taxPath } from '../lib/brandPaths'

export type TaxServiceGuideNavItem = {
  id: string
  labelEl: string
  labelEn: string
  href: string
  current?: boolean
}

function normalizePath(pathname: string): string {
  const trimmed = pathname.replace(/\/$/, '') || '/'
  return trimmed
}

const TAX_SERVICE_GUIDE_NAV_BASE: Omit<TaxServiceGuideNavItem, 'current'>[] = [
  {
    id: 'afm',
    labelEl: 'Αριθμός Φορολογικού Μητρώου (Α.Φ.Μ.)',
    labelEn: 'Tax Identification Number (T.I.N.)',
    href: '/services/tax/how-to-get-a-tic',
  },
  {
    id: 'res',
    labelEl: 'Πιστοποιητικά φορολογικής κατοικίας',
    labelEn: 'Tax residence certificates',
    href: '/services/tax/tax-residence-certificate',
  },
  {
    id: 'nondom',
    labelEl: 'Πιστοποιητικά Non-Dom',
    labelEn: 'Non-Dom certificates',
    href: '/services/tax/non-dom-certificate',
  },
  {
    id: 'clear',
    labelEl: 'Φορολογικές εκκαθαρίσεις',
    labelEn: 'Tax clearances',
    href: '/services/tax/tax-clearances',
  },
  {
    id: 'pay',
    labelEl: 'Βοήθεια φορολογικών πληρωμών',
    labelEn: 'Tax payment support',
    href: '/services/tax/tax-payment-support',
  },
]

export function getTaxServiceGuideNav(pathname: string): TaxServiceGuideNavItem[] {
  const base = normalizePath(pathname)
  return TAX_SERVICE_GUIDE_NAV_BASE.map((item) => {
    const href = taxBrandHref(item.href)
    const brandPath = taxPath(item.href)
    return {
      ...item,
      href,
      current:
        base === normalizePath(href) ||
        base === normalizePath(brandPath) ||
        base === normalizePath(item.href),
    }
  })
}
