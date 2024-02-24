/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{html,js,vue}', './public/**/*.{html,js,vue}'],
  theme: {
    extend: {
      fontFamily: {
        fantasy: 'fantasy',
        roboto: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
};
