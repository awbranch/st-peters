import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaNewspaper } from 'react-icons/fa6';
import { createRichTextField } from '@/sanity/schema/utils';

export default defineType({
  name: 'newsStory',
  title: 'News Story',
  type: 'document',
  icon: FaNewspaper,
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'newsCategory' }],
      validation: (Rule: any) => Rule.required(),
      options: {
        disableNew: true,
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MM/DD/YYYY',
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
      title: 'Slug',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
      options: {
        source: (doc) => {
          if (
            doc.title &&
            typeof doc.title === 'string' &&
            doc.date &&
            typeof doc.date === 'string'
          ) {
            return (
              doc.date + '-' + doc.title.toLowerCase().replace(/\s+/g, '-')
            );
          }
        },
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description:
        'A short description that appears on the page listing all stories.',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
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
    createRichTextField('text', 'Text', 'all'),
    defineField({
      name: 'actions',
      title: 'Actions',
      type: 'array',
      description:
        'A story can have one or more action buttons such as "Help Support People Like Sue" that links to the donation page.',
      of: [defineArrayMember({ type: 'action' })],
    }),
    defineField({
      name: 'donationRequest',
      title: 'Donation Request',
      type: 'reference',
      description: 'A story can have a donation request to support it',
      to: [{ type: 'donationRequest' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      category: 'category.title',
    },
    prepare({ title, date, category }) {
      const parts = date.split('-');
      const subtitle = `${parts[1]}/${parts[2]}/${parts[0]} - ${category}`;
      return {
        title,
        subtitle,
      };
    },
  },
  orderings: [
    {
      title: 'Date',
      name: 'date',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
});
