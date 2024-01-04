import { defineField, defineType } from 'sanity';
import { FaSquare as icon } from 'react-icons/fa6';
import { createBlocksArrayField } from '@/sanity/schema/utils';

export default defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  icon,
  description:
    'A large section of a webpage that can have a background color and unique slug.',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'slug',
      description: 'A unique id used to link to this section on the page.',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'simplerColor',
      description:
        'The background color for the section, if not set it defaults to white.',
    }),
    defineField({
      name: 'narrow',
      title: 'Narrow Width',
      type: 'boolean',
      initialValue: false,
      description: 'Looks best for sections containing forms or mostly text',
    }),

    createBlocksArrayField('blocks', 'Blocks'),
  ],
  preview: {
    select: {
      id: 'id',
      background: 'background',
      narrow: 'narrow',
      blocks: 'blocks',
    },
    prepare({ id, background, narrow, blocks }) {
      let subtitle = [];
      if (blocks) {
        subtitle.push(
          `${blocks.length} block${blocks.length === 1 ? '' : 's'}`,
        );
      }
      if (background?.label) {
        subtitle.push(background?.label);
      }
      if (narrow) {
        subtitle.push('narrow');
      }
      return {
        title: id ? `#${id.current}` : '',
        subtitle: subtitle.join(' - '),
        media: icon,
      };
    },
  },
});
