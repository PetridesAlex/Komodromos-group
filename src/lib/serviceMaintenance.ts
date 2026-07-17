import { getServiceBySlug, serviceCards, type ServiceCard } from '../data/serviceCards'
import { getBrandBySlug } from '../seo/domainRegistry'

/** VIP sub-pages live outside `/services/vip` but belong to the VIP service card. */
const VIP_NESTED_PREFIXES = [
  '/services/air',
  '/services/limousines-experiences',
  '/services/super-luxury-cars',
  '/services/vip-security-protection',
  '/services/vip-tour-around-island',
  '/services/yacht-charters',
] as const

/** Local dev (`npm run dev`) — full preview of maintenance pages. Production blocks public access. */
export function isMaintenancePreviewEnabled(): boolean {
  return import.meta.env.DEV
}

export function isServiceUnderMaintenance(slug: string | undefined): boolean {
  if (!slug) return false
  return getServiceBySlug(slug)?.comingSoon === true
}

export function hasDedicatedBrandDomain(slug: string): boolean {
  return Boolean(getBrandBySlug(slug))
}

export function isServicePubliclyAccessible(slug: string): boolean {
  if (isMaintenancePreviewEnabled()) return true
  return !isServiceUnderMaintenance(slug)
}

/** Group homepage / Solutions menu — brand-domain services always link out. */
export function isServiceLinkableFromGroup(slug: string): boolean {
  if (hasDedicatedBrandDomain(slug)) return true
  return isServicePubliclyAccessible(slug)
}

export function getPublicServiceCards(): ServiceCard[] {
  if (isMaintenancePreviewEnabled()) return serviceCards
  return serviceCards.filter((card) => !card.comingSoon || hasDedicatedBrandDomain(card.slug))
}

function normalizePath(pathname: string): string {
  const path = pathname.split('?')[0]?.split('#')[0] ?? pathname
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1)
  return path
}

function matchesPrefix(pathname: string, prefix: string): boolean {
  return pathname === prefix || pathname.startsWith(`${prefix}/`)
}

export function isPathUnderMaintenance(pathname: string): boolean {
  if (isMaintenancePreviewEnabled()) return false

  const normalized = normalizePath(pathname)
  if (!normalized.startsWith('/services')) return false

  for (const card of serviceCards) {
    if (!card.comingSoon) continue
    const base = `/services/${card.slug}`
    if (matchesPrefix(normalized, base)) return true
  }

  if (isServiceUnderMaintenance('vip')) {
    for (const prefix of VIP_NESTED_PREFIXES) {
      if (matchesPrefix(normalized, prefix)) return true
    }
  }

  return false
}

export function getMaintenanceServiceTitle(pathname: string): string | undefined {
  const normalized = normalizePath(pathname)

  for (const card of serviceCards) {
    if (!card.comingSoon) continue
    const base = `/services/${card.slug}`
    if (matchesPrefix(normalized, base)) return card.title
  }

  if (isServiceUnderMaintenance('vip')) {
    for (const prefix of VIP_NESTED_PREFIXES) {
      if (matchesPrefix(normalized, prefix)) return 'VIP Services'
    }
  }

  return undefined
}
