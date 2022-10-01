/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'berkshire' : ['Berkshire Swash', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'primary': '#AD7F3C',
        'secondary': '#FFEACB',
        'tertiary': '#F9F3E3',
        'grayish': '#6D6D6D',
        'greenish': '#6D935C',
        'lighten': '#FFE5B2'
      },
      backgroundImage:{
        'menu': "url('/src/Images/menu.jpg')",
        'star': "url('/src/Images/star.png')",
        'background': 'url(/src/Images/background.jpg)',
        'chef': "url('/src/Images/chef.png')",
        'search': "url('/src/Images/search.png')",
        'up': "url('/src/Images/up.jpg')",
        'recbuttoncolor': "linear-gradient(180deg, #D58E28 1.04%, #DF9A36 100%)"
      },
      screens:{
        'phone': "100px",
        'tablet': '600px',
        'desktop': '900px',
        'large-desktop': '1600px'
      }
    },
  },
  plugins: [],
}
