import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PaymentFailed() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page payment-result-page payment-result-page--failed">
      <div className="payment-result-page__card">
        <p className="payment-result-page__eyebrow">JCC Secure Payment</p>
        <h1 className="payment-result-page__title">Payment Was Not Completed</h1>
        <p className="payment-result-page__message">
          Your payment was cancelled or failed. Please try again.
        </p>
        <Link to="/" className="taxnex-btn taxnex-btn--primary payment-result-page__cta">
          Back to homepage
        </Link>
      </div>
    </div>
  )
}
