/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <--- THIS LINE IS CRITICAL
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}