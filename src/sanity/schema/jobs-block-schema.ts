import { defineArrayMember, defineField, defineType } from 'sanity';
import { createImageField } from '@/sanity/schema/utils';
import { FaPersonDigging as icon } from 'react-icons/fa6';

export default defineType({
  name: 'jobsBlock',
  title: 'Jobs Block',
  type: 'object',
  icon,
  description: 'A block that displays job openings.',
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
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    }),
    createImageField('image', 'Image'),
    defineField({
      name: 'jobs',
      title: 'Jobs',
      type: 'array',
      of: [defineArrayMember({ type: 'job' })],
    }),
    defineField({
      name: 'eooStatement',
      title: 'EEO Statement',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'noOpenings',
      title: 'No Job Openings',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: { id: 'id' },
    prepare({ id }) {
      return {
        title: 'Jobs Block',
        subtitle: id ? `#${id.current}` : '',
        media: icon,
      };
    },
  },
});
