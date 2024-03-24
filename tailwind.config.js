/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      
      'maincolor': '#292B32',
      'buttonclr': '#2C9CF0',
      "cardcolor":"#3B3E47",
      "Incardcolor":"#292B32",
      "textwhite":"#fff",
      "blues":"#738FFF",
      "blackbutton":"#000000"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
// content: [
//   "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//   "./components/**/*.{js,ts,jsx,tsx,mdx}",
//   "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   "./common/**/*.{js,ts,jsx,tsx,mdx}",
// ],