/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*..html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        scaleUp: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' }
        }
      },
      animation: {
        scaleUp: 'scaleUp 0.25s ease forwards'
      }
    }
  },
  plugins: []
}
