import { defineField, defineType } from 'sanity';
import { createRichTextBlock } from '@/sanity/schema/utils';
import { FaRegWindowMaximize as icon } from 'react-icons/fa';

const formTypes = [
  { title: 'Contact Form', value: 'contact' },
  { title: 'Volunteer Form', value: 'volunteer' },
  { title: 'Donate Form', value: 'donate' },
];

export default defineType({
  name: 'formBlock',
  title: 'Form Block',
  type: 'object',
  icon,
  description: 'A block that displays a form.',
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
    defineField({
      name: 'formType',
      title: 'Form Type',
      type: 'string',
      options: {
        list: formTypes,
        layout: 'dropdown',
      },
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});
