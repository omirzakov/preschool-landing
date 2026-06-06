/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#FFF4EB',
          100: '#FFE7D4',
          200: '#FFD3B0',
          300: '#FFB07A',
          400: '#FF8A3D',
          500: '#F97316',
          600: '#E2570E',
          700: '#C2410C',
        },
        ink: {
          300: '#DED2C6',
          400: '#BCAB9D',
          500: '#9A8676',
          600: '#7A6453',
          700: '#5A4536',
          800: '#3D2C1E',
          900: '#2B1D12',
        },
        line: {
          DEFAULT: '#EFE5DA',
          2: '#F6EEE5',
        },
        bg: {
          DEFAULT: '#FFFBF6',
          warm: '#FCF3EA',
        },
        ok: { DEFAULT: '#2FA36B', bg: '#E5F4EC' },
      },
      fontFamily: {
        display: ['"Baloo 2"', '"Onest"', 'system-ui', 'sans-serif'],
        ui: ['"Onest"', '"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'r-xs': '10px',
        'r-sm': '14px',
        'r-md': '20px',
        'r-lg': '28px',
        'r-xl': '36px',
      },
      boxShadow: {
        'warm-sm': '0 2px 6px rgba(120, 72, 30, 0.06)',
        'warm-md': '0 8px 22px rgba(120, 72, 30, 0.09)',
        'warm-lg': '0 20px 48px rgba(120, 72, 30, 0.14)',
        pop: '0 14px 34px rgba(214, 95, 18, 0.26)',
      },
    },
  },
  plugins: [],
}
