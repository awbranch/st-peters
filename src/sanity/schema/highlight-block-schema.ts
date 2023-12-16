import { defineField, defineType } from 'sanity';
import {
  createImageField,
  createRichTextField,
  createStockBlockFields,
} from '@/sanity/schema/utils';
import { IoFlashlight as icon } from 'react-icons/io5';

export default defineType({
  name: 'highlightBlock',
  title: 'Highlight Block',
  type: 'object',
  icon,
  description:
    'Highlight another section of the site for the user to navigate to.',
  fields: [
    ...createStockBlockFields(),
    defineField({
      title: 'Alignment',
      name: 'alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
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
    createRichTextField('text', 'Text', ['lists', 'decorators']),
    createImageField('image', 'Image'),
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
  preview: {
    select: {
      slug: 'slug',
      image: 'image',
    },
    prepare({ slug, image }) {
      return {
        title: 'Highlight Block',
        subtitle: `#${slug.current}`,
        media: image,
      };
    },
  },
});
