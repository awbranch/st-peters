import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaHandHoldingDollar as icon } from 'react-icons/fa6';
import { createImageField, createRichTextBlock } from '@/sanity/schema/utils';

export default defineType({
  name: 'donationRequestBlock',
  title: 'Donation Request Block',
  type: 'object',
  icon,
  description: 'A block containing a donation request.',
  fields: [
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
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Tracking Code',
      type: 'slug',
      description: 'Use to track the donation amount in Stripe',
      validation: (Rule: any) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200,
      },
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [createRichTextBlock(['lists', 'decorators'])],
      validation: (Rule: any) => Rule.required(),
    }),
    createImageField('image', 'Image'),
    defineField({
      name: 'levelsTitle',
      title: 'Levels Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'levels',
      title: 'Levels',
      type: 'array',
      of: [defineArrayMember({ type: 'donationLevel' })],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'otherLevel',
      title: 'Display Other Level',
      type: 'boolean',
      initialValue: true,
      validation: (Rule: any) => Rule.required(),
      options: {
        layout: 'switch',
      },
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
