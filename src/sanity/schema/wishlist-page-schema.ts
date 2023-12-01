import { defineField, defineType } from 'sanity';
import { FaStar as icon } from 'react-icons/fa';
import { createRichTextField } from '@/sanity/schema/utils';

export default defineType({
  name: 'wishlistPage',
  title: 'Wish List Page',
  type: 'document',
  icon,
  groups: [],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    createRichTextField('text', 'Text', ['all']),
    defineField({
      name: 'wishlists',
      title: 'Wish Lists',
      type: 'array',
      of: [{ type: 'wishlist' }],
    }),
    defineField({
      name: 'contactLabel',
      title: 'Contact Label',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Wish List Page',
      };
    },
  },
});
