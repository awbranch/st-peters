import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'team',
  title: 'Team',
  type: 'object',
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
          marks: {},
        },
      ],
    }),
    defineField({
      name: 'staffPhoto',
      title: 'Staff Group Photo',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
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
      name: 'staffLabel',
      title: 'Staff Label',
      type: 'string',
    }),
    defineField({
      name: 'boardPhoto',
      title: 'Board Group Photo',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
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
      name: 'boardLabel',
      title: 'Board Label',
      type: 'string',
    }),
  ],
});
