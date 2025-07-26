// import type { BundledLanguage } from 'shiki/langs.mjs';
// import { bundledLanguages } from 'shiki/langs.mjs';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: [
    'nuxt-content-twoslash',
    'nuxt-site-config',
    '@nuxtjs/seo',
    '@nuxtjs/robots',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    'reka-ui/nuxt',
    'motion-v/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/image',
  ],
  devtools: {
    enabled: true,
  },
  ogImage: {
    fonts: [
      'Noto+Sans+SC:400',
    ],
  },
  robots: {
    allow: ['*'],
  },
  site: {
    indexable: true,
  },
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
  content: {
    build: {
      markdown: {
        remarkPlugins: {
          'remark-math': {},
          'remark-ref': {},
        },
        rehypePlugins: {
          'rehype-katex': {},
        },
        highlight: {
          theme: {
            default: 'material-theme-lighter',
            dark: 'material-theme-palenight',
          },
        },
      },
    },
  },
  twoslash: {
    enableInDev: true,
    floatingVueOptions: {
      classMarkdown: 'prose prose-stone dark:prose-invert',
    },
    throws: false,
  },
  nitro: {
    devStorage: {
      redis: {
        driver: 'fs',
        base: '.tmp',
      },
    },
    storage: {
      redis: {
        driver: 'vercel-kv',
      },
    },
  },
});
