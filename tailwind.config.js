const colors = require("tailwindcss/colors");


module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          450: "#00FFFF"
        },
        yellow: {
          125: "FFFF00"
        } 
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [],
}
