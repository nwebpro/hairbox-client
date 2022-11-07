/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1170px'
    },
   extend: {
    colors: {
      'theme-default': '#FF9302',
      'theme-dark': '#151515',
      'theme-body': '#444444',
      'theme-text': '#737373',
    }
   },
  },
  plugins: [],
}
