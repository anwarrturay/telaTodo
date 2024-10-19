/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        'xs':'468px',
        'sm':'640px',
        'md':'768px',
        'lg':'1024px',
        'xl':'1280px'
      },
      fontFamily:{
        montserrat:['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

