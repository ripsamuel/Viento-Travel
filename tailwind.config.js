/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Montserrat: ['"Montserrat"', "sans-serif"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      primary: "#CC2D4A",
      secondary: "#8FA206",
      tertiary: "#61AEC9",
    },
    extend: {
      sanFrancisco: "url('../img/sanFrancisco.jpg')",
      sanFranciscoDesktop: "url('../img/sanFranciscoDesktop.jpg')",
      yosemite: "url('../img/yosemite.jpg')",
      LA: "url('../img/LA.jpg')",
      seattle: "url('../img/seattle.jpg')",
      new_york: "url('../img/new_york.jpg')",
      norway: "url('../img/norway.jpg')",
      sydney: "url('../img/sydney.jpg')",
      miami: "url('../img/miami.jpg')",
      switzerland: "url('../img/switzerland.jpg')",
      bali: "url('../img/bali.jpg')",
      norway: "url('../img/norway.jpg')",
      chicago: "url('../img/chicago.jpg')",
      europe: "url('../img/europe.jpg')",
      iceland: "url('../img/iceland.jpg')",
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
