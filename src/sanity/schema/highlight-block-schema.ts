import { defineField, defineType } from 'sanity';
import {
  createImageField,
  createRichTextBlock,
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
    createImageField('image', 'Image'),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
  ],
  preview: {
    select: { slug: 'slug' },
    prepare({ slug }) {
      return {
        title: 'Highlight Block',
        subtitle: `#${slug?.current}`,
        media: icon,
      };
    },
  },
});
