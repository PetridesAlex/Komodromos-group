/** Reset scroll locks applied during boot / entry preloaders. */
export function unlockDocumentScroll() {
  if (typeof document === 'undefined') return
  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.left = ''
  document.body.style.right = ''
  document.body.style.width = ''
  document.body.removeAttribute('data-kg-scroll-lock-y')
}

export function lockDocumentScroll() {
  if (typeof document === 'undefined') return
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
}
