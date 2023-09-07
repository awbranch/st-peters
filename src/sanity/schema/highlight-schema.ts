import { defineField, defineType } from 'sanity';
import { GiStrong as icon } from 'react-icons/gi';
import { backgroundColorList } from '@/sanity/schema/helpers';

export default defineType({
  name: 'highlight',
  title: 'Highlight',
  type: 'object',
  description:
    'Highlight another section of the site for the user to navigate to.',
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
      name: 'orientation',
      title: 'Orientation',
      type: 'string',
      options: {
        list: [
          { title: 'Image on Left', value: 'left' },
          { title: 'Image on Right', value: 'right' },
        ],
        layout: 'radio',
        direction: 'horizontal',
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
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    }),
  ],
});
