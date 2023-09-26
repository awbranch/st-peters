import { defineField, defineArrayMember } from 'sanity';

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

export type CRTLevel = 'all' | 'no-headers' | 'no-lists' | 'none';

export function createRichTextBlock(level: CRTLevel) {
  if (level === 'all') {
    return defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Header', value: 'h2' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bulleted List', value: 'bullet' },
        { title: 'Numbered List', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong' },
          { title: 'Italic', value: 'em' },
        ],
      },
    });
  } else if (level === 'no-headers') {
    return defineArrayMember({
      type: 'block',
      styles: [],
      lists: [
        { title: 'Bulleted List', value: 'bullet' },
        { title: 'Numbered List', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong' },
          { title: 'Italic', value: 'em' },
        ],
      },
    });
  } else if (level === 'no-lists') {
    return defineArrayMember({
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong' },
          { title: 'Italic', value: 'em' },
        ],
      },
    });
  } else {
    return defineArrayMember({
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        decorators: [],
      },
    });
  }
}

export function createRichTextField(
  name: string,
  title: string,
  level?: CRTLevel,
  group?: string,
) {
  return defineField({
    name,
    title,
    group,
    type: 'array',
    of: [createRichTextBlock(level ?? 'all')],
    validation: (Rule: any) => Rule.required(),
  });
}
