import { defineField, defineType } from 'sanity';
import {
  createRichTextField,
  createStockBlockFields,
} from '@/sanity/schema/utils';
import { FaQuestionCircle as icon } from 'react-icons/fa';

export default defineType({
  name: 'faqsBlock',
  title: 'FAQs Block',
  type: 'object',
  icon,
  description: 'List of frequently asked questions',
  fields: [
    ...createStockBlockFields(),
    createRichTextField('text', 'Text', [
      'h1',
      'decorators',
      'links',
      'lists',
      'textColor',
    ]),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{ type: 'faq' }],
    }),
  ],
  preview: {
    select: { slug: 'slug' },
    prepare({ slug }) {
      return {
        title: 'FAQs Block',
        subtitle: `#${slug?.current}`,
        media: icon,
      };
    },
  },
});
