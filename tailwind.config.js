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
      fontSize: {
        "fluid-h1": "clamp(1.5rem, 2vw + 1rem, 3rem)", // Adjust these values as needed
        "fluid-base": "clamp(1rem, 1.5vw + 0.5rem, 2rem)",
      },
    },
  },
  plugins: [],
};
