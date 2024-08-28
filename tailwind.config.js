/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: [
          "'Nanum Myeongjo'",
          "'Nanum Gothic'",
          "sans-serif",
          "'helvetica'",
          "serif",
          "'AppleGothic'",
        ],
      },
    },
  },
  plugins: [],
};
