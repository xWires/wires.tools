// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
      "@xwires/wireui"
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/plausible', '@nuxtjs/tailwindcss'],
  app: {
    head: {
      script: [
        { src: "https://kit.fontawesome.com/2dd1bad15b.js", crossorigin: "anonymous" }
      ],
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico'
        }
      ]
    }
  },
  plausible: {
    apiHost: "https://analytics.tangledwires.xyz",
  },
})