/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(blue|yellow|emerald|purple)-(100|500|600|800)/,
    },
    {
      pattern: /text-(blue|yellow|emerald|purple)-(500|800)/,
    },
  ],
};