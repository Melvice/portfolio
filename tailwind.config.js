/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,csx}"],
  theme: {
    fontFamily: {
      primary: 'Roboto',
      secondary: 'Montserrat',
      tertiary: 'Aldrich',
    },
    container:{
      padding: {
        DEFAULT: '15px',
      }
    },
    screens:
    {
      'sm': '640px',
      'md': '768px',
      'lg': '960px',
      'xl': '1280px'
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3'
    },
    backgroundImage: {
    about: "url('/src/assets/gradient.jpg')",
    contact: "url('/src/assets/gradient.jpg')",
    },
  }
  }, 
  plugins: [],
};
