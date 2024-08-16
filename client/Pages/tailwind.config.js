/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media' for system preference
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'dark-primary': '#1c3d5a', // color personalizado para dark mode
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-custom': {
          '::-webkit-scrollbar': {
            width: '12px',
          },
          '::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '6px',
            border: '3px solid #f1f1f1',
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
          'scrollbar-width': 'thin',
          'scrollbar-color': '#888 #f1f1f1',
        },
      });
    },
  ],
}

