import { defineField, defineType } from 'sanity';
import { FaHome as icon } from 'react-icons/fa';

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    }),
    defineField({
      name: 'lunchPlan',
      title: 'Lunch Plan',
      type: 'lunchPlan',
    }),
    defineField({
      name: 'impact',
      title: 'Impact',
      type: 'impactStatement',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      };
    },
  },
});
