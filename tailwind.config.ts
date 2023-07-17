import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './node_modules/flowbite/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {}
    }
  },
  plugins: [require('flowbite/plugin')]
}
