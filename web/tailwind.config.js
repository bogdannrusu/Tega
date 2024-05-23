/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        bitter: ["Bitter", 'serif'],
      },
      fontSize: {
        'custom-50': '50px',
    },
  },
},
  variants: {
    extend: {},
  },
    plugins: [],

}
