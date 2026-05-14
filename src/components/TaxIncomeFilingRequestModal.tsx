import { useEffect, useId, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  TAX_CALC_FILING_MODAL,
  TAX_CALC_FILING_REG_TYPES,
} from '../data/taxIncomeCalculatorPageContent'
import type { CyprusIncomeTaxYear } from '../lib/cyprusIncomeTax'
import {
  buildTaxFilingContactPrefillMessage,
  postTaxFilingLeadIfConfigured,
  type TaxFilingLeadPayload,
} from '../lib/taxFilingLeadSubmit'

const F = TAX_CALC_FILING_MODAL

type Props = {
  isOpen: boolean
  onClose: () => void
  calculatorTaxYear: CyprusIncomeTaxYear
}

export default function TaxIncomeFilingRequestModal({ isOpen, onClose, calculatorTaxYear }: Props) {
  const navigate = useNavigate()
  const titleId = useId()
  const [firstName, setFirstName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [taxYear, setTaxYear] = useState<CyprusIncomeTaxYear>(calculatorTaxYear)
  const [registrantType, setRegistrantType] = useState<(typeof TAX_CALC_FILING_REG_TYPES)[number]['value']>('employee')
  const [arcOrTin, setArcOrTin] = useState('')
  const [notes, setNotes] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const registrantLabel = useMemo(
    () => TAX_CALC_FILING_REG_TYPES.find((o) => o.value === registrantType)?.label ?? registrantType,
    [registrantType],
  )

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) {
      setFirstName('')
      setSurname('')
      setEmail('')
      setPhone('')
      setTaxYear(calculatorTaxYear)
      setRegistrantType('employee')
      setArcOrTin('')
      setNotes('')
      setBusy(false)
      setError(null)
      setSuccess(false)
    } else {
      setTaxYear(calculatorTaxYear)
    }
  }, [isOpen, calculatorTaxYear])

  if (!isOpen) return null

  function buildPayload(): TaxFilingLeadPayload {
    return {
      source: 'income-tax-calculator',
      firstName: firstName.trim(),
      surname: surname.trim(),
      email: email.trim(),
      phone: phone.trim(),
      taxYear,
      registrantType,
      registrantLabel,
      arcOrTin: arcOrTin.trim(),
      notes: notes.trim(),
      submittedAt: new Date().toISOString(),
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setBusy(true)
    const payload = buildPayload()
    const fullName = [payload.firstName, payload.surname].filter(Boolean).join(' ')

    try {
      const posted = await postTaxFilingLeadIfConfigured(payload)
      if (posted) {
        setSuccess(true)
        return
      }
      navigate('/contact', {
        state: {
          serviceInterest: 'Tax & Accounting Services',
          contactPrefill: {
            name: fullName,
            email: payload.email,
            phone: payload.phone,
            service: 'Tax & Accounting Services',
            message: buildTaxFilingContactPrefillMessage(payload),
          },
        },
      })
      onClose()
    } catch {
      setError(F.submitError)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div
      className="taxnex-checkout-modal"
      role="presentation"
      onMouseDown={(ev) => {
        if (ev.target === ev.currentTarget) onClose()
      }}
    >
      <div
        className="taxnex-checkout-modal__dialog taxnex-newsletter-modal__dialog taxnex-newsletter-modal__dialog--filing"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          type="button"
          className="taxnex-checkout-modal__close"
          onClick={onClose}
          aria-label={F.closeAria}
        >
          ×
        </button>

        {success ? (
          <div className="taxnex-filing-modal__success">
            <p className="taxnex-checkout-modal__eyebrow taxnex-newsletter-modal__eyebrow">{F.eyebrow}</p>
            <h2 id={titleId} className="taxnex-checkout-modal__title taxnex-newsletter-modal__title">
              {F.successTitle}
            </h2>
            <p className="taxnex-checkout-modal__lead taxnex-newsletter-modal__lead">{F.successBody}</p>
            <button type="button" className="taxnex-btn taxnex-btn--primary" onClick={onClose}>
              {F.successClose}
            </button>
          </div>
        ) : (
          <>
            <p className="taxnex-checkout-modal__eyebrow taxnex-newsletter-modal__eyebrow">{F.eyebrow}</p>
            <h2 id={titleId} className="taxnex-checkout-modal__title taxnex-newsletter-modal__title">
              {F.title}
            </h2>
            <p className="taxnex-checkout-modal__lead taxnex-newsletter-modal__lead">{F.lead}</p>

            <form className="taxnex-checkout-modal__form taxnex-newsletter-modal__form" onSubmit={handleSubmit}>
              <div className="taxnex-newsletter-modal__row">
                <label className="taxnex-checkout-modal__field">
                  <span>{F.firstName}</span>
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label className="taxnex-checkout-modal__field">
                  <span>{F.surname}</span>
                  <input
                    type="text"
                    name="surname"
                    autoComplete="family-name"
                    required
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </label>
              </div>

              <label className="taxnex-checkout-modal__field">
                <span>{F.email}</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="taxnex-checkout-modal__field">
                <span>{F.phone}</span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>

              <div className="taxnex-newsletter-modal__row">
                <label className="taxnex-checkout-modal__field">
                  <span>{F.taxYear}</span>
                  <select
                    name="taxYear"
                    required
                    value={taxYear}
                    onChange={(e) => setTaxYear(e.target.value as CyprusIncomeTaxYear)}
                  >
                    <option value="2025">{F.opt2025}</option>
                    <option value="2026">{F.opt2026}</option>
                  </select>
                </label>
                <label className="taxnex-checkout-modal__field">
                  <span>{F.registrant}</span>
                  <select
                    name="registrant"
                    required
                    value={registrantType}
                    onChange={(e) =>
                      setRegistrantType(e.target.value as (typeof TAX_CALC_FILING_REG_TYPES)[number]['value'])
                    }
                  >
                    {TAX_CALC_FILING_REG_TYPES.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="taxnex-checkout-modal__field">
                <span>{F.arcOrTin}</span>
                <input
                  type="text"
                  name="arcOrTin"
                  autoComplete="off"
                  value={arcOrTin}
                  onChange={(e) => setArcOrTin(e.target.value)}
                  placeholder={F.arcPlaceholder}
                />
              </label>

              <label className="taxnex-checkout-modal__field">
                <span>{F.notes}</span>
                <textarea
                  name="notes"
                  rows={4}
                  required
                  minLength={12}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={F.notesPlaceholder}
                />
              </label>

              {error ? (
                <p className="taxnex-filing-modal__error" role="alert">
                  {error}
                </p>
              ) : null}

              <div className="taxnex-checkout-modal__actions">
                <button
                  type="button"
                  className="taxnex-btn taxnex-btn--outline taxnex-checkout-modal__cancel"
                  onClick={onClose}
                  disabled={busy}
                >
                  {F.cancel}
                </button>
                <button type="submit" className="taxnex-btn taxnex-btn--primary" disabled={busy}>
                  {busy ? F.submitting : F.submit}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
