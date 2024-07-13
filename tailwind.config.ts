// tailwind.config.ts

import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'rgb(var(--foreground-rgb) / <alpha-value>)',
        'background-start': 'rgb(var(--background-start-rgb) / <alpha-value>)',
        'background-end': 'rgb(var(--background-end-rgb) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  darkMode: 'media', // Use 'media' to respect user's system preference
  plugins: [],
};

export default config;
