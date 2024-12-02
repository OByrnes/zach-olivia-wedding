// tailwind.config.ts

import { Config } from 'tailwindcss';

const config: Config = {
  content: [
   "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
'deep-cove': {
        '50': '#f4ecf9',
        '100': '#eadcf4',
        '200': '#d4beea',
        '300': '#b297dd',
        '400': '#916dd0',
        '500': '#744ec6',
        '600': '#5b3ec1',
        '700': '#493ec1',
        '800': '#383ead',
        '900': '#2c3987',
        '950': '#001247',
    },
    
    
    'grain-brown': {
        '50': '#fbf8f1',
        '100': '#f5eedf',
        '200': '#e8d5b5'
    },
    
      },
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
      height: {
        '128': '32rem',
        '136': '42rem',
        '164': "64rem"
      }
     
    },
  },
  backgroundImage: {
   
    'background-main': "url('/public/background.jpg')",
  },
darkMode: ['variant', [
    '@media (prefers-color-scheme: dark) { &:not(.light *) }',
    '&:is(.dark *)',
  ]],
  plugins: [require('@tailwindcss/forms')],
};

export default config;
