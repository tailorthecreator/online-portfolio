// tailwind.config.js
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js"
],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './views/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}