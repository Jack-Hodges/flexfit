/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkGray: '#0f0f0f',
      },
      fontFamily: {
        bebas: ['Bebas Neue'],
        arimo: ['Arimo'],
      }
    },
  },
  plugins: [],
}

