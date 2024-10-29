/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./views/**/*.{ejs,html}", // Menyertakan semua file EJS
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
