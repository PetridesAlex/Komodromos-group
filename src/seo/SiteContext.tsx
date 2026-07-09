import { createContext, useContext, useMemo, type ReactNode } from 'react'
import {
  GROUP_SITE_URL,
  getBrandByHost,
  getSiteUrlForHost,
  resolveCanonicalPath,
  type BrandDomainConfig,
} from './domainRegistry'

type SiteContextValue = {
  host: string
  siteUrl: string
  brand: BrandDomainConfig | undefined
  isBrandDomain: boolean
  canonicalPath: (internalPath: string) => string
  absoluteUrl: (path: string) => string
}

const SiteContext = createContext<SiteContextValue>({
  host: '',
  siteUrl: GROUP_SITE_URL,
  brand: undefined,
  isBrandDomain: false,
  canonicalPath: (path) => path,
  absoluteUrl: (path) => `${GROUP_SITE_URL}${path === '/' ? '' : path}`,
})

export function SiteContextProvider({ children }: { children: ReactNode }) {
  const host = typeof window !== 'undefined' ? window.location.host : ''
  const brand = getBrandByHost(host)
  const siteUrl = getSiteUrlForHost(host)

  const value = useMemo<SiteContextValue>(
    () => ({
      host,
      siteUrl,
      brand,
      isBrandDomain: Boolean(brand),
      canonicalPath: (internalPath) => resolveCanonicalPath(internalPath, host),
      absoluteUrl: (path) => {
        const normalized = path.startsWith('/') ? path : `/${path}`
        if (normalized === '/') return siteUrl
        return `${siteUrl}${normalized}`
      },
    }),
    [host, siteUrl, brand],
  )

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}

export function useSiteContext() {
  return useContext(SiteContext)
}
