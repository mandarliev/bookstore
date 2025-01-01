/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFCE1A",
        secodary: "#0D0842",
        blackBg: "#F3F3F3",
        Favorite: "#FF5841",
      },
      fontFamily: {
        primary: ["Montserrat", "serif"],
        secondary: ["Nunito Sans", "serif"],
      },
    },
  },
  plugins: [],
};
