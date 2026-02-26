/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#00379E',
          light: '#0098DC',
          white: '#FFFFFF',
        },
        neutral: {
          gray: '#C0C8CE',
        },
      },
      fontFamily: {
        averta: ['Averta', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
