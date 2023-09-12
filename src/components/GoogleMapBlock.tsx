import React from 'react';
import Block from '@/components/Block';
import { GoogleMap } from '@/types/GoogleMap';
import RichText from '@/components/RichText';
interface Props {
  googleMap: GoogleMap;
}

export default function GoogleMapBlock({ googleMap }: Props) {
  return (
    <Block color="pink">
      <h1 className="text-xl mb-3">{googleMap.title}</h1>
      <RichText document={googleMap.text} />
      <iframe
        className="mt-3"
        id="google-map"
        src={googleMap.embedLink}
        width="100%"
        height="680"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Block>
  );
}
