/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      },
      colors: {
        slate: {
          550: 'rgb(101 101 101)'
        }
      }
    },
  },
  plugins: [],
}
