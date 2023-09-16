import { defineField, defineType } from 'sanity';
import { FaCircleDollarToSlot as icon } from 'react-icons/fa6';

export default defineType({
  name: 'donationLevel',
  title: 'Donation Level',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'amount',
      title: 'Amount',
      type: 'number',
      description: 'The dollar amount of the donation',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Each amount can optionally have a label',
    }),
    defineField({
      name: 'recurring',
      title: 'Is Recurring Amount',
      type: 'boolean',
      initialValue: false,
      validation: (Rule: any) => Rule.required(),
      options: {
        layout: 'checkbox',
      },
    }),
  ],
  preview: {
    select: {
      amount: 'amount',
      label: 'label',
      recurring: 'recurring',
    },
    prepare({ amount, label, recurring }) {
      return {
        title: `$${amount.toLocaleString()}`,
        subtitle: label + (recurring ? ' (Recurring)' : ''),
        icon: icon,
      };
    },
  },
});
