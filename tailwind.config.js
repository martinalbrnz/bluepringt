/* eslint-disable semi */
/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: colors.gray,
        secondary: colors.slate,
      },
    },
  },
  plugins: [],
};
