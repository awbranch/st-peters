import { createClient, groq } from 'next-sanity';
import { File, Image } from 'sanity';
import imageUrlBuilder from '@sanity/image-url';
import { LunchMenu } from '@/types/LunchMenu';
import { Page } from '@/types/Page';
import { NewsStory } from '@/types/NewsStory';
import { Footer } from '@/types/Footer';
import { Header } from '@/types/Header';
import { ShareableBlock } from '@/types/ShareableBlock';

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
    { next: { revalidate: 5 } },
  );
}

export async function getPages() {
  let pages = await client.fetch<Page[]>(
    groq`*[_type == "page"]`,
    {},
    { next: { revalidate: 5 } },
  );
  pages.forEach((p) => addBackgroundColor(p));
  return pages;
}

export async function getPageByPath(path: string[]) {
  let page = await client.fetch<Page>(
    groq`*[_type == "page" && path == $path][0]`,
    {
      path: '/' + path.join('/'),
    },
    { next: { revalidate: 5 } },
  );
  addBackgroundColor(page);
  return page;
}

/**
 * It's helpful for blocks to know the background color of the section when displaying
 * @param page
 */
function addBackgroundColor(page: Page) {
  if (page) {
    page?.sections?.forEach((section) => {
      section?.blocks?.forEach((block) => {
        if (section.background) {
          block.background = { ...section.background };
        }
      });
    });
  }
}

export async function getTopNewsStories(count: number) {
  return client.fetch<NewsStory[]>(
    groq`*[_type == "newsStory"] | order(date desc)[0..${count}]`,
    {},
    { next: { revalidate: 5 } },
  );
}

export type NewsStoryTimeRange = 'all' | 'past' | 'future';

export async function getAllNewsStories() {
  return client.fetch<NewsStory[]>(
    groq`*[_type == "newsStory"] | order(date desc)`,
    {},
    { next: { revalidate: 5 } },
  );
}

export async function getNewsStories(
  category: string,
  timeRange: NewsStoryTimeRange = 'all',
) {
  const dateQuery =
    timeRange === 'past'
      ? "&& dateTime(date + 'T00:00:00Z') < dateTime(now())"
      : timeRange === 'future'
      ? "&& dateTime(date + 'T00:00:00Z') > dateTime(now()) - 60*60*24*1"
      : '';

  const orderDir = timeRange === 'future' ? 'asc' : 'desc';

  return client.fetch<NewsStory[]>(
    groq`*[_type == "newsStory" && category == $category ${dateQuery}] | order(date ${orderDir})`,
    {
      category,
    },
    { next: { revalidate: 5 } },
  );
}

export async function getNewsStory(slug: string) {
  return client.fetch<NewsStory>(
    groq`*[_type == "newsStory" && slug.current == $slug][0]`,
    {
      slug,
    },
    { next: { revalidate: 5 } },
  );
}

export async function getHeader() {
  return client.fetch<Header>(
    groq`*[_type == "header"][0]`,
    {},
    { next: { revalidate: 5 } },
  );
}

export async function getFooter() {
  return client.fetch<Footer>(
    groq`*[_type == "footer"][0]`,
    {},
    { next: { revalidate: 5 } },
  );
}

export async function getDocument(id: string) {
  return client.fetch<ShareableBlock>(
    groq`*[_id == $id][0]`,
    {
      id,
    },
    { next: { revalidate: 5 } },
  );
}
