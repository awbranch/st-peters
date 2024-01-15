import { defineField, defineType } from 'sanity';
import { FaCube as icon } from 'react-icons/fa6';
import blocks from '@/sanity/schema/blocks-schema';

export default defineType({
  name: 'shareableBlock',
  title: 'Shareable Block',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'block',
      title: 'Block',
      type: 'array',
      of: blocks
        .filter((b) => b.name !== 'referenceBlock')
        .map((b) => ({ type: b.name })),
      validation: (Rule: any) => Rule.required().min(1).max(1),
    }),
  ],
  preview: {
    select: { name: 'name', block: 'block' },
    prepare({ name, block }) {
      return {
        title: name,
        subtitle:
          block &&
          block[0]?._type &&
          blocks.find((b) => b.name === block[0]?._type)?.title,
      };
    },
  },
  orderings: [
    {
      title: 'Name',
      name: 'name',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
});
