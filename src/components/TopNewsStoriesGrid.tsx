import React from 'react';
import { NewsStory } from '@/types/NewsStory';
import ImageTileGrid from '@/components/ImageTileGrid';

type Props = {
  stories: NewsStory[];
};

export function TopNewsStoriesGrid({ stories }: Props) {
  return (
    <ImageTileGrid
      _key={'moreNews'}
      _type={'imageTileGrid'}
      palette={'white'}
      images={stories.map((s) => ({
        _key: s._id,
        image: s.previewImage,
        label: s.title,
        url: `/news/story/${s.slug.current}`,
      }))}
    />
  );
}
