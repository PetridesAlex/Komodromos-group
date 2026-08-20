import { useId } from 'react'

type FormSpamFieldsProps = {
  value: string
  onChange: (value: string) => void
}

/**
 * Invisible honeypot field. Pair with useFormSpamProtection() for timing metadata.
 */
export default function FormSpamFields({ value, onChange }: FormSpamFieldsProps) {
  const id = useId()
  return (
    <div
      className="kg-form-spam-fields"
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: '-10000px',
        top: 'auto',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}
    >
      <label htmlFor={id}>Website</label>
      <input
        id={id}
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
