/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        arvo:["Arvo"],
      },
      borderWidth:{
        "10":"10px",
      }
    },
  },
  plugins: [],
}
