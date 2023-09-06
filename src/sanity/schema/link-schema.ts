import { defineField, defineType } from 'sanity';
import { FaLink as icon } from 'react-icons/fa';

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Link',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      url: 'url',
    },
    prepare(selection: { name: string; url: string }) {
      const { name, url } = selection;
      return {
        title: name,
        subtitle: url,
        icon: icon,
      };
    },
  },
});
