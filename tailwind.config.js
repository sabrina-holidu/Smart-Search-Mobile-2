/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'petrol': '#00809D',
        'petrol-dark': '#024251',
        'gray-800': '#45423E',
        'gray-700': '#605C57',
        'gray-300': '#D1CCC7',
        'success': '#028500',
        'error': '#D73900',
        'eco-green': '#39BF16',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}





