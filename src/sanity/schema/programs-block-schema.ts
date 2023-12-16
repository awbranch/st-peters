import { defineType } from 'sanity';
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
    createRichTextField('text', 'Text', [
      'h1',
      'decorators',
      'links',
      'lists',
      'textColor',
    ]),
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
