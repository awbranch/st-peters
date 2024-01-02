import { defineField, defineType } from 'sanity';
import { FaFile as icon } from 'react-icons/fa';

import {
  createBlocksArrayField,
  createRichTextBlock,
} from '@/sanity/schema/utils';

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      initialValue: 'generic',
      options: {
        list: [
          { title: 'Generic', value: 'generic' },
          { title: 'Collection', value: 'collection' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      hidden: false,
      validation: (Rule: any) => Rule.required(),
    }),

    // defineField({
    //   title: 'Important!',
    //   description: 'a custom Message...',
    //   name: 'myCustomNote',
    //   type: 'note',
    //   hidden: true,
    //   options: {
    //     icon: () => <Warning size={20} />,
    //     tone: 'caution',
    //   },
    // }),

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
      ...createBlocksArrayField('blocks', 'Blocks'),
      hidden: ({ document }) => document?.variant === 'collection',
    }),

    defineField({
      name: 'text',
      title: 'Text',
      description: 'Optional text that appears above the collection.',
      type: 'array',
      of: [
        createRichTextBlock([
          'h1',
          'decorators',
          'links',
          'lists',
          'textColor',
        ]),
      ],
      hidden: ({ document }) => document?.variant !== 'collection',
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
