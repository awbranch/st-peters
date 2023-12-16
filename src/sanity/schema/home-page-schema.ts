import { defineType } from 'sanity';
import { FaHome as icon } from 'react-icons/fa';
import { createBlocksArrayField } from '@/sanity/schema/utils';

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon,
  fields: [createBlocksArrayField('blocks', 'Blocks')],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      };
    },
  },
});
