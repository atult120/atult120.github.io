import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const metric = z.object({
  value: z.string(),
  label: z.string(),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    number: z.string(),
    company: z.string(),
    tag: z.string(),
    description: z.string(),
    metrics: z.array(metric),
    stack: z.array(z.string()),
    diagram: z.enum(['serverless', 'microservices', 'cicd']).optional(),
    approach: z.array(z.string()),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { caseStudies, blog };
