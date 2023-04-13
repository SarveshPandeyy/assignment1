/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      dark_blue: "#19063D",
      light_slate: "#5d6973",
      logo_color: "#537FE7",
      light_black: "#393646",
      light_pink: "#D01257",
      light_blue: "#537FE7",
      background: "#B9E9FC",
      navy_blue: "#537FE7",
      light_gray: "#567189",
    },
    screens: {
      mobile: "370px",
      // => @media (min-width: 640px) { ... }

      mobileMd: "440px",
      // => @media (min-width: 1024px) { ... }

      mobileLg: "550px",
      tabletSm: "650px",
      tabletMd: "840px",
      tabletLg: "1040px",
      laptopMd: "1300px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
