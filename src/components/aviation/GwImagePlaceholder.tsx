type GwImagePlaceholderProps = {
  label?: string
  aspectRatio?: string
  className?: string
  variant?: 'default' | 'hero-bg' | 'logo' | 'icon'
}

export default function GwImagePlaceholder({
  label = 'Insert image here',
  aspectRatio,
  className = '',
  variant = 'default',
}: GwImagePlaceholderProps) {
  const style = aspectRatio ? { aspectRatio } : undefined

  return (
    <div
      className={`gw-placeholder gw-placeholder--${variant} ${className}`.trim()}
      style={style}
      role="img"
      aria-label={label}
    >
      <span className="gw-placeholder__label">{label}</span>
    </div>
  )
}
