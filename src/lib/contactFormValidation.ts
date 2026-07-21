import type { ContactInquiryPayload } from './sendContactInquiry'

/** Must match limits in api/send-contact.js */
export const CONTACT_FIELD_LIMITS = {
  source: 120,
  name: 160,
  email: 160,
  phone: 80,
  company: 160,
  service: 200,
  message: 8000,
  detailsTitle: 80,
  detailLabel: 60,
  detailValue: 200,
  detailsMax: 20,
} as const

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function trimField(value: string | undefined, maxLen: number): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLen)
}

export function sanitizeContactPayload(payload: ContactInquiryPayload): ContactInquiryPayload {
  const sanitized: ContactInquiryPayload = {
    source: trimField(payload.source, CONTACT_FIELD_LIMITS.source) || 'Website contact form',
    name: trimField(payload.name, CONTACT_FIELD_LIMITS.name),
    email: trimField(payload.email, CONTACT_FIELD_LIMITS.email),
    message: trimField(payload.message, CONTACT_FIELD_LIMITS.message),
  }

  const phone = trimField(payload.phone, CONTACT_FIELD_LIMITS.phone)
  const company = trimField(payload.company, CONTACT_FIELD_LIMITS.company)
  const service = trimField(payload.service, CONTACT_FIELD_LIMITS.service)

  if (phone) sanitized.phone = phone
  if (company) sanitized.company = company
  if (service) sanitized.service = service

  const detailsTitle = trimField(payload.detailsTitle, CONTACT_FIELD_LIMITS.detailsTitle)
  if (detailsTitle) sanitized.detailsTitle = detailsTitle

  if (Array.isArray(payload.details)) {
    const details = payload.details
      .slice(0, CONTACT_FIELD_LIMITS.detailsMax)
      .map((entry) => ({
        label: trimField(entry?.label, CONTACT_FIELD_LIMITS.detailLabel),
        value: trimField(entry?.value, CONTACT_FIELD_LIMITS.detailValue),
      }))
      .filter((entry) => entry.label && entry.value)
    if (details.length > 0) sanitized.details = details
  }

  return sanitized
}

export function validateContactPayload(payload: ContactInquiryPayload): string | null {
  if (!payload.name) {
    return 'Please enter your name.'
  }
  if (!payload.email) {
    return 'Please enter your email address.'
  }
  if (!EMAIL_PATTERN.test(payload.email)) {
    return 'Please enter a valid email address.'
  }
  if (!payload.message) {
    return 'Please enter a message.'
  }
  return null
}

export function isValidContactEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim())
}
