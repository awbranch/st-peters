import { defineField, defineType } from 'sanity';
import { createStockBlockFields } from '@/sanity/schema/utils';
import { FaHandHoldingDollar as icon } from 'react-icons/fa6';

export default defineType({
  name: 'donationRequestBlock',
  title: 'Donation Request Block',
  type: 'object',
  icon,
  description: 'A block containing a donation request.',
  fields: [
    ...createStockBlockFields(),
    defineField({
      title: 'Alignment',
      name: 'alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule: any) => Rule.required(),
    }),

    defineField({
      name: 'request',
      title: 'Donation Request',
      type: 'reference',
      to: [{ type: 'donationRequest' }],
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: { id: 'id' },
    prepare({ id }) {
      return {
        title: 'Donation Request',
        subtitle: id ? `#${id.current}` : '',
        media: icon,
      };
    },
  },
});
