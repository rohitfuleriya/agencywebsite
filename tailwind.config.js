/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: { 
      colors: {
        neutralWhite: "#FFF",
        brandSecondary: "#263238",
        neutralDGrey: "#4D4D4D",
        neutralGrey: "#717171",
        neutralSilver: "#F5F7FA",
        brandPrimary: "#fe6100",
        grey900: '#18191F',

      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

