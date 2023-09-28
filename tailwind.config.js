/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'imgBubble': '28% 72% 51% 49% / 50% 63% 37% 50%',
        'imgBubbleB': '0% 0% 51% 49% / 0% 0% 37% 50%',
      },
      keyframes: {
        bubble: {
          '0%, 100%': {
            borderRadius: '32% 68% 54% 46% / 48% 62% 38% 52%'
          },
          '40%': {
            borderRadius: '35% 65% 53% 47% / 41% 57% 43% 59%'
          },
          '70%': {
            borderRadius: '29% 71% 57% 43% / 44% 62% 38% 56% '
          }
        },
        bubbleB: {
          '0%, 100%': {
            borderRadius: '0% 0% 54% 46% / 0% 0% 38% 52%'
          },
          '40%': {
            borderRadius: '0% 0% 53% 47% / 0% 0% 43% 59%'
          },
          '70%': {
            borderRadius: '0% 0% 57% 43% / 0% 0% 38% 56% '
          }
        }
      },
      animation: {
        bubble: 'bubble 6s ease infinite',
        bubbleB: 'bubble 6s ease infinite',
      },
      
    },
  },
  plugins: [],
}

