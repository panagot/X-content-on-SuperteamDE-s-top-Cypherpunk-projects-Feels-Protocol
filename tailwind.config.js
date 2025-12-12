/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        solana: {
          purple: '#9945FF',
          green: '#14F195',
          dark: '#1A1A2E',
        },
        germany: {
          black: '#000000',
          red: '#DD0000',
          gold: '#FFCE00',
        },
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7fe',
          300: '#a5b8fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      backgroundImage: {
        'gradient-solana': 'linear-gradient(135deg, #9945FF 0%, #14F195 100%)',
        'gradient-germany': 'linear-gradient(135deg, #000000 0%, #DD0000 50%, #FFCE00 100%)',
        'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
        'gradient-accent': 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)',
      },
    },
  },
  plugins: [],
}

