import { defineField } from 'sanity';

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

export function createRichTextField(
  name: string,
  title: string,
  group?: string,
) {
  return defineField({
    name,
    title,
    group,
    type: 'array',
    of: [
      {
        type: 'block',
        styles: [
          { title: 'Header', value: 'h2' },
          { title: 'Subheader', value: 'h3' },
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
      },
    ],
    validation: (Rule: any) => Rule.required(),
  });
}
