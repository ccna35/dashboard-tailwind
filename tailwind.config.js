/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#727cf5",
          200: "#8790f7",
        },
        secondary: {
          100: "#313a46",
          200: "#37404a",
          300: "#333a40",
          400: "#464f5b",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
      height: {
        nav: "70px",
      },
      boxShadow: {
        leftPanel: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
        navbar: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
      },
      gridTemplateColumns: {
        sidebar: "18rem auto",
        minisidebar: "4.375rem auto",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
