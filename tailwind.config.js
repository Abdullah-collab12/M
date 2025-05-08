/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'accent': '#A78BFA',
        'background': '#FFF7ED',
        'texts': '#3E2C41',
        'support': '#81E6D9',
      },
    },
  },
  plugins: [],
}