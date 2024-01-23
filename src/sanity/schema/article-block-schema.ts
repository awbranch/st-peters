import { defineField, defineType } from 'sanity';
import {
  createImageField,
  createRichTextBlock,
  getFirstBlockText,
} from '@/sanity/schema/utils';
import { FaRegFileAlt as icon } from 'react-icons/fa';

export default defineType({
  name: 'articleBlock',
  title: 'Article Block',
  type: 'object',
  icon,
  description: 'Display long form text with embedded images.',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        createRichTextBlock(),
        createImageField('image', 'Image'),
        { type: 'buttonRow' },
        { type: 'bookmark' },
      ],
    }),
  ],
  preview: {
    select: { text: 'text' },
    prepare({ text }) {
      return {
        title: 'Article Block',
        subtitle: getFirstBlockText(text),
      };
    },
  },
});