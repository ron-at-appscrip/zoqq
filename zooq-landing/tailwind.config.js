/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gray palette from Figma
        gray: {
          1: '#FFFFFF',
          2: '#f6f6f8',
          3: '#e9e9f0',
          4: '#d9d9e4',
          5: '#bebed2',
          6: '#9f9fbb',
          7: '#8b88a9',
          8: '#7b769a',
          9: '#716a8b',
          10: '#5e5974',
          11: '#403D4D',
          12: '#000000',
          14: '#FFFFFFCC',
        },
        // Primary purple palette from Figma
        primary: {
          1: '#f7f6fd',
          2: '#efedfa',
          3: '#e1ddf7',
          4: '#cbc2f0',
          5: '#af9fe6',
          6: '#9478da',
          7: '#825bcc',
          8: '#7148b9',
          9: '#5f3c9b',
          10: '#4f337f',
          11: '#410F62',
          12: '#151124',
          13: "#2C2643"
        },
        // Rose palette from Figma
        rose: {
          1: '#fdf7fc',
          3: '#d775c6',
          4: '#410F62',
        },
        // Red palette from Figma
        red: {
          1: '#fef7f6',
          2: '#fde6e3',
          3: '#f48575',
        },
        // Blue palette from Figma
        blue: {
          1: '#f5f7ff',
          2: '#F0F9FF',
          3: '#6080fa',
        },
        // Additional colors from Figma
        accent: {
          1: '#fdf7fc',
          2: '#BC3BDD',
          3: '#FFF62D',
          4: '#5801DB',
        },
        // Gradient colors
        gradient: {
          start: '#FCEFEF',
          end: '#BC3BDD',
          purple: {
            start: '#615FFF',
            end: '#EE50FF',
          }
        }
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        'albert-sans': ['Albert Sans', 'sans-serif'],
      },
      fontSize: {
        'h1': ['72px', {
          lineHeight: '74px',
          letterSpacing: '-1.5px',
          fontWeight: '700',
        }],
        'h2': ['48px', {
          lineHeight: '54px',
          letterSpacing: '-1.5px',
          fontWeight: '700',
        }],
        'h3': ['32px', {
          lineHeight: '40px',
          letterSpacing: '-1.5px',
          fontWeight: '700',
        }],
        'h4': ['28px', {
          lineHeight: '36px',
          letterSpacing: '-1.5px',
          fontWeight: '700',
        }],
        'body1': ['16px', {
          lineHeight: '20px',
          letterSpacing: '-0.8px',
          fontWeight: '400',
        }],
        'body2': ['12px', {
          lineHeight: '18px',
          letterSpacing: '0px',
          fontWeight: '400',
        }],
        'button': ['16px', {
          lineHeight: '19px',
          letterSpacing: '0px',
          fontWeight: '700',
        }],
      },
      spacing: {
        '52': '52px', // Button height from Figma
      },
      borderRadius: {
        'button': '8px', // Slight rounded corners for buttons
      },
      boxShadow: {
        'button': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'button-hover': '0 4px 8px rgba(0, 0, 0, 0.15)',
        'glass': '0px 8px 8px 0px #25257B0A',
      },
      backdropBlur: {
        'glass': '40px',
      },
      animation: {
        'scroll-left': 'scroll-left 20s linear infinite',
        'scroll-right': 'scroll-right 20s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
} 