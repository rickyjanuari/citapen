/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0077b6',
          light: '#0096c7',
          dark: '#023e8a'
        },
        secondary: {
          DEFAULT: '#f58220',
          light: '#ffa94d',
          dark: '#e67112'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
};