/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./views/**/*.{ejs,html}", // Menyertakan semua file EJS
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1240px",
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
};
