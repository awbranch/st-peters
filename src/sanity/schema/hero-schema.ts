import { defineField, defineType } from 'sanity';
import { createImageField, createRichTextField } from '@/sanity/schema/utils';

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  description:
    'A hero an large image and block of text that appears at the top of a webpage.',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    createRichTextField('text', 'Text', 'no-headers'),
    createImageField('image', 'Image'),
    defineField({
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
    }),
  ],
});
