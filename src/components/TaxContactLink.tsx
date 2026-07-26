import { Link } from 'react-router-dom'
import { taxContactHref } from '../lib/brandPaths'

type Props = {
  className?: string
  children: React.ReactNode
  state?: { serviceInterest?: string }
  onClick?: () => void
  'aria-label'?: string
}

/**
 * Contact link that works on komodromosgroup.com (in-app /contact)
 * and on taxnexcy.com (absolute link to the group contact page).
 */
export default function TaxContactLink({ className, children, state, onClick, ...rest }: Props) {
  const href = taxContactHref()
  const isExternal = href.startsWith('http')

  if (isExternal) {
    return (
      <a className={className} href={href} onClick={onClick} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Link className={className} to={href} state={state} onClick={onClick} {...rest}>
      {children}
    </Link>
  )
}
