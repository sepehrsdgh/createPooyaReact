/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '577px',
      'sm':'768px',
      'md':'992px',
      'lg':'1200px',
    }
  ,
    extend: {
      fontFamily:{
        "iran":["iran"]
      },
      colors: {
        blue: {
          950: "#167abc",
        },
        gray: {
          950: "#f8f9fa",
          450:'#f1f1f1'
        },
      },
    },
  },
  plugins: [],
};
