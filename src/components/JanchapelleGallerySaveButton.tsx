import { Heart } from 'lucide-react'

type Props = {
  saved: boolean
  onToggle: () => void
  label: string
}

export default function JanchapelleGallerySaveButton({ saved, onToggle, label }: Props) {
  return (
    <button
      type="button"
      className={`jc-collection-gallery__save${saved ? ' is-saved' : ''}`}
      aria-label={
        saved ? `Remove ${label} from saved looks` : `Save ${label} to saved looks`
      }
      aria-pressed={saved}
      onClick={(event) => {
        event.stopPropagation()
        event.preventDefault()
        onToggle()
      }}
    >
      <Heart
        size={18}
        strokeWidth={1.75}
        fill={saved ? 'currentColor' : 'none'}
        aria-hidden
      />
    </button>
  )
}
