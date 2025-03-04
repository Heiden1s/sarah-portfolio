/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-teal': '#2a9d8e',     // Primary teal color
        'nav-gray': '#333333',      // Dark gray for navigation and alternate sections
        'text-light': '#ffffff',    // White text
        'teal-dark': '#227e73',     // Darker teal for hover states
        'card-dark': 'rgba(0, 0, 0, 0.2)', // Semi-transparent dark for cards
      },
      fontFamily: {
        'handwriting': ['Indie Flower', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}