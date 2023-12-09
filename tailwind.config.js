/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      container: {
        center: true,
      },
      colors: {
        'aqua-blue': '#00aeef',
        'aqua-blue-light': '#d9edfb',
        'river-rock': '#4a4a4a',
        'river-rock-light': '#666C71',
      },
    },
  },
  plugins: [],
};
