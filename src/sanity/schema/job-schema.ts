import { defineField, defineType } from 'sanity';
import { FaPersonDigging as icon } from 'react-icons/fa6';

export default defineType({
  name: 'job',
  title: 'Job',
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
      name: 'subtitle',
      title: 'Subtitle',
      description:
        'Optional subtitle for the job such as part-time or full-time.',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description:
        'A short description of the job, the full job description should be in the job posting.',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'applyLink',
      title: 'Apply Link',
      description:
        'A short description of the job, the full job description should be in the job posting.',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});
