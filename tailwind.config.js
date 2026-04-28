/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        ssc: {
          orange: '#ea580c',
          'orange-dark': '#c2410c',
          black: '#0a0a0a',
          grey: '#f3f4f6',
          muted: '#6b7280',
          gold: '#c5a059',
          'gold-deep': '#a8813a',
          panel: '#0a1120',
          mist: '#a5c8e8',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(0, 0, 0, 0.12)',
        card: '0 4px 24px rgba(0, 0, 0, 0.08)',
        premium:
          '0 24px 60px -12px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(197, 160, 89, 0.12)',
        'premium-hover':
          '0 28px 70px -12px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(197, 160, 89, 0.28)',
      },
      keyframes: {
        'storage-hero-shimmer': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'storage-hero-shimmer': 'storage-hero-shimmer 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
