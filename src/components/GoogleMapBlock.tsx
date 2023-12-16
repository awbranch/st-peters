import React from 'react';
import Block from '@/components/Block';
import RichText from '@/components/RichText';
import { GoogleMapBlockConfig } from '@/types/GoogleMapBlockConfig';

export default function GoogleMapBlock({
  slug,
  background,
  text,
  embedURL,
}: GoogleMapBlockConfig) {
  return (
    <Block slug={slug.current} color={background.label}>
      <RichText text={text} />
      <iframe
        className="mt-3"
        id="google-map"
        src={embedURL}
        width="100%"
        height="680"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Block>
  );
}
