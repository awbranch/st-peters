import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { media } from 'sanity-plugin-media';
import { simplerColorInput } from 'sanity-plugin-simpler-color-input';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

import schemas from '@/sanity/schema';
import { ComponentType } from 'react';

const singletons = {
  settings: '43e2d671-9f4d-4c59-9e2f-b9787c07cd88',
  homePage: '520e6364-71e8-41bb-82be-304e2bd545c9',
  aboutPage: '89aa297f-2aad-4555-a733-e4aaff0542ec',
  volunteerPage: '569ecf64-794d-4eee-a3c9-d1199a2f0baa',
  supportPage: '5a001dd1-f313-470a-9b82-490a0519de00',
  wishlistPage: 'a057b2ac-b49c-4f0b-89a5-b1aab445225f',
};

const orderable = ['program'];

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const isSingleton = (schemaName: string) => !!singletons[schemaName];
const isOrderable = (schemaName: string) => orderable.includes(schemaName);

const config = defineConfig({
  projectId: 't6t8tv0q',
  dataset: 'production',
  title: "St. Peter's Kitchen",
  apiVersion: '2023-08-28',

  // We can set to false since we're compiling statically
  // see https://www.sanity.io/help/js-client-cdn-configuration
  useCdn: false,

  basePath: '/admin',
  plugins: [
    deskTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items(
            schemas
              .filter((s) => s.type === 'document')
              .map((s) =>
                isSingleton(s.name)
                  ? S.listItem()
                      .title(s.title)
                      .id(s.name)
                      .icon(s['icon'])
                      .child(
                        S.document()
                          .schemaType(s.name)
                          .documentId(singletons[s.name]),
                      )
                  : isOrderable(s.name)
                  ? orderableDocumentListDeskItem({
                      type: s.name,
                      title: s.title,
                      icon: s.icon as ComponentType,
                      S,
                      context,
                    })
                  : S.documentTypeListItem(s.name).title(s.title),
              ),
          ),
    }),
    visionTool({
      defaultDataset: 'production',
      defaultApiVersion: 'v2021-10-21',
    }),
    media(),
    simplerColorInput({
      defaultColorFormat: 'rgba',
      defaultColorList: [
        { label: 'green', value: '#14532d' },
        { label: 'blue', value: '#1766b5' },
        { label: 'pink', value: '#db2777' },
        { label: 'black', value: '#111827' },
        { label: 'white', value: '#ffffff' },
        { label: 'gray', value: '#f3f4f6' },
      ],
    }),
  ],
  schema: {
    types: schemas,

    templates: (templates) =>
      templates.filter(({ schemaType }) => !isSingleton(schemaType)),
  },
  document: {
    actions: (input, context) =>
      isSingleton(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});

export default config;
