import { defineField, defineType } from 'sanity';
import { newsCategories } from '@/utils/globals';
import { FaBookOpenReader, FaCalendarDays, FaNewspaper } from 'react-icons/fa6';
import { createImageField, createRichTextBlock } from '@/sanity/schema/utils';

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
      name: 'summary',
      title: 'Summary',
      type: 'text',
      description:
        'A short summary that appears with the preview image on the news summary page.',
      validation: (Rule: any) => Rule.required(),
    }),
    createImageField('previewImage', 'Preview Image'),

    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        createRichTextBlock(),
        createImageField('image', 'Image'),
        { type: 'buttonRow' },
      ],
      validation: (Rule: any) => Rule.required(),
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
