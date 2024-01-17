import { defineField, defineType } from 'sanity';
import { FaMapMarkerAlt as icon } from 'react-icons/fa';

export default defineType({
  name: 'googleMapBlock',
  title: 'Google Map Block',
  type: 'object',
  icon,
  description: 'A block that contains an embedded google map.',
  fields: [
    defineField({
      name: 'embedURL',
      title: 'Google Maps Embed URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});
