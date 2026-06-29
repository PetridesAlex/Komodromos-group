import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { buildSeoRoutes } from '../src/seo/routes.ts'

const root = resolve(import.meta.dirname, '..')
const mainTsx = readFileSync(resolve(root, 'src/main.tsx'), 'utf8')

const routes = buildSeoRoutes()
const errors: string[] = []
const warnings: string[] = []

const titles = new Map<string, string[]>()
const descriptions = new Map<string, string[]>()
const paths = new Map<string, number>()

for (const entry of routes) {
  paths.set(entry.path, (paths.get(entry.path) ?? 0) + 1)

  if (!entry.title.trim()) errors.push(`Missing title for ${entry.path}`)
  if (!entry.description.trim()) errors.push(`Missing description for ${entry.path}`)
  if (entry.description.length < 50) {
    warnings.push(`Short description (${entry.description.length} chars) for ${entry.path}`)
  }

  const titlePaths = titles.get(entry.title) ?? []
  titlePaths.push(entry.path)
  titles.set(entry.title, titlePaths)

  const descPaths = descriptions.get(entry.description) ?? []
  descPaths.push(entry.path)
  descriptions.set(entry.description, descPaths)
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
  if (pathList.length > 1 && pathList.length <= 3) {
    warnings.push(`Duplicate description on: ${pathList.join(', ')}`)
  } else if (pathList.length > 3) {
    errors.push(`Duplicate description used on ${pathList.length} paths (e.g. ${pathList.slice(0, 3).join(', ')})`)
  }
}

const routePathMatches = [...mainTsx.matchAll(/<Route\s+path="([^"]+)"/g)].map((match) => match[1])
const staticRoutePaths = routePathMatches.filter(
  (path) => path.startsWith('/') && !path.includes(':') && path !== '*' && path !== '/services',
)

for (const path of staticRoutePaths) {
  const normalized = path.replace(/\/+$/, '') || '/'
  const inRegistry = routes.some((entry) => entry.path === normalized)
  if (!inRegistry && path !== '/payment-success' && path !== '/payment-failed') {
    if (path.startsWith('/services/aviation')) {
      const aviationBase = routes.some((entry) => entry.path.startsWith('/services/aviation'))
      if (!aviationBase) warnings.push(`Aviation route may be missing registry coverage: ${path}`)
    } else {
      warnings.push(`Static route not in SEO registry: ${path}`)
    }
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
