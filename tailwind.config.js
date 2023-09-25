/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        littleScreen: "315px",
      },
      colors: {
        primary: "#151515",
        secondary: "#4EE1A0",
        tertiary: "#4EE1A0",
        grey: "#D9D9D9",
        darkGrey: "#242424",
      },
      fontSize: {
        h1: "1.5rem",
      },
      translate: {
        image: "-50%",
      },
      letterSpacing: {
        mobile: "-0.333px",
        tablet: "-0.444px",
        h1: "-1.136px",
        h1Tablet: "-2.045px",
        h1Desktop: "-2.5px",
        btn: "2.286px",
        technologyH2: "-1px",
        technologyH2Tablet: "-1.5px",
        label: "-0.222px",
      },
      lineHeight: {
        technologyP: "26px",
        technologyPTablet: "28px",
      },
    },
  },
  plugins: [],
};
