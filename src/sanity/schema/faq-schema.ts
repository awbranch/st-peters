import { defineField, defineType } from 'sanity';
import { FaQuestionCircle as icon } from 'react-icons/fa';
import { createRichTextField } from '@/sanity/schema/utils';

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    createRichTextField('answer', 'Answer', ['lists', 'decorators']),
  ],
});
