/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["bumblebee"],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}