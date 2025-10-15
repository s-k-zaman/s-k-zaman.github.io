/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ["minecraft"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#09192F",
          text: "#8BECE9",
          bar: "#D5C6C6",
        },
        secondary: {
          text: "#CCD6F6",
          dark: "#94A3B8",
          bg: "#020133",
        },
      },
      boxShadow: {
        deep: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
        glow: "0px 5px 20px 2px rgba(139, 236, 233, 0.10)",
      },
      backgroundImage: {
        "featured-readease": "url('/featured/readease.png')",
        "featured-test":
          "url('https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
        "featured-netflix":
          "url('https://images.unsplash.com/photo-1637363990764-de84fd247b7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
        "featured-todox":
          "url('/featured/todox.png')",
      },
    },
  },
  plugins: [],
};
