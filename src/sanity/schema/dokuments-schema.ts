import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'dokuments',
  title: 'Documents',
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
      type: 'text',
    }),
    defineField({
      name: 'dokuments',
      title: 'Documents',
      type: 'array',
      of: [{ type: 'dokument' }],
    }),
  ],
});
