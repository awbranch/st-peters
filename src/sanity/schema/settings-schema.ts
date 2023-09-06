import { defineField, defineType } from 'sanity';
import { FaGear as icon } from 'react-icons/fa6';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  description: 'Long desc',
  icon,
  fields: [
    defineField({
      name: 'showNotification',
      title: 'Show Notification',
      type: 'boolean',
    }),
    defineField({
      name: 'notificationMessage',
      title: 'Notification Message',
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
      hidden: ({ document }) => !document?.showNotification,
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'address',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'social',
      title: 'Social Media',
      type: 'array',
      of: [{ type: 'social' }],
    }),
    defineField({
      name: 'siteMap',
      title: 'Site Map',
      type: 'array',
      of: [{ type: 'link' }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Global Settings',
      };
    },
  },
});
