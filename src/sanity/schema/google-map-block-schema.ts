import { defineField, defineType } from 'sanity';
import {
  createRichTextBlock,
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
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        createRichTextBlock([
          'h1',
          'decorators',
          'links',
          'lists',
          'textColor',
        ]),
      ],
      validation: (Rule: any) => Rule.required(),
    }),
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
