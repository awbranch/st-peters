import { defineField, defineType } from 'sanity';
import { newsCategories } from '@/utils/globals';
import { FaNewspaper, FaCalendarDays, FaBookOpenReader } from 'react-icons/fa6';

const iconSet = {
  event: FaCalendarDays,
  'community-story': FaBookOpenReader,
};

// Drop the upcoming-events and remap to title/value pairs for Sanity wants
const newsCategoryList = newsCategories
  .slice(1)
  .map((s) => ({ title: s.sanityName, value: s.sanityCategory }));

export default defineType({
  name: 'newsStory',
  title: 'News Story',
  type: 'document',
  icon: FaNewspaper,
  fields: [
    defineField({
      title: 'Category',
      name: 'category',
      type: 'string',
      options: {
        list: newsCategoryList,
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule: any) => Rule.required(),
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
        'A story can have one or more action buttons such as "Help Support People Like Sue" that links to the donation page.',
      of: [{ type: 'action' }],
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
      category: 'category',
    },
    prepare({ title, date, category }) {
      const parts = date.split('-');
      const subtitle = `${parts[1]}/${parts[2]}/${parts[0]}`;
      const cat = newsCategoryList.find((c) => c.value === category);
      let icon = iconSet[cat?.value] || FaNewspaper;
      return {
        title,
        subtitle,
        media: icon,
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