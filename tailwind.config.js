/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#079AA5",
        secondary: "#FFC248",
        tableColor: "#F2F2F2",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("tailwindcss-rtl")],
});
