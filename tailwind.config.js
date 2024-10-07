/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    flowbite.content(),
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
        "purple-l-gradient": "linear-gradient(to bottom, #EBDCF9, #2B17440F)",
        "pink-gradient": "linear-gradient(to bottom, #FFE6FA, #FFCDF5)",
        "btn-purple-gradient": "linear-gradient(to bottom, #9255DD, #AA77E5)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), flowbite.plugin()],
};
