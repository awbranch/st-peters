import { defineField, defineType } from 'sanity';
import { FaUsers as icon } from 'react-icons/fa';

import {
  createImageField,
  createRichTextField,
  createStockBlockFields,
} from '@/sanity/schema/utils';

export default defineType({
  name: 'teamBlock',
  title: 'Team Block',
  type: 'object',
  icon,
  description: 'A block that allows you to select the staff or board.',
  fields: [
    ...createStockBlockFields(),
    createRichTextField('text', 'Text', ['h1', 'decorators', 'textColor']),

    createImageField('staffPhoto', 'Staff Group Photo'),
    defineField({
      name: 'staffLabel',
      title: 'Staff Label',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    createImageField('boardPhoto', 'Board Group Photo'),
    defineField({
      name: 'boardLabel',
      title: 'Board Label',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      slug: 'slug',
    },
    prepare({ slug }) {
      return {
        title: 'Team Block',
        subtitle: `#${slug?.current}`,
        media: icon,
      };
    },
  },
});
