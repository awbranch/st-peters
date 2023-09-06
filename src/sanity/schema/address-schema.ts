import { defineField, defineType } from 'sanity';
import { FaAddressCard as icon } from 'react-icons/fa';

export default defineType({
  name: 'address',
  title: 'Address',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'street',
      title: 'Street Address',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'street2',
      title: 'Street Address Line 2',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      validation: (Rule: any) => Rule.length(2).required(),
    }),
    defineField({
      name: 'zip',
      title: 'Zip Code',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});
