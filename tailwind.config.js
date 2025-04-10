/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: { 
      fontFamily: {
        'raleway':['Raleway', 'sans-serif']
      },
      colors: {
        dark: "#2b2b2b",
        light: "#ffffff",
        yellow: "#daa625",
        darkblue: "#3b5897",
        lightblue: "#167ac6",
        green: "#28941e",
      },
    },
  },
  plugins: [],
}

