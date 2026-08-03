/** Shared helpers for SEO-editable image alt maps under src/data/seo/ */

export type ImageAltByPath = Record<string, string>

/** Prefer filename key (01.webp) or full path key depending on the map style. */
export function resolveAltFromMap(
  map: ImageAltByPath | Record<string, Record<string, string>>,
  opts: {
    path: string
    file?: string
    group?: string
    fallback: string
  },
): string {
  const { path, file, group, fallback } = opts
  const nested = map as Record<string, Record<string, string>>
  if (group && nested[group] && typeof nested[group] === 'object') {
    const byFile = nested[group]
    if (file && byFile[file]?.trim()) return byFile[file].trim()
    const basename = path.split('/').pop() ?? ''
    if (byFile[basename]?.trim()) return byFile[basename].trim()
  }
  const flat = map as ImageAltByPath
  if (flat[path]?.trim()) return flat[path].trim()
  const basename = path.split('/').pop() ?? ''
  if (flat[basename]?.trim()) return flat[basename].trim()
  return fallback
}

export function withAltsFromPathMap(
  paths: readonly string[],
  map: ImageAltByPath,
  fallbackFor: (path: string, index: number) => string,
): { src: string; alt: string }[] {
  return paths.map((path, index) => ({
    src: path,
    alt: resolveAltFromMap(map, {
      path,
      file: path.split('/').pop(),
      fallback: fallbackFor(path, index),
    }),
  }))
}
