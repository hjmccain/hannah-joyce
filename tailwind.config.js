/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      dingbats: ['Mister Pixel'],
      display: ['Dark Garden', 'sans-serif'],
      sans: ['Neue Haas Grotesk', 'sans-serif'],
      serif: ['Nimbus', 'serif']
    },
    colors: {
      'lilac': '#DFC8DC',
      'lilac-dark': '#B18AAD',
      'lilac-muted-dark': '#C6AEC3',
      'lilac-light': '#EDE0EC',
      'lilac-extra-light': '#FBF8FB',
      'white': '#ffffff',
      'black': '#000000'
    }
  },
  plugins: [],
}
