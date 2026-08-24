/** DOM-less injection of SEO tags into the SPA index.html shell. */

export type SeoHeadMeta = {
  title: string
  description: string
  canonical: string
  ogImage: string
  index: boolean
  /** Brand / site name for og:site_name — must match the serving host. */
  siteName?: string
}

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function replaceOrInsert(html: string, pattern: RegExp, replacement: string): string {
  pattern.lastIndex = 0
  if (pattern.test(html)) {
    pattern.lastIndex = 0
    return html.replace(pattern, replacement)
  }
  return html.replace(/<\/head>/i, `    ${replacement}\n  </head>`)
}

export function injectSeoHead(html: string, meta: SeoHeadMeta): string {
  const robots = meta.index ? 'index, follow' : 'noindex, nofollow'
  const title = escapeHtml(meta.title)
  const description = escapeAttr(meta.description)
  const canonical = escapeAttr(meta.canonical)
  const ogImage = escapeAttr(meta.ogImage)
  const titleAttr = escapeAttr(meta.title)
  const siteName = escapeAttr(meta.siteName ?? 'Komodromos Group of Companies')

  let out = html

  out = replaceOrInsert(out, /<title\b[^>]*>[\s\S]*?<\/title>/i, `<title data-seo-shell="1">${title}</title>`)

  out = replaceOrInsert(
    out,
    /<meta\b[^>]*\bname=["']description["'][^>]*>/i,
    `<meta name="description" content="${description}" data-seo-shell="1" />`,
  )
  out = replaceOrInsert(
    out,
    /<meta\b[^>]*\bname=["']robots["'][^>]*>/i,
    `<meta name="robots" content="${robots}" data-seo-shell="1" />`,
  )
  out = replaceOrInsert(
    out,
    /<link\b[^>]*\brel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${canonical}" data-seo-shell="1" />`,
  )

  out = replaceOrInsert(
    out,
    /<meta\b[^>]*\bproperty=["']og:site_name["'][^>]*>/i,
    `<meta property="og:site_name" content="${siteName}" data-seo-shell="1" />`,
  )
  out = replaceOrInsert(
    out,
    /<meta\b[^>]*\bproperty=["']og:type["'][^>]*>/i,
    `<meta property="og:type" content="website" data-seo-shell="1" />`,
  )
  out = replaceOrInsert(
    out,
    /<meta\b[^>]*\bproperty=["']og:title["'][^>]*>/i,
    `<meta property="og:title" content="${titleAttr}" data-seo-shell="1" />`,
  )
  out = replaceOrInsert(
    out,
    /<meta\b[^>]*\bproperty=["']og:description["'][^>]*>/i,
    `<meta property="og:description" content="${description}" data-seo-shell="1" />`,
  )
  out = replaceOrInsert(
    out,
    /<meta\b[^>]*\bproperty=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${canonical}" data-seo-shell="1" />`,
  )
  out = replaceOrInsert(
    out,
    /<meta\b[^>]*\bproperty=["']og:image["'][^>]*>/i,
    `<meta property="og:image" content="${ogImage}" data-seo-shell="1" />`,
  )

  out = replaceOrInsert(
    out,
    /<meta\b[^>]*\bname=["']twitter:card["'][^>]*>/i,
    `<meta name="twitter:card" content="summary_large_image" data-seo-shell="1" />`,
  )
  out = replaceOrInsert(
    out,
    /<meta\b[^>]*\bname=["']twitter:title["'][^>]*>/i,
    `<meta name="twitter:title" content="${titleAttr}" data-seo-shell="1" />`,
  )
  out = replaceOrInsert(
    out,
    /<meta\b[^>]*\bname=["']twitter:description["'][^>]*>/i,
    `<meta name="twitter:description" content="${description}" data-seo-shell="1" />`,
  )
  out = replaceOrInsert(
    out,
    /<meta\b[^>]*\bname=["']twitter:image["'][^>]*>/i,
    `<meta name="twitter:image" content="${ogImage}" data-seo-shell="1" />`,
  )

  // Brand hosts must not preload the group homepage hero — looks like a spoofed shell.
  if (meta.siteName && meta.siteName !== 'Komodromos Group of Companies') {
    out = out.replace(
      /<link\b[^>]*\brel=["']preload["'][^>]*hero-section-premium\.webp[^>]*>\s*/gi,
      '',
    )
  }

  return out
}
