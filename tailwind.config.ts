import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        shippori: ['"Shippori Mincho B1"', 'serif'],
        amiri: ['Amiri', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
