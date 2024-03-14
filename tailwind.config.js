/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: '360px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        green: 'hsl(75, 94%, 57%)',
        white: '#fff',
        grey: 'hsl(0, 0%, 20%)',
        darkgrey: 'hsl(0, 0%, 12%)',
        offblack: 'hsl(0, 0%, 8%)',
        black: '#000',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

