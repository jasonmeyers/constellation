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
          DEFAULT: '#FFFFFF',
          subtle: '#FAFAFA',
          muted: '#F5F5F5',
          border: '#E5E5E5',
        },
        foreground: {
          DEFAULT: '#171717',
          secondary: '#525252',
          tertiary: '#A3A3A3',
        },
        accent: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          light: '#3B82F6',
          subtle: '#DBEAFE',
          ghost: '#EFF6FF',
        },
      },
      boxShadow: {
        'soft': '0 2px 8px 0 rgba(0, 0, 0, 0.04)',
        'md-soft': '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
        'lg-soft': '0 8px 24px 0 rgba(0, 0, 0, 0.06)',
        'xl-soft': '0 16px 48px 0 rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
