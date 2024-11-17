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
        heading: ['"Poppins"', 'sans-serif'], // Replace with your desired font
        poppins: ['var(--font-space-poppins)'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'ease-in-out' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'ease-in-out' },
        },
      },
      letterSpacing: {

        wider: '.05em',
        widest: '.25em',
      },
      fontSize: {
        h1: ['3rem', { lineHeight: '3.5rem', fontWeight: '800' }], // Heading 1
        h2: ['2.5rem', { lineHeight: '3rem', fontWeight: '700' }], // Heading 2
        h3: ['2rem', { lineHeight: '2.5rem', fontWeight: '600' }], // Heading 3
        h4: ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }], // Heading 4
        h5: ['1.25rem', { lineHeight: '1.75rem', fontWeight: '500' }], // Heading 5
        h6: ['1rem', { lineHeight: '1.5rem', fontWeight: '500' }], // Heading 6
      },
     
    },
  },
  darkMode: 'media', // Use 'media' to respect user's system preference
  plugins: [require('@tailwindcss/forms')],
};

export default config;
