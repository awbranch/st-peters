const hero = {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          { title: 'White', value: 'white' },
          { title: 'Green', value: 'green' },
          { title: 'Blue', value: 'blue' },
          { title: 'Pink', value: 'pink' },
          { title: 'Black', value: 'black' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Header 1', value: 'h1' },
            { title: 'Header 2', value: 'h2' },
          ],
          lists: [],
          marks: {
            decorators: [],
          },
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Best practice is to keep the max width <= 1280px',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Alternate Image Text',
      description:
        'An image description is important for accessibility and page ranking.',
      type: 'string',
    },
  ],
};

export default hero;
