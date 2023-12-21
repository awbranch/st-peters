import { defineField, defineType } from 'sanity';
import {
  createRichTextBlock,
  createStockBlockFields,
} from '@/sanity/schema/utils';
import { FaRegWindowMaximize as icon } from 'react-icons/fa';

export default defineType({
  name: 'volunteerFormBlock',
  title: 'Volunteering Form Block',
  type: 'object',
  icon,
  description: 'A block that displays the volunteering form.',
  fields: [
    ...createStockBlockFields(),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        createRichTextBlock([
          'h1',
          'decorators',
          'links',
          'lists',
          'textColor',
        ]),
      ],
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: { slug: 'slug' },
    prepare({ slug }) {
      return {
        title: 'Volunteer Form Block',
        subtitle: `#${slug?.current}`,
        media: icon,
      };
    },
  },
});
