import { defineType } from 'sanity';
import { FaCircleInfo as icon } from 'react-icons/fa6';
import { createBlocksArrayField } from '@/sanity/schema/utils';

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon,
  fields: [createBlocksArrayField('blocks', 'Blocks')],
  preview: {
    prepare() {
      return {
        title: 'About Page',
      };
    },
  },
});
