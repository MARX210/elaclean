/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { primary: '#E4D3B8' },
      fontFamily: { serif: ['"Instrument Serif"', 'serif'] },
    },
  },
  plugins: [],
}
