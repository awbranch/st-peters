import { defineField, defineType } from 'sanity';
import {
  createRichTextField,
  createStockBlockFields,
} from '@/sanity/schema/utils';
import { FaMapMarkerAlt as icon } from 'react-icons/fa';

export default defineType({
  name: 'googleMapBlock',
  title: 'Google Map Block',
  type: 'object',
  icon,
  description: 'A block that contains an embedded google map.',
  fields: [
    ...createStockBlockFields(),
    createRichTextField('text', 'Text', ['h1', 'decorators', 'textColor']),
    defineField({
      name: 'embedURL',
      title: 'Google Maps Embed URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: { slug: 'slug' },
    prepare({ slug }) {
      return {
        title: 'Google Map Block',
        subtitle: `#${slug?.current}`,
        media: icon,
      };
    },
  },
});
