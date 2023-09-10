import { defineField, defineType } from 'sanity';
import { FaHome as icon } from 'react-icons/fa';

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon,
  groups: [
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'lunch',
      title: 'Lunch',
    },
    {
      name: 'highlights',
      title: 'Highlights',
    },
    {
      name: 'impact',
      title: 'Impact',
    },
    {
      name: 'programs',
      title: 'Programs',
    },
    {
      name: 'instagram',
      title: 'Instagram',
    },
  ],
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero',
      group: 'hero',
    }),
    defineField({
      name: 'lunchPlan',
      title: 'Lunch Plan',
      type: 'lunchPlan',
      group: 'lunch',
    }),
    defineField({
      name: 'displayHighlight1',
      title: 'Display Highlight One',
      type: 'boolean',
      group: 'highlights',
    }),
    defineField({
      name: 'highlight1',
      title: 'Highlight One',
      type: 'highlight',
      group: 'highlights',
      hidden: ({ document }) => !document?.displayHighlight1,
    }),
    defineField({
      name: 'impact',
      title: 'Impact',
      type: 'impactStatement',
      group: 'impact',
    }),
    defineField({
      name: 'programGrid',
      title: 'Program Grid',
      type: 'programGrid',
      group: 'programs',
    }),
    defineField({
      name: 'displayHighlight2',
      title: 'Display Highlight Two',
      type: 'boolean',
      group: 'highlights',
    }),
    defineField({
      name: 'highlight2',
      title: 'Highlight Two',
      type: 'highlight',
      group: 'highlights',
      hidden: ({ document }) => !document?.displayHighlight2,
    }),
    defineField({
      name: 'displayInstagram',
      title: 'Display Instagram',
      type: 'boolean',
      group: 'instagram',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'instagramFeed',
      group: 'instagram',
      hidden: ({ document }) => !document?.displayInstagram,
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
