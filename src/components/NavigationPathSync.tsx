import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { syncNavigationPath } from '../lib/navigationHistory'

/** Keeps module-level previous/current paths in sync for entry transitions. */
export default function NavigationPathSync() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    syncNavigationPath(pathname)
  }, [pathname])

  return null
}
