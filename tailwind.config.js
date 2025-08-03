/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["Helvetica", 'sans-serif'],
        helveticaBold: ["Helvetica-Bold", 'sans-serif'],
        helveticaLight: ["Helvetica-Light", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

