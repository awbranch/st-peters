import { defineField, defineType } from 'sanity';
import { createRichTextBlock } from '@/sanity/schema/utils';

export default defineType({
  name: 'instagramFeed',
  title: 'Instagram Feed',
  type: 'object',
  description: 'This block displays the instagram live feed.',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [createRichTextBlock(['all'])],
    }),
    defineField({
      name: 'config',
      title: 'Configuration',
      type: 'text',
      rows: 10,
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});
