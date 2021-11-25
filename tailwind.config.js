module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  theme: {
    container: {
      center: true,
    },
  },
}
module.exports = {
  variants: {
    extend: {
      // ...
     boxDecorationBreak: ['hover', 'focus'],
    }
  }
}
module.exports = {
  theme: {
    colors: require('tailwindcss/colors'),
  },
}
