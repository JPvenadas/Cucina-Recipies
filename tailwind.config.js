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
        'secondary': '#FFEACB'
      },
      backgroundImage:{
        'menu': "url('/src/Images/menu.jpg')",
        'star': "url('/src/Images/star.png')"        
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
