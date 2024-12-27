/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Switzer': ['Switzer', 'sans-serif'],
        'Manrope': ['Manrope', 'sans-serif'],
        'Stardom': ['Stardom', 'sans-serif'],
      },
      colors: {
        'jet':'#2A2B2A',
        'dim-gray': '#706C61',
        'cosmic-latte': '#F8F4E3',
        'cerise': '#E5446D',
        'coral': '#FF8966',
      }
    },
  },
  plugins: [],
}

