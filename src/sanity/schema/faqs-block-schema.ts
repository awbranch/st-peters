import { defineField, defineType } from 'sanity';
import { createStockBlockFields } from '@/sanity/schema/utils';
import { FaQuestionCircle as icon } from 'react-icons/fa';

export default defineType({
  name: 'faqsBlock',
  title: 'FAQs Block',
  type: 'object',
  icon,
  description: 'List of frequently asked questions',
  fields: [
    ...createStockBlockFields(),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{ type: 'faq' }],
    }),
  ],
  preview: {
    select: { id: 'id' },
    prepare({ id }) {
      return {
        title: 'FAQs Block',
        subtitle: id ? `#${id.current}` : '',
        media: icon,
      };
    },
  },
});
