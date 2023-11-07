import { defineField, defineType } from 'sanity';
import { FaPerson as icon } from 'react-icons/fa6';
import { createImageField } from '@/sanity/schema/utils';

export default defineType({
  name: 'staffMember',
  title: 'Staff Members',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    }),
    createImageField('image', 'Image'),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description:
        'Only add the staff member\'s email if you want to show the "contact" button under their bio.',
    }),
  ],
  orderings: [
    {
      title: 'Last Name',
      name: 'lastNameAsc',
      by: [
        { field: 'lastName', direction: 'asc' },
        { field: 'firstName', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      title: 'title',
      image: 'image',
    },
    prepare({ firstName, lastName, title, image }) {
      return {
        title: `${firstName} ${lastName}`,
        subtitle: title,
        media: image,
      };
    },
  },
});
