import { defineField, defineType } from 'sanity';
import { backgroundColorList } from '@/sanity/schema/helpers';

export default defineType({
  name: 'lunchPlan',
  title: 'Lunch Plan',
  type: 'object',
  description:
    'This block displays the next three days of lunch menus. Use the top-level "Lunch Menu" object to enter daily menus.',
  fields: [
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'simplerColor',
      options: {
        colorList: backgroundColorList,
      },
      validation: (Rule: any) => Rule.required(),
    }),
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
