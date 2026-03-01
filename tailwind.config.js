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
        'bg-dark': '#0f1117',       // GitHub-dark inspired — deep navy, not pure black
        'bg-light': '#FAFAFC',      // Off-white minimal paper

        'surface-dark': '#1a1d2e',  // Card surface — clearly lighter than bg (elevation)
        'surface-light': '#FFFFFF', // Card background light

        'border-dark': '#2e3347',   // Visible border in dark mode
        'border-light': '#E5E7EB',  // Gray 200

        'brand-primary': '#4F46E5', // Indigo 600
        'brand-secondary': '#06B6D4', // Cyan 500
        'brand-accent': '#10B981',  // Emerald 500

        'text-dark': '#E8EAF0',     // Slightly warm white — easier on eyes
        'text-dark-muted': '#8892AA', // Blue-gray muted — better contrast on dark bg

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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}