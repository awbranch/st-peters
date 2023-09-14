import { defineField, defineType } from 'sanity';

// Document is a reserved word in Sanity so going with Dokument
export default defineType({
  name: 'dokument',
  title: 'Document',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      options: {
        accept: 'application/pdf, application/zip',
      },
    }),
  ],
});
