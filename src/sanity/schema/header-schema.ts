import { defineField, defineType } from 'sanity';
import { createRichTextBlock } from '@/sanity/schema/utils';
import { FaArrowsUpToLine as icon } from 'react-icons/fa6';

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  icon,
  groups: [
    {
      name: 'notification',
      title: 'Notification Bar',
    },
    {
      name: 'navigation',
      title: 'Navigation Bar',
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
      of: [createRichTextBlock(['decorators'])],
      hidden: ({ document }) => !document?.showNotification,
      group: 'notification',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
      group: 'navigation',
    }),
    defineField({
      name: 'wideLogo',
      title: 'wideLogo',
      type: 'image',
      group: 'navigation',
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [{ type: 'menuItem' }],
      group: 'navigation',
    }),
    defineField({
      name: 'actionButtons',
      title: 'Action Buttons',
      type: 'array',
      of: [{ type: 'button' }],
      group: 'navigation',
      validation: (Rule: any) => Rule.max(1),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Header',
      };
    },
  },
});
