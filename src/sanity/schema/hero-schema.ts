import { defineField, defineType } from 'sanity';
import { GiStrong as icon } from 'react-icons/gi';

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  description:
    'A hero an large image and block of text that appears at the top of a webpage.',
  icon,
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
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alternate Image Text',
      description:
        'An image description is important for accessibility and page ranking.',
      type: 'string',
    }),
    defineField({
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
    }),
  ],
});
