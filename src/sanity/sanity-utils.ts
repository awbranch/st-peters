import { createClient, groq } from 'next-sanity';
import { Image } from 'sanity';
import imageUrlBuilder from '@sanity/image-url';
import { LunchMenu } from '@/types/LunchMenu';
import { HomePage } from '@/types/HomePage';
import { AboutPage } from '@/types/AboutPage';
import { Program } from '@/types/Program';

export const client = createClient({
  projectId: 't6t8tv0q',
  dataset: 'production',
  apiVersion: '2023-08-28',
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(image: Image) {
  return builder.image(image);
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

export async function getLunchMenus(): Promise<LunchMenu[]> {
  return client.fetch(
    groq`*[_type == "lunchMenu"]{
    _id,
    date,
    menu
  }`,
  );
}

export async function getHomePage(): Promise<HomePage> {
  return client.fetch(groq`*[_type == "homePage"]{
    _id,
    hero,
    lunchPlan {
      ...,
      "menus": *[_type == "lunchMenu" && dateTime(date + 'T00:00:00Z') > dateTime(now()) - 60*60*24*2]{menu, date} | order(date asc)
    },
    displayHighlight1,
    highlight1,
    impact,
    programGrid {
      ...,
      "programs": *[_type == "program"] | order(order asc)
    },
    displayHighlight2,
    highlight2,
    displayInstagram,
    instagram
  }[0]`);
}

export async function getProgram(slug: string): Promise<Program> {
  return client.fetch(groq`*[_type == "program" && slug.current == $slug][0]`, {
    slug,
  });
}

export async function getAboutPage(): Promise<AboutPage> {
  return client.fetch(groq`*[_type == "aboutPage"]{
    _id,
    history,
    map
  }[0]`);
}
