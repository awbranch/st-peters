import { defineType } from 'sanity';
import { createStockBlockFields } from '@/sanity/schema/utils';
import { FaCertificate as icon } from 'react-icons/fa6';

export default defineType({
  name: 'programsBlock',
  title: 'Programs Block',
  type: 'object',
  icon,
  description: 'A block that displays a grid of programs.',
  fields: [...createStockBlockFields()],
  preview: {
    select: { id: 'id' },
    prepare({ id }) {
      return {
        title: 'Programs Block',
        subtitle: id ? `#${id.current}` : '',
        media: icon,
      };
    },
  },
});
