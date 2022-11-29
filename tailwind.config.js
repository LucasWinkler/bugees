const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      screens: {
        xs: '420px',
        ...defaultTheme.screens,
      },
      colors: {
        'dark-blueish-gray': '#16161a',
      },
    },
  },
  plugins: [],
};
