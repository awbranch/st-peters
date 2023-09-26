import { defineField, defineType } from 'sanity';
import { GiStrong as icon } from 'react-icons/gi';
import { createImageField, createRichTextField } from '@/sanity/schema/utils';

export default defineType({
  name: 'highlight',
  title: 'Highlight',
  type: 'object',
  description:
    'Highlight another section of the site for the user to navigate to.',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
    }),
    createRichTextField('text', 'Text', 'no-headers'),
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
});
