import blocks from '@/sanity/schema/blocks-schema';

import { defineField, defineType } from 'sanity';
import { userColorList } from '@/utils/globals';

const sectionBlocks = blocks.map((b) => createSectionBlock(b));

function getSectionBlockFields() {
  return [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'slug',
      description: 'Id of this block in the page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'simplerColor',
      options: {
        colorList: userColorList,
      },
    }),
  ];
}

function createSectionBlock(blockSchema: any) {
  return defineType({
    name: `${blockSchema.name}Section`,
    title: blockSchema.title,
    type: 'object',
    icon: blockSchema.icon,
    fields: [
      ...getSectionBlockFields(),

      defineField({
        name: 'block',
        title: 'Block',
        type: blockSchema.name,
        validation: (Rule) => Rule.required(),
      }),
    ],
    preview: {
      select: { id: 'id', block: 'block' },
      prepare({ id, block }) {
        return {
          title: `#${id?.current}`,
          subtitle: `${blockSchema.title} ${
            block?.title ? ': ' + block?.title : ''
          }`,
          icon: blockSchema.icon,
        };
      },
    },
  });
}

export default sectionBlocks;
