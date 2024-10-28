/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: 'hsl(180, 29%, 50%)',
        bgColor: 'hsl(180, 52%, 96%)',
        filterTablets: 'hsl(180, 31%, 95%)',
        darkGrayishCyan: 'hsl(180, 8%, 52%)',
        veryDarkGrayishCyan: 'hsl(180, 14%, 20%)'
      },
      fonts: {
        bodyFontSize: '15px',
        fontFamily: ['League Spartan', 'sans-serif'],
        fontWeightText: '500',
        fontWeightHeading: '700'
      },
      boxShadow: {
        customBoxShadow: '0px 4px 10px 0px hsl(180, 29%, 80%)',
      }
    },
    screens: {
      xs: "375px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1440px",
      xl: "1700px",
    },
  },
  plugins: [],
};