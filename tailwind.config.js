/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'us': '350px',
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1900px',
      },
      colors: {
        "clearGray" : "#F9F9F9"
      },
      fontFamily: {
        "abel": ['Abel', 'sans-serif'],
        "montserrat": ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}