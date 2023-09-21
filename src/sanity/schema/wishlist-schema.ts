import { defineField, defineType } from 'sanity';
import { FaRegRectangleList as icon } from 'react-icons/fa6';

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
      type: 'text',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
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
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});
