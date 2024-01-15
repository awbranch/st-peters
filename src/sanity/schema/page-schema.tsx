import { defineField, defineType } from 'sanity';
import { FaFile as icon } from 'react-icons/fa';
import sectionBlocks from '@/sanity/schema/section-blocks-schema';

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'path',
      title: 'Path',
      type: 'string',
      description:
        'The relative path to this page, it should be unique and start with a slash.',
      validation: (Rule: any) =>
        Rule.required().custom((path: string, context) => {
          if (!/^\/[a-z-]*(?:\/[a-z-]+)*$/.test(path)) {
            return 'Paths must start with a forward slash and contain one or more path segments containing lower case letters or dashes, separated by forward slashes.';
          }

          const { document, getClient } = context;
          const client = getClient({ apiVersion: '2023-12-27' });

          const id = document._id.replace(/^drafts\./, '');
          const params = {
            draft: `drafts.${id}`,
            published: id,
            path,
          };
          const query = `*[_type == "page" && !(_id in [$draft, $published]) && path == $path]`;
          return client.fetch(query, params).then((result: []) => {
            return result.length === 0 ? true : 'Paths must be unique';
          });
        }),
      readOnly: ({ document }) => document?.variant === 'collection',
    }),
    defineField({
      title: 'Max Width',
      name: 'maxWidth',
      type: 'string',
      initialValue: 'md',
      options: {
        list: [
          { title: 'Extra Small', value: 'xs' },
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule: any) => Rule.required(),
    }),

    defineField({
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: sectionBlocks.map((b) => ({
        type: b.name,
        title: b.title,
        icon: b.icon,
      })),
    }),
  ],
  preview: {
    select: {
      path: 'path',
    },
    prepare({ path }) {
      return {
        title: path,
        media: icon,
      };
    },
  },
  orderings: [
    {
      title: 'Path',
      name: 'path',
      by: [{ field: 'path', direction: 'asc' }],
    },
  ],
});
