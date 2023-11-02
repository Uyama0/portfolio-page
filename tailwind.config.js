/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0f0f0f",
        lightgray: "#979797",
        gray: "#272727",
      },
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
        SC: ["Playfair Display SC", "serif"],
      },
    },
  },
  plugins: [],
};
