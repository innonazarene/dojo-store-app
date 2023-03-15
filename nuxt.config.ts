// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    ssr:false,
    build:{

    },
    app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=500, initial-scale=1',
          title: 'My App',
          meta: [
            // <meta name="description" content="Dojo Style">
            { name: 'description', content: 'My amazing site.' }
          ],
        },

    }
})
