import { createClient, groq } from 'next-sanity';
import { Image, File } from 'sanity';
import imageUrlBuilder from '@sanity/image-url';
import { LunchMenu } from '@/types/LunchMenu';
import { HomePage } from '@/types/HomePage';
import { AboutPage } from '@/types/AboutPage';
import { Program } from '@/types/Program';
import { TeamMember } from '@/types/TeamMember';
import { NewsStory } from '@/types/NewsStory';

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
    { next: { revalidate: 60 * 60 } }, // Revalidate every hour
  );
}

export async function getHomePage() {
  return client.fetch<HomePage>(groq`*[_type == "homePage"][0]`);
}

export async function getPrograms() {
  return client.fetch<Program[]>(
    groq`*[_type == "program"] | order(order asc)`,
  );
}

export async function getProgram(slug: string) {
  return client.fetch<Program>(
    groq`*[_type == "program" && slug.current == $slug]{
     ...,
     donationRequest-> 
  }[0]`,
    {
      slug,
    },
  );
}

export async function getAboutPage() {
  return client.fetch<AboutPage>(groq`*[_type == "aboutPage"]{
  history,
  map,
  team,
  jobOpenings,
  "documents": dokuments { title, description, "documents": dokuments }
}[0]`);
}

export async function getStaffMembers() {
  return client.fetch<TeamMember[]>(
    groq`*[_type == "staffMember"] | order(lastName asc, firstName asc)`,
  );
}

export async function getBoardMembers() {
  return client.fetch<TeamMember[]>(
    groq`*[_type == "boardMember"] | order(lastName asc, firstName asc)`,
  );
}

export async function getCurrentEvents() {
  return client.fetch<NewsStory[]>(
    groq`*[_type == "newsStory" && category == "event" && dateTime(date + 'T00:00:00Z') > dateTime(now()) - 60*60*24*1] | order(date asc)`,
    {},
    { next: { revalidate: 60 * 60 * 4 } },
  );
}

export async function getPastEvents() {
  return client.fetch<NewsStory[]>(
    groq`*[_type == "newsStory" && category == "event" && dateTime(date + 'T00:00:00Z') <= dateTime(now()) - 60*60*24*1] | order(date desc)`,
    {},
    { next: { revalidate: 60 * 60 * 4 } },
  );
}

export async function getTopNewsStories(count: number) {
  return client.fetch<NewsStory[]>(
    groq`*[_type == "newsStory"] | order(date desc)[0..${count}]`,
  );
}

export async function getNewsStories(category: string) {
  return client.fetch<NewsStory[]>(
    groq`*[_type == "newsStory" && category == $category]{
     ...,
     donationRequest->
  }`,
    {
      category,
    },
  );
}

export async function getNewsStory(slug: string) {
  return client.fetch<NewsStory>(
    groq`*[_type == "newsStory" && slug.current == $slug]{
     ...,
     donationRequest->
  }[0]`,
    {
      slug,
    },
  );
}
