/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        med: '6rem',
        big: '8rem',
        bigger: '10rem',
      },
      fontFamily: {
        dingbats: ['Mister Pixel'],
        display: ['Oddballz', 'sans-serif'],
        sans: ['Director', 'sans-serif']
      },
      colors: {
        'lilac': '#DFC8DC',
        'lilac-dark': '#B18AAD',
        'lilac-muted-dark': '#C6AEC3',
        'lilac-light': '#EDE0EC',
        'lilac-extra-light': '#FBF8FB',
        'white': '#ffffff',
        'black': '#000000',
        'primary': '#DFC8DC',
        'secondary': '#DFC8DC',
        'tertiary': '#DFC8DC',
        'background': '#ffffff',
      }
    }
  },
  plugins: [],
}
