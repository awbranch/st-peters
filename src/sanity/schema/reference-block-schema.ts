import { defineField, defineType } from 'sanity';
import { FaShareSquare as icon } from 'react-icons/fa';

export default defineType({
  name: 'referenceBlock',
  title: 'Reference Block',
  type: 'object',
  icon,
  description: 'A block that references a shared block.',
  fields: [
    defineField({
      name: 'block',
      title: 'Shared Block',
      type: 'reference',
      to: [{ type: 'shareableBlock' }],
      validation: (Rule: any) => Rule.required(),
      options: {
        disableNew: true,
      },
    }),
  ],
  preview: {
    select: { name: 'block.name' },
    prepare({ name }) {
      return {
        title: `Reference Block`,
        subtitle: name,
        media: icon,
      };
    },
  },
});
