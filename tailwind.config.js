/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'fadeInOut': 'fadeInOut 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
      fontFamily: {
        'concertone': ['Concert One', 'sans-serif'],
        'BarlowCondensed': ['Barlow Condensed', 'sans-serif'],
      },
      colors: {
        'color-1': '#A682FF',
        'color-2': '#FFFFFF',
        'color-3': '#04030F',
        'color-4': '#662E9B',
      },
    },
  },
  plugins: [],
}

