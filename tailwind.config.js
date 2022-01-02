/* eslint-env es6 */
const { teal, emerald, fuchsia } = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      spacing: {
        hero: '50rem',
      },
      colors: {
        'default-teal': teal,
        teal: {
          100: '#ccf2e3',
          200: '#99e5c6',
          300: '#67d9aa',
          400: '#34cc8d',
          500: '#01bf71',
          600: '#01995a',
          700: '#017344',
          800: '#004c2d',
          900: '#002617',
        },
        dark: {
          100: '#d3d4d6',
          200: '#a7aaae',
          300: '#7b7f85',
          400: '#4f555d',
          500: '#232a34',
          600: '#1c222a',
          700: '#15191f',
          800: '#0e1115',
          900: '#07080a',
        },
        emerald,
        fuchsia,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
