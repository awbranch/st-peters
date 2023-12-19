import { defineType } from 'sanity';
import { FaHeart as icon } from 'react-icons/fa';
import { createBlocksArrayField } from '@/sanity/schema/utils';

export default defineType({
  name: 'supportPage',
  title: 'Support Page',
  type: 'document',
  icon,
  fields: [createBlocksArrayField('blocks', 'Blocks')],
  preview: {
    prepare() {
      return {
        title: 'Support Us Page',
      };
    },
  },
});
