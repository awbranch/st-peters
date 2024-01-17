import { defineArrayMember, defineField, defineType } from 'sanity';
import { MdOutlineChecklistRtl as icon } from 'react-icons/md';
import { createRichTextBlock } from '@/sanity/schema/utils';

export default defineType({
  name: 'ctaListBlock',
  title: 'Call to Action List Block',
  type: 'object',
  icon,
  description: 'A list of call to actions.',
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
      name: 'ctas',
      title: 'Call to Actions',
      type: 'array',
      of: [defineArrayMember({ type: 'cta' })],
    }),
  ],
});
