/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        text: "0 0 5px rgba(0, 0, 0, 0.5)",
      },
      darkMode: "class",
    },
    colors: {
      btnColors: "#008080",
      textColors: "#888",
      primaryColors: "#111111",
    },
  },
  plugins: [require("daisyui")],
};
