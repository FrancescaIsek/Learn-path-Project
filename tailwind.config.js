/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F0E4',
        surface: '#FBF7EF',
        sand: '#EFE6D6',
        line: '#E2D7C3',
        ink: { DEFAULT: '#1C1815', 2: '#5F564B', 3: '#978D7E' },
        ember: { DEFAULT: '#E8452C', tint: '#FBE1D9' },
        cobalt: '#2A30D8',
        pine: '#14604B',
        marigold: '#F7B733',
        blush: '#EBA4DA',
        tangerine: '#FF7A30',
        sky: '#9CC3FF',
      },
      // Notion's type system: Inter (their default sans) + iA Writer Mono (their mono).
      // Fallbacks are the same system stack Notion itself uses.
      fontFamily: {
        sans: [
          '"Inter Variable"',
          'Inter',
          'ui-sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Helvetica',
          '"Apple Color Emoji"',
          'Arial',
          'sans-serif',
        ],
        mono: ['"iA Writer Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        tile: '22px',
        card: '26px',
        composer: '34px',
        cover: '42px',
      },
      boxShadow: {
        composer: '0 34px 60px -30px rgba(120,70,20,.5), 0 0 70px -12px rgba(247,183,51,.4)',
        soft: '0 26px 40px -24px rgba(60,40,20,.4)',
        nav: '0 1px 0 #fff inset, 0 10px 26px -14px rgba(60,40,20,.3)',
      },
      keyframes: {
        blink: { '50%': { opacity: '0' } },
        shimmer: { to: { backgroundPosition: '-200% 0' } },
        slide: { to: { backgroundPosition: '300% 0' } },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(232,69,44,.4)' },
          '100%': { boxShadow: '0 0 0 13px rgba(232,69,44,0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1.1s steps(1) infinite',
        shimmer: 'shimmer 1.6s linear infinite',
        slide: 'slide 5s linear infinite',
        'pulse-ring': 'pulseRing 1.6s ease-out infinite',
        'fade-up': 'fadeUp .5s ease-out both',
      },
    },
  },
  plugins: [],
};
