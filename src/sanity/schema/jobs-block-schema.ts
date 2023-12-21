import { defineArrayMember, defineField, defineType } from 'sanity';
import {
  createRichTextBlock,
  createStockBlockFields,
} from '@/sanity/schema/utils';
import { FaPersonDigging as icon } from 'react-icons/fa6';

export default defineType({
  name: 'jobsBlock',
  title: 'Jobs Block',
  type: 'object',
  icon,
  description: 'A block that displays job openings.',
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
    defineField({
      name: 'jobs',
      title: 'Jobs',
      type: 'array',
      of: [defineArrayMember({ type: 'job' })],
    }),
    defineField({
      name: 'eooStatement',
      title: 'EEO Statement',
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
    defineField({
      name: 'noOpenings',
      title: 'No Job Openings',
      type: 'array',
      of: [
        createRichTextBlock([
          'h2',
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
        title: 'Jobs Block',
        subtitle: `#${slug?.current}`,
        media: icon,
      };
    },
  },
});
