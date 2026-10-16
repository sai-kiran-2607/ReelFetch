/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#7138F5',
          'purple-hover': '#5F27E5',
          'deep-purple': '#4C1DCE',
          pink: '#F044C8',
          'light-purple': '#F5F0FF',
          'surface-card': '#FAFAFD',
          'border-subtle': '#EDEBF8',
          'border-light': '#E8DEFE',
          'dark-text': '#17152A',
          'secondary-text': '#68708A',
          'muted-text': '#969EB5',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 40px -10px rgba(113, 56, 245, 0.3)',
        'glow-pink': '0 0 40px -10px rgba(240, 68, 200, 0.25)',
        'card-soft': '0 10px 30px -5px rgba(23, 21, 42, 0.05)',
        'card-hover': '0 20px 40px -10px rgba(113, 56, 245, 0.12)',
        'mockup': '0 25px 60px -15px rgba(76, 29, 206, 0.2)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
