import { defineField, defineType } from 'sanity';
import { FaFistRaised as icon } from 'react-icons/fa';

export default defineType({
  name: 'impact',
  title: 'Impact',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'The type of impact, e.g. lunches served, hours volunteered',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'number',
      description: 'A number that quantifies the impact.',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      category: 'category',
      value: 'value',
    },
    prepare(selection: { category: string; value: number }) {
      const { category, value } = selection;
      return {
        title: category,
        subtitle: value.toLocaleString(),
        icon: icon,
      };
    },
  },
});
