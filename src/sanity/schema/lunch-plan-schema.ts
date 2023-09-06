import { defineField, defineType } from 'sanity';
import { GiStrong as icon } from 'react-icons/gi';
import { backgroundColorList } from '@/sanity/schema/helpers';

export default defineType({
  name: 'lunchPlan',
  title: 'Lunch Plan',
  type: 'object',
  description:
    'This block displays the next three days of lunch menus. Use the "Lunch Menu" object to enter daily menus.',
  icon,
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
          styles: [
            { title: 'Header 1', value: 'h1' },
            { title: 'Header 2', value: 'h2' },
          ],
          lists: [],
          marks: {
            decorators: [],
          },
        },
      ],
    }),
  ],
});
