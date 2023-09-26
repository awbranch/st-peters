import { defineField, defineType } from 'sanity';
import { FaHeart as icon } from 'react-icons/fa';
import { createRichTextField } from '@/sanity/schema/utils';

export default defineType({
  name: 'supportPage',
  title: 'Support Page',
  type: 'document',
  icon,
  groups: [
    {
      name: 'grid',
      title: 'Donate Grid',
    },
    {
      name: 'requests',
      title: 'Donation Requests',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'grid',
    }),

    createRichTextField('text', 'Text', 'all', 'grid'),

    defineField({
      name: 'learn',
      title: 'Learn',
      type: 'supportCategory',
      group: 'grid',
    }),
    defineField({
      name: 'social',
      title: 'social',
      type: 'supportCategory',
      group: 'grid',
    }),
    defineField({
      name: 'newsletter',
      title: 'newsletter',
      type: 'supportCategory',
      group: 'grid',
    }),
    defineField({
      name: 'food',
      title: 'Food',
      type: 'supportCategory',
      group: 'grid',
    }),
    defineField({
      name: 'school',
      title: 'School',
      type: 'supportCategory',
      group: 'grid',
    }),
    defineField({
      name: 'merch',
      title: 'Merch',
      type: 'supportCategory',
      group: 'grid',
    }),
    defineField({
      name: 'volunteer',
      title: 'Volunteer',
      type: 'supportCategory',
      group: 'grid',
    }),
    defineField({
      name: 'donate',
      title: 'Donate',
      type: 'supportCategory',
      group: 'grid',
    }),
    defineField({
      name: 'join',
      title: 'Join',
      type: 'supportCategory',
      group: 'grid',
    }),
    defineField({
      name: 'singleDonation',
      title: 'Single Donation Request',
      type: 'reference',
      to: [{ type: 'donationRequest' }],
      group: 'requests',
    }),
    defineField({
      name: 'recurringDonation',
      title: 'Recurring Donation Request',
      type: 'reference',
      to: [{ type: 'donationRequest' }],
      group: 'requests',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Support Us Page',
      };
    },
  },
});
