import { defineField, defineType } from 'sanity';
import { FaCircleInfo as icon } from 'react-icons/fa6';

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon,
  groups: [
    {
      name: 'history',
      title: 'History',
    },
    {
      name: 'map',
      title: 'Map',
    },
    {
      name: 'team',
      title: 'Team',
    },
    {
      name: 'jobs',
      title: 'Jobs',
    },
    {
      name: 'documents',
      title: 'Documents',
    },
  ],
  fields: [
    defineField({
      name: 'history',
      title: 'History',
      type: 'history',
      group: 'history',
    }),
    defineField({
      name: 'map',
      title: 'Map',
      type: 'map',
      group: 'map',
    }),
    defineField({
      name: 'team',
      title: 'Team',
      type: 'team',
      group: 'team',
    }),
    defineField({
      name: 'jobsBoard',
      title: 'Jobs Board',
      type: 'jobsBoard',
      group: 'jobs',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About Page',
      };
    },
  },
});
