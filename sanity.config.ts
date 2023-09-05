import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { media } from 'sanity-plugin-media';
import schemas from '@/sanity/schema';

const config = defineConfig({
  projectId: 't6t8tv0q',
  dataset: 'production',
  title: "St. Peter's Kitchen",
  apiVersion: '2023-08-28',
  useCdn: true,
  basePath: '/admin',
  plugins: [deskTool(), visionTool(), media()],
  schema: { types: schemas },
});

export default config;
