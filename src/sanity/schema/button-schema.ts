import { defineField, defineType } from 'sanity';
import { FaRegHandPointer as icon } from 'react-icons/fa';

export default defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({
      name: 'color',
      title: 'Color',
      type: 'simplerColor',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule: any) => Rule.required(),
    }),

    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      label: 'label',
      variant: 'variant',
    },
    prepare({ label, variant }) {
      return {
        title: label,
        subtitle: variant,
        icon: icon,
      };
    },
  },
});
