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
        { type: 'buttonTileGrid' },
      ],
    }),
  ],
  preview: {
    select: { slug: 'slug' },
    prepare({ slug }) {
      return {
        title: 'Text Block',
        subtitle: `#${slug?.current}`,
        media: icon,
      };
    },
  },
});
