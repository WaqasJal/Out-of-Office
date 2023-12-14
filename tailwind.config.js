/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,}",],
  theme: {
    extend: {
      colors: {
        'custom-background-color': '#0D1418',
      },
      fontFamily: {
        inter: ['Inter var',] /*custom font inter. import url in "index.css" */
      },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
}
