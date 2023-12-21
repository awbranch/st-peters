import { defineArrayMember, defineField, defineType } from 'sanity';
import {
  createRichTextBlock,
  createStockBlockFields,
} from '@/sanity/schema/utils';
import { FaFile as icon } from 'react-icons/fa6';

export default defineType({
  name: 'docsBlock',
  title: 'Documents Block',
  type: 'object',
  icon,
  description: 'List documents',
  fields: [
    ...createStockBlockFields(),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        createRichTextBlock([
          'h1',
          'decorators',
          'links',
          'lists',
          'textColor',
        ]),
      ],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'documents',
      title: 'Documents',
      type: 'array',
      of: [defineArrayMember({ type: 'doc' })],
    }),
  ],
  preview: {
    select: { slug: 'slug' },
    prepare({ slug }) {
      return {
        title: 'Documents Block',
        subtitle: `#${slug?.current}`,
        media: icon,
      };
    },
  },
});
