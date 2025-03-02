import { defineCollection, defineContentConfig } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    post: defineCollection({
      source: 'post/*.md',
      type: 'page',
    }),
    introduction: defineCollection({
      source: 'index.md',
      type: 'page',
    }),
  },
});
