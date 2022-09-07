/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '10xl': '10rem 2px 2px 5px radial-gradient(#644, #564)'
      }
    },
  },
  plugins: [],
}