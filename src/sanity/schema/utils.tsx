import {
  BlockDecoratorDefinition,
  BlockListDefinition,
  BlockStyleDefinition,
  defineArrayMember,
  defineField,
} from 'sanity';
import { PiCircleDashed } from 'react-icons/pi';

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
  | 'large'
  | 'small'
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
    styles.push({ title: 'Heading 1', value: 'h1' });
  }

  if (levels.includes('all') || levels.includes('h2')) {
    styles.push({ title: 'Heading 2', value: 'h2' });
  }

  if (levels.includes('all') || levels.includes('large')) {
    styles.push({
      title: 'Large',
      value: 'large',
      component: ({ children }) => (
        <span style={{ fontSize: '1.2rem' }}>{children}</span>
      ),
    });
  }

  if (levels.includes('all') || levels.includes('small')) {
    styles.push({
      title: 'Small',
      value: 'small',
      component: ({ children }) => (
        <span style={{ fontSize: '0.8rem' }}>{children}</span>
      ),
    });
  }

  if (levels.includes('all') || levels.includes('blockquote')) {
    styles.push({ title: 'Quote', value: 'blockquote' });
  }

  if (levels.includes('all') || levels.includes('lists')) {
    lists.push(
      ...[
        { title: 'Bulleted List', value: 'bullet' },
        { title: 'Numbered List', value: 'number' },
      ],
    );
  }

  if (levels.includes('all') || levels.includes('decorators')) {
    decorators.push(
      ...[
        { title: 'Bold', value: 'strong' },
        { title: 'Italic', value: 'em' },
        {
          title: 'Lighten',
          value: 'lighten',
          component: ({ children }) => (
            <span style={{ opacity: 0.5 }}>{children}</span>
          ),
          icon: PiCircleDashed,
        },
      ],
    );
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

export function createBlocksArrayField(name: string, title: string) {
  return defineField({
    name,
    title,
    type: 'array',
    of: [
      defineArrayMember({ type: 'textBlock' }),
      defineArrayMember({ type: 'heroBlock' }),
      defineArrayMember({ type: 'highlightBlock' }),
      defineArrayMember({ type: 'buttonTileGridBlock' }),
      defineArrayMember({ type: 'imageTileGridBlock' }),
      defineArrayMember({ type: 'donationRequestBlock' }),
      defineArrayMember({ type: 'teamGridBlock' }),
      defineArrayMember({ type: 'teamListBlock' }),
      defineArrayMember({ type: 'googleMapBlock' }),
      defineArrayMember({ type: 'impactBlock' }),
      defineArrayMember({ type: 'lunchBlock' }),
      defineArrayMember({ type: 'instagramBlock' }),
      defineArrayMember({ type: 'jobsBlock' }),
      defineArrayMember({ type: 'docsBlock' }),
      defineArrayMember({ type: 'faqsBlock' }),
      defineArrayMember({ type: 'formBlock' }),
    ],
  });
}

export function createStockBlockFields() {
  return [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'slug',
      description: 'Optional id to link to this block in the section.',
    }),
  ];
}
