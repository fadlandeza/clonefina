export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'], // ini default
      },
      colors: {
        bsb: {
          500: "#FF64A0",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
