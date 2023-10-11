/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '760px',
      lg: '976',
      xl: '1440'
    },
    extend: {
      //we can extend the color
      // colors:{
      //   gt: "green-200",
      //   vuejs: "#ffff"
      // } 

    },
  },
  plugins: [],
}

