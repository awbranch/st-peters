import { defineField, defineType } from 'sanity';
import { FaCertificate as icon } from 'react-icons/fa6';
import { createRichTextField } from '@/sanity/schema/utils';
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default defineType({
  name: 'program',
  title: 'Programs',
  type: 'document',
  description: "One of programmatic services that St. Peter's provides.",
  icon,
  fields: [
    orderRankField({ type: 'string' }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200,
      },
    }),
    defineField({
      name: 'introImage',
      title: 'Intro Image',
      description: 'The image that is displayed on the program grid.',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternate Text',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        }),
      ],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      description: 'The image that is displayed on the top of the page.',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternate Text',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        }),
      ],
    }),
    createRichTextField('text', 'Text', 'all'),
    defineField({
      name: 'donationRequest',
      title: 'Donation Request',
      type: 'reference',
      to: [{ type: 'donationRequest' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
  orderings: [orderRankOrdering],
});
