import { defineField, defineType } from 'sanity';
import { FaTableCells as icon } from 'react-icons/fa6';
import { createStockBlockFields } from '@/sanity/schema/utils';

export default defineType({
  name: 'buttonTileGridBlock',
  title: 'Button Tile Grid Block',
  type: 'object',
  icon,
  description: 'A grid of large button tiles',
  fields: [
    ...createStockBlockFields(),
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'buttonTile' }],
    }),
  ],
  preview: {
    select: { id: 'id' },
    prepare({ id }) {
      return {
        title: 'Button Tile Grid Block',
        subtitle: id ? `#${id.current}` : '',
        media: icon,
      };
    },
  },
});
