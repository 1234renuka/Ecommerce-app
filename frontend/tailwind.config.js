/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body:    ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4A4A4A',   // dark charcoal for text
        accent:  '#6B7280',   // softer gray for subheadings
      },
    },
  },
  plugins: [],
}
