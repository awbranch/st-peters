import { defineField, defineType } from 'sanity';
import {
  createImageField,
  createStockBlockFields,
} from '@/sanity/schema/utils';
import { IoFlashlight as icon } from 'react-icons/io5';

export default defineType({
  name: 'highlightBlock',
  title: 'Highlight Block',
  type: 'object',
  icon,
  description:
    'Highlight another section of the site for the user to navigate to.',
  fields: [
    ...createStockBlockFields(),
    defineField({
      title: 'Alignment',
      name: 'alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    }),
    createImageField('image', 'Image'),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
  ],
  preview: {
    select: { title: 'title', id: 'id' },
    prepare({ title, id }) {
      return {
        title: title || 'Highlight Block',
        subtitle: id ? `#${id.current}` : '',
        media: icon,
      };
    },
  },
});
