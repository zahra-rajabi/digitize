/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    fontFamily: {
      dana: "dana",
    },

    extend: {
      fontSize: {
        10: "11px",
      },
      screens: {
        xsm: "340px",
      },
    },
  },
  plugins: [],
};
