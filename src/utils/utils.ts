import { NewsStory } from '@/types/NewsStory';

export function splitText(text: string) {
  return text
    .split(/\n+/)
    .filter((t) => t.length > 0)
    .map((t) => t.trim());
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

export function isFullyQualifiedURL(url: string) {
  const pattern = /^(https?:\/\/).*$/i;
  return pattern.test(url);
}
