import { defineType } from 'sanity';
import {
  createRichTextField,
  createStockBlockFields,
} from '@/sanity/schema/utils';
import { FaRegWindowMaximize as icon } from 'react-icons/fa';

export default defineType({
  name: 'volunteerFormBlock',
  title: 'Volunteering Form Block',
  type: 'object',
  icon,
  description: 'A block that displays the volunteering form.',
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
        title: 'Volunteer Form Block',
        subtitle: `#${slug?.current}`,
        media: icon,
      };
    },
  },
});
