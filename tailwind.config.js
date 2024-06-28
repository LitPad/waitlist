/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      backgroundImage: {
        "purple-gradient": "linear-gradient(to bottom, #D7BAF3, #EBDCF9)",
        "pink-gradient": "linear-gradient(to bottom, #FFE6FA, #FFCDF5)",
        "btn-purple-gradient": "linear-gradient(to bottom, #9255DD, #AA77E5)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
