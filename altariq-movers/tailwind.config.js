import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: ".5rem",
    },
    extend: {
      colors: {
        primary: "rgb(228, 136, 36)",
        "primary-content": "#fff",
        secondary: "rgb(39, 54, 121)",
        "secondary-content": "#fff,"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
    },
  },
  plugins: [
    require('tailwind-bootstrap-grid')({
      generateContainer: false,
    }),
    daisyui,
  ],
  daisyui: {
    themes: ["light"]
  }
}


