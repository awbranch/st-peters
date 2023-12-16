import { defineType } from 'sanity';
import { FaHand as icon } from 'react-icons/fa6';
import { createBlocksArrayField } from '@/sanity/schema/utils';

export default defineType({
  name: 'volunteerPage',
  title: 'Volunteer Page',
  type: 'document',
  icon,
  fields: [createBlocksArrayField('blocks', 'Blocks')],
  preview: {
    prepare() {
      return {
        title: 'Volunteer Page',
      };
    },
  },
});
