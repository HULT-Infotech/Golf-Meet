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
      colors: {
        'subtle-gray': 'rgb(128, 128, 128, 0.023)',
      },
      screens: {
        'xsm': {'max': '374px'},
        'xsh': {
          'raw': '(min-width: 700px) and (max-width: 1279px) and (min-height: 700px) and (max-height: 1100px)'
        },
        'xh': {
          'raw': '(min-width: 700px) and (max-width: 1279px) and (min-height: 1099px) and (max-height: 1299px)'
        },
        'xhh': {
          'raw': '(min-width: 700px) and (max-width: 1279px) and (min-height: 1300px) and (max-height: 1440px)'
        },
        'xhhh': {'min': '1650px'},
        'xsh-landscape': {'raw': '(min-width: 700px) and (max-width: 1279px) and (min-height: 700px) and (max-height: 1100px) and (orientation: landscape)'},
        'xh-landscape': {'raw': '(min-width: 700px) and (max-width: 1279px) and (min-height: 1099px) and (max-height: 1299px) and (orientation: landscape)'},
        'xhh-landscape': {'raw': '(min-width: 700px) and (max-width: 1279px) and (min-height: 1300px) and (max-height: 1440px) and (orientation: landscape)'},
        'xhhh-landscape': {'raw': '(min-width: 1650px) and (orientation: landscape)'},
      },
    },
  },
  plugins: [],
};
