/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'berkshire' : ['Berkshire Swash', 'cursive'],
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary': '#AD7F3C',
        'secondary': '#FFEACB',
        'grayish': '#6D6D6D',
        'greenish': '#6D935C'
      },
      backgroundImage:{
        'menu': "url('/src/Images/menu.jpg')",
        'star': "url('/src/Images/star.png')",
        'background': 'url(/src/Images/background.jpg)'       
      },
      screens:{
        'phone': "100px",
        'tablet': '600px',
        'desktop': '900px'
      }
    },
  },
  plugins: [],
}
