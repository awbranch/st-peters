import { defineField, defineType } from 'sanity';
import { FaCertificate as icon } from 'react-icons/fa6';
import { createImageField, createRichTextBlock } from '@/sanity/schema/utils';
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
    createImageField('image', 'Image'),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [createRichTextBlock('all'), createImageField('image', 'Image')],
    }),

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
