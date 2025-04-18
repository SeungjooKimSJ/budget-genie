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
        'genie-blue': '#5C6AC4',
        'mint-green': '#5FC9A4',
        'gold': '#FFD466',
        'coral': '#FF6B6B',
        'soft-lavender': '#F3F4F9',
        'soft-ivory': '#FFFCF7',
      },
      animation: {
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'float': 'float 0.6s ease-in-out',
      },
      boxShadow: {
        'genie': '0 0 15px rgba(92,106,196,0.2)',
      },
    },
  },
  plugins: [],
} 