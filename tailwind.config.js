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
      },
      'land-sm': {'raw': '(min-width: 700px) and (max-width: 1100px) and (min-height: 300px) and (max-height: 699px)'},
        'land-md': {'raw': '(min-width: 1101px) and (max-width: 1279px) and (min-height: 300px) and (max-height: 699px)'},
        'land-lg': {'raw': '(min-width: 1280px) and (max-width: 1440px) and (min-height: 300px) and (max-height: 699px)'},
        
        // Device-specific exclusions to avoid affecting laptops/tablets
        'mobile-only': {'raw': '(max-device-width: 812px), (max-device-height: 812px)'},
    },
  },
  plugins: [],
};
