/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        background: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          lighter: '#404040',
        },
        foreground: {
          DEFAULT: '#f5f5f5',
          muted: '#a3a3a3',
        },
        accent: {
          DEFAULT: '#3b82f6',
          hover: '#60a5fa',
          muted: '#1e40af',
        },
      },
    },
  },
  plugins: [],
}
