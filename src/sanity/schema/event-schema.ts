import { defineField, defineType } from 'sanity';
import { FaCalendarDays as icon } from 'react-icons/fa6';

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon,
  fields: [
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
              doc.title.toLowerCase().replace(/\s+/g, '-') +
              '-' +
              doc.date.split('-')[0]
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
        'A short description that appears on the page listing all events.',
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
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Header', value: 'h2' },
            { title: 'Subheader', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bulleted List', value: 'bullet' },
            { title: 'Numbered List', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'actions',
      title: 'Actions',
      type: 'array',
      description:
        'An event can have action buttons that are links to pages or sites, such as "Register to Play" or "Sponsor a Hole"',
      of: [{ type: 'action' }],
    }),
    defineField({
      name: 'donationRequest',
      title: 'Donation Request',
      type: 'reference',
      description: 'An event can have a donation request to support it',
      to: [{ type: 'donationRequest' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
    },
    prepare({ title, date }) {
      const parts = date.split('-');
      return {
        title: title,
        subtitle: `${parts[1]}/${parts[2]}/${parts[0]}`,
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
