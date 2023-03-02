/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'default': '#000000',
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
}
