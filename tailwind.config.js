/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    fontFamily: {
      gandom: "gandom",
    },

    extend: {
      fontSize: {
        10: "11px",
      },
      screens: {
        xsm: "360px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
