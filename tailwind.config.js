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
        fadeIn: {
          '0%' : { opacity: '0' },
          '100%' : { opacity: '1' },
        },
        fadeUp: {
          '0%' : { opacity: '0' },
          '25%' : { opacity: '0', transform: 'translateY(30px)' },
          '100%' : { opacity: '1' },
        },
        fadeUpDelay: {
          '0%' : { opacity: '0', transform: 'translateY(40px)' },
          '100%' : { opacity: '1' },
        },
        fadeSlide: {
          '0%' : { opacity: '0' },
          '30%' : { opacity: '0', transform: 'translateX(-30px)' },
          '100%' : { opacity: '1' },
        },
        wExpand: {
          '0%' : { maxWidth: '0' },
        },
      },
      animation: {
        spinn: 'spin 20s linear infinite',
        fadeIn: 'fadeIn 1s ease-out forwards',
        fadeUp: 'fadeUp 1s ease-out forwards',
        fadeUpDelay: 'fadeUpDelay 1s ease-out forwards',
        fadeSlide: 'fadeSlide 1.2s ease-out forwards',
        wExpand: 'wExpand 1s ease-in forwards',
      },
    },
  },
  plugins: [],
}

