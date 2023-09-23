import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaHome as icon } from 'react-icons/fa';
import { createRichTextField } from '@/sanity/schema/utils';

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
      name: 'lunchTitle',
      title: 'Lunch Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'lunch',
    }),
    createRichTextField('lunchText', 'Lunch Text', 'lunch'),

    defineField({
      name: 'lunchTbd',
      title: 'Lunch TBD',
      type: 'string',
      description:
        'Message to display when a days menu has not been decided yet.',
      validation: (Rule: any) => Rule.required(),
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
      name: 'impactTitle',
      title: 'Impact Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'impact',
    }),
    createRichTextField('impactText', 'Impact Text', 'impact'),

    defineField({
      name: 'impacts',
      title: 'Impacts',
      type: 'array',
      of: [defineArrayMember({ type: 'impact' })],
      group: 'impact',
    }),

    defineField({
      name: 'programsTitle',
      title: 'Programs Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'programs',
    }),
    createRichTextField('programsText', 'Programs Text', 'programs'),

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
