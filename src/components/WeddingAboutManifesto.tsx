import {
  buildWeddingAboutStoryBlocks,
  weddingAboutManifestoBlocks,
  weddingAboutManifestoMeta,
  type WeddingAboutBlock,
  type WeddingAboutFigure,
} from '../data/weddingAboutManifesto'
import { useWeddingLocale } from '../lib/weddingLocale'
import WeddingLazyImage from './WeddingLazyImage'
import WeddingLazyReveal from './WeddingLazyReveal'

type Props = {
  onEnquire: () => void
  /** Full-page story layout (dedicated About route). */
  standalone?: boolean
}

function ManifestoFigure({ figure, delay }: { figure: WeddingAboutFigure; delay: number }) {
  const { t } = useWeddingLocale()

  return (
    <WeddingLazyReveal
      className={`wedding-about-manifesto__figure wedding-about-manifesto__figure--${figure.layout}`}
      delay={delay}
    >
      <figure className="wedding-about-manifesto__figure-frame">
        <div className="wedding-about-manifesto__figure-media">
          <WeddingLazyImage
            src={figure.src}
            alt={figure.alt}
            className="wedding-about-manifesto__figure-img"
            style={{ objectPosition: figure.objectPosition ?? 'center center' }}
          />
          <span className="wedding-about-manifesto__figure-glow" aria-hidden />
        </div>
        {figure.caption ? (
          <figcaption className="wedding-about-manifesto__figure-caption">
            <span className="wedding-about-manifesto__figure-caption-rule" aria-hidden />
            {t(figure.caption)}
          </figcaption>
        ) : null}
      </figure>
    </WeddingLazyReveal>
  )
}

function ManifestoBlock({
  block,
  delay,
  isLead = false,
  standalone = false,
}: {
  block: Exclude<WeddingAboutBlock, { kind: 'figure' }>
  delay: number
  isLead?: boolean
  standalone?: boolean
}) {
  const { t } = useWeddingLocale()

  if (block.kind === 'section') {
    return (
      <WeddingLazyReveal className="wedding-about-manifesto__section-head" delay={delay}>
        <span className="wedding-about-manifesto__section-rule" aria-hidden />
        <h2 className="wedding-about-manifesto__section-title">{t(block.title)}</h2>
      </WeddingLazyReveal>
    )
  }

  if (block.kind === 'accent') {
    return (
      <WeddingLazyReveal className="wedding-about-manifesto__accent" delay={delay}>
        {t(block.text)}
      </WeddingLazyReveal>
    )
  }

  if (block.kind === 'stanza') {
    const stanzaClass = [
      'wedding-about-manifesto__stanza',
      isLead ? 'wedding-about-manifesto__stanza--lead' : '',
      !isLead && standalone ? 'wedding-about-manifesto__stanza--epigraph' : '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <WeddingLazyReveal className={stanzaClass} delay={delay}>
        {isLead ? (
          <p className="wedding-about-manifesto__stanza-kicker">
            {t(weddingAboutManifestoMeta.leadKicker)}
          </p>
        ) : null}
        {isLead || standalone ? (
          <span className="wedding-about-manifesto__stanza-ornament" aria-hidden>
            ❦
          </span>
        ) : null}
        <div className="wedding-about-manifesto__stanza-lines">
          {block.lines.map((line, lineIndex) => (
            <p
              key={line.en}
              className={`wedding-about-manifesto__stanza-line${
                lineIndex === block.lines.length - 1
                  ? ' wedding-about-manifesto__stanza-line--final'
                  : ''
              }`}
              style={{ ['--line-i' as string]: String(lineIndex) }}
            >
              {t(line)}
            </p>
          ))}
        </div>
        {isLead || standalone ? (
          <span className="wedding-about-manifesto__stanza-rule" aria-hidden />
        ) : null}
      </WeddingLazyReveal>
    )
  }

  return (
    <WeddingLazyReveal className="wedding-about-manifesto__body" delay={delay}>
      {t(block.text)}
    </WeddingLazyReveal>
  )
}

export default function WeddingAboutManifesto({ onEnquire, standalone = false }: Props) {
  const { t, htmlLang } = useWeddingLocale()
  const BrandTag = standalone ? 'p' : 'h3'
  const blocks = standalone ? buildWeddingAboutStoryBlocks() : weddingAboutManifestoBlocks

  return (
    <article
      id="wedding-about-manifesto"
      className={`wedding-about-manifesto${standalone ? ' wedding-about-manifesto--standalone' : ''} reveal`}
      aria-labelledby="wedding-about-manifesto-heading"
      lang={htmlLang}
    >
      <div className="wedding-about-manifesto__rail" aria-hidden />
      <div className="wedding-about-manifesto__inner">
        <header className="wedding-about-manifesto__brand">
          <p className="wedding-about-manifesto__eyebrow">Atelier manifesto</p>
          <BrandTag
            id="wedding-about-manifesto-heading"
            className="wedding-about-manifesto__brand-name"
          >
            {t(weddingAboutManifestoMeta.brand)}
          </BrandTag>
          <p className="wedding-about-manifesto__tagline">
            {t(weddingAboutManifestoMeta.tagline)}
          </p>
        </header>

        <div className="wedding-about-manifesto__copy">
          {blocks.map((block, index) => {
            const delay = Math.min((index % 5) * 70, 280)
            if (block.kind === 'figure') {
              return (
                <ManifestoFigure
                  key={`figure-${block.figure.src}-${index}`}
                  figure={block.figure}
                  delay={delay}
                />
              )
            }
            const isLead = standalone && block.kind === 'stanza' && index === 0
            return (
              <ManifestoBlock
                key={`${block.kind}-${index}`}
                block={block}
                delay={delay}
                isLead={isLead}
                standalone={standalone}
              />
            )
          })}
        </div>

        <WeddingLazyReveal className="wedding-about-manifesto__close" delay={120}>
          <span className="wedding-about-manifesto__close-ornament" aria-hidden>
            ❦
          </span>
          <p className="wedding-about-manifesto__close-brand">
            {t(weddingAboutManifestoMeta.closingBrand)}
          </p>
          <p className="wedding-about-manifesto__close-line">
            {t(weddingAboutManifestoMeta.closingLine)}
          </p>
          <button
            type="button"
            className="wedding-about__cta wedding-about-manifesto__cta"
            onClick={onEnquire}
          >
            <span className="wedding-about-manifesto__cta-label">
              {t(weddingAboutManifestoMeta.cta)}
            </span>
          </button>
        </WeddingLazyReveal>
      </div>
    </article>
  )
}
