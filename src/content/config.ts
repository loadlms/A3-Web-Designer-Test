import { defineCollection, z } from 'astro:content';

const template1Collection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

const template2Collection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  'template1': template1Collection,
  'template2': template2Collection,
}; 