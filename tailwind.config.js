/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#blue-50',
          500: '#blue-500',
          600: '#blue-600',
          700: '#blue-700',
          900: '#blue-900',
        }
      }
    },
  },
  plugins: [],
}