import { Link } from 'react-router-dom'
import WeddingLazyReveal from './WeddingLazyReveal'
import { weddingDetailPageCopy } from '../data/weddingPageCopy'
import type { ResolvedWeddingPackageLongContent } from '../data/weddingPackageLong/types'
import { useWeddingLocale } from '../lib/weddingLocale'

type WeddingPackageLongContentProps = {
  packageId: string
  content: ResolvedWeddingPackageLongContent
}

export default function WeddingPackageLongContentBlock({
  packageId,
  content,
}: WeddingPackageLongContentProps) {
  const { t } = useWeddingLocale()

  return (
    <div className={`wedding-basic-package wedding-basic-package--${packageId}`}>
      <WeddingLazyReveal as="section" className="wedding-basic-package__intro" delay={0}>
        <h2>{t(weddingDetailPageCopy.packageIncludes)}</h2>
        <ul className="wedding-basic-package__includes">
          {content.includes.map((item, index) => (
            <li key={item} style={{ '--item-i': index } as React.CSSProperties}>
              {item}
            </li>
          ))}
        </ul>
        <p className="wedding-basic-package__contact">
          {t(weddingDetailPageCopy.contactPrefix)}
          <Link to="/contact" state={{ serviceInterest: 'Wedding Services' }}>
            {t(weddingDetailPageCopy.contactLink)}
          </Link>
          {t(weddingDetailPageCopy.contactSuffix)}
        </p>
      </WeddingLazyReveal>

      <WeddingLazyReveal as="section" className="wedding-basic-package__about" delay={80}>
        <h2>{content.aboutTitle}</h2>
        <p>{content.aboutCopy}</p>
      </WeddingLazyReveal>

      <div className="wedding-basic-package__sections">
        {content.sections.map((section, index) => (
          <WeddingLazyReveal
            key={section.title}
            as="article"
            className="wedding-basic-package__section-card"
            delay={index * 70}
          >
            <h3>{section.title}</h3>
            {section.intro ? <p>{section.intro}</p> : null}
            {section.items ? (
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {section.groups?.map((group) => (
              <div key={group.title} className="wedding-basic-package__subgroup">
                <h4>{group.title}</h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </WeddingLazyReveal>
        ))}
      </div>

      <WeddingLazyReveal as="section" className="wedding-basic-package__important" delay={120}>
        <h3>{t(weddingDetailPageCopy.important)}</h3>
        <p>{content.importantNote}</p>
      </WeddingLazyReveal>
    </div>
  )
}
