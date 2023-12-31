import { defineField, defineType } from 'sanity';
import { createStockBlockFields } from '@/sanity/schema/utils';
import { FaRegWindowMaximize as icon } from 'react-icons/fa';

const formTypes = [
  { title: 'Contact Form', value: 'contact' },
  { title: 'Volunteer Form', value: 'volunteer' },
  { title: 'Donate Form', value: 'donate' },
];

export default defineType({
  name: 'formBlock',
  title: 'Form Block',
  type: 'object',
  icon,
  description: 'A block that displays a form.',
  fields: [
    ...createStockBlockFields(),

    defineField({
      name: 'formType',
      title: 'Form Type',
      type: 'string',
      options: {
        list: formTypes,
        layout: 'dropdown',
      },
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: { type: 'formType', id: 'id' },
    prepare({ type, id }) {
      let title =
        formTypes.find((t) => t.value === type)?.title || 'Form Block';

      return {
        title: title,
        subtitle: id ? `#${id.current}` : '',
        media: icon,
      };
    },
  },
});
