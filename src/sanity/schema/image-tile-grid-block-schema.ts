import { defineField, defineType } from 'sanity';
import { FaImages as icon } from 'react-icons/fa6';
import { createStockBlockFields } from '@/sanity/schema/utils';

export default defineType({
  name: 'imageTileGridBlock',
  title: 'Image Tile Grid Block',
  type: 'object',
  icon,
  description: 'A grid of large image tiles',
  fields: [
    ...createStockBlockFields(),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'imageTile' }],
    }),
  ],
  preview: {
    select: { id: 'id' },
    prepare({ id }) {
      return {
        title: 'Image Tile Grid Block',
        subtitle: id ? `#${id.current}` : '',
        media: icon,
      };
    },
  },
});
