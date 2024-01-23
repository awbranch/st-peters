import { defineField, defineType } from 'sanity';
import { FaBoltLightning as icon } from 'react-icons/fa6';
import { createImageField, createRichTextBlock } from '@/sanity/schema/utils';

export default defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  icon,
  description: 'A call to action.',
  fields: [
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