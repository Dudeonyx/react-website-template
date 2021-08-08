module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
