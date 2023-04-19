/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "color-orange":"#e96507",
        "color-pink":"#ffddd4"
      }
    },
  },
  plugins: [],
}