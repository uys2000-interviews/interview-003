/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFF3F1",
        text: "#3F3F3F",
        
      },
    },
  },
  plugins: [],
};
