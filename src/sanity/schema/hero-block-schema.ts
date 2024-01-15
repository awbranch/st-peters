import { defineField, defineType } from 'sanity';
import { createImageField, createRichTextBlock } from '@/sanity/schema/utils';
import { FaCircleExclamation as icon } from 'react-icons/fa6';

export default defineType({
  name: 'heroBlock',
  title: 'Hero Block',
  type: 'object',
  icon,
  description:
    'A block with a large image and text that typically appears at the top of a webpage.',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [createRichTextBlock(['h1', 'decorators', 'links', 'textColor'])],
      validation: (Rule: any) => Rule.required(),
    }),
    createImageField('image', 'Image'),
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'button' }],
    }),
  ],
});
