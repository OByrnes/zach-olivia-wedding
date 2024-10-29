// tailwind.config.ts

import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-space-poppins)'],
        open_sans: ['var(--font-space-open-sans)'],
      },
    },
  },
  darkMode: 'media', // Use 'media' to respect user's system preference
  plugins: [require('@tailwindcss/forms')],
};

export default config;
