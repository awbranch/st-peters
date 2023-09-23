import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaCircleInfo as icon } from 'react-icons/fa6';
import { createImageField, createRichTextField } from '@/sanity/schema/utils';

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
      name: 'docs',
      title: 'Documents',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'history',
    }),
    createImageField('image', 'Image', 'history'),
    createRichTextField('text', 'Text', 'history'),
    defineField({
      name: 'mapTitle',
      title: 'Google Map Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'map',
    }),
    createRichTextField('mapText', 'Google Map Text', 'map'),
    defineField({
      name: 'mapEmbedURL',
      title: 'Google Maps Embed URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
      group: 'map',
    }),

    defineField({
      name: 'teamTitle',
      title: 'Team Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'team',
    }),
    createRichTextField('teamText', 'Team Text', 'team'),

    createImageField('staffPhoto', 'Staff Group Photo', 'team'),
    defineField({
      name: 'staffLabel',
      title: 'Staff Label',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'team',
    }),
    createImageField('boardPhoto', 'Board Group Photo', 'team'),
    defineField({
      name: 'boardLabel',
      title: 'Board Label',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'team',
    }),

    defineField({
      name: 'jobsTitle',
      title: 'Jobs Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'jobs',
    }),
    createRichTextField('jobsText', 'Jobs Text', 'jobs'),
    defineField({
      name: 'jobPostings',
      title: 'Jop Postings',
      type: 'array',
      of: [defineArrayMember({ type: 'jobPosting' })],
      group: 'jobs',
    }),
    createRichTextField('jobsEooText', 'Jobs EEO Text', 'jobs'),
    createRichTextField('noJobsText', 'No Job Openings Text', 'jobs'),

    defineField({
      name: 'docsTitle',
      title: 'Documents Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'docs',
    }),
    createRichTextField('docsText', 'Documents Text', 'docs'),
    defineField({
      name: 'docs',
      title: 'Documents',
      type: 'array',
      of: [defineArrayMember({ type: 'doc' })],
      group: 'docs',
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
