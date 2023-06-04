/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{js,jsx}', './src/**/*.{js,jsx}',"./node_modules/flowbite/**/*.{js,jsx}","./node_modules/tw-elements/dist/{js,jsx}/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin',"tw-elements/dist/plugin.cjs")],
}