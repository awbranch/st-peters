import { defineField, defineType, defineArrayMember } from 'sanity';
import { FaGear as icon } from 'react-icons/fa6';
import { createRichTextField } from '@/sanity/schema/utils';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon,
  groups: [
    {
      name: 'notification',
      title: 'Notifications',
    },
    {
      name: 'contact',
      title: 'Contact Us',
    },
    {
      name: 'newsletter',
      title: 'Newsletter',
    },
    {
      name: 'address',
      title: 'Address',
    },
    {
      name: 'social',
      title: 'Social Media',
    },
    {
      name: 'sitemap',
      title: 'SiteMap',
    },
  ],
  fields: [
    defineField({
      name: 'showNotification',
      title: 'Show Notification',
      type: 'boolean',
      group: 'notification',
    }),
    defineField({
      name: 'notificationMessage',
      title: 'Notification Message',
      type: 'array',
      of: [
        defineArrayMember({
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
        }),
      ],
      hidden: ({ document }) => !document?.showNotification,
      group: 'notification',
    }),
    defineField({
      name: 'contactUsTitle',
      title: 'Contact Us Title',
      type: 'string',
      group: 'contact',
      validation: (Rule) => Rule.required(),
    }),
    createRichTextField('contactUsText', 'Contact Us Text', 'contact'),
    defineField({
      name: 'newsletterSignupTitle',
      title: 'Newsletter Signup Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'newsletter',
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
      group: 'newsletter',
    }),
    defineField({
      name: 'newsletterConfig',
      title: 'Newsletter Configuration',
      type: 'text',
      rows: 10,
      validation: (Rule: any) => Rule.required(),
      group: 'newsletter',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'address',
      validation: (Rule) => Rule.required(),
      group: 'address',
    }),
    defineField({
      name: 'socialTitle',
      title: 'Social Title',
      type: 'string',
      group: 'social',
    }),
    defineField({
      name: 'social',
      title: 'Social Media',
      type: 'array',
      of: [{ type: 'social' }],
      group: 'social',
    }),
    defineField({
      name: 'siteMap',
      title: 'Site Map',
      type: 'array',
      of: [{ type: 'link' }],
      group: 'sitemap',
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
