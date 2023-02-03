/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        fredoka: ['Fredoka One']
      },
    }
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin')
  ]
};