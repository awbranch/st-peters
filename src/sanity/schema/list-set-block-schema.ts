import { defineArrayMember, defineField, defineType } from 'sanity';
import { PiTextColumnsBold as icon } from 'react-icons/pi';

export default defineType({
  name: 'listSetBlock',
  title: 'List Set Block',
  type: 'object',
  icon,
  description: 'A set of one or more named lists, good for wish lists.',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'lists',
      title: 'Lists',
      type: 'array',
      of: [defineArrayMember({ type: 'listSetList' })],
    }),
  ],
});
