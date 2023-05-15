/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        primary : '#d81159',
        secondary : "#2f3e46",
        dark : "#000814",
        while: "#ffffff"
      }
    },
    container : {
      center: true,
      padding : {
        DEFAULT : '1rem',
        sm : '2rem',
        lg : '4rem',
        xl : '5rem',
        '2xl' : '6rem'
      },
    }
  },
  plugins: [],
}
