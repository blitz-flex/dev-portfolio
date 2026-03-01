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
        'bg-dark': '#06080F',       // Very deep midnight blue
        'bg-light': '#FAFAFC',      // Off-white minimal paper

        'surface-dark': '#0D111D',  // Card background dark
        'surface-light': '#FFFFFF', // Card background light

        'border-dark': '#1F2937',   // Slate 800
        'border-light': '#E5E7EB',  // Gray 200

        'brand-primary': '#4F46E5', // Indigo 600
        'brand-secondary': '#06B6D4', // Cyan 500
        'brand-accent': '#10B981',  // Emerald 500

        'text-dark': '#F9FAFB',     // Gray 50
        'text-dark-muted': '#9CA3AF', // Gray 400

        'text-light': '#111827',    // Gray 900
        'text-light-muted': '#4B5563', // Gray 600
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
    },
  },
  plugins: [],
}