import { defineField, defineType } from 'sanity';
import { FaRegBookmark as icon } from 'react-icons/fa6';
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default defineType({
  name: 'newsCategory',
  title: 'News Category',
  type: 'document',
  description:
    'A way to group news stories, like a section in a newspaper. e.g. "News", "Sports", "Business" etc.',
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
  orderings: [orderRankOrdering],
});
