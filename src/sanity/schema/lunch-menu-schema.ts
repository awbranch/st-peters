import { defineField, defineType } from 'sanity';
import { FaClipboardList as icon } from 'react-icons/fa';

const lunchMenu = defineType({
  name: 'lunchMenu',
  title: 'Lunch Menus',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MM/DD/YYYY',
      },
    }),
    defineField({
      name: 'menu',
      title: 'Menu',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      date: 'date',
    },
    prepare({ date }) {
      const parts = date.split('-');
      return {
        title: `${parts[1]}/${parts[2]}/${parts[0]}`,
      };
    },
  },
  orderings: [
    {
      title: 'Date',
      name: 'date',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
});

export default lunchMenu;
