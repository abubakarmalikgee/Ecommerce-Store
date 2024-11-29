/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#fafafa", // 50
          DEFAULT: "#f5f5f5", // 100
        },
        secondary: {
          dark: "#212121", // 900
          DEFAULT: "#424242", // 800
        },
        accent: {
          DEFAULT: "#616161", // 700
          muted: "#757575", // 600
        },
      },
    },
  },
  plugins: [],
};
