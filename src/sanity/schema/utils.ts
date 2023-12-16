import {
  defineField,
  defineArrayMember,
  BlockStyleDefinition,
  BlockListDefinition,
  BlockDecoratorDefinition,
} from 'sanity';

export function createImageField(name: string, title: string, group?: string) {
  return defineField({
    name,
    title,
    group,
    type: 'image',
    options: {
      hotspot: true,
    },
    fields: [
      defineField({
        name: 'alt',
        title: 'Alternate Text',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      }),
    ],
    validation: (Rule: any) => Rule.required(),
  });
}

export type CRTLevel =
  | 'all'
  | 'h1'
  | 'h2'
  | 'blockquote'
  | 'lists'
  | 'decorators'
  | 'links'
  | 'textColor';

export function createRichTextBlock(levels: Array<CRTLevel> = ['all']) {
  const styles: BlockStyleDefinition[] = [];
  const lists: BlockListDefinition[] = [];
  const decorators: BlockDecoratorDefinition[] = [];
  const annotations = [];

  if (levels.includes('all') || levels.includes('h1')) {
    styles.push({ title: 'Header', value: 'h1' });
  }

  if (levels.includes('all') || levels.includes('h2')) {
    styles.push({ title: 'Subheader', value: 'h2' });
  }

  if (levels.includes('all') || levels.includes('blockquote')) {
    styles.push({ title: 'Quote', value: 'blockquote' });
  }

  if (levels.includes('all') || levels.includes('lists')) {
    lists.push({ title: 'Bulleted List', value: 'bullet' });
    lists.push({ title: 'Numbered List', value: 'number' });
  }

  if (levels.includes('all') || levels.includes('decorators')) {
    decorators.push({ title: 'Bold', value: 'strong' });
    decorators.push({ title: 'Italic', value: 'em' });
  }

  if (levels.includes('all') || levels.includes('links')) {
    annotations.push({
      name: 'link',
      type: 'object',
      title: 'Link',
      fields: [
        {
          name: 'href',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              allowRelative: true,
              scheme: ['http', 'https', 'mailto', 'tel'],
            }),
        },
      ],
    });
  }

  if (levels.includes('all') || levels.includes('textColor')) {
    annotations.push({ type: 'textColor' });
  }

  return defineArrayMember({
    type: 'block',
    styles,
    lists,
    marks: {
      decorators: decorators,
      annotations: annotations,
    },
  });
}

export function createRichTextField(
  name: string,
  title: string,
  level?: Array<CRTLevel>,
  group?: string,
) {
  return defineField({
    name,
    title,
    group,
    type: 'array',
    of: [createRichTextBlock(level)],
    validation: (Rule: any) => Rule.required(),
  });
}

export function createBlocksArrayField(name: string, title: string) {
  return defineField({
    name,
    title,
    type: 'array',
    of: [
      defineArrayMember({ type: 'textBlock' }),
      defineArrayMember({ type: 'heroBlock' }),
      defineArrayMember({ type: 'lunchBlock' }),
      defineArrayMember({ type: 'highlightBlock' }),
      defineArrayMember({ type: 'impactBlock' }),
      defineArrayMember({ type: 'programsBlock' }),
      defineArrayMember({ type: 'instagramBlock' }),
    ],
  });
}

export function createStockBlockFields() {
  return [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used to link to this block in the page.',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'simplerColor',
      description: 'The background color for the block.',
      validation: (Rule: any) => Rule.required(),
    }),
  ];
}
