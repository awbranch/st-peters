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
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [createRichTextBlock(['decorators', 'links'])],
    }),
    defineField({
      name: 'documents',
      title: 'Documents',
      type: 'array',
      of: [defineArrayMember({ type: 'doc' })],
    }),
  ],
  preview: {
    select: { id: 'id' },
    prepare({ id }) {
      return {
        title: 'Documents Block',
        subtitle: id ? `#${id.current}` : '',
        media: icon,
      };
    },
  },
});
