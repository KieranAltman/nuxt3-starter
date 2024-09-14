export default defineNuxtConfig({
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    'nuxt-gtag'
  ],

  app: {
    head: {
      title: 'Nuxt3 Starter',
      meta: [
        { charset: 'utf-8' },
        { hid: 'keywords', name: 'keywords', content: '' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [{ rel: 'icon', href: '/favicon.svg' }]
    }
  },

  typescript: { strict: true },
  css: ['~~/assets/css/app.css', '~~/assets/css/transition.css'],

  i18n: {
    langDir: './locales',
    skipSettingLocaleOnNavigate: true,
    locales: [{ code: 'en', name: 'English', file: 'en.yaml' }],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true
    },
    vueI18n: './i18n.config.js'
  },

  googleFonts: {
    families: {
      'Fira Code': true
    }
  },

  compatibilityDate: '2024-09-14'
})
