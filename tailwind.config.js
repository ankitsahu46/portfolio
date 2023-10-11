/** @type {import('tailwindcss').Config} */
import animDelay from "tailwindcss-animation-delay";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '550px'
      },
      borderRadius: {
        'imgBubble': '28% 72% 51% 49% / 50% 63% 37% 50%',
        'imgBubbleB': '0% 0% 51% 49% / 0% 0% 37% 50%',
      },
      animationDelay: {
        0: '0ms',
        1: '200ms',
        2: '400ms',
        3: '600ms',
        4: '800ms',
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
        // bubbleB: {
        //   '0%, 100%': {
        //     borderRadius: '0% 0% 54% 46% / 0% 0% 38% 52%'
        //   },
        //   '40%': {
        //     borderRadius: '0% 0% 53% 47% / 0% 0% 43% 59%'
        //   },
        //   '70%': {
        //     borderRadius: '0% 0% 57% 43% / 0% 0% 38% 56% '
        //   }
        // },
        appear: {
          '0%': {
            transform: 'scale(0)',
          },
          '90%': {
            transform: 'scale(1.1)'
          },
          '100%': {
           transform: 'scale(1)',
          }
        },
        appear2: {
          '0%': {
            transform: 'scale(0)',
          },
          '90%': {
            transform: 'scale(1.3)',
          },
          '100%': {
           transform: 'scale(1)',
          }
        },
        appear3: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }
        },
        translateDown: {
          '0%': {
            transform: 'translateY(-100px)',
          },
          '100%': {
            transform: 'translateY(0px)'
          }
        },
        translateRight: {
          '0%': {
            transform: 'translateX(-100px)'
          },
          '100%': {
            transform: 'translateX(0px)'
          }
        },
        translateLeft: {
          '0%': {
            transform: 'translateX(100px)'
          },
          '100%': {
            transform: 'translateX(0px)'
          }
        }

      },
      animation: {
        bubble: 'bubble 3s ease infinite',
        // bubbleB: 'bubble 3s ease infinite',
        appear: 'appear 0.5s ease-in-out 0.5s backwards',
        appear2: 'appear2 0.7s ease-in-out 0.7s backwards',
        appear3: 'appear3 0.7s ease-in-out 1.2s backwards',
        translateDown: 'translateDown 1s ease backwards',
        translateRight: 'translateRight 1s ease backwards',
        translateLeft: 'translateLeft 1s ease backwards',
      },
    },
  },
  plugins: [
    animDelay,
  ],
  variants: {
    extend: {
      padding: ['hover'],
    }
  }
}

