/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        quattrocento: ["Quattrocento", "serif"],
        quattrocentoSans: ["Quattrocento Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
};
