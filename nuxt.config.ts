// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    'reka-ui/nuxt',
    'motion-v/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  eslint: {
    checker: true,
    config: {
      standalone: false,
    },
  },
  css: ['~/assets/css/reset.css']
})