import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'jobOpenings',
  title: 'Job Openings',
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
          marks: {},
        },
      ],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'jobPostings',
      title: 'Jop Postings',
      type: 'array',
      of: [{ type: 'jobPosting' }],
    }),
    defineField({
      name: 'details',
      title: 'Details',
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
      name: 'noOpenings',
      title: 'No Openings Message',
      description:
        'A message to display when there are currently no job openings.',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {},
        },
      ],
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});
