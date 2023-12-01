import { defineField, defineType } from 'sanity';
import { FaRegRectangleList as icon } from 'react-icons/fa6';
import { createRichTextBlock } from '@/sanity/schema/utils';

export default defineType({
  name: 'wishlist',
  title: 'Wishlist',
  type: 'object',
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
      title: 'Slug',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
      options: {
        maxLength: 200,
      },
    }),
    defineField({
      name: 'description',
      title: 'Optional Description',
      type: 'array',
      of: [createRichTextBlock(['decorators'])],
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [createRichTextBlock(['lists', 'decorators'])],
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
});
