import { defineField, defineType } from 'sanity';
import {
  createRichTextBlock,
  createStockBlockFields,
} from '@/sanity/schema/utils';
import { FaCertificate as icon } from 'react-icons/fa6';

export default defineType({
  name: 'programsBlock',
  title: 'Programs Block',
  type: 'object',
  icon,
  description: 'A block that displays a grid of programs.',
  fields: [
    ...createStockBlockFields(),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        createRichTextBlock([
          'h1',
          'decorators',
          'links',
          'lists',
          'textColor',
        ]),
      ],
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: { slug: 'slug' },
    prepare({ slug }) {
      return {
        title: 'Programs Block',
        subtitle: `#${slug?.current}`,
        media: icon,
      };
    },
  },
});
