import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import PageSeo, { type PageSeoProps } from './PageSeo'
import { getSeoForPath } from './routes'
import {
  breadcrumbSchema,
  buildGroupHomeNavigationItems,
  combineSchemas,
  contactPageSchema,
  serviceSchema,
  siteNavigationListSchema,
  webPageSchema,
} from './schema'
import { resolveInternalPath } from './domainRegistry'
import { useSiteContext } from './SiteContext'
import { SERVICE_HUB_SEO } from './metaCopy'

export type SeoOverride = Partial<PageSeoProps>

const SeoOverrideContext = createContext<{
  override: SeoOverride | null
  setOverride: (value: SeoOverride | null) => void
} | null>(null)

export function SeoOverrideProvider({ children }: { children: ReactNode }) {
  const [override, setOverride] = useState<SeoOverride | null>(null)
  const value = useMemo(() => ({ override, setOverride }), [override])
  return <SeoOverrideContext.Provider value={value}>{children}</SeoOverrideContext.Provider>
}

export function usePageSeo(override: SeoOverride) {
  const ctx = useContext(SeoOverrideContext)
  const location = useLocation()
  const { title, description, path, image, noindex, jsonLd } = override

  useEffect(() => {
    if (!ctx) return
    ctx.setOverride({
      title,
      description,
      path: path ?? location.pathname,
      image,
      noindex,
      jsonLd,
    })
    return () => ctx.setOverride(null)
  }, [ctx, location.pathname, title, description, path, image, noindex, jsonLd])
}

function isServiceHubPath(path: string): boolean {
  return Boolean(SERVICE_HUB_SEO[path])
}

function buildPageSchema(
  path: string,
  title: string,
  description: string,
  siteUrl: string,
  siteName: string,
) {
  if (path === '/') {
    return combineSchemas(
      webPageSchema({ title, description, path, siteUrl, siteName }),
      siteNavigationListSchema(buildGroupHomeNavigationItems()),
    )
  }

  if (path === '/contact') {
    return combineSchemas(
      contactPageSchema(siteUrl),
      webPageSchema({ title, description, path, siteUrl, siteName }),
    )
  }

  if (path.startsWith('/services/') || path === '/') {
    const crumbs = [{ name: 'Home', path: '/' }]
    if (path.startsWith('/services/')) {
      crumbs.push({ name: 'Services', path: '/' })
    }
    const segments = path.split('/').filter(Boolean)
    if (segments.length > 1) {
      let acc = ''
      for (let i = 0; i < segments.length; i += 1) {
        acc += `/${segments[i]}`
        if (i > 0) {
          crumbs.push({
            name: segments[i].replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
            path: acc,
          })
        }
      }
    }
    const base = combineSchemas(
      webPageSchema({ title, description, path, siteUrl, siteName }),
      breadcrumbSchema(crumbs.slice(0, 4), siteUrl),
    )
    if (isServiceHubPath(path)) {
      return combineSchemas(
        ...(Array.isArray(base) ? base : [base]),
        serviceSchema({ name: title, description, path, siteUrl }),
      )
    }
    return base
  }

  return webPageSchema({ title, description, path, siteUrl, siteName })
}

export default function SeoManager() {
  const location = useLocation()
  const ctx = useContext(SeoOverrideContext)
  const { host, siteUrl, brand, canonicalPath } = useSiteContext()
  const internalPath = resolveInternalPath(location.pathname, host)
  const registry = getSeoForPath(internalPath)
  const merged = { ...registry, ...ctx?.override }

  if (!merged?.title) return null

  const displayPath = canonicalPath(merged.path ?? internalPath)
  const description = merged.description ?? registry?.description ?? ''
  const siteName = brand?.siteNameFull ?? 'Komodromos Group of Companies'
  const jsonLd =
    merged.jsonLd ??
    buildPageSchema(displayPath, merged.title, description, siteUrl, siteName)

  return (
    <PageSeo
      title={merged.title}
      description={description}
      path={displayPath}
      image={merged.image ?? registry?.ogImage}
      noindex={merged.noindex ?? (registry ? !registry.index : true)}
      jsonLd={jsonLd}
    />
  )
}
