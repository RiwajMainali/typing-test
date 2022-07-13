/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  darkMode: "media",
  content: ["./src/**/*.{html,jsx,js}", "./src/components/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        light: {
          primary: colors.orange,
        },
        dark: {
          primary: colors.green,
        },
      },
      /* Add any default values here */
      /* borderWidth: {
         DEFAULT: "4px",
       },*/
    },
  },
  plugins: [],
};

plugins: [
  // ...
  require("tailwindcss"),
  require("autoprefixer"),
  // ...
];
