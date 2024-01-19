import { defineField, defineType } from 'sanity';
import {
  createImageField,
  createRichTextBlock,
  getFirstBlockText,
} from '@/sanity/schema/utils';
import { FaRegFileAlt as icon } from 'react-icons/fa';

export default defineType({
  name: 'textBlock',
  title: 'Text Block',
  type: 'object',
  icon,
  description: 'A block that can display text and images.',
  fields: [
    defineField({
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      initialValue: 'left',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
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
        title: 'Text Block',
        subtitle: getFirstBlockText(text),
      };
    },
  },
});
