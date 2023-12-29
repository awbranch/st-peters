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
      name: 'menu',
      title: 'Main Menu',
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
  ],
  preview: {
    prepare() {
      return {
        title: 'Header',
      };
    },
  },
});
