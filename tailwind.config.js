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
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spinn: 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}

