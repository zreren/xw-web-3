/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      },
      colors: {
        slate: {
          550: 'rgb(101 101 101)'
        },
        slate: {
          450: 'rgb(174 174 174)',
        },
        'nav-color': 'rgba(251, 251, 251, 64%)'
      },
      top: {
        84: '22rem'
      },
      bottom: {
        84: '22rem'
      }
    },
  },
  plugins: [],
}
