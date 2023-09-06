import { createClient, groq } from 'next-sanity';
import { Image } from 'sanity';
import { LunchMenu } from '@/types/LunchMenu';
import { Hero } from '@/types/Hero';
import imageUrlBuilder from '@sanity/image-url';

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
    day,
    date,
    items[]
  }`,
  );
}

export async function getHeroes(): Promise<Hero[]> {
  return client.fetch(
    groq`*[_type == "hero"]{
    _id,
    color,
    title,
    text,
    image,
    alt
  }`,
  );
}

export async function getHomePage() {
  return client.fetch(groq`*[_type == "homePage"]{
    _id,
    hero {  
      "color": backgroundColor.label,
      title,
      text,
      image,
      alt
    }
  }
`);
}
