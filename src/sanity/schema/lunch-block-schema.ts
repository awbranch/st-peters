import { defineField, defineType } from 'sanity';
import {
  createRichTextField,
  createStockBlockFields,
} from '@/sanity/schema/utils';
import { FaClipboardList as icon } from 'react-icons/fa';

export default defineType({
  name: 'lunchBlock',
  title: 'Lunch Block',
  type: 'object',
  icon,
  description:
    'A block that displays the upcoming lunch menus, pulled from the global list of Lunches.',
  fields: [
    ...createStockBlockFields(),
    createRichTextField('text', 'Text', [
      'h1',
      'decorators',
      'links',
      'lists',
      'textColor',
    ]),
    defineField({
      name: 'tbd',
      title: 'TBD',
      type: 'string',
      description:
        'Message to display when a days menu has not been decided yet.',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: { slug: 'slug' },
    prepare({ slug }) {
      return {
        title: 'Lunch Menu Block',
        subtitle: `#${slug?.current}`,
        media: icon,
      };
    },
  },
});
