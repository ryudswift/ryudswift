/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#0a0a0f',
        surface: '#111118',
        elevated: '#1a1a24',
        phosphor: '#5a7a5a',
        warmWhite: '#c8c4b8',
        warmMuted: '#6b6560',
        warmHighlight: '#8b7e6a',
        warmLink: '#7a6a5a',
        borderDefault: '#2a2a35',
        borderHover: '#3a3a48',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'system-ui', 'monospace'],
        mono: ['"Share Tech Mono"', 'monospace'],
        data: ['"VT323"', 'monospace'],
      },
      fontSize: {
        'pixel-hero': ['clamp(1.5rem, 4vw, 2.5rem)', { lineHeight: '1.3', letterSpacing: '0.05em' }],
        'pixel-section': ['clamp(1rem, 2.5vw, 1.5rem)', { lineHeight: '1.3', letterSpacing: '0.05em' }],
        'pixel-sm': ['0.6rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
        'pixel-xs': ['0.5rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
        'pixel-xxs': ['0.45rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
        'body': ['clamp(0.875rem, 1.5vw, 1.1rem)', { lineHeight: '1.7', letterSpacing: '0.02em' }],
        'data-lg': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
      },
      borderRadius: {
        'pixel': '2px',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'blink-slow': 'blink 2s step-end infinite',
        'flicker': 'flicker 5s infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.98' },
          '52%': { opacity: '0.94' },
          '54%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
}
