import { defineArrayMember, defineField, defineType } from 'sanity';
import {
  createRichTextBlock,
  createStockBlockFields,
} from '@/sanity/schema/utils';
import { FaFistRaised as icon } from 'react-icons/fa';

export default defineType({
  name: 'impactBlock',
  title: 'Impact Block',
  type: 'object',
  icon,
  description: 'List impactful data',
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
      name: 'impacts',
      title: 'Impacts',
      type: 'array',
      of: [defineArrayMember({ type: 'impact' })],
    }),
  ],
  preview: {
    select: { id: 'id' },
    prepare({ id }) {
      return {
        title: 'Impact Block',
        subtitle: id ? `#${id.current}` : '',
        media: icon,
      };
    },
  },
});
