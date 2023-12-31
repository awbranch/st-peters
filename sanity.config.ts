import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { media } from 'sanity-plugin-media';
import { simplerColorInput } from 'sanity-plugin-simpler-color-input';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import schemas from '@/sanity/schema';
import { ComponentType } from 'react';
import { noteField } from 'sanity-plugin-note-field';
import { textColorList } from '@/utils/globals';

const singletons = {
  settings: '43e2d671-9f4d-4c59-9e2f-b9787c07cd88',
  header: 'da00c098-883a-4597-bf69-b06f7443dd3c',
  footer: 'bb015db2-386d-470e-b35f-c1d994640dc3',
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
      defaultColorList: textColorList,
    }),
    noteField(),
  ],
  schema: {
    types: schemas,

    templates: (templates) =>
      templates.filter(({ schemaType }) => !isSingleton(schemaType)),
  },
  document: {
    actions: (input, context) => {
      if (isSingleton(context.schemaType)) {
        return input.filter(
          ({ action }) => action && singletonActions.has(action),
        );
      } else {
        return input;
      }
    },
  },
});

export default config;
