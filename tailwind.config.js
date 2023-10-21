/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0f0f0f",
        lightgray: "#878787",
        gray: "#272727",
      },
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
        VT323: ["VT323", "monospace"],
      },
    },
  },
  plugins: [],
};
