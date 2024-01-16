import { defineField, defineType } from 'sanity';
import { FaQuestionCircle as icon } from 'react-icons/fa';
import { createRichTextBlock } from '@/sanity/schema/utils';

export default defineType({
  name: 'faqsBlock',
  title: 'FAQs Block',
  type: 'object',
  icon,
  description: 'List of frequently asked questions',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [createRichTextBlock(['decorators', 'links'])],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{ type: 'faq' }],
    }),
  ],
});
