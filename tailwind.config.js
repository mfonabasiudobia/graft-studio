const {fontFamily} = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#787878",
        "dark-gray": "#787878",
        dark : "#1E1E1E",
        primary: "#010C15",
        accent : '#43D9AD',
        light: "#f3f3f3",
        secondary: "#808183",
        danger: "#CF0202",
        success: "#43D9AD;",
      },
      fontFamily: {signifier: ["'Signifier'", ...fontFamily.sans]},
    },
    // fontSize: {
    //   sm: ["16px", {lineHeight: "19px", letterSpacing: "0.08em"}],
    //   md: ["18px", {lineHeight: "27px", letterSpacing: "0em"}],
    //   base: ["19px", {lineHeight: "25px", letterSpacing: "0em"}],
    //   lg: ["40px", {lineHeight: "52px", letterSpacing: "0em"}],
    // },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "992px",
      xl: "1220px",
      "2xl": "1340px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "0px",
      },
    },
  },
  plugins: [],
};
