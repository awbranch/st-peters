import { defineArrayMember, defineField, defineType } from 'sanity';
import {
  createRichTextField,
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
    createRichTextField('text', 'Text', [
      'h1',
      'decorators',
      'links',
      'lists',
      'textColor',
    ]),
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
