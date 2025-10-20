/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      fontFamily: {
        minecraft: ["minecraft"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        code: ['"Source Code Pro"', "monospace"],
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
        card: {
          DEFAULT: "#16253A",
        },
      },
      boxShadow: {
        deep: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
        glow: "0px 5px 20px 2px rgba(139, 236, 233, 0.10)",
      },
      backgroundImage: {},
      // animations
      keyframes: {
        "fade-in-up": {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "none" },
        },
        spinning: {
          "100%": { transform: "rotate(360deg)" },
        },
        drawerSlideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(100%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        drawerSlideRightAndFade: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-in-up":
          "fade-in-up 600ms var(--animation-delay, 0ms) cubic-bezier(.21,1.02,.73,1) forwards",
        "fade-in-bottom":
          "fade-in-bottom cubic-bezier(.21,1.02,.73,1) forwards",
        spinning: "spinning 0.75s linear infinite",
        "spinning-mid": "spinning 0.95s linear infinite",
        drawerSlideLeftAndFade:
          "drawerSlideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        drawerSlideRightAndFade: "drawerSlideRightAndFade 150ms ease-in",
      },
    },
  },
  plugins: [],
};
