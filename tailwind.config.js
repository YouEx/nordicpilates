/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from logo
        'coral': '#E87461',
        'coral-dark': '#D96454',
        'navy': '#1B2942',
        'navy-light': '#2C3E5C',
        // Supporting colors
        'cream': '#FAF8F5',
        'warm-gray': '#F5F3F0',
        'text-primary': '#1B2942',
        'text-secondary': '#5B6B83',
        // Legacy colors (deprecated)
        snow: '#FAFAFA',
        porcelain: '#F4F6F7',
        graphite: '#111214',
        fog: '#DADFE3',
        'ice-blue': '#D3E5F1',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-ibm-plex-sans)', 'system-ui', 'sans-serif'],
        openSans: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'sm': '1rem',
      },
      spacing: {
        '2': '0.7rem',
        '4': '4px',
        '8': '8px',
        '12': '1rem',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '64': '64px',
        '80': '80px',
        '96': '96px',
      },
      borderRadius: {
        'default': '2.5rem',
        'button': '2.5rem',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.04), 0 10px 24px rgba(0, 0, 0, 0.08)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
