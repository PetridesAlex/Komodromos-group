import { Link } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import PageSeo from '../seo/PageSeo'
import { useReveal } from '../hooks/useReveal'

export default function NotFoundPage() {
  const pageRef = useReveal()

  return (
    <>
      <PageSeo
        title="Page Not Found"
        description="The page you are looking for does not exist on Komodromos Group."
        path="/404"
        noindex
      />
      <SiteTopbar logoPathname="/" logoScrollToId="home" homeHref="/" servicesSectionHref="/#services" />
      <main className="kg-not-found" ref={pageRef}>
        <div className="container">
          <p className="kg-not-found__eyebrow reveal">404</p>
          <h1 className="kg-not-found__title reveal reveal-delay-1">Page not found</h1>
          <p className="kg-not-found__lead reveal reveal-delay-2">
            The page you requested is not available. It may have moved or the address may be incorrect.
          </p>
          <div className="kg-not-found__actions reveal reveal-delay-3">
            <Link to="/">Back to home</Link>
            <Link to="/contact">Contact us</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
