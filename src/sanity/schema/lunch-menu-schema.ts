import { defineField, defineType } from 'sanity';
import { FaClipboardList as icon } from 'react-icons/fa';

const lunchMenu = defineType({
  name: 'lunchMenu',
  title: 'Lunch Menu',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'day',
      title: 'Day',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          name: 'item',
          title: 'Item',
          type: 'string',
        },
      ],
    }),
  ],
});

export default lunchMenu;
