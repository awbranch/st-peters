import { defineField, defineType } from 'sanity';
import { FaHand as icon } from 'react-icons/fa6';
import { createRichTextField } from '@/sanity/schema/utils';

export default defineType({
  name: 'volunteerPage',
  title: 'Volunteer Page',
  type: 'document',
  icon,
  groups: [
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'faqs',
      title: 'FAQs',
    },
    {
      name: 'form',
      title: 'Signup Form',
    },
  ],
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'heroBlock',
      group: 'hero',
    }),
    createRichTextField('details', 'Details', ['lists', 'decorators'], 'hero'),

    defineField({
      name: 'faqsTitle',
      title: 'FAQs Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'faqs',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{ type: 'faq' }],
      group: 'faqs',
    }),
    defineField({
      name: 'formTitle',
      title: 'Signup Form Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'form',
    }),
    createRichTextField('formText', 'Form Text', ['all'], 'form'),
  ],
  preview: {
    prepare() {
      return {
        title: 'Volunteer Page',
      };
    },
  },
});
