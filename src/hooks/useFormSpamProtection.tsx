import { useCallback, useRef, useState, type ReactNode } from 'react'
import FormSpamFields from '../components/FormSpamFields'

export type FormSpamMeta = {
  /** Honeypot — must stay empty for real users */
  website: string
  /** Epoch ms when the form mounted / became interactive */
  formStartedAt: number
}

/**
 * Honeypot + form start time for anti-spam metadata sent with inquiries.
 */
export function useFormSpamProtection(): {
  spamMeta: FormSpamMeta
  spamFields: ReactNode
  /** Call when a modal/form re-opens so fill-time starts fresh. */
  resetSpamProtection: () => void
} {
  const [website, setWebsite] = useState('')
  const [, setEpoch] = useState(0)
  // Lazily stamped once per mount (and on reset). Avoids effect setState lint noise.
  const formStartedAtRef = useRef(0)
  if (formStartedAtRef.current === 0) {
    // eslint-disable-next-line react-hooks/purity -- intentional one-time mount timestamp for spam timing
    formStartedAtRef.current = Date.now()
  }

  const resetSpamProtection = useCallback(() => {
    formStartedAtRef.current = Date.now()
    setWebsite('')
    setEpoch((n) => n + 1)
  }, [])

  return {
    spamMeta: {
      website,
      formStartedAt: formStartedAtRef.current,
    },
    spamFields: <FormSpamFields value={website} onChange={setWebsite} />,
    resetSpamProtection,
  }
}
