/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./{src,test-js,test-react}/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        "my-orange": {
          50: "#fffbf2",
          100: "#fff6e6",
          200: "#ffe4bf",
          300: "#ffcf99",
          400: "#ff9a4d",
          500: "#ff5600",
          600: "#e64900",
          700: "#bf3900",
          800: "#992900",
          900: "#731d00",
          950: "#4a1000",
        },
      },
    },
  },
  plugins: [],
};
