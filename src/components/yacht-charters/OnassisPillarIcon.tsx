import type { OnassisHighlight } from '../../data/onassisExperience'

type Props = {
  name: OnassisHighlight['icon']
  className?: string
}

/** Lightweight line icons for Christina O highlight cards. */
export default function OnassisPillarIcon({ name, className }: Props) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (name) {
    case 'dining':
      return (
        <svg {...common}>
          <path d="M4 3v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3" />
          <path d="M6 12v9" />
          <path d="M14 3v9h2a3 3 0 0 0 3-3V3" />
          <path d="M16 12v9" />
        </svg>
      )
    case 'outdoor':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      )
    case 'cocktail':
      return (
        <svg {...common}>
          <path d="M7 4h10l-5 7v6" />
          <path d="M9 21h6" />
          <path d="M8 8h8" />
        </svg>
      )
    case 'lounge':
      return (
        <svg {...common}>
          <path d="M4 12v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5" />
          <path d="M4 14H3a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1h-1" />
          <path d="M6 9V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
        </svg>
      )
    case 'pool':
      return (
        <svg {...common}>
          <path d="M3 16c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1" />
          <path d="M3 20c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1" />
          <path d="M7 4h10v7H7z" />
        </svg>
      )
    case 'suite':
      return (
        <svg {...common}>
          <path d="M3 10.5 12 4l9 6.5" />
          <path d="M5 10v9h14v-9" />
          <path d="M10 19v-5h4v5" />
        </svg>
      )
    case 'office':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="14" rx="1.5" />
          <path d="M8 21h8M12 18v3" />
          <path d="M7 8h4v3H7zM13 8h4M13 12h4" />
        </svg>
      )
    case 'bath':
      return (
        <svg {...common}>
          <path d="M4 13h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3z" />
          <path d="M6 13V8a3 3 0 0 1 3-3h1" />
          <path d="M4 13h16" />
        </svg>
      )
    case 'view':
      return (
        <svg {...common}>
          <path d="M2.5 12S6 6 12 6s9.5 6 9.5 6-3.5 6-9.5 6S2.5 12 2.5 12z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      )
    case 'stool':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="7" rx="5" ry="2.5" />
          <path d="M7 7v3c0 1.5 2.2 2.5 5 2.5s5-1 5-2.5V7" />
          <path d="M9 12.5 7 21M15 12.5 17 21M12 12.5V21" />
        </svg>
      )
    case 'footrest':
      return (
        <svg {...common}>
          <path d="M4 16h16" />
          <path d="M6 16V9l6-4 6 4v7" />
          <path d="M8 21h8" />
        </svg>
      )
    case 'craft':
      return (
        <svg {...common}>
          <path d="M12 3 14.5 9H21l-5 3.8L18 19l-6-4-6 4 2-6.2L3 9h6.5L12 3z" />
        </svg>
      )
    case 'atmosphere':
      return (
        <svg {...common}>
          <path d="M9 18c0-3 2-4 2-7a3 3 0 1 1 6 0c0 3 2 4 2 7" />
          <path d="M8 18h12" />
          <path d="M10 21h8" />
        </svg>
      )
    default:
      return null
  }
}
