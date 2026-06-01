import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    tags: z.array(z.string()),
    icon: z.string(),
    price: z.string(),
    difficulty: z.string(),
    beneficios: z.array(z.string()),
    usoEducativo: z.string(),
    uri: z.string(),
  }),
});

export const collections = { tools };
