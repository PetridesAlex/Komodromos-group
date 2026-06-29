export type ContactInquiryPayload = {
  source: string
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message: string
}

type ContactInquiryResponse = {
  success: boolean
  error?: string
}

export async function sendContactInquiry(payload: ContactInquiryPayload): Promise<void> {
  const response = await fetch('/api/send-contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
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
