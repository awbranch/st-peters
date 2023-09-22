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
          styles: [
            { title: 'Header', value: 'h2' },
            { title: 'Subheader', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
      hidden: ({ document }) => !document?.showNotification,
    }),
    defineField({
      name: 'newsletterSignupTitle',
      title: 'Newsletter Signup Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pastNewslettersMessage',
      title: 'Past Newsletters',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Small', value: 'h6' }],
          lists: [],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'newsletterConfig',
      title: 'Newsletter Configuration',
      type: 'text',
      rows: 10,
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'address',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'socialTitle',
      title: 'Social Title',
      type: 'string',
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
