import { defineField, defineType } from 'sanity';
import { FaBolt as icon } from 'react-icons/fa6';

export default defineType({
  name: 'donationRequest',
  title: 'Donation Request',
  type: 'object',
  description:
    'A call to action for a donation with a photo and amounts if one or more levels.',
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
      name: 'levelsTitle',
      title: 'Levels Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'levels',
      title: 'Levels',
      type: 'array',
      of: [{ type: 'donationLevel' }],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'otherLevel',
      title: 'Display Other Level',
      type: 'boolean',
      initialValue: true,
      validation: (Rule: any) => Rule.required(),
      options: {
        layout: 'switch',
      },
    }),
  ],
});
