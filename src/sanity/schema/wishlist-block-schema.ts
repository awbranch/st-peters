import { defineField, defineType } from 'sanity';
import { FaRegRectangleList as icon } from 'react-icons/fa6';
import {
  createRichTextBlock,
  createStockBlockFields,
} from '@/sanity/schema/utils';

export default defineType({
  name: 'wishListBlock',
  title: 'Wish List Block',
  type: 'object',
  icon,
  description: 'A block that displays a wishlist.',
  fields: [
    ...createStockBlockFields(),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        createRichTextBlock([
          'h2',
          'blockquote',
          'lists',
          'decorators',
          'links',
          'textColor',
        ]),
      ],
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [createRichTextBlock(['lists', 'decorators', 'links', 'textColor'])],
    }),
  ],
  preview: {
    select: { title: 'title', slug: 'slug' },
    prepare({ title, slug }) {
      return {
        title: `Wish List: ${title}`,
        subtitle: `#${slug?.current}`,
        media: icon,
      };
    },
  },
});
