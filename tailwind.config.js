/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFF3F1",
        bg2: "#FFF6F3",
        text: "#3F3F3F",
        btn: "#DAF7A6",
      },
      screens: {
        sm: "425px",
      },
    },
  },
  plugins: [],
};
