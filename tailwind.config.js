/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '10xl': '0px 4px 50px 40px rgb(0 0 0 / 0.25);'
      }
    },
  },
  plugins: [],
}