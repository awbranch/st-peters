import { defineField, defineType } from 'sanity';
import { backgroundColorList } from '@/sanity/schema/helpers';

export default defineType({
  name: 'impactStatement',
  title: 'Impact Statement',
  type: 'object',
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
      name: 'description',
      title: 'Description',
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
      name: 'impacts',
      title: 'Impacts',
      type: 'array',
      of: [{ type: 'impact' }],
    }),
  ],
});
