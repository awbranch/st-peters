const lunchMenu = {
  name: 'lunchMenu',
  title: 'Lunch Menu',
  type: 'document',
  fields: [
    {
      name: 'day',
      title: 'Day',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          name: 'item',
          title: 'Item',
          type: 'string',
        },
      ],
    },
  ],
};

export default lunchMenu;
