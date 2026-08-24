import {
  sanitizeCvApplicationPayload,
  validateCvApplicationPayload,
  type CvApplicationPayload,
} from './cvApplicationValidation'
import { getTurnstileToken } from './turnstile'

type CvApplicationResponse = {
  success: boolean
  error?: string
  referenceId?: string
}

export async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result !== 'string') {
        reject(new Error('Could not read file.'))
        return
      }
      const base64 = reader.result.split(',')[1]
      if (!base64) {
        reject(new Error('Could not read file.'))
        return
      }
      resolve(base64)
    }
    reader.onerror = () => reject(new Error('Could not read file.'))
    reader.readAsDataURL(file)
  })
}

export async function sendCvApplication(payload: CvApplicationPayload): Promise<string> {
  const sanitized = sanitizeCvApplicationPayload(payload)
  const validationError = validateCvApplicationPayload(sanitized)
  if (validationError) {
    throw new Error(validationError)
  }

  const turnstileToken = await getTurnstileToken()
  const originHost =
    typeof window !== 'undefined' ? window.location.hostname || undefined : undefined

  const response = await fetch('/api/send-cv-application', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...sanitized,
      turnstileToken,
      website: payload.website ?? '',
      formStartedAt: payload.formStartedAt,
      originHost,
    }),
  })

  let data: CvApplicationResponse | null = null
  try {
    data = (await response.json()) as CvApplicationResponse
  } catch {
    data = null
  }

  if (!response.ok || !data?.success) {
    throw new Error(
      data?.error ||
        'Could not submit your CV. Please try again or email info@komodromosgroup.com directly.',
    )
  }

  return data.referenceId ?? ''
}
