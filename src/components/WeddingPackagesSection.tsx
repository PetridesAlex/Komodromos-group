import type { KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { weddingPackageCategories } from '../data/weddingPackages'
import { weddingPackagesSectionCopy } from '../data/weddingPageCopy'
import { weddingBrandHref } from '../lib/brandPaths'
import { useWeddingLocale } from '../lib/weddingLocale'
import { getServiceCoverImageAlt } from '../data/seo/serviceCoverImageAlts'
import WeddingLazyImage from './WeddingLazyImage'

export default function WeddingPackagesSection() {
  const navigate = useNavigate()
  const { t, htmlLang } = useWeddingLocale()

  const openCategory = (categoryId: string) => {
    navigate(weddingBrandHref(`/services/wedding/categories/${categoryId}`))
  }

  const onCardKeyDown = (event: KeyboardEvent<HTMLElement>, categoryId: string) => {
    if (event.target !== event.currentTarget) return
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    openCategory(categoryId)
  }

  return (
    <section
      className="wedding-section wedding-packages-section"
      id="wedding-packages-heading"
      aria-labelledby="wedding-packages-section-title"
      lang={htmlLang}
    >
      <div className="wedding-packages-section__inner">
        <header className="wedding-packages-section__head reveal">
          <p className="wedding-packages-section__eyebrow">
            {t(weddingPackagesSectionCopy.eyebrow)}
          </p>
          <h2 id="wedding-packages-section-title" className="wedding-packages-section__title">
            {t(weddingPackagesSectionCopy.title)}
          </h2>
          <span className="wedding-packages-section__rule" aria-hidden />
        </header>

        <div className="wedding-packages-section__categories">
          {weddingPackageCategories.map((category, index) => (
            <article
              key={category.id}
              id={`wedding-package-category-${category.id}`}
              className={`wedding-packages-section__category reveal reveal-delay-${Math.min(index + 1, 4)}`}
              role="link"
              tabIndex={0}
              onClick={() => openCategory(category.id)}
              onKeyDown={(event) => onCardKeyDown(event, category.id)}
              aria-label={t(weddingPackagesSectionCopy.openCategoryAria).replace(
                '{{title}}',
                t(category.name),
              )}
            >
              <div className="wedding-packages-section__category-media">
                <WeddingLazyImage
                  src={category.image}
                  alt={getServiceCoverImageAlt(category.image, t(category.name))}
                />
                <div className="wedding-packages-section__category-scrim" aria-hidden />
              </div>
              <div className="wedding-packages-section__category-caption">
                <h3 className="wedding-packages-section__category-name">
                  {t(category.name)}
                </h3>
                <span className="wedding-packages-section__category-line" aria-hidden />
                <p className="wedding-packages-section__category-tagline">
                  {t(category.tagline)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
