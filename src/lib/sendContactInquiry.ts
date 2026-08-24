import {
  sanitizeContactPayload,
  validateContactPayload,
} from './contactFormValidation'
import { getTurnstileToken } from './turnstile'

export type ContactInquiryDetail = {
  label: string
  value: string
}

export type ContactInquiryPayload = {
  source: string
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message: string
  /** Optional structured detail rows (e.g. reservation date/time/guests). */
  detailsTitle?: string
  details?: ContactInquiryDetail[]
  /** Honeypot — leave empty. Bots that fill it are discarded server-side. */
  website?: string
  /** Epoch ms when the form became interactive (for minimum fill-time check). */
  formStartedAt?: number
}

type ContactInquiryResponse = {
  success: boolean
  error?: string
}

function getOriginHost(): string | undefined {
  if (typeof window === 'undefined') return undefined
  return window.location.hostname || undefined
}

export async function sendContactInquiry(payload: ContactInquiryPayload): Promise<void> {
  const sanitized = sanitizeContactPayload(payload)
  const validationError = validateContactPayload(sanitized)
  if (validationError) {
    throw new Error(validationError)
  }

  const turnstileToken = await getTurnstileToken()

  const response = await fetch('/api/send-contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...sanitized,
      turnstileToken,
      website: payload.website ?? '',
      formStartedAt: payload.formStartedAt,
      originHost: getOriginHost(),
    }),
  })

  let data: ContactInquiryResponse | null = null
  try {
    data = (await response.json()) as ContactInquiryResponse
  } catch {
    data = null
  }

  if (!response.ok || !data?.success) {
    throw new Error(data?.error || 'Could not send your message. Please try again or email info@komodromosgroup.com directly.')
  }
}
