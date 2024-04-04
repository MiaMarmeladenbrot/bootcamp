/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // So können wir eine eigen font mit einbinden 2
    fontFamily: {
      test: ["test", "sans-serif"],
    },

    // So könnne wir unsere eigene Farben inTaiwind benutzen
    colors: {
      main: "#FFC700",
      zweiteFarbe: "#BB9304",
    },

    extend: {},
  },
  plugins: [],
};
