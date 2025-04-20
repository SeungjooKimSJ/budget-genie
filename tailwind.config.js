/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'genie-blue': '#1E40AF',
        'mint-green': '#34D399',
        'gold': '#F59E0B',
        'coral': '#F87171',
        'soft-lavender': '#E9D5FF',
        'soft-ivory': '#FEFCE8',
        'genie': {
          'primary': '#4338ca', // indigo-700
          'secondary': '#818cf8', // indigo-400
          'accent': '#fbbf24', // yellow-400
        },
        'pastel': {
          'primary': '#f0d6ff',
          'secondary': '#ffe2f3',
          'accent': '#ffead6',
          'text': '#9d4edd',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.3' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
      },
      dropShadow: {
        'glow': '0 0 8px rgba(245, 158, 11, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
} 