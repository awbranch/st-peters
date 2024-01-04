import { defineField, defineType } from 'sanity';
import {
  createImageField,
  createRichTextBlock,
  createStockBlockFields,
} from '@/sanity/schema/utils';
import { FaRegFileAlt as icon } from 'react-icons/fa';

export default defineType({
  name: 'textBlock',
  title: 'Text Block',
  type: 'object',
  icon,
  description: 'A block that can display text and images.',
  fields: [
    ...createStockBlockFields(),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        createRichTextBlock(),
        createImageField('image', 'Image'),
        { type: 'buttonRow' },
        { type: 'newspaperText' },
      ],
    }),
  ],
  preview: {
    select: { id: 'id' },
    prepare({ id }) {
      return {
        title: 'Text Block',
        subtitle: id ? `#${id.current}` : '',
        media: icon,
      };
    },
  },
});
