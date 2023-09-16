import { defineField, defineType } from 'sanity';
import { FaShare as icon } from 'react-icons/fa';

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'object',
  fields: [
    defineField({
      name: 'service',
      title: 'Service',
      type: 'string',
      options: {
        list: [
          { title: 'Facebook', value: 'facebook' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'Twitter', value: 'twitter' },
          { title: 'LinkedIn', value: 'linkedin' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Link',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      service: 'service',
      url: 'url',
    },
    prepare(selection: { service: string; url: string }) {
      const { service, url } = selection;
      return {
        title: service,
        subtitle: url,
        icon: icon,
      };
    },
  },
});
