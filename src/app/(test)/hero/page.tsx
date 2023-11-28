import React from 'react';
import Container from '@/components/Container';
import ResponsiveImage from '@/components/ResponsiveImage';

import { Image } from '@/types/Image';

const heroImage: Image = {
  crop: {
    top: 0,
    left: 0.04154302670623146,
    bottom: 0.24020178041542983,
    _type: 'sanity.imageCrop',
    right: 0,
  },
  hotspot: {
    y: 0.37377151335311576,
    height: 0.7230326409495553,
    _type: 'sanity.imageHotspot',
    width: 0.9584569732937686,
    x: 0.5207715133531158,
  },
  _type: 'image',
  alt: "Two St. Peter's Kitchen customers at a table with their arms around each other.",
  asset: {
    _type: 'reference',
    _ref: 'image-d2c2833cc5abb56cb61f010eaef724177bced72f-1766x2137-jpg',
  },
};

export default async function Hero() {
  return (
    <Container>
      <main className={'px-10'}>
        <div></div>

        <div className="bg-gray-50">
          <div className="lg:relative">
            <div className="mx-auto w-full max-w-7xl pb-20 pt-16 text-center lg:py-48 lg:text-left">
              <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  <span className="block">Nourishment.</span>
                  <span className="block">Community.</span>
                  <span className="block text-pink-600">Hope.</span>
                </h1>
                <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl [text-wrap:balance]">
                  At St. Peter’s Kitchen, we are a community-centered
                  environment geared towards sharing hope and fighting hunger in
                  downtown Rochester, New York.
                </p>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-full shadow">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-full border border-transparent bg-pink-600 px-8 py-3 text-base font-medium text-white hover:bg-pink-800 md:px-10 md:py-4 md:text-lg"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] w-full lg:h-full lg:w-1/2">
              <ResponsiveImage
                image={heroImage}
                sizes={'100vw'}
                className={'h-full'}
              />
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}
