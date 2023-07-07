export default defineNuxtConfig({
  modules: ['nuxt-windicss', ['@pinia/nuxt', { autoImports: ['defineStore'] }], '@vueuse/nuxt', 'nuxt-icon'],
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
  // alias,
  css: ['~~/assets/css/app.css', '~~/assets/css/transition.css', '~~/assets/fonts/FiraCode/stylesheet.css'],
  build: {
    templates: [
      {
        filename: 'views/app.template.html',
        getContents() {
          return `<!DOCTYPE html>
            <html {{ HTML_ATTRS }}>
              <head>
              {{ HEAD }}
              </head>
              <body {{ BODY_ATTRS }}>
              {{ APP }}
              </body>
            </html>`
        }
      }
    ]
  }
})
