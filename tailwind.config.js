/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transform: {
        'rotateY': 'rotateY',
      },
      screens: {
        'xs': '500px',
        'xxs':'400px',
        '325': '325px',
      },
    },
  },
  plugins: [],
}

