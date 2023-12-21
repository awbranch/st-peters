import { defineType } from 'sanity';
import { FaStar as icon } from 'react-icons/fa';
import { createBlocksArrayField } from '@/sanity/schema/utils';

export default defineType({
  name: 'wishlistPage',
  title: 'Wish List Page',
  type: 'document',
  icon,
  groups: [],
  fields: [createBlocksArrayField('blocks', 'Blocks')],
  preview: {
    prepare() {
      return {
        title: 'Wish List Page',
      };
    },
  },
});
