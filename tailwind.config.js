/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/customer/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazonclone: {
          background: "#EAEEDDD",
          light_blue: "#232F3A",
          yellow: "#FEBD69",
          DEFAULT: "#131921",
        },
      },
    },
  },
  plugins: [],
}