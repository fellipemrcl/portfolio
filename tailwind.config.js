/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myColors: {
          'primary': '#14213D',
          'secondary': '#FCA311',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'vollkorn': ['Vollkorn', 'serif'],
      },
    },
  },
  plugins: [],
}