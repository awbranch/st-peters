import { defineArrayMember, defineField, defineType } from 'sanity';
import { createStockBlockFields } from '@/sanity/schema/utils';
import { FaFistRaised as icon } from 'react-icons/fa';

export default defineType({
  name: 'impactBlock',
  title: 'Impact Block',
  type: 'object',
  icon,
  description: 'List impactful data',
  fields: [
    ...createStockBlockFields(),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'impacts',
      title: 'Impacts',
      type: 'array',
      of: [defineArrayMember({ type: 'impact' })],
    }),
  ],
  preview: {
    select: { slug: 'slug' },
    prepare({ slug }) {
      return {
        title: 'Impact Block',
        subtitle: `#${slug?.current}`,
        media: icon,
      };
    },
  },
});
