// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['Courier New', 'monospace'],
      custom: ['"Your Custom Font"', 'sans-serif'], // Custom font family
    },
  },
  plugins: [],
}
