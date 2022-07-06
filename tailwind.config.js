/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,jsx,js}',
    './src/components/**/*.{html,jsx,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

plugins: [
  // ...
  require('tailwindcss'),
  require('autoprefixer'),
  // ...
]