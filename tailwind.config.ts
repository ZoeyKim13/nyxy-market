import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF9FB',
        rose: {
          50: '#FFF5F8',
          100: '#FEE9F0',
          200: '#FCCEE0',
          500: '#EA7CA3',
          700: '#C6557F'
        },
        lilac: '#E9E2FF'
      },
      boxShadow: {
        soft: '0 8px 24px rgba(233, 124, 163, 0.15)'
      }
    }
  },
  plugins: []
};

export default config;
