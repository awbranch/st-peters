import { defineField, defineType } from 'sanity';
import {
  createRichTextBlock,
  createStockBlockFields,
} from '@/sanity/schema/utils';
import { FaInstagram as icon } from 'react-icons/fa';

export default defineType({
  name: 'instagramBlock',
  title: 'Instagram Block',
  type: 'object',
  description: 'This block displays the instagram live feed.',
  icon,
  fields: [
    ...createStockBlockFields(),
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
  preview: {
    select: { slug: 'slug' },
    prepare({ slug }) {
      return {
        title: 'Instagram Block',
        subtitle: `#${slug.current}`,
        media: icon,
      };
    },
  },
});
