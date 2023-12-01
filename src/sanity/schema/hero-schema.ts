import { defineField, defineType } from 'sanity';
import { createImageField, createRichTextField } from '@/sanity/schema/utils';

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  description:
    'A hero an large image and block of text that appears at the top of a webpage.',
  fields: [
    createRichTextField('text', 'Text', ['h1', 'decorators']),
    createImageField('image', 'Image'),
    defineField({
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    }),
  ],
});
