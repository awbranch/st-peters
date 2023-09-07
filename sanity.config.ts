import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { media } from 'sanity-plugin-media';

import schemas from '@/sanity/schema';

const singletons = {
  settings: '43e2d671-9f4d-4c59-9e2f-b9787c07cd88',
  homePage: '520e6364-71e8-41bb-82be-304e2bd545c9',
};

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const isSingleton = (schemaName: string) => !!singletons[schemaName];

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
      structure: (S) =>
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
                  : S.documentTypeListItem(s.name).title(s.title),
              ),
          ),
    }),
    visionTool({
      defaultDataset: 'production',
      defaultApiVersion: 'v2021-10-21',
    }),
    media(),
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
