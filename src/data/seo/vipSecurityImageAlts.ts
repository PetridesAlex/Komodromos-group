/**
 * SEO-editable image alt text — vipSecurityImageAlts
 * Edit the strings only. Keys are image URL paths used on the site.
 */

export const vipSecurityImageAlts: Record<string, string> = {
  '/images/services/vip-service/Security-services/vip-security-1.webp': 'VIP security and executive protection service, Cyprus — photo 1',
  '/images/services/vip-service/Security-services/vip-security-2.webp': 'VIP security and executive protection service, Cyprus — photo 2',
  '/images/services/vip-service/Security-services/vip-security-3.webp': 'VIP security and executive protection service, Cyprus — photo 3',
  '/images/services/vip-service/Security-services/vip-security-4.webp': 'VIP security and executive protection service, Cyprus — photo 6',
  '/images/services/vip-service/Security-services/vip-security-5.webp': 'VIP security and executive protection service, Cyprus — photo 5',
  '/images/services/vip-service/Security-services/vip-security-6.webp': 'VIP security and executive protection service, Cyprus — photo 4',
}

export function getVipSecurityImageAlt(src: string, fallback: string): string {
  const direct = vipSecurityImageAlts[src]?.trim()
  if (direct) return direct
  try {
    const decoded = vipSecurityImageAlts[decodeURIComponent(src)]?.trim()
    if (decoded) return decoded
  } catch {
    /* ignore */
  }
  const file = src.split('/').pop() ?? ''
  const byFile = vipSecurityImageAlts[file]?.trim()
  if (byFile) return byFile
  try {
    const decodedFile = decodeURIComponent(file)
    const byDecodedFile = vipSecurityImageAlts[decodedFile]?.trim()
    if (byDecodedFile) return byDecodedFile
  } catch {
    /* ignore */
  }
  return fallback
}
