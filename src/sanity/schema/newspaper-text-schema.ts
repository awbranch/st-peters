import { defineField, defineType } from 'sanity';
import { FaColumns as icon } from 'react-icons/fa';

import { createRichTextBlock } from '@/sanity/schema/utils';

export default defineType({
  name: 'newspaperText',
  title: 'Newspaper Text',
  type: 'object',
  icon,
  description:
    'Lays text out into 2 or more columns on wide screens like newspaper columns.',
  fields: [
    defineField({
      name: 'maxColumns',
      title: 'Max Columns',
      type: 'number',
      description:
        'The maximum number of columns to display on the widest screens.',
      validation: (Rule: any) => Rule.required().min(1).max(4),
    }),

    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [createRichTextBlock(['lists', 'decorators', 'links', 'textColor'])],
    }),
  ],
  preview: {
    select: { maxColumns: 'maxColumns' },
    prepare({ maxColumns }) {
      return {
        title: `Newspaper Text: ${maxColumns || 0} Columns`,
        media: icon,
      };
    },
  },
});
