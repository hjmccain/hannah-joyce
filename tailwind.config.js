/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      display: ['Format_1452', 'sans-serif'],
      sans: ['Neue Haas Grotesk', 'sans-serif']
    },
    colors: {
      'lilac': '#DFC8DC',
      'lilac-dark': '#B18AAD',
      'lilac-light': '#EDE0EC',
      'lilac-extra-light': '#FBF8FB',
      'white': '#ffffff'
    }
  },
  plugins: [],
}
