import { defineCollection, defineContentConfig } from '@nuxt/content';
import { z } from 'zod';

export default defineContentConfig({
  collections: {
    post: defineCollection({
      source: 'post/*.md',
      type: 'page',
      schema: z.object({
        path: z.string(),
        title: z.string(),
        description: z.string(),
        seo: z.intersection(
          z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            meta: z.array(z.record(z.string(), z.any())).optional(),
            link: z.array(z.record(z.string(), z.any())).optional(),
          }),
          z.record(z.string(), z.any()),
        ).optional().default({}),
        body: z.object({
          type: z.string(),
          children: z.any(),
          toc: z.any(),
        }),
        navigation: z.union([
          z.boolean(),
          z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string(),
          }),
        ]).default(true),
        category: z.array(z.string()),
      }),
    }),
    introduction: defineCollection({
      source: 'index.md',
      type: 'page',
    }),
  },
});
