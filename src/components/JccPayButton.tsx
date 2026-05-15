import { useState } from 'react'
import { startJccPayment } from '../utils/startJccPayment'

type Props = {
  className?: string
  amount?: number
}

export default function JccPayButton({ className, amount = 10 }: Props) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleClick() {
    if (loading) return
    setError(null)
    setLoading(true)
    try {
      await startJccPayment({
        amount,
        orderId: `ORDER-${Date.now()}`,
        customerName: 'Test Customer',
        customerEmail: 'test@example.com',
        description: 'Website Payment',
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className={className}>
      <button type="button" className="taxnex-btn taxnex-btn--primary" onClick={handleClick} disabled={loading}>
        {loading ? 'Redirecting to secure payment...' : 'Pay Now'}
      </button>
      {error ? (
        <p className="jcc-pay-button__error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
