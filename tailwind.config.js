/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        med: '5rem',
        big: '8rem',
        bigger: '12rem',
      },
      fontFamily: {
        dingbats: ['Mister Pixel'],
        display: ['PicNic', 'sans-serif'],
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
        'primary': '#FB6107',
        'secondary': '#FBDA46',
        'tertiary': '#DFC8DC',
        'background': '#ffffff',
      }
    }
  },
  plugins: [],
}
