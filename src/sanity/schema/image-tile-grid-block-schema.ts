import { defineField, defineType } from 'sanity';
import { FaImages as icon } from 'react-icons/fa6';
import { createRichTextBlock } from '@/sanity/schema/utils';

export default defineType({
  name: 'imageTileGridBlock',
  title: 'Image Tile Grid Block',
  type: 'object',
  icon,
  description: 'A grid of large image tiles',
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
