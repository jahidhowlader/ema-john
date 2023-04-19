/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#1C2B35',
      'secondary': '#FF9900',
      'white': '#ffffff',
      'cart': '#FFE0B3',
      'border-clr': '#95A0A7',
      'text-primary': '#0E161A',
      'text-secondary': '#2A414F',
      'red': '#FF3030',
      'gray-light': '#d3dce6',
      'blue': '#0EA5E9'
    }
  },
  plugins: [],
}
