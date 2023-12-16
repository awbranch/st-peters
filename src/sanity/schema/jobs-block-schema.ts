import { defineArrayMember, defineField, defineType } from 'sanity';
import {
  createRichTextField,
  createStockBlockFields,
} from '@/sanity/schema/utils';
import { FaPersonDigging as icon } from 'react-icons/fa6';

export default defineType({
  name: 'jobsBlock',
  title: 'Jobs Block',
  type: 'object',
  icon,
  description: 'A block that displays job openings.',
  fields: [
    ...createStockBlockFields(),
    createRichTextField('text', 'Text', [
      'h1',
      'decorators',
      'links',
      'lists',
      'textColor',
    ]),
    defineField({
      name: 'jobs',
      title: 'Jobs',
      type: 'array',
      of: [defineArrayMember({ type: 'job' })],
    }),
    createRichTextField('eooStatement', 'EEO Statement', [
      'h2',
      'decorators',
      'links',
      'textColor',
    ]),
    createRichTextField('noOpenings', 'No Job Openings', [
      'h2',
      'decorators',
      'links',
      'textColor',
    ]),
  ],
  preview: {
    select: { slug: 'slug' },
    prepare({ slug }) {
      return {
        title: 'Jobs Block',
        subtitle: `#${slug?.current}`,
        media: icon,
      };
    },
  },
});
