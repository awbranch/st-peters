import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'programGrid',
  title: 'Program Grid',
  type: 'object',
  description:
    'This block displays all the programs in a three column grid. It looks best if the total number of programs is dividable by three, but will work with any number of programs. Use the top-level "Programs" object to manage the list of programs.',
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
  ],
});
