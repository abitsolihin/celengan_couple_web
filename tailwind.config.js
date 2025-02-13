/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Sesuaikan dengan lokasi file yang memakai Tailwind
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: "#fdf2f8",
          600: "#db2777",
        },
      },
    },
  },
  plugins: [],
};
