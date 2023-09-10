import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'instagramFeed',
  title: 'Instagram Feed',
  type: 'object',
  description: 'This block displays the instagram live feed.',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            decorators: [],
          },
        },
      ],
    }),
    defineField({
      name: 'config',
      title: 'Configuration',
      type: 'text',
      rows: 10,
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});