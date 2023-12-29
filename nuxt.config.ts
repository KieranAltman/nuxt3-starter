export default defineNuxtConfig({
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  app: {
    head: {
      title: 'Nuxt3 Starter',
      meta: [
        { charset: 'utf-8' },
        { hid: 'keywords', name: 'keywords', content: '' },
        { hid: 'description', name: 'description', content: '' }
      ]
    }
  },
  typescript: { strict: true },
  css: ['~~/assets/css/app.css', '~~/assets/css/transition.css', '~~/assets/fonts/FiraCode/stylesheet.css'],
  i18n: {
    langDir: './locales',
    skipSettingLocaleOnNavigate: true,
    locales: [{ code: 'en', name: 'English', file: 'en.yaml' }],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true
    },
    vueI18n: './i18n.config.js'
  }
})
