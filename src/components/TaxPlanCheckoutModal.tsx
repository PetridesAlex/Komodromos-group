import { useEffect, useId, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TAX_NEX_VAT_PCT, type TaxNexPricingPlan } from '../data/taxNexPageContent'
import { isJccPaymentsEnabled } from '../lib/jccPayments'
import {
  appendPaymentLinkPrefill,
  isValidHttpUrl,
  storeTaxPlanCheckoutLead,
} from '../lib/taxPlanCheckout'
import { startJccPayment } from '../utils/startJccPayment'

type Props = {
  isOpen: boolean
  onClose: () => void
  plan: TaxNexPricingPlan | null
  /** Stripe/JCC URL — if null, navigates to contact after capturing details */
  checkoutUrl: string | null
}

export default function TaxPlanCheckoutModal({ isOpen, onClose, plan, checkoutUrl }: Props) {
  const navigate = useNavigate()
  const titleId = useId()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [busy, setBusy] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

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
      setName('')
      setEmail('')
      setPhone('')
      setCompany('')
      setBusy(false)
      setSubmitError(null)
    }
  }, [isOpen])

  if (!isOpen || !plan) return null

  const hasStripeCheckout = checkoutUrl != null && isValidHttpUrl(checkoutUrl)
  const hasJccCheckout = isJccPaymentsEnabled()
  const hasOnlineCheckout = hasStripeCheckout || hasJccCheckout

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const activePlan = plan
    if (!activePlan) return
    setBusy(true)
    setSubmitError(null)

    const grossEur =
      Math.round(activePlan.priceEur * (1 + TAX_NEX_VAT_PCT / 100) * 100) / 100
    const messageLine = `Αίτημα πληρωμής — ${activePlan.title} (πακέτο: ${activePlan.id}). Ποσό (πριν ΦΠΑ): ${activePlan.priceEur} € · Σύνολο με ΦΠΑ: ${grossEur} €`

    storeTaxPlanCheckoutLead({
      planId: activePlan.id,
      planTitle: activePlan.title,
      priceEur: activePlan.priceEur,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company.trim(),
    })

    if (hasStripeCheckout && checkoutUrl) {
      const url = appendPaymentLinkPrefill(checkoutUrl, email)
      window.location.assign(url)
      return
    }

    if (hasJccCheckout) {
      try {
        await startJccPayment({
          amount: grossEur,
          orderId: `TAXNEX-${activePlan.id}-${Date.now()}`,
          customerName: name.trim(),
          customerEmail: email.trim(),
          description: messageLine.slice(0, 512),
        })
      } catch (err) {
        setSubmitError(err instanceof Error ? err.message : 'Η πληρωμή δεν ξεκίνησε. Δοκιμάστε ξανά.')
        setBusy(false)
      }
      return
    }

    navigate('/contact', {
      state: {
        serviceInterest: 'Tax & Accounting Services',
        taxFilingPackage: activePlan.id,
        taxFilingTitle: activePlan.title,
        contactPrefill: {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          company: company.trim(),
          service: 'Tax & Accounting Services',
          message: messageLine,
        },
      },
    })
    onClose()
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
        className="taxnex-checkout-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        lang="el"
      >
        <button type="button" className="taxnex-checkout-modal__close" onClick={onClose} aria-label="Κλείσιμο">
          ×
        </button>
        <p className="taxnex-checkout-modal__eyebrow">Πακέτο υποβολής</p>
        <h2 id={titleId} className="taxnex-checkout-modal__title">
          {plan.title}
        </h2>
        <p className="taxnex-checkout-modal__lead">
          Συμπληρώστε τα στοιχεία σας —{' '}
          {hasOnlineCheckout
            ? 'θα μεταφερθείτε στην ασφαλή σελίδα πληρωμής.'
            : 'θα ανοίξει η φόρμα επικοινωνίας με τα δεδομένα σας για να ολοκληρώσουμε την πληρωμή χειροκίνητα.'}
        </p>

        <form className="taxnex-checkout-modal__form" onSubmit={handleSubmit}>
          <label className="taxnex-checkout-modal__field">
            <span>Ονοματεπώνυμο *</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="taxnex-checkout-modal__field">
            <span>Email *</span>
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
            <span>Τηλέφωνο *</span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label className="taxnex-checkout-modal__field">
            <span>Εταιρεία (προαιρετικό)</span>
            <input
              type="text"
              name="company"
              autoComplete="organization"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </label>

          {submitError ? (
            <p className="taxnex-checkout-modal__error" role="alert">
              {submitError}
            </p>
          ) : null}

          <div className="taxnex-checkout-modal__actions">
            <button
              type="button"
              className="taxnex-btn taxnex-btn--outline taxnex-checkout-modal__cancel"
              onClick={onClose}
              disabled={busy}
            >
              Ακύρωση
            </button>
            <button type="submit" className="taxnex-btn taxnex-btn--primary" disabled={busy}>
              {busy
                ? 'Παρακαλώ περιμένετε…'
                : hasOnlineCheckout
                  ? 'Συνέχεια στην πληρωμή'
                  : 'Συνέχεια στην επικοινωνία'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
