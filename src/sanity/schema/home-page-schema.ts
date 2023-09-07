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
      name: 'community',
      title: 'Community',
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
      name: 'volunteer',
      title: 'Volunteer',
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
      name: 'displayProfile',
      title: 'Display Profile',
      type: 'boolean',
      group: 'community',
    }),
    defineField({
      name: 'profile',
      title: 'Profile',
      type: 'highlight',
      group: 'community',
      hidden: ({ document }) => !document?.displayProfile,
    }),
    defineField({
      name: 'impact',
      title: 'Impact',
      type: 'impactStatement',
      group: 'impact',
    }),
    defineField({
      name: 'programs',
      title: 'Programs',
      type: 'programGrid',
      group: 'programs',
    }),
    defineField({
      name: 'volunteer',
      title: 'Volunteer',
      type: 'highlight',
      group: 'volunteer',
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
