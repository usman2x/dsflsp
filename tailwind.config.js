/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          tajawal: ['Tajawal', 'sans-serif'],
          cairo: ['Cairo', 'sans-serif'],
          amiri: ['Amiri', 'serif'],
          notoKufi: ['"Noto Kufi Arabic"', 'sans-serif'],
          elMessiri: ['"El Messiri"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  