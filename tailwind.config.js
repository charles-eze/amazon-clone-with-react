module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {'2': '0 0 auto'},
    extend: {},
  },
  important: true,
  variants: {
    extend: {},
  },
  plugins: [],
}
