// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    'reka-ui/nuxt',
    'motion-v/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
  eslint: {
    checker: true,
    config: {
      standalone: false,
    },
  },
  colorMode: {
    classPrefix: '',
    classSuffix: '',
  },
  css: ['~/assets/css/reset.css'],
  typescript: {
    shim: false,
    tsConfig: {
      include: ['~/types/*.d.ts'],
    },
  },
});
