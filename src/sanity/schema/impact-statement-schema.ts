import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'impactStatement',
  title: 'Impact Statement',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
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
      name: 'impacts',
      title: 'Impacts',
      type: 'array',
      of: [{ type: 'impact' }],
    }),
  ],
});
