export const CV_APPLICATION_LIMITS = {
  source: 120,
  name: 160,
  email: 160,
  phone: 80,
  role: 120,
  licence: 120,
  flightHours: 20,
  message: 4000,
  filename: 200,
  maxFileBytes: 4 * 1024 * 1024,
} as const

export const CV_ACCEPTED_EXTENSIONS = ['.pdf', '.doc', '.docx', '.odt', '.rtf'] as const

export const CV_ACCEPTED_MIME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.oasis.opendocument.text',
  'text/rtf',
  'application/rtf',
])

export type CvApplicationPayload = {
  source: string
  name: string
  email: string
  phone?: string
  role: string
  licence?: string
  flightHours?: string
  message?: string
  attachment: {
    filename: string
    contentType: string
    content: string
  }
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function trimField(value: string | undefined, maxLen: number): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLen)
}

export function getFileExtension(filename: string): string {
  const dot = filename.lastIndexOf('.')
  if (dot === -1) return ''
  return filename.slice(dot).toLowerCase()
}

export function isAcceptedCvFile(file: File): boolean {
  const ext = getFileExtension(file.name)
  if (CV_ACCEPTED_EXTENSIONS.includes(ext as (typeof CV_ACCEPTED_EXTENSIONS)[number])) {
    return true
  }
  return CV_ACCEPTED_MIME_TYPES.has(file.type)
}

export function sanitizeCvApplicationPayload(payload: CvApplicationPayload): CvApplicationPayload {
  const sanitized: CvApplicationPayload = {
    source: trimField(payload.source, CV_APPLICATION_LIMITS.source) || 'Global Wings CV submission',
    name: trimField(payload.name, CV_APPLICATION_LIMITS.name),
    email: trimField(payload.email, CV_APPLICATION_LIMITS.email),
    role: trimField(payload.role, CV_APPLICATION_LIMITS.role),
    attachment: {
      filename: trimField(payload.attachment.filename, CV_APPLICATION_LIMITS.filename),
      contentType: trimField(payload.attachment.contentType, 120) || 'application/octet-stream',
      content: payload.attachment.content,
    },
  }

  const phone = trimField(payload.phone, CV_APPLICATION_LIMITS.phone)
  const licence = trimField(payload.licence, CV_APPLICATION_LIMITS.licence)
  const flightHours = trimField(payload.flightHours, CV_APPLICATION_LIMITS.flightHours)
  const message = trimField(payload.message, CV_APPLICATION_LIMITS.message)

  if (phone) sanitized.phone = phone
  if (licence) sanitized.licence = licence
  if (flightHours) sanitized.flightHours = flightHours
  if (message) sanitized.message = message

  return sanitized
}

export function validateCvApplicationPayload(payload: CvApplicationPayload): string | null {
  if (!payload.name) return 'Please enter your full name.'
  if (!payload.email) return 'Please enter your email address.'
  if (!EMAIL_PATTERN.test(payload.email)) return 'Please enter a valid email address.'
  if (!payload.role) return 'Please select the role you are applying for.'
  if (!payload.attachment.filename) return 'Please attach your CV.'
  if (!payload.attachment.content) return 'Could not read your CV file. Please try again.'

  const ext = getFileExtension(payload.attachment.filename)
  if (!CV_ACCEPTED_EXTENSIONS.includes(ext as (typeof CV_ACCEPTED_EXTENSIONS)[number])) {
    return 'Please upload a PDF, Word, ODT, or RTF document.'
  }

  const byteLength = Math.floor((payload.attachment.content.length * 3) / 4)
  if (byteLength > CV_APPLICATION_LIMITS.maxFileBytes) {
    return 'Your CV must be 4 MB or smaller.'
  }

  return null
}

export function formatCvFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}
