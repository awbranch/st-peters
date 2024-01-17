import { defineField, defineType } from 'sanity';
import { FaBoltLightning as icon } from 'react-icons/fa6';
import { createImageField, createRichTextBlock } from '@/sanity/schema/utils';

export default defineType({
  name: 'ctaBlock',
  title: 'Call to Action Block',
  type: 'object',
  icon,
  description: 'A large call to action that is displayed landscape.',
  fields: [
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
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [createRichTextBlock(['decorators', 'links'])],
    }),
    createImageField('image', 'Image'),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
  ],
});
