/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      blur: {
        xs: "2px",
        custom: "3px",
      },
      fontFamily: {
        jomhuria: ["Jomhuria", "sans-serif"],
        archivo: ["Archivo", " sans-serif"],
      },
    },
  },
  plugins: [],
};
