const typography = require('@tailwindcss/typography');

module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',
  plugins: [typography()],
  theme: {
    extend: {
      colors: {
        'default-950': 'hsla(var(--default-950))',
        'default-900': 'hsla(var(--default-900))',
        'default-800': 'hsla(var(--default-800))',
        'default-700': 'hsla(var(--default-700))',
        'default-600': 'hsla(var(--default-600))',
        'default-500': 'hsla(var(--default-500))',
        'default-400': 'hsla(var(--default-400))',
        'default-300': 'hsla(var(--default-300))',
        'default-200': 'hsla(var(--default-200))',
        'default-100': 'hsla(var(--default-100))',
        'default-50': 'hsla(var(--default-50))',
        'background': 'var(--background)',
        'foreground': 'hsl(var(--foreground))',
        'primary': {
          DEFAULT: 'hsla(var(--primary))',
          foreground: 'hsla(var(--primary-foreground))',
        },
      },
    },
  },
};
