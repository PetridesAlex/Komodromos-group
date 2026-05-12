import type { ReactNode } from 'react'
import type { TaxGuideArticleBlock } from '../data/taxHowToTicPageContent'

type Props = {
  locale: 'en' | 'el'
  blocks: TaxGuideArticleBlock[]
  /** Inserted after the first paragraph block (e.g. external portal link). */
  afterFirstParagraph?: ReactNode
}

export function TaxNexGuideArticleBody({ locale, blocks, afterFirstParagraph }: Props) {
  const firstParagraphIndex = blocks.findIndex((b) => b.type === 'p')

  return (
    <div className="taxnex-guide__article-inner">
      {blocks.map((block, i) => {
        if (block.type === 'p') {
          const text = locale === 'en' ? block.en : block.el
          return (
            <div key={i} className="taxnex-prose__block">
              <p className="taxnex-prose__p">{text}</p>
              {i === firstParagraphIndex && afterFirstParagraph}
            </div>
          )
        }
        if (block.type === 'h2') {
          return (
            <h2 key={i} className="taxnex-prose__h2">
              {locale === 'en' ? block.en : block.el}
            </h2>
          )
        }
        if (block.type === 'h3') {
          return (
            <h3 key={i} className="taxnex-prose__h3">
              {locale === 'en' ? block.en : block.el}
            </h3>
          )
        }
        const items = locale === 'en' ? block.en : block.el
        return (
          <ul key={i} className="taxnex-prose__ul">
            {items.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        )
      })}
    </div>
  )
}
