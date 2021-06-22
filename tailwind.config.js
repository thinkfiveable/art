module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rubik: "Rubik, sans-serif",
        palmer: "Palmer Lake Print",
      },
      colors: {
        orange: "#F36D01",
        black: "#171717",
        gray: "#F0F1F3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
