import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaHandHoldingDollar as icon } from 'react-icons/fa6';
import { createImageField, createRichTextField } from '@/sanity/schema/utils';

export default defineType({
  name: 'donationRequest',
  title: 'Donation Request',
  type: 'document',
  description:
    'A call to action for a donation with a photo and amounts if one or more levels.',
  icon,
  fields: [
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
    createRichTextField('text', 'Text', 'no-headers'),
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
});
