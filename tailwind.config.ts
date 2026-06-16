import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D2145',
          light:   '#1B3A70',
          dark:    '#07152D',
          muted:   '#2C4A7A',
        },
        gold: {
          DEFAULT: '#C8880A',
          light:   '#F0B429',
          bright:  '#FFD166',
          dark:    '#9C6800',
        },
        cream:  '#F5F8FC',
        slate:  '#5A6E8A',
        border: '#E2E8F2',
      },
      fontFamily: {
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
