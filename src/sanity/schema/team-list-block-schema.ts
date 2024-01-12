import { defineField, defineType } from 'sanity';
import {
  createRichTextBlock,
  createStockBlockFields,
} from '@/sanity/schema/utils';
import { FaUsers as icon } from 'react-icons/fa';

export default defineType({
  name: 'teamListBlock',
  title: 'Team List Block',
  type: 'object',
  icon,
  description: 'A list of team members',
  fields: [
    ...createStockBlockFields(),
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
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{ type: 'teamListMember' }],
    }),
  ],
  preview: {
    select: { id: 'id', title: 'title' },
    prepare({ id, title }) {
      return {
        title: title,
        subtitle: id ? `#${id.current}` : '',
        media: icon,
      };
    },
  },
});
