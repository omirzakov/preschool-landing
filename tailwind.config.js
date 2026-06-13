/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm sunrise accent
        orange: {
          50: '#FFF6ED',
          100: '#FFE9D5',
          200: '#FFD3AC',
          300: '#FFB377',
          400: '#FF8F40',
          500: '#F97316',
          600: '#E15A0C',
          700: '#BC470B',
        },
        // Deep warm ink — text + dark surfaces
        ink: {
          300: '#DED2C6',
          400: '#BCAB9D',
          500: '#9A8676',
          600: '#776153',
          700: '#564434',
          800: '#382818',
          900: '#241910',
        },
        espresso: {
          DEFAULT: '#1B1209',
          soft: '#251A10',
          ring: '#3A2A1B',
        },
        line: {
          DEFAULT: '#EFE5D9',
          2: '#F6EEE4',
        },
        bg: {
          DEFAULT: '#FFFCF7',
          warm: '#FBF3E9',
          sink: '#F7EDE0',
        },
        ok: { DEFAULT: '#2FA36B', bg: '#E6F4EC' },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        ui: ['"Onest"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'r-xs': '10px',
        'r-sm': '14px',
        'r-md': '18px',
        'r-lg': '24px',
        'r-xl': '32px',
        'r-2xl': '40px',
      },
      boxShadow: {
        'warm-xs': '0 1px 2px rgba(120, 72, 30, 0.05)',
        'warm-sm': '0 2px 8px rgba(120, 72, 30, 0.06)',
        'warm-md': '0 10px 30px -8px rgba(120, 72, 30, 0.14)',
        'warm-lg': '0 28px 60px -18px rgba(120, 72, 30, 0.22)',
        pop: '0 12px 30px -6px rgba(225, 90, 12, 0.40)',
        'inset-line': 'inset 0 0 0 1px rgba(120, 72, 30, 0.08)',
      },
      maxWidth: {
        wrap: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(249, 115, 22, 0.45)' },
          '70%': { boxShadow: '0 0 0 12px rgba(249, 115, 22, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(249, 115, 22, 0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
}
