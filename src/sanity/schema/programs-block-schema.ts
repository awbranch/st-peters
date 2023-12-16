import { defineField, defineType } from 'sanity';
import {
  createRichTextField,
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
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    createRichTextField('text', 'Text', ['lists', 'decorators']),
  ],
  preview: {
    select: { slug: 'slug' },
    prepare({ slug }) {
      return {
        title: 'Programs Block',
        subtitle: `#${slug.current}`,
        media: icon,
      };
    },
  },
});
