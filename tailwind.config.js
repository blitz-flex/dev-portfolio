/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#000000',       // Pure Obsidian Black
        'bg-light': '#FDFDFB',      // Warm paper white

        'surface-dark': '#0A0A0A',  // Deep elevation
        'surface-light': '#FFFFFF', 

        'border-dark': '#1A1A1A',   
        'border-light': '#E5E7EB',  

        'brand-primary': '#6366F1', // Indigo accent
        'brand-secondary': '#8B5CF6', // Violet accent
        'brand-accent': '#C27664',  // Keeping the muted terracotta for the background mix

        'text-dark': '#F3F4F6',     
        'text-dark-muted': '#9CA3AF', 

        'text-light': '#0A0A0B',    // Near black for maximum contrast
        'text-light-muted': '#374151', // Gray 700 for better legibility 
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}