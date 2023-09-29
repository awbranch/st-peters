import { defineField, defineType } from 'sanity';
import { FaRegBookmark as icon } from 'react-icons/fa6';

export default defineType({
  name: 'newsCategory',
  title: 'News Category',
  type: 'document',
  description:
    'A way to group news stories, like a section in a newspaper. e.g. "News", "Sports", "Business" etc.',
  icon,
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 0,
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'slug',
      description: 'Used on the url to pick a category',
      validation: (Rule: any) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      order: 'order',
    },
    prepare({ title, order }) {
      return {
        title: `${order}: ${title}`,
      };
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
