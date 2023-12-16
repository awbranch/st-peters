import { defineField, defineType } from 'sanity';
import {
  createImageField,
  createRichTextField,
  createStockBlockFields,
} from '@/sanity/schema/utils';
import { FaCircleExclamation as icon } from 'react-icons/fa6';

export default defineType({
  name: 'heroBlock',
  title: 'Hero Block',
  type: 'object',
  icon,
  description:
    'A block with a large image and text that typically appears at the top of a webpage.',
  fields: [
    ...createStockBlockFields(),
    createRichTextField('text', 'Text', ['h1', 'decorators', 'textColor']),
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
        title: 'Hero Block',
        subtitle: `#${slug.current}`,
        media: image,
      };
    },
  },
});
