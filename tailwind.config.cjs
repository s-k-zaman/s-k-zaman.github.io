/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        minecraft: ["minecraft"]
      },
      colors: {
        primary: {
          DEFAULT: "#09192F",
        },
      },
    },
  },
  plugins: [],
};
