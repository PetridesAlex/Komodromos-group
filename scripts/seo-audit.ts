import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { buildSeoRoutes } from '../src/seo/routes.ts'
import { finalDocumentTitle, toHeadMeta } from '../src/seo/metaCopy.ts'
import { absoluteUrl } from '../src/seo/siteConfig.ts'
import { injectSeoHead } from '../src/seo/injectSeoHead.ts'

const root = resolve(import.meta.dirname, '..')
const mainTsx = readFileSync(resolve(root, 'src/main.tsx'), 'utf8')
const indexHtml = readFileSync(resolve(root, 'index.html'), 'utf8')

const routes = buildSeoRoutes()
const errors: string[] = []
const warnings: string[] = []

const titles = new Map<string, string[]>()
const descriptions = new Map<string, string[]>()
const paths = new Map<string, number>()
const canonicals = new Map<string, string[]>()

for (const entry of routes) {
  paths.set(entry.path, (paths.get(entry.path) ?? 0) + 1)

  if (!entry.title.trim()) errors.push(`Missing title for ${entry.path}`)
  if (!entry.description.trim()) errors.push(`Missing description for ${entry.path}`)

  const docTitle = finalDocumentTitle(entry)
  const canonical = absoluteUrl(entry.path)

  const titlePaths = titles.get(docTitle) ?? []
  titlePaths.push(entry.path)
  titles.set(docTitle, titlePaths)

  const descPaths = descriptions.get(entry.description) ?? []
  descPaths.push(entry.path)
  descriptions.set(entry.description, descPaths)

  const canonPaths = canonicals.get(canonical) ?? []
  canonPaths.push(entry.path)
  canonicals.set(canonical, canonPaths)

  if (entry.path.startsWith('/services/')) {
    if (docTitle.length < 50 || docTitle.length > 60) {
      errors.push(
        `Service title length ${docTitle.length} (need 50–60) for ${entry.path}: "${docTitle}"`,
      )
    }
    if (entry.description.length < 150 || entry.description.length > 160) {
      errors.push(
        `Service description length ${entry.description.length} (need 150–160) for ${entry.path}`,
      )
    }
    if (canonical === absoluteUrl('/') || canonical.endsWith('komodromosgroup.com/')) {
      // Homepage canonical ends with .com/ — service pages must not use it
      if (canonical === absoluteUrl('/')) {
        errors.push(`Service path ${entry.path} must not use homepage canonical`)
      }
    }
    if (!canonical.includes(entry.path)) {
      errors.push(`Canonical ${canonical} does not self-reference ${entry.path}`)
    }
  }
}

for (const [path, count] of paths) {
  if (count > 1) errors.push(`Duplicate canonical path: ${path} (${count} times)`)
}

for (const [title, pathList] of titles) {
  if (pathList.length > 1) {
    errors.push(`Duplicate title "${title}" on: ${pathList.join(', ')}`)
  }
}

for (const [description, pathList] of descriptions) {
  if (pathList.length > 1) {
    errors.push(`Duplicate description on: ${pathList.join(', ')}`)
  }
}

for (const [canonical, pathList] of canonicals) {
  if (pathList.length > 1) {
    errors.push(`Duplicate canonical URL ${canonical} on: ${pathList.join(', ')}`)
  }
}

const routePathMatches = [...mainTsx.matchAll(/<Route\s+path="([^"]+)"/g)].map((match) => match[1])
const staticRoutePaths = routePathMatches.filter(
  (path) => path.startsWith('/') && !path.includes(':') && path !== '*' && path !== '/services',
)

for (const path of staticRoutePaths) {
  const normalized = path.replace(/\/+$/, '') || '/'
  const inRegistry = routes.some((entry) => entry.path === normalized)
  if (!inRegistry) {
    if (path.startsWith('/services/aviation')) {
      const aviationBase = routes.some((entry) => entry.path.startsWith('/services/aviation'))
      if (!aviationBase) warnings.push(`Aviation route may be missing registry coverage: ${path}`)
    } else {
      warnings.push(`Static route not in SEO registry: ${path}`)
    }
  }
}

// Smoke-test edge injection for /services/hr
const hr = routes.find((entry) => entry.path === '/services/hr')
if (!hr) {
  errors.push('Missing /services/hr in SEO registry')
} else {
  const patched = injectSeoHead(indexHtml, toHeadMeta(hr))
  if (!patched.includes('rel="canonical" href="https://www.komodromosgroup.com/services/hr"')) {
    errors.push('injectSeoHead did not set self-referencing canonical for /services/hr')
  }
  if (patched.includes('rel="canonical" href="https://www.komodromosgroup.com/"')) {
    errors.push('injectSeoHead left homepage canonical on /services/hr')
  }
  const descMatch = patched.match(/name="description"\s+content="([^"]*)"/)
  if (descMatch && descMatch[1] === routes.find((e) => e.path === '/')?.description) {
    errors.push('injectSeoHead left homepage description on /services/hr')
  }
}

const indexableCount = routes.filter((entry) => entry.index).length

console.log(`SEO audit: ${routes.length} registry entries (${indexableCount} indexable)`)

if (warnings.length) {
  console.log('\nWarnings:')
  for (const warning of warnings) console.log(`  - ${warning}`)
}

if (errors.length) {
  console.error('\nErrors:')
  for (const error of errors) console.error(`  - ${error}`)
  process.exit(1)
}

console.log('\nSEO audit passed.')
