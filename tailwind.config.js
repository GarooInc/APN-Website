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
          dark: '#003da7',   // AZUL — Figma token
          light: '#00a1e0',  // CELESTE — Figma token
          white: '#FFFFFF',
        },
        neutral: {
          gray: '#C0C8CE',
          bg: '#d6d8db',     // Fondo gris claro de secciones
        },
      },
      fontFamily: {
        averta: ['Averta', 'Montserrat', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
