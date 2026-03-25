module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        /** Landing McCasitas Felices (mockup) */
        mc: {
          red: "#e0301e",
          yellow: "#ffc72c",
          cream: "#fdf9f0",
          dark: "#1a1f2c",
        },
        brand: {
          primary: "rgb(255 195 0 / <alpha-value>)",
          secondary: "rgb(255 0 23 / <alpha-value>)",
        },
        state: {
          info: "rgb(0 35 255 / <alpha-value>)",
          success: "rgb(0 255 59 / <alpha-value>)",
          warning: "rgb(227 217 18 / <alpha-value>)",
          error: "rgb(255 0 23 / <alpha-value>)",
        },
        ink: {
          1: "#111010",
          2: "#1D1D1D",
          3: "#282828",
        },
        paper: "#FAFAFA",
        mist: {
          1: "#202020",
          2: "#8D8D8D",
          3: "#CECECE",
          4: "#E8E8E8",
          5: "#F9F9F9",
        },
      },
      fontFamily: {
        sans: ["Onest_400Regular"],
        heading: ["Poppins_700Bold"],
      },
    },
  },
  plugins: [],
};
