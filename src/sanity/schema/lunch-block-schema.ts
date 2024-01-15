import { defineField, defineType } from 'sanity';
import { createRichTextBlock } from '@/sanity/schema/utils';
import { FaClipboardList as icon } from 'react-icons/fa';

export default defineType({
  name: 'lunchBlock',
  title: 'Lunch Block',
  type: 'object',
  icon,
  description:
    'A block that displays the upcoming lunch menus, pulled from the global list of Lunches.',
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
      name: 'tbd',
      title: 'TBD',
      type: 'string',
      description:
        'Message to display when a days menu has not been decided yet.',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: { id: 'id' },
    prepare({ id }) {
      return {
        title: 'Lunch Menu Block',
        subtitle: id ? `#${id.current}` : '',
        media: icon,
      };
    },
  },
});
