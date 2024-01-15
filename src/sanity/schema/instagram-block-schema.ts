import { defineField, defineType } from 'sanity';
import { createRichTextBlock } from '@/sanity/schema/utils';
import { FaInstagram as icon } from 'react-icons/fa';

export default defineType({
  name: 'instagramBlock',
  title: 'Instagram Block',
  type: 'object',
  description: 'This block displays the instagram live feed.',
  icon,
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
      of: [createRichTextBlock(['lists', 'decorators'])],
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
