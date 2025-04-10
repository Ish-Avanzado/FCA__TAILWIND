/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        homeBannerImage: "url(../dist/img/videoPoster.jpg)",
        blackOverlay:"linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        dark: "#2b2b2b",
        light: "#ffffff",
        yellow: "#daa625",
        darkblue: "#3b5897",
        lightblue: "#167ac6",
        green: "#28941e",
        lightgray: "#d1d5db",
      },
    },
  },
  plugins: [],
};

