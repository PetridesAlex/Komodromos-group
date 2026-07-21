import {
  sanitizeContactPayload,
  validateContactPayload,
} from './contactFormValidation'

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
}

type ContactInquiryResponse = {
  success: boolean
  error?: string
}

export async function sendContactInquiry(payload: ContactInquiryPayload): Promise<void> {
  const sanitized = sanitizeContactPayload(payload)
  const validationError = validateContactPayload(sanitized)
  if (validationError) {
    throw new Error(validationError)
  }

  const response = await fetch('/api/send-contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sanitized),
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
