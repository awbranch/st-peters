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
  | 'decorators';

export function createRichTextBlock(levels: Array<CRTLevel> = ['all']) {
  const styles: BlockStyleDefinition[] = [];
  const lists: BlockListDefinition[] = [];
  const decorators: BlockDecoratorDefinition[] = [];

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

  return defineArrayMember({
    type: 'block',
    styles,
    lists,
    marks: {
      decorators,
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
