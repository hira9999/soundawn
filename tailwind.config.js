/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        iframeW: "960px",
      },
      height: {
        iframeH: "320px",
      },
      backgroundColor: {
        primary: "#2D2D2D",
      },
      boxShadow: {
        inner: "inset 0 32px 32px 0 rgb(0 0 0 / 0.05)",
      },
      animation: {
        fade: "fadeOut 0.1s linear forwards",
      },
      keyframes: {
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
