import { defineField, defineType } from 'sanity';
import { FaTableCells as icon } from 'react-icons/fa6';
import { createRichTextBlock } from '@/sanity/schema/utils';

export default defineType({
  name: 'buttonTileGridBlock',
  title: 'Button Tile Grid Block',
  type: 'object',
  icon,
  description: 'A grid of large button tiles',
  fields: [
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
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'buttonTile' }],
    }),
  ],
});
