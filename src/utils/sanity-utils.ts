import { createClient, groq } from 'next-sanity';
import { File, Image } from 'sanity';
import imageUrlBuilder from '@sanity/image-url';
import { LunchMenu } from '@/types/LunchMenu';
import { Page } from '@/types/Page';
import { NewsStory } from '@/types/NewsStory';
import { Footer } from '@/types/Footer';
import { Header } from '@/types/Header';
import { ComponentSet } from '@/types/ComponentSet';

const client = createClient({
  projectId: 't6t8tv0q',
  dataset: 'production',
  apiVersion: '2023-08-28',
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(image: Image) {
  return builder.image(image);
}

export function urlForFile(file: File) {
  const { id, format } = fileAttributes(file);
  const config = client.config();
  return `https://cdn.sanity.io/files/${config.projectId}/${config.dataset}/${id}.${format}`;
}

export function fileAttributes(file: File) {
  const ref = file?.asset?._ref;
  if (!ref) {
    throw new Error(`File should have asset attribute`);
  }
  const [, id, format] = ref.split('-');

  if (!id || !format) {
    throw new Error(`Malformed asset _ref '${ref}'`);
  }

  return { id, format: format };
}

export function imageAttributes(image: Image) {
  const ref = image?.asset?._ref;
  if (!ref) {
    throw new Error(`Image should have asset attribute`);
  }
  const [, id, dimensionString, format] = ref.split('-');

  if (!id || !dimensionString || !format) {
    throw new Error(`Malformed asset _ref '${ref}'`);
  }

  const [imgWidthStr, imgHeightStr] = dimensionString.split('x');

  const width = +imgWidthStr;
  const height = +imgHeightStr;

  const isValidAssetId = isFinite(width) && isFinite(height);
  if (!isValidAssetId) {
    throw new Error(`Malformed asset _ref '${ref}'`);
  }

  return { id, width, height, format };
}

export async function getLunchMenus() {
  return client.fetch<LunchMenu[]>(
    groq`*[_type == "lunchMenu" && dateTime(date + 'T00:00:00Z') > dateTime(now()) - 60*60*24*1]{date, menu} | order(date asc)[0..2]`,
    {},
    fetchOptions(),
  );
}

export async function getPages() {
  let pages = await client.fetch<Page[]>(
    groq`*[_type == "page"]`,
    {},
    fetchOptions(),
  );
  pages.forEach((p) => addPalette(p));
  return pages;
}

export async function getPageByPath(path: string | string[]) {
  const pagePath = Array.isArray(path) ? '/' + path.join('/') : path;

  let page = await client.fetch<Page>(
    groq`*[_type == "page" && path == $path][0]`,
    {
      path: pagePath,
    },
    fetchOptions(),
  );
  addPalette(page);
  return page;
}

/**
 * It's helpful for components to know the palette of the blocks they are contained within
 * @param page
 */
function addPalette(page: Page) {
  if (page) {
    page?.blocks?.forEach((b) => {
      b?.components?.forEach((c) => {
        c.palette = b.palette;
      });
    });
  }
}

export async function getNewsStories() {
  return client.fetch<NewsStory[]>(
    groq`*[_type == "newsStory"]{..., categories[]->{label, value}} | order(date desc)`,
    {},
    fetchOptions(),
  );
}

export async function getHeader() {
  return client.fetch<Header>(
    groq`*[_type == "header"][0]`,
    {},
    fetchOptions(),
  );
}

export async function getFooter() {
  return client.fetch<Footer>(
    groq`*[_type == "footer"][0]`,
    {},
    fetchOptions(),
  );
}

export async function getComponentSet(id: string) {
  return client.fetch<ComponentSet>(
    groq`*[_id == $id][0]`,
    {
      id,
    },
    fetchOptions(),
  );
}

function fetchOptions() {
  if (process.env.NODE_ENV === 'development') {
    return { next: { revalidate: 5 } };
  } else {
    return {};
  }
}

export function storyMultiplier(stories: NewsStory[], count: number) {
  const multi: NewsStory[] = [];

  for (let i = 0; i < count; i++) {
    stories.forEach((s) =>
      multi.push({
        ...s,
        slug: {
          ...s.slug,
          current: i === 0 ? s.slug.current : s.slug.current + `-copy-${i}`,
        },
      }),
    );
  }

  return multi;
}

export async function getPageComponent(pagePath: string, componentKey: string) {
  const page = await getPageByPath(pagePath);
  if (page) {
    const component = page.blocks
      ?.flatMap((b) => b.components || [])
      .find((c) => c._key === componentKey);

    if (component) {
      return component;
    }
  }

  return null;
}
